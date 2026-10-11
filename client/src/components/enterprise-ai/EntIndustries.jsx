import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "../SectionHeading";
import EntTitle from "./EntTitle";
import { industries } from "../../data/enterpriseAiData";
import { industryPath } from "../../routes.constants";

const ITEMS = industries.items;

/** Industries as an ARIA tab set; the panel swaps its use cases with a short slide. */
export default function EntIndustries() {
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
    <section id="ent-industries" className="bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={industries.eyebrow}
          title={<EntTitle lead={industries.titleLead} accent={industries.titleAccent} />}
          subtitle={industries.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
          <div
            role="tablist"
            aria-label="Industries"
            onKeyDown={onKeyDown}
            className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:content-start"
          >
            {ITEMS.map((ind, i) => {
              const selected = i === active;
              return (
                <button
                  key={ind.slug}
                  ref={(el) => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`ent-ind-tab-${ind.slug}`}
                  aria-selected={selected}
                  aria-controls="ent-ind-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`relative overflow-hidden rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-colors duration-200 focus-ring md:text-base ${
                    selected
                      ? "border-transparent text-white"
                      : "border-line bg-surface-card text-content-dim hover:border-[rgb(var(--ent-accent))] hover:text-content"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId={reduced ? undefined : "ent-ind-pill"}
                      aria-hidden="true"
                      className="absolute inset-0 -z-0 bg-inverse"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="relative">{ind.label}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="ent-ind-panel"
            aria-labelledby={`ent-ind-tab-${item.slug}`}
            tabIndex={0}
            className="ent-dark relative min-h-[22rem] overflow-hidden rounded-3xl bg-inverse p-7 focus-ring md:p-10"
          >
            <span
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-40 w-40 bg-ent-accent opacity-20"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={item.slug}
                initial={reduced ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="relative"
              >
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-white/60">
                  Enterprise AI for
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                  {item.label}
                </h3>
                <ul className="mt-6 space-y-3">
                  {item.useCases.map((u) => (
                    <li key={u} className="flex gap-3 text-base text-white/80 md:text-lg">
                      <Check
                        size={20}
                        className="mt-0.5 shrink-0 text-ent-accent"
                        aria-hidden="true"
                      />
                      {u}
                    </li>
                  ))}
                </ul>
                <Link
                  to={industryPath(item.slug)}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-ent-accent hover:underline focus-ring"
                >
                  Explore AI for {item.label}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
