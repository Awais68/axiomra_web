import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import BrandIcon from "../tech/BrandIcon";
import { stack } from "../../data/chatbotData";

export default function ChatbotTechStack() {
  const [index, setIndex] = useState(0);
  const tabs = useRef([]);
  const group = stack.groups[index];

  const onKeyDown = (e) => {
    const last = stack.groups.length - 1;
    const next =
      e.key === "ArrowRight"
        ? index === last
          ? 0
          : index + 1
        : e.key === "ArrowLeft"
          ? index === 0
            ? last
            : index - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setIndex(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="cb-stack" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={stack.eyebrow}
          title={
            <>
              {stack.titleLead} <span className="text-accent">{stack.titleAccent}</span>
            </>
          }
          subtitle={stack.subtitle}
        />

        <div
          role="tablist"
          aria-label="Technology groups"
          onKeyDown={onKeyDown}
          className="cb-glass mx-auto mt-12 flex max-w-max gap-1 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none]"
        >
          {stack.groups.map((g, i) => {
            const selected = i === index;
            return (
              <button
                key={g.name}
                ref={(el) => (tabs.current[i] = el)}
                id={`cb-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls="cb-tabpanel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus-ring md:px-6 md:text-base ${
                  selected ? "text-inverse-fg" : "text-content-dim hover:text-content"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="cb-tab-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-inverse"
                  />
                )}
                <span className="relative">{g.name}</span>
              </button>
            );
          })}
        </div>

        <div id="cb-tabpanel" role="tabpanel" aria-labelledby={`cb-tab-${index}`} className="mt-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={group.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
            >
              {group.tools.map((tool) => (
                <li
                  key={tool.name}
                  className="cb-glass flex items-center gap-3 rounded-2xl px-4 py-4 transition-transform hover:-translate-y-0.5"
                >
                  <BrandIcon name={tool.name} slug={tool.slug} size={28} tile />
                  <span className="font-medium text-content">{tool.name}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
