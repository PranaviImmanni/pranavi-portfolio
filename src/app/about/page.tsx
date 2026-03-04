import Link from "next/link";
import { AboutImages } from "./AboutImages";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <div className="relative z-10 px-6 pt-28 pb-24">
        <div className="max-w-6xl mx-auto mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] hover:underline transition-colors"
          >
            ← Back to portfolio
          </Link>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          <div className="flex-1 min-w-0 space-y-10">
            <section className="rounded-2xl px-6 py-6 sm:px-8 sm:py-8 glass">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
                About
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-heading)] mb-4">
                About Me
              </h1>
              <p className="text-lg text-[var(--muted)] mb-6 leading-relaxed">
                Data science student. Curious builder. Lifelong learner.
              </p>
              <p className="text-[var(--muted)] max-w-xl leading-relaxed">
                I am a junior at San Jose State University studying Data Science, driven by a love for turning messy and complex data into systems that truly make sense. I am especially drawn to AI and data engineering, not just for the algorithms, but for the way thoughtful systems can create meaningful impact.
              </p>
              <p className="text-[var(--muted)] max-w-xl leading-relaxed mt-4">
                Originally from San Diego, I bring a blend of curiosity and practicality to everything I build. I am always trying to learn something new, whether it is a new framework, a new tool, or a new way to approach a problem. Growth is not optional to me. It is the part I enjoy most.
              </p>
            </section>

            <div className="w-full max-w-xl" aria-hidden>
              <div className="h-px bg-black/8" />
            </div>

            <section className="rounded-2xl px-6 py-6 sm:px-8 sm:py-8 glass">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-heading)] mb-4">Outside the Algorithm</h2>
              <div className="space-y-3 text-[var(--muted)] max-w-xl leading-relaxed">
                <p>
                  When I am not working with data, I am usually outside exploring somewhere new or chasing a small adventure. I enjoy trying things I have never done before, from new places to new hobbies and new challenges. It keeps life interesting and keeps me learning.
                </p>
                <p>
                  You will also find me experimenting in the kitchen—both the successes and the failures—staying active to reset my mind, or spending time with my dog, who reminds me daily that not everything needs to be optimized.
                </p>
                <p className="text-[var(--text-heading)] font-medium">
                  Curiosity fuels my work. Balance sustains it.
                </p>
              </div>
            </section>
          </div>

          <div className="w-full lg:w-[420px] xl:w-[480px] flex-shrink-0 flex flex-col items-center">
            <AboutImages />
          </div>
        </div>
      </div>
    </main>
  );
}
