import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import { BOOKING_URL } from "../../lib/booking";
import { closing, hero } from "../../data/llmInfrastructureData";

/**
 * Closing call to action. On desktop the float's shape-outside is a notch on
 * the left and its clip-path is the inverse polygon (the rectangle with that
 * notch cut out), so the teal fill sits exactly where the copy flows and the
 * photo shows through the cut-out. The hero photo returns here as a bookend.
 */
export default function LlmClosing() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal className="llm-inverted relative isolate mx-auto flow-root max-w-7xl overflow-hidden rounded-3xl bg-accent-vivid [--llm-float-h:32rem]">
        <img
          src={hero.image.src}
          srcSet={hero.image.srcSet}
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt=""
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full object-cover lg:absolute lg:inset-x-0 lg:top-0 lg:-z-10 lg:aspect-auto lg:h-[var(--llm-float-h)]"
        />
        <div aria-hidden="true" className="llm-inverted-float lg:bg-accent-vivid" />

        {/* relative: a clip-path float paints like a positioned element, so the copy must be positioned too to stay on top. */}
        <div className="relative px-6 py-10 text-on-accent md:px-10 lg:pl-0 lg:pr-14 lg:pt-14">
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
            {closing.titleLead}{" "}
            <span className="underline decoration-4 underline-offset-[6px]">
              {closing.titleAccent}
            </span>
          </h2>
          {closing.body.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 text-lg leading-relaxed text-on-accent/85">
              {p}
            </p>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-inverse px-7 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.02] focus-ring"
          >
            {closing.ctaText}
            <ArrowUpRight
              size={19}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
