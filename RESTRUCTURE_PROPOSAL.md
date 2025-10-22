# 🏗️ CIE Website - Complete Restructure Proposal

**Date:** October 20, 2025  
**Current State:** Functional but needs better modularity, scalability, and maintainability  
**Goal:** Create a feature-based, modular architecture that's easy to scale and maintain

---

## 📊 Current State Analysis

### ✅ What's Working Well
1. **Tech Stack** - Next.js 15 + React 19 + Tailwind v4 is solid
2. **Component Library** - Good foundation with shadcn/ui
3. **Routing Structure** - File-based routing is logical
4. **Documentation** - Excellent guides (BUILD_PLAN, DEVELOPER_GUIDE)
5. **Design System** - PES branding colors defined

### ❌ Current Pain Points

#### 1. **Flat Component Structure**
```
components/
├── animate-ui/
├── announcements/
├── design-system/
├── layout/
├── shared/
└── ui/
```
**Problem:** No clear organization by feature, hard to find related components

#### 2. **Scattered Data Management**
- JSON files in `/data` directory
- API routes in `/app/api`
- Database utilities in `/lib/database`
- No clear data flow pattern

#### 3. **Mixed Concerns**
- Business logic mixed in page components
- No clear separation of UI, logic, and data
- Duplicate code across similar pages

#### 4. **Scalability Issues**
- Adding new sections requires touching multiple directories
- No standardized patterns for common features
- Difficult to reuse logic across sections

#### 5. **Type Safety Gaps**
- Limited TypeScript interfaces
- No centralized type definitions
- Props typing inconsistent

---

## 🎯 Proposed Architecture

### **Feature-Based Modular Structure**

Instead of organizing by technical layer (components, pages, utils), organize by **business domain** (students, industry, alumni, etc.). Each feature is self-contained with its own components, logic, types, and data.

---

## 📁 New Directory Structure

