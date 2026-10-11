import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { LANES, PRISM_X, STREAM_END_X } from "./prismLayout";

/*
 * The Data Prism: grey, scattered records drift in from the left, are pulled
 * into a glass prism, and leave on the right as three ordered spectrum
 * streams that end at the KPI chips laid over the canvas (see PrismKpis).
 *
 * Every particle's path is a pure function of time and its seed, computed in
 * the vertex shader, so a frame costs one uniform write on the CPU.
 */

const SPECTRUM = ["#14D8C4", "#3B82F6", "#8B5CF6"];
/** Seconds for one record to go from the left edge to its KPI chip. */
const CYCLE = 9;
/** Share of the cycle spent drifting in; the rest is the ordered exit. */
const INTAKE = 0.56;

/** Deterministic 0..1 hash; the scene stays pure and identical across mounts. */
function hash(n) {
  const v = Math.sin(n * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

function particleCount() {
  const cores = navigator.hardwareConcurrency ?? 8;
  return cores >= 8 ? 900 : 520;
}

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec3 uLaneY;
  uniform vec3 uColors[3];
  attribute vec4 aSeed;
  attribute float aLane;
  varying vec3 vColor;
  varying float vAlpha;

  const float CYCLE = ${CYCLE.toFixed(1)};
  const float INTAKE = ${INTAKE};
  const float PRISM_X = ${PRISM_X.toFixed(2)};
  const float END_X = ${STREAM_END_X.toFixed(2)};

  void main() {
    float t = fract(uTime / CYCLE + aSeed.w);
    vec3 pos;
    float size;

    if (t < INTAKE) {
      // Raw data: a loose cloud on the left, wandering, then pulled in fast.
      float s = t / INTAKE;
      float pull = s * s * s;
      vec3 start = vec3(-4.9 - aSeed.x * 1.6, (aSeed.y - 0.5) * 5.6, (aSeed.z - 0.5) * 3.0);
      vec3 core = vec3(PRISM_X, (aSeed.y - 0.5) * 0.35, 0.0);
      pos = mix(start, core, pull);
      float wander = (1.0 - pull) * 0.42;
      pos.x += sin(uTime * 0.7 + aSeed.y * 31.0) * wander;
      pos.y += cos(uTime * 0.9 + aSeed.x * 23.0) * wander;
      vColor = mix(vec3(0.50, 0.55, 0.63), vec3(0.85, 0.9, 1.0), pull);
      // Fade as it reaches the core, so records read as absorbed, not stacked.
      vAlpha = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.88, 1.0, s)) * 0.85;
      size = 4.2 + aSeed.z * 2.6;
    } else {
      // Clean data: three straight, evenly spaced lanes in spectrum order.
      float u = (t - INTAKE) / (1.0 - INTAKE);
      float laneY = aLane < 0.5 ? uLaneY.x : (aLane < 1.5 ? uLaneY.y : uLaneY.z);
      float x = mix(PRISM_X + 0.85, END_X, u);
      float fan = smoothstep(0.0, 0.55, u);
      pos = vec3(x, mix(laneY * 0.1, laneY, fan) + (aSeed.y - 0.5) * 0.05, (aSeed.z - 0.5) * 0.08);
      vColor = aLane < 0.5 ? uColors[0] : (aLane < 1.5 ? uColors[1] : uColors[2]);
      vAlpha = smoothstep(0.0, 0.06, u) * (1.0 - smoothstep(0.82, 1.0, u));
      size = 4.6;
    }

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = size * uPixelRatio * (11.0 / -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.05, d) * vAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;

function DataParticles() {
  const materialRef = useRef();
  const dpr = useThree((s) => s.viewport.dpr);

  const geometry = useMemo(() => {
    const count = particleCount();
    const seeds = new Float32Array(count * 4);
    const lanes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      seeds.set([hash(i + 0.1), hash(i + 17.3), hash(i + 41.7), i / count], i * 4);
      lanes[i] = i % 3;
    }
    const g = new THREE.BufferGeometry();
    // Positions are computed in the shader; this only sets the draw count.
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 4));
    g.setAttribute("aLane", new THREE.BufferAttribute(lanes, 1));
    return g;
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uLaneY: { value: new THREE.Vector3(...LANES) },
      uColors: { value: SPECTRUM.map((c) => new THREE.Color(c)) },
    }),
    []
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, delta) => {
    const m = materialRef.current;
    if (!m) return;
    m.uniforms.uTime.value += Math.min(delta, 0.05);
    m.uniforms.uPixelRatio.value = dpr;
  });

  return (
    <points geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        // Drawn over the glass: the intake should be seen entering the prism.
        depthTest={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Flat navy fill, drawn once, for the lens disc. */
function lensTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#101d42";
  ctx.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/**
 * Opaque light sources behind the glass (transmission only refracts opaque
 * geometry; transparent materials are skipped). Without them the prism reads flat.
 * The lens disc matters most: on a transparent canvas, glass with nothing
 * opaque behind it composites as milky white.
 */
function LightBars() {
  const lens = useMemo(() => lensTexture(), []);
  useEffect(() => () => lens.dispose(), [lens]);
  const bars = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        x: PRISM_X - 0.9 + i * 0.3,
        color: new THREE.Color(SPECTRUM[1]),
        h: 1.6 + Math.sin(i * 1.7) * 0.4,
      })),
    []
  );
  return (
    <group position={[0, -0.15, -1.6]}>
      {bars.map((b, i) => (
        <mesh key={i} position={[b.x, 0.15, -0.5]}>
          <planeGeometry args={[0.05, b.h]} />
          <meshBasicMaterial color={b.color} toneMapped={false} />
        </mesh>
      ))}
      <mesh position={[PRISM_X, 0.15, -0.85]}>
        <circleGeometry args={[2.05, 96]} />
        <meshBasicMaterial map={lens} toneMapped={false} />
      </mesh>
      <mesh position={[PRISM_X, 0.15, -0.8]}>
        <torusGeometry args={[2.05, 0.01, 8, 160]} />
        <meshBasicMaterial color="#60A5FA" toneMapped={false} transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

function Prism({ pointer }) {
  const groupRef = useRef();
  const prismRef = useRef();
  const coreRef = useRef();

  // Axis along z, apex up: the camera sees the triangle face, with depth on the sides.
  const geometry = useMemo(() => {
    const g = new THREE.CylinderGeometry(1.5, 1.5, 1.5, 3, 1);
    g.rotateX(Math.PI / 2);
    g.rotateZ(Math.PI);
    return g;
  }, []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);
  useEffect(
    () => () => {
      geometry.dispose();
      edges.dispose();
    },
    [geometry, edges]
  );

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);
    const p = prismRef.current;
    if (p) {
      // A slow sway rather than a spin, so the triangle always reads.
      p.userData.t = (p.userData.t ?? 0) + dt;
      p.rotation.y = 0.22 + Math.sin(p.userData.t * 0.35) * 0.2;
      p.rotation.x = 0.18 + Math.sin(p.userData.t * 0.27) * 0.1;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x -= dt * 0.5;
      coreRef.current.rotation.y += dt * 0.35;
    }
    const g = groupRef.current;
    if (g) {
      // Mouse parallax: a few degrees of tilt, eased so it never snaps.
      g.rotation.x += (-pointer.current.y * 0.16 + 0.12 - g.rotation.x) * 0.05;
      g.rotation.z += (pointer.current.x * 0.08 - g.rotation.z) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[PRISM_X, 0, 0]}>
      <mesh ref={prismRef} geometry={geometry}>
        <meshPhysicalMaterial
          transmission={1}
          thickness={1.1}
          roughness={0.02}
          ior={1.6}
          dispersion={8}
          clearcoat={0.6}
          clearcoatRoughness={0.04}
          envMapIntensity={0.45}
          iridescence={0.25}
          iridescenceIOR={1.3}
          specularIntensity={0.8}
          color="#ffffff"
        />
        <lineSegments geometry={edges}>
          <lineBasicMaterial color="#A5F3FC" transparent opacity={0.85} toneMapped={false} />
        </lineSegments>
      </mesh>
      {/* The glowing core the records are pulled into. */}
      <mesh ref={coreRef} scale={0.24}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#5EEAD4" toneMapped={false} />
      </mesh>
    </group>
  );
}

