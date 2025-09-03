# CIE Website 2025 — Phase‑wise Build Plan

This plan operationalizes the sitemap and requirements document and aligns with the project rules, so we can build the site in clear, testable phases with dummy JSON first and real content later.

Sources guiding this plan:
- Requirements: Website Sitemap and Requirement Document CIE – 2025.pdf
- Rules: .trae/rules/project_rules.md

Scope pillars (from rules): Students, Industry, Alumni, and Core pages, consistent with PES branding. Tech stack: Next.js (App Router), TailwindCSS, shadcn/ui, lucide-react, Framer Motion, recharts (if needed).


## Phase 0 — Discovery & Setup Readiness
- Confirm sitemap and page inventory from the PDF.
- Collect PES brand assets (logos, colors, fonts). Place under /public/assets/branding.
- Define KPIs: performance (LCP < 2.5s), accessibility (WCAG AA), SEO (core pages indexed).
- Create content placeholders (Google Docs/Sheets or JSON drafts for events, jobs, alumni, news).
- Decide hosting target (Vercel/Netlify/On-prem) and env strategy (no secrets committed).

Deliverables:
- Agreed sitemap check-list, brand assets in repo, acceptance criteria per section documented.


## Phase 1 — Project Scaffolding
- Initialize Next.js (App Router, TypeScript) and TailwindCSS.
- Install shadcn/ui, lucide-react, framer-motion, recharts (optional).
- Configure ESLint + Prettier + Husky (pre-commit: lint, type-check).
- Set up base directory structure:
  - /app (routes)
  - /components (UI + layout)
  - /data (JSON placeholders)
  - /lib (utilities)
  - /public/assets (logos, images)
  - /docs/reference-screenshots (design references you capture)
- Add global layout, font loading, theme colors.

Acceptance:
- App builds and starts; Tailwind classes render; CI lint/type-check pass.


## Phase 2 — Design System (Tokens & Primitives)
- Define color tokens aligned with PES branding; create Tailwind config scales.
- Typography scale and utilities; heading and body components.
- Spacing, radii, shadows; motion tokens and standard animation utilities.
- shadcn base components curated and themed: Button, Card, Input, Select, Tabs, Badge, Dialog, Sheet, Tooltip, Pagination, Table.
- Layout primitives: Container, Section, Grid, PageHeader, EmptyState.

Acceptance:
- Story-like demo page /design showing components and states.


## Phase 3 — Global Scaffolding
- Responsive Navbar with primary nav: Students | Industry | Alumni | More.
- Footer with PES branding, socials, quick links.
- SEO defaults: metadata, OG tags, robots, sitemap placeholder.
- 404/500 pages, loading states, not-found boundaries.
- Route skeletons for all pages with empty states.

Acceptance:
- Navigation works on mobile/desktop; all routes exist with placeholders.


## Phase 4 — Home Page
- Hero: intro, mission, vision; highlight CIE Ignite.
- Recent updates/news cards (JSON-driven /data/news.json).
- Quick links to Students, Industry, Alumni.
- Subtle scroll/motion effects and accessible focus order.

Acceptance:
- Lighthouse perf ≥ 90 on home (desktop), a11y ≥ 95.


## Phase 5 — Students Section
- Programs overview and details (JSON-driven /data/programs.json).
- Events listing + calendar view.
- Resources, Projects, Mentorship, Funding, Clubs, FAQs.
- Card grids inspired by competition/program layouts.

Acceptance:
- Mobile-first; filter/sort where relevant; dummy data rendering end-to-end.


## Phase 6 — Industry Section
- About and Collaboration models.
- Jobs board (list + detail) using /data/jobs.json (CRUD later).
- Competitions and Events listings; Success Stories carousel/grid; Contact form.

Acceptance:
- Jobs list searchable and filterable; forms validate and submit to mock handler.


## Phase 7 — Alumni Section
- Alumni Welcome, News, Stay Connected, Give Back, Resources.
- Alumni Directory: searchable + filterable + paginated (client-side on JSON).

Acceptance:
- Directory handles 500+ items smoothly with pagination and filters.


## Phase 8 — Core Pages (More)
- About, Research & Publications, Contact, FAQs, Policies, Careers.
- Reuse design system components; ensure SEO metadata and breadcrumbs.

Acceptance:
- All core pages responsive with proper landmarks and headings order.


## Phase 9 — Functional Modules (Deep Dives)
- Event Calendar: interactive month/week list, JSON-backed, accessible.
- Jobs Posting System: JSON adapter first; abstract a store for later admin.
- Global Search: simple client search (title/tags/path) with highlight.
- Forms: shadcn/ui + react-hook-form; client-side validation schemas.
- Alumni Directory utilities: indexing, filter predicates, pagination helpers.

