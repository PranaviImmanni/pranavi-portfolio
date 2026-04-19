"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skillIconSlides } from "@/data/skillIcons";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [index, setIndex] = useState(0);
  const slide = skillIconSlides[index];
  const last = skillIconSlides.length - 1;

  return (
    <section id="skills" className="relative z-[2] scroll-mt-28 py-14 md:py-20 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Tech Stack" />

        <motion.div
          className="relative mt-10 rounded-3xl border border-[var(--ui-border)] bg-[var(--ui-surface)]/35 px-5 py-9 sm:px-10 sm:py-12 backdrop-blur-md"
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -30px 0px" }}
          transition={{ duration: 0.45 }}
        >
          <p className="font-exp-body text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-pink)] mb-8">
            {slide.label}
          </p>

          <div className="relative flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i === 0 ? last : i - 1))}
              className="shrink-0 rounded-full p-2 text-[var(--muted)] hover:text-[var(--text-heading)] hover:bg-[var(--ui-surface-hover)] transition-colors"
              aria-label="Previous skills"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
            </button>

            <div className="min-w-0 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.label}
                  initial={{ opacity: 1, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-4 gap-4 sm:gap-5 md:gap-6 justify-items-center"
                >
                  {slide.icons.map(({ name, Icon, accent }) => (
                    <div
                      key={`${slide.label}-${name}`}
                      className="flex flex-col items-center gap-2 w-full max-w-[5.5rem]"
                    >
                      <div
                        className="flex h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem] items-center justify-center rounded-full bg-[#d8d9e2] text-[#2c2b30] shadow-[0_0_0_1px_rgba(242,196,206,0.5),0_6px_22px_rgba(242,196,206,0.45),0_10px_28px_rgba(245,143,124,0.15)] transition-transform duration-200 hover:scale-[1.06]"
                        title={name}
                      >
                        <Icon
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          style={accent ? { color: accent } : undefined}
                          aria-hidden
                        />
                      </div>
                      <span className="text-center text-[9px] sm:text-[10px] font-medium leading-tight text-[var(--muted)] line-clamp-2">
                        {name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => setIndex((i) => (i === last ? 0 : i + 1))}
              className="shrink-0 rounded-full p-2 text-[var(--muted)] hover:text-[var(--text-heading)] hover:bg-[var(--ui-surface-hover)] transition-colors"
              aria-label="Next skills"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {skillIconSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  i === index
                    ? "bg-[var(--text-heading)] scale-110 shadow-[0_0_12px_rgba(242,196,206,0.7)]"
                    : "bg-[var(--muted)]/40 hover:bg-[var(--muted)]/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
