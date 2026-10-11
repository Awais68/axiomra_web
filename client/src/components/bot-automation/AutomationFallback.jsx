/*
 * Static stand-in for the work-queue scene: the same tilted ring, core and
 * gate in SVG. Phones, touch devices and reduced motion keep this; the gate
 * and the processed tasks pulse in CSS so it is not entirely still.
 */

const SIZE = 400;
const C = SIZE / 2;
const RX = 168;
const RY = 62;
const TASKS = 20;
// Tasks just past the gate (front right) are the ones lit as "done".
const LIT = new Set([3, 4, 5, 6]);

export default function AutomationFallback({ className = "" }) {
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={`absolute inset-0 h-full w-full ${className}`}>
      <g fill="none" stroke="#14D8C4">
        <ellipse cx={C} cy={C} rx={RX} ry={RY} strokeOpacity="0.35" />
        <polygon
          points="200,128 262,164 262,236 200,272 138,236 138,164"
          strokeOpacity="0.6"
          transform="rotate(-8 200 200)"
        />
        <polygon points="200,170 226,200 200,230 174,200" stroke="#E6F7FF" strokeOpacity="0.7" />
        <ellipse
          cx={C + Math.cos(0.35) * RX}
          cy={C + Math.sin(0.35) * RY}
          rx="10"
          ry="26"
          strokeWidth="2"
          className="animate-pulse"
        />
      </g>
      {Array.from({ length: TASKS }, (_, i) => {
        const a = (i / TASKS) * Math.PI * 2;
        const x = C + Math.cos(a) * RX;
        const y = C + Math.sin(a) * RY;
        const lit = LIT.has(i);
        // Back half of the ring sits further away: smaller and dimmer.
        const s = Math.sin(a) > 0 ? 9 : 6;
        return (
          <rect
            key={i}
            x={x - s / 2}
            y={y - s / 2}
            width={s}
            height={s}
            transform={`rotate(${(i * 37) % 90} ${x} ${y})`}
            fill={lit ? "#14D8C4" : "#E6F7FF"}
            fillOpacity={Math.sin(a) > 0 ? 0.9 : 0.45}
            className={lit ? "animate-pulse" : undefined}
            style={lit ? { animationDelay: `${(i % 4) * 0.3}s` } : undefined}
          />
        );
      })}
    </svg>
  );
}
