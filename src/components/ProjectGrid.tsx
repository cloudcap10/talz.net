'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Shield01Icon, TerminalIcon, Clock01Icon, AiBrain01Icon, Route01Icon, GlobalSearchIcon } from '@hugeicons/core-free-icons';
import { GitHubIcon } from '@/components/SocialIcons';

const ICONS = {
  shield: Shield01Icon,
  terminal: TerminalIcon,
  brain: AiBrain01Icon,
  clock: Clock01Icon,
  route: Route01Icon,
  search: GlobalSearchIcon,
} as const;

const COLOR_MAP: Record<string, string> = {
  '#1d8a5c': 'bg-brutal-green',
  '#2e6ea0': 'bg-brutal-blue',
  '#7c4dbb': 'bg-brutal-purple',
  '#b45309': 'bg-brutal-orange',
  '#8a5c10': 'bg-brutal-yellow',
  '#0369a1': 'bg-brutal-cyan',
  '#0d9488': 'bg-brutal-green',
};

interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  repo: string;
  iconId: 'shield' | 'terminal' | 'brain' | 'clock' | 'route' | 'search';
  stack: string[];
  live?: string;
  color: string;
  description: string;
}

export default function ProjectGrid({ projects }: { projects: ProjectData[] }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex items-center gap-4">
          <span className="brutal-border bg-brutal-green px-4 py-2 font-bold text-lg">Projects</span>
          <span className="text-sm opacity-60">Things I&apos;ve built and shipped</span>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => {
          const icon = ICONS[project.iconId];
          const bgColor = COLOR_MAP[project.color] || 'bg-brutal-blue';
          return (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <div className="brutal-border bg-white brutal-shadow brutal-hover h-full flex flex-col">
                <div className={`${bgColor} brutal-border-thin border-t-0 border-x-0 px-5 py-3 flex items-center justify-between`}>
                  <HugeiconsIcon icon={icon} size={18} color="#1a1a1a" />
                  <span className="font-mono text-xs font-bold uppercase">{project.tagline}</span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                  <p className="text-sm opacity-75 flex-1 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 4).map((t) => (
                      <span key={t} className="brutal-border-thin bg-gray-100 px-2 py-0.5 text-xs font-bold">
                        {t}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="brutal-border-thin bg-gray-100 px-2 py-0.5 text-xs font-bold">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={`https://github.com/${project.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-border-thin bg-foreground text-white px-3 py-1.5 text-xs font-bold brutal-shadow-sm brutal-hover inline-flex items-center gap-1.5"
                    >
                      <GitHubIcon size={12} />
                      Source
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`brutal-border-thin ${bgColor} px-3 py-1.5 text-xs font-bold brutal-shadow-sm brutal-hover inline-block`}
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
