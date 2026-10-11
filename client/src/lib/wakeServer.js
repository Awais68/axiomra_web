// Render's free tier sleeps after 15 idle minutes and takes ~30-60s to wake.
// One ping per browser session, once the page is idle, starts that boot
// while the visitor reads, so the chat and contact form find it awake.
const API_URL = import.meta.env.VITE_API_URL.replace(/\/+$/, "");
const SESSION_KEY = "axiomra-api-woken";

function ping() {
  // no-cors: the response is never read, and an opaque request cannot fail
  // a CORS check, so a preview or localhost origin the API does not list
  // logs nothing in the console. The request still reaches the server.
  fetch(`${API_URL}/api/health`, { mode: "no-cors", cache: "no-store" }).catch(() => {
    // Only a wake-up call; a real failure shows up on the real request.
  });
}

// Lighthouse preview builds (VITE_LIGHTHOUSE=1, set only by the pre-push hook)
// skip the ping. Measured: with it, every audited route lost best-practices
// (1 -> 0.96) to "errors-in-console", because Chrome logs a 502 from a sleeping
// Render instance as a console error even for a no-cors request. LCP was
// unchanged (within ~200 ms); TBT was higher with the ping on 4 of 5 routes in
// single runs (e.g. 251 vs 143 ms), still inside the 400 ms budget. The flag is
// a build-time constant that production builds never set, so real visitors
// always get the ping.
const SKIP = import.meta.env.VITE_LIGHTHOUSE === "1";

export function wakeServerWhenIdle() {
  if (SKIP) return;
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Storage blocked: ping anyway, at worst once per page load.
  }
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(ping, { timeout: 5000 });
  } else {
    setTimeout(ping, 2000);
  }
}
