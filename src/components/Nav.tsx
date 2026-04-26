'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';

const NAV_LINKS = [
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
];

interface SocialLink {
  Icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { Icon: GitHubIcon, href: 'https://github.com/cloudcap10', label: 'GitHub' },
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/joven-talasan/', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:cloning@talz.net', label: 'Email' },
];

export default function Nav() {
  return (
    <nav className="sticky-header">
      <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="110 90 180 95" aria-hidden="true">
            <ellipse cx="205" cy="167" rx="92" ry="11" fill="#c0392b"/>
            <path d="M134 167 q0 -67 71 -67 q71 0 71 67 z" fill="#e74c3c"/>
            <path d="M276 167 q14 -2 28 5 q-14 9 -28 9 z" fill="#c0392b"/>
            <circle cx="205" cy="105" r="6" fill="#c0392b"/>
            <text x="205" y="156" textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="32" fontWeight="800" fill="#ffffff">10</text>
          </svg>
          <span className="hidden sm:inline font-bold text-base tracking-tight" style={{ color: 'var(--text)' }}>CloudCap10</span>
        </Link>

        <div className="flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
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
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
