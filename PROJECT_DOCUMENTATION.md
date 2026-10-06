# Chakwise Landing Page – Project Documentation

A high-performance, pixel-precise recreation of the **Chakwise** luxury investment advisory platform built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Project Overview & Philosophy

The project represents a digital identity for an investment advisory brand operating in Dubai, Abu Dhabi, and Ras Al Khaimah.
The design ethos blends:
* **High-End Luxury & Institutional Trust**: Deep ink/navy palettes, subtle gold borders, and radial ambient glows.
* **Classical & Contemporary Typography**: `Cinzel` for Roman grandeur, `Cormorant Garamond` for editorial elegance, and `Inter` for clarity.
* **Separation of Concerns**: Strict decoupling of visual presentation (components) from content schemas (data & types).

---

## 2. Technology Stack & Tools

| Technology | Version / Tooling | Purpose & Rationale |
| :--- | :--- | :--- |
| **Next.js** | `16.3.8` (App Router) | High-performance React framework with server rendering, route optimization, and built-in font/image pipeline. |
| **React** | `19.2.8` | Component lifecycle, modern hooks, and interactive UI states. |
| **TypeScript** | `^5.0` | End-to-end type safety across content models, icon definitions, and component props. |
| **Tailwind CSS** | `^4.0` | Utility-first styling integrated with CSS `@theme` variables for quick layout scaffolding. |
| **next/font** | Google Fonts | Zero-layout-shift font optimization for `Cinzel`, `Cormorant Garamond`, and `Inter`. |
| **ESLint** | `^9.0` (flat config) | Code quality, consistency, and a11y compliance. |

---

## 3. Folder Structure

The project follows a scalable, feature-first structure:

```text
chakwise-nextjs-sathish/
├── public/
│   ├── images/
│   │   ├── blogs/              # Article covers (Dubai real estate, Ramhan Island, etc.)
│   │   └── media/              # Social media covers (Abu Dhabi video, LinkedIn, Instagram)
│   ├── gallery.jpg             # Hero background asset
│   ├── logo.png                # Brand logo
│   └── portrait.jpg            # Advisor portrait
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css         # Design tokens, variables, and custom component styles
│   │   ├── layout.tsx          # Root layout, Google font setup, and metadata
│   │   └── page.tsx            # Home page composition aggregating section components
│   │
│   ├── components/
│   │   ├── common/             # Reusable base elements
│   │   │   ├── Icon.tsx        # Centralized SVG icon system (social, contact, indicators)
│   │   │   └── index.ts
│   │   │
│   │   └── home/               # Section-specific components
│   │       ├── HeroSection.tsx         # Hero header, brand logo, tagline & portrait
│   │       ├── PhilosophySection.tsx   # Truths, combine pillars, and Quiet Cards
│   │       ├── ApproachSection.tsx     # Advisory philosophy & step-by-step methodology
│   │       ├── BeliefsSection.tsx      # 5 signature investment beliefs
│   │       ├── InsightsSection.tsx     # Curated articles, insights & reading times
│   │       ├── SocialMediaSection.tsx  # YouTube, LinkedIn, & Instagram media cards
│   │       ├── ConnectSection.tsx      # Social channels (row 1) & contact info (row 2)
│   │       └── index.ts                # Clean barrel export
│   │
│   ├── data/
│   │   └── home/               # Decoupled mock data & structured content
│   │       ├── hero.ts
│   │       ├── philosophy.ts
│   │       ├── approach.ts
│   │       ├── beliefs.ts
│   │       ├── insights.ts
│   │       ├── social.ts
│   │       └── connect.ts
│   │
│   └── types/
│       └── content/            # TypeScript data contracts & models
│           └── index.ts
│
├── eslint.config.mjs           # ESLint 9 configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and project scripts
├── postcss.config.mjs          # PostCSS processor for Tailwind v4
└── tsconfig.json               # TypeScript compiler rules
```

---

## 4. Design System & Styling Architecture

