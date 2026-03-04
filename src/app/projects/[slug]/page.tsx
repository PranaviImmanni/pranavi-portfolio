import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/data/projects";
import Background from "@/components/Background";
import ProjectResults from "./ProjectResults";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Background />
      <div className="relative min-h-screen px-6 pt-24 pb-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-accent text-sm font-medium mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>
          <div className={`h-1.5 w-24 rounded-lg bg-gradient-to-r ${project.gradient} mb-6`} />
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-heading)] mb-2 tracking-tight">
            {project.title}
          </h1>
          <p className="text-[var(--muted)] text-lg mb-6">{project.tagline}</p>

          {project.imageUrl && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden glass mb-8">
              <Image
                src={project.imageUrl}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          )}

          <div className="glass rounded-2xl p-6 sm:p-8 space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Problem
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Approach
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">{project.approach}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="chip px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Results
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                <ProjectResults text={project.results} />
              </p>
            </div>
            {project.githubUrl && (
              <div className="pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-[var(--text)] border border-black/10 hover:border-accent/40 hover:text-accent transition-all font-medium text-sm glow-hover"
                >
                  View on GitHub →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
