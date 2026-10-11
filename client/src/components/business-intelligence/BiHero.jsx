import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PrismCanvas from "./PrismCanvas";
import PrismKpis from "./PrismKpis";
import { hero, sampleKpis } from "../../data/businessIntelligenceData";

/**
 * Dark split hero. The copy renders immediately with no entrance animation,
 * because the H1 is the LCP element; all the motion lives in the prism.
 */
export default function BiHero() {
  return (
    <section
      data-nav-tone="dark"
      className="relative overflow-hidden bg-inverse pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div className="relative z-10 mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 lg:px-8">
        <div>
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 font-mono text-sm uppercase tracking-[0.18em] text-white/75">
            {hero.eyebrow}
          </p>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-inverse-fg sm:text-5xl xl:text-[3.75rem]">
            Turn Raw Data Into <span className="bi-spectrum-text">Decisions</span> You Can Defend
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-inverse-fg/70 md:text-xl">
            {hero.body}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-grad-sky px-8 py-4 text-base font-semibold text-inverse transition-transform hover:scale-[1.02] focus-ring md:text-lg"
            >
              {hero.ctaText}
              <ArrowUpRight
                size={19}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href="#bi-pipeline"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10 focus-ring md:text-lg"
            >
              {hero.secondaryCtaText}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <p className="mt-10 font-mono text-sm tracking-wide text-white/55">
            {hero.proof.join(" · ")}
          </p>
        </div>

        <div className="relative mx-auto aspect-[8/7] w-full max-w-[42rem]">
          <PrismCanvas />
          <PrismKpis kpis={sampleKpis} />
        </div>
      </div>
    </section>
  );
}
