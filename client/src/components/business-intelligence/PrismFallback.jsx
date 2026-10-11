import { LANES, PRISM_X, STREAM_END_X, toPctX, toPctY } from "./prismLayout";

/*
 * Static Data Prism, drawn in the same coordinates as the WebGL scene. It is
 * what the server renders, what phones and reduced-motion visitors keep, and
 * what shows while the three.js chunk loads, so it has to stand on its own.
 */

const W = 800;
const H = 700;
const px = (x) => (toPctX(x) / 100) * W;
const py = (y) => (toPctY(y) / 100) * H;

const SPECTRUM = ["#14D8C4", "#3B82F6", "#8B5CF6"];

// Deterministic scatter for the raw-data cloud, so SSR and client match.
const RAW = Array.from({ length: 46 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12543.123;
  const fx = a - Math.floor(a);
  const fy = b - Math.floor(b);
  return { x: -4.6 + fx * 2.6, y: (fy - 0.5) * 5, r: 1.6 + ((i * 7) % 5) * 0.45 };
});

export default function PrismFallback({ className = "" }) {
  const cx = px(PRISM_X);
  const cy = py(0);
  // Triangle face of the prism, apex up.
  const tri = `${cx},${cy - 118} ${cx + 104},${cy + 72} ${cx - 104},${cy + 72}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx={cx} cy={cy} r="190" fill="none" stroke="#60A5FA" strokeOpacity="0.28" />

      {RAW.map((p, i) => (
        <circle key={i} cx={px(p.x)} cy={py(p.y)} r={p.r} fill="#94A3B8" fillOpacity="0.55" />
      ))}

      {LANES.map((y, i) => (
        <path
          key={y}
          d={`M ${cx + 60} ${cy} C ${cx + 150} ${cy}, ${cx + 150} ${py(y)}, ${px(STREAM_END_X)} ${py(y)}`}
          fill="none"
          stroke={SPECTRUM[i]}
          strokeOpacity="0.7"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}

      <circle cx={cx} cy={cy} r="58" fill="#5EEAD4" fillOpacity="0.5" />
      <polygon
        points={tri}
        fill="#93C5FD"
        fillOpacity="0.18"
        stroke="#A5F3FC"
        strokeOpacity="0.85"
        strokeWidth="1.5"
      />
      <line x1={cx} y1={cy - 118} x2={cx + 22} y2={cy + 72} stroke="#A5F3FC" strokeOpacity="0.35" />
    </svg>
  );
}
