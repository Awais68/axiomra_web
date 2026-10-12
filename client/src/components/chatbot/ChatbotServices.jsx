import { motion, useReducedMotion } from "framer-motion";
import { TbMessages, TbRoute } from "react-icons/tb";
import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion/Reveal";
import { services } from "../../data/chatbotData";
import { BLOB_SIZE, blobPath } from "./blob";

const EASE = [0.22, 0.61, 0.36, 1];
// Must match .cb-organic's padding: the clipPath's blob sits where the float does.
const ORGANIC_PAD = 32;

function Tags({ items, onDark = false }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${
            onDark
              ? "border-white/20 bg-white/10 text-white"
              : "border-line bg-surface-card text-content-dim"
          }`}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

/**
 * A photo that wipes in from one side the first time it scrolls into view.
 * The in-view trigger sits on an unclipped wrapper: a fully clipped element
 * never reports as intersecting, so it could not trigger its own reveal.
 */
function RevealImage({ image, clip = "rounded-3xl", from = "left", className = "" }) {
  const reduced = useReducedMotion();
  const hidden = from === "left" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      <motion.div
        variants={{ hidden: { clipPath: hidden }, shown: { clipPath: "inset(0 0% 0 0%)" } }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <motion.img
          src={image.src}
          srcSet={image.srcSet}
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt={image.alt}
          loading="lazy"
          decoding="async"
          width="1400"
          height="933"
          variants={{ hidden: { scale: 1.15 }, shown: { scale: 1 } }}
          transition={{ duration: 1.6, ease: EASE }}
          className={`aspect-[3/2] w-full object-cover ${clip}`}
        />
      </motion.div>
    </motion.div>
  );
}

/* 1. Copy wraps a floated circle (shape-outside: circle). */
function CircleRow({ item }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
      <RevealImage image={item.image} className="lg:col-start-1 lg:row-start-1" />
      <Reveal
        from="left"
        className="cb-glass relative rounded-3xl p-6 sm:p-9 lg:col-start-2 lg:row-start-1 lg:-ml-20"
      >
        <div className="cb-shape-circle grid place-items-center bg-accent-vivid text-center text-on-accent">
          <div>
            <p className="font-display text-3xl font-semibold leading-none sm:text-5xl">
              {item.badge.value}
            </p>
            <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] sm:text-xs">
              {item.badge.label}
            </p>
          </div>
        </div>
        <h3 className="font-display text-2xl font-semibold text-content md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-content-dim md:text-lg">{item.body}</p>
        <Tags items={item.tags} />
      </Reveal>
    </div>
  );
}

/* 2. A coloured polygon; its clip-path and shape-outside are the same values. */
function PolygonRow({ item }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
      <RevealImage image={item.image} from="right" className="lg:col-start-2 lg:row-start-1" />
      <Reveal
        from="right"
        className="cb-glass relative z-10 rounded-3xl p-6 sm:p-9 lg:col-start-1 lg:row-start-1 lg:-mr-20"
      >
        <div
          className="cb-shape-poly grid place-items-center bg-inverse pr-6 text-accent-vivid"
          aria-hidden="true"
        >
          <TbMessages strokeWidth={1.5} className="h-9 w-9 sm:h-[52px] sm:w-[52px]" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-content md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-content-dim md:text-lg">{item.body}</p>
        <Tags items={item.tags} />
      </Reveal>
    </div>
  );
}

/* 3. The copy sits inside the cut-out of an inverted polygon over the photo. */
function InvertedRow({ item }) {
  return (
    <Reveal className="cb-inverted overflow-hidden rounded-3xl bg-inverse">
      <img
        src={item.image.src}
        srcSet={item.image.srcSet}
        sizes="100vw"
        alt={item.image.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="cb-inverted-panel bg-[#0a1428]/85 backdrop-blur-xl" />
      <div className="relative h-full">
        <div aria-hidden="true" className="cb-inverted-wedge" />
        <h3 className="px-6 pt-6 font-display text-2xl font-semibold text-white md:text-3xl lg:mt-16 lg:pl-0 lg:pr-12 lg:pt-0">
          {item.title}
        </h3>
        <p className="mt-4 px-6 text-base leading-relaxed text-white/80 md:text-lg lg:pl-0 lg:pr-12">
          {item.body}
        </p>
        <div className="px-6 pb-8 lg:pb-0 lg:pl-0 lg:pr-12">
          <Tags items={item.tags} onDark />
        </div>
      </div>
    </Reveal>
  );
}

/*
 * 4. The copy wraps an external SVG (shape-outside: url()), and the glass
 * panel behind it is cut by an inline clipPath holding the inverted path,
 * so the photo shows through the organic window the copy flows around.
 */
function OrganicRow({ item }) {
  const inverse = `M0 0H10000V10000H0Z${blobPath(ORGANIC_PAD, ORGANIC_PAD)}`;
  return (
    <Reveal className="cb-organic overflow-hidden rounded-3xl bg-inverse">
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="cb-blob-inverse" clipPathUnits="userSpaceOnUse">
            <path d={inverse} clipRule="evenodd" fillRule="evenodd" />
          </clipPath>
        </defs>
      </svg>
      <img
        src={item.image.src}
        srcSet={item.image.srcSet}
        sizes="100vw"
        alt={item.image.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-left-top brightness-125 saturate-150"
      />
      <div aria-hidden="true" className="cb-organic-panel bg-[#0a1428]/85 backdrop-blur-xl" />
      {/* The blob's rim, drawn over the window's edge. */}
      <svg
        aria-hidden="true"
        className="absolute hidden sm:block"
        style={{ left: ORGANIC_PAD, top: ORGANIC_PAD }}
        width={BLOB_SIZE}
        height={BLOB_SIZE}
        viewBox={`0 0 ${BLOB_SIZE} ${BLOB_SIZE}`}
      >
        <path d={blobPath()} fill="none" stroke="#14D8C4" strokeWidth="2" strokeDasharray="6 8" />
      </svg>

      <div className="relative">
        <div aria-hidden="true" className="cb-organic-float" />
        <p className="mb-3 mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-vivid sm:mt-6">
          <TbRoute size={16} aria-hidden="true" /> Connected, not bolted on
        </p>
        <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{item.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">{item.body}</p>
        <Tags items={item.tags} onDark />
        <div className="clear-both" />
      </div>
    </Reveal>
  );
}

/* 5–6. Image and copy side by side; the image carries a clip-path shape. */
function PlainRow({ item, flip }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
      <RevealImage
        image={item.image}
        clip={item.clip}
        from={flip ? "right" : "left"}
        className={flip ? "lg:col-start-2 lg:row-start-1" : "lg:col-start-1 lg:row-start-1"}
      />
      <Reveal
        from={flip ? "right" : "left"}
        className={`cb-glass relative z-10 rounded-3xl p-6 sm:p-9 lg:row-start-1 ${
          flip ? "lg:col-start-1 lg:-mr-20" : "lg:col-start-2 lg:-ml-20"
        }`}
      >
        <h3 className="font-display text-2xl font-semibold text-content md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-content-dim md:text-lg">{item.body}</p>
        <Tags items={item.tags} />
      </Reveal>
    </div>
  );
}

const ROWS = { circle: CircleRow, polygon: PolygonRow, inverted: InvertedRow, organic: OrganicRow };

export default function ChatbotServices() {
  return (
    <section id="cb-services" className="scroll-mt-24 bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={
            <>
              {services.titleLead} <span className="text-accent">{services.titleAccent}</span>
            </>
          }
          subtitle={services.subtitle}
        />

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
          {services.items.map((item, i) => {
            const Row = ROWS[item.shape];
            return (
              <article key={item.id}>
                {Row ? <Row item={item} /> : <PlainRow item={item} flip={i % 2 === 1} />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
