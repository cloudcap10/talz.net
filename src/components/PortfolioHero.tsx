'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon } from '@hugeicons/core-free-icons';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { PROJECTS } from '@/lib/projects';

function TopologySVG() {
  return (
    <svg className="topology-bg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <circle cx="200" cy="180" r="24" fill="none" stroke="var(--accent)" strokeWidth="1" />
      <circle cx="500" cy="100" r="16" fill="none" stroke="var(--text-muted)" strokeWidth="1" />
      <circle cx="800" cy="200" r="20" fill="none" stroke="var(--accent)" strokeWidth="1" />
      <circle cx="350" cy="350" r="12" fill="none" stroke="var(--text-muted)" strokeWidth="1" />
      <circle cx="700" cy="400" r="18" fill="none" stroke="var(--blue)" strokeWidth="1" />
      <circle cx="900" cy="100" r="10" fill="none" stroke="var(--text-muted)" strokeWidth="1" />
      <circle cx="100" cy="300" r="8" fill="none" stroke="var(--text-muted)" strokeWidth="1" />
      <circle cx="1050" cy="300" r="14" fill="none" stroke="var(--green)" strokeWidth="1" />
      <circle cx="600" cy="250" r="22" fill="none" stroke="var(--accent)" strokeWidth="1" />

      <line x1="200" y1="180" x2="500" y2="100" stroke="var(--border)" strokeWidth="1" />
      <line x1="500" y1="100" x2="800" y2="200" stroke="var(--border)" strokeWidth="1" />
      <line x1="800" y1="200" x2="700" y2="400" stroke="var(--border)" strokeWidth="1" />
      <line x1="700" y1="400" x2="350" y2="350" stroke="var(--border)" strokeWidth="1" />
      <line x1="350" y1="350" x2="200" y2="180" stroke="var(--border)" strokeWidth="1" />
      <line x1="500" y1="100" x2="900" y2="100" stroke="var(--border-subtle)" strokeWidth="1" />
      <line x1="900" y1="100" x2="1050" y2="300" stroke="var(--border-subtle)" strokeWidth="1" />
      <line x1="1050" y1="300" x2="700" y2="400" stroke="var(--border-subtle)" strokeWidth="1" />
      <line x1="200" y1="180" x2="100" y2="300" stroke="var(--border-subtle)" strokeWidth="1" />
      <line x1="800" y1="200" x2="600" y2="250" stroke="var(--border-subtle)" strokeWidth="1" />
      <line x1="600" y1="250" x2="350" y2="350" stroke="var(--border-subtle)" strokeWidth="1" />
      <line x1="600" y1="250" x2="700" y2="400" stroke="var(--border-subtle)" strokeWidth="1" />
    </svg>
  );
}

const STATS = [
  { value: '8+', label: 'years in networking' },
  { value: String(PROJECTS.length), label: 'apps shipped' },
  { value: '157', label: 'public repos' },
];

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-24 px-4">
      <div className="absolute inset-0 pointer-events-none bg-grid-subtle" />

      <TopologySVG />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="terminal-frame"
        >
          <div className="terminal-titlebar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-label">bash</span>
          </div>
          <div className="terminal-body">
            <div className="mb-5">
              <span className="font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
                <span style={{ color: 'var(--green)' }}>cloudcap10@talz</span>
                <span style={{ color: 'var(--text-faint)' }}>:</span>
                <span style={{ color: 'var(--blue)' }}>~</span>
                <span style={{ color: 'var(--text-faint)' }}>$ </span>
                <span style={{ color: 'var(--text)' }}>cat profile</span>
                <span className="cursor-blink" />
              </span>
            </div>

            <h1 className="font-mono text-4xl sm:text-6xl font-bold tracking-tight mb-3" style={{ lineHeight: 1.1 }}>
              <span className="gradient-text">JOVEN TALASAN</span>
            </h1>

            <p className="font-mono text-sm font-medium mb-5" style={{ color: 'var(--text-muted)' }}>
              network engineer who ships software
            </p>

            <p className="text-sm mb-8 max-w-xl" style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
              I automate what network engineers do by hand and build the tools that keep
              infrastructure{' '}
              <span className="font-medium" style={{ color: 'var(--text)' }}>
                visible, secure, and under control
              </span>
              .
            </p>

            <div className="flex items-center gap-3 flex-wrap mb-8">
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
                style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
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
                style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
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
                style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--text-faint)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; }}
              >
                github
              </a>
            </div>

            <div className="flex gap-px">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 p-3 text-center"
                  style={{ border: '1px solid var(--border)', background: 'var(--bg)' }}
                >
                  <div className="font-mono text-lg font-bold" style={{ color: 'var(--accent)' }}>
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] leading-tight" style={{ color: 'var(--text-faint)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
