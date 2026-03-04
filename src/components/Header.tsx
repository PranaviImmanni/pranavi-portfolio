"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/about"
          className="font-heading text-[var(--text)] font-semibold text-lg hover:text-accent underline-offset-4 hover:underline transition-colors duration-200"
          aria-label="About Pranavi Immanni"
        >
          PRANAVI IMMANNI
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--muted)] hover:text-accent text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="lg:hidden p-2 text-[var(--muted)] hover:text-[var(--text)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <motion.div
          className="lg:hidden mt-4 py-4 glass rounded-xl flex flex-col gap-2 px-4 max-h-[70vh] overflow-y-auto"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--muted)] hover:text-accent py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
