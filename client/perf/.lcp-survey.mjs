import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { routes } from "./routes.mjs";
import { GATED_SELECTORS } from "../src/seo/prerenderGate.js";
const server = spawn("npx", ["vite", "preview", "--port", "4174", "--strictPort"], { stdio: "ignore", detached: true });
await new Promise((r) => setTimeout(r, 2500));
const browser = await chromium.launch();
const list = routes().filter((r) => !r.startsWith("/case-studies/") || r.endsWith("demand-forecasting"));
for (const [label, vp] of [["mobile", { width: 412, height: 823 }], ["desktop", { width: 1350, height: 940 }]]) {
  const ctx = await browser.newContext({ viewport: vp });
  for (const route of list) {
    const page = await ctx.newPage();
    await page.addInitScript((gated) => {
      window.__lcp = [];
      new PerformanceObserver((l) => l.getEntries().forEach((e) => {
        const el = e.element;
        let gatedBy = null;
        for (let n = el; n && n.nodeType === 1; n = n.parentElement) for (const s of gated) if (n.matches(s)) { gatedBy ??= s + (n === el ? "" : " (ancestor)"); }
        window.__lcp.push({ t: Math.round(e.startTime), tag: el?.tagName, attrs: el ? [...el.attributes].filter((a) => a.name.startsWith("data-")).map((a) => a.name).join(",") : "", text: (el?.textContent || el?.getAttribute?.("src") || "").trim().slice(0, 40), gatedBy });
      })).observe({ type: "largest-contentful-paint", buffered: true });
    }, GATED_SELECTORS);
    await page.goto("http://localhost:4174" + route, { waitUntil: "load" });
    await page.waitForTimeout(2500);
    const lcp = await page.evaluate(() => window.__lcp);
    const fcp = await page.evaluate(() => Math.round(performance.getEntriesByName("first-contentful-paint")[0]?.startTime ?? -1));
    const last = lcp.at(-1) ?? {};
    console.log(label, route.padEnd(58), "fcp", fcp, "lcp", last.t, last.tag, last.attrs, last.gatedBy ? "GATED:" + last.gatedBy : "", "|", last.text, lcp.length > 1 ? `(first cand ${lcp[0].tag}@${lcp[0].t})` : "");
    await page.close();
  }
  await ctx.close();
}
await browser.close();
process.kill(-server.pid);
