"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mb-10 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((p) => (
            <motion.div key={p.slug} variants={card}>
              <Link href={`/projects/${p.slug}`} className="block h-full group">
                <div className="glass rounded-2xl overflow-hidden h-full glow-hover flex flex-col">
                  {p.imageUrl && (
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      <Image
                        src={p.imageUrl}
                        alt=""
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className={`rounded-lg h-1.5 w-16 mb-4 bg-gradient-to-r ${p.gradient}`} />
                    <h3 className="font-heading text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm flex-1">{p.tagline}</p>
                    <span className="text-accent/90 text-sm font-medium mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      View case study →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
