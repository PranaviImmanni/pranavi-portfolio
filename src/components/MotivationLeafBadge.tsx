"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function MotivationLeafBadge() {
  return (
    <motion.button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("portfolio-open-quote"))}
      className="group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-peach)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] inline-flex items-center gap-2.5 rounded-2xl border border-[var(--ui-border)] bg-[var(--ui-surface)] px-5 py-3.5 text-left backdrop-blur-md transition-all duration-300 hover:border-[var(--accent-coral)]/45 hover:bg-[var(--ui-surface-hover)] max-w-[280px]"
      initial={{ opacity: 0.95 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Open daily inspiration quote"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--ui-border)] bg-[var(--ui-surface)] text-[var(--accent-peach)] transition-colors group-hover:border-[var(--accent-peach)]/45">
        <Quote className="h-4 w-4" strokeWidth={1.75} aria-hidden />
      </span>
      <span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Daily inspiration
        </span>
        <span className="block text-sm font-medium text-[var(--text-heading)] mt-0.5 leading-snug">
          Open today&apos;s quote
        </span>
      </span>
    </motion.button>
  );
}
