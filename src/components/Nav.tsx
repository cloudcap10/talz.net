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
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-sm tracking-tight">
          <span className="gradient-text">Joven</span>
          <span style={{ color: 'var(--text)' }}> Talasan</span>
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
