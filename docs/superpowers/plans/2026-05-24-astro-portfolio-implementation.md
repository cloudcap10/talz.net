# Astro Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone Astro v5 portfolio site for talz.net in a `portfolio/` subdirectory, with a react.gg-inspired light theme redesign. PickModel (Next.js) remains untouched.

**Architecture:** Single-page scroll static site with zero JS by default. All content in `.astro` components. Tailwind v4 for styling. GitHub repo count uses an `astro-island` for client-side fetch.

**Tech Stack:** Astro v5, Tailwind v4, TypeScript

**File Structure:**
```
portfolio/
├── src/
│   ├── pages/
│   │   └── index.astro       # Main portfolio page
│   ├── components/
│   │   ├── Nav.astro          # Top navigation bar
│   │   ├── Hero.astro         # Hero section
│   │   ├── Projects.astro     # Projects section
│   │   ├── ProjectCard.astro  # Individual project card
│   │   ├── About.astro        # Skills/about section
│   │   ├── Contact.astro      # Contact section
│   │   └── Footer.astro       # Footer
│   ├── layouts/
│   │   └── Layout.astro       # Root HTML layout
│   ├── lib/
│   │   └── projects.ts        # Project data (copied from src/lib/projects.tsx)
│   └── styles/
│       └── globals.css        # Global styles + Tailwind
├── public/
│   └── favicon.svg            # Favicon
├── astro.config.mjs           # Astro config
├── tsconfig.json              # TypeScript config
├── package.json               # Dependencies
└── postcss.config.mjs         # PostCSS config (Tailwind v4)
```

---

### Task 1: Scaffold Astro project

**Files:**
- Create: `portfolio/package.json`
- Create: `portfolio/astro.config.mjs`
- Create: `portfolio/tsconfig.json`
- Create: `portfolio/postcss.config.mjs`

- [ ] **Create package.json**

```json
{
  "name": "talz-portfolio",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "dependencies": {
    "astro": "^5.16.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

- [ ] **Create astro.config.mjs**

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://talz.net',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Create tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

- [ ] **Create postcss.config.mjs** (needed if using PostCSS, but with Vite plugin we might not need it — Astro with @tailwindcss/vite handles it)

```js
export default {};
```

- [ ] **Install dependencies**

Run: `cd portfolio && npm install`

Expected: `node_modules/` created, no errors

- [ ] **Commit**

```bash
git add portfolio/package.json portfolio/astro.config.mjs portfolio/tsconfig.json portfolio/postcss.config.mjs
git commit -m "feat: scaffold Astro portfolio project"
```

---

### Task 2: Create global styles

**Files:**
- Create: `portfolio/src/styles/globals.css`

- [ ] **Create globals.css** with react.gg-inspired design tokens

```css
@import "tailwindcss";

:root {
  --bg: #f6f1d8;
  --bg-card: #ffffff;
  --bg-surface: #efe9d0;
  --border: #e0d8c0;
  --border-subtle: #eae4ce;
  --text: #1a1a1a;
  --text-muted: #777;
  --text-faint: #aaa;
  --accent: #e8a838;
  --accent-dim: #d4952a;
  --accent-glow: rgba(232, 168, 56, 0.15);
  --green: #2b9d6a;
  --blue: #3b82f6;
  --red: #ef4444;
}

@theme inline {
  --color-bg: var(--bg);
  --color-bg-card: var(--bg-card);
  --color-border: var(--border);
  --color-text: var(--text);
  --color-text-muted: var(--text-muted);
  --color-accent: var(--accent);
}

