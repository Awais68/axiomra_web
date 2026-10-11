/*
 * Static Private Core, drawn to match the WebGL scene's framing. It is what
 * the server renders, what phones and reduced-motion visitors keep, and what
 * shows while the three.js chunk loads. Solid strokes only: no gradients.
 */

const SIZE = 600;
const C = SIZE / 2;
const TEAL = "#14D8C4";

// Deterministic scatter so server and client markup match.
const dots = Array.from({ length: 70 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12543.123;
  const fa = a - Math.floor(a);
  const fb = b - Math.floor(b);
  const inside = i % 5 < 2;
  const r = inside ? 95 + fb * 85 : 205 + fb * 85;
  const th = fa * Math.PI * 2;
  return { x: C + Math.cos(th) * r, y: C + Math.sin(th) * r * (inside ? 0.62 : 1), inside };
});

/** Regular polygon points around the centre. */
const poly = (n, r, rot = 0) =>
  Array.from({ length: n }, (_, i) => {
    const t = rot + (i / n) * Math.PI * 2;
    return `${(C + Math.cos(t) * r).toFixed(1)},${(C + Math.sin(t) * r).toFixed(1)}`;
  }).join(" ");

export default function CoreFallback({ className = "" }) {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {/* Perimeter */}
      <circle cx={C} cy={C} r="182" fill="none" stroke="#9FB6D6" strokeOpacity="0.22" />
      <ellipse
        cx={C}
        cy={C}
        rx="168"
        ry="58"
        fill="none"
        stroke={TEAL}
        strokeOpacity="0.45"
        transform={`rotate(-18 ${C} ${C})`}
      />
      <ellipse
        cx={C}
        cy={C}
        rx="150"
        ry="70"
        fill="none"
        stroke={TEAL}
        strokeOpacity="0.3"
        transform={`rotate(32 ${C} ${C})`}
      />

      {/* Core */}
      <polygon points={poly(6, 82, Math.PI / 6)} fill="none" stroke={TEAL} strokeWidth="1.5" />
      <polygon points={poly(3, 82, -Math.PI / 2)} fill="none" stroke={TEAL} strokeOpacity="0.6" />
      <polygon points={poly(3, 82, Math.PI / 2)} fill="none" stroke={TEAL} strokeOpacity="0.6" />
      <polygon points={poly(6, 42, 0)} fill="#0B3B44" stroke={TEAL} strokeOpacity="0.9" />

      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x.toFixed(1)}
          cy={d.y.toFixed(1)}
          r={d.inside ? 2.4 : 1.8}
          fill={d.inside ? TEAL : "#B8C7DB"}
          fillOpacity={d.inside ? 0.85 : 0.45}
        />
      ))}
    </svg>
  );
}
