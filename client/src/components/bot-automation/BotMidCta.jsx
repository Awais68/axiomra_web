import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import { midCta } from "../../data/botAutomationData";

const SQUARES = 14;
const STAGGER = 0.18;
const LIT = 0.6;

/**
 * A flat dark band, notched along its top edge, with a glass card. A row of
 * task squares runs along the bottom, each lighting up in turn as if a bot
 * were working through the queue.
 */
export default function BotMidCta() {
  const reduced = useReducedMotion();
  return (
    <section
      data-nav-tone="dark"
      className="ba-band-clip relative overflow-hidden bg-[#050b18] pb-16 pt-20 md:pb-20 md:pt-28"
    >
      <div aria-hidden="true" className="ba-grid absolute inset-0 opacity-60" />
      <span
        aria-hidden="true"
        className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent-vivid/15"
      />

      <Reveal className="ba-glass-dark relative mx-4 flex max-w-5xl flex-col items-start gap-8 rounded-[2rem] p-7 sm:mx-auto sm:p-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
            {midCta.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            {midCta.subtitle}
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-vivid px-7 py-4 font-semibold text-[#03060c] transition-transform hover:-translate-y-0.5 focus-ring"
        >
          {midCta.buttonText} <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </Reveal>

      <div
        aria-hidden="true"
        className="relative mx-auto mt-10 flex max-w-5xl justify-center gap-2 px-4"
      >
        {Array.from({ length: SQUARES }, (_, i) => (
          <motion.span
            key={i}
            className="h-2.5 w-2.5 rounded-[3px] bg-white/20"
            animate={
              reduced
                ? undefined
                : {
                    backgroundColor: [
                      "rgb(255 255 255 / 0.2)",
                      "#14D8C4",
                      "rgb(255 255 255 / 0.2)",
                    ],
                  }
            }
            transition={{
              duration: LIT,
              repeat: Infinity,
              repeatDelay: SQUARES * STAGGER - LIT,
              delay: i * STAGGER,
            }}
          />
        ))}
      </div>
    </section>
  );
}
