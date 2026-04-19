"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BAKING_IMAGE = "/images/about-baking.png";
const NATURE_TRAIL_IMAGE =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80";

const USER_IMAGES = [
  { src: "/images/B9FDA18D-1B80-4F97-BF55-DE711712C661-e1575aa4-c64c-4890-92a2-fbc145b5dbee.png", alt: "Beach at sunset" },
  { src: "/images/about-beach-alt.png", alt: "Beach scene" },
  { src: "/images/IMG_5937-3c0828fe-0819-4c9a-96ab-9efd9bef1268.png", alt: "Dog portrait" },
];

const IMAGES = [
  { src: USER_IMAGES[1].src, alt: USER_IMAGES[1].alt, external: false },
  { src: NATURE_TRAIL_IMAGE, alt: "Forest trail", external: true },
  { src: BAKING_IMAGE, alt: "Baking in the kitchen", external: false },
  { src: USER_IMAGES[0].src, alt: USER_IMAGES[0].alt, external: false },
  { src: USER_IMAGES[2].src, alt: USER_IMAGES[2].alt, external: false },
];

/** Desktop scatter: positions around centered copy; optional bottom */
type DesktopScatter = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  w: number;
  h: number;
  r: number;
  z: number;
};

/** Frames around the middle column — slightly compact so copy stays the focus */
const DESKTOP_SCATTER: DesktopScatter[] = [
  { top: "0%", left: "0%", w: 184, h: 232, r: -5.5, z: 2 },
  { top: "1%", right: "0%", left: "auto", w: 200, h: 250, r: 6, z: 3 },
  { top: "40%", left: "1.5%", w: 176, h: 220, r: 3, z: 5 },
  { top: "34%", right: "0%", left: "auto", w: 192, h: 240, r: -4, z: 2 },
  { bottom: "5%", left: "3%", top: "auto", w: 196, h: 246, r: 4.5, z: 4 },
];

const MOBILE_TILT = [-3, 4, -2, 3.5, -4] as const;
const MOBILE_SHIFT = ["", "translate-x-3 -translate-y-2", "translate-x-1 translate-y-4", "translate-x-1", "-translate-x-3 translate-y-2"] as const;

type AboutImagesProps = {
  /** When true, absolutely positioned to surround centered content (desktop) */
  surround?: boolean;
  showDesktop?: boolean;
  showMobile?: boolean;
};

export function AboutImages({
  surround = false,
  showDesktop = true,
  showMobile = true,
}: AboutImagesProps) {
  const desktopSectionClass = surround
    ? "hidden lg:block absolute inset-x-0 top-0 min-h-[min(128vh,1360px)] w-full max-w-[1600px] mx-auto pointer-events-none [&_*]:pointer-events-auto"
    : "hidden lg:block relative w-full min-h-[min(92vh,980px)] mx-auto";

  return (
    <>
      {showDesktop && (
        <section className={desktopSectionClass} aria-label="Photo collage">
          {IMAGES.map((img, i) => {
            const spec = DESKTOP_SCATTER[i];
            return (
              <motion.div
                key={img.external ? img.src : img.src}
                className="absolute rounded-2xl overflow-hidden glass ring-1 ring-[var(--accent-pink)]/25 shadow-[0_18px_48px_rgba(0,0,0,0.2)] cursor-default"
                style={{
                  ...(spec.top !== undefined ? { top: spec.top } : {}),
                  ...(spec.bottom !== undefined ? { bottom: spec.bottom } : {}),
                  ...(spec.left !== undefined ? { left: spec.left } : {}),
                  ...(spec.right !== undefined ? { right: spec.right } : {}),
                  width: spec.w,
                  height: spec.h,
                  zIndex: spec.z,
                  rotate: spec.r,
                }}
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 260, damping: 26, delay: i * 0.07 }}
                whileHover={{
                  scale: 1.04,
                  rotate: spec.r * 0.45,
                  zIndex: 20,
                  boxShadow: "0 24px 56px rgba(0,0,0,0.24), 0 0 0 1px rgba(242,196,206,0.4)",
                  transition: { duration: 0.22 },
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="200px"
                  unoptimized={!img.external}
                />
              </motion.div>
            );
          })}
        </section>
      )}

      {showMobile && (
      <section className="lg:hidden py-6" aria-label="Photo collage">
        <div className="flex flex-wrap justify-center items-start gap-x-3 gap-y-8 px-2 max-w-md mx-auto">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.external ? img.src : img.src}
              className={`relative rounded-2xl overflow-hidden glass ring-1 ring-[var(--accent-pink)]/25 shadow-[0_14px_36px_rgba(0,0,0,0.16)] ${MOBILE_SHIFT[i] ?? ""}`}
              style={{
                width: i === 0 ? "42%" : i === 4 ? "48%" : "38%",
                aspectRatio: i === 0 ? "4/5" : "3/4",
                rotate: MOBILE_TILT[i],
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 640px) 42vw, 200px"
                unoptimized={!img.external}
              />
            </motion.div>
          ))}
        </div>
      </section>
      )}
    </>
  );
}
