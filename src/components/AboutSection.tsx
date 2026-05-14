'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import { CellularNetworkIcon, CodeIcon, Shield01Icon, CpuIcon } from '@hugeicons/core-free-icons';

interface SkillGroup {
  category: string;
  icon: IconSvgElement;
  color: string;
  bgColor: string;
  borderColor: string;
  items: string[];
}

const SKILLS: SkillGroup[] = [
  {
    category: 'Network Engineering',
    icon: CellularNetworkIcon,
    color: '#2e6ea0',
    bgColor: 'rgba(46,110,160,0.08)',
    borderColor: 'rgba(46,110,160,0.18)',
    items: ['Cisco IOS', 'Alcatel-Lucent', 'Aruba', 'BGP / OSPF', 'Network Automation', 'Python Netmiko'],
  },
  {
    category: 'Development',
    icon: CodeIcon,
    color: '#7c4dbb',
    bgColor: 'rgba(124,77,187,0.08)',
    borderColor: 'rgba(124,77,187,0.18)',
    items: ['TypeScript', 'Python', 'Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
  },
  {
    category: 'Infrastructure',
    icon: CpuIcon,
    color: '#8a5c10',
    bgColor: 'rgba(138,92,16,0.08)',
    borderColor: 'rgba(138,92,16,0.18)',
    items: ['Cloudflare Workers', 'D1 / R2 / KV', 'Vercel', 'Docker', 'Linux'],
  },
  {
    category: 'Security',
    icon: Shield01Icon,
    color: '#1d8a5c',
    bgColor: 'rgba(29,138,92,0.08)',
    borderColor: 'rgba(29,138,92,0.18)',
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
          className="mb-12"
        >
          <h2 className="font-mono text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>
            ## About
          </h2>
          <p
            className="text-sm"
            style={{ color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '36rem' }}
          >
            Network engineer by trade, builder by habit. I automate the repetitive parts of
            network operations and build tools that help teams stay on top of their
            infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILLS.map((skill, i) => {
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
                className="p-5"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-[24px] h-[24px] flex items-center justify-center"
                    style={{ background: skill.bgColor, border: `1px solid ${skill.borderColor}` }}
                  >
                    <HugeiconsIcon icon={skill.icon} size={12} color={skill.color} />
                  </div>
                  <h3 className="font-mono text-xs font-bold" style={{ color: 'var(--text)' }}>
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[10px] px-1.5 py-0.5"
                      style={{
                        background: skill.bgColor,
                        color: skill.color,
                        border: `1px solid ${skill.borderColor}`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
