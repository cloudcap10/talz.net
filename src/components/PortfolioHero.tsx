'use client';

import { motion } from 'framer-motion';
import { Network, ArrowDown } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 px-4">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse at center, rgba(124,106,255,0.4) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-100px] left-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse at center, rgba(96,165,250,0.5) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse at center, rgba(52,211,153,0.5) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
          style={{
            borderColor: 'var(--border)',
            background: 'var(--bg-card)',
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
          }}
        >
          <Network size={14} style={{ color: 'var(--accent)' }} />
          <span>Network Engineer · Builder</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold tracking-tight mb-6"
          style={{ lineHeight: 1.1 }}
        >
          <span className="gradient-text">Joven</span>
          <span style={{ color: 'var(--text)' }}> Talasan</span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-10 max-w-xl mx-auto"
          style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}
        >
          Interested in how modern tools of technology can help people and organizations
          do things{' '}
          <span style={{ color: 'var(--text)' }}>better and more secure</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            View Projects
            <ArrowDown size={15} />
          </a>
          <a
            href="https://github.com/cloudcap10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joven-talasan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
        </motion.div>

        {/* Handle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          @cloudcap10 · talz.net
        </motion.p>
      </div>
    </section>
  );
}
