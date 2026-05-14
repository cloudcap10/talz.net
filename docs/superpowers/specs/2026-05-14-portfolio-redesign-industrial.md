# Portfolio Redesign — Industrial/Utilitarian

**Date:** 2026-05-14
**Project:** talz.net (Next.js portfolio site)
**Framework:** Keep Next.js (no migration)

## Design Direction: "The Network Engineer's Terminal"

The site should feel like a tool, not a brochure. Structured, exposed, unapologetically technical. Every element looks intentional — like config blocks, terminal output, or network diagrams.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#12110f` | Page background |
| `--bg-surface` | `#1c1a18` | Section alternation |
| `--bg-card` | `#22201d` | Cards / containers |
| `--bg-card-hover` | `#282522` | Card hover state |
| `--border` | `#2e2b28` | Borders / dividers |
| `--border-subtle` | `#242220` | Subtle dividers |
| `--text` | `#e8e4e1` | Primary text (warm off-white) |
| `--text-muted` | `#8a8480` | Secondary text |
| `--text-faint` | `#5e5a55` | Lowest priority text |
| `--accent` | `#cc5c33` | Rust/copper accent |
| `--accent-dim` | `#a84527` | Darker accent |
| `--accent-glow` | `rgba(204, 92, 51, 0.12)` | Subtle accent glow |

Dark mode only. No light mode toggle — commit to the industrial terminal vibe.

Colors are slightly warm-toned (not neutral blue-grey) to match the rust/copper accent.

## Typography

- **Headings/display:** JetBrains Mono (bold 700, monospace) — technical authority, feels like CLI
- **Body:** Onest (or Inter as fallback) — clean sans for readability, contrasts monospace
- **Stats/labels:** JetBrains Mono (medium 500) — terminal-style data display
- **Code tags:** JetBrains Mono (regular 400)

Load JetBrains Mono from Google Fonts (or next/font). Onest is available on Google Fonts.

## Layout Guidelines

- **Sharp corners everywhere** — no `border-radius` on cards, buttons, or containers
- **Thin borders** — 1px `var(--border)` on cards and containers
- **Grid-based background** — subtle crosshatch/dot grid pattern on hero section
- **Monospace $ prompt** on hero text to introduce terminal motif
- **Stats as bordered terminal blocks** — not rounded cards
- **Code-style tags** — tech stack tags look like `[ keyword ]` inline code
- **Dotted separators** between sections instead of solid lines

## Section-by-Section Design

### Nav
- Low-profile, dark background matching page
- Logo left, links right in JetBrains Mono
- Hover: color shift to accent, no decorative effects
- Social icons in muted tone, hover to accent
- Sticky with backdrop blur, very subtle bottom border

### Hero
- `$ whoami` / `$ cat profile` style prompt before name
- Name: bold monospace with rust gradient
- Subtitle: "Network Engineer who ships software" in body font
- Bio in muted body text
- Stats displayed as bordered monospace blocks (like terminal `df` output)
- Background: subtle dot-grid pattern (like graph paper)
- CTA buttons: sharp-edged, one filled accent, one bordered
- Social links as borderless text links

### Projects
- `## Projects` heading in monospace
- Cards: sharp corners, thin border, no border-radius
- Project icon in a small square container (not rounded)
- Name in bold monospace
- Description in body text
- Tech tags as `[ tag ]` inline monospace
- Footer: GitHub link + Live link
- Hover: border brightens slightly, no shadow/glow

### About
- `## About` heading in monospace
- Skills grouped by category in bordered containers
- Category headers in monospace with dot prefix
- Skills displayed as `[ skill ]` inline tags
- Brief bio text in body font

### Contact
- `## Contact` heading in monospace
- Email displayed as `$ mail cloning@talz.net`
- LinkedIn as `$ linkedin /in/joven-talasan`
- Simple centered layout, no decorative card

### Footer
- "Built by Joven Talasan · talz.net" in muted monospace
- Thin top border only

## PickModel Pages

PickModel pages (/about, /model/[id], /calculator) retain the same dark palette but keep their own brand identity since they're a separate tool (pickmodel.uk). No structural changes to those pages.

## Implementation Notes

- Update CSS custom properties in `globals.css` with new palette
- Replace rounded corners (`rounded-*` classes) with sharp equivalents or remove border-radius
- Update `PortfolioHero.tsx` — add prompt prefix to text, grid background
- Update `ProjectCard.tsx` — remove border-radius, adjust spacing
- Update `AboutSection.tsx` — restructure skills display
- Update `ContactSection.tsx` — terminal-style contact display
- Update `Nav.tsx` — monospace links
- Add JetBrains Mono + Onest to `layout.tsx`
- Remove `framer-motion` if simplifying or keep for subtle animations (TBD — keeping it for now for scroll-triggered reveals)
