# CIE Design System — Centre for Innovation & Entrepreneurship (PES University)

This document defines the official color palette, typography, and interaction styles for the **CIE Website (2025)**.  
All contributors and AI tools (e.g., GitHub Copilot) must adhere to these standards for consistency and accessibility.

---

## 🎨 COLOR PALETTE

| Role | Name | HEX | Usage |
|------|------|-----|-------|
| **Primary Brand** | Navy Blue | `#3E3C6B` | Headers, navbars, primary text, footers |
| **Accent** | Vibrant Orange | `#F15A29` | Buttons, highlights, CTAs |
| **Secondary** | Teal Blue | `#2B9EB3` | Secondary buttons, icons, borders |
| **Support** | Forest Green `#3AA76D` | Success indicators |
|  | Warm Red `#E53935` | Errors, urgent CTAs |
|  | Golden Yellow `#FFC107` | Awards, highlights |
| **Neutrals** | White `#FFFFFF` | Backgrounds |
|  | Light Gray `#F5F5F5` | Section separators |
|  | Medium Gray `#9E9E9E` | Secondary text |
|  | Dark Gray `#333333` | Body text |
|  | Near Black `#1A1A1A` | Headlines, high contrast text |

---

## 🌈 GRADIENTS

```css
--gradient-innovation: linear-gradient(135deg, #2B9EB3 0%, #3E3C6B 100%);
--gradient-ignite: linear-gradient(135deg, #F15A29 0%, #FFC107 100%);
--gradient-spark: linear-gradient(135deg, #FFC107 0%, #F15A29 100%);
```

---

## ✏️ TYPOGRAPHY

- **Font:** `Inter`, `Poppins`, or `Open Sans` (Sans-serif)
- **H1:** 48–64px, bold, color `#3E3C6B`
- **H2:** 36–48px, bold, color `#3E3C6B`
- **H3:** 24–32px, medium, color `#333333`
- **Body:** 16–18px, regular, color `#333333`
- **Secondary Text:** 14–16px, `#757575`

---

## 🔘 BUTTONS

| Type | Background | Text | Border | Hover |
|------|-------------|------|---------|--------|
| **Primary CTA** | `#F15A29` | White | none | Darken 10% |
| **Secondary CTA** | `#2B9EB3` | White | none | Darken 10% |
| **Tertiary / Ghost** | Transparent | `#3E3C6B` | `2px solid #3E3C6B` | Fill light gray on hover |

---

## 🔗 INTERACTIVE STATES

- **Links:** Teal `#2B9EB3`; underline + Orange `#F15A29` on hover  
- **Focus:** `2px solid #2B9EB3`
- **Hover Effects:** Darken background color by 10–15%

---

## ⚙️ SECTION COLOR THEMES

| Section | Palette | Notes |
|----------|----------|-------|
| **EIE** | Navy + Teal | Core learning program |
| **Ignite** | Navy + Orange + Red | “Flame” motif |
| **Spark** | Navy + Yellow + Orange | “Lightning” motif |
| **Industry / Mentorship** | Navy + Teal + Green | Professional look |

---

## 📐 DESIGN RULES

- **70–20–10 Rule**  
  - 70% Neutrals  
  - 20% Navy (primary)  
  - 10% Accents (Orange/Teal)
- Use gradients for hero or CTA sections only.
- Maintain at least 4.5:1 contrast ratio for text (WCAG 2.1 AA).

---

## 💡 EXAMPLES

**Primary CTA**
```html
<button class="bg-[#F15A29] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#d94e23]">
  Join CIE Ignite
</button>
```

**Gradient Section**
```html
<section class="bg-gradient-to-br from-[#2B9EB3] to-[#3E3C6B] text-white py-20">
  <h1 class="text-5xl font-bold">CIE Spark</h1>
  <p class="text-lg">Where Innovation Begins</p>
</section>
```

---

## 🧠 COPILOT USAGE

When prompting GitHub Copilot, include this directive:

```
Follow the CIE Design System defined in /docs/design/CIE-Design-System.md.
Use Navy (#3E3C6B) as primary, Orange (#F15A29) as accent, and Teal (#2B9EB3) as secondary.
Ensure accessible color contrast and adhere to defined typography scales.
```

---

### Last Updated: October 2025  
Maintained by: CIE Web Team, PES University
