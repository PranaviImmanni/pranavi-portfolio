"use client";

import { motion } from "framer-motion";

const coursework = [
  "Data Structures & Algorithms",
  "Python",
  "R",
  "DBMS",
  "Probability & Statistics",
  "Linear Algebra",
  "Discrete Math",
  "Java",
  "Machine Learning",
  "Artificial Intelligence",
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mb-10 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="glass rounded-2xl p-6 sm:p-8 glow-hover"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="font-heading text-lg font-semibold text-[var(--text)]">San Jose State University</h3>
            <span className="text-[var(--muted)] text-sm">Aug 2023 – Dec 2026</span>
          </div>
          <p className="text-accent font-medium mb-1">B.S. in Data Science</p>
          <p className="text-[var(--muted)] text-sm mb-6">Dean&apos;s Scholar</p>
          <p className="text-[var(--text)] text-sm font-medium mb-2">Relevant Coursework</p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span
                key={c}
                className="chip px-3 py-1.5 rounded-xl text-sm font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
