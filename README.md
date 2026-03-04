# Portfolio — Pranavi Immanni | Data Science & AI Engineer

A modern, dark rose–themed portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Clean, professional, and internship-recruiter friendly.

## Features

- **Dark pink / soft rose** gradient background with subtle glowing accents
- **Daily motivational quote** popup (30 quotes, date-based, localStorage so it changes once per day)
- **Hero** with name, title, tagline, and optional **swan image** (elegant, with soft glow)
- **Glassmorphism** cards and smooth scroll animations
- **Sections**: Education, Experience, Projects, Skills, Leadership, Certifications, Resume, Contact
- **Project case studies** — each project has Problem, Approach, Tools, Results (bold metrics), and GitHub button
- **Fully responsive** layout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Customization

- **Hero & Contact**: `src/components/Hero.tsx` (name, title, tagline, CTA). `src/components/Contact.tsx` — LinkedIn and email URLs.
- **Swan image**: Hero uses an Unsplash swan by default. To use your own, place an image in `public/` (e.g. `public/swan.jpg`) and in `Hero.tsx` set `src` to `/swan.jpg` and use a local `Image` (no remote pattern needed).
- **Experience dates**: Edit `src/data/experience.ts` — replace `"—"` with real dates (e.g. `"Jun 2024 – Aug 2024"`).
- **Projects & GitHub**: `src/data/projects.ts` — project content and `githubUrl` for each project.
- **Education, Leadership, Certifications**: `src/components/Education.tsx`, `Leadership.tsx`, `Certifications.tsx` and related data.
- **Resume**: Place your PDF at `public/resume.pdf`.
- **Styling**: Rose/pink theme in `tailwind.config.ts` and `src/app/globals.css`.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
