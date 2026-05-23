import { PROJECTS } from '@/lib/projects';
import { HugeiconsIcon } from '@hugeicons/react';
import { Shield01Icon, TerminalIcon, Clock01Icon, AiBrain01Icon, Route01Icon, Link02Icon, GlobalSearchIcon } from '@hugeicons/core-free-icons';
import { GitHubIcon } from '@/components/SocialIcons';

const ICONS = {
  shield: Shield01Icon,
  terminal: TerminalIcon,
  brain: AiBrain01Icon,
  clock: Clock01Icon,
  route: Route01Icon,
  search: GlobalSearchIcon,
} as const;

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

function PermString({ id }: { id: string }) {
  const perms = ['d', 'r', 'w', 'x', 'r', '-', 'r', '-', '-'];
  return (
    <span className="ls-perm">{perms.join('')}</span>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="ls-tag">{text}</span>
  );
}

export default async function ProjectsSection() {
  const descriptions = await Promise.all(
    PROJECTS.map((p) => fetchDescription(p.repo, p.fallbackDescription))
  );

  return (
    <section id="projects" className="px-4 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="prompt-line">
          <span className="prompt-user">cloudcap10@talz</span>
          <span className="prompt-sep">:</span>
          <span className="prompt-path">~/projects</span>
          <span className="prompt-dollar">$ </span>
          <span>ls -la</span>
          <span className="cursor" />
        </div>

        <div className="ls-table">
          <div className="ls-header">
            <span>permissions</span>
            <span>name</span>
          </div>
          {PROJECTS.map((project, i) => {
            const icon = ICONS[project.iconId];
            return (
              <div key={project.id} className="ls-row">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={icon} size={12} color={project.color} />
                  <PermString id={project.id} />
                </div>
                <div>
                  <span className="ls-name">{project.name}</span>
                  <span className="ls-desc">{descriptions[i]}</span>
                  <div className="ls-tags">
                    {project.stack.slice(0, 3).map((t) => (
                      <Tag key={t} text={t} />
                    ))}
                    {project.stack.length > 3 && (
                      <Tag text={`+${project.stack.length - 3}`} />
                    )}
                  </div>
                  <div className="flex gap-3 mt-0.5">
                    <a
                      href={`https://github.com/${project.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1"
                      style={{ color: 'var(--text-faint)' }}
                    >
                      <GitHubIcon size={10} />
                      <span className="text-[10px]">source</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                        style={{ color: project.color }}
                      >
                        <HugeiconsIcon icon={Link02Icon} size={10} />
                        <span className="text-[10px]">live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
