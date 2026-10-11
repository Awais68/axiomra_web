import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { industries } from "../../data/botAutomationData";
import { industryPath } from "../../routes.constants";

/**
 * Industry tabs. The selected industry opens a panel: the photo cut with a
 * chevron, a glass card of the bots we build for it, and a link to the
 * industry page. Arrow keys move between tabs.
 */
export default function BotIndustries() {
  const [index, setIndex] = useState(0);
  const tabs = useRef([]);
  const item = industries.items[index];

  const onKeyDown = (e) => {
    const last = industries.items.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? index === last
          ? 0
          : index + 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
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
    <section id="ba-industries" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={industries.eyebrow}
          title={
            <>
              {industries.titleLead} <span className="text-accent">{industries.titleAccent}</span>
            </>
          }
          subtitle={industries.subtitle}
        />

        <div
          role="tablist"
          aria-label="Industries"
          onKeyDown={onKeyDown}
          className="-mx-4 mt-12 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:justify-center lg:px-0"
        >
          {industries.items.map((it, i) => {
            const selected = i === index;
            return (
              <button
                key={it.slug}
                ref={(el) => (tabs.current[i] = el)}
                id={`ba-ind-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls="ba-ind-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`relative shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors focus-ring md:text-base ${
                  selected
                    ? "border-transparent text-inverse-fg"
                    : "border-line text-content-dim hover:text-content"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="ba-ind-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-inverse"
                  />
                )}
                <span className="relative">{it.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id="ba-ind-panel"
          role="tabpanel"
          aria-labelledby={`ba-ind-tab-${index}`}
          className="mt-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-0"
            >
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                className="relative"
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="ba-clip-chevron aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
                />
              </motion.div>

              <div className="ba-glass relative z-10 rounded-3xl p-6 sm:p-9 lg:-ml-16">
                <h3 className="font-display text-2xl font-semibold text-content md:text-3xl">
                  {item.label}
                </h3>
                <p className="mt-3 leading-relaxed text-content-dim md:text-lg">{item.summary}</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Bots we build for
                </p>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {item.uses.map((u) => (
                    <li key={u} className="flex items-start gap-2.5 text-content">
                      <span className="ba-clip-notch-sm mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-accent-vivid text-on-accent">
                        <Check size={13} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-sm md:text-base">{u}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={industryPath(item.slug)}
                  className="mt-7 inline-flex items-center gap-1.5 font-semibold text-accent hover:underline focus-ring"
                >
                  Explore {item.label} <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-line p-6 text-center sm:flex-row sm:justify-between sm:text-left md:p-8">
          <p className="font-display text-xl font-semibold text-content md:text-2xl">
            Don&rsquo;t see your industry?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-inverse px-7 py-3.5 font-semibold text-inverse-fg transition-transform hover:-translate-y-0.5 focus-ring"
          >
            {industries.ctaText} <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
