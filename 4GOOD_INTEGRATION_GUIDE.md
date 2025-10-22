# 🎯 4Good Dev Cookbook Integration Guide

**Project:** CIE Website (PES University)  
**Date:** October 21, 2025  
**Status:** Phase 1 Complete - Ready for Implementation

---

## 📚 Overview

This document outlines how the CIE website integrates the **4Good Dev Cookbook** standards while maintaining **PES University** branding.

### Key Adaptation

- **4Good Brand Colors**: `#3F527B` and `#C1E8F8` (4Good standard)
- **PES Brand Colors**: `#00338d` (Navy) and `#f07f1a` (Orange) ✅ **Using this**
- **All other 4Good standards**: Typography, spacing, components, UX patterns ✅ **Applied**

---

## 🎨 Configuration Files

### 1. **Tailwind Config** (`tailwind.config.ts`)

**4Good Standards Applied:**
- ✅ **Typography**: Rubik font (4Good standard)
- ✅ **Font Sizes**: H1 (32px), H2 (24px), Body (16px), Caption (12px)
- ✅ **Font Weights**: Light (300), Normal (400), Bold (700)
- ✅ **Spacing**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- ✅ **Border Radius**: Button (4px), Card (8px), Input (4px)
- ✅ **Border Width**: Thin (1px), Medium (2px), Thick (4px)
- ✅ **Shadows**: Subtle, Card, Elevated, Hover (Apple-like)

**PES Customization:**
- ✅ **Colors**: PES Navy and Orange instead of 4Good blue/cyan
- ✅ **Gradients**: PES-branded gradients
- ✅ **Shadows**: PES Navy and Orange tinted shadows

### 2. **Color Config** (`src/config/colors.config.ts`)

**PES Color System:**
```typescript
// Official PES Colors
brand: {
  navy: '#00338d',    // Primary
  orange: '#f07f1a',  // Secondary
}

// Full scales (50-950)
navy: { 50, 100, 200, ..., 900, 950 }
orange: { 50, 100, 200, ..., 900, 950 }
```

**Usage in Components:**
```tsx
// Tailwind classes
<div className="bg-pes-navy-800 text-white">
<div className="bg-pes-orange-600 hover:bg-pes-orange-700">

// Direct import
import { pesColors } from '@/config/colors.config'
const navyColor = pesColors.brand.navy
```

### 3. **Global Styles** (`src/styles/globals.css`)

**PES Theme CSS Variables:**
```css
--primary: 219 100% 28%;        /* PES Navy */
--secondary: 27 89% 52%;        /* PES Orange */
```

**Component Utilities:**
- `.pes-button-primary` - PES Navy button
- `.pes-button-secondary` - PES Orange button
- `.pes-card` - White card with PES shadow
- `.pes-gradient-vibrant` - Navy to Orange gradient

### 4. **4Good Utilities** (`src/styles/4good-utilities.css`)

**Pure 4Good Standards (No Color Customization):**
- `.btn-4good` - 12px/24px padding, 4px radius
- `.input-4good` - 1px border, 4px radius
- `.card-4good` - 8px radius, 16px padding
- `.listview-*` - List view components
- `.text-h1`, `.text-h2`, etc. - Typography classes
- `.mobile-stack`, `.mobile-hide` - Responsive utilities

---

## 🔧 Implementation Examples

### Typography (4Good Standard)

```tsx
// Use 4Good typography classes
<h1 className="text-h1">Welcome to CIE</h1>
<h2 className="text-h2">Our Programs</h2>
<p className="text-body">Body text content...</p>
<span className="text-caption">Caption text</span>

// Typography rules:
// ❌ DON'T use bold, italics, or ! unless specified
// ✅ DO use Rubik Normal (400) weight by default
// ✅ DO use Title Case for headings
// ✅ DO use Sentence case for buttons
```

### Buttons (4Good + PES Colors)

```tsx
import { Button } from '@/shared/components/ui/Button'

// Primary button (PES Navy)
<Button className="btn-primary">
  Apply Now
</Button>

// Secondary button (PES Orange)
<Button className="btn-secondary">
  Learn More
</Button>

// Outline button
<Button className="btn-outline">
  Cancel
</Button>

// Button specs:
// - Padding: 12px 24px (vertical/horizontal)
// - Border radius: 4px
// - Hover: Subtle shadow + darker shade
// - Focus: Clear outline for keyboard nav
```

### Cards (4Good Standard)

```tsx
// 4Good card specs:
// - Border radius: 8px
// - Padding: 16px
// - Shadow: Subtle (0 2px 4px rgba(0,0,0,0.08))
// - Background: White on light grey OR light grey on white
// - NO boxes within boxes

<div className="card-4good">
  <h3 className="text-h3">Program Name</h3>
  <p className="text-body">Description...</p>
</div>

// Elevated card (with hover)
<div className="card-elevated">
  <h3 className="text-h3">Bootcamp 2025</h3>
  <p className="text-body">Join our intensive program</p>
</div>
```

