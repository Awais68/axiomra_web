/*
 * Static stand-in for the neural mesh: the same idea in SVG, drawn once at
 * build time from a fixed seed. Phones, touch devices and reduced motion keep
 * this; a few nodes breathe with a CSS pulse so it is not entirely still.
 */

function hash(n) {
  const v = Math.sin(n * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

const SIZE = 400;
const NODES = Array.from({ length: 46 }, (_, i) => {
  // Points scattered in a disc, denser toward the centre.
  const a = hash(i + 1) * Math.PI * 2;
  const r = Math.sqrt(hash(i + 2)) * 175;
  return { x: SIZE / 2 + Math.cos(a) * r, y: SIZE / 2 + Math.sin(a) * r, hub: hash(i + 7) > 0.84 };
});

const EDGES = [];
NODES.forEach((p, i) => {
  NODES.forEach((q, j) => {
    if (j > i && Math.hypot(p.x - q.x, p.y - q.y) < 70) EDGES.push([p, q]);
  });
});

export default function NeuralFallback({ className = "" }) {
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={`absolute inset-0 h-full w-full ${className}`}>
      <g stroke="#14D8C4" strokeOpacity="0.22" strokeWidth="0.8">
        {EDGES.map(([p, q], i) => (
          <line key={i} x1={p.x} y1={p.y} x2={q.x} y2={q.y} />
        ))}
      </g>
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.hub ? 3.6 : 1.8}
          fill={n.hub ? "#14D8C4" : "#E6F7FF"}
          fillOpacity={n.hub ? 0.95 : 0.6}
          className={n.hub ? "animate-pulse" : undefined}
          style={n.hub ? { animationDelay: `${(i % 5) * 0.4}s` } : undefined}
        />
      ))}
    </svg>
  );
}
