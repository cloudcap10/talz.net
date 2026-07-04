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
  color: string;
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
    { value: '8+', label: 'Years in Networking', color: 'bg-brutal-blue/20' },
    { value: String(PROJECTS.length), label: 'Apps Shipped', color: 'bg-brutal-green/20' },
    { value: repoCount, label: 'Public Repos', color: 'bg-brutal-purple/20' },
  ];

  return (
    <section className="brutal-border-thin border-t-0 border-x-0 bg-brutal-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="brutal-border bg-white inline-block px-3 py-1 brutal-shadow-sm">
              <span className="font-mono text-sm font-bold">Network Engineer · Builder · Automator</span>
            </div>
            <div className="brutal-border bg-brutal-green inline-flex items-center gap-2 px-3 py-1 brutal-shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-sm font-bold text-white">Open to work · Singapore</span>
            </div>
          </div>

          <div className="brutal-border bg-foreground brutal-shadow-lg mb-8 max-w-3xl">
            <div className="flex items-center px-4 py-2.5 border-b-3 border-foreground gap-2" style={{ borderBottom: '3px solid #1a1a1a', background: '#2a2a2a' }}>
              <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
              <span className="ml-auto font-mono text-xs text-gray-400">zsh</span>
            </div>
            <div className="p-6 md:p-8">
              <div className="font-mono text-sm text-gray-400 mb-4">
                <span className="text-brutal-green">cloudcap10@talz</span>
                <span className="text-gray-500">:</span>
                <span className="text-brutal-cyan">~</span>
                <span className="text-gray-500">$ </span>
                <span className="text-white">cat profile</span>
                <span className="inline-block w-2 h-4 bg-main ml-1 animate-pulse" />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3" style={{ color: '#ffffff' }}>
                JOVEN TALASAN
              </h1>

              <p className="font-mono text-sm font-medium mb-5" style={{ color: '#9ca3af' }}>
                network engineer who ships software
              </p>

              <p className="text-sm mb-6 max-w-xl leading-relaxed" style={{ color: '#d1d5db' }}>
                I automate what network engineers do by hand and build the tools that keep
                infrastructure <strong style={{ color: '#ffffff' }}>visible, secure, and under control</strong>.
              </p>

              <div className="font-mono text-sm text-gray-400 mb-6">
                <span className="text-brutal-green">cloudcap10@talz</span>
                <span className="text-gray-500">:</span>
                <span className="text-brutal-cyan">~</span>
                <span className="text-gray-500">$ </span>
                <span className="text-white">ls stats/</span>
              </div>

              <div className="flex gap-3 flex-wrap">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="brutal-border bg-white px-4 py-3 text-center brutal-shadow-sm"
                  >
                    <div className="font-mono text-xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="brutal-border bg-main text-main-foreground px-6 py-3 font-bold text-lg brutal-shadow brutal-hover inline-flex items-center gap-2"
            >
              <HugeiconsIcon icon={Mail01Icon} size={18} />
              Contact Me
            </a>
            <a
              href="#projects"
              className="brutal-border bg-white px-6 py-3 font-bold text-lg brutal-shadow brutal-hover inline-block"
            >
              View Projects →
            </a>
            <a
              href="https://github.com/cloudcap10"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border bg-white px-6 py-3 font-bold text-lg brutal-shadow brutal-hover inline-flex items-center gap-2"
            >
              <GitHubIcon size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joven-talasan/"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border bg-white px-6 py-3 font-bold text-lg brutal-shadow brutal-hover inline-flex items-center gap-2"
            >
              <LinkedInIcon size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
