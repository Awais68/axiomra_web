import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import request from "supertest";
import { ORIGIN, nextIp, startApp } from "./helpers.js";
import { fake } from "./fakeRedis.js";

// Render's health checker polls /api/health from a few fixed IPs. It used to
// sit under the API limiter (100 per 15 min per IP), got 429, and Render
// restarted a healthy instance. Booted as deployed: production, shared Redis.
vi.mock("ioredis", async () => ({ Redis: (await import("./fakeRedis.js")).FakeRedis }));
vi.mock("rate-limit-redis", async () => ({
  RedisStore: (await import("./fakeRedis.js")).FakeRedisStore,
}));
vi.mock("@openai/agents", () => ({
  setTracingDisabled() {},
  user: (content) => ({ role: "user", content }),
  assistant: (content) => ({ role: "assistant", content }),
  Agent: class {},
  async run() {
    return {
      async *toTextStream() {
        yield "Hello";
      },
      completed: Promise.resolve(),
      error: null,
      state: { usage: { inputTokens: 10, outputTokens: 5 } },
    };
  },
}));

let app;
let stop;

beforeAll(async () => {
  delete globalThis.__axiomraRedis;
  ({ app, stop } = await startApp({
    NODE_ENV: "production",
    RESEND_API_KEY: "re_test",
    REDIS_URL: "redis://fake:6379",
    OPENAI_API_KEY: "test-key",
    CHAT_DAILY_USD_CAP: "100",
  }));
});
afterAll(() => stop());
beforeEach(() => fake.reset());

async function hammer(path, times, ip) {
  const codes = new Set();
  for (let i = 0; i < times; i += 1) {
    const res = await request(app).get(path).set("X-Forwarded-For", ip);
    codes.add(res.status);
    expect(res.headers).not.toHaveProperty("ratelimit");
  }
  return [...codes];
}

describe("health and status routes are never rate limited", () => {
  it("answers 500 rapid GET /api/health from one IP with 200", async () => {
    expect(await hammer("/api/health", 500, nextIp())).toEqual([200]);
    // Nothing was counted, so the checker cannot fill a bucket in Redis either.
    expect(fake.data.size).toBe(0);
  });

  it.each(["/", "/status.json"])("answers 150 rapid GET %s with 200", async (path) => {
    expect(await hammer(path, 150, nextIp())).toEqual([200]);
  });

  it("still limits the rest of /api at 100 per window", async () => {
    const ip = nextIp();
    const codes = [];
    for (let i = 0; i < 101; i += 1) {
      codes.push((await request(app).get("/api/no-such-route").set("X-Forwarded-For", ip)).status);
    }
    expect(codes.slice(0, 100).every((c) => c === 404)).toBe(true);
    expect(codes[100]).toBe(429);
  });

  it("still limits /api/chat: 429 after 30 turns", async () => {
    const ip = nextIp();
    const codes = [];
    for (let i = 0; i < 31; i += 1) {
      const res = await request(app)
        .post("/api/chat")
        .set("Origin", ORIGIN)
        .set("X-Forwarded-For", ip)
        .send({ messages: [{ role: "user", content: "Hi" }] });
      codes.push(res.status);
    }
    expect(codes.slice(0, 30).every((c) => c === 200)).toBe(true);
    expect(codes[30]).toBe(429);
  });
});
