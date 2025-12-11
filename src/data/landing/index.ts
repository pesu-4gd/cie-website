/**
 * Landing page data and content
 */

import { 
  GraduationCap, 
  Users, 
  Building2, 
  Lightbulb,
  Rocket,
  BookOpen,
  Award,
  TrendingUp,
  Heart,
  Globe,
  Target,
  Briefcase
} from 'lucide-react';

/**
 * Hero section content
 */
export const HERO_CONTENT = {
  badge: {
    text: 'PES University',
    icon: GraduationCap,
  },
  title: {
    line1: 'Centre for Innovation',
    line2: 'and Entrepreneurship',
  },
  subtitle: 'Empowering the next generation of innovators and entrepreneurs through comprehensive programs, mentorship, and resources.',
  cta: {
    primary: {
      text: 'Explore Programs',
      href: '/students/programs',
    },
    secondary: {
      text: 'Join CIE',
      href: '/students/startup-program',
    },
  },
} as const;

/**
 * Key statistics
 */
export const STATS = [
  {
    value: '2,159',
    label: 'Students Enrolled',
    icon: Users,
    color: 'blue',
  },
  {
    value: '500+',
    label: 'Active Alumni',
    icon: GraduationCap,
    color: 'green',
  },
  {
    value: '100+',
    label: 'Industry Partners',
    icon: Building2,
    color: 'orange',
  },
  {
    value: '150+',
    label: 'Startups Founded',
    icon: Rocket,
    color: 'purple',
  },
] as const;

/**
 * Main sections (Students, Alumni, Industry, Inside CIE)
 */
export const MAIN_SECTIONS = [
  {
    id: 'students',
    title: 'For Students',
    description: 'Transform your ideas into reality with comprehensive programs, mentorship, and funding opportunities',
    icon: GraduationCap,
    href: '/students',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    highlights: [
      'Student Startup Program',
      'EIE Courses & Workshops',
      'Up to $200K Funding',
      'Industry Mentorship',
    ],
    stats: {
      programs: '15+',
      students: '2,159',
      success: '95%',
    },
  },
  {
    id: 'alumni',
    title: 'For Alumni',
    description: 'Stay connected, give back, and continue your journey of innovation with our thriving alumni community',
    icon: Users,
    href: '/alumni',
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    highlights: [
      'Alumni Angel Fund',
      'Mentorship Programs',
      'Networking Events',
      'Give Back Initiatives',
    ],
    stats: {
      alumni: '500+',
      startups: '150+',
      funding: '$50M+',
    },
  },
  {
    id: 'industry',
    title: 'For Industry',
    description: 'Partner with CIE to access cutting-edge research, talented innovators, and transformative collaboration opportunities',
    icon: Building2,
    href: '/industry',
    color: 'teal',
    gradient: 'from-teal-500 to-teal-600',
    highlights: [
      'Research Collaborations',
      'Innovation Challenges',
      'Talent Pipeline',
      'Success Stories',
    ],
    stats: {
      partners: '100+',
      projects: '200+',
      innovations: '50+',
    },
  },
  {
    id: 'inside-cie',
    title: 'Inside CIE',
    description: 'Discover our mission, team, infrastructure, and the ecosystem that powers entrepreneurship at PES University',
    icon: Lightbulb,
    href: '/inside-cie',
    color: 'orange',
    gradient: 'from-orange-500 to-orange-600',
    highlights: [
      'Mission & Vision',
      'Team & Leadership',
      'Infrastructure',
      'Success Stories',
    ],
    stats: {
      years: '10+',
      events: '500+',
      impact: 'National',
    },
  },
] as const;

/**
 * Featured programs
 */
export const FEATURED_PROGRAMS = [
  {
    title: 'Student Startup Program',
    description: 'Comprehensive support to transform your idea into a thriving startup',
    icon: Rocket,
    href: '/students/startup-program',
    features: ['Up to $200K funding', 'Mentorship', 'Workspace', 'Legal support'],
    badge: 'Flagship',
    color: 'blue',
  },
  {
    title: 'EIE - Part 1 & 2',
    description: 'Foundational courses in innovation and entrepreneurship',
    icon: BookOpen,
    href: '/students/programs/eie',
    features: ['Credit course', 'Hands-on projects', 'Industry exposure', 'Certification'],
    badge: 'Popular',
    color: 'green',
  },
  {
    title: 'CIE Bootcamp',
    description: 'Intensive 2-month program to accelerate your startup journey',
    icon: Award,
    href: '/students/programs/bootcamp',
    features: ['10 weeks', 'Expert mentors', 'Pitch practice', 'Funding ready'],
    badge: 'Accelerator',
    color: 'purple',
  },
  {
    title: 'Centers of Excellence',
    description: 'Engage with cutting-edge research in AI, Robotics, IoT, and more',
    icon: Globe,
    href: '/students/centers-of-excellence',
    features: ['CRAIS', 'QuaNaD', 'C-IoT', 'CHIPS'],
    badge: 'Research',
    color: 'teal',
  },
] as const;

