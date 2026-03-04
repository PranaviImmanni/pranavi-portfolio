"use client";

import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mb-10 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Leadership
        </motion.h2>
        <motion.div
          className="glass rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-heading text-lg font-semibold text-[var(--text)] mb-1">Data Science Club</h3>
          <p className="text-accent font-medium">Event Coordinator</p>
          <p className="text-[var(--muted)] text-sm mt-2">
            Organized and coordinated club events, workshops, and speaker sessions to build community and support learning in data science and AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