```
cie-website/
├── src/                                    # Main source directory
│   ├── app/                               # Next.js App Router (routes only)
│   │   ├── (public)/                      # Public routes group
│   │   │   ├── page.tsx                  # Homepage
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── layout.tsx
│   │   ├── (students)/                    # Students section group
│   │   │   ├── students/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── programs/
│   │   │   │   ├── events/
│   │   │   │   └── clubs/
│   │   │   └── layout.tsx
│   │   ├── (industry)/                    # Industry section group
│   │   │   ├── industry/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── jobs/
│   │   │   │   └── collaborations/
│   │   │   └── layout.tsx
│   │   ├── (alumni)/                      # Alumni section group
│   │   │   ├── alumni/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── directory/
│   │   │   │   └── give-back/
│   │   │   └── layout.tsx
│   │   ├── (admin)/                       # Admin section (protected)
│   │   │   ├── admin/
│   │   │   └── layout.tsx
│   │   ├── api/                          # API routes
│   │   │   ├── announcements/
│   │   │   ├── auth/
│   │   │   ├── events/
│   │   │   └── jobs/
│   │   ├── layout.tsx                    # Root layout
│   │   └── globals.css
│   │
│   ├── features/                          # Feature modules (NEW!)
│   │   ├── home/                         # Homepage feature
│   │   │   ├── components/
│   │   │   │   ├── HeroCarousel/
│   │   │   │   │   ├── HeroCarousel.tsx
│   │   │   │   │   ├── HeroSlide.tsx
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── types.ts
│   │   │   │   ├── StatsSection/
│   │   │   │   ├── ProgramsOverview/
│   │   │   │   └── NewsSection/
│   │   │   ├── hooks/
│   │   │   │   └── useHeroData.ts
│   │   │   ├── services/
│   │   │   │   └── homeService.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   └── index.ts                  # Public exports
│   │   │
│   │   ├── programs/                     # Programs feature
│   │   │   ├── components/
│   │   │   │   ├── ProgramCard/
│   │   │   │   ├── ProgramDetails/
│   │   │   │   ├── RegistrationForm/
│   │   │   │   └── CourseTimeline/
│   │   │   ├── hooks/
│   │   │   │   ├── usePrograms.ts
│   │   │   │   └── useProgramRegistration.ts
│   │   │   ├── services/
│   │   │   │   └── programsService.ts
│   │   │   ├── types/
│   │   │   │   └── program.types.ts
│   │   │   ├── utils/
│   │   │   │   └── programFilters.ts
│   │   │   ├── data/
│   │   │   │   └── programs.json
│   │   │   └── index.ts
│   │   │
│   │   ├── events/                       # Events feature
│   │   │   ├── components/
│   │   │   │   ├── EventCard/
│   │   │   │   ├── EventCalendar/
│   │   │   │   ├── EventFilters/
│   │   │   │   └── EventRegistration/
│   │   │   ├── hooks/
│   │   │   │   ├── useEvents.ts
│   │   │   │   ├── useEventFilters.ts
│   │   │   │   └── useEventRegistration.ts
│   │   │   ├── services/
│   │   │   │   └── eventsService.ts
│   │   │   ├── types/
│   │   │   │   └── event.types.ts
│   │   │   ├── utils/
│   │   │   │   ├── eventFilters.ts
│   │   │   │   └── dateHelpers.ts
│   │   │   ├── data/
│   │   │   │   └── events.json
│   │   │   └── index.ts
│   │   │
│   │   ├── jobs/                         # Jobs portal feature
│   │   │   ├── components/
│   │   │   │   ├── JobListing/
│   │   │   │   ├── JobCard/
│   │   │   │   ├── JobFilters/
│   │   │   │   └── JobApplication/
│   │   │   ├── hooks/
│   │   │   │   ├── useJobs.ts
│   │   │   │   └── useJobFilters.ts
│   │   │   ├── services/
│   │   │   │   └── jobsService.ts
│   │   │   ├── types/
│   │   │   │   └── job.types.ts
│   │   │   ├── data/
│   │   │   │   └── jobs.json
│   │   │   └── index.ts
│   │   │
│   │   ├── alumni/                       # Alumni feature
│   │   │   ├── components/
│   │   │   │   ├── AlumniDirectory/
│   │   │   │   ├── AlumniCard/
│   │   │   │   ├── AlumniFilters/
│   │   │   │   └── DonationForm/
│   │   │   ├── hooks/
│   │   │   │   ├── useAlumni.ts
│   │   │   │   └── useAlumniSearch.ts
│   │   │   ├── services/
│   │   │   │   └── alumniService.ts
│   │   │   ├── types/
│   │   │   │   └── alumni.types.ts
│   │   │   ├── data/
│   │   │   │   └── alumni.json
│   │   │   └── index.ts
│   │   │
│   │   ├── announcements/                # Announcements feature
│   │   │   ├── components/
│   │   │   │   ├── AnnouncementBanner/
│   │   │   │   ├── AnnouncementList/
│   │   │   │   └── AnnouncementCard/
│   │   │   ├── hooks/
│   │   │   │   └── useAnnouncements.ts
│   │   │   ├── services/
│   │   │   │   └── announcementsService.ts
│   │   │   ├── types/
│   │   │   │   └── announcement.types.ts
│   │   │   └── index.ts
│   │   │
│   │   └── auth/                         # Authentication feature
│   │       ├── components/
│   │       │   ├── LoginForm/
│   │       │   ├── SignupForm/
│   │       │   └── ProtectedRoute/
│   │       ├── hooks/
│   │       │   ├── useAuth.ts
│   │       │   └── useSession.ts
│   │       ├── services/
│   │       │   └── authService.ts
│   │       ├── types/
│   │       │   └── auth.types.ts
│   │       ├── utils/
│   │       │   └── permissions.ts
│   │       └── index.ts
│   │
│   ├── shared/                           # Shared/reusable code
│   │   ├── components/                   # UI primitives & layout
│   │   │   ├── ui/                      # shadcn/ui components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   └── ...
│   │   │   ├── layout/                  # Layout components
│   │   │   │   ├── Header/
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Navigation.tsx
│   │   │   │   │   ├── MobileMenu.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Footer/
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   ├── FooterLinks.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Container/
│   │   │   │   ├── Section/
│   │   │   │   └── Grid/
│   │   │   ├── common/                  # Common components
│   │   │   │   ├── HeroSection/
│   │   │   │   ├── SectionLayout/
│   │   │   │   ├── Loading/
│   │   │   │   ├── ErrorBoundary/
│   │   │   │   ├── SEO/
│   │   │   │   └── Image/
│   │   │   └── animations/              # Animation components
│   │   │       ├── FadeIn/
│   │   │       ├── SlideIn/
│   │   │       └── backgrounds/
│   │   │
│   │   ├── hooks/                       # Shared hooks
│   │   │   ├── useMediaQuery.ts
│   │   │   ├── useDebounce.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   └── useImageSlideshow.ts
│   │   │
│   │   ├── utils/                       # Utility functions
│   │   │   ├── cn.ts                   # Class name utility
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   └── dateHelpers.ts
│   │   │
│   │   ├── constants/                   # Global constants
│   │   │   ├── routes.ts
│   │   │   ├── navigation.ts
│   │   │   └── config.ts
│   │   │
│   │   ├── types/                       # Shared TypeScript types
│   │   │   ├── common.types.ts
│   │   │   ├── api.types.ts
│   │   │   └── index.ts
│   │   │
│   │   └── services/                    # Shared services
│   │       ├── api/
│   │       │   ├── client.ts           # API client setup
│   │       │   └── endpoints.ts
│   │       └── storage/
│   │           └── localStorage.ts
│   │
│   ├── styles/                          # Global styles
│   │   ├── globals.css
│   │   ├── pes-colors.css
│   │   └── animations.css
│   │
│   └── config/                          # Configuration files
│       ├── site.config.ts              # Site metadata, URLs, etc.
│       ├── navigation.config.ts        # Navigation structure
│       └── features.config.ts          # Feature flags
│
├── public/                              # Static assets
│   ├── assets/
│   │   ├── images/
│   │   │   ├── programs/
│   │   │   ├── events/
│   │   │   ├── logos/
│   │   │   └── backgrounds/
│   │   ├── icons/
│   │   └── documents/
│   └── favicon.ico
│
├── docs/                                # Documentation
│   ├── architecture/
│   │   ├── ARCHITECTURE.md
│   │   ├── FEATURES.md
│   │   └── PATTERNS.md
│   ├── guides/
│   │   ├── GETTING_STARTED.md
│   │   ├── ADDING_FEATURES.md
│   │   └── CONTRIBUTING.md
│   └── reference-screenshots/
│
├── scripts/                             # Build/deployment scripts
│   ├── generate-sitemap.ts
│   └── migrate-data.ts
│
├── __tests__/                          # Tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔑 Key Architectural Principles

### 1. **Feature-Based Organization**

Each feature is a self-contained module with everything it needs:

```typescript
// features/programs/index.ts
export { ProgramCard } from './components/ProgramCard'
export { ProgramDetails } from './components/ProgramDetails'
export { usePrograms } from './hooks/usePrograms'
export { programsService } from './services/programsService'
export type { Program, ProgramCategory } from './types/program.types'
```

**Benefits:**
- Easy to find related code
- Can develop features in isolation
- Easy to test
- Can be extracted to separate packages if needed

### 2. **Clear Separation of Concerns**

```
Feature Module Structure:
├── components/      # UI components (presentation)
├── hooks/          # React hooks (state & side effects)
├── services/       # API calls & business logic
├── types/          # TypeScript interfaces
├── utils/          # Helper functions
└── data/           # Static data/mock data
```

### 3. **Composition Over Duplication**

**Before:**
```typescript
// Multiple pages with duplicate code
app/students/programs/page.tsx
app/students/events/page.tsx
app/industry/events/page.tsx
```

**After:**
```typescript
// Reusable feature components
features/events/components/EventListing
features/events/hooks/useEvents
features/events/services/eventsService