html {
  scroll-behavior: smooth;
  background-color: var(--bg);
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Onest', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: var(--accent-glow);
  color: var(--text);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.cursor::after {
  content: '▊';
  animation: blink 1s step-end infinite;
  color: var(--accent);
  margin-left: 2px;
}
```

- [ ] **Commit**

```bash
git add portfolio/src/styles/globals.css
git commit -m "feat: add global styles with design tokens"
```

---

### Task 3: Create Layout component

**Files:**
- Create: `portfolio/src/layouts/Layout.astro`

- [ ] **Create Layout.astro**

```astro
---
import '@/styles/globals.css';

interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
const SITE_URL = 'https://talz.net';
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="canonical" href={SITE_URL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={SITE_URL} />
    <meta name="twitter:card" content="summary_large_image" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Onest:wght@400;500;600;700;800;900&display=swap');
    </style>
  </head>
  <body>
    <slot />
  </body>
  <style is:global>
    @view-transition { navigation: auto; }
  </style>
</html>
```

- [ ] **Commit**

```bash
git add portfolio/src/layouts/Layout.astro
git commit -m "feat: add root Layout component"
```

---

### Task 4: Create Nav component

**Files:**
- Create: `portfolio/src/components/Nav.astro`

- [ ] **Create Nav.astro**

```astro
---
const NAV_LINKS = [
  { label: '~/projects', href: '#projects' },
  { label: '~/about', href: '#about' },
  { label: '~/contact', href: '#contact' },
];
---

<nav class="sticky top-0 z-40" style="background: rgba(246,241,216,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border)">
  <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="/" class="flex items-center gap-2.5 font-bold" style="color: var(--text)">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="110 90 180 95" aria-hidden="true">
        <ellipse cx="205" cy="167" rx="92" ry="11" fill="#c0392b"/>
        <path d="M134 167 q0 -67 71 -67 q71 0 71 67 z" fill="#e74c3c"/>
        <path d="M276 167 q14 -2 28 5 q-14 9 -28 9 z" fill="#c0392b"/>
        <circle cx="205" cy="105" r="6" fill="#c0392b"/>
        <text x="205" y="156" text-anchor="middle" font-family="Onest,system-ui,sans-serif" font-size="32" font-weight="800" fill="#ffffff">10</text>
      </svg>
      <span class="font-semibold text-sm tracking-tight">cloudcap10</span>
    </a>

    <div class="flex items-center gap-6">
      {NAV_LINKS.map((link) => (
        <a
          href={link.href}
          class="text-sm font-medium transition-colors"
          style="color: var(--text-muted)"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
</nav>
```

- [ ] **Commit**

```bash
git add portfolio/src/components/Nav.astro
git commit -m "feat: add Nav component"
```

---

### Task 5: Create Hero component

**Files:**
- Create: `portfolio/src/components/Hero.astro`
- Create: `portfolio/src/components/GitHubCount.ts` (client script)

- [ ] **Create Hero.astro** — bold all-caps heading, terminal decoration widget, CTA buttons

```astro
---
const PROJECT_COUNT = 7;
---

<section class="px-6 pt-16 pb-20">
  <div class="max-w-4xl mx-auto">
    <div class="flex flex-col lg:flex-row gap-10 items-center">
      <div class="flex-1">
        <div class="font-mono text-xs mb-3" style="color: var(--accent)">network engineer / builder</div>

        <h1 class="font-black uppercase tracking-tight" style="font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 0.95">
          Joven<br />
          <span style="color: var(--accent)">Talasan</span>
        </h1>

        <p class="mt-4 text-lg max-w-md" style="color: var(--text-muted); line-height: 1.6">
          I automate what network engineers do by hand and build the tools that keep infrastructure visible, secure, and under control.
        </p>

        <div class="flex flex-wrap gap-3 mt-8">
          <a
            href="#projects"
            class="inline-block px-6 py-3 font-bold uppercase tracking-wide text-sm border-2 transition-all"
            style="background: var(--accent); color: #1a1a1a; border-color: #1a1a1a; box-shadow: 4px 4px 0 #1a1a1a; border-radius: 9999px"
          >
            See my work →
          </a>
          <a
            href="#contact"
            class="inline-block px-6 py-3 font-bold uppercase tracking-wide text-sm border-2 transition-all"
            style="background: transparent; color: #1a1a1a; border-color: #1a1a1a; box-shadow: 4px 4px 0 #1a1a1a; border-radius: 9999px"
          >
            Get in touch
          </a>
        </div>

        <!-- Stats -->
        <div class="flex gap-6 mt-10">
          <div>
            <div class="text-2xl font-black" style="color: var(--accent)">8+</div>
            <div class="text-xs font-mono" style="color: var(--text-faint)">years networking</div>
          </div>
          <div>
            <div class="text-2xl font-black" style="color: var(--accent)">{PROJECT_COUNT}</div>
            <div class="text-xs font-mono" style="color: var(--text-faint)">apps shipped</div>
          </div>
          <div>
            <div class="text-2xl font-black" style="color: var(--accent)">
              <span id="repo-count">...</span>
            </div>
            <div class="text-xs font-mono" style="color: var(--text-faint)">public repos</div>
          </div>
        </div>
      </div>

      <!-- Terminal widget -->
      <div class="flex-shrink-0 relative">
        <div class="p-5 rounded-2xl border-2" style="background: #1a1a1a; border-color: #1a1a1a; box-shadow: 6px 6px 0 var(--accent); min-width: 240px">
          <div class="flex gap-2 mb-4">
            <div class="w-3 h-3 rounded-full" style="background: #ff5f56"></div>
            <div class="w-3 h-3 rounded-full" style="background: #ffbd2e"></div>
            <div class="w-3 h-3 rounded-full" style="background: #27c93f"></div>
          </div>
          <div class="font-mono text-xs leading-loose" style="color: #33ff33">
            <div style="color: var(--accent)">cloudcap10@talz:~$ <span class="cursor" /></div>
            <div>whoami</div>
            <div style="color: var(--accent)">cloudcap10@talz:~$</div>
            <div>network engineer</div>
            <div style="color: var(--accent)">cloudcap10@talz:~$</div>
            <div style="display: flex; gap: 4px"><span style="color: var(--accent)">npx</span> build --open-source</div>
            <div style="color: var(--accent); margin-top: 8px">cloudcap10@talz:~$ ▊</div>
          </div>
        </div>
        <div class="absolute -top-2 -right-2 w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg" style="background: var(--accent); border-color: #1a1a1a; box-shadow: 2px 2px 0 #1a1a1a">⚡</div>
      </div>
    </div>
  </div>
</section>

<script>
  fetch('https://api.github.com/users/cloudcap10')
    .then(r => r.json())
    .then(d => {
      const el = document.getElementById('repo-count');
      if (el) el.textContent = String(d.public_repos || '?');
    })
    .catch(() => {
      const el = document.getElementById('repo-count');
      if (el) el.textContent = '?';
    });
</script>
```

- [ ] **Commit**

```bash
git add portfolio/src/components/Hero.astro
git commit -m "feat: add Hero component with terminal widget"
```

---

### Task 6: Create ProjectCard component

**Files:**
- Create: `portfolio/src/components/ProjectCard.astro`
- Create: `portfolio/src/lib/projects.ts`

- [ ] **Create projects data file**

Copy from existing `src/lib/projects.tsx` — remove React-specific types, keep the Project interface and PROJECTS array as plain TypeScript:

```ts
export interface Project {
  id: string;
  name: string;
  tagline: string;
  repo: string;
  iconId: 'shield' | 'terminal' | 'brain' | 'clock' | 'route' | 'search';
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
    repo: 'cloudcap10/filevanish-oss',
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
    repo: 'cloudcap10/netpilot',
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
  {
    id: 'ipfinder',
    name: 'IPFinder',
    tagline: 'Multi-site IP inventory lookup bot',
    repo: 'cloudcap10/ipfinder',
    iconId: 'search',
    stack: ['Python', 'SQLite', 'Telegram API', 'asyncio'],
    color: '#0369a1',
    bgColor: 'rgba(3,105,161,0.08)',
    borderColor: 'rgba(3,105,161,0.18)',
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
    color: '#0d9488',
    bgColor: 'rgba(13,148,136,0.08)',
    borderColor: 'rgba(13,148,136,0.18)',
    fallbackDescription:
      'Pings every core switch on a cycle, runs each result through a per-device state machine, and pushes a Telegram alert the moment a device goes DOWN — with site, IP, vendor, and exact outage timestamp. No web UI, no SNMP, no database server needed.',
  },
];
```

- [ ] **Create ProjectCard.astro**

```astro
---
import type { Project } from '@/lib/projects';

interface Props {
  project: Project;
  description: string;
}

const { project, description } = Astro.props;

const ICONS: Record<string, string> = {
  shield: '🛡',
  terminal: '⌨',
  brain: '🧠',
  clock: '⏱',
  route: '🔀',
  search: '🔍',
};
---

<div class="p-5 rounded-xl border-2 transition-all" style="background: var(--bg-card); border-color: var(--border);">
  <div class="flex items-start gap-3">
    <div class="flex items-center justify-center w-8 h-8 rounded-lg text-sm shrink-0" style="background: {project.bgColor}; border: 1px solid {project.borderColor}">
      {ICONS[project.iconId]}
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2 flex-wrap">
        <h3 class="font-bold text-base">{project.name}</h3>
        <span class="text-xs" style="color: project.color">{project.tagline}</span>
      </div>
      <p class="text-sm mt-1.5 leading-relaxed" style="color: var(--text-muted)">{description}</p>
      <div class="flex flex-wrap gap-1.5 mt-3">
        {project.stack.map((tech) => (
          <span class="text-xs px-2 py-0.5 rounded-full font-mono" style="background: var(--bg-surface); color: var(--text-muted)">
            {tech}
          </span>
        ))}
      </div>
      <div class="flex gap-4 mt-3">
        <a href={"https://github.com/" + project.repo} target="_blank" class="text-xs font-semibold" style="color: var(--accent)">source →</a>
        {project.live && (
          <a href={project.live} target="_blank" class="text-xs font-semibold" style="color: var(--text-muted)">live →</a>
        )}
      </div>
    </div>
  </div>
</div>
```

- [ ] **Commit**

```bash
git add portfolio/src/lib/projects.ts portfolio/src/components/ProjectCard.astro
git commit -m "feat: add ProjectCard component and project data"
```

---

### Task 7: Create Projects section

**Files:**
- Create: `portfolio/src/components/Projects.astro`

- [ ] **Create Projects.astro**

```astro
---
import { PROJECTS } from '@/lib/projects';
import ProjectCard from './ProjectCard.astro';

// Fetch GitHub descriptions at build time
const descriptions = await Promise.all(
  PROJECTS.map(async (project) => {
    try {
      const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
      const res = await fetch(`https://api.github.com/repos/${project.repo}`, { headers });
      if (!res.ok) return project.fallbackDescription;
      const data = await res.json() as { description?: string | null };
      return data.description?.trim() || project.fallbackDescription;
    } catch {
      return project.fallbackDescription;
    }
  })
);
---

<section id="projects" class="px-6 pb-24">
  <div class="max-w-4xl mx-auto">
    <h2 class="font-black uppercase tracking-tight text-3xl mb-2">Projects</h2>
    <p class="text-sm mb-8" style="color: var(--text-muted)">Open-source tools I've built</p>

    <div class="flex flex-col gap-4">
      {PROJECTS.map((project, i) => (
        <ProjectCard project={project} description={descriptions[i]} />
      ))}
    </div>
  </div>
</section>
```

- [ ] **Commit**

```bash
git add portfolio/src/components/Projects.astro
git commit -m "feat: add Projects section with GitHub descriptions"
```

---

### Task 8: Create About section

**Files:**
- Create: `portfolio/src/components/About.astro`

- [ ] **Create About.astro**

```astro
---
const SKILLS = [
  {
    category: 'Network Engineering',
    color: '#2e6ea0',
    items: ['Cisco IOS', 'Alcatel-Lucent', 'Aruba', 'BGP / OSPF', 'Network Automation', 'Python Netmiko'],
  },
  {
    category: 'Development',
    color: '#7c4dbb',
    items: ['TypeScript', 'Python', 'Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
  },
  {
    category: 'Infrastructure',
    color: '#8a5c10',
    items: ['Cloudflare Workers', 'D1 / R2 / KV', 'Vercel', 'Docker', 'Linux'],
  },
  {
    category: 'Security',
    color: '#1d8a5c',
    items: ['Zero-knowledge encryption', 'AES-256-GCM', 'JWT / OAuth2', 'Network hardening', 'EOL / CVE tracking'],
  },
];
---

<section id="about" class="px-6 pb-24">
  <div class="max-w-4xl mx-auto">
    <h2 class="font-black uppercase tracking-tight text-3xl mb-2">About</h2>
    <p class="text-sm mb-8 max-w-xl" style="color: var(--text-muted); line-height: 1.7">
      Network engineer by trade, builder by habit. I automate the repetitive parts of network operations and build tools that help teams stay on top of their infrastructure.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {SKILLS.map((skill) => (
        <div class="p-5 rounded-xl border-2" style="background: var(--bg-card); border-color: var(--border)">
          <h3 class="font-bold text-sm uppercase tracking-wide mb-3" style="color: {skill.color}">{skill.category}</h3>
          <div class="flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <span class="text-xs px-2.5 py-1 rounded-full font-mono" style="background: {skill.color}15; color: {skill.color}">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Commit**

```bash
git add portfolio/src/components/About.astro
git commit -m "feat: add About section with skills grid"
```

---

### Task 9: Create Contact section

**Files:**
- Create: `portfolio/src/components/Contact.astro`

- [ ] **Create Contact.astro**

```astro
---
const CONTACT = [
  { label: 'EMAIL', value: 'cloning@talz.net', href: 'mailto:cloning@talz.net' },
  { label: 'LINKEDIN', value: '/in/joven-talasan', href: 'https://www.linkedin.com/in/joven-talasan/' },
  { label: 'GITHUB', value: 'cloudcap10', href: 'https://github.com/cloudcap10' },
];
---

<section id="contact" class="px-6 pb-28">
  <div class="max-w-4xl mx-auto">
    <h2 class="font-black uppercase tracking-tight text-3xl mb-2">Contact</h2>
    <p class="text-sm mb-8" style="color: var(--text-muted)">Want to collaborate? Reach out.</p>

    <div class="rounded-xl border-2 overflow-hidden" style="background: var(--bg-card); border-color: var(--border)">
      {CONTACT.map((item) => (
        <a
          href={item.href}
          target={item.href.startsWith('mailto') ? undefined : '_blank'}
          class="flex items-center gap-4 px-6 py-4 transition-colors border-b last:border-b-0"
          style="border-color: var(--border)"
        >
          <span class="font-mono text-xs font-semibold w-20 shrink-0" style="color: var(--text-faint)">{item.label}</span>
          <span style="color: var(--accent)" class="font-medium">{item.value}</span>
        </a>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Commit**

```bash
git add portfolio/src/components/Contact.astro
git commit -m "feat: add Contact section"
```

---

### Task 10: Create Footer component

**Files:**
- Create: `portfolio/src/components/Footer.astro`

- [ ] **Create Footer.astro**

```astro
<footer class="text-center py-8 border-t text-xs" style="border-color: var(--border); color: var(--text-faint); font-family: 'JetBrains Mono', monospace">
  <p>built by <a href="https://github.com/cloudcap10" target="_blank" style="color: var(--accent)">Joven Talasan</a> · talz.net</p>
</footer>
```

- [ ] **Commit**

```bash
git add portfolio/src/components/Footer.astro
git commit -m "feat: add Footer component"
```

---

### Task 11: Create index page and favicon

**Files:**
- Create: `portfolio/src/pages/index.astro`
- Create: `portfolio/public/favicon.svg`

- [ ] **Create index.astro**

```astro
---
import Layout from '@/layouts/Layout.astro';
import Nav from '@/components/Nav.astro';
import Hero from '@/components/Hero.astro';
import Projects from '@/components/Projects.astro';
import About from '@/components/About.astro';
import Contact from '@/components/Contact.astro';
import Footer from '@/components/Footer.astro';
---

<Layout title="Joven Talasan — Network Engineer & Builder" description="Portfolio of Joven Talasan (cloudcap10) — network engineer building tools for automation, security, and infrastructure.">
  <Nav />
  <main>
    <Hero />
    <Projects />
    <About />
    <Contact />
  </main>
  <Footer />
</Layout>
```

- [ ] **Create favicon.svg** (copy the existing one from src/app/favicon.svg)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="110 90 180 95">
  <ellipse cx="205" cy="167" rx="92" ry="11" fill="#c0392b"/>
  <path d="M134 167 q0 -67 71 -67 q71 0 71 67 z" fill="#e74c3c"/>
  <path d="M276 167 q14 -2 28 5 q-14 9 -28 9 z" fill="#c0392b"/>
  <circle cx="205" cy="105" r="6" fill="#c0392b"/>
  <text x="205" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="32" font-weight="800" fill="#ffffff">10</text>
</svg>
```

- [ ] **Commit**

```bash
git add portfolio/src/pages/index.astro portfolio/public/favicon.svg
git commit -m "feat: add index page and favicon"
```

---

### Task 12: Build and verify

- [ ] **Run astro check to verify types**

Run: `cd portfolio && npx astro check`
Expected: No errors

- [ ] **Build the site**

Run: `cd portfolio && npx astro build`
Expected: `portfolio/dist/` directory created with HTML output

- [ ] **Preview the site**

Run: `cd portfolio && npx astro preview`
Expected: Site loads at localhost, all sections visible with the new design

- [ ] **Commit final build config**

```bash
git add portfolio/dist/.gitkeep
git commit -m "chore: initial build output"
```
