import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { TbArrowsShuffle, TbCloudLock, TbPlugConnectedX, TbServer2 } from "react-icons/tb";
import CoreCanvas from "./CoreCanvas";
import { BOOKING_URL } from "../../lib/booking";
import { hero } from "../../data/llmInfrastructureData";

const CHIP_ICONS = [TbServer2, TbCloudLock, TbPlugConnectedX, TbArrowsShuffle];
// Where each chip floats around the core on desktop (percent of the stage).
const CHIP_SPOTS = [
  "left-0 top-[12%]",
  "right-0 top-[6%]",
  "right-[4%] bottom-[14%]",
  "left-[6%] bottom-[8%]",
];

/**
 * Full-bleed photo hero. The single photo opens through a hexagonal aperture
 * (CSS clip-path, so it runs from the prerendered HTML) and then drifts.
 * The H1 is the LCP element, so it paints with no entrance animation; the
 * other copy uses the shared CSS [data-fade] entrance.
 */
export default function LlmHero() {
  const reduced = useReducedMotion();

  return (
    <section
      data-nav-tone="dark"
      className="relative isolate overflow-hidden bg-inverse pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div aria-hidden="true" className="llm-hero-photo absolute inset-0 -z-10">
        <img
          src={hero.image.src}
          srcSet={hero.image.srcSet}
          sizes="100vw"
          alt=""
          // React 18 only forwards the lowercase spelling; camelCase lands in React 19.
          // eslint-disable-next-line react/no-unknown-property
          fetchpriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Solid scrim, not a gradient: keeps the copy above 4.5:1 on any crop. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-inverse/75" />
      <div
        aria-hidden="true"
        className="llm-scan pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-accent-vivid/60"
      />

      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8 lg:px-8">
        <div className="llm-glass rounded-3xl p-6 sm:p-9 md:p-11">
          <p
            data-fade="0"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-white/80 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-vivid" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl xl:text-[3.6rem]">
            {hero.titleLead} <span className="text-accent-vivid">{hero.titleAccent}</span>
          </h1>

          <p
            data-fade="1"
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            {hero.body}
          </p>

          <div
            data-fade="2"
            className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent-vivid px-7 py-4 text-base font-semibold text-on-accent transition-colors hover:bg-accent-vivid-hover focus-ring md:text-lg"
            >
              {hero.ctaText}
              <ArrowUpRight
                size={19}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#llm-services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-7 py-4 text-base font-medium text-white transition-colors hover:bg-white/10 focus-ring md:text-lg"
            >
              {hero.secondaryCtaText}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <p data-fade="3" className="mt-8 font-mono text-sm tracking-wide text-white/60">
            {hero.proof.join(" · ")}
          </p>

          {/* Phones: the deployment targets sit under the copy instead of orbiting. */}
          <ul
            data-fade="4"
            className="mt-7 flex flex-wrap gap-2 lg:hidden"
            aria-label="Deployment options"
          >
            {hero.chips.map((chip, i) => {
              const Icon = CHIP_ICONS[i % CHIP_ICONS.length];
              return (
                <li
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm text-white"
                >
                  <Icon size={15} className="text-accent-vivid" aria-hidden="true" />
                  {chip}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-[36rem] lg:block">
          <CoreCanvas />
          <ul aria-label="Deployment options">
            {hero.chips.map((chip, i) => {
              const Icon = CHIP_ICONS[i % CHIP_ICONS.length];
              return (
                <motion.li
                  key={chip}
                  className={`llm-glass absolute flex items-center gap-2.5 rounded-2xl px-4 py-3 text-sm font-medium text-white ${CHIP_SPOTS[i]}`}
                  initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                  animate={
                    reduced ? undefined : { opacity: 1, scale: 1, y: [0, i % 2 ? 10 : -10, 0] }
                  }
                  transition={{
                    opacity: { duration: 0.6, delay: 0.9 + i * 0.15 },
                    scale: { duration: 0.6, delay: 0.9 + i * 0.15 },
                    y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                  }}
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-vivid/15">
                    <Icon size={16} className="text-accent-vivid" aria-hidden="true" />
                  </span>
                  {chip}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
