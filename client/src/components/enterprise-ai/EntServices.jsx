import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion/Reveal";
import EntIcon from "./EntIcon";
import EntTitle from "./EntTitle";
import { services } from "../../data/enterpriseAiData";

const EASE = [0.65, 0, 0.35, 1];

/**
 * Same blob as public/enterprise-ai/organic-blob.svg, scaled to 0..1 for an
 * objectBoundingBox clipPath. The two must stay in sync: one sets where the
 * text flows, the other what is painted.
 */
const BLOB =
  "M0.5,0.02C0.74,0 0.97,0.16 0.98,0.42C0.99,0.66 0.86,0.95 0.56,0.98C0.3,1 0.04,0.86 0.02,0.58C0,0.3 0.22,0.04 0.5,0.02Z";
const BLOB_100 = "M50 2C74 0 97 16 98 42C99 66 86 95 56 98C30 100 4 86 2 58C0 30 22 4 50 2Z";

function RowHeader({ item, index }) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-inverse text-[#2DE8D5]">
        <EntIcon name={item.icon} size={22} aria-hidden="true" />
      </span>
      <span className="font-mono text-sm tracking-[0.2em] text-content-faint">
        {String(index + 1).padStart(2, "0")} / {String(services.items.length).padStart(2, "0")}
      </span>
    </div>
  );
}

function RowBody({ item }) {
  return item.body.map((p) => (
    <p key={p.slice(0, 24)} className="mt-4 text-base leading-relaxed text-content-dim md:text-lg">
      {p}
    </p>
  ));
}

/** Default row: photo beside copy, the photo wiping open on a diagonal. */
function PhotoRow({ item, index }) {
  const reduced = useReducedMotion();
  const flip = index % 2 === 1;
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      {/* The observer sits on the unclipped wrapper: a zero-area clip on the
          observed element itself can keep it from ever counting as in view. */}
      <motion.div
        initial={reduced ? false : "hidden"}
        whileInView="shown"
        viewport={{ once: true, margin: "-80px" }}
        className={flip ? "md:order-2" : ""}
      >
        <motion.div
          variants={{
            hidden: {
              clipPath: flip
                ? "polygon(100% 0%, 100% 0%, 88% 100%, 88% 100%)"
                : "polygon(0% 0%, 12% 0%, 0% 100%, 0% 100%)",
            },
            shown: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          }}
          transition={{ duration: 1, ease: EASE }}
          className="relative aspect-[3/2] overflow-hidden rounded-3xl"
        >
          <img
            src={item.image.src}
            srcSet={item.image.srcSet}
            sizes="(min-width: 768px) 45vw, 100vw"
            alt={item.image.alt}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </motion.div>
      <Reveal from={flip ? "right" : "left"}>
        <RowHeader item={item} index={index} />
        <h3 className="mt-5 font-display text-2xl font-semibold text-content md:text-3xl">
          {item.title}
        </h3>
        <RowBody item={item} />
      </Reveal>
    </div>
  );
}

/**
 * Organic row: the float's wrap area comes from the external SVG
 * (shape-outside: url()), and a panel-coloured overlay is clipped by an inline
 * <clipPath> holding the inverse of that same blob, so the photo only shows
 * through the blob and the text hugs it on a solid tinted panel.
 */
function OrganicRow({ item, index }) {
  const reduced = useReducedMotion();
  const clipId = `ent-blob-inverse-${useId().replace(/:/g, "")}`;
  return (
    <Reveal className="rounded-[32px] bg-ent-panel p-6 sm:p-8 md:p-12">
      <div className="ent-organic-float relative overflow-hidden">
        <img
          src={item.image.src}
          srcSet={item.image.srcSet}
          sizes="300px"
          alt={item.image.alt}
          width={720}
          height={480}
          loading="lazy"
          decoding="async"
          className="ent-drift h-full w-full object-cover"
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
          className="absolute -inset-px bg-ent-panel"
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
            stroke="rgb(var(--ent-accent))"
            strokeWidth="2"
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
      <RowBody item={item} />
      <div className="clear-both" />
    </Reveal>
  );
}

/**
 * Inverted row: a solid frame with an elongated hexagon cut out of it sits on
 * the photo, and the quote reads as if it were inside the hole.
 */
function InvertedRow({ item, index }) {
  const reduced = useReducedMotion();
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      <Reveal from="left">
        <RowHeader item={item} index={index} />
        <h3 className="mt-5 font-display text-2xl font-semibold text-content md:text-3xl">
          {item.title}
        </h3>
        <RowBody item={item} />
      </Reveal>
      <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <img
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
        <div aria-hidden="true" className="absolute inset-0 bg-[#070B1F]/70" />
        <motion.div
          aria-hidden="true"
          initial={reduced ? false : { scale: 1.25, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="ent-cutout-frame absolute inset-0 bg-ent-accent"
        />
        <blockquote className="absolute inset-[18%_14%] grid place-items-center text-center">
          <div>
            <Quote size={22} aria-hidden="true" className="mx-auto mb-2 text-[#2DE8D5]" />
            <p className="font-display text-base font-semibold leading-snug text-white sm:text-xl lg:text-2xl">
              {item.quote}
            </p>
          </div>
        </blockquote>
      </figure>
    </div>
  );
}

const ROWS = { photo: PhotoRow, organic: OrganicRow, inverted: InvertedRow };

export default function EntServices() {
  return (
    <section id="ent-services" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={<EntTitle lead={services.titleLead} accent={services.titleAccent} />}
          subtitle={services.subtitle}
        />
        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {services.items.map((item, i) => {
            const Row = ROWS[item.layout] ?? PhotoRow;
            return (
              <article key={item.id} id={`ent-service-${item.id}`}>
                <Row item={item} index={i} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
