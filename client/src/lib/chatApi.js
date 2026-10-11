const API_URL = import.meta.env.VITE_API_URL.replace(/\/+$/, "");

// Messages the visitor sees, one per cause the widget can tell apart.
export const CHAT_ERRORS = {
  unavailable: "Chat is unavailable right now.",
  offline: "You seem to be offline. Check your connection and try again.",
  dailyLimit:
    "The assistant has reached its daily limit. Please use the contact form and the team will get back to you.",
  rateLimited: "You're sending messages quickly. Please wait a few minutes and try again.",
  interrupted: "The connection dropped before the reply finished. Please send your message again.",
  stalled: "The assistant is taking too long to reply. Please try again in a moment.",
  generic: "The assistant ran into a problem. Please try again.",
};

/** An error whose message is safe to show the visitor; `kind` names the cause. */
export class ChatError extends Error {
  constructor(kind, message = CHAT_ERRORS[kind] ?? CHAT_ERRORS.generic) {
    super(message);
    this.name = "ChatError";
    this.kind = kind;
  }
}

// A free Render instance takes ~30-60s to wake. Render holds the request
// while it boots, so one attempt may wait that long; the whole send gives up
// after WAKE_BUDGET_MS.
const RESPONSE_TIMEOUT_MS = 35_000;
const WAKE_BUDGET_MS = 60_000;
// With no answer by then, the server is almost certainly cold-starting.
const SLOW_NOTICE_MS = 10_000;
// Once the reply has started, a gap this long between pieces means it stalled.
const STREAM_IDLE_MS = 45_000;
// Waits between attempts; the last one repeats until the budget runs out.
const RETRY_DELAYS_MS = [1500, 3000, 5000];
// Answers that mean "not up yet". A 502/503 from Render's own edge carries no
// CORS headers, so the browser usually reports it as a network error instead;
// both are retried. A 504 is not: the server may have taken the request and
// be working on it, and sending it again could produce a second reply.
const RETRY_STATUSES = new Set([502, 503]);

// The visitor sees a friendly message; in development the console gets the
// real cause, so a CORS or config mistake is not mistaken for a cold start.
function devLog(...args) {
  if (import.meta.env.DEV) console.error("[chat]", ...args);
}

const isOffline = () => typeof navigator !== "undefined" && navigator.onLine === false;

function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timer);
        reject(signal.reason ?? new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  });
}

/**
 * One request, aborted by the caller's signal or by `timeoutMs` without
 * response headers. Resolves to { res } or { retry: kind } for a failure
 * worth another attempt.
 */
async function attempt(init, signal, timeoutMs) {
  const controller = new AbortController();
  const onAbort = () => controller.abort(signal.reason);
  signal?.addEventListener("abort", onAbort, { once: true });
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);

  try {
    // The caller's signal stays linked after this returns: it also has to
    // stop the body stream.
    const res = await fetch(`${API_URL}/api/chat`, { ...init, signal: controller.signal });
    return { res, controller };
  } catch (err) {
    signal?.removeEventListener("abort", onAbort);
    if (signal?.aborted) throw err;
    // A CORS refusal also lands here as "Failed to fetch": check the Network
    // tab for the request's status and the server's ALLOWED_ORIGINS.
    devLog(
      timedOut ? `no response within ${timeoutMs}ms` : "network error (offline, CORS or DNS):",
      timedOut ? "" : err
    );
    return { retry: timedOut ? "timeout" : "network" };
  } finally {
    clearTimeout(timer);
  }
}

async function refusal(res) {
  const data = await res.json().catch(() => null);
  if (res.status === 429) {
    if (data?.code === "daily_cap") return new ChatError("dailyLimit");
    return new ChatError("rateLimited", data?.error || CHAT_ERRORS.rateLimited);
  }
  devLog(`refused with HTTP ${res.status}:`, data?.error ?? "(no JSON body)");
  if (data?.error) return new ChatError("server", data.error);
  if (RETRY_STATUSES.has(res.status)) return new ChatError("unavailable");
  return new ChatError("server", `The assistant is unavailable (${res.status}).`);
}

