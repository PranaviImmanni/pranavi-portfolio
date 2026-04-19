import Hero from "@/components/Hero";
import JourneyTimeline from "@/components/JourneyTimeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <main className="relative z-0 min-w-0 overflow-x-clip">
        <Hero />
        <JourneyTimeline />
        <Projects />
        <Skills />
        <GetInTouch />
      </main>
      <footer className="relative z-0 border-t border-[var(--ui-border-subtle)] bg-[var(--nav-bg)]/65 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5 py-5 text-center text-xs tracking-[0.08em] text-[var(--muted)] sm:px-6 lg:px-8">
          © {year} Pranavi Immanni. All rights reserved.
        </div>
      </footer>
    </>
  );
}
