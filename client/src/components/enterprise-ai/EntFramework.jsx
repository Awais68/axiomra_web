import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import EntTitle from "./EntTitle";
import { framework } from "../../data/enterpriseAiData";
import { BOOKING_URL } from "../../lib/booking";

const STEPS = framework.steps;

/**
 * The seven-phase framework as a stepper: a numbered rail you can click, and
 * one glass card at a time with prev/next. Every step title stays on the rail,
 * so the full framework is visible without clicking.
 */
export default function EntFramework() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const reduced = useReducedMotion();
  const step = STEPS[active];

  const go = (next) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };

  return (
    <section
      id="ent-framework"
      data-nav-tone="dark"
      className="ent-dark relative isolate overflow-hidden bg-inverse py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          onInverse
          eyebrow={framework.eyebrow}
          title={<EntTitle lead={framework.titleLead} accent={framework.titleAccent} />}
          subtitle={framework.body}
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <ol className="relative space-y-1.5">
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-[1.2rem] top-4 w-px bg-white/15"
            />
            <motion.span
              aria-hidden="true"
              className="absolute left-[1.2rem] top-4 w-px origin-top bg-ent-accent"
              style={{ height: "calc(100% - 2rem)" }}
              animate={{ scaleY: active / (STEPS.length - 1) }}
              transition={{ duration: reduced ? 0 : 0.5, ease: "easeOut" }}
            />
            {STEPS.map((s, i) => {
              const done = i <= active;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={i === active ? "step" : undefined}
                    className={`relative flex w-full items-center gap-4 rounded-xl px-1 py-2.5 text-left transition-colors focus-ring ${
                      i === active ? "bg-white/[0.06]" : "hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border font-mono text-xs font-semibold transition-colors ${
                        done
                          ? "border-transparent bg-[#2DE8D5] text-[#04121A]"
                          : "border-white/25 bg-inverse text-white/60"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-base font-medium md:text-lg ${
                        i === active ? "text-white" : "text-white/60"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="ent-glass relative flex min-h-[20rem] flex-col overflow-hidden rounded-3xl p-7 md:p-10">
            <p
              className="font-mono text-sm uppercase tracking-[0.2em] text-ent-accent"
              aria-live="polite"
            >
              Step {active + 1} of {STEPS.length}
            </p>
            <div className="relative flex-1">
              <AnimatePresence mode="wait" initial={false} custom={dir}>
                <motion.div
                  key={active}
                  custom={dir}
                  initial={reduced ? false : { opacity: 0, x: 40 * dir }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduced ? undefined : { opacity: 0, x: -40 * dir }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                >
                  <h3 className="mt-4 font-display text-2xl font-semibold text-white md:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                    {step.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(active - 1)}
                  disabled={active === 0}
                  aria-label="Previous step"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-[#2DE8D5] hover:text-[#2DE8D5] disabled:opacity-35 disabled:hover:border-white/20 disabled:hover:text-white focus-ring"
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  disabled={active === STEPS.length - 1}
                  aria-label="Next step"
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#2DE8D5] text-[#04121A] transition-opacity disabled:opacity-35 focus-ring"
                >
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ent-accent hover:underline focus-ring md:text-base"
              >
                {framework.ctaText}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
