# Portfolio Redesign — Industrial/Utilitarian Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign talz.net portfolio with industrial/utilitarian dark theme — terminal motifs, JetBrains Mono, sharp corners, rust accent.

**Architecture:** Pure visual redesign of existing Next.js components. No new pages, no structural changes to routing. Color palette in CSS vars, fonts via next/font, all component changes are scoped to `src/components/`.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion

---

### Task 1: Update color palette + add grid background pattern in globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Replace CSS custom properties with dark industrial palette**

In `src/app/globals.css`, replace the `:root` block with:

```css
:root {
  color-scheme: dark;

  --bg: #12110f;
  --bg-card: #22201d;
  --bg-card-hover: #282522;
  --bg-surface: #1c1a18;
  --border: #2e2b28;
  --border-subtle: #242220;
  --text: #e8e4e1;
  --text-muted: #8a8480;
  --text-faint: #5e5a55;
  --accent: #cc5c33;
  --accent-dim: #a84527;
  --accent-glow: rgba(204, 92, 51, 0.12);
  --green: #1d8a5c;
  --red: #c94040;
  --yellow: #8a5c10;
  --blue: #2e6ea0;
}
```

- [ ] **Remove the `.dark` block entirely** (no light mode)

Delete the entire `.dark { ... }` block from `globals.css` (lines 282-314).

- [ ] **Remove `@custom-variant dark` line**

Delete `@custom-variant dark (&:is(.dark *));`

- [ ] **Remove shadcn CSS import** (not used by portfolio pages, only tooltip is imported)

Delete `@import "shadcn/tailwind.css";` — also update `color-scheme` to `dark` as previously done.

Keep `@import "tailwindcss";` and `@import "tw-animate-css";`.

- [ ] **Add dot-grid background utility classes**

Add after the selection styles:

```css
/* Dot-grid background */
.bg-grid {
  background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
  background-size: 24px 24px;
}

.bg-grid-subtle {
  background-image: radial-gradient(circle, var(--border-subtle) 0.5px, transparent 0.5px);
  background-size: 32px 32px;
}
```

- [ ] **Replace font-family on body with Onest stack**

Change the body rule:
```css
body {
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Onest', system-ui, -apple-system, sans-serif;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Remove `.card-glow` hover style** — replace with sharp industrial variant

Replace the `.card-glow:hover` block with:
```css
.card-glow:hover {
  border-color: var(--accent-dim) !important;
}
```

- [ ] **Set border-radius to 0 for card/container classes**

Find the `.comparison-table`, `.pill`, `.feature-tag` etc. classes — these are for PickModel pages, leave them alone. But ensure no border-radius on portfolio-specific elements by:
- Remove `rounded-*` from utility classes usage (handled in component tasks)
- Remove or comment out the radius variables — or leave them for PickModel pages

- [ ] **Update color-scheme meta**

Change `color-scheme: light;` to `color-scheme: dark;`

---

### Task 2: Add dotted separator utility + update page.tsx section dividers

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/page.tsx`

- [ ] **Add dotted border utility to globals.css**

Add after the `.bg-grid-subtle` block:
```css
/* Dotted separators */
.border-dot {
  border-top: 1px dashed var(--border);
}
```

- [ ] **Update page.tsx section borders to dotted**

In `src/app/page.tsx`, change the inline `borderTop` styles to use dotted borders. Replace:
```tsx
<div style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
```
With:
```tsx
<div className="border-dot" style={{ background: 'var(--bg-surface)', borderBottom: '1px dashed var(--border)' }}>
```

And replace:
```tsx
<div style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}>
```
With:
```tsx
<div className="border-dot" style={{ background: 'var(--bg-surface)' }}>
```

### Task 11: Add JetBrains Mono and Onest fonts in layout.tsx

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Import and load fonts**

Replace:
```tsx
import { Geist } from 'next/font/google';
import './globals.css';
```

With:
```tsx
import { JetBrains_Mono, Onest } from 'next/font/google';
import './globals.css';

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const onest = Onest({ subsets: ['latin'], variable: '--font-sans' });
```

- [ ] **Update html className and remove Geist variable**

Change:
```tsx
<html lang="en" className={cn("font-sans", geist.variable)}>
```
To:
```tsx
<html lang="en" className={cn("font-sans", mono.variable, onest.variable)}>
```

- [ ] **Update metadata descriptions to reflect dark theme** (optional — keep existing content)

- [ ] **Add a `@theme inline` update in globals.css**

Add the mono font to the `@theme inline` block:
```css
--font-mono: var(--font-mono);
```

Also update shadcn/ui radius to 0 for portfolio appearance:
```css
--radius: 0;
```

---

### Task 11: Redesign Nav.tsx — monospace, sharp, industrial

**Files:**
- Modify: `src/components/Nav.tsx`

- [ ] **Replace entire Nav component**

