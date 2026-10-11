import SectionHeading from "../SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import EntTitle from "./EntTitle";
import { challenges } from "../../data/enterpriseAiData";
import network1200 from "../../assets/enterprise-ai/network-1200.webp";

/**
 * Six blockers as glass cards over a dimmed photo, then the answer block,
 * whose copy wraps a hexagon float (shape-outside and clip-path share one
 * polygon, so the text hugs the painted shape).
 */
export default function EntChallenges() {
  return (
    <section
      data-nav-tone="dark"
      className="ent-dark relative isolate overflow-hidden bg-inverse py-20 md:py-28"
    >
      <img
        src={network1200}
        alt=""
        aria-hidden="true"
        width={1200}
        height={800}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#070B1F]/[0.88]" />

      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          onInverse
          eyebrow={challenges.eyebrow}
          title={<EntTitle lead={challenges.titleLead} accent={challenges.titleAccent} />}
          subtitle={challenges.subtitle}
        />

        <Stagger
          as="ol"
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {challenges.items.map((c, i) => (
            <StaggerItem
              as="li"
              key={c.title}
              className="ent-glass group relative rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7"
            >
              <span className="font-mono text-sm font-semibold tracking-[0.2em] text-ent-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-white md:text-2xl">
                {c.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">{c.body}</p>
              <span
                aria-hidden="true"
                className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-ent-accent transition-transform duration-500 group-hover:scale-x-100"
              />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="ent-glass mx-auto mt-14 max-w-5xl rounded-3xl p-6 sm:p-9 md:mt-16">
          <div className="ent-hex-float grid place-items-center bg-ent-accent text-[#04121A]">
            <span className="text-center font-display text-3xl font-bold leading-none sm:text-5xl">
              {challenges.items.length}
              <span className="mt-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs">
                blockers
              </span>
            </span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
            {challenges.addressTitle}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/75 md:text-lg">
            {challenges.addressBody}
          </p>
          <div className="clear-both" />
        </Reveal>
      </div>
    </section>
  );
}
