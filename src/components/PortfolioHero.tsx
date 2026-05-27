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
          <div className="brutal-border bg-white inline-block px-3 py-1 mb-6 brutal-shadow-sm">
            <span className="font-mono text-sm font-bold">Network Engineer · Builder · Automator</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Joven Talasan
            <br />
            <span className="bg-foreground text-brutal-blue px-3 inline-block mt-2">
              cloudcap10
            </span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl text-white">
            I automate what network engineers do by hand and build the tools that keep
            infrastructure <strong>visible, secure, and under control</strong>.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="brutal-border bg-foreground text-brutal-blue px-6 py-3 font-bold text-lg brutal-shadow brutal-hover inline-flex items-center gap-2"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className={`brutal-border ${stat.color} p-6 brutal-shadow text-center bg-white`}
              >
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-sm font-medium mt-1 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
