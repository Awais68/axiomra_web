import SectionHeading from "../SectionHeading";
import StatCounter from "../StatCounter";
import SpectrumTitle from "./SpectrumTitle";

/**
 * A real BI case study: problem, solution, three result counters and a
 * mockup. Renders nothing at all without one, so the page never shows a
 * placeholder or invented results.
 *
 * data: { eyebrow, title, client, problem, solution, metrics: [{ value, label }], image, imageAlt }
 */
export default function BiCaseStudy({ data }) {
  if (!data) return null;

  return (
    <section id="bi-case-study" className="bg-surface-subtle py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={data.eyebrow ?? "Case study"}
          title={<SpectrumTitle lead={data.client} accent={data.title} />}
        />
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            {[
              ["Problem", data.problem],
              ["Solution", data.solution],
            ].map(([label, body]) => (
              <div key={label}>
                <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
                  {label}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-content-dim">{body}</p>
              </div>
            ))}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-accent">Results</h3>
              <div className="mt-2 grid grid-cols-3 divide-x divide-line rounded-xl2 border border-line bg-surface-card">
                {data.metrics.slice(0, 3).map((m) => (
                  <StatCounter key={m.label} value={m.value} label={m.label} />
                ))}
              </div>
            </div>
          </div>
          {data.image && (
            <img
              src={data.image}
              alt={data.imageAlt}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl border border-line shadow-card"
            />
          )}
        </div>
      </div>
    </section>
  );
}
