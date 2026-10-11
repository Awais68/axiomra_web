import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { teamBand } from "../../data/dataScienceData";

/**
 * Mid-page pitch. From lg up the photo is a float whose shape-outside and
 * clip-path share one polygon (.ds-poly-float), so the copy wraps its exact
 * diagonal edge; the dark panel behind the copy is the inverted polygon
 * (.ds-poly-inverse), leaving a diagonal gutter between the two. Below lg the
 * photo stacks on top with a slanted foot instead.
 */
export default function DsTeamBand() {
  const reduced = useReducedMotion();
  const photo = (
    <img
      src={teamBand.image.src}
      srcSet={teamBand.image.srcSet}
      sizes="(min-width: 1024px) 40vw, 92vw"
      alt={teamBand.image.alt}
      width={1200}
      height={675}
      loading="lazy"
      decoding="async"
      // Luminosity over the solid teal fill: a duotone without a gradient.
      className="ds-kenburns h-full w-full object-cover mix-blend-luminosity"
    />
  );

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="ds-poly-wrap relative overflow-hidden rounded-[2rem] bg-inverse lg:bg-transparent">
          {/* Phones and tablets: photo on top, slanted foot. */}
          <div className="h-60 overflow-hidden bg-[rgb(var(--ds-accent))] [clip-path:polygon(0_0,100%_0,100%_82%,0_100%)] sm:h-72 lg:hidden">
            {photo}
          </div>

          <div
            aria-hidden="true"
            className="ds-poly-inverse absolute inset-0 hidden bg-inverse lg:block"
          />

          <motion.div
            initial={reduced ? false : { x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            className="ds-poly-float hidden overflow-hidden bg-[rgb(var(--ds-accent))] lg:block"
          >
            {photo}
          </motion.div>

          <div data-nav-tone="dark" className="relative px-6 pb-10 pt-6 sm:px-10 lg:py-16 lg:pr-14">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-[rgb(45_212_191)]">
              {teamBand.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-inverse-fg md:text-4xl xl:text-5xl">
              {teamBand.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-inverse-fg/75">{teamBand.body}</p>
            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[rgb(45_212_191)] px-7 py-3.5 text-base font-semibold text-inverse transition-transform hover:scale-[1.02] focus-ring"
            >
              {teamBand.ctaText}
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
