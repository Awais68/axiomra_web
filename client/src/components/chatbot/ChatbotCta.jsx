import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import { cta } from "../../data/chatbotData";

/** Solid dark band with a raised centre on its top edge. No gradients. */
export default function ChatbotCta() {
  return (
    <section
      data-nav-tone="dark"
      className="cb-cta-clip relative overflow-hidden bg-[#050b18] pb-20 pt-24 md:pb-24 md:pt-32"
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-vivid/20"
      />
      <Reveal className="cb-glass-dark relative mx-4 max-w-4xl rounded-[2rem] px-6 py-12 text-center sm:mx-auto sm:px-12">
        <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">{cta.subtitle}</p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-vivid px-8 py-4 font-semibold text-[#03060c] transition-transform hover:-translate-y-0.5 focus-ring"
        >
          {cta.buttonText} <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}
