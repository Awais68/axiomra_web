import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, Rocket, Store, TrendingUp } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Stagger, StaggerItem } from "../motion/Reveal";
import { stages } from "../../data/chatbotData";
import stages700 from "../../assets/chatbot/stages-700.webp";
import stages1200 from "../../assets/chatbot/stages-1200.webp";

const ICONS = [Rocket, TrendingUp, Store, Building2];

export default function ChatbotStages() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section ref={ref} className="bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={stages.eyebrow}
          title={
            <>
              {stages.titleLead} <span className="text-accent">{stages.titleAccent}</span>
            </>
          }
          subtitle={stages.subtitle}
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[5fr_7fr]">
          <div className="cb-clip-hex relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-inverse">
            <motion.img
              style={{ y }}
              src={stages1200}
              srcSet={`${stages700} 700w, ${stages1200} 1200w`}
              sizes="(min-width: 1024px) 28rem, 90vw"
              alt="A business owner checking customer messages on a phone"
              loading="lazy"
              decoding="async"
              className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover"
            />
          </div>

          <Stagger as="ul" className="grid gap-4 sm:grid-cols-2">
            {stages.items.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <StaggerItem as="li" key={item.title} className="cb-glass rounded-3xl p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-vivid/15 text-accent">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-content">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-content-dim">{item.body}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
