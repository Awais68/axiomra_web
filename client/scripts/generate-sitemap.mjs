/**
 * Post-build step (runs after `vite build`):
 *
 *  1. Writes dist/sitemap.xml from src/seo/sitemapRoutes.js.
 *  2. Copies dist/index.html to dist/404.html. Cloudflare Pages serves that
 *     file, with a real 404 status, for any path that is neither a file nor a
 *     public/_redirects rule, so the SPA boots and shows the NotFound page.
 *     Without a 404.html, Pages would instead serve index.html with a 200 for
 *     every unknown URL.
 *  3. Fails the build if a sitemap URL matches a public/_redirects rule.
 *     Pages applies those rules even when a static file exists, so the
 *     prerendered page would be swapped for the empty shell (a 200 rewrite) or
 *     sent elsewhere (a 3xx), and Google would index the wrong thing without
 *     any warning. Every sitemap URL is prerendered by prerender.mjs, which is
 *     what gives it a 200.
 */
import { execFileSync } from "node:child_process";
import { copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createServer } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE_URL = (process.env.VITE_SITE_URL || "https://axiomra.co").replace(/\/$/, "");

// The route list imports data files that import images, so load it through
// Vite rather than plain Node.
const vite = await createServer({
  root,
  logLevel: "error",
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
});
let routes;
try {
  const mod = await vite.ssrLoadModule("/src/seo/sitemapRoutes.js");
  routes = mod.default();
} finally {
  await vite.close();
}

function git(args) {
  try {
    return execFileSync("git", args, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
}

// CLI deploys have no .git, and in a shallow clone the boundary commit looks
// like it touched every file. A wrong lastmod teaches crawlers to ignore it,
// so leave it out unless we have full history.
const hasFullHistory = git(["rev-parse", "--is-shallow-repository"]) === "false";

/** Last commit date of the given files, or null when it can't be trusted. */
function lastmod(sources) {
  if (!hasFullHistory) return null;
  return git(["log", "-1", "--format=%cs", "--", ...sources]) || null;
}

// Mirrors how Cloudflare Pages matches _redirects sources: ":name" is one
// segment, "*" is anything (slashes included).
function sourceToRegExp(source) {
  const pattern = source
    .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\*/g, ".*")
    .replace(/:\w+/g, "[^/]+");
  return new RegExp(`^${pattern}$`);
}

const redirects = readFileSync(path.join(root, "public", "_redirects"), "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"))
  .map((line) => line.split(/\s+/)[0]);
const shadowed = routes
  .map((r) => r.path)
  .filter((p) => redirects.some((source) => sourceToRegExp(source).test(p)));
if (shadowed.length) {
  console.error(
    "sitemap: these pages match a rule in public/_redirects, which would replace their prerendered HTML:\n  " +
      shadowed.join("\n  "),
  );
  process.exit(1);
}

const seen = new Set();
const urls = routes.map(({ path: p, sources }) => {
  if (seen.has(p)) throw new Error(`sitemap: duplicate route ${p}`);
  seen.add(p);
  const date = lastmod(sources);
  const lastmodTag = date ? `\n    <lastmod>${date}</lastmod>` : "";
  return `  <url>\n    <loc>${SITE_URL}${p}</loc>${lastmodTag}\n  </url>`;
});

writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);
copyFileSync(path.join(dist, "index.html"), path.join(dist, "404.html"));

console.log(`sitemap: ${urls.length} URLs written to dist/sitemap.xml; dist/404.html created`);
