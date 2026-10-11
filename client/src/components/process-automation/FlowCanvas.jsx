import { lazy, Suspense, useState } from "react";
import ErrorBoundary from "../ErrorBoundary";
import useInView from "../../hooks/useInView";
import useCanvasGate from "../../lib/useCanvasGate";

const FlowScene = lazy(() => import("./FlowScene"));

/** Same device policy as the other decorative canvases: no WebGL on small, touch or thin devices. */
function allowFlow() {
  const smallOrTouch =
    window.matchMedia?.("(max-width: 1023px), (pointer: coarse)").matches ?? false;
  const fewCores = (navigator.hardwareConcurrency ?? 8) <= 4;
  const lowMemory = (navigator.deviceMemory ?? 8) <= 4;
  const savingData = navigator.connection?.saveData === true;
  return !(smallOrTouch || fewCores || lowMemory || savingData);
}

/**
 * Lanes of work converging on a hub: the SVG version, drawn with CSS dash
 * motion. It is what phones, reduced motion and no-WebGL visitors see, and
 * what everyone sees until the three.js scene is ready to fade in over it.
 */
function FlowFallback() {
  const ins = [70, 130, 190, 250, 310];
  const outs = [150, 230];
  return (
    <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
      {ins.map((y) => (
        <path
          key={`i${y}`}
          d={`M10 ${y} C 170 ${y}, 220 190, 300 190`}
          className="pa-lane pa-lane-in"
          fill="none"
        />
      ))}
      {outs.map((y) => (
        <path
          key={`o${y}`}
          d={`M300 190 C 380 190, 430 ${y}, 590 ${y}`}
          className="pa-lane pa-lane-out"
          fill="none"
        />
      ))}
      <polygon
        points="300,150 335,170 335,210 300,230 265,210 265,170"
        className="pa-hub"
        fill="rgb(45 232 213 / 0.18)"
        stroke="#2DE8D5"
        strokeWidth="2"
      />
    </svg>
  );
}

/** The hero's pipeline. Pure decoration: the SVG carries it wherever WebGL is not allowed. */
export default function FlowCanvas({ className = "" }) {
  const [hostRef, inView] = useInView();
  const ready = useCanvasGate(inView, allowFlow);
  const [live, setLive] = useState(false);

  return (
    <div ref={hostRef} aria-hidden="true" className={`pointer-events-none ${className}`}>
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${live ? "opacity-0" : "opacity-100"}`}
      >
        <FlowFallback />
      </div>
      {ready && (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${live ? "opacity-100" : "opacity-0"}`}
        >
          <ErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <FlowScene frameloop={inView ? "always" : "never"} onReady={() => setLive(true)} />
            </Suspense>
          </ErrorBoundary>
        </div>
      )}
    </div>
  );
}
