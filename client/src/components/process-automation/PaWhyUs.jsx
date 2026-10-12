import SectionHeading from "../SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import PaIcon from "./PaIcon";
import PaTitle from "./PaTitle";
import { whyUs } from "../../data/processAutomationData";

/** Three pillars and the company numbers, all from shared data. */
export default function PaWhyUs() {
  return (
    <section className="bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          title={<PaTitle lead={whyUs.titleLead} accent={whyUs.titleAccent} />}
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {whyUs.pillars.map((p) => (
            <StaggerItem
              key={p.accent}
              className="group rounded-3xl border border-line bg-surface-card p-6 shadow-card transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[rgb(var(--pa-accent))] md:p-8"
            >
              {/* Octagon badge cut with clip-path; turns a notch on hover. */}
              <span
                className="grid h-14 w-14 place-items-center bg-inverse text-[#13D4D4] transition-transform duration-500 group-hover:rotate-45"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              >
                <PaIcon name={p.icon} size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-content md:text-2xl">
                <span className="text-pa-accent">{p.accent}</span> {p.rest}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-content-dim">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal
          as="dl"
          className="pa-dark mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-4"
        >
          {whyUs.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse bg-inverse px-5 py-7 text-center md:py-9"
            >
              <dt className="mt-1 text-sm text-white/65 md:text-base">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold text-pa-accent md:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
