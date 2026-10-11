import { Check } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import ClipReveal from "../motion/ClipReveal";
import DsTitle from "./DsTitle";
import { services } from "../../data/dataScienceData";

const EASE = [0.22, 0.61, 0.36, 1];

/** Photo that wipes open with clip-path as it scrolls in, from the side it sits on. */
function ServicePhoto({ image, flip, index }) {
  const closed = flip ? "inset(0% 0% 0% 100% round 1.75rem)" : "inset(0% 100% 0% 0% round 1.75rem)";
  const open = "inset(0% 0% 0% 0% round 1.75rem)";

  return (
    <ClipReveal
      closed={closed}
      open={open}
      transition={{ duration: 1, ease: EASE }}
      className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-surface-inset"
    >
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes="(min-width: 1024px) 44vw, 92vw"
        alt={image.alt}
        width={1200}
        height={900}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <span className="ds-glass absolute left-5 top-5 rounded-full px-4 py-1.5 font-mono text-sm text-white">
        {String(index + 1).padStart(2, "0")}
      </span>
    </ClipReveal>
  );
}

export default function DsServices() {
  return (
    <section id="ds-services" className="scroll-mt-24 bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent md:text-base">
            {services.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-content md:text-5xl lg:text-6xl">
            <DsTitle lead={services.titleLead} accent={services.titleAccent} />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-content-dim">{services.subtitle}</p>
        </Reveal>

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
          {services.items.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={s.id}
                id={`ds-${s.id}`}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0"
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <ServicePhoto image={s.image} flip={flip} index={i} />
                </div>

                <Reveal
                  from={flip ? "right" : "left"}
                  delay={0.15}
                  className={`ds-glass-light relative z-10 rounded-[1.75rem] p-7 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)] sm:p-9 lg:p-11 ${
                    flip ? "lg:order-1 lg:-mr-16" : "lg:-ml-16"
                  }`}
                >
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-content md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-content-dim">{s.body}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-base text-content">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--ds-accent))] text-white">
                          <Check size={13} strokeWidth={3} aria-hidden="true" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
