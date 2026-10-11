import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import BrandIcon from "../tech/BrandIcon";
import LlmTitle from "./LlmTitle";
import { stack } from "../../data/llmInfrastructureData";

const GROUPS = stack.groups;

/** Tool groups as tabs; each panel is a grid of logo tiles. */
export default function LlmTechStack() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const reduced = useReducedMotion();
  const group = GROUPS[active];

  const onKeyDown = (e) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next;
    if (e.key in keys) next = (active + keys[e.key] + GROUPS.length) % GROUPS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = GROUPS.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={stack.eyebrow}
          title={<LlmTitle lead={stack.titleLead} accent={stack.titleAccent} />}
          subtitle={stack.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
          <div
            role="tablist"
            aria-label="Technology groups"
            onKeyDown={onKeyDown}
            className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0 lg:flex-col"
          >
            {GROUPS.map((g, i) => {
              const selected = i === active;
              return (
                <button
                  key={g.name}
                  ref={(el) => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`llm-stack-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="llm-stack-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-xl border px-5 py-3 text-left text-sm font-medium transition-colors focus-ring md:text-base ${
                    selected
                      ? "border-brand bg-brand text-white"
                      : "border-line bg-surface-card text-content-dim hover:border-brand/50 hover:text-content"
                  }`}
                >
                  {g.name}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="llm-stack-panel"
            aria-labelledby={`llm-stack-tab-${active}`}
            tabIndex={0}
            className="focus-ring"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={group.name}
                initial={reduced ? false : "hidden"}
                animate="show"
                exit={reduced ? undefined : { opacity: 0 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3"
              >
                {group.tools.map((t) => (
                  <motion.li
                    key={t.name}
                    variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                    className="llm-glass-light flex items-center gap-3 rounded-2xl p-4 md:p-5"
                  >
                    <BrandIcon name={t.name} slug={t.slug} size={36} tile />
                    <span className="text-sm font-medium text-content md:text-base">{t.name}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
