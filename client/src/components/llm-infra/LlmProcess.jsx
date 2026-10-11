import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import LlmTitle from "./LlmTitle";
import { process } from "../../data/llmInfrastructureData";

const STEPS = process.steps;

/** The delivery process as a stepper: one step at a time, with a numbered rail to jump. */
export default function LlmProcess() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduced = useReducedMotion();
  const step = STEPS[index];

  const go = (next) => {
    const clamped = (next + STEPS.length) % STEPS.length;
    setDir(clamped > index ? 1 : -1);
    setIndex(clamped);
  };

  return (
    <section data-nav-tone="dark" className="bg-inverse py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          onInverse
          eyebrow={process.eyebrow}
          title={<LlmTitle onInverse lead={process.titleLead} accent={process.titleAccent} />}
          subtitle={process.body}
        />

        <ol className="mt-14 grid grid-cols-4 gap-2 sm:grid-cols-8" aria-label="Process steps">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={i === index ? "step" : undefined}
                aria-label={`Step ${i + 1}: ${s.title}`}
                className="group flex w-full flex-col items-start gap-2 focus-ring"
              >
                <span
                  className={`h-1 w-full rounded-full transition-colors ${
                    i <= index ? "bg-accent-vivid" : "bg-white/15 group-hover:bg-white/30"
                  }`}
                />
                <span
                  className={`font-mono text-sm ${i === index ? "text-white" : "text-white/50"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            </li>
          ))}
        </ol>

        <div className="llm-glass relative mt-8 min-h-[18rem] overflow-hidden rounded-3xl p-7 md:min-h-[16rem] md:p-12">
          <AnimatePresence mode="wait" initial={false} custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={reduced ? false : { opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              aria-live="polite"
            >
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent-vivid">
                Step {index + 1} of {STEPS.length}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-4xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">{step.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous step"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-ring"
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next step"
            className="grid h-12 w-12 place-items-center rounded-full bg-accent-vivid text-on-accent transition-colors hover:bg-accent-vivid-hover focus-ring"
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
