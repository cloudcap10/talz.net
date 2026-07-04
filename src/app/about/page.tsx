import type { Metadata } from 'next';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon } from '@hugeicons/core-free-icons';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';

const SITE_URL = 'https://www.talz.net';

export const metadata: Metadata = {
  title: 'About — Joven Talasan',
  description:
    'Joven Talasan (cloudcap10) — network engineer in Singapore with 8+ years across Cisco, Alcatel-Lucent, and Aruba. Builds automation and security tools for infrastructure teams.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About — Joven Talasan',
    description:
      'Network engineer in Singapore building open-source tools for automation, security, and infrastructure.',
    url: `${SITE_URL}/about`,
    type: 'profile',
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630 }],
  },
};

const FOCUS_AREAS = [
  {
    title: 'Network engineering',
    color: 'bg-brutal-blue/15',
    body: 'Eight-plus years running enterprise networks — Cisco IOS, Alcatel-Lucent, and Aruba. Routing, switching, and the BGP/OSPF details that keep traffic where it belongs.',
  },
  {
    title: 'Automation',
    color: 'bg-brutal-green/15',
    body: 'Python and Netmiko turn hours of manual CLI work into scheduled jobs: config backups, inventory tracking, and compliance checks across multi-vendor fleets.',
  },
  {
    title: 'Building software',
    color: 'bg-brutal-purple/15',
    body: 'TypeScript, Next.js, and Cloudflare Workers. Shipped apps range from zero-knowledge file sharing to a Traefik label generator — all open source on GitHub.',
  },
  {
    title: 'Security',
    color: 'bg-brutal-orange/15',
    body: 'Client-side AES-256-GCM encryption, network hardening, and EOL/CVE tracking. Infrastructure should be visible, secure, and under control.',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8 flex items-center gap-4">
        <span className="brutal-border bg-brutal-purple px-4 py-2 font-bold text-lg">About</span>
        <span className="text-sm opacity-60">Who I am and what I do</span>
      </div>

      <div className="brutal-border bg-white p-8 brutal-shadow-lg mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Joven Talasan</h1>
        <p className="font-mono text-sm text-brutal-blue font-semibold mb-5">
          network engineer who ships software · Singapore
        </p>
        <p className="text-base leading-relaxed max-w-2xl mb-4">
          I spent 8+ years keeping enterprise networks running — and got tired of doing the
          same CLI work by hand every week. So I learned to automate it. That habit grew
          into building full tools: config backup systems, encrypted file sharing, network
          calculators, and GitOps templates that other engineers use.
        </p>
        <p className="text-base leading-relaxed max-w-2xl">
          Today I work where traditional networking meets modern software: infrastructure
          you can see, scripts that do the boring parts, and security that is built in
          rather than bolted on.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {FOCUS_AREAS.map((area) => (
          <div key={area.title} className={`brutal-border ${area.color} p-6 brutal-shadow`}>
            <h2 className="font-bold text-lg mb-2">{area.title}</h2>
            <p className="text-sm leading-relaxed">{area.body}</p>
          </div>
        ))}
      </div>

      <div className="brutal-border bg-main p-8 brutal-shadow-lg">
        <h2 className="font-bold text-xl mb-2">Working with me</h2>
        <p className="text-sm leading-relaxed max-w-2xl mb-6">
          Network automation, NetDevOps, and infrastructure tooling are what I do best.
          The fastest way to reach me is email; my code is all public on GitHub if you
          want to see how I work first.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:cloning@talz.net"
            className="brutal-border bg-foreground text-white px-5 py-2.5 font-bold brutal-shadow brutal-hover inline-flex items-center gap-2"
          >
            <HugeiconsIcon icon={Mail01Icon} size={16} />
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/joven-talasan/"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-border bg-white px-5 py-2.5 font-bold brutal-shadow brutal-hover inline-flex items-center gap-2"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/cloudcap10"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-border bg-white px-5 py-2.5 font-bold brutal-shadow brutal-hover inline-flex items-center gap-2"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <Link
            href="/#projects"
            className="brutal-border bg-white px-5 py-2.5 font-bold brutal-shadow brutal-hover inline-block"
          >
            See projects →
          </Link>
        </div>
      </div>
    </div>
  );
}
