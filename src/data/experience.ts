export interface ExperienceItem {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  skills?: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "AV Event Services Technician",
    org: "San Jose State University · San Jose, CA",
    period: "—",
    bullets: [
      "Set up and operated audiovisual equipment for campus events, ensuring **reliable delivery** and **minimal downtime**.",
      "Coordinated with event organizers to meet technical requirements; **supported 50+ events** per semester.",
      "Troubleshot equipment issues in real time, improving **attendee experience** and **client satisfaction**.",
    ],
    skills: ["AV Systems", "Event Coordination", "Technical Support", "Client Communication"],
  },
  {
    title: "Data Science Intern",
    org: "SysIntelli · San Diego, CA",
    period: "—",
    bullets: [
      "Developed data pipelines and analytics solutions to support product and operations decisions.",
      "Delivered **impactful insights** through EDA, reporting, and visualization for stakeholder reviews.",
      "Collaborated with engineering on **data quality** and **metrics definition** for key dashboards.",
    ],
    skills: ["Python", "SQL", "EDA", "Data Pipelines", "Visualization", "Stakeholder Reporting"],
  },
  {
    title: "Research Development Engineer Intern",
    org: "STEM-Away · Remote",
    period: "—",
    bullets: [
      "Contributed to research and development projects at the intersection of data science and engineering.",
      "Built and documented **reusable components** and **best practices** for the team.",
      "Supported **timely delivery** of project milestones through structured experiments and clear reporting.",
    ],
    skills: ["R&D", "Documentation", "Experimentation", "Data Science", "Engineering"],
  },
];
