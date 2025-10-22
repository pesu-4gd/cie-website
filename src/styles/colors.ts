/**
 * CIE Color System - Inspired by professional design (4gd.ai)
 * 
 * This defines the complete color palette, usage rules, and combinations
 * for the CIE website to ensure consistent, professional design.
 */

// ============================================================================
// PRIMARY BRAND COLORS
// ============================================================================

export const BRAND_COLORS = {
  // CIE Navy - Primary brand color, authority, professionalism
  navy: {
    DEFAULT: '#3E3C6B',
    dark: '#2E2C4B',
    light: '#4E4C7B',
    rgb: '62, 60, 107',
  },
  
  // CIE Teal - Innovation, technology, trust
  teal: {
    DEFAULT: '#2B9EB3',
    dark: '#1B7E93',
    light: '#3BAEC3',
    rgb: '43, 158, 179',
  },
  
  // CIE Orange - Energy, creativity, action
  orange: {
    DEFAULT: '#F15A29',
    dark: '#D14419',
    light: '#F37A49',
    rgb: '241, 90, 41',
  },
  
  // CIE Yellow - Optimism, success, highlight
  yellow: {
    DEFAULT: '#FFC107',
    dark: '#FFA000',
    light: '#FFD54F',
    rgb: '255, 193, 7',
  },
} as const;

// ============================================================================
// GRADIENT DEFINITIONS
// ============================================================================

export const GRADIENTS = {
  // Innovation Gradient - Technology, Research, Future
  innovation: {
    css: 'linear-gradient(135deg, #2B9EB3 0%, #3E3C6B 100%)',
    tailwind: 'from-[#2B9EB3] to-[#3E3C6B]',
    stops: ['#2B9EB3', '#3E3C6B'],
  },
  
  // Spark Gradient - Energy, Creativity, Ideas
  spark: {
    css: 'linear-gradient(135deg, #FFC107 0%, #F15A29 50%, #3E3C6B 100%)',
    tailwind: 'from-[#FFC107] via-[#F15A29] to-[#3E3C6B]',
    stops: ['#FFC107', '#F15A29', '#3E3C6B'],
  },
  
  // Ignite Gradient - Action, Launch, Transform
  ignite: {
    css: 'linear-gradient(135deg, #F15A29 0%, #FFC107 100%)',
    tailwind: 'from-[#F15A29] to-[#FFC107]',
    stops: ['#F15A29', '#FFC107'],
  },
  
  // Ocean Gradient - Calm, Professional, Trust
  ocean: {
    css: 'linear-gradient(135deg, #2B9EB3 0%, #1B7E93 100%)',
    tailwind: 'from-[#2B9EB3] to-[#1B7E93]',
    stops: ['#2B9EB3', '#1B7E93'],
  },
} as const;

// ============================================================================
// SECTION COLOR ASSIGNMENTS (like 4gd.ai's organized approach)
// ============================================================================

export const SECTION_COLORS = {
  students: {
    primary: BRAND_COLORS.teal.DEFAULT,
    secondary: BRAND_COLORS.navy.DEFAULT,
    gradient: GRADIENTS.innovation,
    accent: BRAND_COLORS.yellow.DEFAULT,
    hero: {
      background: BRAND_COLORS.navy.DEFAULT,
      hexagonAccent: BRAND_COLORS.teal.DEFAULT,
    },
  },
  
  alumni: {
    primary: BRAND_COLORS.navy.DEFAULT,
    secondary: BRAND_COLORS.orange.DEFAULT,
    gradient: GRADIENTS.spark,
    accent: BRAND_COLORS.teal.DEFAULT,
    hero: {
      background: BRAND_COLORS.navy.DEFAULT,
      hexagonAccent: BRAND_COLORS.orange.DEFAULT,
    },
  },
  
  industry: {
    primary: BRAND_COLORS.orange.DEFAULT,
    secondary: BRAND_COLORS.teal.DEFAULT,
    gradient: GRADIENTS.ignite,
    accent: BRAND_COLORS.navy.DEFAULT,
    hero: {
      background: BRAND_COLORS.navy.DEFAULT,
      hexagonAccent: BRAND_COLORS.orange.DEFAULT,
    },
  },
  
  insideCie: {
    primary: BRAND_COLORS.yellow.DEFAULT,
    secondary: BRAND_COLORS.navy.DEFAULT,
    gradient: GRADIENTS.ignite,
    accent: BRAND_COLORS.teal.DEFAULT,
    hero: {
      background: BRAND_COLORS.navy.DEFAULT,
      hexagonAccent: BRAND_COLORS.yellow.DEFAULT,
    },
  },
  
  landing: {
    primary: BRAND_COLORS.navy.DEFAULT,
    secondary: BRAND_COLORS.teal.DEFAULT,
    gradient: GRADIENTS.innovation,
    accent: BRAND_COLORS.orange.DEFAULT,
    hero: {
      background: BRAND_COLORS.navy.DEFAULT,
      hexagonAccent: BRAND_COLORS.teal.DEFAULT,
    },
  },
} as const;

// ============================================================================
// UI ELEMENT COLORS
// ============================================================================

export const UI_COLORS = {
  // CTAs and Actions
  cta: {
    primary: GRADIENTS.ignite.tailwind, // Orange to Yellow
    secondary: 'bg-white/10 border-white/20',
    hover: 'hover:shadow-lg hover:shadow-orange-500/50',
  },
  
  // Cards
  card: {
    background: 'bg-white',
    border: 'border-gray-200',
    hover: 'hover:shadow-xl hover:scale-105',
    gradient: 'bg-gradient-to-br',
  },
  
  // Text
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    light: 'text-gray-300',
    white: 'text-white',
  },
  
  // Backgrounds
  background: {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 via-white to-blue-50',
  },
} as const;

// ============================================================================
// USAGE RULES (inspired by 4gd.ai's consistency)
// ============================================================================

export const COLOR_USAGE_RULES = {
  hero: {
    background: 'Always use navy (#3E3C6B) as base',
    hexagons: 'Use section-specific accent color',
    text: 'White for primary, white/80% for secondary',
    cta: 'Orange-Yellow gradient for primary action',
  },
  
  sections: {
    navigation: 'Use section primary color for icon backgrounds',
    cards: 'White background with section-colored accents',
    stats: 'Use gradient variants of section colors',
  },
  
  interactive: {
    hover: 'Increase opacity/brightness by 20%',
    active: 'Darken by 10%',
    disabled: 'Reduce opacity to 50%',
  },
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get section colors for a specific page
 */
export function getSectionColors(section: keyof typeof SECTION_COLORS) {
  return SECTION_COLORS[section];
}

/**
 * Convert hex to RGB
 */
export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 0, 0';
}

/**
 * Get gradient CSS
 */
export function getGradientCss(gradientName: keyof typeof GRADIENTS): string {
  return GRADIENTS[gradientName].css;
}

/**
 * Get gradient Tailwind classes
 */
export function getGradientTailwind(gradientName: keyof typeof GRADIENTS): string {
  return `bg-gradient-to-br ${GRADIENTS[gradientName].tailwind}`;
}
