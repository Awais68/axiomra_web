import { lazy, Suspense, useState } from "react";
import ErrorBoundary from "../ErrorBoundary";
import useInView from "../../hooks/useInView";
import useCanvasGate from "../../lib/useCanvasGate";

const NeuralScene = lazy(() => import("./NeuralScene"));

/** Same device policy as the other decorative canvases: no WebGL on small, touch or thin devices. */
function allowNeural() {
  const smallOrTouch =
    window.matchMedia?.("(max-width: 767px), (pointer: coarse)").matches ?? false;
  const fewCores = (navigator.hardwareConcurrency ?? 8) <= 4;
  const lowMemory = (navigator.deviceMemory ?? 8) <= 4;
  const savingData = navigator.connection?.saveData === true;
  return !(smallOrTouch || fewCores || lowMemory || savingData);
}

/**
 * The hero's neural network, laid over the photo. It is pure decoration, so
 * where WebGL is not allowed nothing renders and the photo's own CSS motion
 * carries the hero on its own.
 */
export default function NeuralCanvas({ className = "" }) {
  const [hostRef, inView] = useInView();
  const ready = useCanvasGate(inView, allowNeural);
  const [live, setLive] = useState(false);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`pointer-events-none transition-opacity duration-1000 ${
        live ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {ready && (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <NeuralScene frameloop={inView ? "always" : "never"} onReady={() => setLive(true)} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}
