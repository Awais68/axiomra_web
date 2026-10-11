import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import SpectrumTitle from "./SpectrumTitle";
import useInView from "../../hooks/useInView";
import { services } from "../../data/businessIntelligenceData";
import BiIcon from "./BiIcon";

const ITEMS = services.items;
const N = ITEMS.length;
const STEP = (Math.PI * 2) / N;
// One lap a minute: slow enough to read the labels as they pass.
const SPEED = (Math.PI * 2) / 60000;
const TWEEN_MS = 750;
// How far the ring leans toward the viewer (0 is edge-on, 1 is top-down).
const TILT = 0.42;

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
/** Shortest signed angle from a to b. */
const delta = (a, b) => {
  const d = (b - a) % (Math.PI * 2);
  return d > Math.PI ? d - Math.PI * 2 : d < -Math.PI ? d + Math.PI * 2 : d;
};

/** Spectrum glyph used as the detail panel's visual: code-built, no photo. */
function ServiceGlyph({ item }) {
  return (
    <div className="relative grid aspect-[16/7] place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
      <svg viewBox="0 0 320 140" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="0"
            x2="320"
            y1={30 + i * 20}
            y2={30 + i * 20}
            stroke="white"
            strokeOpacity=".05"
          />
        ))}
        <path
          d="M0 110 C60 104 80 70 130 74 S210 40 250 46 S300 24 320 18"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeOpacity=".7"
        />
        <circle cx="160" cy="70" r="46" fill="none" stroke="#3b82f6" strokeOpacity=".35" />
        <circle cx="160" cy="70" r="62" fill="none" stroke="white" strokeOpacity=".06" />
      </svg>
      <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-inverse/70 shadow-[0_0_40px_-6px_rgba(59,130,246,0.7)] backdrop-blur">
        <BiIcon
          name={item.icon}
          size={30}
          strokeWidth={1.6}
          className="text-[#7dd3fc]"
          aria-hidden="true"
        />
      </span>
    </div>
  );
}

