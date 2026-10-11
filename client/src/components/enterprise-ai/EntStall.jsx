import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, REVEAL_EASE } from "../motion/Reveal";
import ClipReveal from "../motion/ClipReveal";
import EntTitle from "./EntTitle";
import { stall } from "../../data/enterpriseAiData";
import { BOOKING_URL } from "../../lib/booking";
import strategy720 from "../../assets/enterprise-ai/strategy-720.webp";

/**
 * "Why enterprise AI stalls". The opening copy wraps around a round photo
 * (shape-outside: circle), and the production-ready checklist sits in a glass
 * pane over a photo that wipes open with a clip-path on scroll.
 */
export default function EntStall() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-start gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-ent-accent">
              {stall.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-content sm:text-4xl lg:text-5xl">
              <EntTitle lead={stall.titleLead} accent={stall.titleAccent} />
            </h2>
          </Reveal>

          <Reveal className="mt-8 text-lg leading-relaxed text-content-dim md:text-xl">
            {/* The float has to come before the text it wraps. */}
            <div className="ent-circle-float border-4 border-surface shadow-[0_0_0_2px_rgb(var(--ent-accent))]">
              <img
                src={strategy720}
                alt="Consultants mapping an enterprise AI roadmap"
                width={720}
                height={480}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            {stall.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mb-5">
                {p}
              </p>
            ))}
            <h3 className="mt-8 font-display text-2xl font-semibold text-content md:text-3xl">
              {stall.whoTitle}
            </h3>
            <p className="mt-3">{stall.whoBody}</p>
          </Reveal>

          <Reveal className="mt-10 clear-both">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-base font-semibold text-content transition-colors hover:border-[rgb(var(--ent-accent))] hover:text-ent-accent focus-ring md:text-lg"
            >
              {stall.ctaText}
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        {/* The checklist follows the wipe's own open/closed variants: an
            observer of its own inside the clipped frame only fired if the
            frame had opened while the list was still on screen. */}
        <ClipReveal
          wrapperClassName="relative lg:sticky lg:top-28"
          className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[4/3] lg:aspect-[4/5]"
          closed="inset(0% 0% 96% 0% round 28px)"
          open="inset(0% 0% 0% 0% round 28px)"
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        >
          <img
            src={stall.image.src}
            srcSet={stall.image.srcSet}
            sizes="(min-width: 1024px) 45vw, 100vw"
            alt={stall.image.alt}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#0A1428]/45" />

          <div className="ent-glass absolute inset-x-3 bottom-3 rounded-2xl p-5 sm:inset-x-6 sm:bottom-6 sm:p-7">
            <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
              {stall.readyTitle}
            </h3>
            <p className="mt-2 text-sm text-white/75 md:text-base">{stall.readyIntro}</p>
            <motion.ul
              className="mt-4 space-y-2.5"
              variants={{ open: { transition: { staggerChildren: 0.09, delayChildren: 0.6 } } }}
            >
              {stall.readyList.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    closed: { opacity: 0, x: 28 },
                    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: REVEAL_EASE } },
                  }}
                  className="flex gap-3 text-sm text-white md:text-base"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#2DE8D5] text-[#0A1428]">
                    <Check size={13} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}
