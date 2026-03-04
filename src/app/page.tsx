import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Certifications from "@/components/Certifications";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Certifications />
        <ResumeCTA />
        <Contact />
      </main>
    </>
  );
}
