"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <h1 className="font-heading text-2xl font-semibold text-[var(--text-heading)]">Something went wrong</h1>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        The page hit a runtime error. Try again, or stop the dev server, run{" "}
        <code className="rounded bg-[var(--ui-surface)] px-1.5 py-0.5 text-xs text-[var(--text-heading)]">
          rm -rf .next && npm run dev
        </code>{" "}
        if styles or scripts look broken.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full border border-[var(--ui-border)] bg-[var(--ui-surface)] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-heading)] transition hover:bg-[var(--ui-surface-hover)]"
      >
        Try again
      </button>
    </div>
  );
}
