type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  /** Use on light/busy backgrounds (e.g. photography or pastel art) */
  tone?: "default" | "onLight";
};

export default function SectionHeading({ title, subtitle, tone = "default" }: SectionHeadingProps) {
  const isLight = tone === "onLight";

  return (
    <div className="mb-6 md:mb-8 max-w-3xl">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-1.5">
        <span
          className="h-px w-12 sm:w-14 bg-gradient-to-r from-[var(--accent-coral)] to-[var(--accent-pink)] shrink-0"
          aria-hidden
        />
        <h2
          className={`font-heading text-3xl sm:text-4xl font-semibold tracking-tight ${
            isLight ? "text-[#2c2b30]" : "text-[var(--text-heading)]"
          }`}
        >
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p
          className={`mt-2 text-base leading-relaxed max-w-2xl ${
            isLight ? "text-[#2c2b30]/78" : "text-[var(--muted)]"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
