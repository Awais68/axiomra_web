import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "../SectionHeading";
import SpectrumTitle from "./SpectrumTitle";
import { process } from "../../data/businessIntelligenceData";

/**
 * Nine steps down a left-hand rail. The spectrum line fills with scroll; each
 * numbered node is a glass chip, and the cards alternate width at desktop so
 * the column reads as a ledger rather than a zigzag.
 */
export default function BiProcess() {
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="bi-process" className="bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={<SpectrumTitle lead={process.titleLead} accent={process.titleAccent} />}
        />

        <div ref={railRef} className="relative mx-auto mt-16 max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.4rem] top-0 w-[3px] overflow-hidden rounded-full bg-line md:left-[1.9rem]"
          >
            <motion.div
              style={{ scaleY: fill }}
              className="bi-spectrum-bg-y h-full w-full origin-top"
            />
          </div>

          <ol className="space-y-5 md:space-y-6">
            {process.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative flex items-start gap-5 md:gap-8"
              >
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-surface-card font-mono text-sm font-semibold text-brand shadow-card md:h-16 md:w-16 md:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 rounded-2xl border border-line bg-surface-card p-5 shadow-card md:p-7">
                  <h3 className="font-display text-lg font-semibold text-content md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-content-dim md:text-lg">
                    {step.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
