"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  educationCoursework,
  getJob,
  journeyEntries,
  type JourneyEntry,
} from "@/data/journey";
import SectionHeading from "./SectionHeading";

const ACCENTS = [
  "var(--accent-pink)",
  "var(--accent-coral)",
  "var(--accent-mauve)",
  "#c5c4cc",
] as const;

const CARD_BACKGROUNDS = [
  "rgba(247, 219, 228, 0.88)",
  "rgba(246, 171, 152, 0.88)",
  "rgba(233, 207, 223, 0.88)",
  "rgba(231, 232, 238, 0.9)",
] as const;

const STEM_AWAY_BG = "rgba(230, 216, 247, 0.9)";
const VIASAT_BG = "rgba(209, 228, 248, 0.9)";
/** Timeline pill fill — matches card tint for internship labels */
const STEM_AWAY_PILL = "#c4a3e0";
const VIASAT_PILL = "#8bbce8";
const PINK_HUE_SHADOW = "0 0 42px rgba(242,196,206,0.45)";

function glowFor(accent: string) {
  if (accent === STEM_AWAY_PILL) return "rgba(196, 163, 224, 0.55)";
  if (accent === VIASAT_PILL) return "rgba(139, 188, 232, 0.52)";
  if (accent.includes("pink")) return "rgba(242,196,206,0.55)";
  if (accent.includes("coral")) return "rgba(245,143,124,0.5)";
  if (accent.includes("mauve")) return "rgba(212,168,176,0.5)";
  return "rgba(197,196,204,0.45)";
}

function formatPeriodBadge(period: string) {
  const p = period.trim();
  if (/^present$/i.test(p)) return "Present";
  return p;
}

