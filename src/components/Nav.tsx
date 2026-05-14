'use client';

import Link from 'next/link';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon } from '@hugeicons/core-free-icons';

const NAV_LINKS = [
  { label: '~/projects', href: '/#projects' },
  { label: '~/about', href: '/#about' },
];

interface SocialLink {
  Icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { Icon: GitHubIcon, href: 'https://github.com/cloudcap10', label: 'GitHub' },
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/joven-talasan/', label: 'LinkedIn' },
  { Icon: ({ size }) => <HugeiconsIcon icon={Mail01Icon} size={size} />, href: 'mailto:cloning@talz.net', label: 'Email' },
];

export default function Nav() {
  return (
    <nav className="sticky-header">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="110 90 180 95" aria-hidden="true">
            <ellipse cx="205" cy="167" rx="92" ry="11" fill="#c0392b"/>
            <path d="M134 167 q0 -67 71 -67 q71 0 71 67 z" fill="#e74c3c"/>
            <path d="M276 167 q14 -2 28 5 q-14 9 -28 9 z" fill="#c0392b"/>
            <circle cx="205" cy="105" r="6" fill="#c0392b"/>
            <text x="205" y="156" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="32" fontWeight="800" fill="#ffffff">10</text>
          </svg>
          <span className="hidden sm:inline font-mono text-sm font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            cloudcap10
          </span>
        </Link>

        <div className="flex items-center gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
            >
              {label}
            </a>
          ))}

          <div
            className="flex items-center gap-3 pl-4"
            style={{ borderLeft: '1px solid var(--border-subtle)' }}
          >
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="transition-colors"
                style={{ color: 'var(--text-faint)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-faint)'; }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
