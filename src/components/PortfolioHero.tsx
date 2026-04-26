'use client';

import { motion } from 'framer-motion';
import { Network, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { PROJECTS } from '@/components/ProjectsSection';

const STATS = [
  { value: '8+', label: 'Years in networking' },
  { value: String(PROJECTS.length), label: 'Apps shipped' },
  { value: '157', label: 'Public repos' },
];

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 px-4">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(204,92,51,1) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-100px] left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(46,110,160,1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight mb-5"
          style={{ lineHeight: 1.05 }}
        >
          <span className="gradient-text">Joven</span>
          <span style={{ color: 'var(--text)' }}> Talasan</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base font-medium mb-4 flex items-center justify-center gap-2"
          style={{ color: 'var(--text-muted)' }}
        >
          <Network size={15} style={{ color: 'var(--accent)' }} />
          Network Engineer who ships software
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-10 max-w-xl mx-auto"
          style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}
        >
          I automate what network engineers do by hand and build the tools that keep
          infrastructure <span style={{ color: 'var(--text)', fontWeight: 500 }}>visible, secure, and under control</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-3 flex-wrap mb-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            <Mail size={15} />
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-colors"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
          >
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/joven-talasan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-colors"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
          >
            <LinkedInIcon size={15} />
            LinkedIn
          </a>
          <a
            href="https://github.com/cloudcap10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-colors"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
          >
            <GitHubIcon size={15} />
            GitHub
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="grid grid-cols-3 gap-4 max-w-sm mx-auto"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4 text-center"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <div className="text-2xl font-bold mb-0.5" style={{ color: 'var(--accent)' }}>
                {stat.value}
              </div>
              <div className="text-xs leading-tight" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
