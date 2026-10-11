import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/*
 * The hero's "work queue": task cubes ride a tilted ring around a wireframe
 * bot core. Each cube is white while queued; as it passes the gate it is
 * processed, pops, and turns teal, then fades back to white over the rest of
 * the lap, ready for its next run. Flat colours, no gradients, additive so it
 * reads as light over the photo.
 */

const TEAL = new THREE.Color("#14D8C4");
const WHITE = new THREE.Color("#E6F7FF");
const RING_RADIUS = 2.3;
// Angle of the gate on the ring (radians): front-right, where the eye lands.
const GATE_ANGLE = -0.35;

function taskCount() {
  return (navigator.hardwareConcurrency ?? 8) >= 8 ? 30 : 20;
}

function Queue({ onReady }) {
  const group = useRef();
  const core = useRef();
  const tasks = useRef();
  const gate = useRef();
  const pointer = useRef({ x: 0, y: 0 });
  const { gl } = useThree();

  const count = useMemo(() => taskCount(), []);
  // Each task's place on the ring and how long ago it was processed (0..1 of a lap).
  const state = useMemo(
    () => Array.from({ length: count }, (_, i) => ({ angle: (i / count) * Math.PI * 2, glow: 0 })),
    [count]
  );

  const cubeGeometry = useMemo(() => new THREE.BoxGeometry(0.2, 0.2, 0.2), []);
  const cubeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    []
  );
  const coreGeometry = useMemo(
    () => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1, 1)),
    []
  );
  const innerGeometry = useMemo(
    () => new THREE.EdgesGeometry(new THREE.OctahedronGeometry(0.45)),
    []
  );
  const ringGeometry = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * RING_RADIUS, 0, Math.sin(a) * RING_RADIUS));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);
  // Spokes from the core to the ring: the bot "reaching" its queue.
  const spokeGeometry = useMemo(() => {
    const pos = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      pos.push(
        Math.cos(a) * 1.05,
        0,
        Math.sin(a) * 1.05,
        Math.cos(a) * RING_RADIUS,
        0,
        Math.sin(a) * RING_RADIUS
      );
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    return g;
  }, []);

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
      [
        cubeGeometry,
        cubeMaterial,
        coreGeometry,
        innerGeometry,
        ringGeometry,
        spokeGeometry,
      ].forEach((r) => r.dispose());
    },
    [cubeGeometry, cubeMaterial, coreGeometry, innerGeometry, ringGeometry, spokeGeometry]
  );

  useEffect(() => {
    gl.setClearColor(0x000000, 0);
  }, [gl]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);
  const readySent = useRef(false);

  useFrame((s, delta) => {
    const dt = Math.min(delta, 0.05);
    const g = group.current;
    // Lean toward the pointer, eased, on top of the fixed tilt.
    g.rotation.x += (0.42 + pointer.current.y * 0.12 - g.rotation.x) * 0.05;
    g.rotation.z += (-0.12 - pointer.current.x * 0.1 - g.rotation.z) * 0.05;

    core.current.rotation.y += dt * 0.35;
    core.current.rotation.x += dt * 0.12;
    gate.current.scale.setScalar(1 + Math.sin(s.clock.elapsedTime * 3) * 0.06);

    const speed = dt * 0.32;
    state.forEach((t, i) => {
      const before = t.angle;
      t.angle = (t.angle + speed) % (Math.PI * 2);
      // Crossing the gate angle processes the task.
      const gate2pi = (GATE_ANGLE + Math.PI * 2) % (Math.PI * 2);
      const crossed = before < gate2pi && t.angle >= gate2pi;
      if (crossed) t.glow = 1;
      else t.glow = Math.max(0, t.glow - dt * 0.28);

      const pop = 1 + Math.max(0, t.glow - 0.8) * 3;
      dummy.position.set(Math.cos(t.angle) * RING_RADIUS, 0, Math.sin(t.angle) * RING_RADIUS);
      dummy.rotation.set(t.angle * 2, t.angle * 3, 0);
      dummy.scale.setScalar(pop);
      dummy.updateMatrix();
      tasks.current.setMatrixAt(i, dummy.matrix);
      color.copy(WHITE).lerp(TEAL, Math.min(1, t.glow * 1.4));
      tasks.current.setColorAt(i, color);
    });
    tasks.current.instanceMatrix.needsUpdate = true;
    if (tasks.current.instanceColor) tasks.current.instanceColor.needsUpdate = true;

    if (!readySent.current) {
      readySent.current = true;
      requestAnimationFrame(() => onReady?.());
    }
  });

  return (
    <group ref={group} rotation={[0.42, 0, -0.12]}>
      <group ref={core}>
        <lineSegments geometry={coreGeometry}>
          <lineBasicMaterial
            color="#14D8C4"
            transparent
            opacity={0.55}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
        <lineSegments geometry={innerGeometry}>
          <lineBasicMaterial
            color="#E6F7FF"
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
      </group>
      <line geometry={ringGeometry}>
        <lineBasicMaterial
          color="#14D8C4"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </line>
      <lineSegments geometry={spokeGeometry}>
        <lineBasicMaterial
          color="#14D8C4"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      {/* The gate: a ring standing across the track, where tasks get processed. */}
      <mesh
        ref={gate}
        position={[Math.cos(GATE_ANGLE) * RING_RADIUS, 0, Math.sin(GATE_ANGLE) * RING_RADIUS]}
        rotation={[0, -GATE_ANGLE, 0]}
      >
        <torusGeometry args={[0.36, 0.022, 8, 48]} />
        <meshBasicMaterial
          color="#14D8C4"
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <instancedMesh ref={tasks} args={[cubeGeometry, cubeMaterial, count]} />
    </group>
  );
}

export default function AutomationScene({ frameloop = "always", onReady }) {
  return (
    <Canvas
      frameloop={frameloop}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.4, 6.6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Queue onReady={onReady} />
    </Canvas>
  );
}
