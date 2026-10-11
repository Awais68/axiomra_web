import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import DsTitle from "./DsTitle";
import { intro } from "../../data/dataScienceData";

/**
 * "What we offer". The copy wraps around a round photo: a float with
 * shape-outside: circle(50%) and a matching clip-path (.ds-circle-float).
 */
export default function DsIntro() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-8xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent md:text-base">
              {intro.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-content md:text-5xl">
              <DsTitle lead={intro.titleLead} accent={intro.titleAccent} />
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flow-root">
            <motion.img
              src={intro.image.src}
              srcSet={intro.image.srcSet}
              sizes="200px"
              alt={intro.image.alt}
              width={200}
              height={200}
              loading="lazy"
              decoding="async"
              initial={reduced ? false : { scale: 0.6, rotate: -12 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 90, damping: 14 }}
              className="ds-circle-float object-cover"
            />
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mb-5 text-lg leading-relaxed text-content-dim">
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-2 content-center gap-4 sm:gap-5">
          {intro.stats.map((s, i) => (
            <StaggerItem
              key={s.label}
              from="scale"
              className={`rounded-3xl border border-line p-6 sm:p-8 ${
                i === 0 ? "bg-inverse text-inverse-fg" : "bg-surface-subtle"
              }`}
            >
              <p
                className={`font-display text-4xl font-semibold tracking-tight sm:text-5xl ${
                  i === 0 ? "text-[rgb(45_212_191)]" : "text-content"
                }`}
              >
                {s.value}
              </p>
              <p
                className={`mt-2 text-base ${i === 0 ? "text-inverse-fg/70" : "text-content-dim"}`}
              >
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
