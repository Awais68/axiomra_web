import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import { BOOKING_URL } from "../../lib/booking";

/** Solid shards cut with clip-path (a gear tooth and a chevron); they slowly turn. */
const SHARDS = [
  {
    clip: "polygon(35% 0%, 65% 0%, 65% 20%, 100% 35%, 100% 65%, 65% 80%, 65% 100%, 35% 100%, 35% 80%, 0% 65%, 0% 35%, 35% 20%)",
    className: "-left-24 -top-24 h-72 w-72 md:h-96 md:w-96",
    turn: 20,
  },
  {
    clip: "polygon(0% 0%, 60% 0%, 100% 50%, 60% 100%, 0% 100%, 40% 50%)",
    className: "-bottom-24 -right-16 h-64 w-64 md:h-80 md:w-80",
    turn: -12,
  },
];

/**
 * Call-to-action band. `tone="dark"` sits on the inverse surface with a glass
 * card; `tone="light"` uses the tinted panel. Pass `steps` for the closing
 * band's "what happens next" list.
 */
export default function PaCtaBand({
  eyebrow,
  title,
  subtitle,
  buttonText,
  stepsTitle,
  steps,
  tone = "dark",
}) {
  const reduced = useReducedMotion();
  const dark = tone === "dark";

  return (
    <section
      {...(dark && { "data-nav-tone": "dark" })}
      className={`relative isolate overflow-hidden px-4 py-20 sm:px-6 md:py-24 ${
        dark ? "pa-dark bg-inverse" : "bg-pa-panel"
      }`}
    >
      {SHARDS.map((s) => (
        <motion.div
          key={s.clip}
          aria-hidden="true"
          style={{ clipPath: s.clip }}
          animate={reduced ? undefined : { rotate: [0, s.turn, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -z-10 bg-pa-accent ${dark ? "opacity-25" : "opacity-20"} ${s.className}`}
        />
      ))}

      <Reveal
        className={`mx-auto max-w-4xl rounded-3xl p-7 text-center sm:p-10 md:p-14 ${
          dark ? "pa-glass" : "pa-glass-light"
        }`}
      >
        {eyebrow && (
          <p
            className={`mb-4 font-mono text-xs uppercase tracking-[0.2em] sm:text-sm ${
              dark ? "text-[#2DE8D5]" : "text-pa-accent"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
            dark ? "text-white" : "text-content"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mx-auto mt-5 max-w-3xl text-base leading-relaxed md:text-lg ${
              dark ? "text-white/75" : "text-content-dim"
            }`}
          >
            {subtitle}
          </p>
        )}

        {steps && (
          <div className="mt-10 text-left">
            <h3 className="text-center font-display text-lg font-semibold text-white md:text-xl">
              {stepsTitle}
            </h3>
            <ol className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="font-mono text-sm text-[#FB923C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-semibold text-white">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-transform hover:-translate-y-0.5 focus-ring md:text-lg ${
            dark ? "bg-[#FB923C] text-[#1A0D02]" : "bg-inverse text-inverse-fg"
          }`}
        >
          {buttonText}
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </Reveal>
    </section>
  );
}
