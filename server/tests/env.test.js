import { afterEach, describe, expect, it, vi } from "vitest";

const BASE = {
  MONGO_URI: "mongodb://127.0.0.1:1/unused",
  CLIENT_ORIGIN: "",
  REDIS_URL: "",
  RESEND_API_KEY: "",
  OPENAI_API_KEY: "",
  CHAT_DAILY_USD_CAP: "",
};
const saved = { ...process.env };

async function loadEnv(vars) {
  vi.resetModules();
  process.env = { ...saved, ...BASE, ...vars };
  return (await import("../lib/env.js")).env;
}

afterEach(() => {
  process.env = { ...saved };
});

describe("environment validation", () => {
  it("keeps production Redis keys unprefixed and namespaces everything else", async () => {
    expect(
      (await loadEnv({ NODE_ENV: "production", REDIS_URL: "redis://x", RESEND_API_KEY: "re_x" }))
        .redisNamespace
    ).toBe("");
    expect((await loadEnv({ NODE_ENV: "development" })).redisNamespace).toBe("dev:");
    expect(
      (await loadEnv({ NODE_ENV: "development", REDIS_NAMESPACE: "staging:" })).redisNamespace
    ).toBe("staging:");
  });

  it("rejects a REDIS_NAMESPACE that could collide with key structure", async () => {
    await expect(loadEnv({ REDIS_NAMESPACE: "a:b:" })).rejects.toThrow(/REDIS_NAMESPACE/);
  });

  it("parses a comma-separated origin list and strips trailing slashes", async () => {
    const env = await loadEnv({ ALLOWED_ORIGINS: "https://a.example/, http://localhost:5173" });
    expect(env.allowedOrigins).toEqual(["https://a.example", "http://localhost:5173"]);
  });

  it("falls back to CLIENT_ORIGIN for older deployments", async () => {
    const env = await loadEnv({ ALLOWED_ORIGINS: "", CLIENT_ORIGIN: "https://b.example" });
    expect(env.allowedOrigins).toEqual(["https://b.example"]);
  });

  it.each([
    ["a bare *", { ALLOWED_ORIGINS: "*" }],
    ["a vercel.app wildcard", { ALLOWED_ORIGINS: "https://axiomra-*.vercel.app" }],
    [
      "a team-scoped wildcard",
      { ALLOWED_ORIGINS: "https://axiomra-*-hamzajiis-projects.vercel.app" },
    ],
    ["an origin with a path", { ALLOWED_ORIGINS: "https://a.example/admin" }],
    ["a short JWT_SECRET", { ALLOWED_ORIGINS: "https://a.example", JWT_SECRET: "short" }],
    ["a non-redis REDIS_URL", { ALLOWED_ORIGINS: "https://a.example", REDIS_URL: "http://x" }],
    ["a missing MONGO_URI", { ALLOWED_ORIGINS: "https://a.example", MONGO_URI: "" }],
  ])("refuses to start with %s", async (_label, vars) => {
    await expect(loadEnv(vars)).rejects.toThrow(/Invalid environment configuration/);
  });
});

describe("REDIS_URL in production", () => {
  it.each([
    ["NODE_ENV=production", { NODE_ENV: "production" }],
    ["on Vercel", { VERCEL: "1" }],
  ])("refuses to start without REDIS_URL (%s)", async (_label, vars) => {
    await expect(loadEnv({ ALLOWED_ORIGINS: "https://a.example", ...vars })).rejects.toThrow(
      /REDIS_URL is required in production/
    );
  });

  it("starts in production when REDIS_URL is set", async () => {
    const env = await loadEnv({
      ALLOWED_ORIGINS: "https://a.example",
      NODE_ENV: "production",
      REDIS_URL: "rediss://default:x@example.upstash.io:6379",
      RESEND_API_KEY: "re_test",
    });
    expect(env.REDIS_URL).toMatch(/^rediss:/);
  });

  it("allows the in-memory store in local development", async () => {
    const env = await loadEnv({ ALLOWED_ORIGINS: "https://a.example", NODE_ENV: "development" });
    expect(env.REDIS_URL).toBeUndefined();
  });
});

