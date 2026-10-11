import { useEffect, useState } from "react";

/**
 * Visibility of the floating buttons. Back to top appears once the visitor is
 * a screen down. On phones the floating buttons also step aside while the
 * visitor scrolls down, so they never sit on the content being read, and come
 * back as soon as they scroll up or reach the end of the page.
 */
export function useFloatingButtons() {
  const [state, setState] = useState({ pastFold: false, scrollingDown: false });
  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const delta = y - lastY;
      // Ignore small jitters (momentum scrolling, address-bar resizes).
      if (Math.abs(delta) > 8) lastY = y;
      const nearBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 80;
      setState((s) => {
        const pastFold = y > window.innerHeight;
        let scrollingDown = Math.abs(delta) > 8 ? delta > 0 : s.scrollingDown;
        if (y < 80 || nearBottom) scrollingDown = false;
        return s.pastFold === pastFold && s.scrollingDown === scrollingDown
          ? s
          : { pastFold, scrollingDown };
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return state;
}

// Phones only: slide a floating button out of the way while scrolling down.
export const STEP_ASIDE = "max-sm:pointer-events-none max-sm:translate-y-24 max-sm:opacity-0";
