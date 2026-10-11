import { Link2, Scale, ShieldAlert, SlidersHorizontal, Timer, TrendingUp } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import LlmTitle from "./LlmTitle";
import { outgrown } from "../../data/llmInfrastructureData";

const ICONS = { ShieldAlert, Scale, TrendingUp, Link2, Timer, SlidersHorizontal };

/** The problem: why public APIs stop fitting. Intro text wraps a circular photo. */
export default function LlmOutgrown() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow={outgrown.eyebrow}
          title={<LlmTitle lead={outgrown.titleLead} accent={outgrown.titleAccent} />}
        />

        {/* shape-outside: circle(50%) makes the paragraphs follow the photo's round edge. */}
        <Reveal className="mt-10 max-w-4xl text-lg leading-relaxed text-content-dim md:text-xl">
          <img
            src={outgrown.introImage.src}
            alt={outgrown.introImage.alt}
            width="200"
            height="200"
            loading="lazy"
            decoding="async"
            className="llm-float-circle"
          />
          {outgrown.intro.map((p) => (
            <p key={p.slice(0, 24)} className="mb-5 last:mb-0">
              {p}
            </p>
          ))}
        </Reveal>

        <Stagger className="clear-both mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outgrown.pains.map((pain) => {
            const Icon = ICONS[pain.icon];
            return (
              <StaggerItem
                key={pain.title}
                className="llm-glass-light group relative rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-content md:text-2xl">
                  {pain.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-content-dim">{pain.body}</p>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal
          as="p"
          className="mt-12 border-l-4 border-accent-vivid pl-5 font-display text-xl font-medium text-content md:text-2xl"
        >
          {outgrown.closing}
        </Reveal>
      </div>
    </section>
  );
}
