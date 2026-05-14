'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon } from '@hugeicons/core-free-icons';
import { LinkedInIcon } from '@/components/SocialIcons';

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-28">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="font-mono text-2xl font-bold mb-8" style={{ color: 'var(--text)' }}>
            ## Contact
          </h2>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:cloning@talz.net"
              className="inline-flex items-center gap-3 font-mono text-sm transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
            >
              <span style={{ color: 'var(--green)' }}>mail</span>
              <span style={{ color: 'var(--text-faint)' }}> cloning@talz.net</span>
            </a>
            <a
              href="https://www.linkedin.com/in/joven-talasan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-sm transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
            >
              <span style={{ color: 'var(--blue)' }}>linkedin</span>
              <span style={{ color: 'var(--text-faint)' }}> /in/joven-talasan</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
