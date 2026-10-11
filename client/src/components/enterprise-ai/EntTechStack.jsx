import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import BrandIcon from "../tech/BrandIcon";
import EntIcon from "./EntIcon";
import EntTitle from "./EntTitle";
import { stack } from "../../data/enterpriseAiData";

const GROUPS = stack.groups;

/** Tabbed grid of tools; the active group's tiles cascade in. */
export default function EntTechStack() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const reduced = useReducedMotion();
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
    <section id="ent-stack" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={stack.eyebrow}
          title={<EntTitle lead={stack.titleLead} accent={stack.titleAccent} />}
          subtitle={stack.subtitle}
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
                id={`ent-stack-tab-${i}`}
                aria-selected={selected}
                aria-controls="ent-stack-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-ring md:text-base ${
                  selected
                    ? "border-transparent bg-inverse text-inverse-fg"
                    : "border-line text-content-dim hover:border-[rgb(var(--ent-accent))] hover:text-content"
                }`}
              >
                {g.name}
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id="ent-stack-panel" aria-labelledby={`ent-stack-tab-${active}`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={active}
              initial="hidden"
              animate="show"
              exit={reduced ? undefined : { opacity: 0 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: reduced ? 0 : 0.05 } },
              }}
              className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
            >
              {group.tools.map((t) => (
                <motion.li
                  key={t.name}
                  variants={
                    reduced
                      ? undefined
                      : { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }
                  }
                  className="flex items-center gap-3 rounded-2xl border border-line bg-surface-card p-4 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--ent-accent))] sm:gap-4 sm:p-5"
                >
                  {t.slug || !t.icon ? (
                    <BrandIcon name={t.name} slug={t.slug} size={32} tile />
                  ) : (
                    // Vendors whose marks can't be shipped get a neutral glyph, not a monogram.
                    <span
                      aria-hidden="true"
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-inverse text-[#2DE8D5]"
                    >
                      <EntIcon name={t.icon} size={20} />
                    </span>
                  )}
                  <span className="text-sm font-medium text-content sm:text-base md:text-lg">
                    {t.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
