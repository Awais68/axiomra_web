import { motion } from "framer-motion";
import { Target } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion/Reveal";
import ClipReveal from "../motion/ClipReveal";
import LlmTitle from "./LlmTitle";
import { services } from "../../data/llmInfrastructureData";

// The image opens from a thin chamfered sliver to the full frame, mirrored on alternate rows.
const CLOSED_L = "polygon(0% 0%, 8% 0%, 0% 12%, 0% 100%, 0% 100%)";
const CLOSED_R = "polygon(100% 0%, 100% 0%, 100% 88%, 92% 100%, 100% 100%)";
const OPEN_L = "polygon(0% 0%, 100% 0%, 100% 88%, 92% 100%, 0% 100%)";
const OPEN_R = OPEN_L;

function ServicePhoto({ image, flip }) {
  return (
    <ClipReveal
      className="relative aspect-[4/3] overflow-hidden bg-inverse"
      closed={flip ? CLOSED_R : CLOSED_L}
      open={flip ? OPEN_R : OPEN_L}
      transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
    >
      <motion.img
        src={image.src}
        srcSet={image.srcSet}
        sizes="(min-width: 1024px) 40vw, 100vw"
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        variants={{ closed: { scale: 1.18 }, open: { scale: 1 } }}
        transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
      />
    </ClipReveal>
  );
}

/** Eight services as alternating photo/text rows. */
export default function LlmServices() {
  return (
    <section id="llm-services" className="scroll-mt-24 bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={<LlmTitle lead={services.titleLead} accent={services.titleAccent} />}
          subtitle={services.subtitle}
        />

        <ol className="mt-16 space-y-20 md:space-y-28">
          {services.items.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <li
                key={s.id}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <ServicePhoto image={s.image} flip={flip} />
                </div>

                <Reveal from={flip ? "right" : "left"}>
                  {/* shape-outside and clip-path share one polygon, so the title and
                      lead wrap the badge's exact chamfered edge. */}
                  <div className="flow-root">
                    <span
                      aria-hidden="true"
                      className="llm-float-poly flex items-start bg-brand p-3 font-display text-3xl font-semibold text-white"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-content md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-content">{s.lead}</p>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-content-dim md:text-lg">
                    {s.body}
                  </p>
                  <p className="llm-glass-light mt-6 flex gap-3 rounded-xl p-4 text-base text-content-dim">
                    <Target size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-content">Best for: </strong>
                      {s.bestFor}
                    </span>
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
