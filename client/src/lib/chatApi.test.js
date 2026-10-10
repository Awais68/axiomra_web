import { afterEach, describe, expect, it, vi } from "vitest";
import { ChatError, streamChat, warmUpChat } from "./chatApi";

function sse(events, { status = 200, headers = {} } = {}) {
  const body = new ReadableStream({
    start(controller) {
      const enc = new TextEncoder();
      for (const e of events) controller.enqueue(enc.encode(`data: ${JSON.stringify(e)}\n\n`));
      controller.close();
    },
  });
  return new Response(body, {
    status,
    headers: { "Content-Type": "text/event-stream", ...headers },
  });
}

const json = (status, body) => new Response(JSON.stringify(body), { status });

/** Run streamChat with fake timers, so retry waits and timeouts are instant. */
async function send(handlers = {}) {
  vi.useFakeTimers();
  const text = [];
  const promise = streamChat(
    { message: "Hi", conversationId: null },
    { onText: (t) => text.push(t), ...handlers }
  ).then(
    () => ({ text: text.join("") }),
    (error) => ({ error, text: text.join("") })
  );
  await vi.runAllTimersAsync();
  return promise;
}

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("streamChat", () => {
  it("retries a network error (Render's CORS-less 502) and then streams", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockRejectedValueOnce(new TypeError("Failed to fetch"))
      .mockResolvedValueOnce(sse([{ type: "text", text: "Hello" }, { type: "done" }]));
    const onRetry = vi.fn();
    const out = await send({ onRetry });
    expect(out).toEqual({ text: "Hello" });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(onRetry).toHaveBeenCalledWith(2);
  });

  it("gives up after three 503s with the waking-up message", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockImplementation(async () => new Response("<html>", { status: 502 }));
    const out = await send();
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(out.error).toBeInstanceOf(ChatError);
    expect(out.error.kind).toBe("waking");
  });

  it("retries a request that never answers", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockImplementation(
        (url, { signal }) =>
          new Promise((_, reject) =>
            signal.addEventListener("abort", () => reject(new DOMException("x", "AbortError")))
          )
      );
    const out = await send();
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(out.error.kind).toBe("waking");
  });

  it("shows the daily-limit message without retrying", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(json(429, { error: "limit for today", code: "daily_cap" }));
    const out = await send();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(out.error.kind).toBe("dailyLimit");
    expect(out.error.message).toMatch(/contact form/);
  });

  it("keeps the per-IP rate limit separate from the daily cap", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      json(429, { error: "You're sending messages quickly.", code: "rate_limited" })
    );
    const out = await send();
    expect(out.error.kind).toBe("rateLimited");
  });

  it("never retries once the reply has started", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(sse([{ type: "text", text: "Partial" }]));
    const out = await send();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(out.text).toBe("Partial");
    expect(out.error.kind).toBe("interrupted");
  });

  it("reports offline without retrying", async () => {
    vi.spyOn(navigator, "onLine", "get").mockReturnValue(false);
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockRejectedValue(new TypeError("Failed to fetch"));
    const out = await send();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(out.error.kind).toBe("offline");
  });

  it("stops retrying when the visitor cancels", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new TypeError("Failed to fetch"));
    const controller = new AbortController();
    vi.useFakeTimers();
    const promise = streamChat({ message: "Hi" }, { onText() {}, signal: controller.signal }).catch(
      (e) => e
    );
    await vi.advanceTimersByTimeAsync(100);
    controller.abort();
    expect((await promise).name).toBe("AbortError");
  });
});

describe("warmUpChat", () => {
  it("pings /api/health at most once per interval", () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(json(200, {}));
    warmUpChat();
    warmUpChat();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toMatch(/\/api\/health$/);
  });
});
