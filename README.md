# Girish Lade - Personal Portfolio Website

A minimalist, high-end editorial dark portfolio website for **Girish Balaso Lade** (UI/UX Designer, Full-Stack Developer, and Founder of LadeStack).

Faithfully reconstructed from the minimalist dark editorial reference template, using React, TypeScript, Vite, React Router, and Framer Motion.

## Design System & Foundations

- **Background:** Deep flat near-black (`#0a0a09`)
- **Primary Text:** Crisp off-white (`#ffffff`)
- **Secondary Text:** Muted cool gray (`#969696`)
- **Accent:** Pale blush pink (`#ffd9d9`)
- **Interactive Pill Surfaces:** Charcoal container (`#232323`)
- **Navigation:** Bottom-centered floating pill navigation with Framer Motion shared layout active indicator
- **Typography:** Modern clean sans-serif with large editorial uppercase display headings and generous negative space
- **Motion:** Framer Motion spring and ease-driven route transitions, scroll reveals, staggered child entrances, and subtle card interactions

## Architecture & Routes

| Route | Purpose | Key Content |
|---|---|---|
| `/` | Homepage | Large editorial hero, Selected Work 2-column staggered grid, closing CTA, footer |
| `/about` | About Girish Lade | Editorial story, 3-step process (Define, Design & Build, Verify & Refine), visual gallery band, Background and Focus matrices |
| `/projects` | Projects Catalog | Full product catalog of 9 browser-first tools and experiments |
| `/projects/:slug` | Project Detail | In-depth technical architecture, role, status, 3 verified use cases, live links, and repository access |
| `/skills` | Skills & Capabilities | Structured capabilities across Frontend, UI/UX, Browser Computing, Document Systems, Backend, and Developer Workflow |
| `/contact` | Contact Page | Direct links (Email, LinkedIn, GitHub, Instagram, CodePen) and collaboration details |
| `/404` | Not Found Experience | Minimal centered blush pink 404, message, and Go Home action |

## Featured Projects

1. **GB Coder:** Browser-based IDE and code studio (Monaco Editor, WebContainers)
2. **LS PDF:** Privacy-first browser PDF utility suite (PDF.js, pdf-lib, Web Workers)
3. **MD2PDF:** Markdown publishing and documentation book builder (Astro, KaTeX, GFM)
4. **Bharat Land Converter:** Region-aware Indian land area unit converter
5. **Swift Resume:** Browser-based structured resume builder with live preview
6. **LS Image Compressor:** Client-side privacy-conscious image optimizer
7. **LadeStack:** Developer ecosystem and central brand platform
8. **GameHub:** Instant-play browser games portal (33 repository-documented games)
9. **LadeStack Drive:** File management and storage workflow exploration (verification pending)

## Getting Started

### Development
```bash
npm install
npm run dev
```

### Typecheck & Build
```bash
npm run typecheck
npm run build
```

### Preview
```bash
npm run preview
```

### Automated Tests
```bash
python tests/accessibility_test.py
python tests/responsive_test.py
```
