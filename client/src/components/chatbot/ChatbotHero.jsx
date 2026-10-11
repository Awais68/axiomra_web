import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import NeuralCanvas from "./NeuralCanvas";
import HeroChatWindow from "./HeroChatWindow";
import { hero } from "../../data/chatbotData";
import robot1200 from "../../assets/chatbot/hero-robot-1200.webp";
import robot2400 from "../../assets/chatbot/hero-robot-2400.webp";

/**
 * Dark hero built on one photo. The photo carries the motion the home hero
 * has (a slow Ken Burns push-in, in CSS so it starts with the first paint),
 * a scan line reads down it, the WebGL neural mesh glows over the robot's
 * head, and a glass chat window plays a live exchange. The H1 is the LCP
 * element, so the copy itself renders with no entrance animation.
 */
export default function ChatbotHero() {
  const reduced = useReducedMotion();

  return (
    <section
      data-nav-tone="dark"
      className="cb-hero-clip relative overflow-hidden bg-[#03060c] pb-24 pt-28 md:pb-32 md:pt-36"
    >
      {/* The one hero image. Black ground in the photo meets the near-black section. */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden lg:left-[30%]">
        <img
          src={robot1200}
          srcSet={`${robot1200} 1200w, ${robot2400} 2400w`}
          sizes="(min-width: 1024px) 70vw, 100vw"
          alt=""
          // eslint-disable-next-line react/no-unknown-property
          fetchpriority="high"
          decoding="async"
          className="cb-kenburns h-full w-full object-cover object-[62%_30%] opacity-45 lg:opacity-100"
        />
        <span className="cb-scan" />
      </div>
      {/* Flat scrim on small screens so the copy sits on a quiet ground. */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#03060c]/55 lg:hidden" />

      <NeuralCanvas className="right-[-6%] top-[6%] hidden h-[34rem] w-[34rem] opacity-80 lg:block xl:right-[2%]" />

      <div className="relative z-10 mx-auto grid max-w-8xl grid-cols-1 items-end gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8">
        <div className="max-w-2xl">
          <p className="cb-glass-dark mb-7 inline-flex items-center gap-2 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/80 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-accent-vivid" />
            {hero.eyebrow}
          </p>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-[4rem]">
            {hero.titleLead} <span className="text-accent-vivid">{hero.titleAccent}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
            {hero.body}
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
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
              href="#cb-services"
              className="cb-glass-dark inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10 focus-ring md:text-lg"
            >
              {hero.secondaryCtaText}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            {hero.proof.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check size={16} className="text-accent-vivid" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="w-full max-w-md justify-self-center lg:justify-self-end"
        >
          <motion.div
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeroChatWindow conversation={hero.conversation} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
