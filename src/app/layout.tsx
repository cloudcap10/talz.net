import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const SITE_URL = 'https://talz.net';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Joven Talasan — Network Engineer & Builder',
    template: '%s | talz.net',
  },
  description:
    'Portfolio of Joven Talasan (cloudcap10) — network engineer building tools for automation, security, and infrastructure.',
  authors: [{ name: 'Joven Talasan', url: SITE_URL }],
  creator: 'Joven Talasan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Joven Talasan',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@cloudcapten',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body>
        <TooltipProvider>
          <Nav />
          <main>{children}</main>
          <footer
            className="text-center py-10 text-xs"
            style={{ borderTop: '1px solid var(--border-subtle)', color: 'var(--text-faint)' }}
          >
            <p>
              Built by{' '}
              <a
                href="https://github.com/cloudcap10"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)' }}
              >
                Joven Talasan
              </a>
              {' '}· talz.net
            </p>
          </footer>
        </TooltipProvider>
      </body>
    </html>
  );
}
