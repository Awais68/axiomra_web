import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "../motion/Reveal";
import PaIcon from "./PaIcon";
import { stats } from "../../data/processAutomationData";

/** Counts up once on first view. The final value is in the HTML for crawlers and no-JS. */
function CountUp({ value, suffix }) {
  const ref = useRef(null);
  // Armed just before it scrolls in, so the full value never flashes first.
  const inView = useInView(ref, { once: true, margin: "0px 0px 120px 0px" });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!inView || reduced) return undefined;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
      {suffix}
    </span>
  );
}

/** Stat cards on a tinted panel, then a row of glass guarantee chips. */
export default function PaStats() {
  return (
    <section className="pa-grid-light relative bg-pa-panel py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          as="h2"
          className="text-center font-display text-2xl font-semibold text-content md:text-4xl"
        >
          {stats.title}
        </Reveal>
        <dl className="mt-10 grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface-card md:grid-cols-4">
          {stats.items.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center px-4 py-8 text-center md:py-10 ${
                i % 2 === 1 ? "border-l border-line" : ""
              } ${i >= 2 ? "border-t border-line md:border-t-0" : ""} ${
                i === 2 ? "md:border-l" : ""
              }`}
            >
              <dt className="order-2 mt-2 text-sm text-content-dim md:text-base">{s.label}</dt>
              <dd className="order-1 font-display text-4xl font-semibold text-pa-accent md:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {stats.badges.map((b, i) => (
            <Reveal
              as="li"
              key={b.title}
              delay={i * 0.06}
              className="pa-glass-light flex items-center gap-3 rounded-2xl px-4 py-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-inverse text-[#13D4D4]">
                <PaIcon name={b.icon} size={17} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-content">{b.title}</span>
                <span className="block text-xs text-content-faint">{b.line}</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
