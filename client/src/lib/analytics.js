const GA_ID = "G-7K0S79CJJX";
const FIRST_INPUT = ["pointermove", "pointerdown", "touchstart", "scroll", "keydown"];

/**
 * Google Analytics 4, loaded only after the visitor's first interaction.
 * gtag.js is ~175 KB and its evaluation is one long task; loading it on idle
 * still landed inside the load window and cost every page ~500 ms of Total
 * Blocking Time on mobile. Even then it is not injected from the event
 * handler itself, but on the next idle period, so that long task never sits
 * on the first interaction (INP).
 *
 * The automatic page_view is off: page views are queued by trackPageView()
 * with the URL and title of the moment they happened, so the first one is
 * still right when gtag.js arrives after the visitor has moved on. Turn off
 * "Page changes based on browser history events" under GA4 Enhanced
 * Measurement, or SPA navigations after the library loads count twice.
 */
export function loadAnalytics() {
  window.dataLayer = window.dataLayer || [];
  // gtag.js reads `arguments` objects off the dataLayer, not plain arrays.
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });

  const inject = () => {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  };
  const onFirstInput = () => {
    FIRST_INPUT.forEach((e) => window.removeEventListener(e, onFirstInput));
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(inject, { timeout: 2000 });
    } else {
      window.setTimeout(inject, 200);
    }
  };
  FIRST_INPUT.forEach((e) => window.addEventListener(e, onFirstInput, { passive: true }));
}

/** Queues a page_view for the current URL, with the page's own title. */
export function trackPageView(title) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_title: title,
  });
}