### Inputs (4Good Standard)

```tsx
// Input specs:
// - Border: 1px solid #CCCCCC
// - Focus: 2px solid PES Navy
// - Border radius: 4px
// - Label: Above input, 14px medium

<div>
  <label className="label-4good">Email Address</label>
  <input
    type="email"
    className="input-4good"
    placeholder="Enter your email"
  />
</div>

// Error state
<input className="input-4good input-error" />
<span className="text-sm text-red-500">Invalid email</span>
```

### Numbers & Currency (4Good Standard)

```tsx
// Numbers MUST be right-aligned
<td className="number-field">1,234</td>

// Currency with leading symbol, 2 decimals
<td className="currency-field">$1,234.56</td>

// For large numbers (>1000), NO decimals
<td className="currency-field">$15K</td>  // Not $15,000.00

// Totals in bold
<td className="total-field">$125,450</td>

// Rules:
// ✅ Right-aligned or center-aligned
// ❌ NEVER left-aligned
// ✅ Currency: Leading symbol ($)
// ✅ 2 decimals only
// ✅ Large numbers: Use K/M/B or K/L/Cr (NO decimals)
// ✅ Commas: 1,000,000
// ✅ Totals: Bold font
```

### Dates (4Good Standard)

```tsx
import { format } from 'date-fns'

// Format: MON/DD/YYYY
const formattedDate = format(new Date(), 'MMM/dd/yyyy')
// Output: Oct/21/2025

// With time
const formattedDateTime = format(new Date(), 'MMM dd, yyyy h:mm a')
// Output: Oct 21, 2025 2:30 PM

// In list views (for sorting)
const sortableDate = format(new Date(), 'yyyyMMdd')
// Output: 20251021

// Rules:
// ✅ US standard: MON/DD/YYYY
// ✅ User-changeable locale support
// ✅ Alternative for sorting: YYYYMMDD
```

### List Views (4Good Standard)

```tsx
// List view specs:
// - Sticky header
// - Zebra striping (alternate row colors)
// - 50 items per page (not 10!)
// - Universal search across all fields
// - Sort on all columns
// - Filter on all columns
// - Export/Print functionality
// - Inline edit for quick updates
// - Right-click context menu

<div className="overflow-x-auto">
  <table className="w-full">
    <thead className="listview-header">
      <tr>
        <th className="listview-cell text-left">Name</th>
        <th className="listview-cell text-right">Applications</th>
        <th className="listview-cell text-right">Funding</th>
        <th className="listview-cell text-right">Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr
          key={row.id}
          className={`listview-row ${index % 2 === 1 ? 'listview-row-alt' : ''}`}
        >
          <td className="listview-cell">
            <a href="#" className="listview-link">{row.name}</a>
          </td>
          <td className="listview-cell number-field">{row.applications}</td>
          <td className="listview-cell currency-field">${row.funding}</td>
          <td className="listview-cell listview-actions">...</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

// Keyboard shortcuts:
// J - Move down
// K - Move up
// Enter - Quick detail view
// Cmd/Ctrl + Enter - Popup detail view
// Page Down - Next page
// Page Up - Previous page
```

### Dashboard (4Good Standard)

```tsx
// Summary card specs:
// - Key metric (large number)
// - Short title (1-3 words)
// - Context (e.g., "vs last week")
// - Small icon

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="summary-card">
    <div className="flex items-center justify-between">
      <div>
        <div className="summary-card-title">Active Students</div>
        <div className="summary-card-metric">1,234</div>
        <div className="summary-card-context">↑ 12% vs last month</div>
      </div>
      <Users className="icon-lg text-pes-navy-600" />
    </div>
  </div>
</div>

// Chart rules:
// ✅ Meaningful X/Y axis labels
// ❌ NO "Number of" or "Total of" - use direct labels
// ✅ Use recharts or nivo
// ✅ SSR-safe rendering
// ✅ Loading skeletons
```

### Filters (4Good Standard)

```tsx
'use client'
import { useSearchParams } from 'next/navigation'

// Filter specs:
// - Collapsed by default
// - Multi-select support
// - URL-based state (useSearchParams)
// - Show selected as removable chips
// - "Clear All" button
// - Responsive: Stack on mobile

export function FilterView() {
  const searchParams = useSearchParams()
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        Filter {isExpanded ? '▲' : '▼'}
      </button>
      
      <div className={isExpanded ? 'filter-expanded' : 'filter-collapsed'}>
        {/* Filter inputs */}
      </div>
      
      {/* Selected filters as chips */}
      <div className="flex gap-2 mt-4">
        <span className="filter-chip">
          Status: Active
          <X className="filter-chip-remove" />
        </span>
      </div>
    </div>
  )
}
```

