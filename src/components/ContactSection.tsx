'use client';

import { motion } from 'framer-motion';

const CONTACT_RECORDS = [
  { label: 'EMAIL', value: 'cloning@talz.net', href: 'mailto:cloning@talz.net', color: 'bg-brutal-orange' },
  { label: 'LINKEDIN', value: '/in/joven-talasan', href: 'https://www.linkedin.com/in/joven-talasan/', color: 'bg-brutal-blue' },
  { label: 'GITHUB', value: 'cloudcap10', href: 'https://github.com/cloudcap10', color: 'bg-brutal-purple' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex items-center gap-4">
          <span className="brutal-border bg-brutal-orange px-4 py-2 font-bold text-lg">Contact</span>
          <span className="text-sm opacity-60">Let&apos;s connect</span>
        </div>

        <div className="brutal-border bg-white p-8 brutal-shadow-lg">
          <p className="text-base mb-6 max-w-xl" style={{ lineHeight: 1.75 }}>
            Got a project in mind, need help with network automation, or just want to chat about infrastructure?
            Reach out through any of these channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CONTACT_RECORDS.map((record) => (
              <a
                key={record.label}
                href={record.href}
                target={record.href.startsWith('mailto') ? undefined : '_blank'}
                rel={record.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="brutal-border brutal-shadow brutal-hover block p-5 bg-white no-underline"
              >
                <div className={`${record.color} brutal-border-thin inline-block px-2 py-0.5 text-xs font-bold text-white mb-3`}>
                  {record.label}
                </div>
                <div className="font-bold text-base">{record.value}</div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
