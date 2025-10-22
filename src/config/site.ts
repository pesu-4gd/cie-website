/**
 * Site-wide configuration and metadata
 */

export const SITE_CONFIG = {
  name: 'CIE - Centre for Innovation and Entrepreneurship',
  shortName: 'CIE',
  description: 'PES University Centre for Innovation and Entrepreneurship - Empowering students, alumni, and industry through innovation, entrepreneurship, and collaboration.',
  url: 'https://cie.pes.edu',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/cie_pesu',
    linkedin: 'https://linkedin.com/company/cie-pesu',
    instagram: 'https://instagram.com/cie_pesu',
    youtube: 'https://youtube.com/@cie_pesu',
  },
  contact: {
    email: 'cie@pes.edu',
    phone: '+91-80-XXXX-XXXX',
    address: 'PES University, 100 Feet Ring Road, BSK III Stage, Bangalore - 560085',
  },
} as const;

/**
 * CIE Brand Colors
 */
export const COLORS = {
  primary: {
    navy: '#3E3C6B',      // CIE Navy
    orange: '#F15A29',    // CIE Orange
    teal: '#2B9EB3',      // CIE Teal
    yellow: '#FFC107',    // Gold/Yellow
  },
  gradients: {
    innovation: 'from-[#2B9EB3] via-[#3E3C6B] to-[#2B9EB3]',  // Teal → Navy
    spark: 'from-[#FFC107] via-[#F15A29] to-[#3E3C6B]',       // Yellow → Orange → Navy
    ignite: 'from-[#F15A29] via-[#FFC107] to-[#F15A29]',      // Orange → Yellow
  },
} as const;

/**
 * Section-specific branding
 */
export const SECTIONS = {
  students: {
    title: 'Students',
    badge: 'Student Hub',
    color: COLORS.primary.navy,
    gradient: COLORS.gradients.innovation,
    path: '/students',
  },
  alumni: {
    title: 'Alumni',
    badge: 'Alumni Network',
    color: COLORS.primary.yellow,
    gradient: COLORS.gradients.spark,
    path: '/alumni',
  },
  industry: {
    title: 'Industry',
    badge: 'Industry Partners',
    color: COLORS.primary.teal,
    gradient: COLORS.gradients.innovation,
    path: '/industry',
  },
  insideCie: {
    title: 'Inside CIE',
    badge: 'Behind the Scenes',
    color: COLORS.primary.orange,
    gradient: COLORS.gradients.ignite,
    path: '/inside-cie',
  },
} as const;

export type SectionKey = keyof typeof SECTIONS;
