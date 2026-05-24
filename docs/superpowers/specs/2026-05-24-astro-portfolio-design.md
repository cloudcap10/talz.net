# Astro Portfolio Redesign

## Scope
Convert talz.net portfolio (hero, projects, about, contact) from Next.js to Astro with a react.gg-inspired visual redesign. PickModel (pickmodel.uk) stays as-is.

## Design Direction
- **Framework:** Astro v5 (static site, zero JS by default)
- **Theme:** Light mode — warm cream background (#f6f1d8), amber accent (#e8a838)
- **Typography:** Bold all-caps headings, clean sans-serif body, JetBrains Mono for terminal accents
- **Visual style:** Chunky pill buttons with drop-shadow, playful terminal widget decorations, generous whitespace
- **Structure:** Single-page scroll: Nav → Hero → Projects → About → Contact

## Architecture
- Static site generation (no SSR adapter needed)
- Tailwind v4 for styling (carried over from current setup)
- Astro `.astro` components for all UI
- Minimal client JS — one `astro-island` for live GitHub repo count
- Astro View Transitions for smooth navigation

## Content Sections
1. **Nav** — sticky top bar with logo + links
2. **Hero** — bold all-caps heading, terminal widget decoration, CTA buttons
3. **Projects** — card grid of 7 open-source projects
4. **About** — skills display (refined from YAML-block to clean section)
5. **Contact** — email, GitHub, LinkedIn links
