import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion/Reveal";
import PaTitle from "./PaTitle";
import { industries } from "../../data/processAutomationData";
import { INDUSTRIES_PATH, industryPath } from "../../routes.constants";

/**
 * Industries as tall photo columns. On desktop the hovered or focused column
 * widens (flex-grow, CSS only) and reveals its line on a glass plate; on
 * mobile the columns become a horizontal snap scroller with every line shown.
 */
export default function PaIndustries() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={industries.eyebrow}
          title={<PaTitle lead={industries.titleLead} accent={industries.titleAccent} />}
          subtitle={industries.subtitle}
        />

        <Reveal
          as="ul"
          className="pa-ind-strip -mx-4 mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:h-[520px] lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {industries.items.map((ind, i) => {
            const open = i === active;
            return (
              <li
                key={ind.slug}
                data-open={open || undefined}
                onMouseEnter={() => setActive(i)}
                className="pa-ind-col relative h-[420px] w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[46%] lg:h-full lg:w-auto lg:shrink"
              >
                <Link
                  to={industryPath(ind.slug)}
                  onFocus={() => setActive(i)}
                  className="group absolute inset-0 block focus-ring"
                >
                  <img
                    src={ind.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-[#070D1F]/45" />
                  <span className="pa-ind-label absolute left-5 top-5 font-display text-xl font-semibold text-white">
                    {ind.label}
                  </span>
                  <span className="pa-ind-plate pa-glass absolute inset-x-4 bottom-4 block rounded-2xl p-4 text-white">
                    <span className="block text-sm leading-relaxed text-white/85">{ind.line}</span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#13D4D4]">
                      Explore {ind.label}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </Reveal>

        <div className="mt-10 text-center">
          <Link
            to={INDUSTRIES_PATH}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-card px-6 py-3 font-semibold text-content transition-colors hover:border-[rgb(var(--pa-accent))] focus-ring"
          >
            {industries.ctaText}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
