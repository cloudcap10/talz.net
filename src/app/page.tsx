import type { Metadata } from 'next';
import PortfolioHero from '@/components/PortfolioHero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const SITE_URL = 'https://www.talz.net';

export const metadata: Metadata = {
  title: 'Joven Talasan — Network Engineer & Builder',
  description:
    'Portfolio of Joven Talasan (cloudcap10) — network engineer building tools for automation, security, and infrastructure.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Joven Talasan — Network Engineer & Builder',
    description:
      'Network engineer building open-source tools for automation, security, and infrastructure.',
    url: SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joven Talasan — Network Engineer & Builder',
    description: 'Network engineer building open-source tools for automation, security, and infrastructure.',
    creator: '@cloudcapten',
  },
};

export default function Home() {
  return (
    <>
      <PortfolioHero />

      <div className="brutal-border-thin border-x-0 border-t-0 bg-brutal-green/10">
        <ProjectsSection />
      </div>

      <div className="brutal-border-thin border-x-0 border-t-0">
        <AboutSection />
      </div>

      <div className="brutal-border-thin border-x-0 border-t-0 bg-brutal-orange/10">
        <ContactSection />
      </div>
    </>
  );
}