// Pages just compose features
app/students/events/page.tsx -> uses EventListing with filters
app/industry/events/page.tsx -> uses EventListing with different filters
```

### 4. **Type Safety First**

Every feature has strongly typed interfaces:

```typescript
// features/programs/types/program.types.ts
export interface Program {
  id: string
  name: string
  description: string
  category: ProgramCategory
  duration: string
  eligibility: string[]
  features: string[]
  registrationUrl?: string
  image?: string
}

export type ProgramCategory = 'spark' | 'ignite' | 'eie' | 'bootcamp' | 'basecamp'

export interface ProgramFilters {
  category?: ProgramCategory
  search?: string
  eligibility?: string
}
```

### 5. **Service Layer Pattern**

All data fetching goes through services:

```typescript
// features/programs/services/programsService.ts
import { Program, ProgramFilters } from '../types/program.types'

export const programsService = {
  async getAll(): Promise<Program[]> {
    const response = await fetch('/api/programs')
    return response.json()
  },
  
  async getById(id: string): Promise<Program> {
    const response = await fetch(`/api/programs/${id}`)
    return response.json()
  },
  
  async filter(filters: ProgramFilters): Promise<Program[]> {
    const programs = await this.getAll()
    return programs.filter(/* filtering logic */)
  },
  
  async register(programId: string, userData: any): Promise<void> {
    await fetch('/api/programs/register', {
      method: 'POST',
      body: JSON.stringify({ programId, ...userData })
    })
  }
}
```

### 6. **Custom Hooks for Logic**

Extract reusable logic into hooks:

```typescript
// features/programs/hooks/usePrograms.ts
import { useState, useEffect } from 'react'
import { programsService } from '../services/programsService'
import type { Program, ProgramFilters } from '../types/program.types'

