"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getQuoteForDate, MOTIVATIONAL_QUOTES } from "@/data/quotes";

const STORAGE_KEY = "portfolio-quote-lastShownDate";

/** Set to true to test: modal shows every page load. Set to false for production (once per day). */
const DEBUG_ALWAYS_SHOW_QUOTE = true;

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

    const dayOfYear = Math.floor(
      (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
    );
    const index = dayOfYear % MOTIVATIONAL_QUOTES.length;

    const forceShowViaUrl =
      typeof window !== "undefined" &&
      (window.location.search.includes("showQuote=1") || window.location.search.includes("quote=1"));
    const show = shouldShowModal(forceShowViaUrl);

    console.log("[QuoteModal] trigger check:", {
      show,
      dayOfYear,
      index,
      quotePreview: quoteText.slice(0, 50) + "...",
      debugAlwaysShow: DEBUG_ALWAYS_SHOW_QUOTE,
    });

    if (show) setOpen(true);
  }, [mounted]);

  const handleClose = () => {
    markShownToday();
    setOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {open && quote && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={handleClose}
            aria-hidden
          />
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md px-2"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Daily inspiration"
          >
            <div
              className="rounded-2xl p-6 shadow-xl border border-black/8"
              style={{
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
              }}
            >
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
                Daily inspiration
              </p>
              <p className="text-[var(--text)] text-lg leading-relaxed mb-6">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-[var(--text-muted)] hover:text-accent border border-black/10 hover:border-accent/30 transition-colors"
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
