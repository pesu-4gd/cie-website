Got it 👍 — you’ll want a **`PROJECT_RULES.md`** that sets the ground rules for your coding agent (and even for human collaborators later). This will act like a **playbook** that ensures consistency across phases, pages, and features.

Here’s a draft for you:

---

# 🚀 PROJECT\_RULES.md

## 📌 Project Overview

This project is the **CIE Website Redesign (2025)**.
The goal is to create a **modern, responsive, student-friendly website** that highlights **Students, Industry, Alumni, and Core CIE content**, while staying consistent with **PES University branding**.

---

## 🏗️ Tech Stack Rules

* Framework: **Next.js (App Router preferred)**
* Styling: **TailwindCSS**
* Component Library: **shadcn/ui**
* Icons: **lucide-react**
* Animations: **Framer Motion**
* Charts/Graphs: **recharts** (if required)
* Fonts & Colors: Must align with **PES branding** (logos provided), but styled for **youth appeal (17–22 yrs)**

---

## 🎨 Design Rules

* Modern, vibrant, minimal — avoid clutter.
* Consistent use of **rounded corners, shadows, and whitespace**.
* Headings: Bold, clean sans-serif.
* Buttons: Rounded, vibrant PES blue with hover animations.
* Cards: Always use **consistent padding, shadow, and hover effect**.
* **References for UI inspiration**:

  * [wazokucrowd.com](https://www.wazokucrowd.com/) → collaboration layouts
  * [cfe.umich.edu](https://cfe.umich.edu/) → event calendar & clean design
  * [unstop.com](https://unstop.com) → competitions + student programs
  * [YouTube Video Reference](https://www.youtube.com/watch?v=1NLSvaGTGP8&t=89s) → dynamic layouts

---

## 📑 Page & Content Rules

### Global Navigation

* Navbar: **Students | Industry | Alumni | More**
* Footer: PES branding, social links, quick links

### Home Page

* Hero with intro, mission, vision
* CIE Ignite highlight
* Recent updates (news cards)
* Quick links to sections

### Students Section

* Programs, Events, Resources, Projects, Mentorship, Funding, Clubs, FAQs
* Layout inspired by **unstop.com** (for competitions + programs)

### Industry Section

* About, Collaborations, Jobs, Competitions, Events, Success Stories, Contact
* Layout inspired by **wazokucrowd.com**

### Alumni Section

* Welcome, News, Stay Connected, Give Back, Resources, Directory
* Directory = searchable + paginated

### Core Pages (More)

* About, Research & Publications, Contact, FAQs, Policies, Careers

---

## ⚙️ Functional Rules

* **Event Calendar**: Interactive, JSON-driven, styled like cfe.umich.edu
* **Job Posting System**: CRUD for job listings (inspired by wazokucrowd.com)
* **Search**: Global search for site content
* **Forms**: Use shadcn/ui forms (contact, registration, submissions)
* **Alumni Directory**: Filterable + paginated list of alumni

---

## 🚦 Development Workflow Rules

1. **Phase 1 – Setup**: Scaffold Next.js, Tailwind, Navbar, Footer
2. **Phase 2 – Design System**: Create global styles, buttons, cards, typography
3. **Phase 3 – Page Content**: Build each page **one at a time**, using sitemap
4. **Phase 4 – Functional Modules**: Event calendar, job portal, forms, search
5. **Phase 5 – Integration & Testing**: Replace placeholders, SEO, responsiveness, performance testing

---

## 📂 File & Folder Rules

* `/app` → Next.js pages & routes
* `/components` → Shared UI components
* `/public/assets` → Logos, images, icons
* `/lib` → Utility functions (e.g., fetching events, job posts)
* `/data` → JSON files for placeholder data
* `/docs/reference-screenshots` → Reference screenshots captured during development (not shipped to production)

---

## ✅ General Guidelines

* Always use **dummy JSON data** until real content is provided.
* Always keep pages **responsive (mobile-first)**.
* Keep **SEO-friendly tags** on all pages.
* Avoid inline styles → always use **Tailwind classes**.
* Use **consistent naming** for components (e.g., `EventCard.tsx`, `ProgramCard.tsx`).

---

