export interface Project {
  id: string;
  name: string;
  tagline: string;
  repo: string;
  iconId: 'shield' | 'terminal' | 'brain' | 'clock' | 'route' | 'search';
  stack: string[];
  live?: string;
  fallbackDescription: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'filevanish',
    name: 'FileVanish',
    tagline: 'Zero-knowledge secure file sharing',
    repo: 'cloudcap10/filevanish-oss',
    iconId: 'shield',
    stack: ['TypeScript', 'React', 'Cloudflare Workers', 'R2', 'D1'],
    live: 'https://filevanish.com',
    fallbackDescription:
      "Files are encrypted before they leave your browser — the server never sees the contents. AES-256-GCM, burn-after-reading, and password protection built on Cloudflare's global edge.",
  },
  {
    id: 'network-automation',
    name: 'Network Automation Script',
    tagline: 'Multi-vendor network automation',
    repo: 'cloudcap10/netpilot',
    iconId: 'terminal',
    stack: ['Python 3.10+', 'Cisco IOS', 'Alcatel', 'Aruba', 'IIS'],
    live: 'https://netscript.talz.net',
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
    fallbackDescription:
      'Get alerted before your hardware or software goes unsupported. AI researches EOL dates, sends email alerts ahead of expiry, and keeps an auditable record — so nothing slips through.',
  },
  {
    id: 'ipfinder',
    name: 'IPFinder',
    tagline: 'Multi-site IP inventory lookup bot',
    repo: 'cloudcap10/ipfinder',
    iconId: 'search',
    stack: ['Python', 'SQLite', 'Telegram API', 'asyncio'],
    fallbackDescription:
      'Type an IP, get the site, VLAN, and subnet that owns it — via longest-prefix match across thousands of subnets. Telegram bot + CLI, subnet calculator, free-IP finder, and utilization alerts. Runs in under 30 MB RAM, no external services.',
  },
  {
    id: 'uptimemon',
    name: 'UptimeMon',
    tagline: 'Lightweight ICMP uptime monitor',
    repo: 'cloudcap10/uptimemon',
    iconId: 'terminal',
    stack: ['Python', 'asyncio', 'SQLite', 'Telegram API'],
    fallbackDescription:
      'Pings every core switch on a cycle, runs each result through a per-device state machine, and pushes a Telegram alert the moment a device goes DOWN — with site, IP, vendor, and exact outage timestamp. No web UI, no SNMP, no database server needed.',
  },
];
