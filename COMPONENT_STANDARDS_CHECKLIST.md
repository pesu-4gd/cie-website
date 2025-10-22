# 🎨 CIE Website - Component Standards Checklist

**Based on:** 4Good Dev Cookbook  
**Project:** CIE Website (PES University)  
**Date:** October 21, 2025

---

## 📋 Typography Standards

### Font Configuration
- [x] **Primary Font**: Rubik (Normal) - Already configured in Tailwind
- [ ] **Font Sizes**:
  - [ ] H1: 32px (2xl)
  - [ ] H2: 24px (xl)
  - [ ] Body: 16px (base)
  - [ ] Captions: 12px (xs)
- [ ] **Font Weights**:
  - [ ] Light (300)
  - [ ] Regular (400)
  - [ ] Bold (700)
- [ ] **Line Height**: Proper spacing for readability (1.5-1.75)
- [ ] **Letter Spacing**: Avoid tight letters, use normal to slightly open

### Typography Rules
- [ ] **NO Bold, Italics, or !** unless specified
- [ ] Use Title Case for headings
- [ ] Use Sentence case for buttons/actions
- [ ] Left-align body text
- [ ] Center-align headings when appropriate

---

## 🎨 Color Standards

### CIE/PES Brand Colors
- [x] **Primary**: Navy Blue `#00338d`
- [x] **Secondary**: Orange `#f07f1a`
- [x] Full color scales (50-950) created
- [ ] **Maximum 3 colors** per screen (Navy, Orange, + Gray for UI)
- [ ] Use RYG only for status (with designer-approved shades)

### Color Usage
- [x] Defined in `src/config/colors.config.ts`
- [x] Integrated in Tailwind config
- [ ] Consistent button colors (no multiple button colors)
- [ ] Light background with dark text (for dark mode compatibility)

