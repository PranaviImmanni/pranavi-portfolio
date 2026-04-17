"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Github, Mail, Quote } from "lucide-react";

const bounceEase = [0.45, 0.05, 0.55, 0.95] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[70svh] flex-col justify-center items-center px-5 sm:px-6 lg:px-8 pt-44 sm:pt-48 pb-10 lg:pb-14 overflow-x-clip text-center"
    >
      <div className="relative z-10 w-full min-w-0 flex flex-col items-center">
        <motion.div
          className="w-full max-w-[min(100%,92rem)] mx-auto px-1 sm:px-2"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.04, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1
            className="font-heading font-bold leading-[0.88] tracking-[-0.045em] hero-gradient-text hero-name-depth select-none w-full text-center text-balance"
            style={{
              fontSize:
                "clamp(3.6rem, min(16vw, 15vh), min(11.8rem, 19vw))",
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -18, 0],
                    scale: [1, 1.018, 1],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 3.35,
                    repeat: Infinity,
                    ease: bounceEase,
                  }
            }
            aria-label="Pranavi Immanni"
          >
            <span className="block w-full">Pranavi</span>
            <span className="block w-full mt-2 sm:mt-3">Immanni</span>
          </motion.h1>
        </motion.div>

        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-medium tracking-[-0.02em] mt-8 sm:mt-10 mb-3 hero-role-gradient max-w-xl"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            Data Science
          </motion.p>

          <motion.div
            className="hero-pill-tray inline-flex items-center gap-2 rounded-full px-3 py-2"
            initial={{ y: 6 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
          >
            <a
              href="https://www.linkedin.com/in/pranavi-immanni-jrt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link p-3.5 rounded-full text-[var(--text-heading)] hover:bg-[var(--ui-surface-hover)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" strokeWidth={1.65} />
            </a>
            <a
              href="https://github.com/PranaviImmanni/PranaviImmanni"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link p-3.5 rounded-full text-[var(--text-heading)] hover:bg-[var(--ui-surface-hover)]"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" strokeWidth={1.65} />
            </a>
            <a
              href="mailto:pranavi@immanni.com"
              className="hero-social-link p-3.5 rounded-full text-[var(--text-heading)] hover:bg-[var(--ui-surface-hover)]"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" strokeWidth={1.65} />
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("portfolio-open-quote"))}
              className="hero-social-link p-3.5 rounded-full text-[var(--text-heading)] hover:bg-[var(--ui-surface-hover)]"
              aria-label="Open daily inspiration"
            >
              <Quote className="w-6 h-6" strokeWidth={1.65} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
