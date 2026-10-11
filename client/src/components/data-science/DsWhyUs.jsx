import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";
import DsTitle from "./DsTitle";
import { whyUs } from "../../data/dataScienceData";

/** Four numbered reasons; each card's corner is notched with clip-path. */
export default function DsWhyUs() {
  return (
    <section data-nav-tone="dark" className="bg-inverse py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-[rgb(45_212_191)] md:text-base">
            {whyUs.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-inverse-fg md:text-5xl lg:text-6xl">
            <DsTitle lead={whyUs.titleLead} accent={whyUs.titleAccent} />
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.points.map((p, i) => (
            <StaggerItem
              key={p.title}
              className="group relative bg-inverse-card p-7 transition-colors hover:bg-inverse-soft [clip-path:polygon(0_0,calc(100%-2.5rem)_0,100%_2.5rem,100%_100%,0_100%)] sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute right-0 top-0 h-10 w-10 bg-[rgb(45_212_191)] transition-transform duration-500 [clip-path:polygon(0_0,100%_100%,0_100%)] group-hover:scale-110"
                style={{ transformOrigin: "top right" }}
              />
              <p className="font-mono text-sm text-[rgb(45_212_191)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold text-inverse-fg md:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-inverse-fg/70">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
