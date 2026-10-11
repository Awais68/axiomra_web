import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/*
 * A layered neural network drawn in light: five layers of nodes, sparse edges
 * between neighbouring layers, and signals travelling left to right along
 * those edges. Signal positions are a pure function of time and their seed,
 * worked out in the vertex shader, so a frame costs one uniform write.
 */

const LAYERS = [7, 11, 13, 11, 6];
const LAYER_GAP = 1.55;
/** Edges per node into the next layer; kept low so it reads as a network, not a blur. */
const FAN_OUT = 3;
const TEAL = new THREE.Color("#2DE8D5");
const BLUE = new THREE.Color("#60A5FA");

/** Deterministic 0..1 hash; the scene stays identical across mounts. */
function hash(n) {
  const v = Math.sin(n * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

function buildNetwork() {
  const nodes = [];
  const layerStart = [];
  LAYERS.forEach((count, l) => {
    layerStart.push(nodes.length);
    const x = (l - (LAYERS.length - 1) / 2) * LAYER_GAP;
    for (let i = 0; i < count; i++) {
      // Nodes on a tilted ring per layer, so the network has depth when it turns.
      const a = (i / count) * Math.PI * 2 + l * 0.4;
      const r = 0.55 + count * 0.13;
      nodes.push(new THREE.Vector3(x, Math.sin(a) * r, Math.cos(a) * r * 0.55));
    }
  });

  const edges = [];
  LAYERS.slice(0, -1).forEach((count, l) => {
    const next = LAYERS[l + 1];
    for (let i = 0; i < count; i++) {
      for (let k = 0; k < FAN_OUT; k++) {
        const j = Math.floor(hash(l * 97 + i * 13 + k * 7) * next);
        edges.push([layerStart[l] + i, layerStart[l + 1] + j]);
      }
    }
  });
  return { nodes, edges };
}

const nodeVertex = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float aSeed;
  varying float vGlow;
  void main() {
    vGlow = 0.55 + 0.45 * sin(uTime * 1.6 + aSeed * 40.0);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (7.0 + vGlow * 5.0) * uPixelRatio * (10.0 / -mv.z);
  }
`;

const nodeFragment = /* glsl */ `
  uniform vec3 uColor;
  varying float vGlow;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float core = smoothstep(0.22, 0.0, d);
    float halo = smoothstep(0.5, 0.1, d) * 0.45;
    float a = (core + halo) * vGlow;
    if (a < 0.01) discard;
    gl_FragColor = vec4(mix(uColor, vec3(1.0), core * 0.6), a);
  }
`;

const signalVertex = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute vec3 aFrom;
  attribute vec3 aTo;
  attribute float aSeed;
  varying float vAlpha;
  void main() {
    float t = fract(uTime * (0.22 + aSeed * 0.18) + aSeed * 7.0);
    vec3 pos = mix(aFrom, aTo, t);
    vAlpha = smoothstep(0.0, 0.15, t) * (1.0 - smoothstep(0.85, 1.0, t));
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = 6.0 * uPixelRatio * (10.0 / -mv.z);
  }
`;

const signalFragment = /* glsl */ `
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d) * vAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(uColor, a);
  }
`;

function Network({ pointer }) {
  const groupRef = useRef();
  const nodeMatRef = useRef();
  const signalMatRef = useRef();
  const dpr = useThree((s) => s.viewport.dpr);
  const nodeUniforms = useMemo(
    () => ({ uTime: { value: 0 }, uPixelRatio: { value: 1 }, uColor: { value: BLUE } }),
    []
  );
  const signalUniforms = useMemo(
    () => ({ uTime: { value: 0 }, uPixelRatio: { value: 1 }, uColor: { value: TEAL } }),
    []
  );

  const { nodeGeo, edgeGeo, signalGeo } = useMemo(() => {
    const { nodes, edges } = buildNetwork();

    const nodeGeo = new THREE.BufferGeometry().setFromPoints(nodes);
    nodeGeo.setAttribute(
      "aSeed",
      new THREE.BufferAttribute(
        Float32Array.from(nodes, (_, i) => hash(i + 3.1)),
        1
      )
    );

    const edgePts = edges.flatMap(([a, b]) => [nodes[a], nodes[b]]);
    const edgeGeo = new THREE.BufferGeometry().setFromPoints(edgePts);

    // Two signals per edge on different clocks, so the flow never syncs up.
    const count = edges.length * 2;
    const from = new Float32Array(count * 3);
    const to = new Float32Array(count * 3);
    const seed = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const [a, b] = edges[i % edges.length];
      nodes[a].toArray(from, i * 3);
      nodes[b].toArray(to, i * 3);
      seed[i] = hash(i + 0.7);
    }
    const signalGeo = new THREE.BufferGeometry();
    // Positions are computed in the shader; this only sets the draw count.
    signalGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    signalGeo.setAttribute("aFrom", new THREE.BufferAttribute(from, 3));
    signalGeo.setAttribute("aTo", new THREE.BufferAttribute(to, 3));
    signalGeo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    return { nodeGeo, edgeGeo, signalGeo };
  }, []);

  useEffect(
    () => () => {
      nodeGeo.dispose();
      edgeGeo.dispose();
      signalGeo.dispose();
    },
    [nodeGeo, edgeGeo, signalGeo]
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Written through the material refs, not the memoised objects.
    for (const m of [nodeMatRef.current, signalMatRef.current]) {
      if (!m) continue;
      m.uniforms.uTime.value = t;
      m.uniforms.uPixelRatio.value = dpr;
    }
    const g = groupRef.current;
    if (!g) return;
    // Slow turn plus an eased lean toward the pointer.
    const targetY = Math.sin(t * 0.18) * 0.45 + pointer.current.x * 0.25;
    const targetX = -0.15 + pointer.current.y * 0.12;
    g.rotation.y += (targetY - g.rotation.y) * 0.04;
    g.rotation.x += (targetX - g.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={edgeGeo}>
        <lineBasicMaterial color="#60A5FA" transparent opacity={0.16} depthWrite={false} />
      </lineSegments>
      <points geometry={nodeGeo}>
        <shaderMaterial
          ref={nodeMatRef}
          uniforms={nodeUniforms}
          vertexShader={nodeVertex}
          fragmentShader={nodeFragment}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <points geometry={signalGeo}>
        <shaderMaterial
          ref={signalMatRef}
          uniforms={signalUniforms}
          vertexShader={signalVertex}
          fragmentShader={signalFragment}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function NeuralScene({ frameloop = "always", onReady }) {
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
      camera={{ position: [0, 0, 10], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={() => onReady?.()}
    >
      <Network pointer={pointer} />
    </Canvas>
  );
}