describe("RESEND_API_KEY", () => {
  const PROD = {
    ALLOWED_ORIGINS: "https://a.example",
    REDIS_URL: "rediss://default:x@example.upstash.io:6379",
  };

  it("only warns when it is missing in production", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const env = await loadEnv({ ...PROD, NODE_ENV: "production" });
    expect(env.RESEND_API_KEY).toBeUndefined();
    expect(warn).toHaveBeenCalledWith(expect.stringMatching(/RESEND_API_KEY is not set/));
    warn.mockRestore();
  });

  it("only warns when it is not a Resend key", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    await loadEnv({ ...PROD, NODE_ENV: "production", RESEND_API_KEY: "changeme" });
    expect(warn).toHaveBeenCalledWith(expect.stringMatching(/does not look like a Resend key/));
    warn.mockRestore();
  });

  it("starts in production when it is set", async () => {
    const env = await loadEnv({ ...PROD, NODE_ENV: "production", RESEND_API_KEY: "re_test" });
    expect(env.RESEND_API_KEY).toBe("re_test");
  });

  it("only warns in local development", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const env = await loadEnv({ ALLOWED_ORIGINS: "https://a.example", NODE_ENV: "development" });
    expect(env.RESEND_API_KEY).toBeUndefined();
    expect(warn).toHaveBeenCalledWith(expect.stringMatching(/RESEND_API_KEY is not set/));
    warn.mockRestore();
  });
});

describe("chat configuration", () => {
  it("requires CHAT_DAILY_USD_CAP when OPENAI_API_KEY is set", async () => {
    await expect(
      loadEnv({
        ALLOWED_ORIGINS: "https://a.example",
        OPENAI_API_KEY: "sk-x",
        CHAT_DAILY_USD_CAP: "",
      })
    ).rejects.toThrow(/CHAT_DAILY_USD_CAP is required/);
  });

  it.each(["0", "-5", "ten"])("refuses CHAT_DAILY_USD_CAP=%s", async (cap) => {
    await expect(
      loadEnv({
        ALLOWED_ORIGINS: "https://a.example",
        OPENAI_API_KEY: "sk-x",
        CHAT_DAILY_USD_CAP: cap,
      })
    ).rejects.toThrow(/positive number/);
  });

  it("parses the cap as a number", async () => {
    const env = await loadEnv({
      ALLOWED_ORIGINS: "https://a.example",
      OPENAI_API_KEY: "sk-x",
      CHAT_DAILY_USD_CAP: "2.5",
    });
    expect(env.CHAT_DAILY_USD_CAP).toBe(2.5);
  });
});

describe("ADMIN_PANEL_URL", () => {
  const load = (v, extra = {}) =>
    loadEnv({ ALLOWED_ORIGINS: "https://a.example", ADMIN_PANEL_URL: v, ...extra });

  it("warns and keeps the first valid URL of a list instead of refusing to start", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const env = await load("https://axiomra.co/, https://www.axiomra.co");
    expect(env.ADMIN_PANEL_URL).toBe("https://axiomra.co");
    expect(warn).toHaveBeenCalledWith(expect.stringMatching(/should be a single URL/));
    warn.mockRestore();
  });

  it("drops a value with no valid URL so the first allowed origin is used", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const env = await load("not a url");
    expect(env.ADMIN_PANEL_URL).toBeUndefined();
    expect(warn).toHaveBeenCalledWith(expect.stringMatching(/has no valid http\(s\) URL/));
    warn.mockRestore();
  });

  it("warns about a localhost URL in production", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    await load("http://localhost:5173", {
      NODE_ENV: "production",
      REDIS_URL: "rediss://default:x@example.upstash.io:6379",
    });
    expect(warn).toHaveBeenCalledWith(expect.stringMatching(/reset links will not open/));
    warn.mockRestore();
  });
});
