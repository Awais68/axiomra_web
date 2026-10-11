import SectionHeading from "../SectionHeading";
import { Stagger, StaggerItem } from "../motion/Reveal";
import ClipReveal from "../motion/ClipReveal";
import { gains } from "../../data/botAutomationData";

/**
 * A sticky heading and photo on the left; six numbered gains scroll past on
 * the right. The photo is cut with a tab shape and opens like a shutter.
 */
export default function BotGains() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={gains.eyebrow}
            title={
              <>
                {gains.titleLead} <span className="text-accent">{gains.titleAccent}</span>
              </>
            }
            subtitle={gains.subtitle}
          />
          <ClipReveal
            closed="inset(100% 0 0 0)"
            open="inset(0% 0 0 0)"
            transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            wrapperClassName="mt-10"
          >
            <img
              src={gains.image.src}
              srcSet={gains.image.srcSet}
              sizes="(min-width: 1024px) 40vw, 100vw"
              alt={gains.image.alt}
              loading="lazy"
              decoding="async"
              width="1400"
              height="933"
              className="ba-clip-tab aspect-[3/2] w-full object-cover"
            />
          </ClipReveal>
        </div>

        <Stagger as="ol" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {gains.items.map((g, i) => (
            <StaggerItem
              as="li"
              key={g.title}
              className="group relative overflow-hidden rounded-3xl border border-line bg-surface-card p-7 transition-transform hover:-translate-y-1"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-4 font-display text-[6.5rem] font-semibold leading-none text-accent/10 transition-colors group-hover:text-accent/20"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="ba-clip-notch-sm inline-grid h-9 w-9 place-items-center bg-inverse font-mono text-sm font-semibold text-accent-vivid">
                {i + 1}
              </span>
              <h3 className="relative mt-5 font-display text-xl font-semibold text-content md:text-2xl">
                {g.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-content-dim">{g.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
