import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import { BOOKING_URL } from "../../lib/booking";

/** Solid shards cut with clip-path; they slowly turn behind the glass card. */
const SHARDS = [
  {
    clip: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    className: "-left-20 -top-24 h-72 w-72 md:h-96 md:w-96",
    turn: 18,
  },
  {
    clip: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    className: "-bottom-28 -right-16 h-64 w-72 md:h-80 md:w-96",
    turn: -14,
  },
];

/**
 * Call-to-action band. `tone="dark"` sits on the inverse surface with a glass
 * card; `tone="light"` uses the tinted panel for a quieter mid-page break.
 */
export default function EntCtaBand({ title, subtitle, buttonText, note, tone = "dark" }) {
  const reduced = useReducedMotion();
  const dark = tone === "dark";

  return (
    <section
      {...(dark && { "data-nav-tone": "dark" })}
      className={`relative isolate overflow-hidden px-4 py-20 sm:px-6 md:py-24 ${
        dark ? "ent-dark bg-inverse" : "bg-ent-panel"
      }`}
    >
      {SHARDS.map((s) => (
        <motion.div
          key={s.clip}
          aria-hidden="true"
          style={{ clipPath: s.clip }}
          animate={reduced ? undefined : { rotate: [0, s.turn, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -z-10 bg-ent-accent ${dark ? "opacity-25" : "opacity-20"} ${s.className}`}
        />
      ))}

      <Reveal
        className={`mx-auto max-w-4xl rounded-3xl p-7 text-center sm:p-10 md:p-14 ${
          dark ? "ent-glass" : "ent-glass-light"
        }`}
      >
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
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-transform hover:-translate-y-0.5 focus-ring md:text-lg ${
            dark ? "bg-[#2DE8D5] text-[#04121A]" : "bg-inverse text-inverse-fg"
          }`}
        >
          {buttonText}
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
        {note && (
          <p className={`mt-5 text-sm ${dark ? "text-white/60" : "text-content-faint"}`}>{note}</p>
        )}
      </Reveal>
    </section>
  );
}
