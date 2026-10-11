import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { loadAnalytics, trackPageView } from "./analytics";

const gtagScript = () => document.head.querySelector('script[src*="googletagmanager.com/gtag/js"]');
const entries = () => window.dataLayer.map((args) => Array.from(args));

describe("analytics", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    delete window.dataLayer;
    delete window.gtag;
    // jsdom has no requestIdleCallback; stand one in so the idle path is used.
    window.requestIdleCallback = vi.fn((cb) => setTimeout(cb, 50));
  });

  afterEach(() => {
    // Fire any listeners a test left on window, so the next test starts clean.
    window.dispatchEvent(new Event("pointermove"));
    vi.runAllTimers();
    document.head.querySelectorAll('script[src*="gtag/js"]').forEach((s) => s.remove());
    delete window.requestIdleCallback;
    vi.useRealTimers();
  });

  it("queues config without the automatic page_view", () => {
    loadAnalytics();
    expect(entries()).toContainEqual(["config", "G-7K0S79CJJX", { send_page_view: false }]);
  });

  it("never loads gtag.js without an interaction", () => {
    loadAnalytics();
    vi.advanceTimersByTime(60_000);
    expect(gtagScript()).toBeNull();
  });

  it("loads gtag.js on the next idle period after the first interaction, once", () => {
    loadAnalytics();
    window.dispatchEvent(new Event("pointermove"));
    // Not from inside the handler: that long task would sit on the interaction.
    expect(gtagScript()).toBeNull();
    expect(window.requestIdleCallback).toHaveBeenCalledTimes(1);

    window.dispatchEvent(new Event("scroll"));
    window.dispatchEvent(new Event("keydown"));
    expect(window.requestIdleCallback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(50);
    expect(document.head.querySelectorAll('script[src*="gtag/js"]')).toHaveLength(1);
  });

  it("falls back to a timeout without requestIdleCallback", () => {
    delete window.requestIdleCallback;
    loadAnalytics();
    window.dispatchEvent(new Event("touchstart"));
    expect(gtagScript()).toBeNull();
    vi.advanceTimersByTime(200);
    expect(gtagScript()).not.toBeNull();
  });

  it("records the URL at the moment of the page view, with the given title", () => {
    loadAnalytics();
    window.history.pushState({}, "", "/about?ref=x");
    trackPageView("About | Axiomra");
    window.history.pushState({}, "", "/later");

    expect(entries()).toContainEqual([
      "event",
      "page_view",
      { page_location: "http://localhost:3000/about?ref=x", page_title: "About | Axiomra" },
    ]);
  });

  it("does nothing before analytics is set up", () => {
    expect(() => trackPageView("Home")).not.toThrow();
  });
});