### A. Color Palette (`src/app/globals.css`)
```css
:root {
  --navy: #05121f;         /* Primary container tone */
  --navy-2: #071927;       /* Card background */
  --ink: #020810;          /* Deep page canvas */
  --gold: #d59a3d;         /* Primary luxury gold accent */
  --gold-2: #f0bd62;       /* Highlight & hover gold */
  --gold-deep: #9b6724;    /* Border & shadow gold */
  --text: #f8f4ec;         /* High-contrast ivory text */
  --muted: #d7d5d0;        /* Secondary reading text */
  --line: #d59a3d7a;       /* Section accent rules */
}
```

### B. Typography Hierarchy
1. **`Cinzel`** (`--font-cinzel`):
   * Used for brand tags, section labels, category headers, and Roman title accents.
2. **`Cormorant Garamond`** (`--font-cormorant`):
   * Used for main headings (`H1`, `H2`, `H3`), quotes, and reflective editorial statements.
3. **`Inter`** (`--font-sans`):
   * Used for body copy, paragraphs, handles, timestamps, and button labels to ensure maximum legibility across screen densities.

### C. Visual Motifs
* **Section Divider Rules**: `.section-title-line` frames headings with symmetrical 1px gold rules (`────────── TITLE ──────────`).
* **Glassmorphism & Cards**: Translucent backgrounds (`rgba(7, 22, 35, 0.75)`), subtle borders (`1px solid rgba(213, 154, 61, 0.25)`), 12px rounded corners, and gentle lift on hover (`transform: translateY(-4px)`).
* **Radial Ambient Glows**: Subdued radial gold highlights (`rgba(213, 154, 61, 0.08)`) simulating warm gallery lighting.

---

## 5. Component Breakdown & Functional Role

### 1. `HeroSection`
* Highlights the core thesis: *"Where emotional intelligence meets investment intelligence"*.
* Displays advisor portrait with soft contrast blend and action CTA (`BOOK A CONSULTATION`).

### 2. `PhilosophySection`
* Presents behavioral truths (e.g., *"Data without psychology creates panic"*).
* Highlights the two core branches: **Quiet Rebuild** and **Quiet Assets**.

### 3. `ApproachSection`
* Breaks down the 5 advisory tenets: Research, Empathy, Strategy, Discipline, Wealth.

### 4. `BeliefsSection`
* 5 signature cards detailing core investor principles (calm decisions, real estate noise filtering, emotional resilience).

### 5. `InsightsSection`
* Interactive cards displaying curated articles with reading times, tags, and thumbnails.

### 6. `SocialMediaSection`
* Groups multimedia content into three distinct subsections:
  1. **MY YOUTUBE VIDEOS** (video thumbnails with center play badge).
  2. **LINKEDIN HIGHLIGHTS** (post excerpts with timestamp and category).
  3. **INSTAGRAM STORIES** (visual story preview).
* Uses `unoptimized` and `priority` on image containers with fixed aspect ratios (`16/9`) to eliminate image collapse and latency.

### 7. `ConnectSection`
* **Row 1 (Social)**: 4 branded badges for LinkedIn, YouTube, Instagram, and TikTok with user handles.
* **Row 2 (Direct Contact)**: Website, email, phone number, and location (`Dubai, UAE`) with gold glyphs and vertical separator rules.

---

## 6. Architectural Decisions & Why

1. **Why Decouple Data from UI?**
   * Keeping content in `src/data/home/*` allows modifying text, handles, or links without touching TSX templates or risking layout breaks.
2. **Why Single SVG Icon Component (`Icon.tsx`)?**
   * Eliminates heavy third-party icon bundle dependencies.
   * Keeps SVG paths vector-crisp, tree-shakable, and fully stylable via Tailwind colors (`text-[var(--gold)]`).
3. **Why Prevent Default on Test Links?**
   * User requirement during development: all card links and CTA buttons have `onClick={(e) => e.preventDefault()}` so that stakeholders can click through and inspect visual hover states without navigating away from the test preview.
4. **Why Tailwind v4 + Custom Classes?**
   * Complex typography rules, gold gradient borders, and multi-layered radial overlays are cleaner to maintain in CSS utility classes (`globals.css`), while Tailwind handles responsive grid layouts.

---

## 7. Development & Validation Scripts

* **Development Server**: `npm run dev` (starts on `http://localhost:3000`)
* **Type Checking**: `npx tsc --noEmit` (ensures 0 TypeScript compiler issues)
* **Linting**: `npm run lint` (runs ESLint checks)
