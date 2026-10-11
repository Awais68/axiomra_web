import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/*
 * The hero's "thinking" mesh: nodes on a sphere shell, wired to their nearest
 * neighbours, with message pulses running along the wires. It turns slowly
 * and leans toward the pointer. Flat teal and white only, additive blended,
 * so it reads as light on the photo rather than a second picture.
 */

const TEAL = new THREE.Color("#14D8C4");
const WHITE = new THREE.Color("#E6F7FF");
const RADIUS = 2.15;
const LINK_DISTANCE = 0.95;

/** Deterministic 0..1 hash, so the mesh is identical on every mount. */
function hash(n) {
  const v = Math.sin(n * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

function nodeCount() {
  return (navigator.hardwareConcurrency ?? 8) >= 8 ? 150 : 96;
}

/** Fibonacci sphere with a little radial jitter, plus the edge list. */
function buildMesh(count) {
  const nodes = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = golden * i;
    const jitter = RADIUS * (0.9 + hash(i + 1) * 0.2);
    nodes.push(new THREE.Vector3(Math.cos(a) * r * jitter, y * jitter, Math.sin(a) * r * jitter));
  }
  const edges = [];
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      if (nodes[i].distanceTo(nodes[j]) < LINK_DISTANCE) edges.push([i, j]);
    }
  }
  return { nodes, edges };
}

const pointVertex = /* glsl */ `
  uniform float uPixelRatio;
  attribute float aSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vDepth;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    // Nodes on the far side of the shell shrink and dim, which sells the depth.
    vDepth = smoothstep(-8.5, -4.5, mv.z);
    gl_PointSize = aSize * uPixelRatio * (0.55 + vDepth * 0.7) * (6.0 / -mv.z);
    vColor = aColor;
  }
`;

const pointFragment = /* glsl */ `
  varying vec3 vColor;
  varying float vDepth;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.1, d);
    gl_FragColor = vec4(vColor, a * (0.3 + vDepth * 0.7));
  }
`;

function Mesh({ onReady }) {
  const group = useRef();
  const pulsesRef = useRef();
  const pointer = useRef({ x: 0, y: 0 });
  const { gl } = useThree();

  const { nodes, edges } = useMemo(() => buildMesh(nodeCount()), []);

  const nodeGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(nodes.length * 3);
    const size = new Float32Array(nodes.length);
    const color = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      pos.set([n.x, n.y, n.z], i * 3);
      // One node in seven is a lit "hub".
      const hub = hash(i + 7) > 0.86;
      size[i] = hub ? 9 : 4 + hash(i + 3) * 2;
      (hub ? TEAL : WHITE).toArray(color, i * 3);
    });
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    g.setAttribute("aColor", new THREE.BufferAttribute(color, 3));
    return g;
  }, [nodes]);

  const lineGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      pos.set([nodes[a].x, nodes[a].y, nodes[a].z, nodes[b].x, nodes[b].y, nodes[b].z], i * 6);
    });
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, [nodes, edges]);

  // Pulses: each rides one edge, then hops to a random edge leaving its end node.
  const pulses = useMemo(() => {
    const count = Math.min(36, edges.length);
    return Array.from({ length: count }, (_, i) => ({
      edge: Math.floor(hash(i + 11) * edges.length),
      t: hash(i + 23),
      speed: 0.35 + hash(i + 31) * 0.5,
      forward: true,
    }));
  }, [edges]);

  const byNode = useMemo(() => {
    const map = nodes.map(() => []);
    edges.forEach((e, i) => {
      map[e[0]].push(i);
      map[e[1]].push(i);
    });
    return map;
  }, [nodes, edges]);

  const pulseGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pulses.length * 3), 3));
    const size = new Float32Array(pulses.length).fill(11);
    const color = new Float32Array(pulses.length * 3);
    for (let i = 0; i < pulses.length; i++) TEAL.toArray(color, i * 3);
    g.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    g.setAttribute("aColor", new THREE.BufferAttribute(color, 3));
    return g;
  }, [pulses]);

  const pointMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) } },
        vertexShader: pointVertex,
        fragmentShader: pointFragment,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(
    () => () => {
      nodeGeometry.dispose();
      lineGeometry.dispose();
      pulseGeometry.dispose();
      pointMaterial.dispose();
    },
    [nodeGeometry, lineGeometry, pulseGeometry, pointMaterial]
  );

  // Signal the wrapper after the first real frame, so the fallback can fade.
  const readySent = useRef(false);
  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const g = group.current;
    g.rotation.y += dt * 0.08;
    g.rotation.x += (pointer.current.y * 0.25 - g.rotation.x) * 0.04;
    g.rotation.z += (-pointer.current.x * 0.12 - g.rotation.z) * 0.04;

    const attr = pulsesRef.current.geometry.attributes.position;
    pulses.forEach((p, i) => {
      p.t += dt * p.speed;
      if (p.t >= 1) {
        const [a, b] = edges[p.edge];
        const end = p.forward ? b : a;
        const options = byNode[end];
        p.edge = options[Math.floor(Math.random() * options.length)];
        p.forward = edges[p.edge][0] === end;
        p.t = 0;
      }
      const [a, b] = edges[p.edge];
      const from = nodes[p.forward ? a : b];
      const to = nodes[p.forward ? b : a];
      attr.setXYZ(
        i,
        from.x + (to.x - from.x) * p.t,
        from.y + (to.y - from.y) * p.t,
        from.z + (to.z - from.z) * p.t
      );
    });
    attr.needsUpdate = true;

    if (!readySent.current) {
      readySent.current = true;
      requestAnimationFrame(() => onReady?.());
    }
  });

  useEffect(() => {
    gl.setClearColor(0x000000, 0);
  }, [gl]);

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#14D8C4"
          transparent
          opacity={0.2}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      <points geometry={nodeGeometry} material={pointMaterial} />
      <points ref={pulsesRef} geometry={pulseGeometry} material={pointMaterial} />
    </group>
  );
}

export default function NeuralScene({ frameloop = "always", onReady }) {
  return (
    <Canvas
      frameloop={frameloop}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.4], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Mesh onReady={onReady} />
    </Canvas>
  );
}
