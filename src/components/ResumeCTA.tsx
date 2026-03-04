"use client";

import { motion } from "framer-motion";

export default function ResumeCTA() {
  return (
    <motion.section
      className="relative py-16 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="glass rounded-2xl p-8 border border-black/8 glow-hover">
          <p className="text-[var(--muted)] mb-4">Want the full picture?</p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white border border-transparent transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            style={{ background: "linear-gradient(90deg, #c26786, #a05572)" }}
          >
            View Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}
