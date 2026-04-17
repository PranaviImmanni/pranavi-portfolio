export interface ExperienceItem {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  skills?: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Data Science Intern",
    org: "Viasat · San Diego, CA",
    period: "Present",
    bullets: [
      "Support **analytics and modeling** initiatives that turn operational and product data into **actionable insights**.",
      "Partner with teams on **data quality**, reporting, and visualization to inform technical and business decisions.",
      "Apply **Python/SQL** and statistical methods in a fast-paced engineering environment focused on connectivity solutions.",
    ],
    skills: ["Python", "SQL", "Analytics", "Data Visualization", "Cross-functional Collaboration"],
  },
  {
    title: "AV & Event Services",
    org: "San Jose State University · San Jose, CA",
    period: "Present",
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
    period: "June 2025 – August 2025",
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
    period: "July 2020 – August 2020",
    bullets: [
      "Contributed to research and development projects at the intersection of data science and engineering.",
      "Built and documented **reusable components** and **best practices** for the team.",
      "Supported **timely delivery** of project milestones through structured experiments and clear reporting.",
    ],
    skills: ["R&D", "Documentation", "Experimentation", "Data Science", "Engineering"],
  },
];
