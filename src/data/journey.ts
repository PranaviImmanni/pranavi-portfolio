import type { ExperienceItem } from "./experience";
import { experience } from "./experience";

export const educationCoursework = [
  "Data Structures & Algorithms",
  "Python",
  "R",
  "DBMS",
  "Probability & Statistics",
  "Linear Algebra",
  "Discrete Math",
  "Java",
  "Machine Learning",
  "Artificial Intelligence",
] as const;

export type JourneyEntry =
  | {
      kind: "education";
      sortKey: number;
      yearLabel: string;
      pillLabel: string;
    }
  | {
      kind: "job";
      experienceIndex: number;
      sortKey: number;
      yearLabel: string;
      pillLabel: string;
    };

/** Chronological order for the horizontal timeline (left → right). */
export const journeyEntries: JourneyEntry[] = [
  {
    kind: "job",
    experienceIndex: 3,
    sortKey: 202007,
    yearLabel: "2020",
    pillLabel: "Internship",
  },
  {
    kind: "education",
    sortKey: 202308,
    yearLabel: "2023",
    pillLabel: "Education",
  },
  {
    kind: "job",
    experienceIndex: 1,
    sortKey: 202309,
    yearLabel: "2024",
    pillLabel: "Campus",
  },
  {
    kind: "job",
    experienceIndex: 2,
    sortKey: 202506,
    yearLabel: "2025",
    pillLabel: "Internship",
  },
  {
    kind: "job",
    experienceIndex: 0,
    sortKey: 202601,
    yearLabel: "2026",
    pillLabel: "Internship",
  },
];

export function getJob(entry: Extract<JourneyEntry, { kind: "job" }>): ExperienceItem {
  return experience[entry.experienceIndex];
}
