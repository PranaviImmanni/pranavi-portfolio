"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import HeroWave3D from "./HeroWave3D";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-32"
    >
      {/* Soft radial highlight blobs – hero only, behind content */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 38%, rgba(255,255,255,0.2), transparent 55%), radial-gradient(ellipse 50% 30% at 50% 55%, rgba(255,255,255,0.08), transparent 50%)",
        }}
      />
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative">
        {/* Very subtle glow near wave */}
        <div
          className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-2xl h-40 -z-10 pointer-events-none opacity-40"
          style={{
            background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(255,255,255,0.35), transparent 70%)",
            filter: "blur(20px)",
          }}
          aria-hidden
        />
        <HeroWave3D />

        <div className="relative flex flex-col items-center text-center max-w-2xl z-10">
          <motion.h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.92] tracking-[-0.03em] text-3d mb-4"
            style={{ color: "var(--text-heading)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="block">PRANAVI</span>
            <span className="block">IMMANNI</span>
          </motion.h1>
          <motion.p
            className="font-heading text-xl sm:text-2xl font-medium mb-2 tracking-tight text-[var(--muted)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Data Science
          </motion.p>
          <motion.p
            className="mb-8 text-base sm:text-lg font-medium !text-black drop-shadow-[0_10px_22px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Engineering intelligent systems from data.
          </motion.p>
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <a
              href="https://www.linkedin.com/in/pranavi-immanni-jrt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link p-2.5 rounded-xl transition-all duration-200 text-[var(--muted)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" strokeWidth={1.8} />
            </a>
            <a
              href="https://github.com/PranaviImmanni/PranaviImmanni"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link p-2.5 rounded-xl transition-all duration-200 text-[var(--muted)]"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" strokeWidth={1.8} />
            </a>
            <a
              href="mailto:pranavi@immanni.com"
              className="hero-social-link p-2.5 rounded-xl transition-all duration-200 text-[var(--muted)]"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" strokeWidth={1.8} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
