import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cta } from "../../data/dataScienceData";
import { BOOKING_URL } from "../../lib/booking";

// Hexagons drifting behind the CTA: [left, top, size(rem), glass?, bob(px), duration(s)].
const HEXES = [
  ["6%", "18%", 7, false, -14, 7],
  ["16%", "62%", 4.5, true, 12, 6],
  ["78%", "12%", 5.5, true, 16, 8],
  ["86%", "58%", 8, false, -12, 9],
  ["64%", "72%", 3.5, false, 10, 5.5],
  ["32%", "8%", 3, true, -10, 6.5],
];

/** Closing CTA band: solid dark field, clip-path hexagons, no gradients. */
export default function DsCta() {
  const reduced = useReducedMotion();

  return (
    <section data-nav-tone="dark" className="bg-surface pb-20 md:pb-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-inverse px-6 py-16 text-center sm:px-12 md:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {HEXES.map(([left, top, size, glass, bob, dur], i) => (
              <motion.div
                key={i}
                className={`ds-hex absolute ${
                  glass
                    ? "ds-glass"
                    : i % 2
                      ? "bg-[rgb(96_165_250/0.22)]"
                      : "bg-[rgb(45_212_191/0.22)]"
                }`}
                style={{ left, top, width: `${size}rem`, height: `${size * 0.9}rem` }}
                animate={reduced ? undefined : { y: [0, bob, 0], rotate: [0, i % 2 ? 8 : -8, 0] }}
                transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>

          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-inverse-fg md:text-5xl">
              {cta.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-inverse-fg/75 md:text-xl">
              {cta.subtitle}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[rgb(45_212_191)] px-8 py-4 text-base font-semibold text-inverse transition-transform hover:scale-[1.02] focus-ring md:text-lg"
            >
              {cta.buttonText}
              <ArrowUpRight
                size={19}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
