import { PROJECTS } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

async function fetchDescription(repo: string, fallback: string): Promise<string> {
  try {
    const headers: HeadersInit = { Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });
    if (!res.ok) return fallback;
    const data = await res.json() as { description?: string | null };
    return data.description?.trim() || fallback;
  } catch {
    return fallback;
  }
}

export { PROJECTS };

export default async function ProjectsSection() {
  const descriptions = await Promise.all(
    PROJECTS.map((p) => fetchDescription(p.repo, p.fallbackDescription))
  );

  return (
    <section id="projects" className="px-4 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--text)' }}>
            Projects
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            A mix of network tooling and web apps — all open source.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              description={descriptions[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