### Responsive Design (4Good - Mobile First)

```tsx
// Mobile-first breakpoints
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px

// Stack on mobile, inline on desktop
<div className="mobile-stack gap-4">
  <div className="flex-1">Content 1</div>
  <div className="flex-1">Content 2</div>
</div>

// Hide on mobile
<div className="mobile-hide">
  Desktop-only content
</div>

// Show only on mobile
<div className="mobile-show">
  Mobile-only content
</div>

// Touch-friendly tap targets (min 44x44px)
<button className="touch-target">
  <Icon />
</button>
```

### Accessibility (4Good Standard)

```tsx
// ARIA labels for icon-only buttons
<button aria-label="Submit Form" className="btn-primary">
  <CheckIcon />
</button>

// Semantic HTML
<nav>
  <ul>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

// Focus management
<button className="focus-visible-4good">
  Accessible Button
</button>

// Skip to content
<a href="#main-content" className="skip-to-content">
  Skip to main content
</a>

// Color contrast: Level AA minimum
// - 4.5:1 for normal text
// - 3:1 for large text
// Test with: https://coolors.co/contrast-checker
```

---

## 📦 Component Library Structure

All components will be built in `src/shared/components/` following both:
1. **4Good Dev Cookbook** standards (typography, spacing, behavior)
2. **PES University** branding (colors, gradients, shadows)

```
src/shared/components/
├── ui/              # 4Good-compliant base components
│   ├── Button.tsx   # 4Good button specs + PES colors
│   ├── Input.tsx    # 4Good input specs
│   ├── Card.tsx     # 4Good card specs + PES shadows
│   └── ...
├── layout/          # Page structure (4Good header/footer specs)
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
└── common/          # Reusable patterns
    ├── ListView.tsx    # 4Good list view specs
    ├── FilterView.tsx  # 4Good filter specs
    └── Dashboard.tsx   # 4Good dashboard specs
```

---

## 🎯 Next Steps

### Phase 2: Component Migration

When creating components in `src/shared/components/`:

1. ✅ **Follow 4Good standards** for structure, spacing, behavior
2. ✅ **Use PES colors** instead of 4Good blue/cyan
3. ✅ **Use utility classes** from `4good-utilities.css`
4. ✅ **Ensure accessibility** (ARIA, keyboard nav, contrast)
5. ✅ **Make responsive** (mobile-first design)
6. ✅ **Add TypeScript** interfaces for props
7. ✅ **Test with real data** before migrating

### Checklist for Each Component

- [ ] Uses Rubik font (4Good standard)
- [ ] Uses PES Navy/Orange (not 4Good blue/cyan)
- [ ] Follows 4Good spacing (4, 8, 12, 16, 24, 32, 48, 64)
- [ ] Buttons: 12px/24px padding, 4px radius
- [ ] Cards: 8px radius, 16px padding, subtle shadow
- [ ] Inputs: 1px border, 4px radius, 2px focus
- [ ] Numbers: Right-aligned, tabular-nums
- [ ] Currency: Leading $, 2 decimals, right-aligned
- [ ] Dates: MON/DD/YYYY format
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigation support
- [ ] Color contrast meets AA standards (4.5:1)
- [ ] Mobile-responsive (mobile-first)
- [ ] Touch targets min 44x44px
- [ ] TypeScript props interface

---

## 📚 Resources

### 4Good Standards
- **Icon Library**: [Google Icons](https://fonts.google.com/icons)
- **Vectors**: [Freepik](https://www.freepik.com/)
- **Images**: [Pexels](https://www.pexels.com/), [Unsplash](https://unsplash.com/)
- **Contrast Checker**: [Coolors](https://coolors.co/contrast-checker)
- **Accessibility**: [WAVE Chrome Extension](https://wave.webaim.org/extension/)
- **Fonts**: [Google Fonts - Rubik](https://fonts.google.com/specimen/Rubik)
- **Design Tool**: [Canva](https://www.canva.com/)

### PES Branding
- **Official Colors**: Navy `#00338d`, Orange `#f07f1a`
- **Color Config**: `src/config/colors.config.ts`
- **Tailwind Config**: `tailwind.config.ts`

### Documentation
- **4Good Dev Cookbook**: (This file's source document)
- **Component Standards**: `COMPONENT_STANDARDS_CHECKLIST.md`
- **Phase 1 Summary**: `PHASE_1_SUMMARY.md`
- **Migration Tracker**: `MIGRATION_TRACKER.md`

---

**Ready to build!** 🚀

All Phase 2 components should now reference this guide to ensure they meet both 4Good standards and PES branding requirements.
