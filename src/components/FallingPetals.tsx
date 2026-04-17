"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  drift: string;
  size: string;
  rotate: string;
  opacity: string;
};

function makePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 18;
    const duration = 14 + Math.random() * 16;
    const drift = (Math.random() * 170 - 85).toFixed(0);
    const size = (7 + Math.random() * 8).toFixed(1);
    const rotate = (Math.random() * 360).toFixed(0);
    const opacity = (0.16 + Math.random() * 0.22).toFixed(2);
    return { id: i, left, delay, duration, drift, size, rotate, opacity };
  });
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(makePetals(22));
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className="falling-petal"
          style={
            {
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              ["--petal-drift" as string]: `${p.drift}px`,
              ["--petal-size" as string]: `${p.size}px`,
              ["--petal-rotate" as string]: `${p.rotate}deg`,
              opacity: p.opacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
