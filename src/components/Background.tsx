"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
      {/* White base with soft peach / blush glows (matches globals body) */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_115%_80%_at_50%_-10%,rgba(245,143,124,0.09),transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_0%_0%,rgba(242,196,206,0.1),transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_100%_8%,rgba(255,255,255,0.85),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_48%_at_0%_100%,rgba(245,143,124,0.04),transparent_56%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_48%_40%_at_88%_90%,rgba(242,196,206,0.08),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(240,240,242,0.55) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240,240,242,0.55) 1px, transparent 1px)
          `,
          backgroundSize: "84px 84px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(245,143,124,0.06)] to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-coral)]/55 to-transparent" />
    </div>
  );
}
