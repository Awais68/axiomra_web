import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion/Reveal";
import PaIcon from "./PaIcon";
import PaTitle from "./PaTitle";
import { services } from "../../data/processAutomationData";

const EASE = [0.65, 0, 0.35, 1];

/** Short glass tag shown on each photo. */
const TAGS = {
  consulting: "Strategy",
  rpa: "RPA",
  software: "Custom build",
  workflow: "Workflows",
};

/**
 * Same pebble as public/process-automation/organic-blob.svg, scaled to 0..1
 * for an objectBoundingBox clipPath. Keep the two in sync: the SVG file sets
 * where the text flows, this path sets what is painted.
 */
const BLOB =
  "M0.44,0.03C0.62,-0.01 0.8,0.08 0.9,0.22C0.99,0.35 0.97,0.5 0.92,0.63C0.87,0.78 0.78,0.93 0.6,0.97C0.42,1.01 0.22,0.95 0.11,0.8C0.01,0.66 0,0.48 0.05,0.33C0.1,0.18 0.26,0.07 0.44,0.03Z";
const BLOB_100 =
  "M44 3C62 -1 80 8 90 22C99 35 97 50 92 63C87 78 78 93 60 97C42 101 22 95 11 80C1 66 0 48 5 33C10 18 26 7 44 3Z";

function RowHeader({ item, index }) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-inverse text-[#13D4D4]">
        <PaIcon name={item.icon} size={22} aria-hidden="true" />
      </span>
      <span className="font-mono text-sm tracking-[0.2em] text-content-faint">
        {String(index + 1).padStart(2, "0")} / {String(services.items.length).padStart(2, "0")}
      </span>
    </div>
  );
}

function Points({ points }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {points.map((p) => (
        <li
          key={p}
          className="pa-glass-light inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm text-content"
        >
          <Check size={14} strokeWidth={3} aria-hidden="true" className="text-pa-accent" />
          {p}
        </li>
      ))}
    </ul>
  );
}

/**
 * Default row: the photo opens like a sliding factory door (an inset
 * clip-path that pulls back from the centre line), with a glass index tag.
 */
function PhotoRow({ item, index }) {
  const reduced = useReducedMotion();
  const flip = index % 2 === 1;
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      {/* Observe the unclipped wrapper: a fully clipped element may never
          count as in view. */}
      <motion.div
        initial={reduced ? false : "hidden"}
        whileInView="shown"
        viewport={{ once: true, margin: "-80px" }}
        className={`relative ${flip ? "md:order-2" : ""}`}
      >
        <motion.div
          variants={{
            hidden: { clipPath: "inset(0% 50% 0% 50% round 24px)" },
            shown: { clipPath: "inset(0% 0% 0% 0% round 24px)" },
          }}
          transition={{ duration: 1.1, ease: EASE }}
          className="relative aspect-[3/2] overflow-hidden rounded-3xl"
        >
          <motion.img
            variants={{ hidden: { scale: 1.2 }, shown: { scale: 1 } }}
            transition={{ duration: 1.4, ease: EASE }}
            src={item.image.src}
            srcSet={item.image.srcSet}
            sizes="(min-width: 768px) 45vw, 100vw"
            alt={item.image.alt}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <span
            aria-hidden="true"
            className="pa-glass absolute bottom-4 left-4 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-white"
          >
            {TAGS[item.id] ?? item.title}
          </span>
        </motion.div>
      </motion.div>
      <Reveal from={flip ? "right" : "left"}>
        <RowHeader item={item} index={index} />
        <h3 className="mt-5 font-display text-2xl font-semibold text-content md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-content-dim md:text-lg">{item.body}</p>
        <Points points={item.points} />
      </Reveal>
    </div>
  );
}

/**
 * Organic row: the float's wrap area comes from the external SVG
 * (shape-outside: url()), and a panel-coloured overlay is clipped by an inline
 * <clipPath> holding the inverse of the same pebble. The photo only shows
 * through the pebble and the text hugs its edge on a solid panel.
 */
function OrganicRow({ item, index }) {
  const reduced = useReducedMotion();
  const clipId = `pa-blob-inverse-${useId().replace(/:/g, "")}`;
  return (
    <Reveal className="rounded-[32px] bg-pa-panel p-6 sm:p-8 md:p-12">
      <div className="pa-organic-float relative overflow-hidden">
        <img
          src={item.image.src}
          srcSet={item.image.srcSet}
          sizes="320px"
          alt={item.image.alt}
          width={720}
          height={480}
          loading="lazy"
          decoding="async"
          className="pa-drift h-full w-full object-cover"
        />
        <svg aria-hidden="true" className="absolute h-0 w-0">
          <defs>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              <path clipRule="evenodd" d={`M0,0 H1 V1 H0 Z ${BLOB}`} />
            </clipPath>
          </defs>
        </svg>
        <div
          aria-hidden="true"
          className="absolute -inset-px bg-pa-panel"
          style={{ clipPath: `url(#${clipId})` }}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          <motion.path
            d={BLOB_100}
            fill="none"
            stroke="rgb(var(--pa-accent))"
            strokeWidth="2"
            strokeDasharray="6 6"
            vectorEffect="non-scaling-stroke"
            initial={reduced ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: EASE, delay: 0.2 }}
          />
        </svg>
      </div>
      <RowHeader item={item} index={index} />
      <h3 className="mt-5 font-display text-2xl font-semibold text-content md:text-3xl">
        {item.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-content-dim md:text-lg">{item.body}</p>
      <Points points={item.points} />
      <div className="clear-both" />
    </Reveal>
  );
}

const ROWS = { photo: PhotoRow, organic: OrganicRow };

export default function PaServices() {
  return (
    <section id="pa-services" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={<PaTitle lead={services.titleLead} accent={services.titleAccent} />}
          subtitle={services.subtitle}
        />
        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {services.items.map((item, i) => {
            const Row = ROWS[item.layout] ?? PhotoRow;
            return (
              <article key={item.id} id={`pa-service-${item.id}`}>
                <Row item={item} index={i} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
