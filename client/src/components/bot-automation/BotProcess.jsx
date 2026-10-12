import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TbRocket, TbShieldCheck, TbTool, TbTrendingUp, TbZoomQuestion } from "react-icons/tb";
import SectionHeading from "../SectionHeading";
import { Stagger, StaggerItem } from "../motion/Reveal";
import { process } from "../../data/botAutomationData";

const ICONS = [TbZoomQuestion, TbTool, TbRocket, TbTrendingUp];

/**
 * Four steps on a track. A connector draws itself across and a single
 * "task" square runs along it on a loop, the bot's journey from discovery to
 * production. Guarantees close the section.
 */
export default function BotProcess() {
  const reduced = useReducedMotion();

  return (
    <section id="ba-process" className="scroll-mt-24 bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={
            <>
              {process.titleLead} <span className="text-accent">{process.titleAccent}</span>
            </>
          }
          subtitle={process.subtitle}
        />

        <div className="relative mt-16">
          <motion.div
            aria-hidden="true"
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 origin-left bg-accent-vivid/60 lg:block"
          >
            {!reduced && (
              <motion.span
                className="absolute -top-[5px] h-3 w-3 rounded-[3px] bg-accent-vivid"
                animate={{ left: ["0%", "100%"], rotate: [0, 360] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1.4 }}
              />
            )}
          </motion.div>

          <Stagger as="ol" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <StaggerItem as="li" key={step.title} className="relative flex flex-col">
                  <span className="ba-clip-hex relative z-10 mx-auto grid h-16 w-[4.5rem] place-items-center bg-inverse text-accent-vivid">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <div className="ba-glass mt-6 flex-1 rounded-3xl p-6">
                    <p className="font-mono text-sm tracking-[0.18em] text-accent">
                      STEP {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-content">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-content-dim">{step.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        <div className="ba-glass mt-12 flex flex-col gap-6 rounded-3xl p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <ul className="grid gap-3 sm:grid-cols-2 md:gap-x-8">
            {process.guarantees.map((g) => (
              <li key={g} className="flex items-center gap-2.5 font-medium text-content">
                <TbShieldCheck size={19} className="shrink-0 text-accent" aria-hidden="true" />
                {g}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-inverse px-7 py-3.5 font-semibold text-inverse-fg transition-transform hover:-translate-y-0.5 focus-ring"
          >
            {process.ctaText} <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
