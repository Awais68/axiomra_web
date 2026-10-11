import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const load = async () => (await import("./wakeServer.js")).wakeServerWhenIdle;

beforeEach(() => {
  vi.resetModules();
  sessionStorage.clear();
  window.requestIdleCallback = (cb) => cb();
});

afterEach(() => {
  delete window.requestIdleCallback;
  vi.restoreAllMocks();
});

describe("wakeServerWhenIdle", () => {
  it("pings /api/health once per session, without reading the response", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null));
    const wake = await load();
    wake();
    wake();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toMatch(/\/api\/health$/);
    expect(fetchMock.mock.calls[0][1]).toMatchObject({ mode: "no-cors" });
  });

  it("waits for the browser to be idle", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null));
    let idle;
    window.requestIdleCallback = (cb) => (idle = cb);
    (await load())();
    expect(fetchMock).not.toHaveBeenCalled();
    idle();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("swallows a failed ping", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new TypeError("Failed to fetch"));
    const wake = await load();
    expect(() => wake()).not.toThrow();
    // An unhandled rejection here would fail the run.
    await new Promise((r) => setTimeout(r, 0));
  });
});
