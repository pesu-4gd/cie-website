# CIE Website - Developer Onboarding Guide

**Last Updated:** October 20, 2025  
**Version:** 1.0  
**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4

---

## 📚 Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Architecture](#project-architecture)
4. [Routing & Navigation](#routing--navigation)
5. [Component System](#component-system)
6. [Styling System](#styling-system)
7. [Data Management](#data-management)
8. [Page Structure Breakdown](#page-structure-breakdown)
9. [Common Patterns](#common-patterns)
10. [Adding New Features](#adding-new-features)
11. [Deployment](#deployment)

---

## 🎯 Project Overview

### What is this project?
The **CIE (Centre for Innovation & Entrepreneurship) Website** for PES University. It's a comprehensive multi-page web application showcasing programs, events, resources, and opportunities for students, industry partners, and alumni.

### Key Goals
- Showcase CIE programs (Spark, Ignite, EIE, Bootcamp, Basecamp)
- Provide resources for Students, Industry, and Alumni
- Enable admin management of content
- Modern, responsive, Apple-inspired design

### Current State
- ✅ **Routing Structure:** Fully set up with 50+ pages
- ✅ **Design System:** Complete with PES branding (Navy + Orange)
- ✅ **Components:** 30+ reusable components built
- ✅ **Data Layer:** JSON-based data files for events, news, programs
- ⚠️ **Homepage:** Currently using old implementation (needs rebuild)
- ⚠️ **Content:** Many pages have placeholder content
- ⚠️ **Backend:** API routes created but not fully integrated

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Installation
```bash
# Clone the repository
git clone https://github.com/pesu-4gd/cie-website.git
cd cie-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

### Available Scripts
```bash
npm run dev          # Start development server (port 3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run deploy       # Deploy to production (custom script)
```

### Environment Variables
```bash
# .env.local (create this file)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret_here
```

---

## 🏗️ Project Architecture

### Tech Stack Details

#### **Framework: Next.js 15 (App Router)**
- Uses the **new App Router** (not Pages Router)
- All routes are in the `app/` directory
- File-based routing with folders
- Server Components by default (use `'use client'` for client components)

#### **Styling: Tailwind CSS v4**
- **New v4 syntax:** Uses `@import "tailwindcss"` in CSS
- Custom PES color palette defined in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Pre-built utility classes for PES branding

#### **Icons: lucide-react**
- Modern icon library
- Tree-shakeable (only imports what you use)
- Usage: `import { Icon } from 'lucide-react'`

#### **State Management**
- React hooks (`useState`, `useEffect`, `useContext`)
- No external state management (Redux, Zustand) yet
- Custom hooks in `lib/hooks/`

#### **Authentication**
- NextAuth.js setup in `lib/auth/`
- API routes in `app/api/auth/`
- Currently using mock data in `lib/database/users.json`

---

## 🗺️ Routing & Navigation

### How Next.js App Router Works

#### File Structure = URL Structure
```
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
├── students/
│   ├── page.tsx          → /students
│   └── clubs/
│       └── page.tsx      → /students/clubs
```

#### Special Files
- **`page.tsx`** - The actual page component (required for route)
- **`layout.tsx`** - Wraps pages (shared UI, persists across navigation)
- **`loading.tsx`** - Loading UI (automatic Suspense boundary)
- **`error.tsx`** - Error boundary
- **`not-found.tsx`** - 404 page

### Root Layout (`app/layout.tsx`)
**Location:** `app/layout.tsx`

**What it does:**
- Wraps ALL pages in the application
- Defines the HTML structure (`<html>`, `<body>`)
- Includes global Header and Footer
- Loads global CSS

**Current Implementation:**
```typescript
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />        {/* Site-wide navigation */}
        {children}        {/* Your page content goes here */}
        <Footer />        {/* Site-wide footer */}
      </body>
    </html>
  )
}
```

**When to modify:**
- Adding global providers (Theme, Auth)
- Changing meta tags
- Adding global scripts (Analytics)

### Navigation Component (`components/layout/Navigation.tsx`)

**How it works:**
```typescript
import Link from 'next/link'

// Client-side navigation (no page reload)
<Link href="/students">Students</Link>

// External links (full page load)
<a href="https://example.com">External</a>
```

**Current Menu Structure:**
```typescript
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { 
    label: 'Students', 
    href: '/students',
    submenu: [
      { label: 'Programs', href: '/students/programs' },
      { label: 'Events', href: '/students/events' },
      // ... more items
    ]
  },
  { label: 'Industry', href: '/industry' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Contact', href: '/contact' },
]
```

**To add a new menu item:**
1. Open `components/layout/Navigation.tsx`
2. Add to `menuItems` array
3. Navigation auto-updates

---

## 🧩 Component System

### Component Organization

```
components/
├── layout/              # Layout components (Header, Footer, Navigation)
├── ui/                  # Base UI primitives (Button, Card, Input)
├── design-system/       # PES-specific components (Colors, Typography)
├── announcements/       # Feature-specific components
└── animate-ui/          # Animation components
```

### Component Types

#### 1. **Layout Components** (`components/layout/`)

**`Header.tsx`**
- **Purpose:** Top navigation bar
- **Used in:** `app/layout.tsx` (every page)
- **Features:** Logo, menu, search, user actions
- **Props:** None (reads from config)

**`Footer.tsx`**
- **Purpose:** Site footer
- **Used in:** `app/layout.tsx` (every page)
- **Features:** Links, social media, contact info
- **Props:** None (reads from config)

**`Navigation.tsx`**
- **Purpose:** Main navigation menu
- **Used in:** `Header.tsx`
- **Features:** Desktop menu, mobile hamburger, dropdowns
- **Props:** Optional custom menu items

#### 2. **UI Primitives** (`components/ui/`)

These are the building blocks. Based on shadcn/ui patterns.

**`button.tsx`**
```typescript
import { Button } from '@/components/ui/button'

// Usage
<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

**`card.tsx`**
```typescript
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

// Usage
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

**`hero-section.tsx`**
```typescript
import HeroSection from '@/components/ui/hero-section'

// Usage
<HeroSection
  title="Welcome to CIE"
  subtitle="Empowering Innovation"
  backgroundImage="/assets/hero.jpg"
  height="large"
>
  <Button>Get Started</Button>
</HeroSection>
```

**`section-layout.tsx`**
```typescript
import SectionLayout from '@/components/ui/section-layout'

// Usage
<SectionLayout
  title="Our Programs"
  subtitle="Discover what we offer"
  background="light"
>
  {/* Your content */}
</SectionLayout>
```

#### 3. **Design System** (`components/design-system/`)

PES University branding components.

**`Colors.tsx`**
- Color palette showcase
- Used in `/design-system` page
- Reference for developers

**`Typography.tsx`**
- Font styles showcase
- Heading hierarchy
- Text styles

**`Buttons.tsx`**
- All button variants
- PES-styled buttons
- Interactive examples

**`Cards.tsx`**
- Card component variants
- PES-styled cards
- Different layouts

**`SpecializedCards.tsx`**
- Program cards
- Event cards
- News cards
- Team member cards

#### 4. **Feature Components** (`components/announcements/`, etc.)

**`LiveAnnouncements.tsx`**
```typescript
import LiveAnnouncements from '@/components/announcements/LiveAnnouncements'

// Usage
<LiveAnnouncements limit={5} />

// What it does:
// - Fetches announcements from API
// - Displays in marquee/banner style
// - Auto-updates
```

### How Components Are Called

#### Example 1: Simple Page Using Components

**File:** `app/students/clubs/page.tsx`

```typescript
import { Card } from '@/components/ui/card'
import SectionLayout from '@/components/ui/section-layout'
import { Button } from '@/components/ui/button'

export default function ClubsPage() {
  return (
    <div>
      <SectionLayout title="Student Clubs" subtitle="Join our community">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3>Tech Club</h3>
            <p>Build amazing projects</p>
            <Button>Learn More</Button>
          </Card>
          
          <Card>
            <h3>Innovation Club</h3>
            <p>Create innovative solutions</p>
            <Button>Learn More</Button>
          </Card>
        </div>
      </SectionLayout>
    </div>
  )
}
```

#### Example 2: Client Component with State

**File:** `app/students/events/page.tsx`

```typescript
'use client' // ← Important! Marks as client component

import { useState } from 'react'
import { Card } from '@/components/ui/card'

export default function EventsPage() {
  const [filter, setFilter] = useState('all')
  
  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Events</option>
        <option value="upcoming">Upcoming</option>
      </select>
      
      {/* Render filtered events */}
    </div>
  )
}
```

#### Example 3: Component with Data Fetching

**File:** `app/students/programs/page.tsx`

```typescript
import { programs } from '@/data/programs.json'
import { Card } from '@/components/ui/card'

export default function ProgramsPage() {
  // Server Component - can directly import data
  return (
    <div className="grid gap-6">
      {programs.map((program) => (
        <Card key={program.id}>
          <h3>{program.name}</h3>
          <p>{program.description}</p>
        </Card>
      ))}
    </div>
  )
}
```

---

## 🎨 Styling System

### Tailwind CSS v4 Setup

**Configuration:** `tailwind.config.ts`

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          500: '#1e3a8a',  // PES Navy Blue
          600: '#1e40af',
          // ... more shades
        },
        secondary: {
          500: '#f97316',  // PES Orange
          600: '#ea580c',
          // ... more shades
        }
      }
    }
  }
}
```

### Global Styles (`app/globals.css`)

**Pre-built PES Classes:**

```css
/* Gradients */
.pes-gradient          → Navy blue gradient
.pes-gradient-vibrant  → Navy to Orange gradient
.pes-gradient-orange   → Orange gradient

/* Cards */
.pes-card              → Standard card with PES styling
.pes-card-featured     → Featured card with gradient
.pes-card-interactive  → Hover effects

/* Buttons */
.pes-button            → Base button
.pes-button-primary    → Primary blue button
.pes-button-secondary  → Orange button
.pes-button-outline    → Outlined button

/* Text */
.pes-heading           → Gradient text heading
.pes-text-gradient     → Gradient text

/* Sections */
.pes-hero              → Hero section styling
.pes-section           → Standard section padding
.pes-section-alt       → Alternate section background

/* Animations */
.animate-fade-in       → Fade in animation
.animate-slide-up      → Slide up animation
.animate-bounce-gentle → Gentle bounce
```

### Using Tailwind Classes

**Responsive Design:**
```typescript
// Mobile first approach
<div className="
  w-full           // Full width on mobile
  md:w-1/2         // Half width on tablet
  lg:w-1/3         // Third width on desktop
  p-4              // Padding 1rem
  md:p-6           // Padding 1.5rem on tablet
  lg:p-8           // Padding 2rem on desktop
">
```

**Common Patterns:**
```typescript
// Container
<div className="max-w-7xl mx-auto px-4 sm:px-6">

// Grid layouts
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

// Flexbox
<div className="flex items-center justify-between">

// Gradients
<div className="bg-gradient-to-r from-blue-600 to-orange-500">

// Hover effects
<button className="hover:scale-105 transition-transform duration-300">
```

### Color Usage Guide

**When to use Navy Blue (#1e3a8a):**
- Primary buttons
- Headers
- Links
- Main branding

**When to use Orange (#f97316):**
- Secondary buttons
- Accents
- CTAs
- Highlights

**When to use Gradients:**
- Hero sections
- Featured cards
- Buttons
- Section backgrounds

---

## 📊 Data Management

### Data Files (`data/`)

#### Structure
```
data/
├── programs.json       # All CIE programs
├── events.json         # Upcoming/past events
├── news.json           # News articles
├── jobs.json           # Job postings
├── alumni.json         # Alumni data
└── coe-centers.json    # Centers of Excellence
```

#### Example: `programs.json`
```json
{
  "programs": [
    {
      "id": "cie-spark",
      "name": "CIE Spark",
      "description": "Problem validation sprint",
      "duration": "1 semester",
      "eligibility": "2nd year students",
      "image": "/assets/programs/spark.jpg",
      "features": [
        "Problem identification",
        "Market validation",
        "Mentorship"
      ]
    }
  ]
}
```

### Using Data in Pages

**Server Component (Recommended):**
```typescript
// app/programs/page.tsx
import programsData from '@/data/programs.json'

export default function ProgramsPage() {
  const { programs } = programsData
  
  return (
    <div>
      {programs.map(program => (
        <ProgramCard key={program.id} {...program} />
      ))}
    </div>
  )
}
```

**Client Component (with state):**
```typescript
'use client'
import { useState, useEffect } from 'react'

export default function ProgramsPage() {
  const [programs, setPrograms] = useState([])
  
  useEffect(() => {
    // Fetch from API or import
    import('@/data/programs.json').then(data => {
      setPrograms(data.programs)
    })
  }, [])
  
  return (...)
}
```

### API Routes (`app/api/`)

#### Example: `app/api/announcements/route.ts`
```typescript
import { NextResponse } from 'next/server'
import announcements from '@/lib/database/announcements.json'

export async function GET() {
  return NextResponse.json(announcements)
}

export async function POST(request: Request) {
  const body = await request.json()
  // Handle creation
  return NextResponse.json({ success: true })
}
```

#### Calling API from Client:
```typescript
'use client'
import { useEffect, useState } from 'react'

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([])
  
  useEffect(() => {
    fetch('/api/announcements')
      .then(res => res.json())
      .then(data => setAnnouncements(data))
  }, [])
  
  return (...)
}
```

---

## 📄 Page Structure Breakdown

### Homepage (`app/page.tsx`)

**Current Status:** ⚠️ Needs rebuild  
**What it should have:**
- Hero carousel (3 slides)
- Stats section (2159+ students, 50+ startups, etc.)
- Programs overview
- Vision & Mission
- Audience cards (Students, Industry, Alumni)
- Recent achievements
- CTA section
- Newsletter modal

**How to rebuild:**
1. Use `HeroSection` component for hero
2. Use `StatsGrid` for statistics
3. Use `Card` components for programs
4. Use `SectionLayout` for sections
5. Follow design in `docs/reference-screenshots/`

### Students Section (`app/students/`)

**Main Page:** `app/students/page.tsx`  
**Sub-pages:**
- `/students/programs` - All programs (Spark, Ignite, EIE)
- `/students/clubs` - Student clubs
- `/students/events` - Upcoming events
- `/students/funding` - Funding opportunities
- `/students/mentorship` - Mentorship program
- `/students/resources` - Resources and guides

**How they work:**
```
app/students/
├── page.tsx                    # Landing page for students
├── layout.tsx (optional)       # Shared layout for students section
├── programs/
│   ├── page.tsx               # Programs overview
│   ├── basecamp/page.tsx      # Basecamp program detail
│   ├── bootcamp/page.tsx      # Bootcamp program detail
│   ├── eie/page.tsx           # EIE course detail
│   └── summer/page.tsx        # Summer program detail
└── events/
    ├── page.tsx               # Events listing
    ├── cie-ignite/page.tsx    # Specific event
    └── innovation-summit/page.tsx
```

**Component reuse pattern:**
```typescript
// app/students/programs/basecamp/page.tsx
import HeroSection from '@/components/ui/hero-section'
import SectionLayout from '@/components/ui/section-layout'
import { Card } from '@/components/ui/card'

export default function BasecampPage() {
  return (
    <>
      <HeroSection
        title="PES Basecamp"
        subtitle="6-Month Program"
        backgroundImage="/assets/basecamp/hero.jpg"
      />
      
      <SectionLayout title="About Basecamp">
        <p>Description here...</p>
      </SectionLayout>
      
      <SectionLayout title="What You'll Learn" background="gray">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>Module 1</Card>
          <Card>Module 2</Card>
          <Card>Module 3</Card>
        </div>
      </SectionLayout>
    </>
  )
}
```

### Industry Section (`app/industry/`)

**Structure:**
```
app/industry/
├── page.tsx              # Industry landing page
├── collaborations/       # Partnership opportunities
├── jobs/                 # Job postings
├── events/               # Industry events
├── competitions/         # Competitions & challenges
└── success-stories/      # Case studies
```

**Data flow:**
```typescript
// app/industry/jobs/page.tsx
import jobsData from '@/data/jobs.json'

export default function JobsPage() {
  return (
    <div>
      {jobsData.jobs.map(job => (
        <JobCard
          title={job.title}
          company={job.company}
          location={job.location}
          type={job.type}
        />
      ))}
    </div>
  )
}
```

### Alumni Section (`app/alumni/`)

**Structure:**
```
app/alumni/
├── page.tsx              # Alumni landing
├── welcome/              # Welcome message
├── association/          # Alumni association
├── directory/            # Alumni directory
├── news/                 # Alumni news
├── give-back/            # Donation/mentorship
├── angel-fund/           # Angel investment fund
└── resources/            # Resources for alumni
```

**Authentication example:**
```typescript
// app/alumni/directory/page.tsx
import { getServerSession } from 'next-auth'

export default async function DirectoryPage() {
  const session = await getServerSession()
  
  if (!session) {
    return <div>Please login to access directory</div>
  }
  
  // Show directory
  return <AlumniDirectory />
}
```

### Admin Section (`app/admin/`)

**Structure:**
```
app/admin/
├── page.tsx              # Admin login
└── dashboard/
    └── page.tsx          # Admin dashboard
```

**Protected route pattern:**
```typescript
// app/admin/dashboard/page.tsx
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export default async function AdminDashboard() {
  const session = await getServerSession()
  
  if (!session || session.user.role !== 'admin') {
    redirect('/admin') // Redirect to login
  }
  
  return <Dashboard />
}
```

---

## 🔧 Common Patterns

### Pattern 1: Basic Page Structure

```typescript
// app/your-page/page.tsx
import HeroSection from '@/components/ui/hero-section'
import SectionLayout from '@/components/ui/section-layout'

export default function YourPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Page Title"
        subtitle="Subtitle"
        backgroundImage="/assets/hero.jpg"
      />
      
      {/* Content Sections */}
      <SectionLayout title="Section 1">
        <p>Content here...</p>
      </SectionLayout>
      
      <SectionLayout title="Section 2" background="gray">
        <p>Alternate background...</p>
      </SectionLayout>
    </>
  )
}
```

### Pattern 2: Page with Data

```typescript
// app/events/page.tsx
import eventsData from '@/data/events.json'
import EventCard from '@/components/EventCard'

export default function EventsPage() {
  const { upcoming, past } = eventsData
  
  return (
    <div>
      <h2>Upcoming Events</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {upcoming.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      
      <h2>Past Events</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {past.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  )
}
```

### Pattern 3: Interactive Page (Client Component)

```typescript
'use client' // Important!

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function InteractivePage() {
  const [tab, setTab] = useState('tab1')
  
  return (
    <div>
      <div className="flex gap-4">
        <Button onClick={() => setTab('tab1')}>Tab 1</Button>
        <Button onClick={() => setTab('tab2')}>Tab 2</Button>
      </div>
      
      {tab === 'tab1' && <Tab1Content />}
      {tab === 'tab2' && <Tab2Content />}
    </div>
  )
}
```

### Pattern 4: Form Submission

```typescript
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (res.ok) {
      setStatus('success')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
      />
      <Input
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
        type="email"
      />
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Submit'}
      </Button>
      {status === 'success' && <p>Success!</p>}
    </form>
  )
}
```

### Pattern 5: Image Usage

```typescript
import Image from 'next/image'

export default function ImageExample() {
  return (
    <div>
      {/* Optimized image with Next.js */}
      <Image
        src="/assets/hero.jpg"
        alt="Description"
        width={1200}
        height={600}
        priority // Load immediately (for above-fold images)
      />
      
      {/* Background image with Tailwind */}
      <div 
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/bg.jpg)' }}
      >
        Content
      </div>
    </div>
  )
}
```

---

## ➕ Adding New Features

### How to Add a New Page

**Example: Adding `/programs/new-program` page**

1. **Create the file:**
```bash
# Create directory and file
mkdir -p app/programs/new-program
touch app/programs/new-program/page.tsx
```

2. **Write the page component:**
```typescript
// app/programs/new-program/page.tsx
import HeroSection from '@/components/ui/hero-section'
import SectionLayout from '@/components/ui/section-layout'

export default function NewProgramPage() {
  return (
    <>
      <HeroSection
        title="New Program"
        subtitle="Exciting new initiative"
        backgroundImage="/assets/programs/new-program.jpg"
      />
      
      <SectionLayout title="About This Program">
        <p>Program description...</p>
      </SectionLayout>
    </>
  )
}
```

3. **Add to navigation:**
```typescript
// components/layout/Navigation.tsx
const menuItems = [
  // ... existing items
  {
    label: 'Programs',
    submenu: [
      { label: 'CIE Spark', href: '/programs/cie-spark' },
      { label: 'New Program', href: '/programs/new-program' }, // ← Add here
    ]
  }
]
```

4. **Add metadata (SEO):**
```typescript
// app/programs/new-program/page.tsx
export const metadata = {
  title: 'New Program | CIE PES University',
  description: 'Learn about our exciting new program',
}

export default function NewProgramPage() {
  // ...
}
```

### How to Add a New Component

**Example: Creating a `TestimonialCard` component**

1. **Create the component file:**
```bash
touch components/ui/testimonial-card.tsx
```

2. **Write the component:**
```typescript
// components/ui/testimonial-card.tsx
interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image?: string
}

export default function TestimonialCard({
  quote,
  author,
  role,
  image
}: TestimonialCardProps) {
  return (
    <div className="pes-card p-6">
      <p className="text-lg italic mb-4">"{quote}"</p>
      <div className="flex items-center gap-4">
        {image && (
          <img 
            src={image} 
            alt={author}
            className="w-12 h-12 rounded-full"
          />
        )}
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}
```

3. **Use the component:**
```typescript
// app/about/page.tsx
import TestimonialCard from '@/components/ui/testimonial-card'

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <TestimonialCard
        quote="CIE changed my life!"
        author="John Doe"
        role="Alumni, Class of 2023"
        image="/assets/alumni/john.jpg"
      />
    </div>
  )
}
```

### How to Add API Endpoint

**Example: Creating `/api/programs` endpoint**

1. **Create the route file:**
```bash
mkdir -p app/api/programs
touch app/api/programs/route.ts
```

2. **Write the API route:**
```typescript
// app/api/programs/route.ts
import { NextResponse } from 'next/server'
import programsData from '@/data/programs.json'

// GET /api/programs
export async function GET() {
  return NextResponse.json(programsData)
}

// POST /api/programs
export async function POST(request: Request) {
  const body = await request.json()
  
  // Validate
  if (!body.name) {
    return NextResponse.json(
      { error: 'Name is required' },
      { status: 400 }
    )
  }
  
  // Save to database (mock for now)
  return NextResponse.json({ success: true, id: 'new-id' })
}
```

3. **Call from client:**
```typescript
'use client'

export default function ProgramsPage() {
  const [programs, setPrograms] = useState([])
  
  useEffect(() => {
    fetch('/api/programs')
      .then(res => res.json())
      .then(data => setPrograms(data.programs))
  }, [])
  
  return (...)
}
```

### How to Add a Data Field

**Example: Adding `registrationLink` to programs**

1. **Update the data file:**
```json
// data/programs.json
{
  "programs": [
    {
      "id": "cie-spark",
      "name": "CIE Spark",
      "registrationLink": "https://forms.gle/xyz" // ← Add this
    }
  ]
}
```

2. **Update TypeScript types (optional but recommended):**
```typescript
// types/program.ts
export interface Program {
  id: string
  name: string
  description: string
  registrationLink?: string // ← Add this
}
```

3. **Use in component:**
```typescript
import { Button } from '@/components/ui/button'

export default function ProgramCard({ program }) {
  return (
    <div>
      <h3>{program.name}</h3>
      {program.registrationLink && (
        <Button asChild>
          <a href={program.registrationLink}>Register Now</a>
        </Button>
      )}
    </div>
  )
}
```

---

## 🚀 Deployment

### Current Deployment Setup

**Platform:** Custom deployment scripts + Docker  
**Files:**
- `deploy.sh` - Main deployment script
- `quick-deploy.sh` - Quick deployment
- `Dockerfile` - Container configuration
- `docker-compose.yml` - Multi-container setup
- `ecosystem.config.js` - PM2 process manager

### How to Deploy

1. **Build production:**
```bash
npm run build
```

2. **Test production build locally:**
```bash
npm start
# Visit http://localhost:3000
```

3. **Deploy to server:**
```bash
# Option 1: Quick deploy
./quick-deploy.sh

# Option 2: Full deploy with Docker
docker-compose up -d --build
```

### Environment Setup

**Development (`.env`):**
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development
```

**Production (`.env.production`):**
```bash
NEXT_PUBLIC_API_URL=https://cie.pes.edu/api
NODE_ENV=production
NEXTAUTH_SECRET=your-production-secret
DATABASE_URL=your-production-database
```

---

## 📋 Quick Reference

### File You'll Edit Most

| File | Purpose | When to Edit |
|------|---------|--------------|
| `app/page.tsx` | Homepage | Updating main content |
| `app/layout.tsx` | Global layout | Adding global features |
| `components/layout/Navigation.tsx` | Menu | Adding/removing pages |
| `components/layout/Footer.tsx` | Footer | Contact info, links |
| `tailwind.config.ts` | Styling | Adding colors, fonts |
| `data/*.json` | Content | Updating programs, events |
| `app/globals.css` | Global styles | New utility classes |

### Common Tasks

**Add a new page:**
1. Create `app/path/to/page.tsx`
2. Add to navigation menu
3. Test routing

**Add a new component:**
1. Create `components/category/ComponentName.tsx`
2. Export the component
3. Import where needed

**Update content:**
1. Edit JSON file in `data/`
2. Component will auto-update

**Change colors:**
1. Edit `tailwind.config.ts`
2. Update color values
3. Rebuild (`npm run dev` auto-rebuilds)

**Add an image:**
1. Place in `public/assets/`
2. Reference as `/assets/filename.jpg`
3. Use Next.js `<Image>` for optimization

### Getting Help

**Documentation:**
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs
- lucide-react: https://lucide.dev

**Project-specific:**
- Check `docs/reference-screenshots/` for design references
- See `components/design-system/` for component examples
- Review existing pages for patterns

---

## 🎯 Current Priorities (What to Work On)

### High Priority ⚡
1. **Rebuild Homepage** (`app/page.tsx`)
   - Current version uses old components
   - Need to implement new design with hero carousel
   - Reference: `docs/reference-screenshots/`

2. **Complete Program Pages**
   - `app/students/programs/cie-spark/page.tsx` - Needs content
   - `app/students/programs/cie-ignite/page.tsx` - Needs content
   - Add registration forms

3. **Content Population**
   - Fill placeholder content in existing pages
   - Update `data/*.json` with real data
   - Add images to `public/assets/`

### Medium Priority 📌
4. **Backend Integration**
   - Connect forms to actual database
   - Implement authentication fully
   - Set up admin CRUD operations

5. **Responsive Testing**
   - Test all pages on mobile
   - Fix any layout issues
   - Optimize images

### Low Priority 📝
6. **SEO Optimization**
   - Add metadata to all pages
   - Create sitemap.xml
   - Add structured data

7. **Performance**
   - Lazy load images
   - Code splitting
   - Optimize bundle size

---

## 📞 Support & Contact

**Questions about the code?**
- Check this guide first
- Review similar existing pages
- Check component examples in `/design-system`

**Found a bug?**
- Document the issue
- Note which page/component
- Include steps to reproduce

**Ready to contribute?**
- Follow existing patterns
- Test your changes
- Update this guide if you add new patterns

---

**Last Updated:** October 20, 2025  
**Maintained by:** CIE Development Team  
**Version:** 1.0

---

## 🎓 Learning Path for New Developers

### Week 1: Understanding the Foundation
- [ ] Read this entire guide
- [ ] Explore the project structure
- [ ] Run the dev server and click around
- [ ] Examine 3-5 existing pages to see patterns
- [ ] Look at components in `components/ui/`

### Week 2: Making Small Changes
- [ ] Update content in a JSON file
- [ ] Add a new link to navigation
- [ ] Modify styling on an existing page
- [ ] Create a simple new page using existing components

### Week 3: Building Features
- [ ] Create a new component
- [ ] Build a complete page from scratch
- [ ] Implement a form with validation
- [ ] Add an API endpoint

### Week 4: Advanced Topics
- [ ] Work on the homepage rebuild
- [ ] Implement authentication features
- [ ] Optimize performance
- [ ] Deploy changes to staging

---

**Welcome to the CIE team! Happy coding! 🚀**
