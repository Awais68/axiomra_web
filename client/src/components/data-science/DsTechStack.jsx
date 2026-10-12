import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TbChartDots3 } from "react-icons/tb";
import BrandIcon from "../tech/BrandIcon";
import { Reveal } from "../motion/Reveal";
import DsTitle from "./DsTitle";
import { techStack } from "../../data/dataScienceData";

const TOOL_SLUGS = {
  Python: "python",
  "scikit-learn": "scikitlearn",
  PyTorch: "pytorch",
  TensorFlow: "tensorflow",
  "Hugging Face": "huggingface",
  MLflow: "mlflow",
  "Apache Spark": "apachespark",
  Airflow: "apacheairflow",
  dbt: "dbt",
  Kafka: "apachekafka",
  Pandas: "pandas",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Snowflake: "snowflake",
  Databricks: "databricks",
  Docker: "docker",
  Kubernetes: "kubernetes",
};

function ToolIcon({ name }) {
  const slug = TOOL_SLUGS[name];
  if (slug) return <BrandIcon name={name} slug={slug} size={24} tile />;

  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-[rgb(var(--ds-accent))] shadow-[0_1px_2px_rgba(15,23,41,0.12)] ring-1 ring-black/5">
      <TbChartDots3 size={20} aria-hidden="true" />
    </span>
  );
}

/** Tech stack: one glass card, a tab per tool group, chips that cascade in. */
export default function DsTechStack() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const baseId = useId();
  const group = techStack.groups[active];

  return (
    <section className="relative overflow-hidden bg-surface-subtle py-20 md:py-28">
      {/* Solid shapes behind the glass so the blur has something to bend. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="ds-hex absolute -left-16 top-24 h-64 w-72 bg-[rgb(var(--ds-accent)/0.22)]" />
        <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[rgb(var(--ds-accent-2)/0.18)]" />
        <div className="absolute right-1/3 top-10 h-24 w-24 rotate-12 rounded-3xl bg-[rgb(var(--ds-amber)/0.2)]" />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent md:text-base">
            {techStack.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-content md:text-5xl lg:text-6xl">
            <DsTitle lead={techStack.titleLead} accent={techStack.titleAccent} />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-content-dim">{techStack.subtitle}</p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="ds-glass-light mx-auto mt-14 max-w-5xl rounded-[2rem] p-5 sm:p-8 lg:p-10"
        >
          <div
            role="tablist"
            aria-label="Technology groups"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
          >
            {techStack.groups.map((g, i) => {
              const on = i === active;
              return (
                <button
                  key={g.name}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={on}
                  aria-controls={`${baseId}-panel`}
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-ring sm:text-base ${
                    on ? "text-white" : "text-content-dim hover:text-content"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId={`${baseId}-pill`}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-inverse"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative">{g.name}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${active}`}
            className="mt-8 min-h-[9rem]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={group.name}
                className="flex flex-wrap justify-center gap-3"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{ show: { transition: { staggerChildren: reduced ? 0 : 0.045 } } }}
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={
                      reduced
                        ? undefined
                        : {
                            hidden: { opacity: 0, y: 12, scale: 0.92 },
                            show: { opacity: 1, y: 0, scale: 1 },
                          }
                    }
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2.5 rounded-2xl border border-line bg-surface-card px-5 py-3 text-base font-medium text-content"
                  >
                    <ToolIcon name={item} />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
