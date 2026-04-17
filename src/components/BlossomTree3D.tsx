"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type FallingPetal = {
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  velocityY: number;
  driftX: number;
  driftZ: number;
  spin: number;
};

const PETAL_COUNT = 140;

function randomRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createBlossomTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, size, size);
  ctx.translate(size / 2, size / 2);

  // Draw a 5-petal cherry blossom shape.
  for (let i = 0; i < 5; i += 1) {
    ctx.save();
    ctx.rotate((i * Math.PI * 2) / 5);
    const petalGradient = ctx.createRadialGradient(0, -20, 5, 0, -20, 25);
    petalGradient.addColorStop(0, "rgba(255, 232, 244, 0.95)");
    petalGradient.addColorStop(1, "rgba(244, 148, 194, 0.95)");
    ctx.fillStyle = petalGradient;
    ctx.beginPath();
    ctx.ellipse(0, -20, 16, 23, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  const centerGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 10);
  centerGradient.addColorStop(0, "rgba(255, 247, 220, 0.95)");
  centerGradient.addColorStop(1, "rgba(240, 182, 118, 0.6)");
  ctx.fillStyle = centerGradient;
  ctx.beginPath();
  ctx.arc(0, 0, 7, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function resetPetal(petal: FallingPetal, initial = false) {
  const x = randomRange(-2.6, 2.6);
  const y = initial ? randomRange(-0.6, 3.2) : randomRange(2.2, 4.4);
  const z = randomRange(-2.3, 2.3);

  petal.mesh.position.set(x, y, z);
  petal.mesh.rotation.set(randomRange(-0.8, 0.8), randomRange(0, Math.PI * 2), randomRange(-0.8, 0.8));
  petal.velocityY = randomRange(0.24, 0.5);
  petal.driftX = randomRange(-0.12, 0.12);
  petal.driftZ = randomRange(-0.08, 0.08);
  petal.spin = randomRange(0.35, 0.95);
}

export default function BlossomTree3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x58545f, 6, 15);

    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.45, 5.75);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    const blossomTexture = createBlossomTexture();
    if (!blossomTexture) return;

    const hemisphere = new THREE.HemisphereLight(0xffd8ef, 0x3d3846, 1.05);
    scene.add(hemisphere);

    const keyLight = new THREE.DirectionalLight(0xfff2fb, 1.2);
    keyLight.position.set(4, 8, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf8afc6, 0.62);
    fillLight.position.set(-5, 4, -3);
    scene.add(fillLight);

    const trunkMaterial = new THREE.MeshStandardMaterial({
      color: 0x30242a,
      roughness: 0.92,
      metalness: 0.02,
    });
    const branchMaterial = new THREE.MeshStandardMaterial({
      color: 0x3a2b34,
      roughness: 0.9,
      metalness: 0.02,
    });

    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.54, 2.9, 24), trunkMaterial);
    trunk.position.y = -1.05;
    scene.add(trunk);

    const branchGroup = new THREE.Group();
    scene.add(branchGroup);

    const blossomAnchorPoints: THREE.Vector3[] = [];
    for (let i = 0; i < 16; i += 1) {
      const length = randomRange(1.35, 2.4);
      const branch = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.11, length, 10),
        branchMaterial
      );
      const side = i % 2 === 0 ? 1 : -1;
      branch.position.set(side * randomRange(0.18, 0.82), randomRange(-0.18, 1.0), randomRange(-0.62, 0.62));
      branch.rotation.z = side * randomRange(0.68, 1.06);
      branch.rotation.x = randomRange(-0.4, 0.46);
      branch.rotation.y = randomRange(-0.45, 0.45);
      branchGroup.add(branch);

      const tip = new THREE.Vector3(0, length * 0.48, 0);
      tip.applyEuler(branch.rotation);
      tip.add(branch.position);
      blossomAnchorPoints.push(tip);
    }

    const blossomGroup = new THREE.Group();
    scene.add(blossomGroup);

    const blossomPlane = new THREE.PlaneGeometry(0.28, 0.28);
    const blossomMaterial = new THREE.MeshBasicMaterial({
      map: blossomTexture,
      transparent: true,
      alphaTest: 0.2,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    // Create clustered blossoms around branch tips for a floral canopy.
    for (const anchor of blossomAnchorPoints) {
      const clusterSize = Math.floor(randomRange(18, 30));
      for (let i = 0; i < clusterSize; i += 1) {
        const bloom = new THREE.Mesh(blossomPlane, blossomMaterial.clone());
        bloom.position.copy(anchor);
        bloom.position.x += randomRange(-0.65, 0.65);
        bloom.position.y += randomRange(-0.45, 0.55);
        bloom.position.z += randomRange(-0.65, 0.65);
        bloom.scale.setScalar(randomRange(0.6, 1.25));
        bloom.rotation.set(randomRange(-0.45, 0.45), randomRange(0, Math.PI * 2), randomRange(-0.45, 0.45));

        const tint = new THREE.Color().setHSL(randomRange(0.88, 0.95), randomRange(0.5, 0.72), randomRange(0.66, 0.84));
        bloom.material.color.copy(tint);
        blossomGroup.add(bloom);
      }
    }
    branchGroup.scale.setScalar(1.28);
    blossomGroup.scale.setScalar(1.28);

    const petals: FallingPetal[] = [];
    const petalMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd0e6,
      map: blossomTexture,
      transparent: true,
      opacity: 0.82,
      alphaTest: 0.2,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const petalGeo = new THREE.PlaneGeometry(0.12, 0.1);

    for (let i = 0; i < PETAL_COUNT; i += 1) {
      const mesh = new THREE.Mesh(petalGeo, petalMaterial.clone());
      const petal: FallingPetal = {
        mesh,
        velocityY: 0.35,
        driftX: 0,
        driftZ: 0,
        spin: 0.6,
      };
      resetPetal(petal, true);
      petals.push(petal);
      scene.add(mesh);
    }

    const clock = new THREE.Clock();
    let raf = 0;

    const animate = () => {
      raf = window.requestAnimationFrame(animate);
      const dt = clock.getDelta();
      const t = clock.elapsedTime;

      branchGroup.rotation.y = Math.sin(t * 0.15) * 0.05;
      blossomGroup.rotation.y = Math.sin(t * 0.12) * 0.035;

      for (const petal of petals) {
        petal.mesh.position.y -= petal.velocityY * dt;
        petal.mesh.position.x += petal.driftX * dt + Math.sin(t * 2.1 + petal.mesh.position.z) * 0.0018;
        petal.mesh.position.z += petal.driftZ * dt;
        petal.mesh.rotation.y += petal.spin * dt;
        petal.mesh.rotation.x += petal.spin * 0.5 * dt;

        if (petal.mesh.position.y < -2.05 || Math.abs(petal.mesh.position.x) > 3.6 || Math.abs(petal.mesh.position.z) > 3.1) {
          resetPetal(petal);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const { clientWidth, clientHeight } = mount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(raf);
      renderer.dispose();
      trunk.geometry.dispose();
      trunkMaterial.dispose();
      branchMaterial.dispose();
      blossomPlane.dispose();
      blossomMaterial.dispose();
      petalGeo.dispose();
      petals.forEach((p) => p.mesh.material.dispose());
      blossomGroup.children.forEach((mesh) => {
        if (mesh instanceof THREE.Mesh && mesh.material instanceof THREE.Material) mesh.material.dispose();
      });
      blossomTexture.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-[480px] w-full max-w-[640px]"
      aria-label="3D blossom tree"
    />
  );
}
