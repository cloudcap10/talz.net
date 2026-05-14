'use client';

import { motion } from 'framer-motion';

const CONTACT_RECORDS = [
  { label: 'EMAIL', value: 'cloning@talz.net', href: 'mailto:cloning@talz.net' },
  { label: 'LINKEDIN', value: '/in/joven-talasan', href: 'https://www.linkedin.com/in/joven-talasan/' },
  { label: 'GITHUB', value: 'cloudcap10', href: 'https://github.com/cloudcap10' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <div className="prompt-line">
            <span className="prompt-user">cloudcap10@talz</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-dollar">$ </span>
            <span>dig contact talz.net</span>
            <span className="cursor" />
          </div>

          <div className="dig-table" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
            <div className="p-5">
              <div className="font-mono text-[11px] mb-4" style={{ color: 'var(--text-faint)' }}>
                ; &lt;&lt;&gt;&gt; DiG 9.18 &lt;&lt;&gt;&gt; contact talz.net<br />
                ;; ANSWER SECTION:
              </div>
              {CONTACT_RECORDS.map((record) => (
                <a
                  key={record.label}
                  href={record.href}
                  target={record.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={record.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="dig-row items-center no-underline transition-colors"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-card-hover)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ''; }}
                >
                  <span className="dig-label">{record.label}</span>
                  <span className="dig-value" style={{ color: 'var(--accent)' }}>{record.value}</span>
                </a>
              ))}
              <div className="font-mono text-[11px] mt-4" style={{ color: 'var(--text-faint)' }}>
                ;; Query time: 4 msec<br />
                ;; WHEN: now
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
