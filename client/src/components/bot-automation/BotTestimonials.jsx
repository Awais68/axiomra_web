import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { testimonials } from "../../data/industriesData";
import { testimonialsHeading } from "../../data/botAutomationData";

const ITEMS = testimonials.items;

export default function BotTestimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const item = ITEMS[index];
  const go = (step) => setIndex((i) => (i + step + ITEMS.length) % ITEMS.length);

  useEffect(() => {
    if (paused || reduced) return undefined;
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [paused, reduced, index]);

  return (
    <section
      id="ba-testimonials"
      data-nav-tone="dark"
      className="relative scroll-mt-24 overflow-hidden bg-[#050b18] py-20 md:py-28"
    >
      {/* Flat, hard-edged discs behind the glass, so the blur has something to bend. */}
      <span
        aria-hidden="true"
        className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-accent-vivid/20"
      />
      <span
        aria-hidden="true"
        className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[#3b5bdb]/25"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          onInverse
          eyebrow={testimonialsHeading.eyebrow}
          title={
            <>
              {testimonialsHeading.titleLead}{" "}
              <span className="text-accent-vivid">{testimonialsHeading.titleAccent}</span>
            </>
          }
        />

        <div
          className="ba-glass-dark relative mt-12 rounded-[2rem] p-7 sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Quote size={44} aria-hidden="true" className="text-accent-vivid" />
          <div aria-live="polite" className="min-h-[12rem] sm:min-h-[9rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={item.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="mt-5 text-lg leading-relaxed text-white md:text-2xl">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="text-white/60"> · {item.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {ITEMS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show testimonial ${i + 1} of ${ITEMS.length}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all focus-ring ${
                    i === index ? "w-8 bg-accent-vivid" : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 focus-ring"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="grid h-11 w-11 place-items-center rounded-full bg-accent-vivid text-[#03060c] transition-transform hover:scale-105 focus-ring"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
