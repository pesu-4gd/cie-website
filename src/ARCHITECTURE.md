# 🏗️ CIE Website - Complete Rebuild Architecture

**Date**: October 22, 2025  
**Status**: 🚀 Starting Fresh Build in `src/`

---

## 📋 Architecture Overview

Building the entire CIE website with a **professional, scalable, and maintainable** structure in the `src/` folder.

### Design Principles
1. **Separation of Concerns** - Clear boundaries between pages, components, and logic
2. **Reusability** - Shared components, layouts, and utilities
3. **Type Safety** - Full TypeScript support
4. **Performance** - Optimized rendering and code splitting
5. **Maintainability** - Easy to understand and modify

---

## 🗂️ New Directory Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── (public)/                 # Public-facing pages group
│   │   ├── layout.tsx            # Public layout wrapper
│   │   ├── page.tsx              # Landing page (/)
│   │   ├── about/
│   │   ├── contact/
│   │   └── policies/
│   │
│   ├── (sections)/               # Main section pages
│   │   ├── students/
│   │   │   ├── layout.tsx        # Students section layout
│   │   │   ├── page.tsx          # Students hub
│   │   │   └── [subsection]/    # Dynamic routes
│   │   ├── alumni/
│   │   ├── industry/
│   │   └── inside-cie/
│   │
│   ├── admin/                    # Admin routes
│   ├── api/                      # API routes
│   └── layout.tsx                # Root layout
│
├── components/                   # React components
│   ├── sections/                 # Page sections
│   │   ├── landing/              # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── students/
│   │   ├── alumni/
│   │   └── industry/
│   │
│   ├── shared/                   # Shared components
│   │   ├── cards/
│   │   ├── buttons/
│   │   └── forms/
│   │
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── SectionLayouts.tsx
│   │
│   └── ui/                       # Base UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── hexagon-background.tsx
│       └── ...
│
├── features/                     # Feature-based modules
│   ├── landing/
│   │   ├── components/           # Feature-specific components
│   │   ├── hooks/                # Feature-specific hooks
│   │   └── constants.ts          # Feature constants
│   ├── students/
│   ├── alumni/
│   └── industry/
│
├── lib/                          # Utilities and helpers
│   ├── utils.ts
│   ├── constants.ts
│   ├── types.ts
│   └── hooks/
│
├── styles/                       # Global styles
│   ├── globals.css
│   └── themes/
│
├── data/                         # Static data
│   ├── landing/
│   ├── students/
│   └── alumni/
│
└── config/                       # Configuration
    ├── site.ts                   # Site metadata
    ├── navigation.ts             # Navigation structure
    └── routes.ts                 # Route definitions
```

---

## 🎯 Implementation Strategy

### Phase 1: Foundation ✅ Starting Now
1. Create core structure
2. Build landing page
3. Set up layouts and navigation
4. Implement design system

### Phase 2: Main Sections
1. Students section
2. Alumni section
3. Industry section
4. Inside CIE section

### Phase 3: Features & Content
1. Programs and events
2. Resources and documentation
3. Admin and API
4. Authentication

---

## 📄 Landing Page Structure

```tsx
src/app/(public)/page.tsx
├── HeroSection          # Main hero with hexagonal background
├── StatsSection         # Key statistics
├── MainSectionsGrid     # Students, Alumni, Industry, Inside CIE
├── FeaturesSection      # Key features and benefits
├── ProgramsHighlight    # Featured programs
├── TestimonialsSection  # Success stories
├── EventsSection        # Upcoming events
├── PartnersSection      # Partner logos
└── CTASection           # Call to action
```

---

## 🎨 Component Philosophy

### Atomic Design Pattern
1. **Atoms** - Basic UI elements (Button, Input, Badge)
2. **Molecules** - Simple component groups (Card, SearchBar)
3. **Organisms** - Complex components (Header, Footer, HeroSection)
4. **Templates** - Page layouts
5. **Pages** - Final pages

### Component Structure
```tsx
ComponentName/
├── index.tsx           # Main component
├── types.ts            # Component types
├── constants.ts        # Component constants
└── styles.module.css   # Component styles (if needed)
```

---

## 🔧 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CIE Design System
- **Animation**: Framer Motion
- **State**: React Hooks + Context
- **Forms**: React Hook Form
- **Icons**: Lucide React

---

## 📝 Naming Conventions

### Files
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase (e.g., `UserTypes.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

### Code
- **Components**: PascalCase (e.g., `<HeroSection />`)
- **Functions**: camelCase (e.g., `getUserData()`)
- **Variables**: camelCase (e.g., `userData`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_USERS`)
- **Types**: PascalCase (e.g., `UserData`)

---

## 🚀 Getting Started

### Step 1: Core Configuration
- Site metadata and constants
- Navigation structure
- Route definitions
- Design system tokens

### Step 2: Base Layouts
- Root layout with providers
- Public layout
- Section-specific layouts

### Step 3: Landing Page
- Hero section with hexagonal background
- Stats and features
- Main section cards
- CTA sections

### Step 4: Navigation
- Header with mega menu
- Footer with links
- Mobile navigation
- Breadcrumbs

---

## ✅ Quality Standards

### Code Quality
- ESLint + Prettier configured
- TypeScript strict mode
- Component documentation
- Unit tests for utilities

### Performance
- Image optimization
- Code splitting
- Lazy loading
- SEO optimization

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- Focus management

---

**Let's build this right! 🚀**
