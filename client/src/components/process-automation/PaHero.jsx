import { useEffect, useState } from "react";
import useMounted from "../../lib/useMounted";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, FileText, Loader2 } from "lucide-react";
import FlowCanvas from "./FlowCanvas";
import { hero } from "../../data/processAutomationData";
import { BOOKING_URL } from "../../lib/booking";
import hero1080 from "../../assets/process-automation/hero-1080.webp";
import hero1920 from "../../assets/process-automation/hero-1920.webp";

const EASE = [0.22, 0.61, 0.36, 1];
const STEP_MS = 1400;

/**
 * One invoice moving through the pipeline, played on loop: each step ticks
 * from "running" to done, then the run resets. Descriptive UI, not a metric.
 */
function RunTicker() {
  const reduced = useReducedMotion();
  const { title, steps } = hero.ticker;
  // steps.length means "all done"; one extra beat holds the finished state.
  const [step, setStep] = useState(reduced ? steps.length : 0);

  useEffect(() => {
    if (reduced) return undefined;
    const t = setTimeout(() => setStep((s) => (s + 1) % (steps.length + 2)), STEP_MS);
    return () => clearTimeout(t);
  }, [step, reduced, steps.length]);

  const done = Math.min(step, steps.length);

  return (
    <div className="pa-glass w-full max-w-sm rounded-2xl p-5 text-white">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 font-display text-base font-semibold">
          <FileText size={17} className="text-[#FB923C]" aria-hidden="true" />
          {title}
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider transition-colors duration-500 ${
            done === steps.length ? "bg-[#2DE8D5] text-[#04121A]" : "bg-white/10 text-white/75"
          }`}
        >
          {done === steps.length ? "Automated" : "Running"}
        </span>
      </div>
      <ol className="mt-4 space-y-2.5">
        {steps.map((s, i) => {
          const state = i < done ? "done" : i === done ? "active" : "todo";
          return (
            <li key={s} className="flex items-center gap-3 text-sm">
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                  state === "done"
                    ? "border-[#2DE8D5] bg-[#2DE8D5] text-[#04121A]"
                    : state === "active"
                      ? "border-[#FB923C] text-[#FB923C]"
                      : "border-white/20 text-white/30"
                }`}
              >
                {state === "done" ? (
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                ) : state === "active" ? (
                  <Loader2 size={13} className="animate-spin" aria-hidden="true" />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                )}
              </span>
              <span className={state === "todo" ? "text-white/45" : "text-white/90"}>{s}</span>
            </li>
          );
        })}
      </ol>
      {/* Progress rail: a solid bar that grows, no gradient. */}
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full bg-[#2DE8D5]"
          animate={{ width: `${(done / steps.length) * 100}%` }}
          transition={{ duration: reduced ? 0 : 0.5, ease: EASE }}
        />
      </div>
    </div>
  );
}

/**
 * Full-bleed photo hero, a cousin of Home's: one photo instead of a carousel,
 * opened through a shutter clip-path on first paint and kept alive with a slow
 * push-in, with the three.js pipeline running across the right half. The copy
 * uses the CSS [data-fade] entrance so the H1 (the LCP element) never waits
 * for JS.
 */
export default function PaHero() {
  const reduced = useReducedMotion();
  // The ticker swaps text on a timer; mounting it after hydration keeps the
  // prerendered HTML and the first client render identical.
  const mounted = useMounted();

  return (
    <section data-nav-tone="dark" className="pa-dark relative isolate overflow-hidden bg-inverse">
      <div className="pa-hero-shutter absolute inset-0 -z-10">
        <img
          src={hero1920}
          srcSet={`${hero1080} 1080w, ${hero1920} 1920w`}
          sizes="100vw"
          alt="Orange robotic arms working along an automated production line"
          width={1920}
          height={1080}
          // React 18 only forwards the lowercase attribute.
          // eslint-disable-next-line react/no-unknown-property
          fetchpriority="high"
          decoding="async"
          className="pa-kenburns h-full w-full object-cover"
        />
        {/* Flat navy veil for legibility: one solid colour, no gradient. */}
        <div aria-hidden="true" className="absolute inset-0 bg-[#070D1F]/75 lg:bg-[#070D1F]/70" />
        <div aria-hidden="true" className="pa-grid absolute inset-0" />
      </div>

      <FlowCanvas className="absolute inset-y-0 right-0 hidden w-[58%] lg:block" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-8xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-32 sm:px-6 md:pt-40 lg:min-h-[860px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-8">
        <div>
          <p
            data-fade="0"
            className="pa-glass mb-7 inline-flex items-center gap-2.5 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-[0.16em] text-white/85 sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#FB923C]" />
            {hero.eyebrow}
          </p>
          <h1
            data-fade="1"
            className="text-balance font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-7xl"
          >
            {hero.titleLead} <span className="text-pa-accent">{hero.titleAccent}</span>
          </h1>
          <p
            data-fade="2"
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            {hero.body}
          </p>
          <div data-fade="3" className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FB923C] px-8 py-4 text-base font-semibold text-[#1A0D02] transition-transform duration-300 hover:-translate-y-0.5 focus-ring md:text-lg"
            >
              {hero.ctaText}
              <ArrowUpRight
                size={19}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#pa-services"
              className="pa-glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/15 focus-ring md:text-lg"
            >
              {hero.secondaryCtaText}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[248px] justify-center lg:h-full lg:items-end lg:justify-end lg:pb-6">
          <AnimatePresence>
            {mounted && (
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 30 }}
                animate={reduced ? { opacity: 1 } : { opacity: 1, y: [0, -8, 0] }}
                transition={
                  reduced
                    ? undefined
                    : {
                        opacity: { duration: 0.7, delay: 0.9, ease: EASE },
                        y: { duration: 6, delay: 0.9, repeat: Infinity, ease: "easeInOut" },
                      }
                }
                className="w-full max-w-sm"
              >
                <RunTicker />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
