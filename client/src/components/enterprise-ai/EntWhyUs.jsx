import SectionHeading from "../SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import EntIcon from "./EntIcon";
import EntTitle from "./EntTitle";
import { whyUs } from "../../data/enterpriseAiData";

/** Six differentiators and the company numbers, all from shared data. */
export default function EntWhyUs() {
  return (
    <section id="ent-why" className="bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          title={<EntTitle lead={whyUs.titleLead} accent={whyUs.titleAccent} />}
          subtitle={whyUs.subtitle}
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {whyUs.cards.map((c) => (
            <StaggerItem
              key={c.title}
              className="group rounded-2xl border border-line bg-surface-card p-6 shadow-card transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[rgb(var(--ent-accent))] md:p-7"
            >
              <span
                className="grid h-12 w-12 place-items-center bg-inverse text-[#2DE8D5] transition-transform duration-300 group-hover:rotate-[30deg]"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <EntIcon name={c.icon} size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-content md:text-2xl">
                {c.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-content-dim">{c.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal
          as="dl"
          className="ent-dark mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-4"
        >
          {whyUs.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse bg-inverse px-5 py-7 text-center md:py-9"
            >
              <dt className="mt-1 text-sm text-white/65 md:text-base">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold text-ent-accent md:text-5xl">
                {s.value}+
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
