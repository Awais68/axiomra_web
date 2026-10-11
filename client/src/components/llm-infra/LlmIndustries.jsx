import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "../SectionHeading";
import LlmTitle from "./LlmTitle";
import { industries } from "../../data/llmInfrastructureData";
import { industries as industryPages } from "../../data/industriesData";
import { industryPath } from "../../routes.constants";

const ITEMS = industries.items;
// Photo and alt come from the industry pages, so both always describe the same picture.
const PHOTOS = Object.fromEntries(industryPages.map((p) => [p.slug, { src: p.image, alt: p.alt }]));
const HAS_PAGE = new Set(industryPages.map((p) => p.slug));

/** Industries as an ARIA tab set; the panel pairs a photo with LLM use cases. */
export default function LlmIndustries() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const reduced = useReducedMotion();
  const item = ITEMS[active];
  const photo = PHOTOS[item.slug];

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
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={industries.eyebrow}
          title={<LlmTitle lead={industries.titleLead} accent={industries.titleAccent} />}
          subtitle={industries.subtitle}
        />

        <div
          role="tablist"
          aria-label="Industries"
          onKeyDown={onKeyDown}
          className="scrollbar-hide -mx-4 mt-12 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {ITEMS.map((ind, i) => {
            const selected = i === active;
            return (
              <button
                key={ind.slug}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`llm-ind-tab-${ind.slug}`}
                aria-selected={selected}
                aria-controls="llm-ind-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-ring md:text-base ${
                  selected
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-surface-card text-content-dim hover:border-brand/50 hover:text-content"
                }`}
              >
                {ind.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="llm-ind-panel"
          aria-labelledby={`llm-ind-tab-${item.slug}`}
          tabIndex={0}
          className="mt-10 focus-ring"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.slug}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative isolate grid grid-cols-1 overflow-hidden rounded-3xl bg-inverse lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[28rem]">
                {photo && (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="p-7 md:p-10">
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent-vivid">
                  Private LLMs for
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-white">
                  {item.label}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-white/80">{item.summary}</p>
                <ul className="mt-6 space-y-3">
                  {item.useCases.map((u) => (
                    <li key={u} className="flex gap-3 text-base text-white/85">
                      <Check
                        size={20}
                        className="mt-0.5 shrink-0 text-accent-vivid"
                        aria-hidden="true"
                      />
                      {u}
                    </li>
                  ))}
                </ul>
                {HAS_PAGE.has(item.slug) && (
                  <Link
                    to={industryPath(item.slug)}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-accent-vivid hover:underline focus-ring"
                  >
                    Explore AI for {item.label}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
