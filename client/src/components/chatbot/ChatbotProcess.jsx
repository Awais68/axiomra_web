import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Stagger, StaggerItem } from "../motion/Reveal";
import { process } from "../../data/chatbotData";

export default function ChatbotProcess() {
  const reduced = useReducedMotion();

  return (
    <section id="cb-process" className="scroll-mt-24 bg-surface-subtle py-20 md:py-28">
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
          {/* The connector draws itself left to right behind the step numbers. */}
          <motion.span
            aria-hidden="true"
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 origin-left bg-accent-vivid lg:block"
          />
          <Stagger as="ol" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, i) => (
              <StaggerItem as="li" key={step.title} className="relative">
                <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full bg-inverse font-mono text-lg font-semibold text-accent-vivid ring-8 ring-surface-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="cb-glass mt-6 h-[calc(100%-5rem)] rounded-3xl p-6">
                  <h3 className="font-display text-2xl font-semibold text-content">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-content-dim">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-inverse px-7 py-3.5 font-semibold text-inverse-fg transition-transform hover:-translate-y-0.5 focus-ring"
          >
            {process.ctaText} <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
