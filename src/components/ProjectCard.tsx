'use client';

import { motion } from 'framer-motion';
import { Shield, Terminal, Brain, Clock, Route, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/SocialIcons';
import type { Project } from '@/lib/projects';

const ICONS = {
  shield: Shield,
  terminal: Terminal,
  brain: Brain,
  clock: Clock,
  route: Route,
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <div
        className="card-glow h-full rounded-2xl flex flex-col transition-all duration-200"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
      >
        <div className="p-6 pb-4">
          <div className="mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: project.bgColor, border: `1px solid ${project.borderColor}` }}
            >
              <Icon size={22} style={{ color: project.color }} />
            </div>
          </div>
          <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text)' }}>
            {project.name}
          </h3>
          <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
            {project.tagline}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {description}
          </p>
        </div>

        <div className="px-6 pb-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md font-medium"
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
          className="mt-auto px-6 py-4 flex items-center gap-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <a
            href={`https://github.com/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
          >
            <GitHubIcon size={13} />
            Source
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium"
              style={{ color: project.color }}
            >
              <ExternalLink size={13} />
              Live →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
