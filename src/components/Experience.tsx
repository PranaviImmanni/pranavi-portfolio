"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

function formatBullet(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-accent font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mb-10 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.title + job.org}
              className="glass rounded-2xl p-6 glow-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg font-semibold text-[var(--text)]">{job.title}</h3>
                <span className="text-[var(--muted)] text-sm">{job.period}</span>
              </div>
              <p className="text-accent font-medium text-sm mb-3">{job.org}</p>
              {job.skills && job.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="chip px-2.5 py-1 rounded-lg text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              <ul className="space-y-2">
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-[var(--muted)] text-sm leading-relaxed flex gap-2">
                    <span className="text-accent mt-1.5 shrink-0">•</span>
                    <span className="text-[var(--text)]">{formatBullet(b)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
