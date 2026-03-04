"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-[var(--muted)] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Open to collaborations and new opportunities. Reach out via LinkedIn or email.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://www.linkedin.com/in/pranavi-immanni-jrt/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl glass text-[var(--text)] border border-black/10 hover:border-accent/40 hover:text-accent transition-all duration-300 font-medium glow-hover inline-flex items-center gap-2"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pranavi@immanni.com"
            className="px-6 py-3 rounded-xl glass text-[var(--text)] border border-black/10 hover:border-accent/40 hover:text-accent transition-all duration-300 font-medium glow-hover inline-flex items-center gap-2"
          >
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
