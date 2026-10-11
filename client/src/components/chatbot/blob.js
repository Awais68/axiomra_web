/*
 * The organic blob the integration row's copy wraps around.
 *
 * One path, two consumers: public/chatbot/blob.svg (shape-outside, which needs
 * a real image) and the inline clipPath that cuts the same outline out of the
 * row's coloured panel. Both are drawn from BLOB_POINTS so they cannot drift;
 * regenerate the SVG with `node scripts/generate-chatbot-blob.mjs` after editing.
 */

/** Size of the float, in px. The SVG's intrinsic size must match it exactly. */
export const BLOB_SIZE = 260;

// Polar control points: [angle in degrees, radius as a fraction of the half-size].
const BLOB_POINTS = [
  [0, 0.86],
  [40, 0.74],
  [85, 0.9],
  [130, 0.7],
  [175, 0.84],
  [220, 0.76],
  [262, 0.9],
  [305, 0.72],
];

/** Closed Catmull-Rom spline through the points, as cubic Beziers, offset by (dx, dy). */
export function blobPath(dx = 0, dy = 0, size = BLOB_SIZE) {
  const c = size / 2;
  const pts = BLOB_POINTS.map(([deg, r]) => {
    const a = (deg * Math.PI) / 180;
    return [dx + c + Math.cos(a) * r * c * 0.98, dy + c + Math.sin(a) * r * c * 0.98];
  });
  const n = pts.length;
  const f = (v) => Math.round(v * 10) / 10;
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return `${d}Z`;
}
