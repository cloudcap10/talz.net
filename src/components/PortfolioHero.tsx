'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon } from '@hugeicons/core-free-icons';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { PROJECTS } from '@/lib/projects';

const STATS = [
  { value: '8+', label: 'years in networking' },
  { value: String(PROJECTS.length), label: 'apps shipped' },
  { value: '157', label: 'public repos' },
];

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 px-4 bg-grid-subtle">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(204,92,51,1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <span className="font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
            <span style={{ color: 'var(--green)' }}>cloudcap10@talz</span>
            <span style={{ color: 'var(--text-faint)' }}>:</span>
            <span style={{ color: 'var(--blue)' }}>~</span>
            <span style={{ color: 'var(--text-faint)' }}>$ </span>
            <span style={{ color: 'var(--text)' }}>cat profile</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-mono text-4xl sm:text-6xl font-bold tracking-tight mb-4"
          style={{ lineHeight: 1.1 }}
        >
          <span className="gradient-text">JOVEN TALASAN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-sm font-medium mb-6"
          style={{ color: 'var(--text-muted)' }}
        >
          network engineer who ships software
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-full h-px mb-6"
          style={{ background: 'var(--border-subtle)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-base mb-10 max-w-2xl"
          style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}
        >
          I automate what network engineers do by hand and build the tools that keep
          infrastructure{' '}
          <span className="font-medium" style={{ color: 'var(--text)' }}>
            visible, secure, and under control
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex items-center gap-3 flex-wrap mb-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff', border: '1px solid var(--accent-dim)' }}
          >
            <HugeiconsIcon icon={Mail01Icon} size={13} />
            contact
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold transition-colors"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--text-faint)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; }}
          >
            view projects
          </a>
          <a
            href="https://www.linkedin.com/in/joven-talasan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold transition-colors"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--text-faint)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; }}
          >
            linkedin
          </a>
          <a
            href="https://github.com/cloudcap10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold transition-colors"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--text-faint)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; }}
          >
            github
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex gap-px"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 p-3 text-center"
              style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
            >
              <div className="font-mono text-lg font-bold" style={{ color: 'var(--accent)' }}>
                {stat.value}
              </div>
              <div className="font-mono text-[10px] leading-tight" style={{ color: 'var(--text-faint)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
