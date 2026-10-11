import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import { BOOKING_URL } from "../../lib/booking";

/**
 * Solid-colour call to action (the shared GradientCTA uses a gradient, which
 * this page avoids). A frosted panel sits over a field of solid squares.
 */
export default function LlmCtaBand({ title, body, ctaText }) {
  return (
    <section className="bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <Reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-inverse px-6 py-12 sm:px-12 md:py-16">
        {/* Solid blocks for the glass to blur: colour without a gradient. */}
        <span
          aria-hidden="true"
          className="absolute -right-10 -top-10 -z-10 h-56 w-56 rotate-12 rounded-[2.5rem] bg-accent-vivid"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-16 left-[30%] -z-10 h-48 w-48 -rotate-6 rounded-[2rem] bg-brand"
        />

        <div className="llm-glass grid grid-cols-1 items-center gap-8 rounded-2xl p-7 md:grid-cols-[minmax(0,1fr)_auto] md:p-10">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{body}</p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-vivid px-7 py-4 text-base font-semibold text-on-accent transition-colors hover:bg-accent-vivid-hover focus-ring"
          >
            {ctaText}
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
