import type { Metadata } from 'next';
import PortfolioHero from '@/components/PortfolioHero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const SITE_URL = 'https://talz.net';

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

function TopologySidebar() {
  return (
    <div className="topology-sidebar" aria-hidden="true">
      <svg viewBox="0 0 80 1200" preserveAspectRatio="xMidYMin meet">
        <circle cx="40" cy="80" r="10" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="40" y="84" textAnchor="middle" fontSize="5" fill="var(--text-muted)">FW</text>

        <circle cx="40" cy="280" r="10" fill="none" stroke="var(--blue)" strokeWidth="1.5" />
        <text x="40" y="284" textAnchor="middle" fontSize="5" fill="var(--text-muted)">SW</text>

        <circle cx="40" cy="520" r="10" fill="none" stroke="var(--green)" strokeWidth="1.5" />
        <text x="40" y="524" textAnchor="middle" fontSize="5" fill="var(--text-muted)">RT</text>

        <circle cx="40" cy="760" r="10" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="40" y="764" textAnchor="middle" fontSize="5" fill="var(--text-muted)">AP</text>

        <circle cx="40" cy="1000" r="10" fill="none" stroke="var(--blue)" strokeWidth="1.5" />
        <text x="40" y="1004" textAnchor="middle" fontSize="5" fill="var(--text-muted)">SRV</text>

        <line x1="40" y1="90" x2="40" y2="270" stroke="var(--border)" strokeWidth="1" />
        <line x1="40" y1="290" x2="40" y2="510" stroke="var(--border)" strokeWidth="1" />
        <line x1="40" y1="530" x2="40" y2="750" stroke="var(--border)" strokeWidth="1" />
        <line x1="40" y1="770" x2="40" y2="990" stroke="var(--border)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <TopologySidebar />
      <div className="relative z-10">
        <PortfolioHero />

        <div className="term-sep">━━━ whoami ━━━</div>

        <div style={{ background: 'var(--bg-surface)' }}>
          <ProjectsSection />
        </div>

        <div className="term-sep">━━━ inventory ━━━</div>

        <AboutSection />

        <div className="term-sep">━━━ resolve ━━━</div>

        <div style={{ background: 'var(--bg-surface)' }}>
          <ContactSection />
        </div>
      </div>
    </>
  );
}
