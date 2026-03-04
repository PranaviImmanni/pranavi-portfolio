"use client";

import { motion } from "framer-motion";

const certifications = [
  { name: "LinkedIn Learning AI & ML Foundations", issuer: "LinkedIn Learning" },
  { name: "SQL Essential Training", issuer: "LinkedIn Learning" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mb-10 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {certifications.map((c) => (
            <div
              key={c.name}
              className="glass rounded-xl p-5 glow-hover"
            >
              <p className="text-[var(--text)] font-medium">{c.name}</p>
              <p className="text-[var(--muted)] text-sm mt-1">{c.issuer}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
