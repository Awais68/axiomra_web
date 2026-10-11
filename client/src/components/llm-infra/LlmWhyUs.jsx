import { LifeBuoy, Layers, Rocket } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import LlmTitle from "./LlmTitle";
import { whyUs } from "../../data/llmInfrastructureData";

const ICONS = { Rocket, Layers, LifeBuoy };

// Same blob as public/shapes/llm-blob.svg (which shape-outside reads), cut out
// of the unit square. evenodd turns "square + blob" into "square minus blob".
const BLOB =
  "M0 0H0.3C0.41 0.04 0.45 0.2 0.39 0.34C0.33 0.47 0.43 0.58 0.41 0.73C0.39 0.9 0.27 1 0.14 1H0Z";

/**
 * Why Axiomra. On desktop the intro wraps an organic SVG shape: the float's
 * shape-outside is the external blob SVG, its clip-path is the inline inverse,
 * so the dark fill hugs the same edge the text follows and the photo shows
 * through the blob.
 */
export default function LlmWhyUs() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <clipPath id="llm-blob-inverse" clipPathUnits="objectBoundingBox" clipRule="evenodd">
          <path d={`M0 0H1V1H0Z ${BLOB}`} />
        </clipPath>
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow={whyUs.eyebrow}
          title={<LlmTitle lead={whyUs.titleLead} accent={whyUs.titleAccent} />}
        />

        <Reveal className="relative isolate mt-12 flow-root overflow-hidden rounded-3xl bg-inverse [--llm-float-h:24rem]">
          <img
            src={whyUs.introImage.src}
            alt={whyUs.introImage.alt}
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full object-cover lg:absolute lg:inset-x-0 lg:top-0 lg:-z-10 lg:aspect-auto lg:h-[var(--llm-float-h)]"
          />
          <div aria-hidden="true" className="llm-blob-float lg:bg-inverse" />
          {/* relative: a clip-path float paints like a positioned element, so the copy must be positioned too to stay on top. */}
          <div className="relative px-6 py-8 text-lg leading-relaxed text-white/85 md:px-10 md:py-10 lg:pl-0 lg:pr-12 lg:pt-12 md:text-xl">
            {whyUs.intro.map((p) => (
              <p key={p.slice(0, 24)} className="mb-5 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {whyUs.pillars.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <StaggerItem
                key={p.title}
                className="llm-glass-light rounded-2xl border-t-4 !border-t-accent-vivid p-7"
              >
                <Icon size={26} className="text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold text-content md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-content-dim">{p.body}</p>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Stagger
          as="dl"
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
        >
          {whyUs.stats.map((s) => (
            <StaggerItem
              key={s.label}
              className="flex flex-col bg-surface-card p-6 text-center md:p-8"
            >
              <dt className="order-2 mt-1 text-sm text-content-dim md:text-base">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold text-brand md:text-5xl">
                {s.value}
              </dd>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
