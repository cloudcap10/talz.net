'use client';

import { motion } from 'framer-motion';
import { Shield, Terminal, Brain, Clock, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/SocialIcons';
import type { ElementType } from 'react';

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: ElementType<{ size?: number; style?: React.CSSProperties }>;
  stack: string[];
  github: string;
  live?: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const PROJECTS: Project[] = [
  {
    id: 'filevanish',
    name: 'FileVanish',
    tagline: 'Zero-knowledge secure file sharing',
    description:
      "AES-256-GCM client-side encryption — the server never sees your files. Built on Cloudflare's global edge with burn-after-reading, password protection, and secure inbound file requests.",
    icon: Shield,
    stack: ['TypeScript', 'React', 'Cloudflare Workers', 'R2', 'D1'],
    github: 'https://github.com/cloudcap10/filevanish',
    live: 'https://filevanish.com',
    color: '#1d8a5c',
    bgColor: 'rgba(29,138,92,0.08)',
    borderColor: 'rgba(29,138,92,0.18)',
  },
  {
    id: 'network-automation',
    name: 'Network Automation Script',
    tagline: 'Multi-vendor network automation',
    description:
      'Config backup and inventory automation for Cisco, Alcatel, and Aruba devices. Includes an IIS web portal for tracking and reporting. Built for network engineers who hate doing things twice.',
    icon: Terminal,
    stack: ['Python 3.10+', 'Cisco IOS', 'Alcatel', 'Aruba', 'IIS'],
    github: 'https://github.com/cloudcap10/Network-Automation-Script',
    live: 'https://netscript.talz.net',
    color: '#2e6ea0',
    bgColor: 'rgba(46,110,160,0.08)',
    borderColor: 'rgba(46,110,160,0.18)',
  },
  {
    id: 'pickmodel',
    name: 'PickModel',
    tagline: 'AI model comparison platform',
    description:
      'Objective side-by-side comparison of AI language models — context windows, pricing, benchmark scores, and capabilities. Data-driven via YAML so it stays current without a rebuild.',
    icon: Brain,
    stack: ['TypeScript', 'Next.js', 'YAML', 'Tailwind CSS'],
    github: 'https://github.com/cloudcap10/pickmodel',
    live: 'https://pickmodel.uk',
    color: '#7c4dbb',
    bgColor: 'rgba(124,77,187,0.08)',
    borderColor: 'rgba(124,77,187,0.18)',
  },
  {
    id: 'supportexpiry',
    name: 'SupportExpiry',
    tagline: 'Hardware & software EOL tracker',
    description:
      'End-of-life tracking platform for network hardware and software. AI-powered research with Grok, automated email alerts via Resend, Google SSO, and a full REST API.',
    icon: Clock,
    stack: ['TypeScript', 'Next.js 15', 'Cloudflare Workers', 'D1', 'Grok AI'],
    github: 'https://github.com/cloudcap10/supportexpiry',
    live: 'https://supportexpiry.com',
    color: '#b87a18',
    bgColor: 'rgba(184,122,24,0.08)',
    borderColor: 'rgba(184,122,24,0.18)',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
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
        {/* Header */}
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
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
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

        {/* Footer links */}
        <div
          className="mt-auto px-6 py-4 flex items-center gap-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <a
            href={project.github}
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--text)' }}>
            Projects
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            A mix of network tooling and web apps — all open source.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
