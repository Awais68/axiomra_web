import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import ClusterCanvas from "./ClusterCanvas";
import DsTitle from "./DsTitle";
import { hero } from "../../data/dataScienceData";

// Where each readout chip sits on the photo frame. Offsets, not translate
// utilities: framer-motion owns the transform for the bob.
const CHIP_SPOTS = [
  "-left-4 top-[12%] lg:-left-10",
  "-right-3 top-[46%] lg:-right-4",
  "left-[10%] -bottom-7",
];

/**
 * Dark split hero. Copy fades in on CSS ([data-fade]) so the H1, the LCP
 * element, paints with the prerendered HTML. The one photo is revealed by a
 * clip-path and pushed in slowly (CSS); framer-motion adds the pointer tilt
 * and the floating glass readouts; three.js draws the data field behind.
 */
export default function DsHero() {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-1, 1], [-6, 6]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-1, 1], [5, -5]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    if (reduced || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      data-nav-tone="dark"
      className="relative overflow-hidden bg-inverse pb-20 pt-28 md:pb-28 md:pt-36"
    >
      <ClusterCanvas />

      <div className="relative z-10 mx-auto grid max-w-8xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:px-8">
        <div>
          <p
            data-fade="0"
            className="ds-glass mb-7 inline-flex items-center gap-2 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/80 sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[rgb(var(--ds-accent))]" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1
            data-fade="1"
            className="text-balance font-display text-4xl font-semibold leading-[1.06] tracking-tight text-inverse-fg sm:text-5xl xl:text-[3.6rem]"
          >
            <DsTitle lead={hero.titleLead} accent={hero.titleAccent} />
          </h1>

          <p
            data-fade="2"
            className="mt-7 max-w-xl text-lg leading-relaxed text-inverse-fg/75 md:text-xl"
          >
            {hero.body}
          </p>

          <div
            data-fade="3"
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[rgb(var(--ds-accent))] px-8 py-4 text-base font-semibold text-inverse transition-transform hover:scale-[1.02] focus-ring md:text-lg"
            >
              {hero.ctaText}
              <ArrowUpRight
                size={19}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href="#ds-services"
              className="ds-glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/15 focus-ring md:text-lg"
            >
              {hero.secondaryCtaText}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <p data-fade="4" className="mt-10 font-mono text-sm tracking-wide text-white/60">
            {hero.proof.join(" · ")}
          </p>
        </div>

        <div
          className="relative mx-auto w-full max-w-[36rem] [perspective:1200px] lg:max-w-none"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
        >
          <motion.div style={reduced ? undefined : { rotateX, rotateY }} className="relative">
            <div className="ds-hero-frame relative aspect-[4/3] overflow-hidden bg-inverse-soft">
              <img
                src={hero.image.src}
                srcSet={hero.image.srcSet}
                sizes="(min-width: 1024px) 46vw, 92vw"
                alt={hero.image.alt}
                width={1920}
                height={1440}
                // React 18 only forwards the lowercase attribute.
                // eslint-disable-next-line react/no-unknown-property
                fetchpriority="high"
                decoding="async"
                className="ds-kenburns h-full w-full object-cover"
              />
              {/* Solid tint, not a gradient: pulls the photo into the page palette. */}
              <div className="absolute inset-0 bg-inverse/25" aria-hidden="true" />
              <div
                className="ds-scan absolute inset-x-0 top-0 h-[10%] border-b-2 border-[rgb(var(--ds-accent))] bg-[rgb(var(--ds-accent)/0.08)]"
                aria-hidden="true"
              />
            </div>

            {hero.chips.map((chip, i) => (
              <motion.div
                key={chip.label}
                initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                animate={reduced ? undefined : { opacity: 1, scale: 1, y: [0, i % 2 ? 8 : -8, 0] }}
                transition={{
                  opacity: { delay: 0.9 + i * 0.18, duration: 0.5 },
                  scale: { delay: 0.9 + i * 0.18, duration: 0.5 },
                  y: { delay: 1.4 + i * 0.3, duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
                }}
                className={`ds-glass absolute hidden rounded-2xl px-4 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] sm:block ${CHIP_SPOTS[i]}`}
                aria-hidden="true"
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/65">
                  {chip.label}
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-white">{chip.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Phones: the readouts sit in a row under the photo instead of over it. */}
          <ul className="mt-6 grid grid-cols-3 gap-2 sm:hidden" aria-hidden="true">
            {hero.chips.map((chip) => (
              <li key={chip.label} className="ds-glass rounded-xl px-3 py-2.5">
                <p className="font-mono text-[0.6rem] uppercase leading-tight tracking-wider text-white/60">
                  {chip.label}
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">{chip.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
