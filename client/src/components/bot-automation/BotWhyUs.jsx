import { TbBook2, TbBuildingFactory2, TbEye, TbLifebuoy, TbRoute, TbTarget } from "react-icons/tb";
import SectionHeading from "../SectionHeading";
import StatCounter from "../StatCounter";
import { Stagger, StaggerItem } from "../motion/Reveal";
import { whyUs } from "../../data/botAutomationData";

const ICONS = [TbBuildingFactory2, TbRoute, TbLifebuoy, TbBook2, TbEye, TbTarget];

export default function BotWhyUs() {
  return (
    <section id="ba-why" className="scroll-mt-24 bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          title={
            <>
              {whyUs.titleLead} <span className="text-accent">{whyUs.titleAccent}</span>
            </>
          }
          subtitle={whyUs.subtitle}
        />

        <div
          data-nav-tone="dark"
          className="ba-clip-notch relative mt-14 grid grid-cols-2 gap-6 overflow-hidden bg-inverse p-8 md:grid-cols-4 md:p-10"
        >
          <div aria-hidden="true" className="ba-grid absolute inset-0 opacity-60" />
          {whyUs.stats.map((s) => (
            <div key={s.label} className="relative">
              <StatCounter value={s.value} label={s.label} onInverse />
            </div>
          ))}
        </div>

        <Stagger as="ul" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.reasons.map((r, i) => {
            const Icon = ICONS[i];
            return (
              <StaggerItem
                as="li"
                key={r.title}
                className="ba-glass rounded-3xl p-7 transition-transform hover:-translate-y-1"
              >
                <span className="ba-clip-hex grid h-14 w-16 place-items-center bg-inverse text-accent-vivid">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-content md:text-2xl">
                  {r.title}
                </h3>
                <p className="mt-3 leading-relaxed text-content-dim">{r.body}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
