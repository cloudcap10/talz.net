'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { LinkedInIcon } from '@/components/SocialIcons';

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-28">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl p-10 text-center"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          }}
        >
          {/* Available dot */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              borderColor: 'rgba(29,138,92,0.3)',
              background: 'rgba(29,138,92,0.06)',
              color: '#1d8a5c',
              border: '1px solid rgba(29,138,92,0.25)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#1d8a5c', boxShadow: '0 0 0 3px rgba(29,138,92,0.2)' }}
            />
            Available for new roles &amp; projects
          </div>

          <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--text)' }}>
            Let&apos;s work together
          </h2>
          <p className="text-base mb-2" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Looking for a network engineer who can also ship production software?
          </p>
          <p className="text-sm mb-8 flex items-center justify-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            <MapPin size={13} />
            Open to remote and on-site roles
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="mailto:cloning@talz.net"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              <Mail size={15} />
              cloning@talz.net
            </a>
            <a
              href="https://www.linkedin.com/in/joven-talasan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
