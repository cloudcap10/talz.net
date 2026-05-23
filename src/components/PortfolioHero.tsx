'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon } from '@hugeicons/core-free-icons';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { PROJECTS } from '@/lib/projects';

interface Stat {
  value: string;
  label: string;
}

export default function PortfolioHero() {
  const [repoCount, setRepoCount] = useState<string>('...');

  useEffect(() => {
    fetch('https://api.github.com/users/cloudcap10')
      .then((res) => res.json())
      .then((data) => setRepoCount(String(data.public_repos || '?')))
      .catch(() => setRepoCount('?'));
  }, []);

  const stats: Stat[] = [
    { value: '8+', label: 'years in networking' },
    { value: String(PROJECTS.length), label: 'apps shipped' },
    { value: repoCount, label: 'public repos' },
  ];
  return (
    <section className="relative overflow-hidden pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
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
            <span className="terminal-label">zsh</span>
          </div>
          <div className="terminal-body">
            <div className="prompt-line">
              <span className="prompt-user">cloudcap10@talz</span>
              <span className="prompt-sep">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-dollar">$ </span>
              <span>cat profile</span>
              <span className="cursor" />
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
              {stats.map((stat) => (
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
