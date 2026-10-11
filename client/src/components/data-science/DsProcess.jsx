import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import DsTitle from "./DsTitle";
import { process } from "../../data/dataScienceData";

const EASE = [0.22, 0.61, 0.36, 1];

/** Five-step method as a stepper: a rail of numbered nodes plus one detail card. */
export default function DsProcess() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const reduced = useReducedMotion();
  const n = process.steps.length;
  const current = process.steps[step];

  const go = (next) => {
    if (next < 0 || next >= n || next === step) return;
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent md:text-base">
            {process.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-content md:text-5xl lg:text-6xl">
            <DsTitle lead={process.titleLead} accent={process.titleAccent} />
          </h2>
          {process.body && (
            <p className="mt-6 text-lg leading-relaxed text-content-dim">{process.body}</p>
          )}
        </Reveal>

        {/* Rail: track fills to the active node. */}
        <ol className="relative mt-14 grid grid-cols-5" aria-label="Process steps">
          <span
            className="absolute left-[10%] right-[10%] top-5 h-0.5 bg-line sm:top-6"
            aria-hidden="true"
          />
          <motion.span
            className="absolute left-[10%] top-5 h-0.5 origin-left bg-[rgb(var(--ds-accent))] sm:top-6"
            style={{ width: "80%" }}
            animate={{ scaleX: step / (n - 1) }}
            transition={{ duration: reduced ? 0 : 0.6, ease: EASE }}
            aria-hidden="true"
          />
          {process.steps.map((s, i) => {
            const on = i === step;
            const done = i < step;
            return (
              <li key={s.title} className="relative flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={on ? "step" : undefined}
                  aria-label={`Step ${i + 1}: ${s.title}`}
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-semibold transition-colors focus-ring sm:h-12 sm:w-12 sm:text-base ${
                    on
                      ? "bg-inverse text-white"
                      : done
                        ? "bg-[rgb(var(--ds-accent))] text-white"
                        : "border border-line bg-surface-card text-content-dim hover:text-content"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
                <span
                  className={`mt-3 hidden text-center text-sm font-medium md:block ${
                    on ? "text-content" : "text-content-faint"
                  }`}
                >
                  {s.title}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-line bg-surface-subtle">
          <AnimatePresence mode="wait" initial={false} custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              initial={reduced ? false : { opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid gap-6 p-7 sm:p-10 md:grid-cols-[auto_1fr] md:gap-12 lg:p-14"
              aria-live="polite"
            >
              <p className="font-display text-7xl font-semibold leading-none text-[rgb(var(--ds-accent))] md:text-8xl">
                {String(step + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.16em] text-content-faint">
                  Step {step + 1} of {n}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-content md:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-content-dim">
                  {current.body}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between border-t border-line px-7 py-5 sm:px-10">
            <button
              type="button"
              onClick={() => go(step - 1)}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-medium text-content transition-opacity disabled:opacity-35 focus-ring"
            >
              <ArrowLeft size={18} aria-hidden="true" /> Previous
            </button>
            <button
              type="button"
              onClick={() => go(step + 1)}
              disabled={step === n - 1}
              className="inline-flex items-center gap-2 rounded-full bg-inverse px-5 py-2.5 text-base font-medium text-white transition-opacity disabled:opacity-35 focus-ring"
            >
              Next <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