function DetailPanel({ item }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <ServiceGlyph item={item} />
        <h3 className="mt-6 font-display text-2xl font-semibold text-inverse-fg md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-inverse-fg/75 md:text-lg">{item.body}</p>
        <ul className="mt-5 space-y-2.5">
          {item.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-base text-inverse-fg/85">
              <span
                aria-hidden="true"
                className="bi-spectrum-bg mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
              />
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Desktop: eleven nodes orbiting a glowing core. Positions are projected in
 * JS and written straight to each node's transform every frame, so React only
 * renders when the selection changes. Back-half nodes dim, blur and drop out of
 * the tab order; arrow keys walk the whole ring.
 */
function Ring({ active, onSelect }) {
  const [hostRef, inView] = useInView({ rootMargin: "0px" });
  const stageRef = useRef(null);
  const nodeRefs = useRef([]);
  const angle = useRef(-active * STEP);
  const tween = useRef(null);
  const hover = useRef(false);
  const userTookOver = useRef(false);
  const radius = useRef(220);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const layout = useCallback(() => {
    const r = radius.current;
    for (let i = 0; i < N; i++) {
      const el = nodeRefs.current[i];
      if (!el) continue;
      const theta = i * STEP + angle.current;
      const depth = Math.cos(theta); // 1 front, -1 back
      const x = Math.sin(theta) * r;
      const y = depth * r * TILT;
      const t = (depth + 1) / 2;
      el.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(1)}px, ${y.toFixed(
        1
      )}px, 0) scale(${(0.7 + 0.3 * t).toFixed(3)})`;
      el.style.opacity = (0.3 + 0.7 * t).toFixed(3);
      el.style.zIndex = String(Math.round(t * 100));
      const back = depth < -0.05;
      if (el.dataset.back !== String(back)) {
        el.dataset.back = String(back);
        el.tabIndex = back ? -1 : 0;
      }
    }
  }, []);

  // Radius follows the stage width.
  useEffect(() => {
    const stage = stageRef.current;
    const ro = new ResizeObserver(([e]) => {
      radius.current = e.contentRect.width * 0.41;
      layout();
    });
    ro.observe(stage);
    return () => ro.disconnect();
  }, [layout]);

  // The frame loop: tween toward a picked node, otherwise drift. Parked when
  // off screen.
  useEffect(() => {
    if (!inView) return;
    let raf;
    let last = performance.now();
    const frame = (now) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const tw = tween.current;
      if (tw) {
        const p = Math.min((now - tw.start) / TWEEN_MS, 1);
        angle.current = tw.from + tw.by * easeInOut(p);
        if (p >= 1) tween.current = null;
      } else if (!hover.current && !userTookOver.current && !reduced) {
        angle.current += SPEED * dt;
      }
      layout();
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [inView, layout, reduced]);

  const bringToFront = useCallback(
    (i) => {
      userTookOver.current = true;
      const target = -i * STEP;
      const by = delta(angle.current, target);
      if (reduced) {
        angle.current += by;
        layout();
      } else {
        tween.current = { from: angle.current, by, start: performance.now() };
      }
      onSelect(i);
    },
    [layout, onSelect, reduced]
  );

  const onKeyDown = (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + N) % N;
    bringToFront(next);
    // Focus after the node is at the front, so it is tabbable again.
    nodeRefs.current[next]?.focus({ preventScroll: true });
  };

  return (
    <div
      ref={hostRef}
      role="group"
      aria-label="Business intelligence services. Use the left and right arrow keys to rotate."
      onKeyDown={onKeyDown}
      onPointerEnter={() => (hover.current = true)}
      onPointerLeave={() => (hover.current = false)}
      className={`relative ${inView ? "" : "bi-paused"}`}
    >
      <div ref={stageRef} className="relative mx-auto aspect-[16/12] w-full max-w-[680px]">
        {/* Orbit track, squashed by the same tilt as the nodes. */}
        <svg
          viewBox="-100 -75 200 150"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <ellipse
            cx="0"
            cy="0"
            rx="82"
            ry={82 * TILT}
            fill="none"
            stroke="#3b82f6"
            strokeOpacity=".45"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="92"
            ry={92 * TILT}
            fill="none"
            stroke="white"
            strokeOpacity=".06"
          />
        </svg>

        {/* Core */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2">
          <div className="bi-core-glow absolute inset-0 rounded-full bg-[#3b82f6]/30 blur-xl" />
          <div className="absolute inset-[22%] rounded-full border border-white/15 bg-[#3b82f6]/45 shadow-[0_0_60px_rgba(59,130,246,0.6)]" />
          <p className="absolute inset-0 grid place-items-center text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/80">
            Your data
          </p>
        </div>

        {ITEMS.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.id}
              ref={(el) => (nodeRefs.current[i] = el)}
              type="button"
              aria-pressed={selected}
              onClick={() => bringToFront(i)}
              className={`group absolute left-1/2 top-1/2 flex w-36 flex-col items-center gap-2 rounded-2xl px-2 py-3 text-center will-change-transform focus-ring data-[back=true]:pointer-events-none data-[back=true]:blur-[1.5px] xl:w-40`}
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl border backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-300 ${
                  selected
                    ? "border-[#7dd3fc]/70 bg-white/15 shadow-[0_0_32px_-4px_rgba(59,130,246,0.9)]"
                    : "border-white/15 bg-white/[0.06] group-hover:border-white/40 group-hover:bg-white/10"
                }`}
              >
                <BiIcon
                  name={item.icon}
                  size={24}
                  strokeWidth={1.7}
                  className="text-white"
                  aria-hidden="true"
                />
              </span>
              <span
                className={`text-sm font-medium leading-tight transition-opacity duration-300 group-data-[back=true]:opacity-0 ${
                  selected ? "text-white" : "text-white/75"
                }`}
              >
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Mobile and tablet: a horizontal snap-scrolling deck with every detail open. */
function Deck() {
  return (
    <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:-mx-6 sm:px-6">
      {ITEMS.map((item) => {
        return (
          <li
            key={item.id}
            className="w-[82%] max-w-sm shrink-0 snap-center rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/15 bg-white/10">
              <BiIcon
                name={item.icon}
                size={22}
                strokeWidth={1.7}
                className="text-white"
                aria-hidden="true"
              />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-inverse-fg">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-inverse-fg/75">{item.body}</p>
            <ul className="mt-4 space-y-2">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-inverse-fg/85">
                  <span
                    aria-hidden="true"
                    className="bi-spectrum-bg mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default function BiServiceRing() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="bi-services"
      data-nav-tone="dark"
      className="relative overflow-hidden bg-inverse py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          onInverse
          eyebrow={services.eyebrow}
          title={<SpectrumTitle lead={services.titleLead} accent={services.titleAccent} />}
          subtitle={services.subtitle}
        />

        <div className="mt-14 hidden items-center gap-10 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Ring active={active} onSelect={setActive} />
          <div
            aria-live="polite"
            className="rounded-2xl border border-white/10 bg-white/[0.05] p-8 shadow-[0_30px_80px_-30px_rgba(59,130,246,0.45)] backdrop-blur-xl"
          >
            <DetailPanel item={ITEMS[active]} />
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <Deck />
        </div>
      </div>
    </section>
  );
}
