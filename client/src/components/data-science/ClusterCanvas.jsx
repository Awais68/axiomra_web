import { lazy, Suspense, useState } from "react";
import ErrorBoundary from "../ErrorBoundary";
import useInView from "../../hooks/useInView";
import useCanvasGate from "../../lib/useCanvasGate";
import ClusterFallback from "./ClusterFallback";

const ClusterScene = lazy(() => import("./ClusterScene"));

/** Same device policy as the other decorative canvases: no WebGL on small, touch or thin devices. */
function allowScene() {
  const smallOrTouch =
    window.matchMedia?.("(max-width: 767px), (pointer: coarse)").matches ?? false;
  const fewCores = (navigator.hardwareConcurrency ?? 8) <= 4;
  const lowMemory = (navigator.deviceMemory ?? 8) <= 4;
  const savingData = navigator.connection?.saveData === true;
  return !(smallOrTouch || fewCores || lowMemory || savingData);
}

/** The hero's data field: animated SVG first (server included), WebGL once idle and in view. */
export default function ClusterCanvas() {
  const [hostRef, inView] = useInView();
  const ready = useCanvasGate(inView, allowScene);
  // The SVG stays up until the scene's first frame is ready, then fades out.
  const [live, setLive] = useState(false);

  return (
    <div ref={hostRef} className="absolute inset-0" aria-hidden="true">
      <ClusterFallback
        className={`transition-opacity duration-700 ${live ? "opacity-0" : "opacity-100"}`}
      />
      {ready && (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <ClusterScene frameloop={inView ? "always" : "never"} onReady={() => setLive(true)} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}
