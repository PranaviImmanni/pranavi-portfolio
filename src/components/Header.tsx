"use client";

import { motion } from "framer-motion";
import { Quicksand } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

/** Soft rounded sans for logo — reads more playful / “girly” than the geometric heading font */
const brandMark = Quicksand({
  subsets: ["latin"],
  weight: ["600", "700"],
});

/** Root-relative hashes so links work from any route (e.g. /about → home section). */
const navLinks = [
  { href: "/about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-[var(--ui-border-subtle)] bg-[var(--nav-bg)] backdrop-blur-xl shadow-soft"
          : "border-b border-[var(--ui-border-subtle)]/40 bg-white/65 backdrop-blur-xl"
      }`}
      initial={false}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-8 py-4">
        <Link
          href="/"
          className={`flex items-center gap-3 group ${brandMark.className}`}
          aria-label="Pranavi Immanni — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--ui-border)] bg-[var(--ui-surface)] text-[10px] font-bold tracking-[0.12em] text-[var(--text-heading)] transition group-hover:border-[var(--accent-peach)]/45 group-hover:bg-[var(--ui-surface-hover)]">
            PI
          </span>
          <span className="hidden sm:inline text-[12px] sm:text-[13px] font-semibold tracking-[0.1em] text-[var(--text-heading)] uppercase">
            Pranavi Immanni
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-2.5 xl:px-3 py-2 pb-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-heading)]/88 hover:text-[var(--text-heading)] transition-colors duration-200 rounded-md hover:bg-[var(--ui-surface)] before:pointer-events-none before:absolute before:bottom-1 before:left-2.5 before:right-2.5 xl:before:left-3 xl:before:right-3 before:h-0.5 before:rounded-full before:bg-[var(--accent-pink)] before:content-[''] before:opacity-90 before:transition-[opacity,transform] hover:before:opacity-100 hover:before:scale-x-[1.02]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-[var(--text-heading)]/85 hover:text-[var(--text-heading)] hover:bg-[var(--ui-surface)] transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <motion.div
          className="lg:hidden mx-5 mb-4 py-2 glass rounded-xl flex flex-col gap-0.5 px-1 max-h-[70vh] overflow-y-auto border border-[var(--ui-border)]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-l-[3px] border-[var(--accent-pink)] text-[var(--text-heading)]/90 hover:text-[var(--text-heading)] hover:bg-[var(--ui-surface)] py-3 pl-3 pr-3 rounded-lg text-sm font-medium uppercase tracking-[0.1em] transition-colors"
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
