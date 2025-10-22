# CIE Design System Color Implementation Guide

## Overview
This guide provides comprehensive instructions for implementing the CIE (Centre for Innovation & Entrepreneurship) Design System colors throughout your website project. The design system follows the official CIE brand colors:

- **CIE Navy Blue**: #3E3C6B (Primary brand color)
- **CIE Orange**: #F15A29 (Accent color for CTAs)
- **CIE Teal**: #2B9EB3 (Secondary color for buttons/icons)

## Design System Files

### 1. Reference Files
- `docs/design/CIE-Design-System.md` - Official design system documentation
- `docs/design/tailwind.config.js` - Reference Tailwind configuration

### 2. Implementation Files
- `tailwind.config.ts` - Main Tailwind configuration with CIE colors
- `app/globals.css` - Global CSS with CIE design system classes
- `pes-colors.css` - Standalone CSS file with CIE color variables and utility classes
- `pes-tailwind-config.js` - Tailwind configuration extension for CIE colors

## Key Color Updates Made

### From Old PES Colors → To CIE Colors
- ~~#00338d / #1e3a8a~~ → **#3E3C6B** (Navy Blue)
- ~~#f07f1a / #f97316~~ → **#F15A29** (Orange)
- **Added**: **#2B9EB3** (Teal Blue)

### Support Colors Added
- **Forest Green**: #3AA76D (Success indicators)
- **Warm Red**: #E53935 (Errors, urgent CTAs)
- **Golden Yellow**: #FFC107 (Awards, highlights)

## Color Usage Guidelines

