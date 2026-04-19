import Link from "next/link";
import { AboutImages } from "./AboutImages";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative z-[2] overflow-x-hidden">
      <div className="relative z-10 px-5 sm:px-6 pt-24 pb-16 lg:pb-24">
        <div className="max-w-[1600px] mx-auto mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-peach)] hover:underline transition-colors"
          >
            ← Back to portfolio
          </Link>
        </div>

        {/* Desktop: photos absolutely surround centered column */}
        <div className="max-w-[1600px] mx-auto relative min-h-[min(110vh,1200px)] lg:min-h-[1020px]">
          <AboutImages surround showMobile={false} />

          <div className="relative z-10 w-full max-w-[min(42rem,calc(100%-1.5rem))] xl:max-w-[min(48rem,calc(100%-2rem))] mx-auto px-3 sm:px-4 lg:px-5 lg:pt-2 lg:pb-16">
            {/* Single journal card: About Me + Outside the Algorithm */}
            <section className="w-full rounded-[1.85rem] sm:rounded-[2rem] px-4 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7 border border-[#e8d9cb] shadow-[0_20px_60px_rgba(184,157,133,0.16)] relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,250,245,0.96),rgba(251,244,236,0.93))] backdrop-blur-sm">
              <div
                className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0,transparent_28px,rgba(232,217,203,0.38)_28px,rgba(232,217,203,0.38)_29px)] opacity-45"
                aria-hidden
              />
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
              <div
                className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 rounded-tl-[100%] bg-gradient-to-tl from-[var(--accent-coral)]/18 to-transparent pointer-events-none"
                aria-hidden
              />
              <div
                className="absolute left-4 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[var(--accent-coral)] via-[var(--accent-pink)] to-[var(--accent-coral)]/25 opacity-85 hidden sm:block"
                aria-hidden
              />

              <div className="relative z-[1] sm:pl-4">
                <p className="font-exp-display text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-[var(--accent-pink)] mb-2 text-center">
                  About
                </p>
                <h1 className="font-exp-display text-3xl sm:text-4xl md:text-[2.35rem] xl:text-[2.65rem] font-semibold tracking-[-0.03em] text-[var(--text-heading)] text-balance mb-3 md:mb-3.5 leading-[1.05] text-center">
                  About Me
                </h1>
                <p className="font-exp-display text-base sm:text-[1.12rem] md:text-[1.2rem] text-[var(--text-heading)]/95 font-medium leading-snug mb-4 mx-auto w-full max-w-none border-b border-[#eadfd4] pb-4 text-center">
                  Data science student. Curious builder. Lifelong learner.
                </p>
                <div className="space-y-3 md:space-y-3.5 text-[var(--muted)] text-sm sm:text-[0.92rem] md:text-[0.95rem] leading-[1.55] w-full max-w-none mx-auto text-left font-exp-body">
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

                <div className="mt-6 pt-6 border-t border-[var(--accent-coral)]/20">
                  <p className="font-exp-display text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-[var(--accent-pink)] mb-2 text-center">
                    Life
                  </p>
                  <h2 className="font-exp-display text-[1.55rem] sm:text-[1.95rem] md:text-[2.1rem] font-semibold tracking-[-0.02em] text-[var(--text-heading)] text-balance mb-3 md:mb-3.5 leading-[1.05] text-center">
                    Outside the Algorithm
                  </h2>
                  <p className="font-exp-display text-base sm:text-[1.12rem] md:text-[1.2rem] text-[var(--text-heading)]/95 font-medium leading-snug mb-4 mx-auto w-full max-w-none border-b border-[#eadfd4] pb-4 text-center">
                    Exploring, cooking, and staying curious beyond the screen.
                  </p>
                  <div className="space-y-3 md:space-y-3.5 text-[var(--muted)] text-sm sm:text-[0.92rem] md:text-[0.95rem] leading-[1.55] w-full max-w-none mx-auto text-left font-exp-body">
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
                  </div>
                  <p className="font-exp-display text-[var(--text-heading)] font-medium text-base sm:text-lg md:text-[1.08rem] italic border-t border-[#eadfd4] mt-4 pt-4 w-full max-w-none mx-auto text-center">
                    Curiosity fuels my work. Balance sustains it.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Mobile: collage below the text blocks */}
        <div className="lg:hidden max-w-md mx-auto mt-8">
          <AboutImages showDesktop={false} />
        </div>
      </div>
    </main>
  );
}
