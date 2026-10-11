import SectionHeading from "../SectionHeading";
import StatCounter from "../StatCounter";
import SpectrumTitle from "./SpectrumTitle";
import { whyBi } from "../../data/businessIntelligenceData";

/** Positioning paragraph plus the shared company figures, counted up once. */
export default function BiWhyBi() {
  return (
    <section id="bi-why" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyBi.eyebrow}
          title={<SpectrumTitle lead={whyBi.titleLead} accent={whyBi.titleAccent} />}
          subtitle={whyBi.body}
        />
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 divide-line overflow-hidden rounded-xl2 border border-line bg-surface-subtle lg:grid-cols-4 lg:divide-x">
          {whyBi.stats.map((s, i) => (
            <div
              key={s.label}
              className={`${i % 2 === 0 ? "border-r border-line lg:border-r-0" : ""} ${
                i < 2 ? "border-b border-line lg:border-b-0" : ""
              }`}
            >
              <StatCounter value={s.value} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
