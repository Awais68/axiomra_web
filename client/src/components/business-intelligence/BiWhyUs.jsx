import { useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import SpectrumTitle from "./SpectrumTitle";
import { whyUs } from "../../data/businessIntelligenceData";
import BiIcon from "./BiIcon";

const MAX_TILT = 7;

/**
 * Tilts toward the pointer. Fine pointers
 * only, and never under reduced motion; transforms are written directly so the
 * card does not re-render on every move.
 */
function TiltCard({ card, index }) {
  const ref = useRef(null);

  const canTilt = () =>
    window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    ).matches;

  const onMove = (e) => {
    if (!canTilt()) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${(-py * MAX_TILT).toFixed(
      2
    )}deg) rotateY(${(px * MAX_TILT).toFixed(2)}deg)`;
  };
  const onLeave = () => {
    ref.current.style.transform = "";
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface-card p-8 shadow-card [transition:transform_.25s_ease-out] will-change-transform"
      >
        <span aria-hidden="true" className="bi-spectrum-bg absolute inset-x-0 top-0 h-1" />
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-inverse text-[#7dd3fc]">
          <BiIcon name={card.icon} size={26} strokeWidth={1.7} aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-xl font-semibold text-content md:text-2xl">
          {card.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-content-dim md:text-lg">{card.body}</p>
      </div>
    </motion.li>
  );
}

export default function BiWhyUs() {
  return (
    <section id="bi-why-us" className="bg-surface pt-20 md:pt-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          title={<SpectrumTitle lead={whyUs.titleLead} accent={whyUs.titleAccent} />}
        />
        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {whyUs.cards.map((c, i) => (
            <TiltCard key={c.title} card={c} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
