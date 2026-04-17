"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const card = {
  hidden: { y: 20 },
  show: { y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="relative z-[2] py-14 md:py-20 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Case studies spanning analytics, ML, and data engineering."
        />
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -48px 0px" }}
        >
          {projects.map((p) => (
            <motion.div key={p.slug} variants={card}>
              <Link href={`/projects/${p.slug}`} className="block h-full group">
                <div className="glass rounded-2xl overflow-hidden h-full glow-hover flex flex-col border border-[var(--ui-border)]">
                  {p.imageUrl && (
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--canvas-deep)]/80">
                      <Image
                        src={p.imageUrl}
                        alt=""
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas)]/80 via-transparent to-transparent opacity-90 pointer-events-none" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className={`rounded-full h-1 w-14 mb-4 bg-gradient-to-r ${p.gradient}`} />
                    <h3 className="font-heading text-lg font-semibold text-[var(--text-heading)] mb-2 group-hover:text-[var(--accent-peach)] transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm flex-1 leading-relaxed">{p.tagline}</p>
                    <span className="text-[var(--accent-peach)]/95 text-xs font-semibold uppercase tracking-[0.14em] mt-5 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
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
