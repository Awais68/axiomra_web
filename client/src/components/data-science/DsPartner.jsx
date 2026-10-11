import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import { partner, services } from "../../data/dataScienceData";

// The organic blob in objectBoundingBox units. Same outline as
// public/shapes/ds-blob.svg, which drives the float's shape-outside.
const BLOB =
  "M0 0H0.62C0.86 0.06 0.97 0.2 0.9 0.36C0.84 0.5 0.66 0.52 0.7 0.66C0.74 0.8 0.95 0.86 0.88 0.95C0.84 1 0.7 1 0.6 1H0Z";

// The same blob mapped into the wrapper's box (float is 40% wide, full
// height; x' = 0.4x + 0.025 for a ~shape-margin gutter), cut out of a full
// rectangle with evenodd: the colored panel is everything *but* the blob.
const BLOB_INVERSE =
  "M0 0H1V1H0Z " +
  "M0 0H0.273C0.369 0.06 0.413 0.2 0.385 0.36C0.361 0.5 0.289 0.52 0.305 0.66C0.321 0.8 0.405 0.86 0.377 0.95C0.361 1 0.305 1 0.265 1H0Z";

const photo = services.items.find((s) => s.id === "enterprise").image;

function BlobPhoto({ sizes }) {
  return (
    // Clip the box, not the img: the img's Ken Burns scale would grow the blob.
    <div className="ds-blob-clip h-full w-full overflow-hidden">
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes={sizes}
        alt=""
        loading="lazy"
        decoding="async"
        className="ds-kenburns h-full w-full object-cover"
      />
    </div>
  );
}

/**
 * Closing pitch. From lg up the photo float uses an external SVG for
 * shape-outside, so the copy follows the blob's curves; the colored panel
 * behind the copy is clipped with the inline inverted clipPath below.
 * Below lg the blob photo stacks above the copy.
 */
export default function DsPartner() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-surface py-20 md:py-28">
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="ds-blob" clipPathUnits="objectBoundingBox">
            <path d={BLOB} />
          </clipPath>
          <clipPath id="ds-blob-inverse" clipPathUnits="objectBoundingBox">
            <path d={BLOB_INVERSE} clipRule="evenodd" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="ds-blob-wrap overflow-hidden lg:overflow-visible rounded-[2rem] bg-[rgb(var(--ds-accent)/0.12)] lg:rounded-none lg:bg-transparent">
          <div
            aria-hidden="true"
            className="ds-blob-inverse hidden rounded-r-[2rem] bg-[rgb(var(--ds-accent)/0.12)] lg:block"
          />

          {/* Phones and tablets. */}
          <div className="h-72 sm:h-96 lg:hidden">
            <BlobPhoto sizes="92vw" />
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
            className="ds-blob-float relative hidden lg:block"
          >
            <BlobPhoto sizes="38vw" />
          </motion.div>

          <div className="relative px-6 pb-10 pt-8 sm:px-10 lg:py-14 lg:pr-14">
            <Reveal>
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent md:text-base">
                {partner.eyebrow}
              </p>
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-content md:text-4xl xl:text-5xl">
                {partner.title}
              </h2>
            </Reveal>
            <Stagger className="mt-8 space-y-6">
              {partner.pillars.map((p, i) => (
                <StaggerItem key={p.title}>
                  <h3 className="flex items-baseline gap-3 font-display text-xl font-semibold text-content md:text-2xl">
                    <span className="font-mono text-base text-[rgb(var(--ds-accent))]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-content-dim">{p.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
