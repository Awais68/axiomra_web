import { LANES, STREAM_END_X, toPctX, toPctY } from "./prismLayout";

const TONES = {
  teal: "bg-[#14D8C4]",
  blue: "bg-[#3B82F6]",
  violet: "bg-[#8B5CF6]",
};

/**
 * The three KPI chips the prism's output lanes resolve into. Plain DOM over
 * the canvas, so the text stays crisp and readable by screen readers.
 */
export default function PrismKpis({ kpis }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <p className="absolute right-0 top-[6%] font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
        Sample data
      </p>
      <dl>
        {kpis.map((k, i) => (
          <div
            key={k.label}
            className="absolute -translate-y-1/2 animate-float rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-2.5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-4 sm:py-3"
            style={{
              left: `${toPctX(STREAM_END_X)}%`,
              top: `${toPctY(LANES[i])}%`,
              animationDelay: `${i * -2.3}s`,
            }}
          >
            <dt className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/60 sm:text-[0.68rem]">
              <span className={`h-1.5 w-1.5 rounded-full ${TONES[k.tone]}`} aria-hidden="true" />
              {k.label}
            </dt>
            <dd className="mt-1 font-display text-lg font-semibold tracking-tight text-white sm:text-2xl">
              {k.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
