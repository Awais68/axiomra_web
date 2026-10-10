import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import http from "node:http";
import { ORIGIN, startApp } from "./helpers.js";
import { fake } from "./fakeRedis.js";

// A visitor who leaves while the server is still retrieving (a cold start, a
// slow network) is retried by the widget. That attempt must not leave a
// reservation behind or call the model.
const sdk = vi.hoisted(() => ({ runs: 0, releaseRag: null }));

vi.mock("ioredis", async () => ({ Redis: (await import("./fakeRedis.js")).FakeRedis }));
vi.mock("rate-limit-redis", async () => ({
  RedisStore: (await import("./fakeRedis.js")).FakeRedisStore,
}));
vi.mock("../rag/context.js", () => ({
  referenceContext: ({ base }) =>
    new Promise((resolve) => {
      sdk.releaseRag = () => resolve({ instructions: base, chunks: [], fallback: null });
    }),
}));
vi.mock("@openai/agents", () => ({
  setTracingDisabled() {},
  user: (content) => ({ role: "user", content }),
  assistant: (content) => ({ role: "assistant", content }),
  Agent: class {},
  async run() {
    sdk.runs += 1;
    return {
      async *toTextStream() {
        yield "Hello";
      },
      completed: Promise.resolve(),
      error: null,
    };
  },
}));

let server;
let stop;

beforeAll(async () => {
  delete globalThis.__axiomraRedis;
  let app;
  ({ app, stop } = await startApp({
    NODE_ENV: "production",
    RESEND_API_KEY: "re_test",
    REDIS_URL: "redis://fake:6379",
    OPENAI_API_KEY: "test-key",
    CHAT_DAILY_USD_CAP: "1",
  }));
  server = app.listen(0);
});
afterAll(async () => {
  server.close();
  await stop();
});

const waitFor = async (check) => {
  for (let i = 0; i < 100 && !check(); i += 1) await new Promise((r) => setTimeout(r, 10));
};

describe("chat turn abandoned before the model", () => {
  it("reserves nothing and never calls the model", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const req = http.request({
      port: server.address().port,
      method: "POST",
      path: "/api/chat",
      headers: { "Content-Type": "application/json", Origin: ORIGIN },
    });
    req.on("error", () => {});
    req.end(JSON.stringify({ message: "Hi" }));

    await waitFor(() => sdk.releaseRag);
    req.destroy();
    await new Promise((r) => setTimeout(r, 50));
    sdk.releaseRag();
    await waitFor(() => warn.mock.calls.some(([line]) => /client_gone/.test(line)));

    const today = new Date().toISOString().slice(0, 10);
    expect(fake.data.get(`chat:spend:${today}`) ?? 0).toBe(0);
    expect(sdk.runs).toBe(0);
    expect(warn.mock.calls.flat().join("\n")).toMatch(
      /Chat failure reason=client_gone_before_model .*stage=retrieval/
    );
    warn.mockRestore();
  });
});
