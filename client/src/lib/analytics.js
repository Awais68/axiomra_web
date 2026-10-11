import { afterLoadIdle } from "./idle";

const GA_ID = "G-7K0S79CJJX";
const FIRST_INPUT = ["pointerdown", "keydown", "touchstart", "scroll"];

/**
 * Google Analytics 4, loaded after the page is idle or on the first
 * interaction, whichever comes first. gtag.js is ~175 KB; fetched from <head>
 * it competed with the CSS, fonts and app bundle on mobile and pushed LCP out.
 *
 * The dataLayer and config calls run now, so the page_view is queued from the
 * start and sent as soon as the library arrives.
 */
export function loadAnalytics() {
  window.dataLayer = window.dataLayer || [];
  // gtag.js reads `arguments` objects off the dataLayer, not plain arrays.
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  let cancelIdle = () => {};
  const inject = () => {
    cancelIdle();
    FIRST_INPUT.forEach((e) => window.removeEventListener(e, inject));
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  };
  FIRST_INPUT.forEach((e) => window.addEventListener(e, inject, { once: true, passive: true }));
  cancelIdle = afterLoadIdle(inject, { timeout: 4000 });
}
