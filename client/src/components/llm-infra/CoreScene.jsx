import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/*
 * The "Private Core": a model (the wireframe icosahedron) running inside a
 * perimeter (the shell). Tokens orbit freely inside; requests from outside
 * travel in and dissolve at the shell, so nothing crosses it in either
 * direction. Particle paths are pure functions of time in the vertex shader,
 * so a frame costs one uniform write on the CPU.
 */

const TEAL = "#14D8C4";
const SHELL_R = 2.25;

function hash(n) {
  const v = Math.sin(n * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute vec4 aSeed;
  attribute float aInside;
  varying float vAlpha;
  varying float vInside;

  const float SHELL = ${SHELL_R.toFixed(2)};

  // Point on a unit sphere from two 0..1 seeds.
  vec3 dir(float a, float b) {
    float th = a * 6.2831853;
    float ph = acos(2.0 * b - 1.0);
    return vec3(sin(ph) * cos(th), sin(ph) * sin(th), cos(ph));
  }

  void main() {
    vec3 pos;
    float size;
    if (aInside > 0.5) {
      // Tokens in orbit: a tilted ring per particle, radius inside the shell.
      float r = 1.05 + aSeed.x * (SHELL - 1.35);
      float speed = 0.25 + aSeed.y * 0.35;
      float a = uTime * speed + aSeed.z * 6.2831853;
      vec3 p = vec3(cos(a) * r, sin(a) * r * 0.35, sin(a) * r);
      float tilt = (aSeed.w - 0.5) * 2.4;
      float c = cos(tilt), s = sin(tilt);
      pos = vec3(p.x, p.y * c - p.z * s, p.y * s + p.z * c);
      vAlpha = 0.75;
      size = 3.4 + aSeed.y * 2.0;
    } else {
      // Outside traffic: falls inward from far away, fades out at the shell.
      float t = fract(uTime * (0.08 + aSeed.w * 0.06) + aSeed.z);
      vec3 d = dir(aSeed.x, aSeed.y);
      float r = mix(6.5, SHELL + 0.05, t);
      pos = d * r;
      vAlpha = smoothstep(0.0, 0.2, t) * (1.0 - smoothstep(0.82, 1.0, t)) * 0.7;
      size = 2.6 + aSeed.w * 1.6;
    }
    vInside = aInside;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = size * uPixelRatio * (9.0 / -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  varying float vAlpha;
  varying float vInside;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.1, d) * vAlpha;
    if (a < 0.01) discard;
    vec3 teal = vec3(0.08, 0.85, 0.77);
    vec3 grey = vec3(0.72, 0.78, 0.86);
    gl_FragColor = vec4(vInside > 0.5 ? teal : grey, a);
  }
`;

function Tokens() {
  const materialRef = useRef();
  const dpr = useThree((s) => s.viewport.dpr);

  const geometry = useMemo(() => {
    const count = (navigator.hardwareConcurrency ?? 8) >= 8 ? 1100 : 650;
    const seeds = new Float32Array(count * 4);
    const inside = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      seeds.set([hash(i + 0.3), hash(i + 9.1), hash(i + 27.7), hash(i + 51.9)], i * 4);
      inside[i] = i % 5 < 2 ? 1 : 0;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 4));
    g.setAttribute("aInside", new THREE.BufferAttribute(inside, 1));
    return g;
  }, []);

  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uPixelRatio: { value: 1 } }), []);

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
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** The model: a faceted core inside a wireframe, breathing slowly. */
function Core() {
  const outer = useRef();
  const inner = useRef();
  const wire = useMemo(() => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1, 1)), []);
  useEffect(() => () => wire.dispose(), [wire]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (outer.current) {
      outer.current.rotation.y = t * 0.22;
      outer.current.rotation.x = t * 0.11;
    }
    if (inner.current) {
      inner.current.rotation.y = -t * 0.35;
      inner.current.scale.setScalar(0.52 + Math.sin(t * 1.4) * 0.03);
    }
  });

  return (
    <group>
      <lineSegments ref={outer} geometry={wire}>
        <lineBasicMaterial color={TEAL} transparent opacity={0.9} />
      </lineSegments>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#0B3B44"
          emissive={TEAL}
          emissiveIntensity={0.55}
          roughness={0.35}
          metalness={0.4}
          flatShading
        />
      </mesh>
    </group>
  );
}

/** The perimeter: a geodesic shell and three slow orbit rings. */
function Shell() {
  const ref = useRef();
  const edges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(SHELL_R, 2)),
    []
  );
  useEffect(() => () => edges.dispose(), [edges]);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = -clock.elapsedTime * 0.05;
  });

  return (
    <group ref={ref}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#9FB6D6" transparent opacity={0.16} />
      </lineSegments>
      {[
        [1.25, 0.2, 0],
        [-0.5, 0.9, 0.3],
        [0.3, -0.6, 1.1],
      ].map((rot, i) => (
        <mesh key={i} rotation={rot}>
          <torusGeometry args={[SHELL_R * (0.78 + i * 0.08), 0.006, 6, 160]} />
          <meshBasicMaterial color={TEAL} transparent opacity={0.45 - i * 0.1} />
        </mesh>
      ))}
    </group>
  );
}

/** Eases the whole rig toward the pointer, for a little depth on hover. */
function Rig({ children }) {
  const ref = useRef();
  useFrame(({ pointer }, delta) => {
    const g = ref.current;
    if (!g) return;
    const k = Math.min(1, delta * 2.5);
    g.rotation.y += (pointer.x * 0.35 - g.rotation.y) * k;
    g.rotation.x += (-pointer.y * 0.25 - g.rotation.x) * k;
  });
  return <group ref={ref}>{children}</group>;
}

/** Fires `onReady` once the first frame has rendered. */
function ReadySignal({ onReady }) {
  const fired = useRef(false);
  useFrame(() => {
    if (fired.current) return;
    fired.current = true;
    onReady?.();
  });
  return null;
}

export default function CoreScene({ frameloop = "always", onReady }) {
  return (
    <Canvas
      frameloop={frameloop}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.2], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 5]} intensity={40} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={18} color={TEAL} />
      <Rig>
        <Core />
        <Shell />
        <Tokens />
      </Rig>
      <ReadySignal onReady={onReady} />
    </Canvas>
  );
}