Acceptance:
- Each module has unit tests for core logic and renders sample data.


## Phase 10 — Content Integration
- Replace dummy JSON selectively as content becomes available.
- Image optimization (next/image), alt text, captions.
- Rich content blocks (MDX or JSON) for long-form sections.

Acceptance:
- Content parity with provided materials; no placeholder text on public pages.


## Phase 11 — Quality, Accessibility, SEO, Performance
- A11y audit (keyboard, screen reader, color contrast); fix issues.
- Performance passes: code-splitting, image sizes, prefetching, memoization.
- SEO: title/description per route, canonical, sitemap.xml, robots.txt, structured data where applicable.
- Cross-browser/device testing matrix; fix layout edge cases.

Acceptance:
- Lighthouse PWA/perf/a11y/best-practices/SEO ≥ targets; no console errors.


## Phase 12 — Release & Handover
- Environment configs for deployment target; build artifacts verified.
- Monitoring hooks (e.g., simple web vitals logging).
- Handover notes: commands, data locations, how to add content.

Acceptance:
- Deployed preview matches acceptance; rollback plan documented.


---

## Directory & Data Conventions

- Routes live in /app with nested route segments and metadata.
- Shared UI in /components; shared logic in /lib.
- Placeholder JSON goes in /data; replace progressively.
- Assets (logos, static) in /public/assets.
- Reference screenshots you capture go in /docs/reference-screenshots and are NOT shipped to production bundles.

Suggested data files (initial):
- /data/events.json
- /data/jobs.json
- /data/alumni.json
- /data/news.json
- /data/programs.json


## JSON Shapes (initial drafts)

events.json (calendar + list):
[
  {
    "id": "evt-2025-ignite",
    "title": "CIE Ignite 2025",
    "start": "2025-02-15T10:00:00+05:30",
    "end": "2025-02-15T18:00:00+05:30",
    "location": "PES University",
    "tags": ["students", "competition"],
    "coverImage": "/assets/events/ignite-2025.jpg",
    "cta": { "label": "Register", "href": "/events/ignite/register" }
  }
]

jobs.json (jobs board):
[
  {
    "id": "job-abc-001",
    "title": "Software Engineering Intern",
    "company": "Partner Co.",
    "location": "Bengaluru, IN",
    "type": "Internship",
    "postedAt": "2025-01-20",
    "tags": ["frontend", "react"],
    "applyUrl": "https://example.com/apply",
    "description": "Short role description..."
  }
]

alumni.json (directory):
[
  {
    "id": "alum-0001",
    "name": "Jane Doe",
    "gradYear": 2022,
    "program": "CSE",
    "company": "TechCorp",
    "role": "SWE",
    "location": "Bengaluru",
    "skills": ["React", "Node.js"],
    "avatar": "/assets/alumni/jane.jpg",
    "linkedin": "https://linkedin.com/in/janedoe"
  }
]

news.json (home updates):
[
  {
    "id": "news-001",
    "title": "CIE Ignite Applications Open",
    "date": "2025-01-10",
    "summary": "Applications for Ignite 2025 are now open...",
    "href": "/news/ignite-apps-open"
  }
]

programs.json:
[
  {
    "id": "prog-ignite",
    "name": "CIE Ignite",
    "summary": "Flagship innovation program",
    "cta": { "label": "Learn More", "href": "/students/programs/ignite" }
  }
]


## Screenshots Workflow (for your references)

Where to save:
- Place screenshots you capture under /docs/reference-screenshots.
- Optional subfolders by section: /docs/reference-screenshots/home, /students, /industry, /alumni, /core.

Naming:
- <section>-<page>-<variant>-v1.png (e.g., students-programs-grid-v1.png)
- If you iterate, bump the version (v2, v3...). Keep brief notes in a README inside the folder if helpful.

Usage:
- Use screenshots to validate layout and spacing when building components.
- Do not ship these assets; they are for build-time reference only.


## Definition of Done — per section

- Visual: Matches design references proportionally and spacing-wise.
- Responsive: Works at 360px, 768px, 1024px, 1280px+.
- A11y: Keyboard navigable, labels present, color contrast ≥ AA.
- Perf: Avoid layout shift; images sized; code-split large modules.
- SEO: Title/description set; headings hierarchy correct; canonical if needed.


## Next Actions

1) Create repo scaffolding (Phase 1) and commit base.
2) Build Phase 2 design system demo page.
3) Lay down Phase 3 scaffolding with all route placeholders.
4) Start Home (Phase 4) using dummy JSON.
5) Parallel: prepare initial JSON in /data based on shapes above.