/*
 * Shared geometry for the Data Prism, so the WebGL scene, the SVG fallback and
 * the DOM KPI chips all agree on where things are. World units are for a
 * camera at z=11 with a 35° vertical FOV, looking at a stage with an 8:7
 * aspect ratio.
 */
export const STAGE_ASPECT = 8 / 7;
const HALF_H = 11 * Math.tan((35 / 2) * (Math.PI / 180));
const HALF_W = HALF_H * STAGE_ASPECT;

export const PRISM_X = -0.9;
/** Where the three output lanes end; the KPI chips sit just past this. */
export const STREAM_END_X = 1.6;
/** Lane heights, top to bottom, in world units. */
export const LANES = [1.55, 0, -1.55];

/** World coordinates to a percentage of the stage box (top-left origin). */
export const toPctX = (x) => 50 + (x / HALF_W) * 50;
export const toPctY = (y) => 50 - (y / HALF_H) * 50;
