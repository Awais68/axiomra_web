import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";
import NeuralCanvas from "./NeuralCanvas";
import { hero } from "../../data/enterpriseAiData";
import { BOOKING_URL } from "../../lib/booking";
import hero1080 from "../../assets/enterprise-ai/hero-1080.webp";
import hero1920 from "../../assets/enterprise-ai/hero-1920.webp";

const EASE = [0.22, 0.61, 0.36, 1];

/** Fine dot grid as an SVG pattern (solid dots, no gradient). */
const DOTS =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='2' cy='2' r='1.2' fill='%23ffffff' fill-opacity='0.09'/%3E%3C/svg%3E\")";

/**
 * Glass chips that float around the photo: the three things a production
 * system has that a pilot does not. Descriptive UI, not client metrics.
 */
const CHIPS = [
  {
    title: "Integrated",
    line: "ERP · CRM · Warehouse",
    pos: "left-[-6%] top-[10%]",
    delay: 0.9,
    float: 7,
  },
  {
    title: "Audited",
    line: "Every decision logged",
    pos: "right-[-5%] top-[46%]",
    delay: 1.1,
    float: 9,
  },
  {
    title: "Monitored",
    line: "Drift caught, models retrained",
    pos: "bottom-[-6%] left-[10%]",
    delay: 1.3,
    float: 8,
  },
];

/**
 * Dark split hero with one photo. The copy renders immediately with no
 * entrance animation, because the H1 is the LCP element. The photo unfolds
 * through a CSS clip-path, drifts slowly, and tilts toward the pointer; a
 * three.js network plays over it on capable desktops.
 */
export default function EntHero() {
  const reduced = useReducedMotion();
  const frameRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 120,
    damping: 18,
  });

  const onMove = (e) => {
    if (reduced || e.pointerType !== "mouse") return;
    const r = frameRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      data-nav-tone="dark"
      className="ent-dark relative overflow-hidden bg-inverse pb-20 pt-28 md:pb-28 md:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: DOTS }}
      />
      {/* One solid teal halo behind the photo, blurred rather than graded. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-[#2DE8D5]/10 blur-[120px] md:h-[40rem] md:w-[40rem]"
      />

      <div className="relative z-10 mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:px-8">
        {/* Below lg the proof tiles drop under the photo, so the hero image
            reaches the first screen; at lg they sit back under the copy. */}
        <div className="lg:self-end">
          <p className="ent-glass mb-7 inline-flex items-center gap-2.5 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/80 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="ent-ping absolute inline-flex h-full w-full rounded-full bg-[#2DE8D5]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2DE8D5]" />
            </span>
            {hero.eyebrow}
          </p>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-inverse-fg sm:text-5xl xl:text-[4rem]">
            {hero.titleLead} <span className="text-ent-accent">{hero.titleAccent}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-inverse-fg/75 md:text-xl">
            {hero.body}
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2DE8D5] px-8 py-4 text-base font-semibold text-[#0A1428] transition-transform duration-300 hover:-translate-y-0.5 focus-ring md:text-lg"
            >
              {hero.ctaText}
              <ArrowUpRight
                size={19}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#ent-services"
              className="ent-glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/15 focus-ring md:text-lg"
            >
              {hero.secondaryCtaText}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-[40rem] [perspective:1400px] lg:col-start-2 lg:row-span-2 lg:row-start-1"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
        >
          <motion.div
            ref={frameRef}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="ent-hero-frame relative aspect-[4/3] overflow-hidden bg-inverse-soft">
              <img
                src={hero1920}
                srcSet={`${hero1080} 1080w, ${hero1920} 1920w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Glowing AI letters on a field of data connections"
                width={1920}
                height={1080}
                // React 18 only forwards the lowercase attribute.
                // eslint-disable-next-line react/no-unknown-property
                fetchpriority="high"
                decoding="async"
                className="ent-drift h-full w-full object-cover"
              />
              {/* Flat tint to sit the photo in the brand palette. */}
              <div aria-hidden="true" className="absolute inset-0 bg-[#0A1428]/25" />
              <div aria-hidden="true" className="ent-scan absolute inset-x-0 top-0" />
              <NeuralCanvas className="absolute inset-0 mix-blend-screen" />
            </div>

            {/* Corner brackets, outside the clip so they frame the shape. */}
            <span
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-10 w-10 border-r-2 border-t-2 border-[#2DE8D5]/80"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-10 w-10 border-b-2 border-l-2 border-[#2DE8D5]/80"
            />

            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
              className="ent-glass absolute right-4 top-4 flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-white sm:text-sm"
              style={{ transform: "translateZ(40px)" }}
            >
              <ShieldCheck size={15} className="text-[#2DE8D5]" aria-hidden="true" />
              Governed · Monitored · Live
            </motion.div>
          </motion.div>

          {CHIPS.map((c, i) => (
            <motion.div
              key={c.title}
              aria-hidden="true"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, y: [0, -c.float, 0] }}
              transition={
                reduced
                  ? undefined
                  : {
                      opacity: { duration: 0.6, delay: c.delay, ease: EASE },
                      y: {
                        duration: 5 + i,
                        delay: c.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className={`ent-glass absolute hidden rounded-2xl px-4 py-3 sm:block ${c.pos}`}
            >
              <p className="font-display text-lg font-semibold text-white">{c.title}</p>
              <p className="text-xs text-white/70">{c.line}</p>
            </motion.div>
          ))}
        </div>

        <dl className="mx-auto grid w-full max-w-lg grid-cols-3 gap-3 lg:col-start-1 lg:row-start-2 lg:mx-0 lg:mt-2 lg:self-start">
          {hero.proof.map((p) => (
            <div key={p.label} className="ent-glass rounded-2xl px-4 py-4">
              <dt className="sr-only">{p.label}</dt>
              <dd className="font-display text-2xl font-semibold text-white md:text-3xl">
                {p.value}
              </dd>
              <dd className="mt-1 text-xs leading-snug text-white/65 md:text-sm">{p.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