export function usePrograms(filters?: ProgramFilters) {
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true)
        const data = filters 
          ? await programsService.filter(filters)
          : await programsService.getAll()
        setPrograms(data)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchPrograms()
  }, [filters])
  
  return { programs, loading, error }
}
```

**Usage in pages:**
```typescript
// app/students/programs/page.tsx
'use client'

import { usePrograms } from '@/features/programs'
import { ProgramCard } from '@/features/programs'

export default function ProgramsPage() {
  const { programs, loading, error } = usePrograms()
  
  if (loading) return <Loading />
  if (error) return <Error message={error.message} />
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {programs.map(program => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  )
}
```

---

## 🎨 Design System Structure

```
shared/components/
├── ui/                          # Base primitives (shadcn/ui)
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
│
├── layout/                      # Layout components
│   ├── Header/
│   ├── Footer/
│   ├── Container/
│   └── Section/
│
├── common/                      # Common patterns
│   ├── HeroSection/            # Reusable hero
│   ├── SectionLayout/          # Standard section wrapper
│   ├── Loading/                # Loading states
│   ├── ErrorBoundary/          # Error handling
│   └── SEO/                    # SEO component
│
└── animations/                  # Animation components
    ├── FadeIn/
    ├── SlideIn/
    └── backgrounds/
```

---

## 🗂️ Data Management Strategy

### Current Approach (Scattered)
```
data/programs.json
lib/database/index.ts
app/api/programs/route.ts
```

### New Approach (Feature-Contained)

**1. Static Data** - Lives in feature modules
```
features/programs/data/programs.json
```

**2. API Services** - Feature-specific
```typescript
// features/programs/services/programsService.ts
export const programsService = {
  // All program-related API calls here
}
```

**3. API Routes** - Thin controllers
```typescript
// app/api/programs/route.ts
import { programsService } from '@/features/programs'

export async function GET() {
  const programs = await programsService.getAll()
  return Response.json(programs)
}
```

**4. Shared API Client**
```typescript
// shared/services/api/client.ts
class APIClient {
  async get<T>(url: string): Promise<T> { }
  async post<T>(url: string, data: any): Promise<T> { }
  // ... other methods
}

export const apiClient = new APIClient()
```

---

## 📋 Migration Strategy

### Phase 1: Setup New Structure (Week 1)

**Tasks:**
1. Create new `src/` directory structure
2. Move `app/` into `src/app/`
3. Create `src/features/` directory
4. Create `src/shared/` directory
5. Update import paths in `tsconfig.json`

**Config Changes:**
```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/features/*": ["./src/features/*"],
      "@/shared/*": ["./src/shared/*"]
    }
  }
}
```

### Phase 2: Migrate Shared Components (Week 1-2)

**Tasks:**
1. Move `components/ui/` → `src/shared/components/ui/`
2. Move `components/layout/` → `src/shared/components/layout/`
3. Refactor into proper component modules
4. Add proper TypeScript interfaces
5. Update all imports

**Example Migration:**
```typescript
// Before: components/layout/Header.tsx
export function Header() { ... }

// After: src/shared/components/layout/Header/Header.tsx
export interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) { ... }

// src/shared/components/layout/Header/index.ts
export { Header } from './Header'
export type { HeaderProps } from './Header'
```

### Phase 3: Create First Feature Module (Week 2)

**Start with Programs Feature**

1. Create `src/features/programs/` structure
2. Move `data/programs.json` → `src/features/programs/data/`
3. Create types: `src/features/programs/types/program.types.ts`
4. Create service: `src/features/programs/services/programsService.ts`
5. Create components:
   - `ProgramCard/`
   - `ProgramDetails/`
   - `ProgramFilters/`
6. Create hooks: `usePrograms.ts`
7. Create index: `src/features/programs/index.ts`
8. Update pages to use new structure

### Phase 4: Migrate Remaining Features (Week 2-4)

**Feature Migration Order:**
1. ✅ Programs (completed in Phase 3)
2. Events
3. Jobs
4. Alumni
5. Announcements
6. Auth
7. Home

**For each feature:**
1. Create feature directory structure
2. Move/refactor components
3. Create services
4. Create hooks
5. Create types
6. Update pages
7. Test thoroughly

### Phase 5: Cleanup & Optimization (Week 4-5)

**Tasks:**
1. Remove old directories
2. Update all documentation
3. Performance optimization
4. Type safety audit
5. Test coverage
6. Code review

---

## 🔄 Example: Complete Feature Implementation

### Programs Feature - Full Example

#### 1. Types Definition
```typescript
// src/features/programs/types/program.types.ts

export type ProgramCategory = 
  | 'cie-spark' 
  | 'cie-ignite' 
  | 'eie' 
  | 'bootcamp' 
  | 'basecamp'

export interface Program {
  id: string
  name: string
  shortName: string
  description: string
  category: ProgramCategory
  duration: string
  eligibility: string[]
  features: string[]
  curriculum?: CourseModule[]
  instructors?: Instructor[]
  image?: string
  registrationUrl?: string
  status: 'upcoming' | 'ongoing' | 'completed'
  startDate?: string
  endDate?: string
}

export interface CourseModule {
  id: string
  title: string
  description: string
  weeks: number
  topics: string[]
}

export interface Instructor {
  id: string
  name: string
  title: string
  image?: string
  bio?: string
}

export interface ProgramFilters {
  category?: ProgramCategory
  status?: Program['status']
  search?: string
  eligibility?: string
}

export interface ProgramRegistration {
  programId: string
  studentName: string
  studentEmail: string
  studentId: string
  motivation: string
}
```

#### 2. Service Layer
```typescript
// src/features/programs/services/programsService.ts

import { apiClient } from '@/shared/services/api/client'
import type { Program, ProgramFilters, ProgramRegistration } from '../types/program.types'

export const programsService = {
  /**
   * Get all programs
   */
  async getAll(): Promise<Program[]> {
    return apiClient.get<Program[]>('/api/programs')
  },

  /**
   * Get program by ID
   */
  async getById(id: string): Promise<Program> {
    return apiClient.get<Program>(`/api/programs/${id}`)
  },

  /**
   * Filter programs
   */
  async filter(filters: ProgramFilters): Promise<Program[]> {
    const params = new URLSearchParams()
    
    if (filters.category) params.append('category', filters.category)
    if (filters.status) params.append('status', filters.status)
    if (filters.search) params.append('search', filters.search)
    
    return apiClient.get<Program[]>(`/api/programs?${params}`)
  },

  /**
   * Register for a program
   */
  async register(registration: ProgramRegistration): Promise<void> {
    await apiClient.post('/api/programs/register', registration)
  },

  /**
   * Get upcoming programs
   */
  async getUpcoming(): Promise<Program[]> {
    return this.filter({ status: 'upcoming' })
  },

  /**
   * Search programs
   */
  async search(query: string): Promise<Program[]> {
    return this.filter({ search: query })
  }
}
```

#### 3. Custom Hooks
```typescript
// src/features/programs/hooks/usePrograms.ts

