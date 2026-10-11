import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import AutomationCanvas from "./AutomationCanvas";
import BotRunPanel from "./BotRunPanel";
import { hero } from "../../data/botAutomationData";
import hero1200 from "../../assets/bot-automation/hero-1200.webp";
import hero2400 from "../../assets/bot-automation/hero-2400.webp";

/**
 * Full-bleed photo hero, in the home hero's manner: one photo with a slow
 * Ken Burns push-in and the copy fading up in CSS ([data-fade]) so the H1,
 * the LCP element, paints with the prerendered HTML. On top of that, the
 * WebGL work-queue ring turns behind a glass console of live bot runs.
 */
export default function BotHero() {
  const reduced = useReducedMotion();

  return (
    <section
      data-nav-tone="dark"
      className="ba-hero-clip relative overflow-hidden bg-black pb-28 pt-28 md:pb-36 md:pt-40"
    >
      {/* The one hero photo. Its true-black ground matches the section, so it needs no fade. */}
      <div
        aria-hidden="true"
        className="ba-hero-photo absolute inset-0 overflow-hidden lg:left-[36%] lg:top-20"
      >
        <img
          src={hero1200}
          srcSet={`${hero1200} 1200w, ${hero2400} 2400w`}
          sizes="(min-width: 1024px) 65vw, 100vw"
          alt=""
          // eslint-disable-next-line react/no-unknown-property
          fetchpriority="high"
          decoding="async"
          className="ba-kenburns h-full w-full object-cover object-[60%_30%] opacity-50 lg:object-[75%_top] lg:opacity-100"
        />
      </div>
      {/* Flat scrim on small screens so the copy sits on a quiet ground. No gradients. */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/50 lg:hidden" />
      <div aria-hidden="true" className="ba-grid absolute inset-0 opacity-50 lg:right-[65%]" />

      {/* The work-queue ring orbits the robot's head. */}
      <AutomationCanvas className="right-[8%] top-[2%] hidden h-[36rem] w-[36rem] lg:block xl:right-[11%]" />

      <div className="relative z-10 mx-auto grid max-w-8xl grid-cols-1 items-end gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8">
        <div className="max-w-2xl">
          <p
            data-fade="0"
            className="ba-glass-dark mb-7 inline-flex items-center gap-2 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/80 sm:text-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-vivid" />
            {hero.eyebrow}
          </p>

          <h1
            data-fade="1"
            className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-[4.25rem]"
          >
            {hero.titleLead} <span className="text-accent-vivid">{hero.titleAccent}</span>
          </h1>

          <p
            data-fade="2"
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            {hero.body}
          </p>

          <div
            data-fade="3"
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-vivid px-8 py-4 text-base font-semibold text-on-accent transition-[transform,background-color] hover:scale-[1.02] hover:bg-accent-vivid-hover focus-ring md:text-lg"
            >
              {hero.ctaText}
              <ArrowUpRight
                size={19}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href="#ba-services"
              className="ba-glass-dark inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10 focus-ring md:text-lg"
            >
              {hero.secondaryCtaText}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <ul data-fade="4" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
            {hero.proof.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check size={16} className="text-accent-vivid" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md self-end lg:mr-0 lg:mt-56">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 40, rotateX: 12 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ transformPerspective: 900 }}
            className="relative"
          >
            <motion.div
              animate={reduced ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <BotRunPanel runs={hero.runs} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
