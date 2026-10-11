/*
 * Static stand-in for ClusterScene: the server render, phones, and anything
 * without a GPU. Three clusters of SVG dots that drift on CSS keyframes, so
 * the hero still moves on mobile without shipping three.js there.
 */
const COLORS = ["rgb(45 212 191)", "rgb(96 165 250)", "rgb(251 191 36)"];
const CENTERS = [
  [70, 30],
  [86, 62],
  [62, 78],
];

function hash(n) {
  const v = Math.sin(n * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

// Built once at module load: positions are deterministic, so SSR and the
// client agree and hydration never mismatches.
const DOTS = Array.from({ length: 72 }, (_, i) => {
  const g = i % 3;
  const r = Math.sqrt(hash(i + 3)) * 11;
  const t = hash(i + 17) * Math.PI * 2;
  return {
    x: CENTERS[g][0] + Math.cos(t) * r,
    y: CENTERS[g][1] + Math.sin(t) * r * 0.9,
    r: 0.35 + hash(i + 29) * 0.45,
    fill: COLORS[g],
    style: {
      "--d": `${5 + hash(i + 41) * 5}s`,
      "--delay": `${-hash(i + 53) * 6}s`,
      "--dx": `${(hash(i + 61) - 0.5) * 6}px`,
      "--dy": `${(hash(i + 67) - 0.5) * 6}px`,
    },
  };
});

export default function ClusterFallback({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      {DOTS.map((d, i) => (
        <circle
          key={i}
          className="ds-dot"
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={d.fill}
          opacity="0.8"
          style={d.style}
        />
      ))}
    </svg>
  );
}