```tsx
'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';

const NAV_LINKS = [
  { label: '~/projects', href: '/#projects' },
  { label: '~/about', href: '/#about' },
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
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="110 90 180 95" aria-hidden="true">
            <ellipse cx="205" cy="167" rx="92" ry="11" fill="#c0392b"/>
            <path d="M134 167 q0 -67 71 -67 q71 0 71 67 z" fill="#e74c3c"/>
            <path d="M276 167 q14 -2 28 5 q-14 9 -28 9 z" fill="#c0392b"/>
            <circle cx="205" cy="105" r="6" fill="#c0392b"/>
            <text x="205" y="156" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="32" fontWeight="800" fill="#ffffff">10</text>
          </svg>
          <span className="hidden sm:inline font-mono text-sm font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            cloudcap10
          </span>
        </Link>

        <div className="flex items-center gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
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
                style={{ color: 'var(--text-faint)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-faint)'; }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Update `.sticky-header` in globals.css**

Change the background to match dark palette:
```css
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(12px);
  background: rgba(18, 17, 15, 0.88);
  border-bottom: 1px solid var(--border-subtle);
}
```

---

### Task 11: Redesign PortfolioHero.tsx — terminal motif

**Files:**
- Modify: `src/components/PortfolioHero.tsx`

- [ ] **Replace entire component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { PROJECTS } from '@/lib/projects';

const STATS = [
  { value: '8+', label: 'years in networking' },
  { value: String(PROJECTS.length), label: 'apps shipped' },
  { value: '157', label: 'public repos' },
];

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 px-4 bg-grid-subtle">
      {/* Background accent glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(204,92,51,1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-left">
        {/* Prompt line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <span className="font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
            <span style={{ color: 'var(--green)' }}>cloudcap10@talz</span>
            <span style={{ color: 'var(--text-faint)' }}>:</span>
            <span style={{ color: 'var(--blue)' }}>~</span>
            <span style={{ color: 'var(--text-faint)' }}>$ </span>
            <span style={{ color: 'var(--text)' }}>cat profile</span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-mono text-4xl sm:text-6xl font-bold tracking-tight mb-4"
          style={{ lineHeight: 1.1 }}
        >
          <span className="gradient-text">JOVEN TALASAN</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-sm font-medium mb-6"
          style={{ color: 'var(--text-muted)' }}
        >
          network engineer who ships software
        </motion.p>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-full h-px mb-6"
          style={{ background: 'var(--border-subtle)' }}
        />

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-base mb-10 max-w-2xl"
          style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}
        >
          I automate what network engineers do by hand and build the tools that keep
          infrastructure{' '}
          <span className="font-medium" style={{ color: 'var(--text)' }}>
            visible, secure, and under control
          </span>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex items-center gap-3 flex-wrap mb-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff', border: '1px solid var(--accent-dim)' }}
          >
            <Mail size={13} />
            contact
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold transition-colors"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--text-faint)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; }}
          >
            view projects
          </a>
          <a
            href="https://www.linkedin.com/in/joven-talasan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold transition-colors"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--text-faint)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; }}
          >
            linkedin
          </a>
          <a
            href="https://github.com/cloudcap10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold transition-colors"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--text-faint)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; }}
          >
            github
          </a>
        </motion.div>

        {/* Stats as terminal blocks */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex gap-px"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 p-3 text-center"
              style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
            >
              <div className="font-mono text-lg font-bold" style={{ color: 'var(--accent)' }}>
                {stat.value}
              </div>
              <div className="font-mono text-[10px] leading-tight" style={{ color: 'var(--text-faint)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 11: Redesign ProjectCard.tsx — sharp corners, code tags

**Files:**
- Modify: `src/components/ProjectCard.tsx`

- [ ] **Replace entire component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { Shield, Terminal, Brain, Clock, Route, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/SocialIcons';
import type { Project } from '@/lib/projects';

const ICONS = {
  shield: Shield,
  terminal: Terminal,
  brain: Brain,
  clock: Clock,
  route: Route,
} as const;

interface Props {
  project: Project;
  description: string;
  index: number;
}

export default function ProjectCard({ project, description, index }: Props) {
  const Icon = ICONS[project.iconId];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="h-full"
    >
      <div
        className="card-glow h-full flex flex-col transition-all duration-150"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
      >
        <div className="p-5 pb-3">
          <div className="mb-3 flex items-center gap-3">
            <div
              className="w-[30px] h-[30px] flex items-center justify-center"
              style={{ background: project.bgColor, border: `1px solid ${project.borderColor}` }}
            >
              <Icon size={15} style={{ color: project.color }} />
            </div>
            <h3 className="font-mono text-sm font-bold" style={{ color: 'var(--text)' }}>
              {project.name}
            </h3>
          </div>
          <p className="font-mono text-[11px] font-medium mb-2" style={{ color: project.color }}>
            {project.tagline}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {description}
          </p>
        </div>

        <div className="px-5 pb-3 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-1.5 py-0.5"
              style={{
                background: project.bgColor,
                color: project.color,
                border: `1px solid ${project.borderColor}`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className="mt-auto px-5 py-3 flex items-center gap-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <a
            href={`https://github.com/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] transition-colors"
            style={{ color: 'var(--text-faint)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-faint)'; }}
          >
            <GitHubIcon size={11} />
            source
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px]"
              style={{ color: project.color }}
            >
              <ExternalLink size={11} />
              live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
