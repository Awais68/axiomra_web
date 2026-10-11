import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { industries } from "../../data/chatbotData";
import { industryPath } from "../../routes.constants";

/**
 * Tall photo panels. On desktop the active one widens (framer layout) and
 * reveals its use case; on phones they become a swipeable snap row.
 */
export default function ChatbotIndustries() {
  const [active, setActive] = useState(industries.items[0].slug);

  return (
    <section id="cb-industries" className="scroll-mt-24 py-20 md:py-28">
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

        <ul className="-mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] lg:mx-0 lg:h-[30rem] lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0">
          {industries.items.map((item) => {
            const open = active === item.slug;
            return (
              <motion.li
                key={item.slug}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 32 }}
                onMouseEnter={() => setActive(item.slug)}
                onFocus={() => setActive(item.slug)}
                className={`relative h-[26rem] w-[78vw] shrink-0 snap-center overflow-hidden rounded-3xl bg-inverse sm:w-[22rem] lg:h-full lg:w-auto lg:shrink ${
                  open ? "lg:flex-[3.2]" : "lg:flex-1"
                }`}
              >
                <Link to={industryPath(item.slug)} className="group block h-full focus-ring">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-[#03060c]/45" />
                  <div className="cb-glass-dark absolute inset-x-3 bottom-3 rounded-2xl p-5">
                    <p className="flex items-center justify-between gap-3 font-display text-xl font-semibold text-white">
                      {item.label}
                      <ArrowUpRight size={20} aria-hidden="true" className="text-accent-vivid" />
                    </p>
                    <p
                      className={`mt-2 text-sm leading-relaxed text-white/80 transition-opacity duration-300 lg:line-clamp-3 ${
                        open ? "lg:opacity-100" : "lg:hidden"
                      }`}
                    >
                      {item.use}
                    </p>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
