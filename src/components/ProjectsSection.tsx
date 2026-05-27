import { PROJECTS } from '@/lib/projects';
import ProjectGrid from '@/components/ProjectGrid';

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

  const projects = PROJECTS.map((p, i) => ({
    id: p.id,
    name: p.name,
    tagline: p.tagline,
    repo: p.repo,
    iconId: p.iconId,
    stack: p.stack,
    live: p.live,
    color: p.color,
    description: descriptions[i],
  }));

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ProjectGrid projects={projects} />
    </section>
  );
}
