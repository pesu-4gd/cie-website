# CIE Design System - Quick Reference Card

## 🎨 Color Palette

```
PRIMARY BRAND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Navy Blue    #3E3C6B    Headers, navbars, primary text, footers

ACCENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Orange       #F15A29    Buttons, highlights, CTAs

SECONDARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Teal Blue    #2B9EB3    Secondary buttons, icons, borders

SUPPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Green        #3AA76D    Success indicators
Red          #E53935    Errors, urgent CTAs
Yellow       #FFC107    Awards, highlights

NEUTRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
White        #FFFFFF    Backgrounds
Light Gray   #F5F5F5    Section separators
Medium Gray  #9E9E9E    Secondary text
Dark Gray    #333333    Body text
Near Black   #1A1A1A    Headlines, high contrast
```

## 📐 Gradients

```css
/* Innovation (EIE) - Teal to Navy */
background: linear-gradient(135deg, #2B9EB3 0%, #3E3C6B 100%);
className="bg-gradient-to-br from-[#2B9EB3] to-[#3E3C6B]"

/* Ignite (Startup) - Orange to Yellow */
background: linear-gradient(135deg, #F15A29 0%, #FFC107 100%);
className="bg-gradient-to-br from-[#F15A29] to-[#FFC107]"

/* Spark (Innovation) - Yellow to Orange */
background: linear-gradient(135deg, #FFC107 0%, #F15A29 100%);
className="bg-gradient-to-br from-[#FFC107] to-[#F15A29]"
```

## 🔘 Buttons

```tsx
// Primary CTA (Orange)
<button className="bg-[#F15A29] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e24116]">
  Join Now
</button>

// Secondary CTA (Teal)
<button className="bg-[#2B9EB3] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#268295]">
  Learn More
</button>

// Tertiary/Ghost (Navy Border)
<button className="bg-transparent text-[#3E3C6B] px-6 py-3 rounded-xl font-semibold border-2 border-[#3E3C6B] hover:bg-[#3E3C6B] hover:text-white">
  Explore
</button>
```

## 🎴 Cards

```tsx
// Standard Card
<div className="cie-card p-6">
  <h3 className="text-[#3E3C6B] text-xl font-bold">Title</h3>
  <p className="text-[#333333]">Content</p>
</div>

// Featured Card
<div className="cie-card-featured p-6 border-t-4 border-[#F15A29]">
  <h3 className="cie-heading text-xl font-bold">Featured</h3>
</div>

// Interactive Card
<div className="cie-card-interactive p-6 cursor-pointer">
  <h3 className="text-[#3E3C6B] text-xl font-bold">Click Me</h3>
</div>
```

## 📝 Typography

```tsx
// H1 - Large Headlines
<h1 className="text-5xl font-bold text-[#3E3C6B]">Main Headline</h1>

// H2 - Section Headers
<h2 className="text-4xl font-bold text-[#3E3C6B]">Section Header</h2>

// H3 - Subsections
<h3 className="text-2xl font-medium text-[#333333]">Subsection</h3>

// Body Text
<p className="text-base text-[#333333]">Body content</p>

// Secondary Text
<p className="text-sm text-[#9E9E9E]">Secondary info</p>

// Gradient Text
<span className="cie-text-gradient font-bold text-3xl">Gradient Text</span>
```

## 🔗 Links & States

```tsx
// Default Link
<a href="#" className="text-[#2B9EB3] hover:text-[#F15A29] hover:underline">
  Click here
</a>

// Focus State
<button className="focus:ring-2 focus:ring-[#2B9EB3] focus:ring-offset-2">
  Focusable
</button>
```

## 🏷️ Badges & Tags

```tsx
// Solid Badge
<span className="cie-badge">New</span>

// Outline Badge
<span className="cie-badge-outline">Featured</span>

// Custom Colors
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#F15A29] text-white">
  Ignite
</span>

<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#2B9EB3] text-white">
  EIE
</span>
```

## 📊 Section Themes

