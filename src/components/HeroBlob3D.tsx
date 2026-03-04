"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function NeonBlob() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Soft outer glow */}
      <mesh>
        <sphereGeometry args={[1.85, 32, 32]} />
        <meshBasicMaterial
          color="#ff4fd8"
          transparent
          opacity={0.2}
        />
      </mesh>
      {/* Glossy torus - neon pink/purple */}
      <mesh castShadow receiveShadow>
        <torusGeometry args={[1.2, 0.35, 48, 64]} />
        <meshPhysicalMaterial
          color="#e040c0"
          emissive="#ff4fd8"
          emissiveIntensity={0.7}
          metalness={0.35}
          roughness={0.25}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>
      {/* Inner ring accent - purple */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.95, 0.08, 24, 48]} />
        <meshBasicMaterial color="#7c4dff" />
      </mesh>
    </group>
  );
}

export default function HeroBlob3D() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[48%] -translate-y-1/2 -z-10 h-80 sm:h-96">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 2, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-2, 1, 3]} intensity={0.6} color="#ff4fd8" />
        <pointLight position={[0, 0, 2]} intensity={0.8} color="#7c4dff" distance={6} />
        <Suspense fallback={null}>
          <NeonBlob />
        </Suspense>
      </Canvas>
    </div>
  );
}
