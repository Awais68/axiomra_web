import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "../SectionHeading";
import SpectrumTitle from "./SpectrumTitle";
import { industries } from "../../data/businessIntelligenceData";
import { industryPath } from "../../routes.constants";

const ITEMS = industries.items;

/** Twelve industries as an ARIA tab set; the panel lists BI use cases. */
export default function BiIndustries() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const item = ITEMS[active];

  const onKeyDown = (e) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next;
    if (e.key in keys) next = (active + keys[e.key] + ITEMS.length) % ITEMS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = ITEMS.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="bi-industries" className="bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={industries.eyebrow}
          title={<SpectrumTitle lead={industries.titleLead} accent={industries.titleAccent} />}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">
          <div
            role="tablist"
            aria-label="Industries"
            aria-orientation="horizontal"
            onKeyDown={onKeyDown}
            className="grid grid-cols-2 gap-2.5 sm:grid-cols-3"
          >
            {ITEMS.map((ind, i) => {
              const selected = i === active;
              return (
                <button
                  key={ind.slug}
                  ref={(el) => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`bi-ind-tab-${ind.slug}`}
                  aria-selected={selected}
                  aria-controls="bi-ind-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-[border-color,background-color,box-shadow,color] duration-200 focus-ring md:text-base ${
                    selected
                      ? "border-brand bg-surface-card text-content shadow-[0_8px_30px_-12px_rgba(37,99,235,0.45)]"
                      : "border-line bg-surface-card/60 text-content-dim hover:border-brand/50 hover:text-content"
                  }`}
                >
                  {ind.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="bi-ind-panel"
            aria-labelledby={`bi-ind-tab-${item.slug}`}
            tabIndex={0}
            className="relative overflow-hidden rounded-2xl border border-line bg-surface-card p-7 shadow-card focus-ring md:p-9"
          >
            <span aria-hidden="true" className="bi-spectrum-bg absolute inset-x-0 top-0 h-1" />
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-content-faint">
              Build solutions for:
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-content md:text-3xl">
              {item.label}
            </h3>
            <ul className="mt-6 space-y-3">
              {item.useCases.map((u) => (
                <li key={u} className="flex gap-3 text-base text-content-dim md:text-lg">
                  <Check size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  {u}
                </li>
              ))}
            </ul>
            <Link
              to={industryPath(item.slug)}
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:underline focus-ring"
            >
              Explore AI for {item.label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
