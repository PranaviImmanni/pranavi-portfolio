import Link from "next/link";
import { AboutImages } from "./AboutImages";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative z-[2] overflow-x-hidden">
      <div className="relative z-10 px-5 sm:px-6 pt-28 pb-24 lg:pb-36">
        <div className="max-w-[1600px] mx-auto mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-peach)] hover:underline transition-colors"
          >
            ← Back to portfolio
          </Link>
        </div>

        {/* Desktop: photos absolutely surround centered column */}
        <div className="max-w-[1600px] mx-auto relative min-h-[min(128vh,1360px)] lg:min-h-[1180px]">
          <AboutImages surround showMobile={false} />

          <div className="relative z-10 flex flex-col items-center gap-10 lg:gap-12 w-full max-w-3xl xl:max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 lg:pt-6 lg:pb-28">
            {/* Box1 — journal cover card */}
            <section className="w-full rounded-[1.85rem] sm:rounded-[2rem] px-6 py-8 sm:px-9 sm:py-9 md:px-10 md:py-10 border border-[#e8d9cb] shadow-[0_20px_60px_rgba(184,157,133,0.16)] text-center relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,250,245,0.96),rgba(251,244,236,0.93))] backdrop-blur-sm">
              <div
                className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-90"
                aria-hidden
              />
              <div
                className="absolute inset-x-6 top-6 h-px bg-[repeating-linear-gradient(to_right,rgba(229,213,196,0.75),rgba(229,213,196,0.75)_8px,transparent_8px,transparent_16px)] opacity-80"
                aria-hidden
              />
              <div
                className="absolute right-8 top-8 h-14 w-14 rounded-full border border-[var(--accent-coral)]/20 bg-[radial-gradient(circle_at_30%_30%,rgba(245,143,124,0.2),rgba(242,196,206,0.08)_65%,transparent_70%)]"
                aria-hidden
              />
              <p className="font-exp-display text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-[var(--accent-pink)] mb-4">
                About
              </p>
              <h1 className="font-exp-display text-3xl sm:text-4xl md:text-5xl xl:text-[4rem] font-semibold tracking-[-0.03em] text-[var(--text-heading)] text-balance mb-5 md:mb-6 leading-[1.02]">
                About Me
              </h1>
              <p className="font-exp-display text-base sm:text-[1.18rem] md:text-[1.35rem] text-[var(--text-heading)]/95 font-medium leading-snug mb-6 max-w-2xl mx-auto border-b border-[#eadfd4] pb-6">
                Data science student. Curious builder. Lifelong learner.
              </p>
              <div className="space-y-4 md:space-y-5 text-[var(--muted)] text-sm sm:text-[0.92rem] md:text-[0.95rem] leading-[1.7] max-w-[38rem] mx-auto text-left md:text-center font-exp-body">
                <p>
                  I am a junior at San Jose State University studying Data Science, driven by a love
                  for turning messy and complex data into systems that truly make sense. I am
                  especially drawn to AI and data engineering, not just for the algorithms, but for
                  the way thoughtful systems can create meaningful impact.
                </p>
                <p>
                  Originally from San Diego, I bring a blend of curiosity and practicality to
                  everything I build. I am always trying to learn something new, whether it is a new
                  framework, a new tool, or a new way to approach a problem. Growth is not optional
                  to me. It is the part I enjoy most.
                </p>
              </div>
            </section>

            {/* Box 2 — journal note card */}
            <section className="w-full rounded-[1.6rem] sm:rounded-[1.85rem] px-6 py-8 sm:px-9 sm:py-9 md:px-10 md:py-10 border-2 border-dashed border-[var(--accent-coral)]/30 shadow-[0_20px_56px_rgba(184,157,133,0.15)] text-center relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,248,240,0.95),rgba(250,241,233,0.93))]">
              <div
                className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 rounded-bl-[100%] bg-gradient-to-bl from-[var(--accent-coral)]/25 to-transparent pointer-events-none"
                aria-hidden
              />
              <div
                className="absolute inset-y-0 left-0 w-full bg-[repeating-linear-gradient(180deg,transparent_0,transparent_33px,rgba(232,217,203,0.55)_33px,rgba(232,217,203,0.55)_34px)] opacity-65"
                aria-hidden
              />
              <div
                className="absolute left-6 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[var(--accent-coral)] via-[var(--accent-pink)] to-[var(--accent-coral)]/30 opacity-90 hidden sm:block"
                aria-hidden
              />
              <div className="relative sm:pl-4">
                <h2 className="font-exp-display text-[1.7rem] sm:text-[2.1rem] md:text-[2.3rem] font-semibold tracking-[-0.02em] text-[var(--text-heading)] mb-6 md:mb-7">
                  Outside the Algorithm
                </h2>
                <div className="space-y-4 md:space-y-5 text-[var(--muted)] text-sm sm:text-[0.92rem] md:text-[0.95rem] leading-[1.7] max-w-[37rem] mx-auto text-left md:text-center font-exp-body">
                  <p>
                    When I am not working with data, I am usually outside exploring somewhere new or
                    chasing a small adventure. I enjoy trying things I have never done before, from
                    new places to new hobbies and new challenges. It keeps life interesting and keeps
                    me learning.
                  </p>
                  <p>
                    You will also find me experimenting in the kitchen—both the successes and the
                    failures—staying active to reset my mind, or spending time with my dog, who
                    reminds me daily that not everything needs to be optimized.
                  </p>
                  <p className="font-exp-display text-[var(--text-heading)] font-medium text-base sm:text-lg md:text-[1.08rem] italic border-t border-[#eadfd4] mt-6 pt-6 max-w-xl mx-auto">
                    Curiosity fuels my work. Balance sustains it.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Mobile: collage below the text blocks */}
        <div className="lg:hidden max-w-lg mx-auto mt-8">
          <AboutImages showDesktop={false} />
        </div>
      </div>
    </main>
  );
}
