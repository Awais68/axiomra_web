import { trustStrip } from "../../data/businessIntelligenceData";

/**
 * Platform wordmarks in one typeface, so no vendor's brand art outshouts the
 * rest. The second copy only exists to close the marquee loop; reduced motion
 * drops it and wraps the first copy instead.
 */
export default function BiTrustStrip() {
  const row = (copy) => (
    <ul
      aria-hidden={copy === 1 || undefined}
      className={`flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-4 motion-reduce:pr-0 ${
        copy === 1 ? "motion-reduce:hidden" : ""
      }`}
    >
      {trustStrip.names.map((name) => (
        <li
          key={name}
          className="whitespace-nowrap font-display text-xl font-semibold tracking-tight text-white/60 transition-colors duration-300 hover:text-[var(--bi-a)] md:text-2xl"
        >
          {name}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label="BI platforms we work with"
      className="bi-marquee-host relative border-t border-white/10 bg-inverse py-10 md:py-12"
    >
      <p className="mb-7 px-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-white/60 md:text-sm">
        {trustStrip.label}
      </p>
      <div className="overflow-hidden">
        <div className="bi-marquee flex w-max motion-reduce:w-full motion-reduce:justify-center">
          {row(0)}
          {row(1)}
        </div>
      </div>
    </section>
  );
}
