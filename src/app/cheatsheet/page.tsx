import type { Metadata } from 'next';
import Link from 'next/link';
import { CHEATSHEETS } from '@/lib/cheatsheets';

export const metadata: Metadata = {
  title: 'Cheatsheets — Joven Talasan',
  description: 'Networking, security, cloud, and infrastructure reference guides — EIGRP, OSPF, BGP, FortiGate, data center, and cloud certifications.',
  keywords: ['cheatsheet', 'networking', 'EIGRP', 'OSPF', 'BGP', 'FortiGate', 'CCNA', 'CCNP', 'network engineering'],
  alternates: { canonical: 'https://www.talz.net/cheatsheet' },
  openGraph: {
    title: 'Cheatsheets — Joven Talasan',
    description: 'Networking, security, cloud, and infrastructure reference guides.',
    url: 'https://www.talz.net/cheatsheet',
    type: 'website',
  },
};

export default function CheatsheetIndex() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/" className="brutal-border bg-white inline-block px-4 py-2 font-bold text-sm brutal-shadow-sm brutal-hover mb-8">
        ← back to home
      </Link>

      <div className="mb-8 flex items-center gap-4">
        <span className="brutal-border bg-brutal-cyan px-4 py-2 font-bold text-lg">Cheatsheets</span>
        <span className="text-sm opacity-60">Networking study guides</span>
      </div>

      <p className="text-sm mb-10 max-w-xl text-foreground/70 leading-relaxed">
        Networking, security, cloud, and infrastructure reference guides — formatted for quick study.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CHEATSHEETS.map((cs) => (
          <Link key={cs.slug} href={`/cheatsheet/${cs.slug}`}>
            <div className="brutal-border bg-white brutal-shadow brutal-hover h-full flex flex-col">
              <div className={`${cs.color} brutal-border-thin border-t-0 border-x-0 px-5 py-3 flex items-center justify-between`}>
                <span className="font-bold text-sm" style={{ color: '#ffffff' }}>{cs.title}</span>
                <span className="font-mono text-xs font-bold uppercase" style={{ color: '#ffffff' }}>{cs.subtitle}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm opacity-75 flex-1 mb-4">{cs.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="brutal-border-thin bg-gray-100 px-2 py-0.5 text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
