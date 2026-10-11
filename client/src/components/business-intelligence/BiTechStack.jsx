import { useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import BrandIcon from "../tech/BrandIcon";
import SpectrumTitle from "./SpectrumTitle";
import { stack } from "../../data/businessIntelligenceData";

const GROUPS = stack.groups;

/** Tabbed static grid of tools; the only motion is a hover glow. */
export default function BiTechStack() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const group = GROUPS[active];

  const onKeyDown = (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + GROUPS.length) % GROUPS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="bi-stack" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={stack.eyebrow}
          title={<SpectrumTitle lead={stack.titleLead} accent={stack.titleAccent} />}
        />

        <div
          role="tablist"
          aria-label="Technology categories"
          onKeyDown={onKeyDown}
          className="-mx-4 mt-12 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        >
          {GROUPS.map((g, i) => {
            const selected = i === active;
            return (
              <button
                key={g.name}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`bi-stack-tab-${i}`}
                aria-selected={selected}
                aria-controls="bi-stack-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-ring md:text-base ${
                  selected
                    ? "border-transparent bg-inverse text-inverse-fg"
                    : "border-line text-content-dim hover:border-brand/50 hover:text-content"
                }`}
              >
                {g.name}
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id="bi-stack-panel" aria-labelledby={`bi-stack-tab-${active}`}>
          <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">
            {group.tools.map((t) => (
              <li
                key={t.name}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-line bg-surface-card p-5 transition-[border-color,box-shadow] duration-300 hover:border-brand/40 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_18px_40px_-18px_rgba(59,130,246,0.55)]"
              >
                <span
                  aria-hidden="true"
                  className="bi-spectrum-bg pointer-events-none absolute -inset-px -z-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-[0.12]"
                />
                <BrandIcon name={t.name} slug={t.slug} size={36} tile className="relative" />
                <span className="relative text-base font-medium text-content md:text-lg">
                  {t.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
