import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from "@/lib/utils";

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
});

const SITE_URL = 'https://www.talz.net';

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
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Joven Talasan — network engineer who ships software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@cloudcapten',
    images: ['/og.png'],
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans h-full", mono.variable, spaceGrotesk.variable)}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <footer className="brutal-border-thin border-x-0 border-b-0 py-6 text-center">
            <p className="font-mono text-xs font-semibold">
              built by{' '}
              <a
                href="https://github.com/cloudcap10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brutal-blue hover:underline"
              >
                Joven Talasan
              </a>
              {' '}❤ from Singapore
            </p>
          </footer>
        </TooltipProvider>
      </body>
    </html>
  );
}
