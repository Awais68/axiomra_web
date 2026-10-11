/**
 * Startup environment validation. app.js imports this before anything else,
 * so a misconfigured deploy fails on its first request with a message
 * that names every broken variable, instead of misbehaving later (an open CORS
 * policy, a reset link pointing nowhere).
 *
 * JWT_SECRET is deliberately optional here. Without it only admin sign-in is
 * unavailable (lib/auth.js answers 503); requiring it would take the public
 * contact form down with it.
 */
// Loaded here rather than in app.js: ES imports run before the importing
// module's body, so this file would otherwise see an empty process.env.
import "dotenv/config";
import { z } from "zod";
import { RESEND_KEY_RE } from "../mailer.js";

const optional = z
  .string()
  .trim()
  .transform((v) => v || undefined)
  .optional();

// An origin is scheme://host[:port] with no path, and no wildcards at all:
// app.js matches exactly, and any `*.vercel.app` pattern could be satisfied by
// a project in someone else's Vercel account (see the note in app.js).
const ORIGIN_RE = /^https?:\/\/[a-z0-9]([a-z0-9.-]*[a-z0-9])?(:\d{1,5})?$/i;

const originList = z
  .string()
  .transform((raw) =>
    raw
      .split(",")
      .map((o) => o.trim().replace(/\/+$/, ""))
      .filter(Boolean)
  )
  .superRefine((list, ctx) => {
    if (list.length === 0)
      ctx.addIssue({ code: "custom", message: "must list at least one origin" });
    for (const origin of list) {
      if (!ORIGIN_RE.test(origin)) {
        ctx.addIssue({
          code: "custom",
          message: `"${origin}" is not an exact origin (expected e.g. https://axiomra.co; wildcards are not allowed)`,
        });
      }
    }
  });

// Deployed means NODE_ENV=production (set it on Render); VERCEL is still read
// while the old Vercel backend is being retired.
const isDeployed = (e) => e.NODE_ENV === "production" || Boolean(e.VERCEL);

const baseSchema = z.object({
  MONGO_URI: z.string().trim().min(1, "MONGO_URI is required"),
  // ALLOWED_ORIGINS is the new name; CLIENT_ORIGIN is still read so existing
  // deployments keep working without an env change.
  ALLOWED_ORIGINS: optional,
  CLIENT_ORIGIN: optional,
  JWT_SECRET: optional.refine(
    (v) => v === undefined || v.length >= 32,
    "JWT_SECRET must be at least 32 characters when set"
  ),
  // Read raw here and normalised by adminPanelUrl() below: a bad value only
  // breaks the reset link, so it warns instead of refusing to start.
  ADMIN_PANEL_URL: optional,
  RESEND_API_KEY: optional,
  MAIL_FROM: optional,
  CONTACT_NOTIFY_TO: optional,
  REDIS_URL: optional.refine(
    (v) => v === undefined || /^rediss?:\/\//.test(v),
    "REDIS_URL must start with redis:// or rediss://"
  ),
  OPENAI_API_KEY: optional,
  // Hard ceiling on the chat assistant's model spend per UTC day, in USD.
  CHAT_DAILY_USD_CAP: optional
    .transform((v) => (v === undefined ? undefined : Number(v)))
    .refine(
      (v) => v === undefined || (Number.isFinite(v) && v > 0),
      "CHAT_DAILY_USD_CAP must be a positive number of US dollars"
    ),
  NODE_ENV: optional,
  VERCEL: optional,
});

// Deployed, the rate limiters (login brute-force above all) must count in one
// shared store. Per-instance memory on serverless resets on every cold start
// and splits across concurrent instances, so there is no silent fallback.
const schema = baseSchema.superRefine((e, ctx) => {
  if (isDeployed(e) && !e.REDIS_URL) {
    ctx.addIssue({
      code: "custom",
      path: ["REDIS_URL"],
      message: "REDIS_URL is required in production (rate limits need a shared store)",
    });
  }
  // A paid model with no spend ceiling is not a configuration to start with.
  if (e.OPENAI_API_KEY && e.CHAT_DAILY_USD_CAP === undefined) {
    ctx.addIssue({
      code: "custom",
      path: ["CHAT_DAILY_USD_CAP"],
      message: "CHAT_DAILY_USD_CAP is required when OPENAI_API_KEY is set",
    });
  }
});

/**
 * ADMIN_PANEL_URL is pasted into the reset email, so it must be one absolute
 * http(s) URL. A list or a typo should never take the whole API down, so this
 * warns and keeps the first usable entry; with none, auth.js falls back to the
 * first allowed origin.
 */
function adminPanelUrl(raw, deployed) {
  if (raw === undefined) return undefined;
  const parts = raw
    .split(",")
    .map((p) => p.trim().replace(/\/+$/, ""))
    .filter(Boolean);
  const valid = parts.find((p) => URL.canParse(p) && /^https?:$/.test(new URL(p).protocol));
  if (!valid) {
    console.warn(
      `ADMIN_PANEL_URL "${raw}" has no valid http(s) URL: reset links will use the first allowed origin.`
    );
    return undefined;
  }
  if (parts.length > 1 || parts[0] !== valid) {
    console.warn(
      `ADMIN_PANEL_URL should be a single URL (e.g. https://axiomra.co), not "${raw}": using "${valid}".`
    );
  }
  if (deployed && /^https?:\/\/(localhost|127\.0\.0\.1)(:|\/|$)/i.test(valid)) {
    console.warn(`ADMIN_PANEL_URL is "${valid}" in production: emailed reset links will not open.`);
  }
  return valid;
}

function load() {
  const parsed = schema.safeParse(process.env);
  const issues = parsed.success
    ? []
    : parsed.error.issues.map((i) => `${i.path.join(".") || "env"}: ${i.message}`);

  const rawOrigins =
    process.env.ALLOWED_ORIGINS?.trim() ||
    process.env.CLIENT_ORIGIN?.trim() ||
    "http://localhost:5173";
  const origins = originList.safeParse(rawOrigins);
  if (!origins.success) {
    for (const i of origins.error.issues) issues.push(`ALLOWED_ORIGINS: ${i.message}`);
  }

  if (issues.length) {
    throw new Error(`Invalid environment configuration:\n  - ${issues.join("\n  - ")}`);
  }
  // Email is not worth taking the API down for: without a usable key, leads
  // are still stored and forgot-password answers 503 (see mailer.js).
  const resendKey = parsed.data.RESEND_API_KEY;
  if (!resendKey) {
    console.warn("RESEND_API_KEY is not set: contact and password-reset email are disabled.");
  } else if (!RESEND_KEY_RE.test(resendKey)) {
    console.warn(
      'RESEND_API_KEY does not look like a Resend key (expected "re_..."): contact and password-reset email are disabled.'
    );
  } else if (/@resend\.dev>?$/i.test(parsed.data.MAIL_FROM?.trim() || "@resend.dev")) {
    // Resend's shared test sender only delivers to the Resend account owner, so
    // the admin's reset email is rejected (403) unless a verified domain is used.
    console.warn(
      "MAIL_FROM is not set to a verified domain: Resend will only deliver to the account owner's address, so password-reset email to the admin will fail."
    );
  }
  return {
    ...parsed.data,
    ADMIN_PANEL_URL: adminPanelUrl(parsed.data.ADMIN_PANEL_URL, isDeployed(parsed.data)),
    allowedOrigins: origins.data,
  };
}

export const env = load();
