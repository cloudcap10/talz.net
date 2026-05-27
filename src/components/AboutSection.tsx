'use client';

import { motion } from 'framer-motion';

const SKILLS = [
  {
    category: 'Network Engineering',
    color: 'bg-brutal-blue/20',
    borderColor: 'border-brutal-blue',
    items: ['Cisco IOS', 'Alcatel-Lucent', 'Aruba', 'BGP / OSPF', 'Network Automation', 'Python Netmiko'],
  },
  {
    category: 'Development',
    color: 'bg-brutal-purple/20',
    borderColor: 'border-brutal-purple',
    items: ['TypeScript', 'Python', 'Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
  },
  {
    category: 'Infrastructure',
    color: 'bg-brutal-orange/20',
    borderColor: 'border-brutal-orange',
    items: ['Cloudflare Workers', 'D1 / R2 / KV', 'Vercel', 'Docker', 'Linux'],
  },
  {
    category: 'Security',
    color: 'bg-brutal-green/20',
    borderColor: 'border-brutal-green',
    items: ['Zero-knowledge encryption', 'AES-256-GCM', 'JWT / OAuth2', 'Network hardening', 'EOL / CVE tracking'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex items-center gap-4">
          <span className="brutal-border bg-brutal-purple px-4 py-2 font-bold text-lg">About</span>
          <span className="text-sm opacity-60">Skills and expertise</span>
        </div>

        <div className="brutal-border bg-white p-8 brutal-shadow-lg mb-8">
          <p className="text-base leading-relaxed max-w-3xl">
            Network engineer by trade, builder by habit. I automate the repetitive parts of
            network operations and build tools that help teams stay on top of their
            infrastructure.             From <strong>Cisco IOS configs</strong> to <strong>Cloudflare Workers</strong>,
            I connect traditional networking with modern software.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.category}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className={`brutal-border ${skill.color} p-6 brutal-shadow brutal-hover`}
          >
            <h3 className="font-bold text-lg mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="brutal-border-thin bg-white px-3 py-1 text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
