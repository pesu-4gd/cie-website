# CIE Website Color Palette Summary

## 🎨 Professional Color System Implementation

Each section of the website now has its own unique color identity while maintaining the consistent Navy background for professionalism.

---

## 🏠 **Landing Page** (Home)
**File:** `app/page.tsx`

**Color Scheme:**
- **Background:** Navy (#3E3C6B)
- **Hexagon Accent:** **Teal (#2B9EB3)** ✨
- **Title Colors:** 
  - "Ideate" - White
  - "Innovate" - Teal (#2B9EB3)
  - "Inspire" - Orange (#F15A29)
- **CTA Buttons:** Orange → Yellow gradient

**Visual Identity:** Fresh, welcoming, multi-colored to represent all sections

---

## 🎓 **Students Section**
**File:** `app/students/page.tsx`

**Color Scheme:**
- **Background:** Navy (#3E3C6B)
- **Hexagon Accent:** **Teal (#2B9EB3)** 🌊
- **Title Gradient:** Teal → Cyan
- **CTA Buttons:** Teal gradient
- **Icon Colors:** Blue, Green, Purple, Orange (diverse)

**Visual Identity:** Teal represents innovation, growth, and fresh ideas - perfect for students starting their journey

**Why Teal?**
- Represents innovation and creativity
- Associated with balance and calm confidence
- Appeals to young, forward-thinking audience

---

## 🎯 **Alumni Section**
**File:** `app/alumni/page.tsx`

**Color Scheme:**
- **Background:** Navy (#3E3C6B)
- **Hexagon Accent:** **Orange (#F15A29)** 🔥
- **Title Gradient:** Orange → Yellow
- **CTA Buttons:** Orange → Yellow gradient
- **Icon Colors:** Blue, Green, Purple, Orange

**Visual Identity:** Orange represents energy, success, and warmth - perfect for alumni giving back

**Why Orange?**
- Represents achievement and enthusiasm
- Warm, welcoming for returning alumni
- Energetic but professional
- Signifies the "spark" they can reignite

---

## 🏢 **Industry Section**
**File:** `app/industry/page.tsx`

**Color Scheme:**
- **Background:** Navy (#3E3C6B)
- **Hexagon Accent:** **Orange (#F15A29)** 🚀
- **Title Gradient:** Orange → Yellow
- **CTA Buttons:** Orange gradient
- **Icon Colors:** Blue, Green, Purple, Orange

**Visual Identity:** Orange represents bold partnerships and impactful collaborations

**Why Orange?**
- Represents action and results-driven mindset
- Conveys confidence and professionalism
- Energetic appeal for business partnerships
- Matches the innovation theme

---

## 🏛️ **Inside CIE Section**
**File:** `app/inside-cie/page.tsx`

**Color Scheme:**
- **Background:** Navy (#3E3C6B)
- **Hexagon Accent:** **Yellow (#FFC107)** ⭐
- **Title Gradient:** Yellow → Amber
- **CTA Buttons:** Yellow → Amber gradient
- **Icon Colors:** Blue, Green, Purple, Orange, Teal, Cyan

**Visual Identity:** Yellow represents illumination, knowledge, and institutional pride

**Why Yellow?**
- Represents enlightenment and knowledge
- Bright, inviting for learning about CIE
- Signifies optimism and institutional pride
- Stands out as unique "behind the scenes"

---

## 🎨 **Complete Color Reference**

### Brand Colors (from `src/styles/colors.ts`)

```typescript
BRAND_COLORS = {
  navy: {
    DEFAULT: '#3E3C6B',  // Primary background
    dark: '#2E2B4F',
    light: '#4E4A7B'
  },
  teal: {
    DEFAULT: '#2B9EB3',  // Students accent
    dark: '#1E7A8F',
    light: '#3FB8CE'
  },
  orange: {
    DEFAULT: '#F15A29',  // Alumni & Industry accent
    dark: '#D14820',
    light: '#FF6A3D'
  },
  yellow: {
    DEFAULT: '#FFC107',  // Inside CIE accent
    dark: '#E6A800',
    light: '#FFD54F'
  }
}
```

### Gradient Definitions

```typescript
GRADIENTS = {
  innovation: 'from-[#2B9EB3] to-[#3E3C6B]',     // Teal → Navy
  spark: 'from-[#FFC107] via-[#F15A29] to-[#3E3C6B]',  // Yellow → Orange → Navy
  ignite: 'from-[#F15A29] to-[#FFC107]',         // Orange → Yellow
  ocean: 'from-[#2B9EB3] to-[#1E7A8F]'           // Teal (lighter → darker)
}
```

---

## 🎯 **Design Philosophy**

### Consistency
- **Unified Navy Background** across all hero sections
- Professional, sophisticated baseline
- Creates visual cohesion across the site

### Differentiation
- **Section-specific accent colors** for identity
- Each section feels unique but part of the whole
- Easy navigation through color association

### Professional Palette
- Limited to 4 core colors (Navy, Teal, Orange, Yellow)
- Harmonious gradients for visual interest
- Clean, modern appearance like 4gd.ai

### User Experience
- **Color Psychology:**
  - Navy = Trust, professionalism, stability
  - Teal = Innovation, growth, balance
  - Orange = Energy, success, action
  - Yellow = Knowledge, optimism, clarity

- **Visual Hierarchy:**
  - Dark backgrounds focus attention on content
  - Bright hexagons create dynamic feel
  - Gradients add depth without clutter

---

## 🔧 **Interactive Hexagon Behavior**

### Default State (Skeleton Mode)
- Hexagon borders **always visible** at 0.12 opacity
- Creates subtle grid pattern
- Professional, not overwhelming
- Maintains visual interest at rest

### Hover State
- **Single hexagon** highlights at cursor position
- Border opacity increases to 0.6
- Subtle glow effect appears
- Clean, precise interaction

### Mouse Leave Behavior
- **Fixed:** Hexagons reset immediately when mouse leaves hero section
- No "stuck" highlighted hexagons
- Smooth transition back to skeleton mode
- Mouse position set to off-screen (-1000, -1000)

---

## 📊 **Section Color Matrix**

| Section | Hex Background | Hex Accent | Title Gradient | Primary Emotion |
|---------|----------------|------------|----------------|-----------------|
| **Landing** | Navy | **Teal** | Multi-color | Welcome, Diverse |
| **Students** | Navy | **Teal** | Teal→Cyan | Innovation, Growth |
| **Alumni** | Navy | **Orange** | Orange→Yellow | Success, Energy |
| **Industry** | Navy | **Orange** | Orange→Yellow | Action, Partnership |
| **Inside CIE** | Navy | **Yellow** | Yellow→Amber | Knowledge, Pride |

---

## 🎨 **Color Usage Guidelines**

### When to Use Each Color

**Teal (#2B9EB3)**
- Student-facing content
- Innovation and creativity themes
- New beginnings, fresh ideas
- Technology and digital themes

**Orange (#F15A29)**
- Alumni engagement
- Industry partnerships
- Action-oriented content
- Success stories and achievements

**Yellow (#FFC107)**
- Institutional information
- Knowledge and learning content
- Administrative sections
- Highlights and important notices

**Navy (#3E3C6B)**
- Primary backgrounds
- Headers and footers
- Base layer for all sections
- Professional grounding element

### Gradient Usage

**Innovation Gradient** (Teal → Navy)
- Student programs
- New initiatives
- Forward-looking content

**Spark Gradient** (Yellow → Orange → Navy)
- Special events
- High-energy announcements
- Competitions and challenges

**Ignite Gradient** (Orange → Yellow)
- CTAs and buttons
- Alumni/Industry sections
- Action-focused elements

---

## 🚀 **Implementation Status**

✅ **Completed:**
- Landing page with Teal hexagons
- Students page with Teal hexagons
- Alumni page with Orange hexagons
- Industry page with Orange hexagons
- Inside CIE page with Yellow hexagons
- Interactive hexagon component with mouse leave fix
- Comprehensive color system (`src/styles/colors.ts`)

✅ **Fixed Issues:**
- Hexagons staying lit after leaving hero section
- Each section now has distinct color identity
- Professional consistency maintained

---

## 📝 **Testing Checklist**

Test each page's hexagonal hero:

- [ ] **Landing** - Teal hexagons visible and interactive
- [ ] **Students** - Teal hexagons, different from landing
- [ ] **Alumni** - Orange hexagons, warm feel
- [ ] **Industry** - Orange hexagons, professional
- [ ] **Inside CIE** - Yellow hexagons, bright and informative

Test interaction behavior:
- [ ] Skeleton hexagons visible by default
- [ ] Single hexagon highlights on hover
- [ ] Hexagons reset when mouse leaves hero section
- [ ] No hexagons stay "stuck" in lit state
- [ ] Smooth transitions between states

---

## 🎨 **Visual Color Palette**

```
Navy:   ████████  #3E3C6B  (Base - All sections)
Teal:   ████████  #2B9EB3  (Students, Landing)
Orange: ████████  #F15A29  (Alumni, Industry)
Yellow: ████████  #FFC107  (Inside CIE)
```

**Harmonious Combinations:**
- Navy + Teal = Fresh, Innovative
- Navy + Orange = Bold, Energetic
- Navy + Yellow = Bright, Informative
- Teal + Orange + Yellow = Full palette (Landing)

---

## 🌟 **Professional Design Comparison**

**Inspired by 4gd.ai:**
- ✅ Limited, cohesive color palette
- ✅ Consistent dark backgrounds
- ✅ Section-specific accents
- ✅ Clean, modern gradients
- ✅ Professional typography
- ✅ Subtle interactions
- ✅ Clear visual hierarchy

**CIE's Unique Identity:**
- Multi-section color system
- Interactive hexagonal backgrounds
- Educational institution warmth
- Youth-oriented energy
- Innovation-focused design

---

## 📖 **Quick Reference**

**To change section colors:**
1. Edit `src/styles/colors.ts`
2. Update `SECTION_COLORS` object
3. Colors auto-propagate to pages

**To adjust hexagon behavior:**
1. Edit `src/components/ui/interactive-hexagon-background.tsx`
2. Modify `INTERACTION_RADIUS` (currently 45px)
3. Adjust opacity values (skeleton: 0.12, hover: 0.6)

**Current setup uses:**
- Different accent colors per section
- Same Navy base everywhere
- Professional 4gd.ai-inspired palette
- Clean, precise interactions

---

**Last Updated:** After fixing hexagon mouse leave behavior
**Status:** ✅ Production Ready
