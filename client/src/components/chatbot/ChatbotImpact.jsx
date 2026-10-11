import SectionHeading from "../SectionHeading";
import { Reveal } from "../motion/Reveal";
import { impact } from "../../data/chatbotData";

/** Sticky heading on the left, numbered cards scrolling past on the right. */
export default function ChatbotImpact() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={impact.eyebrow}
            title={
              <>
                {impact.titleLead} <span className="text-accent">{impact.titleAccent}</span>
              </>
            }
            subtitle={impact.subtitle}
          />
        </div>

        <ol className="space-y-5">
          {impact.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              className="group flex gap-5 rounded-3xl border border-line bg-surface-card p-6 transition-colors hover:border-accent sm:p-8"
            >
              <span className="cb-clip-notch-sm grid h-14 w-14 shrink-0 place-items-center bg-inverse font-mono text-lg font-semibold text-accent-vivid transition-colors group-hover:bg-accent-vivid group-hover:text-[#03060c]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-content md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-content-dim">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
