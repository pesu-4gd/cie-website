/**
 * Application routes and navigation structure
 */

export const ROUTES = {
  home: '/',
  
  // Main sections
  students: {
    root: '/students',
    programs: '/students/programs',
    startupProgram: '/students/startup-program',
    clubs: '/students/clubs',
    centersOfExcellence: '/students/centers-of-excellence',
    events: '/students/events',
    resources: '/students/resources',
    mentorship: '/students/mentorship',
    funding: '/students/funding',
    projects: '/students/projects',
    courses: '/students/courses',
    eie1: '/students/courses/eie-1',
    eie2: '/students/courses/eie-2',
    productManagement: '/students/courses/product-management-ai',
    paml: '/students/courses/paml',
    cieSpark: '/students/courses/cie-spark',
    faqs: '/students/faqs',
  },
  
  alumni: {
    root: '/alumni',
    directory: '/alumni/directory',
    association: '/alumni/association',
    mentorship: '/alumni/mentorship',
    giveBack: '/alumni/give-back',
    donations: '/alumni/donations',
    news: '/alumni/news',
    newsletter: '/alumni/newsletter',
    resources: '/alumni/resources',
    welcome: '/alumni/welcome',
  },
  
  industry: {
    root: '/industry',
    about: '/industry/about',
    collaborations: '/industry/collaborations',
    competitions: '/industry/competitions',
    events: '/industry/events',
    jobs: '/industry/jobs',
    successStories: '/industry/success-stories',
    contact: '/industry/contact',
  },
  
  insideCie: {
    root: '/inside-cie',
  },
  
  // General pages
  about: '/about',
  contact: '/contact',
  careers: '/careers',
  research: '/research',
  announcements: '/announcements',
  
  // Policies
  policies: {
    root: '/policies',
    privacy: '/policies/privacy',
    terms: '/policies/terms',
    cookies: '/policies/cookies',
    accessibility: '/policies/accessibility',
  },
  
  // Admin
  admin: {
    root: '/admin',
    dashboard: '/admin/dashboard',
  },
} as const;

/**
 * Navigation menu structure
 */
export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  items?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    title: 'Students',
    href: ROUTES.students.root,
    description: 'Programs, resources, and opportunities for students',
    items: [
      {
        title: 'Student Startup Program',
        href: ROUTES.students.startupProgram,
        description: 'Transform your ideas into startups',
      },
      {
        title: 'Programs',
        href: ROUTES.students.programs,
        description: 'EIE, Bootcamp, Basecamp, and more',
      },
      {
        title: 'Courses',
        href: ROUTES.students.courses,
        description: 'EIE Parts, PAML, Product Management and CIE Spark',
        items: [
          { title: 'EIE — Part 1', href: ROUTES.students.eie1, description: 'Essentials of Innovation & Entrepreneurship — Part 1' },
          { title: 'EIE — Part 2', href: ROUTES.students.eie2, description: 'Essentials of Innovation & Entrepreneurship — Part 2' },
          { title: 'Product Management (AI)', href: ROUTES.students.productManagement, description: 'Product Management in the AI Era' },
          { title: 'PAML+', href: ROUTES.students.paml, description: 'Practical Approach to Machine Learning — Train the Trainer' },
          { title: 'CIE Spark', href: ROUTES.students.cieSpark, description: 'Problem Validation Sprint for Semester 3' },
        ],
      },
      {
        title: 'Student Clubs',
        href: ROUTES.students.clubs,
        description: 'E-Cell, CMS, and student organizations',
      },
      {
        title: 'Centers of Excellence',
        href: ROUTES.students.centersOfExcellence,
        description: 'CRAIS, QuaNaD, C-IoT, CHIPS',
      },
      {
        title: 'Events',
        href: ROUTES.students.events,
        description: 'Workshops, hackathons, and competitions',
      },
      {
        title: 'Resources',
        href: ROUTES.students.resources,
        description: 'Guides, templates, and tools',
      },
    ],
  },
  {
    title: 'Alumni',
    href: ROUTES.alumni.root,
    description: 'Stay connected and give back to the community',
    items: [
      {
        title: 'Alumni Directory',
        href: ROUTES.alumni.directory,
        description: 'Connect with fellow alumni',
      },
      {
        title: 'Association',
        href: ROUTES.alumni.association,
        description: 'Join the alumni association',
      },
      // Angel Fund removed
      {
        title: 'Mentorship',
        href: ROUTES.alumni.mentorship,
        description: 'Mentor the next generation',
      },
      {
        title: 'Give Back',
        href: ROUTES.alumni.giveBack,
        description: 'Support CIE initiatives',
      },
    ],
  },
  {
    title: 'Industry',
    href: ROUTES.industry.root,
    description: 'Collaborate with CIE and access innovation',
    items: [
      {
        title: 'Collaborations',
        href: ROUTES.industry.collaborations,
        description: 'Partner with CIE',
      },
      {
        title: 'Competitions',
        href: ROUTES.industry.competitions,
        description: 'Host innovation challenges',
      },
      {
        title: 'Success Stories',
        href: ROUTES.industry.successStories,
        description: 'Industry partnership outcomes',
      },
      {
        title: 'Jobs',
        href: ROUTES.industry.jobs,
        description: 'Post job opportunities',
      },
    ],
  },
  {
    title: 'Inside CIE',
    href: ROUTES.insideCie.root,
    description: 'Learn about our mission, team, and infrastructure',
  },
  {
    title: 'About',
    href: ROUTES.about,
    description: 'Learn more about CIE',
  },
];

/**
 * Footer navigation
 */
export const FOOTER_NAV = {
  sections: [
    {
      title: 'For Students',
      items: [
        { title: 'Student Startup Program', href: ROUTES.students.startupProgram },
        { title: 'Programs', href: ROUTES.students.programs },
        { title: 'Events', href: ROUTES.students.events },
        { title: 'Resources', href: ROUTES.students.resources },
        { title: 'Funding', href: ROUTES.students.funding },
      ],
    },
    {
      title: 'For Alumni',
      items: [
        { title: 'Alumni Network', href: ROUTES.alumni.root },
        { title: 'Give Back', href: ROUTES.alumni.giveBack },
        { title: 'Mentorship', href: ROUTES.alumni.mentorship },
  // Angel Fund removed from footer
      ],
    },
    {
      title: 'For Industry',
      items: [
        { title: 'Collaborations', href: ROUTES.industry.collaborations },
        { title: 'Competitions', href: ROUTES.industry.competitions },
        { title: 'Success Stories', href: ROUTES.industry.successStories },
        { title: 'Jobs', href: ROUTES.industry.jobs },
      ],
    },
    {
      title: 'About',
      items: [
        { title: 'Inside CIE', href: ROUTES.insideCie.root },
        { title: 'Contact', href: ROUTES.contact },
        { title: 'Research', href: ROUTES.research },
        { title: 'Careers', href: ROUTES.careers },
      ],
    },
  ],
  legal: [
    { title: 'Privacy Policy', href: ROUTES.policies.privacy },
    { title: 'Terms of Service', href: ROUTES.policies.terms },
    { title: 'Cookie Policy', href: ROUTES.policies.cookies },
    { title: 'Accessibility', href: ROUTES.policies.accessibility },
  ],
} as const;