### Contrast Requirements
- [ ] **Level AA (Target)**: 4.5:1 for normal text, 3:1 for large text
- [ ] Test all color combinations with [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- [ ] Run WAVE Accessibility Checker on all pages

---

## 📐 Layout Standards

### Screen Structure
- [ ] **Header**: Fixed height, logo on left, profile on right
- [ ] **Footer**: Copyright info, never redraws
- [ ] **Content Area**: Between header and footer
- [ ] **No vertical scroll** unless design exception granted
- [ ] **Mobile-first design** - all screens must work on mobile

### Spacing (Margin & Padding)
- [ ] **Consistent padding** for buttons, cards, input fields
- [ ] **Margin separation** between elements
- [ ] Use Tailwind spacing scale (4, 8, 12, 16, 24, 32, 48, 64)
- [ ] Cards: 16px padding inside
- [ ] Sections: 24px margin between
- [ ] Compact layouts: 8px margin

### Boxes & Cards
- [ ] **No boxes within boxes**
- [ ] Fixed border radius across entire product
- [ ] Cards should look "etched in" or "etched out" (use shadows)
- [ ] Subtle shadows for elevation (see Apple's website)
- [ ] Light grey cards on white background OR white cards on light grey

---

## 🔘 Component Standards

### Buttons
- [ ] Padding: 12px 24px (vertical, horizontal)
- [ ] Border radius: 4px
- [ ] Primary: PES Navy with white text
- [ ] Secondary: PES Orange with white text
- [ ] Hover state: Subtle shadow + slightly darker shade
- [ ] Focus: Clear outline for keyboard navigation
- [ ] Disabled: Reduced opacity (0.5)
- [ ] ARIA labels for icon-only buttons

### Input Fields
- [ ] Border: 1px solid `#CCCCCC`
- [ ] Focus: 2px solid PES Navy
- [ ] Error: 1px solid red with error message below
- [ ] Labels: Above input, 14px, medium weight
- [ ] Placeholder: Light gray, helpful hints

### Cards
- [ ] Border radius: 8px
- [ ] Subtle shadow: `0 1px 3px rgba(0,0,0,0.1)`
- [ ] Hover: Slight elevation increase
- [ ] Padding: 16px
- [ ] Background: White on light grey OR light grey on white

### Icons
- [ ] **Library**: [Google Icons](https://fonts.google.com/icons)
- [ ] **Consistency**: Same icon set across entire app
- [ ] Selected state: Solid fill
- [ ] Unselected state: Outline
- [ ] Consistent thickness for outline icons
- [ ] Hover: Same color change across all icons

---

## 📊 Data Display Standards

### Numbers
- [ ] **Right-aligned** or center-aligned (NEVER left-aligned)
- [ ] Currency: Leading symbol (`$1,234.56`)
- [ ] Currency: 2 decimals only
- [ ] Large numbers (>1000): No decimals, use K/M/B or K/L/Cr
- [ ] Comma separators: 1,000,000
- [ ] Totals: **Bold font**

### Dates
- [ ] **Format**: `MON/DD/YYYY` (e.g., Oct 21, 2025)
- [ ] Alternative for sorting: `YYYYMMDD`
- [ ] With time: `Oct 21, 2025 2:30 PM`
- [ ] Use `date-fns` for formatting
- [ ] User-changeable locale support

### Units
- [ ] **No abbreviations**: Use "Hours" not "Hrs"
- [ ] Units in column headers (not repeated in rows)
- [ ] Formula fields: Add "?" or "i" icon with tooltip

---

## 📋 List View Standards

### Required Features
- [ ] **Sort**: All columns sortable
- [ ] **Filter**: All columns filterable
- [ ] **Universal search**: Search across all fields
- [ ] **Default order**: Latest updated first
- [ ] **Pagination**: 50 items per page (not 10)
- [ ] **Export/Print**: Functional export button
- [ ] **Column selection**: Remember user preferences
- [ ] **Inline edit**: For quick status updates
- [ ] **Hover actions**: Right-click context menu

### Visual Standards
- [ ] **Sticky header**: Visible when scrolling
- [ ] **Zebra striping**: Alternate row colors
- [ ] **Links**: Blue text + underline
- [ ] **First column**: Clickable name (blue + underline)
- [ ] **Numbers**: Right-aligned
- [ ] **Actions**: Collapsed, right-click menu
- [ ] **Name column**: Left-aligned
- [ ] **Summary row**: At top, not bottom

### Keyboard Shortcuts
- [ ] `J` - Move down
- [ ] `K` - Move up
- [ ] `Enter` - Quick detail view
- [ ] `Cmd/Ctrl + Enter` - Popup detail view
- [ ] `Page Down` - Next page
- [ ] `Page Up` - Previous page

### Footer
- [ ] Pagination on right side
- [ ] Page number selector on left side
- [ ] Total record count
- [ ] Items per page selector

---

## 🎯 Header Component

### Structure
- [ ] Logo on left (clickable to home)
- [ ] Profile on right
- [ ] Filter collapsed by default (in same row to save space)
- [ ] Fixed height, never redraws
- [ ] Responsive: Hamburger menu on mobile

### Filter View
- [ ] **Collapsed** by default
- [ ] Multi-select support
- [ ] Keyboard shortcuts
- [ ] "Keep open" toggle option
- [ ] Types supported:
  - [ ] Text input (search, keyword)
  - [ ] Dropdown (single/multi)
  - [ ] Date picker (single/range)
  - [ ] Tags/pills
  - [ ] Boolean toggle
  - [ ] Slider (range)

### Filter Best Practices
- [ ] Use `useSearchParams()` for URL-based filters
- [ ] Mask values in URL (IDs → slugs)
- [ ] Show selected filters as removable chips
- [ ] "Clear All" button
- [ ] Responsive: Stack on mobile, inline on desktop
- [ ] Loading states for filter data
- [ ] Preserve filters on navigation

---

## 👤 Profile Component

### Basic Information
- [ ] Full name
- [ ] Email ID
- [ ] Mobile number
- [ ] Role/Designation
- [ ] Profile photo (drag-drop upload)
- [ ] Contact links (LinkedIn, email)

### Account Details
- [ ] User ID
- [ ] Account creation date
- [ ] Last login
- [ ] Active status

### Features
- [ ] Auth-protected page
- [ ] Server-side data fetching
- [ ] Responsive layout (side-by-side desktop, stacked mobile)
- [ ] Toast notifications for updates
- [ ] Loading states with skeleton
- [ ] Optimistic UI updates
- [ ] Logout button
- [ ] Change password option

---

## 📊 Dashboard Standards

### Summary Cards
- [ ] Key metric (large number)
- [ ] Short title (1-3 words)
- [ ] Context (e.g., "vs last week")
- [ ] Small icon
- [ ] Grid layout with consistent gaps
- [ ] Icons from `lucide-react`

### Charts
- [ ] Meaningful X/Y axis labels
- [ ] No "Number of" or "Total of" - use direct labels
- [ ] Use `recharts` or `nivo`
- [ ] SSR-safe rendering
- [ ] Dynamic imports for heavy charts
- [ ] Loading skeletons

### List View in Dashboard
- [ ] Use `@tanstack/react-table`
- [ ] Column definitions via schema
- [ ] Empty states with CTA
- [ ] Pagination
- [ ] Sorting/filtering

### Layout
- [ ] Responsive grid (`grid-cols-1 md:grid-cols-3`)
- [ ] Suspense boundaries
- [ ] Skeleton loaders
- [ ] Dark mode support

---

## ♿ Accessibility

### Required
- [ ] **ARIA labels** for interactive elements
- [ ] **Semantic HTML** (`<button>`, `<nav>`, `<main>`)
- [ ] **Keyboard navigation** for all interactive elements
- [ ] **Focus indicators** (clear outlines)
- [ ] **Skip links** for complex pages
- [ ] **Screen reader** friendly
- [ ] Tab-navigable forms and filters
- [ ] Color contrast meets AA standards

### Testing
- [ ] WAVE Chrome Extension
- [ ] Keyboard-only navigation test
- [ ] Screen reader test (NVDA/JAWS)
- [ ] Color contrast checker

---

## 🎨 Visual Hierarchy

### F-Pattern Design
- [ ] Important items along top and left edges
- [ ] Clear headings at top
- [ ] Short content blocks
- [ ] Left-aligned text blocks
- [ ] Scannable bullet points

### Shadows & Depth
- [ ] Subtle, soft shadows
- [ ] Hover state: Add small shadow
- [ ] Consistent shadow styles
- [ ] Cards: Slight elevation
- [ ] Avoid heavy shadows (clutter)

---

## 📱 Responsive Design

### Breakpoints (Tailwind)
- [ ] `sm`: 640px
- [ ] `md`: 768px
- [ ] `lg`: 1024px
- [ ] `xl`: 1280px
- [ ] `2xl`: 1536px

### Mobile-First
- [ ] Design for mobile first
- [ ] Progressive enhancement for larger screens
- [ ] Touch-friendly tap targets (min 44x44px)
- [ ] Readable font sizes on small screens
- [ ] Collapsible navigation on mobile

---

## 🔐 Security & Environment

### Environment Variables
- [ ] Use `.env` file
- [ ] Never commit secrets
- [ ] Use `NEXT_PUBLIC_` prefix for client-side vars
- [ ] Clear placeholders in `.env.example` (e.g., `{{API_KEY}}`)
- [ ] Add `.env` to `.gitignore`
- [ ] Secret scanning in CI/CD

### Snyk Integration
- [ ] Add Snyk to CI/CD pipeline
- [ ] Use `snyk test` locally
- [ ] Automatic PR scanning
- [ ] Monitor vulnerabilities over time

---

## 🚀 Next.js Best Practices

### Rendering Strategies
- [ ] **SSG** (`getStaticProps`): For static content
- [ ] **SSR** (`getServerSideProps`): For user-specific/real-time data
- [ ] **ISR**: For mostly static with periodic updates
- [ ] **CSR**: For non-SEO, highly interactive content

### Performance
- [ ] Code splitting by page (automatic)
- [ ] Lazy load heavy components (`React.lazy()`)
- [ ] Use `<Image>` component for optimized images
- [ ] Serve static assets from `public/`
- [ ] Configure caching headers

### SEO
- [ ] Use `<Head>` for meta tags
- [ ] Dynamic metadata per page
- [ ] Proper title and description
- [ ] Open Graph tags

### Navigation
- [ ] Use `<Link>` for internal navigation
- [ ] Prefetching enabled
- [ ] Custom 404 and 500 pages

---

## 🧪 Testing & Quality

### Code Quality
- [ ] ESLint configured
- [ ] Prettier for formatting
- [ ] TypeScript for type safety
- [ ] Pre-commit hooks

### Component Testing
- [ ] Unit tests for utilities
- [ ] Component tests for UI
- [ ] Integration tests for flows
- [ ] E2E tests for critical paths

---

## 📚 Documentation

### Component Documentation
- [ ] Props documented with TypeScript interfaces
- [ ] Usage examples
- [ ] Storybook stories (optional)
- [ ] README for complex components

### API Documentation
- [ ] OpenAPI/Swagger docs
- [ ] Example requests/responses
- [ ] Error codes documented
- [ ] Authentication flow

---

## ✅ Phase 2 Integration Checklist

When migrating components to `src/shared/components/`, ensure:

- [ ] All components follow this standards checklist
- [ ] TypeScript interfaces for all props
- [ ] Reusable and composable
- [ ] Accessible (ARIA, keyboard nav)
- [ ] Responsive design
- [ ] PES color system
- [ ] Proper error states
- [ ] Loading states
- [ ] Dark mode support

---

## 📖 Resources

- **Icons**: [Google Icons](https://fonts.google.com/icons)
- **Vectors**: [Freepik](https://www.freepik.com/)
- **Images**: [Pexels](https://www.pexels.com/), [Unsplash](https://unsplash.com/)
- **Contrast**: [Coolors Checker](https://coolors.co/contrast-checker)
- **Accessibility**: [WAVE Extension](https://wave.webaim.org/extension/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Design Tool**: [Canva](https://www.canva.com/)

---

**Next Step**: Use this checklist during Phase 2 component migration to ensure all components meet 4Good standards with PES branding.