import { useState, useEffect } from 'react'
import { programsService } from '../services/programsService'
import type { Program, ProgramFilters } from '../types/program.types'

export function usePrograms(filters?: ProgramFilters) {
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchPrograms = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const data = filters 
          ? await programsService.filter(filters)
          : await programsService.getAll()
        
        if (isMounted) {
          setPrograms(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchPrograms()

    return () => {
      isMounted = false
    }
  }, [filters])

  return { programs, loading, error }
}

// src/features/programs/hooks/useProgramRegistration.ts

import { useState } from 'react'
import { programsService } from '../services/programsService'
import type { ProgramRegistration } from '../types/program.types'

export function useProgramRegistration() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [success, setSuccess] = useState(false)

  const register = async (data: ProgramRegistration) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)
      
      await programsService.register(data)
      
      setSuccess(true)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setSuccess(false)
    setError(null)
  }

  return { register, loading, error, success, reset }
}
```

#### 4. Components
```typescript
// src/features/programs/components/ProgramCard/ProgramCard.tsx

import { Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { Badge } from '@/shared/components/ui/badge'
import type { Program } from '../../types/program.types'

export interface ProgramCardProps {
  program: Program
  onLearnMore?: (program: Program) => void
}

export function ProgramCard({ program, onLearnMore }: ProgramCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      {program.image && (
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={program.image} 
            alt={program.name}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{program.name}</CardTitle>
          <Badge variant={
            program.status === 'upcoming' ? 'default' :
            program.status === 'ongoing' ? 'success' : 'secondary'
          }>
            {program.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground mb-4">
          {program.description}
        </p>
        
        <div className="mt-auto space-y-2">
          <div className="text-sm">
            <strong>Duration:</strong> {program.duration}
          </div>
          
          {program.startDate && (
            <div className="text-sm">
              <strong>Starts:</strong> {new Date(program.startDate).toLocaleDateString()}
            </div>
          )}
          
          <Button 
            onClick={() => onLearnMore?.(program)}
            className="w-full mt-4"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// src/features/programs/components/ProgramCard/index.ts
export { ProgramCard } from './ProgramCard'
export type { ProgramCardProps } from './ProgramCard'
```

```typescript
// src/features/programs/components/ProgramFilters/ProgramFilters.tsx

import { Input } from '@/shared/components/ui/input'
import { Select } from '@/shared/components/ui/select'
import { Label } from '@/shared/components/ui/label'
import type { ProgramFilters as Filters } from '../../types/program.types'

export interface ProgramFiltersProps {
  filters: Filters
  onChange: (filters: Filters) => void
}

export function ProgramFilters({ filters, onChange }: ProgramFiltersProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
      <div>
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          placeholder="Search programs..."
          value={filters.search || ''}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
        />
      </div>
      
      <div>
        <Label htmlFor="category">Category</Label>
        <Select
          id="category"
          value={filters.category || 'all'}
          onChange={(value) => onChange({ 
            ...filters, 
            category: value === 'all' ? undefined : value 
          })}
        >
          <option value="all">All Categories</option>
          <option value="cie-spark">CIE Spark</option>
          <option value="cie-ignite">CIE Ignite</option>
          <option value="eie">EIE</option>
          <option value="bootcamp">Bootcamp</option>
          <option value="basecamp">Basecamp</option>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="status">Status</Label>
        <Select
          id="status"
          value={filters.status || 'all'}
          onChange={(value) => onChange({ 
            ...filters, 
            status: value === 'all' ? undefined : value 
          })}
        >
          <option value="all">All Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </Select>
      </div>
    </div>
  )
}
```

#### 5. Feature Index (Public API)
```typescript
// src/features/programs/index.ts

// Components
export { ProgramCard } from './components/ProgramCard'
export { ProgramDetails } from './components/ProgramDetails'
export { ProgramFilters } from './components/ProgramFilters'
export { RegistrationForm } from './components/RegistrationForm'

// Hooks
export { usePrograms } from './hooks/usePrograms'
export { useProgramRegistration } from './hooks/useProgramRegistration'

// Services
export { programsService } from './services/programsService'

// Types
export type { 
  Program, 
  ProgramCategory, 
  ProgramFilters,
  ProgramRegistration 
} from './types/program.types'
```

#### 6. Using in Pages
```typescript
// src/app/students/programs/page.tsx
'use client'

import { useState } from 'react'
import { 
  ProgramCard, 
  ProgramFilters, 
  usePrograms,
  type ProgramFilters as Filters 
} from '@/features/programs'
import { Loading } from '@/shared/components/common/Loading'
import { ErrorMessage } from '@/shared/components/common/ErrorMessage'

export default function ProgramsPage() {
  const [filters, setFilters] = useState<Filters>({})
  const { programs, loading, error } = usePrograms(filters)

  if (loading) return <Loading />
  if (error) return <ErrorMessage error={error} />

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Our Programs</h1>
      
      <ProgramFilters 
        filters={filters} 
        onChange={setFilters} 
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {programs.map(program => (
          <ProgramCard 
            key={program.id} 
            program={program}
            onLearnMore={(p) => {
              // Navigate to detail page
              window.location.href = `/students/programs/${p.id}`
            }}
          />
        ))}
      </div>
      
      {programs.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No programs found matching your criteria.
        </div>
      )}
    </div>
  )
}
```

---

## 📐 Routing Strategy with Route Groups

Use Next.js route groups to organize related routes:

```typescript
// src/app/(public)/layout.tsx
export default function PublicLayout({ children }) {
  return (
    <div>
      <PublicHeader />
      {children}
      <PublicFooter />
    </div>
  )
}

// src/app/(students)/layout.tsx
export default function StudentsLayout({ children }) {
  return (
    <div>
      <StudentsSidebar />
      {children}
    </div>
  )
}

// src/app/(admin)/layout.tsx
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export default async function AdminLayout({ children }) {
  const session = await getServerSession()
  
  if (!session?.user?.isAdmin) {
    redirect('/login')
  }
  
  return (
    <div>
      <AdminSidebar />
      {children}
    </div>
  )
}
```

---

## 🎯 Benefits of This Restructure

### 1. **Scalability**
- Easy to add new features without touching existing code
- Clear boundaries between features
- Features can be developed in parallel by different teams

### 2. **Maintainability**
- Find code faster (feature-based organization)
- Changes are localized to feature modules
- Easy to understand dependencies

### 3. **Reusability**
- Shared components in one place
- Common hooks and utilities
- Easy to extract features to packages

### 4. **Type Safety**
- Strong typing throughout
- Better IDE autocomplete
- Catch errors at compile time

### 5. **Testing**
- Features can be tested in isolation
- Clear boundaries for unit vs integration tests
- Mock services easily

### 6. **Developer Experience**
- Clear patterns to follow
- Easy onboarding for new developers
- Self-documenting structure

### 7. **Performance**
- Better code splitting
- Lazy load features on demand
- Tree shaking optimization

---

## 📝 Migration Checklist

### Week 1: Foundation
- [ ] Create new `src/` directory structure
- [ ] Move `app/` to `src/app/`
- [ ] Update `tsconfig.json` paths
- [ ] Create `src/shared/` structure
- [ ] Move UI components to `src/shared/components/ui/`
- [ ] Move layout components to `src/shared/components/layout/`
- [ ] Test that site still works

### Week 2: First Feature
- [ ] Create `src/features/programs/` structure
- [ ] Define program types
- [ ] Create programsService
- [ ] Create usePrograms hook
- [ ] Create ProgramCard component
- [ ] Create ProgramFilters component
- [ ] Update programs page to use new structure
- [ ] Test programs feature

### Week 3: More Features
- [ ] Migrate events feature
- [ ] Migrate jobs feature
- [ ] Migrate alumni feature
- [ ] Test all migrated features

### Week 4: Remaining Features
- [ ] Migrate announcements feature
- [ ] Migrate auth feature
- [ ] Migrate home feature
- [ ] Update all pages

### Week 5: Cleanup
- [ ] Remove old directories
- [ ] Update documentation
- [ ] Performance audit
- [ ] Type safety audit
- [ ] Final testing
- [ ] Deploy

---

## 🚀 Quick Win Examples

### Example 1: Adding a New Program Type

**Before (Current Structure):**
1. Update `data/programs.json`
2. Find and update all components using programs
3. Update types in multiple places
4. Hope you didn't miss anything

**After (New Structure):**
1. Update `src/features/programs/types/program.types.ts`
2. TypeScript will show you every place that needs updating
3. Add handler in `src/features/programs/services/programsService.ts`
4. Components automatically get the new type

### Example 2: Creating Event Registration

**New Structure Makes This Easy:**

```typescript
// 1. Add types
// src/features/events/types/event.types.ts
export interface EventRegistration {
  eventId: string
  attendeeName: string
  attendeeEmail: string
}

// 2. Add service method
// src/features/events/services/eventsService.ts
async registerForEvent(data: EventRegistration) {
  return apiClient.post('/api/events/register', data)
}

// 3. Create hook
// src/features/events/hooks/useEventRegistration.ts
export function useEventRegistration() {
  const [loading, setLoading] = useState(false)
  // ... implementation
}

// 4. Create component
// src/features/events/components/EventRegistrationForm/
export function EventRegistrationForm() {
  const { register, loading } = useEventRegistration()
  // ... form implementation
}

// 5. Export from feature
// src/features/events/index.ts
export { EventRegistrationForm } from './components/EventRegistrationForm'
export { useEventRegistration } from './hooks/useEventRegistration'

// 6. Use in page
// src/app/students/events/[id]/page.tsx
import { EventRegistrationForm } from '@/features/events'
```

---

## 💡 Additional Recommendations

### 1. **Add Feature Flags**
```typescript
// src/config/features.config.ts
export const features = {
  eventRegistration: true,
  alumniDirectory: true,
  jobPostings: true,
  chatSupport: false, // Coming soon
}
```

### 2. **Add Error Boundaries**
```typescript
// src/shared/components/common/ErrorBoundary/
export function ErrorBoundary({ children, fallback }) {
  // Implementation
}

// Wrap features
<ErrorBoundary fallback={<ErrorFallback />}>
  <ProgramsListing />
</ErrorBoundary>
```

### 3. **Add Loading States**
```typescript
// Consistent loading components
import { Loading } from '@/shared/components/common/Loading'
import { Skeleton } from '@/shared/components/ui/skeleton'
```

### 4. **Add Analytics Hooks**
```typescript
// src/shared/hooks/useAnalytics.ts
export function useAnalytics() {
  const trackEvent = (event: string, data?: any) => {
    // Google Analytics, etc.
  }
  
  return { trackEvent }
}
```

### 5. **Add SEO Component**
```typescript
// src/shared/components/common/SEO/
export function SEO({ title, description, image }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OG tags, Twitter cards, etc. */}
    </Head>
  )
}
```

---

## 🎓 Learning Resources for Team

### Next.js App Router
- Route groups: https://nextjs.org/docs/app/building-your-application/routing/route-groups
- Data fetching: https://nextjs.org/docs/app/building-your-application/data-fetching

### Feature-Based Architecture
- Vertical slice architecture
- Domain-driven design basics
- Component composition patterns

### TypeScript
- Advanced types
- Generics
- Utility types

---

## ✅ Success Criteria

After restructure, we should be able to:

1. **Add a new feature in under 1 hour** without touching existing code
2. **Find any feature-related code in under 30 seconds**
3. **Onboard new developers in under 1 day** with clear structure
4. **Test features in isolation** without complex setup
5. **Extract features to packages** if needed
6. **Scale to 100+ pages** without organizational chaos

---

## 🤔 Questions to Address

1. **Database/CMS:** Do you want to add a real database or keep JSON files?
2. **Authentication:** Stick with NextAuth or switch to something else?
3. **Testing:** Want to add Jest/Vitest and React Testing Library?
4. **Deployment:** Current Docker setup working well?
5. **Monorepo:** Future plan to split features into separate packages?

---

**Ready to start? I recommend beginning with Phase 1 (Setup) and Phase 2 (Migrate Shared Components) this week.**

Would you like me to help you with:
1. Creating the initial structure?
2. Migrating the first feature as an example?
3. Setting up the configuration files?
4. Something else?
