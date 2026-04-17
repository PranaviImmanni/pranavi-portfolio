"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getQuoteForDate } from "@/data/quotes";

const STORAGE_KEY = "portfolio-quote-lastShownDate";

const DEBUG_ALWAYS_SHOW_QUOTE = false;

function getTodayString(): string {
  return new Date().toDateString();
}

function shouldShowModal(forceShowViaUrl: boolean): boolean {
  if (forceShowViaUrl) return true;
  if (typeof window === "undefined") return false;
  if (DEBUG_ALWAYS_SHOW_QUOTE) return true;
  const stored = localStorage.getItem(STORAGE_KEY);
  const today = getTodayString();
  if (!stored) return true;
  return stored !== today;
}

function markShownToday(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, getTodayString());
}

export default function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const date = new Date();
    const quoteText = getQuoteForDate(date);
    setQuote(quoteText);

    const forceShowViaUrl =
      typeof window !== "undefined" &&
      (window.location.search.includes("showQuote=1") || window.location.search.includes("quote=1"));
    const show = shouldShowModal(forceShowViaUrl);

    if (show) setOpen(true);
  }, [mounted]);

  useEffect(() => {
    const openQuote = () => {
      setQuote(getQuoteForDate(new Date()));
      setOpen(true);
    };
    window.addEventListener("portfolio-open-quote", openQuote);
    return () => window.removeEventListener("portfolio-open-quote", openQuote);
  }, []);

  const handleClose = () => {
    markShownToday();
    setOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {open && quote && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32 }}
            onClick={handleClose}
            aria-hidden
          />
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md px-2"
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Daily inspiration"
          >
            <div
              className="relative rounded-2xl p-7 sm:p-8 overflow-hidden border border-[var(--ui-border)]"
              style={{
                background:
                  "linear-gradient(155deg, rgba(74,73,80,0.94) 0%, rgba(104,103,114,0.92) 100%)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow:
                  "0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(245,143,124,0.12) inset",
              }}
            >
              <div
                className="pointer-events-none absolute -top-20 -right-12 h-44 w-44 rounded-full opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,143,124,0.22) 0%, transparent 68%)",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full opacity-32"
                style={{
                  background:
                    "radial-gradient(circle, rgba(242,196,206,0.18) 0%, transparent 68%)",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute top-6 right-6 h-16 w-16 rounded-full opacity-25"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,143,124,0.28) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <p className="relative text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-peach)] mb-4">
                Daily inspiration
              </p>
              <p className="relative text-[var(--text)] text-lg sm:text-xl leading-relaxed mb-8 font-normal">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="relative flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)] hover:text-[var(--text-heading)] border border-[var(--ui-border)] hover:border-[var(--accent-peach)]/45 hover:bg-[var(--ui-surface)] transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
