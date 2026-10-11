import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../motion/Reveal";
import DsTitle from "./DsTitle";
import { industries } from "../../data/dataScienceData";
import { INDUSTRIES_PATH } from "../../routes.constants";

const EASE = [0.22, 0.61, 0.36, 1];

/** Industry tabs: a sliding solid pill marks the active tab; the photo opens on a clip-path circle. */
export default function DsIndustries() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const baseId = useId();
  const item = industries.items[active];

  const onKey = (e) => {
    const n = industries.items.length;
    if (e.key === "ArrowRight") setActive((i) => (i + 1) % n);
    else if (e.key === "ArrowLeft") setActive((i) => (i - 1 + n) % n);
    else return;
    e.preventDefault();
  };

  return (
    <section data-nav-tone="dark" className="bg-inverse py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-[rgb(45_212_191)] md:text-base">
            {industries.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-inverse-fg md:text-5xl lg:text-6xl">
            <DsTitle lead={industries.titleLead} accent={industries.titleAccent} />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-inverse-fg/70">{industries.subtitle}</p>
        </Reveal>

        {/* Scrolls sideways on phones rather than wrapping into a wall of pills. */}
        <div
          role="tablist"
          aria-label="Industries"
          onKeyDown={onKey}
          className="-mx-4 mt-12 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {industries.items.map((ind, i) => {
            const on = i === active;
            return (
              <button
                key={ind.name}
                type="button"
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={on}
                aria-controls={`${baseId}-panel`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-ring sm:text-base ${
                  on ? "text-inverse" : "ds-glass text-white/80 hover:text-white"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId={`${baseId}-pill`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-[rgb(45_212_191)]"
                    aria-hidden="true"
                  />
                )}
                <span className="relative">{ind.name}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active}`}
          className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.name}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <h3 className="font-display text-3xl font-semibold text-inverse-fg md:text-4xl">
                Data Science for {item.name}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-inverse-fg/75">{item.body}</p>
              <p className="mt-8 font-mono text-sm uppercase tracking-[0.16em] text-white/55">
                What we build
              </p>
              <ul className="mt-4 space-y-3">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-lg text-inverse-fg">
                    <span
                      className="h-2 w-2 shrink-0 rotate-45 bg-[rgb(45_212_191)]"
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to={INDUSTRIES_PATH}
                className="group mt-9 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus-ring"
              >
                View all industries
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-inverse-soft">
            <AnimatePresence initial={false}>
              <motion.img
                key={item.name}
                src={item.image}
                alt=""
                loading="lazy"
                decoding="async"
                initial={reduced ? false : { clipPath: "circle(0% at 85% 15%)" }}
                animate={{ clipPath: "circle(150% at 85% 15%)" }}
                exit={{ opacity: 0.999 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