/**
 * Gets the scene ready before its first frame. The transmission material is a
 * big shader, and compiling it inside the first render blocked the main
 * thread for hundreds of ms; compileAsync uses KHR_parallel_shader_compile so
 * the driver compiles in the background. The env map (room lighting for the
 * glass to reflect) is baked first so the compiled programs already include it.
 * Runs from onCreated, which R3F calls once the children are in the scene.
 */
function warmUp({ gl, scene, camera }) {
  const pmrem = new THREE.PMREMGenerator(gl);
  scene.environment = pmrem.fromScene(new RoomEnvironment(gl), 0.04).texture;
  pmrem.dispose();
  return gl.compileAsync(scene, camera);
}

export default function PrismScene({ frameloop = "always", onReady }) {
  const [compiled, setCompiled] = useState(false);
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
      // No frames until the shaders are compiled; the SVG stays up meanwhile.
      frameloop={compiled ? frameloop : "never"}
      // Transmission renders the scene again into a full-size, 4x MSAA target
      // (three r165 has no separate scale for it), so the DPR cap is its cap too.
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 11], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={(state) =>
        warmUp(state).then(() => {
          setCompiled(true);
          onReady?.();
        })
      }
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 6]} intensity={1.6} />
      <LightBars />
      <Prism pointer={pointer} />
      <DataParticles />
    </Canvas>
  );
}
