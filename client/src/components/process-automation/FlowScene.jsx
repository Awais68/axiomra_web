import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/*
 * An automation pipeline drawn in light. Work items enter on scattered lanes
 * on the left (manual, orange), converge on a hexagonal automation hub, and
 * leave on a few clean lanes to the right (processed, teal). Each packet's
 * route is pre-sampled once, so a frame is a lerp per packet and one buffer
 * upload.
 */

const IN_LANES = 7;
const OUT_LANES = 4;
const PACKETS = 150;
const SAMPLES = 96;
const SPAN = 6.2;
const ORANGE = new THREE.Color("#13D4D4");
const TEAL = new THREE.Color("#2DE8D5");

/** Deterministic 0..1 hash; the scene stays identical across mounts. */
function hash(n) {
  const v = Math.sin(n * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

function laneEnd(i, count, side) {
  const spread = side < 0 ? 3.4 : 1.9;
  const y = (i / (count - 1) - 0.5) * 2 * spread;
  const z = (hash(i * 7 + side * 3) - 0.5) * 2.2;
  return new THREE.Vector3(side * SPAN, y, z);
}

function buildRoutes() {
  const hub = new THREE.Vector3(0, 0, 0);
  const ins = Array.from({ length: IN_LANES }, (_, i) => laneEnd(i, IN_LANES, -1));
  const outs = Array.from({ length: OUT_LANES }, (_, i) => laneEnd(i, OUT_LANES, 1));
  const routes = [];
  ins.forEach((a, i) => {
    outs.forEach((b, j) => {
      // Lanes bend in late and leave early, so the hub reads as the funnel.
      const m1 = new THREE.Vector3(a.x * 0.45, a.y * 0.55, a.z * 0.6);
      const m2 = new THREE.Vector3(b.x * 0.45, b.y * 0.7, b.z * 0.6);
      const curve = new THREE.CatmullRomCurve3([a, m1, hub, m2, b], false, "centripetal");
      const pts = curve.getSpacedPoints(SAMPLES - 1);
      const flat = new Float32Array(SAMPLES * 3);
      pts.forEach((p, k) => p.toArray(flat, k * 3));
      routes.push({ flat, inLane: i, outLane: j, pts });
    });
  });
  return routes;
}

const packetVertex = /* glsl */ `
  uniform float uPixelRatio;
  attribute vec3 color;
  attribute float aSize;
  varying vec3 vColor;
  void main() {
    vColor = color;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uPixelRatio * (10.0 / -mv.z);
  }
`;

// A crisp disc with a thin soft rim; no radial gradient fill.
const packetFragment = /* glsl */ `
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = 1.0 - smoothstep(0.38, 0.5, d);
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;

function Pipeline({ pointer }) {
  const groupRef = useRef(null);
  const hubA = useRef(null);
  const hubB = useRef(null);
  const core = useRef(null);
  const matRef = useRef(null);
  const pointsRef = useRef(null);
  const dpr = useThree((s) => s.viewport.dpr);

  const { routes, laneGeo, packetGeo, packets, hexGeo, uniforms } = useMemo(() => {
    const routes = buildRoutes();

    // One line per distinct half-lane, so shared segments are not overdrawn.
    const segs = [];
    const seen = new Set();
    routes.forEach((r) => {
      const keyIn = `i${r.inLane}`;
      const keyOut = `o${r.outLane}`;
      const half = SAMPLES / 2;
      if (!seen.has(keyIn)) {
        seen.add(keyIn);
        for (let k = 0; k < half; k++) segs.push(r.pts[k], r.pts[k + 1]);
      }
      if (!seen.has(keyOut)) {
        seen.add(keyOut);
        for (let k = half; k < SAMPLES - 1; k++) segs.push(r.pts[k], r.pts[k + 1]);
      }
    });
    const laneGeo = new THREE.BufferGeometry().setFromPoints(segs);

    const packets = Array.from({ length: PACKETS }, (_, i) => ({
      route: Math.floor(hash(i * 3.1) * routes.length),
      offset: hash(i * 5.7),
      speed: 0.055 + hash(i * 9.3) * 0.05,
    }));
    const packetGeo = new THREE.BufferGeometry();
    packetGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(PACKETS * 3), 3));
    packetGeo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(PACKETS * 3), 3));
    const sizes = new Float32Array(PACKETS);
    packets.forEach((_, i) => (sizes[i] = 5 + hash(i * 1.7) * 5));
    packetGeo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    const hexGeo = new THREE.BufferGeometry().setFromPoints(
      Array.from({ length: 7 }, (_, k) => {
        const a = (k / 6) * Math.PI * 2;
        return new THREE.Vector3(Math.cos(a), Math.sin(a), 0);
      })
    );
    return { routes, laneGeo, packetGeo, packets, hexGeo, uniforms: { uPixelRatio: { value: 1 } } };
  }, []);

  useEffect(
    () => () => {
      laneGeo.dispose();
      packetGeo.dispose();
      hexGeo.dispose();
    },
    [laneGeo, packetGeo, hexGeo]
  );

  const tmp = useMemo(() => new THREE.Color(), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (matRef.current) matRef.current.uniforms.uPixelRatio.value = dpr;

    // Mutate through the ref: the geometry is three.js state, not React state.
    const geo = pointsRef.current?.geometry;
    if (!geo) return;
    const pos = geo.attributes.position.array;
    const col = geo.attributes.color.array;
    packets.forEach((p, i) => {
      const u = (p.offset + t * p.speed) % 1;
      const f = u * (SAMPLES - 1);
      const k = Math.floor(f);
      const w = f - k;
      const flat = routes[p.route].flat;
      const a = k * 3;
      const b = Math.min(k + 1, SAMPLES - 1) * 3;
      pos[i * 3] = flat[a] + (flat[b] - flat[a]) * w;
      pos[i * 3 + 1] = flat[a + 1] + (flat[b + 1] - flat[a + 1]) * w;
      pos[i * 3 + 2] = flat[a + 2] + (flat[b + 2] - flat[a + 2]) * w;
      // Orange until the hub, a quick switch to teal through it.
      tmp.copy(ORANGE).lerp(TEAL, THREE.MathUtils.smoothstep(u, 0.46, 0.54));
      tmp.toArray(col, i * 3);
    });
    geo.attributes.position.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;

    if (hubA.current) hubA.current.rotation.z = t * 0.35;
    if (hubB.current) hubB.current.rotation.z = -t * 0.22;
    if (core.current) core.current.scale.setScalar(0.62 + Math.sin(t * 2.2) * 0.05);

    const g = groupRef.current;
    if (!g) return;
    const targetY = Math.sin(t * 0.15) * 0.22 + pointer.current.x * 0.22;
    const targetX = 0.08 + pointer.current.y * 0.1;
    g.rotation.y += (targetY - g.rotation.y) * 0.04;
    g.rotation.x += (targetX - g.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={laneGeo}>
        <lineBasicMaterial color="#9FB7D9" transparent opacity={0.18} depthWrite={false} />
      </lineSegments>
      <points ref={pointsRef} geometry={packetGeo}>
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={packetVertex}
          fragmentShader={packetFragment}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <line ref={hubA} geometry={hexGeo} scale={1.25}>
        <lineBasicMaterial color="#2DE8D5" transparent opacity={0.9} />
      </line>
      <line ref={hubB} geometry={hexGeo} scale={1.7}>
        <lineBasicMaterial color="#13D4D4" transparent opacity={0.55} />
      </line>
      <mesh ref={core}>
        <circleGeometry args={[1, 6]} />
        <meshBasicMaterial color="#2DE8D5" transparent opacity={0.22} depthWrite={false} />
      </mesh>
    </group>
  );
}

export default function FlowScene({ frameloop = "always", onReady }) {
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
      camera={{ position: [0, 0, 11], fov: 46 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={() => onReady?.()}
    >
      <Pipeline pointer={pointer} />
    </Canvas>
  );
}
