import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import PaTitle from "./PaTitle";
import { stages } from "../../data/processAutomationData";

const ITEMS = stages.items;

/** Growth stages as an ARIA tab set; the glass panel swaps with a short slide. */
export default function PaStages() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const reduced = useReducedMotion();
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
    <section className="pa-grid-light relative bg-pa-panel py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={stages.eyebrow}
          title={<PaTitle lead={stages.titleLead} accent={stages.titleAccent} />}
          subtitle={stages.subtitle}
        />

        <div
          role="tablist"
          aria-label="Business stages"
          onKeyDown={onKeyDown}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-2 rounded-2xl bg-surface-card p-1.5 shadow-card sm:grid-cols-4"
        >
          {ITEMS.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.label}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`pa-stage-tab-${i}`}
                aria-selected={selected}
                aria-controls="pa-stage-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`relative rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-ring md:text-base ${
                  selected ? "text-white" : "text-content-dim hover:text-content"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId={reduced ? undefined : "pa-stage-pill"}
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl bg-inverse"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id="pa-stage-panel"
          role="tabpanel"
          aria-labelledby={`pa-stage-tab-${active}`}
          className="mx-auto mt-8 max-w-4xl"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.label}
              initial={reduced ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="pa-glass-light grid grid-cols-1 gap-8 rounded-3xl p-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:p-10"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold text-content md:text-3xl">
                  For <span className="text-pa-accent">{item.label}</span>
                </h3>
                <p className="mt-4 text-base leading-relaxed text-content-dim md:text-lg">
                  {item.body}
                </p>
              </div>
              <ul className="space-y-3 self-center">
                {item.focus.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-xl bg-surface-card px-4 py-3 text-content"
                  >
                    <ArrowRight size={16} aria-hidden="true" className="shrink-0 text-pa-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
