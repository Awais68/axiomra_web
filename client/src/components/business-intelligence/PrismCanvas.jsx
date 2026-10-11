import { lazy, Suspense, useState } from "react";
import ErrorBoundary from "../ErrorBoundary";
import useInView from "../../hooks/useInView";
import useCanvasGate from "../../lib/useCanvasGate";
import PrismFallback from "./PrismFallback";

const PrismScene = lazy(() => import("./PrismScene"));

/** Same device policy as the other decorative canvases: no WebGL on small, touch or thin devices. */
function allowPrism() {
  const smallOrTouch =
    window.matchMedia?.("(max-width: 767px), (pointer: coarse)").matches ?? false;
  const fewCores = (navigator.hardwareConcurrency ?? 8) <= 4;
  const lowMemory = (navigator.deviceMemory ?? 8) <= 4;
  const savingData = navigator.connection?.saveData === true;
  return !(smallOrTouch || fewCores || lowMemory || savingData);
}

/** The hero's Data Prism: SVG first (server included), WebGL once idle and in view. */
export default function PrismCanvas() {
  const [hostRef, inView] = useInView();
  const ready = useCanvasGate(inView, allowPrism);
  // The SVG stays up until the scene's first frame is ready, then fades out
  // underneath it, so there is never an empty stage while shaders compile.
  const [live, setLive] = useState(false);

  return (
    <div ref={hostRef} className="absolute inset-0" aria-hidden="true">
      <PrismFallback
        className={`transition-opacity duration-700 ${live ? "opacity-0" : "opacity-100"}`}
      />
      {ready && (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <PrismScene frameloop={inView ? "always" : "never"} onReady={() => setLive(true)} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}
