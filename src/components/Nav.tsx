'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon } from '@hugeicons/core-free-icons';

const NAV_LINKS = [
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="brutal-border-thin border-t-0 border-x-0 bg-brutal-yellow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              talz.net
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-1.5 font-semibold text-sm hover:bg-black hover:text-brutal-yellow transition-colors"
              >
                {label}
              </a>
            ))}
            <div
              className="flex items-center gap-3 pl-4 ml-2"
              style={{ borderLeft: '3px solid #1a1a1a' }}
            >
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="brutal-border-thin bg-white w-9 h-9 flex items-center justify-center brutal-shadow-sm brutal-hover"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="brutal-border-thin bg-white w-10 h-10 flex items-center justify-center font-bold text-lg md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t-3 border-foreground bg-brutal-yellow pb-4 px-4">
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 font-semibold text-sm hover:bg-black hover:text-brutal-yellow transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="flex items-center gap-3 px-4 pt-3">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="brutal-border-thin bg-white w-9 h-9 flex items-center justify-center"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
