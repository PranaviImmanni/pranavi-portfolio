"use client";

import Image from "next/image";
import { useState } from "react";

function AboutPlaceholderImage({
  src,
  alt,
  fallbackLabel,
}: {
  src: string;
  alt: string;
  fallbackLabel: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-[#1a1a2e]/70 text-sm font-medium px-4 text-center bg-[#e8e8f0]/50 rounded-2xl">
        {fallbackLabel}
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, 33vw"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}

export function AboutMeImage() {
  return (
    <AboutPlaceholderImage src="/images/me.png" alt="Me" fallbackLabel="Add /images/me.png" />
  );
}

export function AboutPhoto2Image() {
  return (
    <AboutPlaceholderImage src="/images/photo2.png" alt="Photo" fallbackLabel="Add /images/photo2.png" />
  );
}
