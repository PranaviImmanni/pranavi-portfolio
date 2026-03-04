"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="glass rounded-2xl p-6 sm:p-8 border border-black/8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            I&apos;m a data scientist and ML engineer focused on turning complex data into clear, actionable systems. I work across the stack—from building models and pipelines to designing analytics and APIs that teams actually use.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            My interests center on <span className="text-accent">machine learning</span>, <span className="text-accent">AI productization</span>, and <span className="text-accent">product analytics</span>—where data meets decision-making. I care about rigor in experimentation, interpretability when it matters, and shipping solutions that scale.
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            When I&apos;m not in the data, I enjoy reading about systems design and staying curious about how intelligent systems are built and deployed in the real world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
