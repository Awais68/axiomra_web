import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import SpectrumTitle from "./SpectrumTitle";
import useInView from "../../hooks/useInView";
import { gsap, ScrollTrigger, MOTION_OK } from "../../lib/gsap";
import { pipeline } from "../../data/businessIntelligenceData";
import BiIcon from "./BiIcon";

const STAGES = pipeline.stages;
// Staggered so the packets never bunch up on the track.
const PACKETS = [0, 0.9, 1.8, 2.7];

function StageCard({ stage, index, vertical = false }) {
  return (
    <div
      data-stage
      className={`relative rounded-2xl border border-line bg-surface-card p-6 shadow-card ${
        vertical ? "" : "h-full"
      }`}
    >
      {/* Lit by the pinned timeline on desktop; the copy itself never fades,
          so contrast holds in every scroll state. */}
      {!vertical && (
        <span
          aria-hidden="true"
          data-glow
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_0_1.5px_rgba(59,130,246,0.55),0_24px_60px_-24px_rgba(59,130,246,0.6)]"
        />
      )}
      <div className="flex items-center gap-3">
        <span
          data-stage-icon
          className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-subtle text-brand"
        >
          <BiIcon name={stage.icon} size={22} strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span className="font-mono text-sm text-content-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-content md:text-2xl">
        {stage.title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-content-dim">{stage.line}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${stage.title} examples`}>
        {stage.chips.map((c) => (
          <li
            key={c}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-content-dim"
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Sources -> Warehouse -> Model -> Dashboard. At 1024px and up the section pins
 * and scroll drives a spectrum line through the four stages, lighting each as
 * the line reaches it. Below that it is a plain vertical stepper that reveals
 * on entry. Packets ride both tracks on a CSS loop, parked off screen.
 */
export default function BiPipeline() {
  const pinRef = useRef(null);
  const [hostRef, inView] = useInView({ rootMargin: "0px" });

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(`(min-width: 1024px) and ${MOTION_OK}`, () => {
      const root = pinRef.current;
      const stages = gsap.utils.toArray("[data-desk] [data-stage]", root);
      const glows = gsap.utils.toArray("[data-desk] [data-glow]", root);
      const fill = root.querySelector("[data-fill]");
      gsap.set(stages, { y: 16 });
      gsap.set(fill, { scaleX: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=140%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });
      tl.to(fill, { scaleX: 1, duration: 1 }, 0);
      stages.forEach((el, i) => {
        const at = (i / STAGES.length) * 0.9;
        tl.to(el, { y: 0, duration: 0.12, ease: "power1.out" }, at);
        tl.to(glows[i], { opacity: 1, duration: 0.12 }, at);
      });
    });

    // Pin positions depend on final layout: settle them once fonts and images
    // are in.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    if (document.readyState === "complete") refresh();
    else window.addEventListener("load", refresh, { once: true });

    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, []);

  return (
    <section id="bi-pipeline" ref={hostRef} className={`bg-surface ${inView ? "" : "bi-paused"}`}>
      <div
        ref={pinRef}
        className="flex min-h-0 flex-col justify-center py-20 md:py-28 lg:min-h-screen lg:py-16"
      >
        <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={pipeline.eyebrow}
            title={<SpectrumTitle lead={pipeline.titleLead} accent={pipeline.titleAccent} />}
            subtitle={pipeline.subtitle}
          />

          {/* Desktop: horizontal track */}
          <div data-desk className="mt-14 hidden lg:block">
            {/* Track row: the line runs between the centres of the outer
                columns, with a node above each stage. */}
            <div aria-hidden="true" className="relative mb-8 h-6">
              <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-line [container-type:inline-size]">
                <div data-fill className="bi-spectrum-bg h-full w-full origin-left rounded-full" />
                {PACKETS.map((d) => (
                  <span
                    key={d}
                    className="bi-packet-x absolute left-0 top-1/2 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(59,130,246,0.75)]"
                    style={{ animationDelay: `${d}s` }}
                  />
                ))}
              </div>
              <div className="relative grid h-full grid-cols-4 gap-6">
                {STAGES.map((s) => (
                  <span key={s.id} className="grid place-items-center">
                    <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-brand bg-surface">
                      <span className="bi-spectrum-bg h-2 w-2 rounded-full" />
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <ol className="grid grid-cols-4 gap-6">
              {STAGES.map((s, i) => (
                <li key={s.id}>
                  <StageCard stage={s} index={i} />
                </li>
              ))}
            </ol>
          </div>

          {/* Below 1024px: vertical stepper */}
          <div className="relative mt-12 lg:hidden">
            <div
              aria-hidden="true"
              className="absolute bottom-6 left-[1.35rem] top-6 w-[3px] rounded-full [container-type:size]"
            >
              <div className="bi-spectrum-bg-y h-full w-full rounded-full opacity-70" />
              {PACKETS.slice(0, 3).map((d) => (
                <span
                  key={d}
                  className="bi-packet-y absolute left-1/2 top-0 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]"
                  style={{ animationDelay: `${d * 1.4}s` }}
                />
              ))}
            </div>
            <ol className="space-y-6 pl-12">
              {STAGES.map((s, i) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <StageCard stage={s} index={i} vertical />
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
