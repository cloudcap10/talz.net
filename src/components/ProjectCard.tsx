'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Shield01Icon, TerminalIcon, Clock01Icon, AiBrain01Icon, Route01Icon, Link02Icon } from '@hugeicons/core-free-icons';
import { GitHubIcon } from '@/components/SocialIcons';
import type { Project } from '@/lib/projects';

const ICONS = {
  shield: Shield01Icon,
  terminal: TerminalIcon,
  brain: AiBrain01Icon,
  clock: Clock01Icon,
  route: Route01Icon,
} as const;

interface Props {
  project: Project;
  description: string;
  index: number;
}

export default function ProjectCard({ project, description, index }: Props) {
  const Icon = ICONS[project.iconId];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="h-full"
    >
      <div
        className="card-glow h-full flex flex-col transition-all duration-150"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
      >
        <div className="flex items-center justify-between px-5 pt-4 pb-0">
          <span className="font-mono text-[10px]" style={{ color: 'var(--text-faint)' }}>
            {project.id.toUpperCase()}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="led-dot green" />
            <span className="font-mono text-[9px]" style={{ color: 'var(--text-faint)' }}>ACTIVE</span>
          </div>
        </div>
        <div className="p-5 pb-3">
          <div className="mb-3 flex items-center gap-3">
            <div
              className="w-[30px] h-[30px] flex items-center justify-center"
              style={{ background: project.bgColor, border: `1px solid ${project.borderColor}` }}
            >
              <HugeiconsIcon icon={Icon} size={15} color={project.color} />
            </div>
            <h3 className="font-mono text-sm font-bold" style={{ color: 'var(--text)' }}>
              {project.name}
            </h3>
          </div>
          <p className="font-mono text-[11px] font-medium mb-2" style={{ color: project.color }}>
            {project.tagline}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {description}
          </p>
        </div>

        <div className="px-5 pb-3 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-1.5 py-0.5"
              style={{
                background: project.bgColor,
                color: project.color,
                border: `1px solid ${project.borderColor}`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className="mt-auto px-5 py-3 flex items-center gap-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <a
            href={`https://github.com/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] transition-colors"
            style={{ color: 'var(--text-faint)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-faint)'; }}
          >
            <GitHubIcon size={11} />
            source
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px]"
              style={{ color: project.color }}
            >
              <HugeiconsIcon icon={Link02Icon} size={11} />
              live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
