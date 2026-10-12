import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion/Reveal";
import PaTitle from "./PaTitle";
import { process } from "../../data/processAutomationData";
import { BOOKING_URL } from "../../lib/booking";

/**
 * Four steps on a conveyor: a solid rail fills as the section scrolls past
 * (horizontal on desktop, vertical on mobile) and each step lights up in turn.
 */
export default function PaProcess() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section
      data-nav-tone="dark"
      className="pa-dark relative isolate overflow-hidden bg-inverse py-20 md:py-28"
    >
      <div aria-hidden="true" className="pa-grid absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          onInverse
          eyebrow={process.eyebrow}
          title={<PaTitle lead={process.titleLead} accent={process.titleAccent} />}
          subtitle={process.subtitle}
        />

        <div ref={ref} className="relative mt-16">
          {/* Rail: track + scroll-driven fill. */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-white/10 md:bottom-auto md:left-0 md:right-0 md:top-[19px] md:h-0.5 md:w-auto"
          >
            <motion.div
              style={reduced ? undefined : { scaleY: fill }}
              className="h-full w-full origin-top bg-[#13D4D4] md:hidden"
            />
            <motion.div
              style={reduced ? undefined : { scaleX: fill }}
              className="hidden h-full w-full origin-left bg-[#13D4D4] md:block"
            />
          </div>

          <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {process.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.12} className="relative pl-14 md:pl-0">
                <span className="pa-step-dot absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-[#13D4D4] bg-inverse font-mono text-sm font-semibold text-white md:relative">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pa-glass mt-0 rounded-2xl p-5 md:mt-6 md:p-6">
                  <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-8">
          <ul className="flex flex-wrap justify-center gap-3">
            {process.guarantees.map((g) => (
              <li
                key={g}
                className="pa-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/90"
              >
                <ShieldCheck size={16} aria-hidden="true" className="text-[#2DE8D5]" />
                {g}
              </li>
            ))}
          </ul>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#13D4D4] px-7 py-3.5 text-base font-semibold text-[#1A0D02] transition-transform hover:-translate-y-0.5 focus-ring md:text-lg"
          >
            {process.ctaText}
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
