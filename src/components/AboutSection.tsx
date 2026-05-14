'use client';

import { motion } from 'framer-motion';

const SKILLS = [
  {
    category: 'network_engineering',
    color: '#2e6ea0',
    items: ['Cisco IOS', 'Alcatel-Lucent', 'Aruba', 'BGP / OSPF', 'Network Automation', 'Python Netmiko'],
  },
  {
    category: 'development',
    color: '#7c4dbb',
    items: ['TypeScript', 'Python', 'Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
  },
  {
    category: 'infrastructure',
    color: '#8a5c10',
    items: ['Cloudflare Workers', 'D1 / R2 / KV', 'Vercel', 'Docker', 'Linux'],
  },
  {
    category: 'security',
    color: '#1d8a5c',
    items: ['Zero-knowledge encryption', 'AES-256-GCM', 'JWT / OAuth2', 'Network hardening', 'EOL / CVE tracking'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-4 pb-24">
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
            <span>cat skills.yaml</span>
            <span className="cursor" />
          </div>

          <p className="text-sm mb-6 max-w-xl" style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
            Network engineer by trade, builder by habit. I automate the repetitive parts of
            network operations and build tools that help teams stay on top of their
            infrastructure.
          </p>

          <div className="yaml-block" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
            <div className="p-5">
              <div className="yaml-comment"># skills inventory — cloudcap10</div>
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="yaml-block"
                >
                  <div style={{ marginTop: '6px' }}>
                    <span className="yaml-key">{skill.category}:</span>
                  </div>
                  <div className="indent">
                    {skill.items.map((item) => (
                      <div key={item}>
                        <span className="yaml-list-item">-</span>
                        <span className="yaml-value" style={{ marginLeft: '4px' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