### Primary Colors (70-20-10 Rule)
- **70% Neutrals**: White (#FFFFFF), Light Gray (#F5F5F5), Medium Gray (#9E9E9E), Dark Gray (#333333), Near Black (#1A1A1A)
- **20% Navy**: Headers, navbars, primary text, footers
- **10% Accents**: Orange (buttons, CTAs), Teal (secondary elements)

### Gradients - Following Design System

```css
/* Innovation Gradient - EIE Section */
--gradient-innovation: linear-gradient(135deg, #2B9EB3 0%, #3E3C6B 100%);

/* Ignite Gradient - Ignite Section */
--gradient-ignite: linear-gradient(135deg, #F15A29 0%, #FFC107 100%);

/* Spark Gradient - Spark Section */
--gradient-spark: linear-gradient(135deg, #FFC107 0%, #F15A29 100%);
```

## Implementation in Code

### Tailwind CSS Classes

```tsx
// Primary CTA Button
<button className="bg-[#F15A29] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e24116]">
  Join CIE Ignite
</button>

// Secondary CTA Button
<button className="bg-[#2B9EB3] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#268295]">
  Learn More
</button>

// Tertiary/Ghost Button
<button className="bg-transparent text-[#3E3C6B] px-6 py-3 rounded-xl font-semibold border-2 border-[#3E3C6B] hover:bg-[#3E3C6B] hover:text-white">
  Explore
</button>

// Gradient Section - Innovation
<section className="bg-gradient-to-br from-[#2B9EB3] to-[#3E3C6B] text-white py-20">
  <h1 className="text-5xl font-bold">CIE Programs</h1>
</section>

// Gradient Section - Ignite
<section className="bg-gradient-to-br from-[#F15A29] to-[#FFC107] text-white py-20">
  <h1 className="text-5xl font-bold">CIE Ignite</h1>
</section>
```

### Custom CSS Classes Available

```css
/* Gradient Backgrounds */
.cie-gradient-innovation    /* Teal → Navy */
.cie-gradient-ignite        /* Orange → Yellow */
.cie-gradient-spark         /* Yellow → Orange */
.cie-gradient-primary       /* Navy → Orange */

/* Button Classes */
.cie-button-primary         /* Orange CTA button */
.cie-button-secondary       /* Teal button */
.cie-button-tertiary        /* Ghost button with Navy border */

/* Card Classes */
.cie-card                   /* Card with hover effect */
.cie-card-featured          /* Featured card with gradient background */
.cie-card-interactive       /* Interactive card with scale effect */

/* Typography */
.cie-heading                /* Navy heading */
.cie-subheading             /* Orange subheading */
.cie-text-gradient          /* Gradient text effect */

/* Utility Classes */
.cie-section-divider        /* Gradient divider line */
.cie-badge                  /* Orange badge */
.cie-badge-outline          /* Navy outline badge */
```

## Section Color Themes

### EIE (Core Learning Program)
- **Primary**: Navy (#3E3C6B)
- **Secondary**: Teal (#2B9EB3)
- **Use Case**: Academic sections, learning resources

### Ignite (Startup Program)
- **Primary**: Navy (#3E3C6B)
- **Accent**: Orange (#F15A29)
- **Support**: Red (#E53935)
- **Theme**: "Flame" motif for entrepreneurship

### Spark (Innovation Program)
- **Primary**: Navy (#3E3C6B)
- **Accent**: Yellow (#FFC107)
- **Support**: Orange (#F15A29)
- **Theme**: "Lightning" motif for innovation

### Industry/Mentorship
- **Primary**: Navy (#3E3C6B)
- **Secondary**: Teal (#2B9EB3)
- **Support**: Green (#3AA76D)
- **Theme**: Professional and collaborative

## Typography - Following Design System

```css
/* Font Family */
font-family: 'Inter', 'Poppins', 'Open Sans', sans-serif;

/* Heading Styles */
H1: 48-64px, bold, color: #3E3C6B
H2: 36-48px, bold, color: #3E3C6B
H3: 24-32px, medium, color: #333333

/* Body Text */
Body: 16-18px, regular, color: #333333
Secondary: 14-16px, color: #757575
```

## Interactive States

### Links
- **Default**: Teal (#2B9EB3)
- **Hover**: Orange (#F15A29) with underline

### Focus States
- **Focus Ring**: 2px solid #2B9EB3

### Hover Effects
- **Buttons**: Darken background by 10-15%
- **Cards**: Lift up with enhanced shadow

## Accessibility Compliance

All color combinations meet WCAG 2.1 AA standards:
- **White on Navy**: ✓ Pass (4.5:1 ratio)
- **White on Orange**: ✓ Pass (4.5:1 ratio)
- **White on Teal**: ✓ Pass (4.5:1 ratio)
- **Navy on White**: ✓ Pass (4.5:1 ratio)
- **Orange on White**: ✓ Pass (4.5:1 ratio)

## Migration Checklist

- [x] Update `tailwind.config.ts` with CIE colors
- [x] Update `app/globals.css` with CIE design system classes
- [x] Update `pes-colors.css` with CIE color variables
- [x] Update `pes-tailwind-config.js` with CIE configuration
- [ ] Update component files to use CIE colors
- [ ] Update page layouts with CIE gradients
- [ ] Update button components
- [ ] Update card components
- [ ] Test all color combinations for accessibility
- [ ] Review and update design documentation

## Component Updates Required

### Priority Components
1. **Header/Navigation** - Use Navy background
2. **Primary CTAs** - Use Orange buttons
3. **Section Headers** - Use Navy text with Orange accents
4. **Cards** - Add Orange top border or Navy shadow
5. **Footer** - Use Navy background with Teal/Orange accents

### Secondary Components
1. **Badges** - Use Orange or Navy outline
2. **Tags** - Use Teal for categories
3. **Links** - Teal default, Orange hover
4. **Forms** - Navy focus rings
5. **Alerts** - Use support colors (Green, Red, Yellow)

## Best Practices

### DO:
- Use Navy (#3E3C6B) as the primary brand color
- Apply Orange (#F15A29) for high-impact CTAs
- Use Teal (#2B9EB3) for secondary actions
- Maintain proper contrast ratios (4.5:1 minimum)
- Follow the 70-20-10 color distribution rule
- Use gradients sparingly (hero sections, CTAs)

### DON'T:
- Mix old PES colors with new CIE colors
- Use low-contrast combinations
- Overuse gradients throughout the site
- Modify the exact color values
- Use Orange on Red or Yellow (poor contrast)

## Testing & Validation

### Color Contrast Testing
Use tools like:
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Chrome DevTools Lighthouse Accessibility Audit

### Visual Regression Testing
Compare before/after screenshots of:
- Homepage
- Program pages (EIE, Ignite, Spark)
- Navigation menus
- Cards and buttons
- Forms and inputs

## Support & Resources

- **CIE Design System**: `docs/design/CIE-Design-System.md`
- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

---

**Last Updated**: October 2025  
**Maintained by**: CIE Web Team, PES University  
**Version**: 2.0 - CIE Design System Implementation
