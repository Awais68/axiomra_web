import { Layers, Scale, ShieldCheck } from "lucide-react";
import SectionHeading from "../SectionHeading";
import StatCounter from "../StatCounter";
import { Stagger, StaggerItem } from "../motion/Reveal";
import { whyUs } from "../../data/chatbotData";

const ICONS = { shield: ShieldCheck, layers: Layers, scale: Scale };

export default function ChatbotWhyUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          title={
            <>
              {whyUs.titleLead} <span className="text-accent">{whyUs.titleAccent}</span>
            </>
          }
        />

        <Stagger as="ul" className="mt-14 grid gap-6 md:grid-cols-3">
          {whyUs.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <StaggerItem
                as="li"
                key={item.title}
                className="rounded-3xl border border-line bg-surface-card p-7 transition-transform hover:-translate-y-1"
              >
                <span className="cb-clip-hex grid h-14 w-14 place-items-center bg-inverse text-accent-vivid">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-content md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-content-dim">{item.body}</p>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div
          data-nav-tone="dark"
          className="mt-10 grid grid-cols-2 gap-6 rounded-3xl bg-inverse p-8 md:grid-cols-4 md:p-10"
        >
          {whyUs.stats.map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} onInverse />
          ))}
        </div>
      </div>
    </section>
  );
}
