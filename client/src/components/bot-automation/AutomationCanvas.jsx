import { lazy, Suspense, useState } from "react";
import ErrorBoundary from "../ErrorBoundary";
import useInView from "../../hooks/useInView";
import useCanvasGate from "../../lib/useCanvasGate";
import AutomationFallback from "./AutomationFallback";

const AutomationScene = lazy(() => import("./AutomationScene"));

/** Same device policy as the other decorative canvases: no WebGL on small, touch or thin devices. */
function allowScene() {
  const smallOrTouch =
    window.matchMedia?.("(max-width: 767px), (pointer: coarse)").matches ?? false;
  const fewCores = (navigator.hardwareConcurrency ?? 8) <= 4;
  const lowMemory = (navigator.deviceMemory ?? 8) <= 4;
  const savingData = navigator.connection?.saveData === true;
  return !(smallOrTouch || fewCores || lowMemory || savingData);
}

/** The hero's work-queue ring: SVG first (server included), WebGL once idle and in view. */
export default function AutomationCanvas({ className = "" }) {
  const [hostRef, inView] = useInView();
  const ready = useCanvasGate(inView, allowScene);
  const [live, setLive] = useState(false);

  return (
    <div ref={hostRef} className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <AutomationFallback
        className={`transition-opacity duration-700 ${live ? "opacity-0" : "opacity-100"}`}
      />
      {ready && (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <AutomationScene
              frameloop={inView ? "always" : "never"}
              onReady={() => setLive(true)}
            />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}
