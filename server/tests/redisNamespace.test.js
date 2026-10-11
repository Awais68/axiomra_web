import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import request from "supertest";
import { nextIp, startApp } from "./helpers.js";
import { fake } from "./fakeRedis.js";

// Local development pointed at a shared Redis must not touch production's
// rate-limit counters or chat budget, so outside production every key is
// prefixed with "dev:".
vi.mock("ioredis", async () => ({ Redis: (await import("./fakeRedis.js")).FakeRedis }));
vi.mock("rate-limit-redis", async () => ({
  RedisStore: (await import("./fakeRedis.js")).FakeRedisStore,
}));

let app;
let stop;

beforeAll(async () => {
  delete globalThis.__axiomraRedis;
  ({ app, stop } = await startApp({ NODE_ENV: "development", REDIS_URL: "redis://fake:6379" }));
});
afterAll(() => stop());
beforeEach(() => fake.reset());

describe("Redis namespace outside production", () => {
  it("prefixes rate-limit keys with dev:", async () => {
    await request(app).get("/api/no-such-route").set("X-Forwarded-For", nextIp());
    const keys = [...fake.data.keys()];
    expect(keys.length).toBeGreaterThan(0);
    expect(keys.every((k) => k.startsWith("dev:rl:"))).toBe(true);
  });

  it("prefixes chat budget and conversation keys with dev:", async () => {
    const { spendKey, tokensKey } = await import("../lib/chatBudget.js");
    const { conversationKey } = await import("../lib/chatConversations.js");
    expect(spendKey("2026-01-01")).toBe("dev:chat:spend:2026-01-01");
    expect(tokensKey("2026-01-01")).toBe("dev:chat:tokens:2026-01-01");
    expect(conversationKey("abc")).toBe("dev:chat:conv:abc");
  });
});
