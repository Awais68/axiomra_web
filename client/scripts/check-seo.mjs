/**
 * Post-build guard for the head tags in the prerendered HTML. Every failure
 * it catches ships silently otherwise: the page still renders, and only a
 * crawler or a link preview sees the wrong tags.
 *
 *  1. Each sitemap page has exactly one title, description, canonical,
 *     og:title, og:description and og:url, and the canonical and og:url name
 *     the page's own sitemap URL.
 *  2. No two pages share a title or description (the symptom of index.html's
 *     defaults leaking into every page).
 *  3. JSON-LD blocks parse, and no sitemap page is noindex.
 *  4. The empty SPA shells are noindex in public/_headers, and no noindex
 *     rule there matches a prerendered page.
 *
 * Long titles and descriptions are reported but do not fail the build.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const urls = [
  ...readFileSync(path.join(dist, "sitemap.xml"), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g),
].map((m) => m[1]);

const problems = [];
const warnings = [];

// Cloudflare Pages matches _headers against the request path, so the rewritten
// shell routes need their own entries. Each block is a path line followed by
// indented header lines; `*` matches anything, `:name` one segment.
const headers = readFileSync(path.join(root, "public/_headers"), "utf8");
const noindexRules = headers
  .split(/\n(?=\S)/)
  .map((block) => block.split("\n"))
  .filter(
    ([route, ...lines]) =>
      route.startsWith("/") && lines.some((l) => /^\s+X-Robots-Tag:.*noindex/i.test(l))
  )
  .map(([route]) => {
    const pattern = route
      .trim()
      .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\*/g, ".*")
      .replace(/:\w+/g, "[^/]+");
    return { route: route.trim(), re: new RegExp(`^${pattern}$`) };
  });
const titles = new Map();
const descriptions = new Map();

const decode = (s) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
const tags = (head, re) => [...head.matchAll(re)].map((m) => decode(m[1]));
const metaRe = (attr, name) =>
  new RegExp(`<meta\\s[^>]*${attr}="${name}"[^>]*\\scontent="([^"]*)"`, "g");

for (const loc of urls) {
  const pathname = new URL(loc).pathname;
  const file = pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`;
  let html;
  try {
    html = readFileSync(path.join(dist, file), "utf8");
  } catch {
    problems.push(`${pathname}: ${file} missing`);
    continue;
  }
  const head = html.slice(0, html.indexOf("</head>"));
  const one = (label, values) => {
    if (values.length !== 1) problems.push(`${pathname}: ${values.length} ${label}`);
    return values[0];
  };

  const title = one("<title>", tags(head, /<title[^>]*>([^<]*)<\/title>/g));
  const description = one("meta description", tags(head, metaRe("name", "description")));
  const canonical = one("canonical", tags(head, /<link\s[^>]*rel="canonical"[^>]*href="([^"]*)"/g));
  one("og:title", tags(head, metaRe("property", "og:title")));
  one("og:description", tags(head, metaRe("property", "og:description")));
  const ogUrl = one("og:url", tags(head, metaRe("property", "og:url")));

  if (canonical && canonical !== loc)
    problems.push(`${pathname}: canonical ${canonical} != ${loc}`);
  if (ogUrl && ogUrl !== loc) problems.push(`${pathname}: og:url ${ogUrl} != ${loc}`);
  if (/<meta\s[^>]*name="robots"[^>]*noindex/.test(head))
    problems.push(`${pathname}: noindex but in sitemap`);
  const blocking = noindexRules.find(({ re }) => re.test(pathname));
  if (blocking)
    problems.push(`${pathname}: prerendered but _headers rule ${blocking.route} sets noindex`);

  for (const [, json] of head.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
  )) {
    try {
      JSON.parse(json);
    } catch (err) {
      problems.push(`${pathname}: JSON-LD does not parse (${err.message})`);
    }
  }

  if (title) {
    if (titles.has(title)) problems.push(`${pathname}: same <title> as ${titles.get(title)}`);
    else titles.set(title, pathname);
    if (title.length > 60) warnings.push(`${pathname}: title ${title.length} chars`);
  }
  if (description) {
    if (descriptions.has(description))
      problems.push(`${pathname}: same description as ${descriptions.get(description)}`);
    else descriptions.set(description, pathname);
    if (description.length > 160)
      warnings.push(`${pathname}: description ${description.length} chars`);
  }
}

for (const route of ["/spa", "/404", "/blogs", "/blogs/*", "/admin", "/admin/*"]) {
  if (!noindexRules.some((r) => r.route === route))
    problems.push(`_headers: ${route} is not noindex`);
}

if (warnings.length) console.warn(`seo: ${warnings.length} warnings\n  ` + warnings.join("\n  "));
if (problems.length) {
  console.error(`seo: ${problems.length} problems\n  ` + problems.join("\n  "));
  process.exit(1);
}
console.log(`seo: ${urls.length} pages OK`);