function titleCaseWords(s: string) {
  return s
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function formatLocationLine(s: string) {
  const parts = s.split(",").map((p) => p.trim()).filter(Boolean);
  if (parts.length === 2 && /^[a-z]{2}$/i.test(parts[1])) {
    const city = titleCaseWords(parts[0]);
    return `${city}, ${parts[1].toUpperCase()}`;
  }
  return titleCaseWords(s);
}

function orgHeadline(org: string) {
  const i = org.indexOf("·");
  return (i === -1 ? org : org.slice(0, i)).trim();
}

/** Preserve branded casing (e.g. STEM-Away). */
function displayOrgHeadline(org: string) {
  const raw = orgHeadline(org);
  if (/stem-away/i.test(raw.replace(/\s+/g, ""))) return "STEM-Away";
  return titleCaseWords(raw);
}

function orgSubline(org: string) {
  const i = org.indexOf("·");
  if (i === -1) return "";
  return org.slice(i + 1).trim();
}

function YearRing({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  const g = glowFor(accent);
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 bg-[var(--canvas-deep)] font-exp-display text-sm font-extrabold tabular-nums sm:h-16 sm:w-16 sm:text-base"
      style={{ borderColor: accent, color: accent, boxShadow: `0 0 28px ${g}, inset 0 0 0 1px rgba(255,255,255,0.06)` }}
    >
      {label}
    </div>
  );
}

function AxisPill({
  label,
  accent,
  tail,
  textColor = "var(--canvas-deep)",
}: {
  label: string;
  accent: string;
  tail: "up" | "down";
  textColor?: string;
}) {
  const g = glowFor(accent);
  return (
    <div className="relative z-[2] flex flex-col items-center">
      <div
        className="relative rounded-full px-3.5 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] shadow-[0_8px_28px_rgba(0,0,0,0.28)] sm:px-4 sm:text-[11px]"
        style={{
          backgroundColor: accent,
          color: textColor,
          boxShadow: `0 0 32px ${g}, 0 10px 28px rgba(0,0,0,0.22)`,
        }}
      >
        {label}
        {tail === "down" && (
          <span
            className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 h-0 w-0 border-x-[7px] border-x-transparent border-t-[8px] sm:border-x-[8px] sm:border-t-[9px]"
            style={{ borderTopColor: accent } as CSSProperties}
            aria-hidden
          />
        )}
        {tail === "up" && (
          <span
            className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 h-0 w-0 border-x-[7px] border-x-transparent border-b-[8px] sm:border-x-[8px] sm:border-b-[9px]"
            style={{ borderBottomColor: accent } as CSSProperties}
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}

function VConnector({ accent, flip }: { accent: string; flip?: boolean }) {
  const grad = flip
    ? `linear-gradient(to top, transparent, ${accent}, transparent)`
    : `linear-gradient(to bottom, transparent, ${accent}, transparent)`;
  return <div className="h-6 w-px shrink-0 sm:h-8" style={{ background: grad }} aria-hidden />;
}

function EducationCard({ accent, cardBg }: { accent: string; cardBg: string }) {
  return (
    <motion.article
      className="font-exp-body w-full max-w-[280px] rounded-2xl border border-l-4 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.2),0_0_0_1px_rgba(242,196,206,0.12)] backdrop-blur-xl transition-shadow duration-300 sm:max-w-[300px] sm:p-5"
      style={{
        backgroundColor: cardBg,
        borderColor: "rgba(255,255,255,0.42)",
        borderLeftColor: accent,
        boxShadow: `0 12px 40px rgba(0,0,0,0.2), ${PINK_HUE_SHADOW}, 0 0 0 1px rgba(242,196,206,0.14)`,
      }}
      initial={{ y: 14 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-exp-display text-base font-semibold text-[#2d2930] sm:text-lg">
          San Jose State University
        </h3>
        <span className="text-[#4a454e] text-xs tabular-nums sm:text-sm">Aug 2023 – Dec 2026</span>
      </div>
      <p className="text-[#c86f5e] mb-1 text-sm font-medium">B.S. in Data Science</p>
      <p className="text-[#4a454e] mb-4 text-xs sm:text-sm">Dean&apos;s Scholar</p>
      <p className="text-[#2d2930] mb-2 text-xs font-medium sm:text-sm">Relevant coursework</p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {educationCoursework.map((c) => (
          <span
            key={c}
            className="rounded-full bg-white/40 px-2.5 py-1 text-[10px] font-medium text-[#36313a] ring-1 ring-black/10 sm:px-3 sm:text-xs"
          >
            {c}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function JobCard({
  job,
  accent,
  cardBg,
}: {
  job: ReturnType<typeof getJob>;
  accent: string;
  cardBg: string;
}) {
  const sub = orgSubline(job.org);
  return (
    <motion.article
      className="font-exp-body w-full max-w-[280px] rounded-2xl border border-l-4 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.2),0_0_0_1px_rgba(242,196,206,0.12)] backdrop-blur-xl transition-shadow duration-300 sm:max-w-[300px] sm:p-5"
      style={{
        backgroundColor: cardBg,
        borderColor: "rgba(255,255,255,0.42)",
        borderLeftColor: accent,
        boxShadow: `0 12px 40px rgba(0,0,0,0.2), ${PINK_HUE_SHADOW}, 0 0 0 1px rgba(242,196,206,0.14)`,
      }}
      initial={{ y: 14 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="mb-2">
        <span className="inline-flex items-center rounded-full bg-white/45 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#4a3f4b] ring-1 ring-black/10 sm:text-[10px]">
          {formatPeriodBadge(job.period)}
        </span>
      </div>
      <h3 className="font-exp-display text-base font-semibold tracking-tight text-[#2d2930] sm:text-lg">
        {displayOrgHeadline(job.org)}
      </h3>
      {sub && <p className="mt-1 text-xs text-[#4a454e] sm:text-sm">{formatLocationLine(sub)}</p>}
      <p className="mt-2 text-xs font-semibold text-[#c86f5e] sm:text-sm">{job.title}</p>
      {job.skills && job.skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white/40 px-2.5 py-1 text-[10px] font-medium text-[#36313a] ring-1 ring-black/10 sm:text-[11px]"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}

function TimelineColumn({
  entry,
  index,
  accent,
}: {
  entry: JourneyEntry;
  index: number;
  accent: string;
}) {
  const yearUp = index % 2 === 0;
  const tail: "up" | "down" = yearUp ? "down" : "up";
  const defaultCardBg = CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length];
  const cardBg =
    entry.kind === "job"
      ? (() => {
          const org = getJob(entry).org.toLowerCase();
          if (org.includes("stem-away")) return STEM_AWAY_BG;
          if (org.includes("viasat")) return VIASAT_BG;
          return defaultCardBg;
        })()
      : defaultCardBg;

  const pillAccent =
    entry.kind === "job"
      ? (() => {
          const org = getJob(entry).org.toLowerCase();
          if (org.includes("stem-away")) return STEM_AWAY_PILL;
          if (org.includes("viasat")) return VIASAT_PILL;
          return accent;
        })()
      : accent;

  const pillTextColor =
    pillAccent === STEM_AWAY_PILL || pillAccent === VIASAT_PILL ? "#2a2530" : "var(--canvas-deep)";

  const body =
    entry.kind === "education" ? (
      <EducationCard accent={accent} cardBg={cardBg} />
    ) : (
      <JobCard job={getJob(entry)} accent={accent} cardBg={cardBg} />
    );

  return (
    <div className="flex min-w-[min(88vw,280px)] shrink-0 flex-col items-stretch md:min-w-0 md:flex-1">
      {yearUp ? (
        <>
          <div className="flex flex-1 flex-col items-center justify-end gap-1 pb-1">
            <YearRing label={entry.yearLabel} accent={pillAccent} />
            <VConnector accent={pillAccent} />
          </div>
          <div className="flex shrink-0 justify-center">
            <AxisPill label={entry.pillLabel} accent={pillAccent} tail={tail} textColor={pillTextColor} />
          </div>
          <div className="flex flex-1 flex-col items-center justify-start gap-1 pt-2">
            <VConnector accent={pillAccent} flip />
            <div className="flex justify-center px-1">{body}</div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-1 flex-col items-center justify-end gap-1 pb-2">
            <div className="flex justify-center px-1">{body}</div>
            <VConnector accent={pillAccent} />
          </div>
          <div className="flex shrink-0 justify-center">
            <AxisPill label={entry.pillLabel} accent={pillAccent} tail={tail} textColor={pillTextColor} />
          </div>
          <div className="flex flex-1 flex-col items-center justify-start gap-1 pt-1">
            <VConnector accent={pillAccent} flip />
            <YearRing label={entry.yearLabel} accent={pillAccent} />
          </div>
        </>
      )}
    </div>
  );
}

export default function JourneyTimeline() {
  return (
    <section id="experience" className="relative z-[2] scroll-mt-24 pt-40 md:pt-48 pb-14 md:pb-20 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Education & Experience"
        />

        <div className="relative mt-10 min-h-[420px] md:mt-14 md:min-h-[460px]">
          <div
            className="pointer-events-none absolute left-[4%] right-[4%] top-1/2 z-0 hidden h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--accent-pink)] via-[var(--accent-coral)] to-[var(--accent-mauve)] opacity-90 shadow-[0_0_24px_rgba(242,196,206,0.4)] md:block"
            aria-hidden
          />

          <div className="relative z-[1] flex flex-row items-stretch gap-8 overflow-x-auto pb-4 pt-2 [-ms-overflow-style:none] [scrollbar-width:thin] md:gap-3 md:overflow-visible md:pb-2 md:pt-0 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--accent-pink)]/35">
            {journeyEntries.map((entry, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <TimelineColumn key={`${entry.kind}-${entry.sortKey}-${i}`} entry={entry} index={i} accent={accent} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