```tsx
// EIE Section (Navy + Teal)
<section className="bg-gradient-to-br from-[#2B9EB3] to-[#3E3C6B] text-white">
  <h2>EIE Program</h2>
</section>

// Ignite Section (Orange + Yellow)
<section className="bg-gradient-to-br from-[#F15A29] to-[#FFC107] text-white">
  <h2>CIE Ignite</h2>
</section>

// Spark Section (Yellow + Orange)
<section className="bg-gradient-to-br from-[#FFC107] to-[#F15A29] text-white">
  <h2>CIE Spark</h2>
</section>

// Industry Section (Navy + Teal + Green)
<section className="bg-[#F5F5F5]">
  <h2 className="text-[#3E3C6B] border-b-4 border-[#3AA76D]">Industry Partners</h2>
</section>
```

## 🎯 Utility Classes

```css
/* Background Colors */
.bg-cie-navy        /* #3E3C6B */
.bg-cie-orange      /* #F15A29 */
.bg-cie-teal        /* #2B9EB3 */

/* Text Colors */
.text-cie-navy      /* #3E3C6B */
.text-cie-orange    /* #F15A29 */
.text-cie-teal      /* #2B9EB3 */

/* Border Colors */
.border-cie-navy    /* #3E3C6B */
.border-cie-orange  /* #F15A29 */
.border-cie-teal    /* #2B9EB3 */

/* Gradients */
.cie-gradient-innovation    /* Teal → Navy */
.cie-gradient-ignite        /* Orange → Yellow */
.cie-gradient-spark         /* Yellow → Orange */
.cie-gradient-primary       /* Navy → Orange */

/* Effects */
.cie-section-divider        /* Gradient divider line */
.cie-animate-fade-in-up     /* Fade in animation */
```

## ⚡ Quick Copy-Paste

```tsx
// Hero Section
<section className="cie-hero min-h-screen flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-6xl font-bold text-[#3E3C6B] mb-4">
      Welcome to CIE
    </h1>
    <p className="text-xl text-[#333333] mb-8">
      Centre for Innovation & Entrepreneurship
    </p>
    <button className="bg-[#F15A29] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e24116] transition-all">
      Get Started
    </button>
  </div>
</section>

// Card Grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="cie-card p-6">
    <h3 className="text-xl font-bold text-[#3E3C6B] mb-3">Card Title</h3>
    <p className="text-[#333333]">Card description</p>
  </div>
</div>

// Section Header
<div className="mb-12">
  <h2 className="text-4xl font-bold text-[#3E3C6B] mb-2">Section Title</h2>
  <div className="cie-section-divider"></div>
  <p className="text-lg text-[#9E9E9E]">Section description</p>
</div>
```

## 📱 Responsive Breakpoints

```tsx
// Mobile First Approach
className="
  bg-[#F5F5F5]           /* Mobile */
  md:bg-white            /* Tablet */
  lg:bg-[#3E3C6B]        /* Desktop */
"

// Typography Responsive
className="
  text-3xl               /* Mobile */
  md:text-4xl            /* Tablet */
  lg:text-5xl            /* Desktop */
"
```

## ✅ Accessibility Checklist

- [ ] Use Navy (#3E3C6B) for primary text on light backgrounds
- [ ] Use White (#FFFFFF) for text on Navy/Orange/Teal backgrounds
- [ ] Maintain 4.5:1 contrast ratio minimum
- [ ] Add focus:ring-2 focus:ring-[#2B9EB3] to interactive elements
- [ ] Test with keyboard navigation
- [ ] Verify color-blind friendly combinations

## 🚫 What NOT to Do

❌ Don't use Orange text on White (use Navy instead)  
❌ Don't use Navy text on Teal background (low contrast)  
❌ Don't mix old PES colors (#1e3a8a, #f97316)  
❌ Don't use gradients everywhere (limit to hero/CTA sections)  
❌ Don't modify color values (use exact hex codes)  

## 📚 References

- **Full Design System**: `docs/design/CIE-Design-System.md`
- **Implementation Guide**: `CIE_COLOR_IMPLEMENTATION_GUIDE.md`
- **Change Summary**: `COLOR_REVAMP_SUMMARY.md`

---

**Quick Reference Version**: 1.0  
**Last Updated**: October 2025  
**Maintained by**: CIE Web Team
