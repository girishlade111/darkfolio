# Girish Lade: Personal Portfolio & Engineering Showcase

Production-grade, minimalist dark editorial portfolio website for Girish Balaso Lade (UI/UX Designer, Full-Stack Developer, and Founder of LadeStack).

Reconstructed from high-end minimalist dark editorial visual design principles and implemented with React 19, TypeScript, Vite, React Router v7, and Framer Motion v12.

---

## Table of Contents

- [Overview](#overview)
- [Design System & Aesthetics](#design-system--aesthetics)
- [Tech Stack](#tech-stack)
- [Project Architecture & Routes](#project-architecture--routes)
- [Featured Products & Systems](#featured-products--systems)
- [Responsive Engineering](#responsive-engineering)
- [Accessibility & Quality Engineering](#accessibility--quality-engineering)
- [Local Development & Setup](#local-development--setup)
- [Verification & Automated Tests](#verification--automated-tests)
- [Author & Contact](#author--contact)

---

## Overview

This repository houses the personal portfolio and software showcase for Girish Balaso Lade. The site is engineered to deliver an editorial, content-focused dark aesthetic with high typography discipline, generous negative space, asymmetric editorial compositions, and fluid motion choreography.

Key attributes:
- Deep near-black canvas (`#0a0a09`) with high-contrast off-white type (`#ffffff`).
- Restrained pale blush pink accent (`#ffd9d9`) for focal interactive elements.
- Fluid typography using mathematical `clamp()` functions for continuous scaling across all viewport widths.
- Dedicated multi-page routing with deep project detail architectures.
- Bottom-docked floating pill navigation with spring-animated active indicator pill.
- Zero horizontal layout shift or overflow across viewports from 320px to 1920px.

---

## Design System & Aesthetics

The design tokens are centralized in `src/styles/tokens.css` and applied across the layout tree:

### Color Palette
- Background: `#0a0a09` (flat near-black)
- Primary Text: `#ffffff` (crisp white)
- Secondary Text: `#969696` (cool muted gray)
- Muted Borders: `rgba(255, 255, 255, 0.12)`
- Accent Tint: `#ffd9d9` (pale blush pink)
- Accent Text: `#0a0a09` (high-contrast black on pink pill)
- Floating Nav Surface: `#232323` (pill container background)

### Typography & Proportions
- Display Heading: `clamp(2.25rem, 6.4vw, 5.75rem)` (tight uppercase tracking)
- Section Heading: `clamp(1.75rem, 4vw, 3.25rem)`
- Body Typography: `clamp(0.9375rem, 1.1vw, 1.125rem)` (line-height 1.6)
- Page Gutters: `clamp(16px, 5.2vw, 84px)`
- Section Vertical Rhythm: `clamp(60px, 10vw, 160px)`

---

## Tech Stack

- Framework: React 19
- Language: TypeScript 5.8
- Bundler & Tooling: Vite 6.4
- Router: React Router v7 (Client-side multi-page routing)
- Animation: Framer Motion v12 (shared layout springs, page transitions, scroll triggers)
- Icons: Clean inline SVG vectors (currentColor, stroke-width 1.5)
- Automated Testing: Playwright (Python test runner for responsive & accessibility gates)

---

## Project Architecture & Routes

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Minimal brand wordmark and current time indicator
│   │   ├── Footer.tsx           # 4-column structured footer with social links & copyright
│   │   └── PageShell.tsx        # Framer Motion page wrapper and layout container
│   ├── navigation/
│   │   └── FloatingNav.tsx      # Bottom-centered pill navigation with active layout spring
│   ├── projects/
│   │   ├── ProjectCard.tsx      # Editorial project card with stagger styling
│   │   ├── ProjectGrid.tsx      # 2-column asymmetric project grid
│   │   └── ProjectVisual.tsx    # Bespoke SVG abstract visuals matching editorial artwork
│   └── ui/
│       ├── ArrowLink.tsx        # High-contrast action link with directional arrow
│       ├── Button.tsx           # Pill button component
│       ├── EditorialArt.tsx     # Hero and about section geometric editorial illustrations
│       └── Tag.tsx              # Minimalist metadata chips
├── data/
│   ├── projects.ts              # Detailed project records, architectures, metrics, and live links
│   └── profile.ts               # Girish Lade verified bio, career history, and contact metadata
├── pages/
│   ├── Home.tsx                 # Editorial hero, selected work grid, and closing CTA
│   ├── About.tsx                # Bio story, 3-step execution process, background & focus
│   ├── Projects.tsx             # Complete catalog of 9 products and tools
│   ├── ProjectDetail.tsx        # Deep-dive architecture view per project slug
│   ├── Skills.tsx               # Matrix of technical capabilities and engineering competencies
│   ├── Contact.tsx              # Direct contact links, availability notice, and reach-out hero
│   └── NotFound.tsx             # 404 page with minimal centered layout
├── styles/
│   ├── tokens.css               # Central design token definitions
│   └── main.css                 # Global CSS reset, fluid utilities, and responsive breakpoints
├── App.tsx                      # Route tree declaration and scroll-to-top handler
└── main.tsx                     # React application mount
```

### Route Index

1. `/`: Home: Editorial statement, Selected Work grid, closing invitation, and footer.
2. `/about`: About: Designer and engineer narrative, 3-step operating methodology, visual gallery, career milestones, and engineering focus areas.
3. `/projects`: Projects Catalog: Complete overview of all 9 browser-first products and developer utilities.
4. `/projects/:slug`: Project Detail: Technical architecture breakdown, verified capabilities, engineering metrics, live demo, and source code links.
5. `/skills`: Skills & Capabilities: Structured domain capabilities across Frontend, UI/UX, Browser Computing, Document Engineering, and Backend.
6. `/contact`: Contact: Direct contact coordinates (Email, LinkedIn, GitHub, Instagram, CodePen).
7. `/404`: NotFound: Editorial 404 experience with immediate home navigation.

---

## Featured Products & Systems

1. GB Coder: Browser-based IDE and code studio powered by Monaco Editor, WebContainers, and virtual file systems.
2. LS PDF: Privacy-first browser PDF utility suite utilizing PDF.js, pdf-lib, and Web Workers for zero-server document manipulation.
3. MD2PDF: Markdown publishing and documentation book builder with Astro, KaTeX math typesetting, and automated pagination.
4. Bharat Land Converter: Region-aware Indian land area unit converter covering Guntha, Bigha, Acre, Hectare, and regional variations.
5. Swift Resume: Browser-based structured resume builder with live reactive preview and clean PDF export.
6. LS Image Compressor: Client-side privacy-conscious image optimizer using Canvas API and Web Workers.
7. LadeStack: Central developer ecosystem, technical portal, and open-source tooling hub.
8. GameHub: Instant-play browser games portal compiling 33 standalone web games.
9. LadeStack Drive: Experimental client-orchestrated file management and cloud storage workflow interface.

---

## Responsive Engineering

The website is engineered mobile-first and audited across 17 distinct viewports:
- Mobile Phones: 320px, 360px, 375px, 390px, 412px, 430px, 480px
- Foldables & Small Tablets: 540px, 640px
- Tablets: 768px, 820px, 912px
- Desktops & Laptops: 1024px, 1280px, 1440px, 1600px, 1920px

Key responsive mechanisms:
- Fluid Spacing: Outer margins and vertical padding use CSS `clamp()` bound to viewport width.
- Dynamic Project Grid: Editorial 2-column offset grid active on viewports 720px and wider; collapses to single column on narrow screens.
- Adaptive Floating Navigation: Dynamic padding and font sizing at sub-360px screens with iOS safe-area inset protection (`env(safe-area-inset-bottom)`).
- Media-Conditioned Interactions: Hover transforms restricted to `@media (hover: hover) and (pointer: fine)`, preventing sticky hover states on mobile touch displays.
- Zero Horizontal Overflow: All text containers enforce `overflow-wrap: break-word` and `min-width: 0` on flex/grid items to eliminate overflow.

---

## Accessibility & Quality Engineering

- Keyboard Navigation: Full tab-stop sequence with visible focus rings (`outline: 2px solid #ffd9d9`).
- Semantic Hierarchy: Verified single `h1` per route, structured landmarks (`header`, `main`, `footer`, `nav`).
- Touch Targets: Interactive controls provide a minimum 40px hit area on touch viewports.
- Reduced Motion: Full adherence to `prefers-reduced-motion: reduce`, dropping transition durations to 0.01ms for vestibular safety.
- Zero Emoji Doctrine: Clean vector icons and unambiguous technical copy without visual noise or informal glyphs.

---

## Local Development & Setup

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation
```bash
git clone https://github.com/girishlade111/darkfolio.git
cd darkfolio
npm install
```

### Development Server
```bash
npm run dev
```
Starts local Vite dev server at `http://localhost:5173/`.

### Production Build & Typecheck
```bash
npm run typecheck
npm run build
```
Generates production build in `dist/`.

### Production Preview
```bash
npm run preview
```
Serves production bundle at `http://localhost:4173/`.

---

## Verification & Automated Tests

Automated Playwright test scripts are included in `tests/`:

1. Responsive Multi-Viewport Audit:
   ```bash
   python tests/responsive_test.py
   ```
   Evaluates 17 viewports across all 7 routes (119 automated checks for document overflow).

2. Accessibility & Semantic Hierarchy Gate:
   ```bash
   python tests/accessibility_test.py
   ```
   Validates heading structure, keyboard tabbing, and reduced motion behavior.

---

## Author & Contact

**Girish Balaso Lade**
- Role: UI/UX Designer, Full-Stack Developer, Product Builder
- Founder: LadeStack
- Location: Pune, Maharashtra, India
- Email: admin@ladestack.in
- GitHub: [github.com/girishlade111](https://github.com/girishlade111)
- LinkedIn: [linkedin.com/in/girish-lade](https://www.linkedin.com/in/girish-lade)

---

## License

MIT License. Feel free to use this architecture as a foundation for your own projects.
