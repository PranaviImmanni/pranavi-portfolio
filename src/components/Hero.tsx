"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Modak, Pacifico } from "next/font/google";
import { Linkedin, Github, Mail, Quote } from "lucide-react";

/** Modak — soft inflated bubble letterforms (stroke styling in `.hero-name-glass`). */
const heroBubble = Modak({
  weight: "400",
  subsets: ["latin"],
});

const heroScript = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col overflow-x-clip"
    >
      {/* Reference-style: white field + soft top-center spotlight (coral / blush — your palette, not yellow) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 125% 95% at 50% -12%, rgba(245, 143, 124, 0.42) 0%, rgba(245, 143, 124, 0.14) 36%, transparent 58%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 95% 65% at 50% 0%, rgba(242, 196, 206, 0.36) 0%, rgba(242, 196, 206, 0.1) 40%, transparent 55%)",
          }}
        />
      </div>

      {/* Center column: name, then social pill below */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 md:px-10 lg:px-12">
        <motion.div
          className="flex w-full max-w-6xl flex-col items-center justify-center gap-8 sm:gap-10"
          initial={reduceMotion ? false : { y: 14 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="relative flex w-full min-w-0 max-w-full items-center justify-center overflow-x-clip pt-16 sm:pt-20 md:pt-24"
            initial={reduceMotion ? false : { y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, delay: 0.04, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Wrapper holds filter glow — avoids blank text when filter + bg-clip:text share one node */}
            <div className="hero-name-glass-glow relative inline-flex max-w-full justify-center [contain:paint]">
              <h1
                className={`${heroBubble.className} hero-name-glass relative z-0 select-none whitespace-nowrap text-center uppercase`}
                style={{
                  fontSize: "clamp(3.25rem, calc((100vw - 1.5rem) / 3.95), min(32vh, 24rem))",
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                }}
                aria-label="Pranavi Immanni, Data Science"
              >
                PRANAVI
              </h1>
            </div>
            <p
              className={`${heroScript.className} pointer-events-none absolute left-1/2 top-[48%] z-10 text-center text-[var(--accent-coral)] drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]`}
              style={{
                fontSize: "clamp(1.35rem, min(5.5vw, 5vh), 3.25rem)",
                transform: "translate(-50%, -50%) rotate(-3deg)",
              }}
              aria-hidden
            >
              Data Science
            </p>
          </motion.div>

          <motion.div
            className="hero-pill-tray inline-flex w-fit max-w-full shrink-0 items-center gap-1 self-center rounded-full px-2 py-1.5 sm:gap-1.5 sm:px-2.5 sm:py-1.5"
            initial={reduceMotion ? false : { y: 8 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <a
              href="https://www.linkedin.com/in/pranavi-immanni-jrt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link rounded-full p-2 text-[var(--text-heading)] hover:bg-[var(--ui-surface-hover)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" strokeWidth={1.65} />
            </a>
            <a
              href="https://github.com/PranaviImmanni/PranaviImmanni"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link rounded-full p-2 text-[var(--text-heading)] hover:bg-[var(--ui-surface-hover)]"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={1.65} />
            </a>
            <a
              href="mailto:pranavi@immanni.com"
              className="hero-social-link rounded-full p-2 text-[var(--text-heading)] hover:bg-[var(--ui-surface-hover)]"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" strokeWidth={1.65} />
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("portfolio-open-quote"))}
              className="hero-social-link rounded-full p-2 text-[var(--text-heading)] hover:bg-[var(--ui-surface-hover)]"
              aria-label="Open daily inspiration"
            >
              <Quote className="h-5 w-5" strokeWidth={1.65} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
