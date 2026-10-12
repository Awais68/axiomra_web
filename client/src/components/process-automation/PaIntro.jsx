import { motion, useReducedMotion } from "framer-motion";
import { TbCircleCheck, TbClockBolt } from "react-icons/tb";
import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion/Reveal";
import PaTitle from "./PaTitle";
import { intro } from "../../data/processAutomationData";

/**
 * "Why automate" standfirst. Two shape-outside floats live here:
 * the first paragraph wraps a 200px round photo (`shape-outside: circle(50%)`),
 * the second wraps a solid chevron badge whose `shape-outside` and `clip-path`
 * share one polygon, so the text follows the exact edge you see.
 */
export default function PaIntro() {
  const reduced = useReducedMotion();
  const [first, second] = intro.paragraphs;

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow={intro.eyebrow}
            title={<PaTitle lead={intro.titleLead} accent={intro.titleAccent} />}
          />

          <Reveal className="mt-10 text-base leading-relaxed text-content-dim md:text-lg">
            <motion.div
              className="pa-circle-float relative"
              initial={reduced ? false : { scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
            >
              <img
                src={intro.image.src}
                alt={intro.image.alt}
                width={480}
                height={480}
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-full object-cover"
              />
              {/* Dashed orbit inside the float box, so it never breaks the wrap. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                className="pa-orbit absolute inset-0 h-full w-full"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgb(var(--pa-accent))"
                  strokeWidth="1.2"
                  strokeDasharray="3 5"
                />
                <circle cx="50" cy="2" r="2.6" fill="rgb(var(--pa-accent))" />
              </svg>
            </motion.div>
            <p>{first}</p>

            <div className="clear-both" />

            <p className="mt-6">
              <span className="pa-poly-float" aria-hidden="true">
                <span className="flex h-full flex-col justify-center pl-4 pr-10 text-white">
                  <TbClockBolt size={22} />
                  <span className="mt-1.5 font-display text-sm font-semibold leading-tight">
                    {intro.badge}
                  </span>
                </span>
              </span>
              {second}
            </p>
            <div className="clear-both" />
          </Reveal>
        </div>

        <Reveal from="left" className="lg:pt-24">
          <div className="pa-dark relative overflow-hidden rounded-3xl bg-inverse p-7 md:p-9">
            <div aria-hidden="true" className="pa-grid absolute inset-0" />
            <h3 className="relative font-display text-xl font-semibold text-white md:text-2xl">
              {intro.sideTitle}
            </h3>
            <ul className="relative mt-6 space-y-3">
              {intro.signs.map((s, i) => (
                <motion.li
                  key={s}
                  initial={reduced ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
                  className="pa-glass flex items-start gap-3 rounded-2xl px-4 py-3.5 text-white/90"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#2DE8D5] text-[#04121A]">
                    <TbCircleCheck size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
