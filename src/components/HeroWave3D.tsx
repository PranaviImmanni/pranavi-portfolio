"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function RibbonWave() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geometry = mesh.geometry as THREE.PlaneGeometry;
    const position = geometry.attributes.position as THREE.BufferAttribute;
    const time = clock.getElapsedTime() * 0.7;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const baseY = position.getY(i);
      const wave =
        Math.sin(x * 1.8 + time) * 0.22 +
        Math.cos(x * 0.9 - time * 0.6) * 0.12 +
        Math.sin(baseY * 1.4 + time * 0.4) * 0.06;
      position.setZ(i, wave);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2.4, 0, -0.2]}
      position={[0, -0.35, 0]}
      castShadow
      receiveShadow
    >
      <planeGeometry args={[6, 1.6, 160, 40]} />
      <meshStandardMaterial
        color="#e8ddd8"
        metalness={0.08}
        roughness={0.55}
        envMapIntensity={0.9}
      />
    </mesh>
  );
}

export default function HeroWave3D() {
  return (
    <div className="pointer-events-none absolute inset-x-[-10%] top-[60%] -translate-y-1/2 -z-10 h-52 sm:h-60 opacity-90">
      <Canvas
        shadows
        camera={{ position: [0, 1.4, 4.2], fov: 40 }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight
          position={[-2.5, 4, 3]}
          intensity={1}
          castShadow
        />
        <directionalLight
          position={[2.5, 3, -2]}
          intensity={0.5}
        />
        <Suspense fallback={null}>
          <RibbonWave />
        </Suspense>
      </Canvas>
    </div>
  );
}
