export interface Project {
  id: string;
  name: string;
  tagline: string;
  repo: string;
  iconId: 'shield' | 'terminal' | 'brain' | 'clock' | 'route';
  stack: string[];
  live?: string;
  color: string;
  bgColor: string;
  borderColor: string;
  fallbackDescription: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'filevanish',
    name: 'FileVanish',
    tagline: 'Zero-knowledge secure file sharing',
    repo: 'cloudcap10/filevanish',
    iconId: 'shield',
    stack: ['TypeScript', 'React', 'Cloudflare Workers', 'R2', 'D1'],
    live: 'https://filevanish.com',
    color: '#1d8a5c',
    bgColor: 'rgba(29,138,92,0.08)',
    borderColor: 'rgba(29,138,92,0.18)',
    fallbackDescription:
      "Files are encrypted before they leave your browser — the server never sees the contents. AES-256-GCM, burn-after-reading, and password protection built on Cloudflare's global edge.",
  },
  {
    id: 'network-automation',
    name: 'Network Automation Script',
    tagline: 'Multi-vendor network automation',
    repo: 'cloudcap10/Network-Automation-Script',
    iconId: 'terminal',
    stack: ['Python 3.10+', 'Cisco IOS', 'Alcatel', 'Aruba', 'IIS'],
    live: 'https://netscript.talz.net',
    color: '#2e6ea0',
    bgColor: 'rgba(46,110,160,0.08)',
    borderColor: 'rgba(46,110,160,0.18)',
    fallbackDescription:
      'Turns hours of manual CLI work into a scheduled job. Automatically backs up configs and tracks inventory across Cisco, Alcatel, and Aruba devices — with a web portal for reporting.',
  },
  {
    id: 'pickmodel',
    name: 'PickModel',
    tagline: 'AI model comparison platform',
    repo: 'cloudcap10/pickmodel',
    iconId: 'brain',
    stack: ['TypeScript', 'Next.js', 'YAML', 'Tailwind CSS'],
    live: 'https://pickmodel.uk',
    color: '#7c4dbb',
    bgColor: 'rgba(124,77,187,0.08)',
    borderColor: 'rgba(124,77,187,0.18)',
    fallbackDescription:
      'One page instead of 20 browser tabs. Compare AI models by context window, price per token, and benchmark scores. YAML-driven so the data stays current without a full rebuild.',
  },
  {
    id: 'traefikgen',
    name: 'TraefikGen',
    tagline: 'Instant Docker → Traefik converter',
    repo: 'cloudcap10/traefik-gen',
    iconId: 'route',
    stack: ['TypeScript', 'React', 'Vite', 'GitHub Pages', 'GitHub Actions'],
    live: 'https://cloudcap10.github.io/traefik-gen/',
    color: '#b45309',
    bgColor: 'rgba(180,83,9,0.08)',
    borderColor: 'rgba(180,83,9,0.18)',
    fallbackDescription:
      'Paste any docker-compose.yml and get a Traefik-ready config instantly — labels injected, ports stripped, secrets replaced with safe placeholders. Push to GitHub and your VPS deploys the app automatically in under 60 seconds.',
  },
  {
    id: 'supportexpiry',
    name: 'SupportExpiry',
    tagline: 'Hardware & software EOL tracker',
    repo: 'cloudcap10/supportexpiry',
    iconId: 'clock',
    stack: ['TypeScript', 'Next.js 15', 'Cloudflare Workers', 'D1', 'Grok AI'],
    live: 'https://supportexpiry.com',
    color: '#8a5c10',
    bgColor: 'rgba(138,92,16,0.08)',
    borderColor: 'rgba(138,92,16,0.18)',
    fallbackDescription:
      'Get alerted before your hardware or software goes unsupported. AI researches EOL dates, sends email alerts ahead of expiry, and keeps an auditable record — so nothing slips through.',
  },
];
