import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/*
 * The hero's data field. Every point cycles through three states, the way a
 * data science project does:
 *   raw     a loose, noisy cloud
 *   cluster three tight groups (segmentation)
 *   surface a smooth fitted surface (the model)
 * Each point's position in all three states is baked into attributes, and the
 * vertex shader blends between them from one time uniform, so a frame costs a
 * single uniform write on the CPU.
 */

/** Seconds per state, including the morph into the next one. */
const STEP = 4.2;
const COLORS = ["#2DD4BF", "#60A5FA", "#FBBF24"];

/** Deterministic 0..1 hash: the field is identical across mounts. */
function hash(n) {
  const v = Math.sin(n * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

function pointCount() {
  return (navigator.hardwareConcurrency ?? 8) >= 8 ? 1800 : 1100;
}

const CENTERS = [
  [1.1, 1.0, 0.4],
  [3.3, -0.6, -0.6],
  [1.4, -1.8, 0.8],
];

function buildAttributes(count) {
  const raw = new Float32Array(count * 3);
  const cluster = new Float32Array(count * 3);
  const surface = new Float32Array(count * 3);
  const color = new Float32Array(count * 3);
  const seed = new Float32Array(count);
  const side = Math.ceil(Math.sqrt(count));
  const c = new THREE.Color();

  for (let i = 0; i < count; i++) {
    const a = hash(i + 1);
    const b = hash(i + 101.7);
    const d = hash(i + 503.3);
    const g = i % 3;

    // Raw: wide, uneven cloud weighted to the right half of the hero.
    raw.set([-1 + a * 6.5, (b - 0.5) * 5.6, (d - 0.5) * 3.2], i * 3);

    // Cluster: gaussian-ish blobs around three centres.
    const r = Math.pow(hash(i + 9.1), 0.6) * 0.95;
    const t = hash(i + 33.3) * Math.PI * 2;
    const p = Math.acos(2 * hash(i + 71.9) - 1);
    const [cx, cy, cz] = CENTERS[g];
    cluster.set(
      [
        cx + r * Math.sin(p) * Math.cos(t),
        cy + r * Math.sin(p) * Math.sin(t),
        cz + r * Math.cos(p),
      ],
      i * 3
    );

    // Surface: a gently rolling regression plane on a grid.
    const gx = (i % side) / side;
    const gz = Math.floor(i / side) / side;
    const x = -0.6 + gx * 5.8;
    const z = -1.8 + gz * 3.6;
    surface.set([x, Math.sin(x * 1.1) * 0.55 + Math.cos(z * 1.7) * 0.35 - 0.2, z], i * 3);

    c.set(COLORS[g]);
    color.set([c.r, c.g, c.b], i * 3);
    seed[i] = a;
  }
  return { raw, cluster, surface, color, seed };
}

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute vec3 aCluster;
  attribute vec3 aSurface;
  attribute vec3 aColor;
  attribute float aSeed;
  varying vec3 vColor;
  varying float vAlpha;

  const float STEP = ${STEP.toFixed(1)};

  // 0..1 ease with a hold: most of each step is still, the rest morphs.
  float morph(float t) {
    return smoothstep(0.55, 1.0, t);
  }

  void main() {
    float phase = mod(uTime / STEP, 3.0);
    float k = floor(phase);
    // Stagger each point a little so the morph ripples instead of snapping.
    float m = morph(clamp(fract(phase) * 1.15 - aSeed * 0.15, 0.0, 1.0));

    vec3 from = k < 0.5 ? position : (k < 1.5 ? aCluster : aSurface);
    vec3 to   = k < 0.5 ? aCluster : (k < 1.5 ? aSurface : position);
    vec3 pos = mix(from, to, m);

    // Idle shimmer so nothing ever fully freezes.
    pos.x += sin(uTime * 0.8 + aSeed * 40.0) * 0.03;
    pos.y += cos(uTime * 0.7 + aSeed * 27.0) * 0.03;

    // Raw data reads grey; colour arrives as the clusters form.
    float colourful = k < 0.5 ? m : (k < 1.5 ? 1.0 : 1.0 - m);
    vColor = mix(vec3(0.62, 0.68, 0.76), aColor, colourful);
    vAlpha = 0.55 + 0.45 * colourful;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (3.2 + aSeed * 2.4) * uPixelRatio * (9.0 / -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    // Hard-edged disc with a soft rim: reads as a data point, not a glow.
    float a = vAlpha * (1.0 - smoothstep(0.38, 0.5, d));
    gl_FragColor = vec4(vColor, a);
  }
`;

function Field({ pointer }) {
  const group = useRef();
  const material = useRef();
  const count = useMemo(() => pointCount(), []);
  const attrs = useMemo(() => buildAttributes(count), [count]);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.5) },
    }),
    []
  );

  useFrame((_, delta) => {
    const m = material.current;
    const g = group.current;
    if (!m || !g) return;
    m.uniforms.uTime.value += Math.min(delta, 0.05);
    // Slow orbit plus pointer parallax, eased so the field never jerks.
    const targetY =
      -0.35 + pointer.current.x * 0.25 + Math.sin(m.uniforms.uTime.value * 0.12) * 0.12;
    const targetX = 0.18 + pointer.current.y * 0.12;
    g.rotation.y += (targetY - g.rotation.y) * 0.04;
    g.rotation.x += (targetX - g.rotation.x) * 0.04;
  });

  return (
    <group ref={group} position={[0.6, 0, 0]}>
      <points frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[attrs.raw, 3]} />
          <bufferAttribute attach="attributes-aCluster" args={[attrs.cluster, 3]} />
          <bufferAttribute attach="attributes-aSurface" args={[attrs.surface, 3]} />
          <bufferAttribute attach="attributes-aColor" args={[attrs.color, 3]} />
          <bufferAttribute attach="attributes-aSeed" args={[attrs.seed, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={material}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function ClusterScene({ frameloop = "always", onReady }) {
  // Pointer kept in a ref: parallax must not re-render React every mousemove.
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas
      frameloop={frameloop}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl, scene, camera }) => gl.compileAsync(scene, camera).then(() => onReady?.())}
    >
      <Field pointer={pointer} />
    </Canvas>
  );
}
