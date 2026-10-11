import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Stagger, StaggerItem } from "../motion/Reveal";
import PaTitle from "./PaTitle";
import { impact } from "../../data/processAutomationData";

const EASE = [0.65, 0, 0.35, 1];

/**
 * Sticky intro and photo on the left, impact cards on the right. The photo
 * carries an inverted clip-path: a solid orange frame with a chevron-shaped
 * hole cut out of it (evenodd), so the quote reads as sitting in the cut-out.
 */
export default function PaImpact() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={impact.eyebrow}
            title={<PaTitle lead={impact.titleLead} accent={impact.titleAccent} />}
            subtitle={impact.body}
          />
          <figure className="relative mt-10 aspect-[3/2] overflow-hidden rounded-3xl">
            <img
              src={impact.image.src}
              srcSet={impact.image.srcSet}
              sizes="(min-width: 1024px) 40vw, 100vw"
              alt={impact.image.alt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="pa-drift h-full w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[#070D1F]/65" />
            <motion.div
              aria-hidden="true"
              initial={reduced ? false : { scale: 1.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="pa-cutout-frame absolute inset-0 bg-pa-accent"
            />
            <blockquote className="absolute inset-[20%_16%] grid place-items-center text-center">
              <div>
                <Quote size={22} aria-hidden="true" className="mx-auto mb-2 text-[#2DE8D5]" />
                <p className="font-display text-base font-semibold leading-snug text-white sm:text-xl lg:text-2xl">
                  {impact.quote}
                </p>
              </div>
            </blockquote>
          </figure>
        </div>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
          {impact.items.map((it, i) => (
            <StaggerItem
              key={it.title}
              className="group relative overflow-hidden rounded-3xl border border-line bg-surface-card p-6 shadow-card transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[rgb(var(--pa-accent))] md:p-8"
            >
              <span className="font-mono text-sm tracking-[0.2em] text-pa-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-content md:text-2xl">
                {it.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-content-dim">{it.body}</p>
              {/* Corner notch: a small clipped triangle that grows on hover. */}
              <span
                aria-hidden="true"
                className="absolute right-0 top-0 h-10 w-10 bg-pa-accent transition-transform duration-300 group-hover:scale-125"
                style={{
                  clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
                  transformOrigin: "top right",
                }}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