```

---

### Task 11: Update ProjectsSection.tsx heading style

**Files:**
- Modify: `src/components/ProjectsSection.tsx`

- [ ] **Update heading to monospace**

Change the heading and subheading section:
```tsx
<div className="mb-12 text-left">
  <h2 className="font-mono text-2xl font-bold mb-2" style={{ color: 'var(--text)' }}>
    ## Projects
  </h2>
  <p className="font-mono text-xs" style={{ color: 'var(--text-faint)' }}>
    # a mix of network tooling and web apps — all open source
  </p>
</div>
```

---

### Task 11: Redesign AboutSection.tsx — terminal-style skills

**Files:**
- Modify: `src/components/AboutSection.tsx`

- [ ] **Replace entire component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { Network, Code2, Shield, Cpu } from 'lucide-react';
import type { ElementType } from 'react';

interface SkillGroup {
  category: string;
  icon: ElementType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  bgColor: string;
  borderColor: string;
  items: string[];
}

const SKILLS: SkillGroup[] = [
  {
    category: 'Network Engineering',
    icon: Network,
    color: '#2e6ea0',
    bgColor: 'rgba(46,110,160,0.08)',
    borderColor: 'rgba(46,110,160,0.18)',
    items: ['Cisco IOS', 'Alcatel-Lucent', 'Aruba', 'BGP / OSPF', 'Network Automation', 'Python Netmiko'],
  },
  {
    category: 'Development',
    icon: Code2,
    color: '#7c4dbb',
    bgColor: 'rgba(124,77,187,0.08)',
    borderColor: 'rgba(124,77,187,0.18)',
    items: ['TypeScript', 'Python', 'Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
  },
  {
    category: 'Infrastructure',
    icon: Cpu,
    color: '#8a5c10',
    bgColor: 'rgba(138,92,16,0.08)',
    borderColor: 'rgba(138,92,16,0.18)',
    items: ['Cloudflare Workers', 'D1 / R2 / KV', 'Vercel', 'Docker', 'Linux'],
  },
  {
    category: 'Security',
    icon: Shield,
    color: '#1d8a5c',
    bgColor: 'rgba(29,138,92,0.08)',
    borderColor: 'rgba(29,138,92,0.18)',
    items: ['Zero-knowledge encryption', 'AES-256-GCM', 'JWT / OAuth2', 'Network hardening', 'EOL / CVE tracking'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-4 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-12"
        >
          <h2 className="font-mono text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>
            ## About
          </h2>
          <p
            className="text-sm"
            style={{ color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '36rem' }}
          >
            Network engineer by trade, builder by habit. I automate the repetitive parts of
            network operations and build tools that help teams stay on top of their
            infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
                className="p-5"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-[24px] h-[24px] flex items-center justify-center"
                    style={{ background: skill.bgColor, border: `1px solid ${skill.borderColor}` }}
                  >
                    <Icon size={12} style={{ color: skill.color }} />
                  </div>
                  <h3 className="font-mono text-xs font-bold" style={{ color: 'var(--text)' }}>
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[10px] px-1.5 py-0.5"
                      style={{
                        background: skill.bgColor,
                        color: skill.color,
                        border: `1px solid ${skill.borderColor}`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 11: Redesign ContactSection.tsx — terminal-style

**Files:**
- Modify: `src/components/ContactSection.tsx`

- [ ] **Replace entire component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { LinkedInIcon } from '@/components/SocialIcons';

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-28">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="font-mono text-2xl font-bold mb-8" style={{ color: 'var(--text)' }}>
            ## Contact
          </h2>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:cloning@talz.net"
              className="inline-flex items-center gap-3 font-mono text-sm transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
            >
              <span style={{ color: 'var(--green)' }}>mail</span>
              <span style={{ color: 'var(--text-faint)' }}> cloning@talz.net</span>
            </a>
            <a
              href="https://www.linkedin.com/in/joven-talasan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-sm transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
            >
              <span style={{ color: 'var(--blue)' }}>linkedin</span>
              <span style={{ color: 'var(--text-faint)' }}> /in/joven-talasan</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 11: Update footer in layout.tsx

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Update footer text to monospace**

Replace the footer block:
```tsx
<footer
  className="text-center py-8 font-mono text-[10px]"
  style={{ borderTop: '1px solid var(--border-subtle)', color: 'var(--text-faint)' }}
>
  <p>
    built by{' '}
    <a
      href="https://github.com/cloudcap10"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'var(--accent)' }}
      className="hover:opacity-80 transition-opacity"
    >
      Joven Talasan
    </a>
    {' '}· talz.net
  </p>
</footer>
```

---

### Task 11: Build and verify

**Files:** None

- [ ] **Run build to verify no errors**

Run: `npm run build`

Expected: Successful build with no errors, output in `out/` directory.

- [ ] **Verify visual changes**

Run: `npm run dev` and check:
- Hero has terminal prompt and grid background
- Nav is monospace and sharp
- Cards have sharp corners
- Skill tags look like code
- Contact shows terminal-style links
- Everything is dark themed