/**
 * Send the visitor's new message to /api/chat and stream the reply back.
 *
 * The server keeps the conversation history itself; `conversationId` (from
 * the previous reply, or null for a new chat) is all it needs to find it.
 * `onConversation(id)` receives the id to send with the next turn, which is a
 * new one when the old conversation has expired. `onText(chunk)` is called
 * for every streamed piece; `onReplace(text)` when the server swaps the reply
 * for a canned one (a declined request). `onRetry(n)` fires before attempt n;
 * `onSlow()` fires once if no answer has arrived after SLOW_NOTICE_MS.
 *
 * A network error, a timeout or a 502/503 is retried for up to WAKE_BUDGET_MS,
 * and only while no response has arrived; a 504 is never retried. The server reserves budget just before
 * it answers 200, so a retry never doubles a reservation, and a reply that has
 * started is never sent twice.
 * Throws a ChatError whose message is safe to show the visitor.
 */
export async function streamChat(
  { message, conversationId },
  { onConversation, onText, onReplace, onRetry, onSlow, signal }
) {
  const init = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(conversationId ? { message, conversationId } : { message }),
  };

  const deadline = Date.now() + WAKE_BUDGET_MS;
  const slow = setTimeout(() => onSlow?.(), SLOW_NOTICE_MS);
  let res;
  let controller;
  try {
    for (let n = 0; ; n += 1) {
      const timeout = Math.max(1, Math.min(RESPONSE_TIMEOUT_MS, deadline - Date.now()));
      const out = await attempt(init, signal, timeout);
      if (out.res && !RETRY_STATUSES.has(out.res.status)) {
        ({ res, controller } = out);
        break;
      }
      if (out.res) devLog(`attempt ${n + 1}: HTTP ${out.res.status}, retrying`);
      if (isOffline()) throw new ChatError("offline");
      const wait = RETRY_DELAYS_MS[Math.min(n, RETRY_DELAYS_MS.length - 1)];
      if (Date.now() + wait >= deadline) {
        if (out.res) throw await refusal(out.res);
        devLog(`gave up after ${n + 1} attempts in ${WAKE_BUDGET_MS / 1000}s`);
        throw new ChatError("unavailable");
      }
      await sleep(wait, signal);
      onRetry?.(n + 2);
    }
  } finally {
    clearTimeout(slow);
  }

  if (!res.ok || !res.body) throw await refusal(res);

  const id = res.headers.get("X-Conversation-Id");
  if (id) onConversation?.(id);

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let done = false;
  let stalled = false;
  let idle;
  const armIdle = () => {
    clearTimeout(idle);
    idle = setTimeout(() => {
      stalled = true;
      controller.abort();
    }, STREAM_IDLE_MS);
  };

  try {
    armIdle();
    for (;;) {
      let chunk;
      try {
        chunk = await reader.read();
      } catch (err) {
        if (signal?.aborted) throw err;
        throw new ChatError(stalled ? "stalled" : "interrupted");
      }
      if (chunk.done) break;
      armIdle();
      buffer += decoder.decode(chunk.value, { stream: true });

      // Server-sent events are separated by a blank line; the last piece may
      // still be incomplete, so it stays in the buffer.
      const parts = buffer.split("\n\n");
      buffer = parts.pop();
      for (const part of parts) {
        const line = part.trim();
        if (!line.startsWith("data:")) continue;
        let event;
        try {
          event = JSON.parse(line.slice(5));
        } catch {
          throw new ChatError("interrupted");
        }
        if (event.type === "text") onText(event.text);
        else if (event.type === "refusal") onReplace(event.text);
        else if (event.type === "error") throw new ChatError("server", event.error);
        else if (event.type === "done") done = true;
      }
    }
  } finally {
    clearTimeout(idle);
  }

  // The stream closed without the server's "done": the reply was cut short.
  if (!done) throw new ChatError("interrupted");
}

// Render's free tier sleeps after 15 idle minutes. A request when the widget
// opens starts it waking while the visitor is still typing.
const WARM_INTERVAL_MS = 5 * 60 * 1000;
let lastWarm = 0;

export function warmUpChat() {
  const now = Date.now();
  if (now - lastWarm < WARM_INTERVAL_MS) return;
  lastWarm = now;
  fetch(`${API_URL}/api/health`, { method: "GET", cache: "no-store" }).catch(() => {
    // Only a wake-up call; a failure here shows up on the real request.
  });
}
