"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BAKING_IMAGE = "/images/about-baking.png";
const NATURE_TRAIL_IMAGE =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80";

const USER_IMAGES = [
  { src: "/images/B9FDA18D-1B80-4F97-BF55-DE711712C661-e1575aa4-c64c-4890-92a2-fbc145b5dbee.png", alt: "" },
  { src: "/images/about-beach-alt.png", alt: "" },
  { src: "/images/IMG_5937-3c0828fe-0819-4c9a-96ab-9efd9bef1268.png", alt: "" },
];

const IMAGES = [
  { src: USER_IMAGES[1].src, alt: USER_IMAGES[1].alt, external: false },
  { src: NATURE_TRAIL_IMAGE, alt: "", external: true },
  { src: BAKING_IMAGE, alt: "", external: false },
  { src: USER_IMAGES[0].src, alt: USER_IMAGES[0].alt, external: false },
  { src: USER_IMAGES[2].src, alt: USER_IMAGES[2].alt, external: false },
];

const CARD_SIZE = { width: 168, height: 210 };
const FLOAT_DELAYS = [0, 0.8, 1.6, 1.2, 2];

export function AboutImages() {
  return (
    <>
      <section className="hidden lg:block w-full mx-auto">
        <div className="flex flex-wrap justify-center gap-6" style={{ maxWidth: 580 }}>
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.external ? img.src : img.src}
              className="relative rounded-xl overflow-hidden flex-shrink-0 glass animate-float-collage"
              style={{
                width: CARD_SIZE.width,
                height: CARD_SIZE.height,
                animationDelay: `${FLOAT_DELAYS[i]}s`,
                boxShadow: "0 12px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
                boxShadow: "0 16px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(181, 90, 117, 0.25)",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-xl"
                sizes="180px"
                unoptimized={!img.external}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="lg:hidden py-6">
        <div className="grid grid-cols-2 gap-5 max-w-sm mx-auto">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.external ? img.src : img.src}
              className={`relative rounded-xl overflow-hidden glass ${i === 0 ? "col-span-2" : ""}`}
              style={{
                aspectRatio: i === 0 ? "2/1" : "3/4",
                boxShadow: "0 12px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, 200px"
                unoptimized={!img.external}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