/**
 * Key features/benefits
 */
export const FEATURES = [
  {
    title: 'Comprehensive Programs',
    description: 'From ideation to scale, we offer programs at every stage of your entrepreneurial journey',
    icon: Target,
    color: 'blue',
  },
  {
    title: 'Industry Mentorship',
    description: 'Learn from successful entrepreneurs, industry leaders, and domain experts',
    icon: Users,
    color: 'green',
  },
  {
    title: 'Funding Opportunities',
    description: 'Access grants, competitions, and angel funding up to $200K',
    icon: TrendingUp,
    color: 'purple',
  },
  {
    title: 'Global Network',
    description: 'Connect with 500+ alumni, 100+ industry partners, and fellow innovators',
    icon: Globe,
    color: 'orange',
  },
  {
    title: 'World-Class Infrastructure',
    description: 'State-of-the-art labs, workspaces, and equipment for prototyping',
    icon: Building2,
    color: 'teal',
  },
  {
    title: 'Holistic Support',
    description: 'Legal, financial, technical, and business development support',
    icon: Heart,
    color: 'pink',
  },
] as const;

/**
 * Testimonials/Success stories
 */
export const TESTIMONIALS = [
  {
    name: 'Aditya Mehta',
    role: 'Founder & CEO, Epicure Robotics',
    batch: '2019',
    image: '/testimonials/aditya.jpg',
    quote: 'CIE provided the perfect environment to transform my robotics idea into a successful startup. The mentorship and funding were game-changers.',
    company: 'Epicure Robotics',
    achievement: 'Raised $2M in Series A',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder, EduTech Solutions',
    batch: '2020',
    image: '/testimonials/priya.jpg',
    quote: 'The EIE program opened my eyes to entrepreneurship. Today, our EdTech platform serves 100K+ students across India.',
    company: 'EduTech Solutions',
    achievement: '100K+ users',
  },
  {
    name: 'Rahul Kumar',
    role: 'CTO, FinTech Innovations',
    batch: '2018',
    image: '/testimonials/rahul.jpg',
    quote: 'CIE Bootcamp prepared us for the real world. The intensive training and pitch practice helped us secure our first funding.',
    company: 'FinTech Innovations',
    achievement: 'Seed funded',
  },
] as const;

/**
 * Recent events
 */
export const RECENT_EVENTS = [
  {
    title: 'CIE Ignite 2025',
    description: 'Annual ideathon for 2nd-year students with ₹25K+ in prizes',
    date: '2025-01-15',
    type: 'Competition',
    href: '/students/events/cie-ignite',
    image: '/events/ignite.jpg',
    status: 'upcoming',
  },
  {
    title: 'Innovation Summit',
    description: 'Connect with industry leaders and showcase your innovations',
    date: '2025-02-20',
    type: 'Conference',
    href: '/students/events/innovation-summit',
    image: '/events/summit.jpg',
    status: 'upcoming',
  },
  {
    title: 'Startup Weekend',
    description: '54-hour hackathon to build and pitch your startup',
    date: '2025-03-10',
    type: 'Hackathon',
    href: '/students/events',
    image: '/events/startup-weekend.jpg',
    status: 'upcoming',
  },
] as const;

/**
 * CTA (Call to Action) content
 */
export const CTA_CONTENT = {
  title: 'Ready to Start Your Journey?',
  subtitle: 'Join thousands of students who have transformed their ideas into successful ventures through CIE\'s comprehensive ecosystem',
  primaryButton: {
    text: 'Apply to Student Startup Program',
    href: '/students/startup-program',
    icon: Rocket,
  },
  secondaryButton: {
    text: 'Explore All Programs',
    href: '/students/programs',
    icon: BookOpen,
  },
} as const;
