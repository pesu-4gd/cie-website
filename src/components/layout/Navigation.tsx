'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  Users, 
  Building2, 
  GraduationCap, 
  Microscope,
  BookOpen,
  Calendar,
  Users2,
  Trophy,
  Lightbulb,
  Briefcase,
  Handshake,
  Heart,
  Info
} from 'lucide-react';

// Enhanced Navigation Item Component with Sections
interface NavigationSection {
  title: string;
  items: {
    title: string;
    href: string;
    description: string;
    icon?: React.ComponentType<{ className?: string }>;
    external?: boolean;
  }[];
}

interface NavigationItemProps {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  sections: NavigationSection[];
  isActive: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  title,
  href,
  icon: Icon,
  description,
  sections,
  isActive
}) => {
  const pathname = usePathname();

  // Use the sections as defined by the StudentsNavigation component.
  // Do not merge or remove the Community section — render sections as provided.
  const normalizedSections: NavigationSection[] = sections.map((s) => ({ ...s, items: [...s.items] }));
  return (
    <NavigationMenuItem className="relative">
      <NavigationMenuTrigger 
        className={cn(
          'h-12 px-6 py-3 text-base font-medium transition-all duration-200',
          'border-0 border-transparent relative overflow-hidden',
          // Base colors
          'text-gray-700 hover:text-[#f07f1a]',
          // Active state
          isActive && 'text-[#f07f1a]',
          // Underline effect
          'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#f07f1a] after:transition-all after:duration-200',
          isActive ? 'after:opacity-100' : 'after:opacity-0 hover:after:opacity-50'
        )}
      >
        <Icon className="w-5 h-5 mr-3" />
        {title}
      </NavigationMenuTrigger>
      
      <NavigationMenuContent>
        <div className="w-auto min-w-[900px] max-w-[1200px] bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gradient-to-r from-[#f07f1a] to-[#f07f1a]/80 rounded-lg">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00338d]">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          </div>
          
          {/* Sections Grid: render the sections uniformly. Support 3 or 4 columns depending on how many sections are provided. */}
          <div className={cn(
            'grid grid-cols-2 gap-8 p-6 items-stretch',
            normalizedSections.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          )}>
            {normalizedSections.map((section) => (
              <div key={section.title} className="flex flex-col h-full space-y-3 min-w-0">
                <h4 className="text-sm font-semibold text-[#00338d] uppercase tracking-wide border-b border-gray-200 pb-2">
                  {section.title}
                </h4>

                <div className="flex-1 space-y-1">
                  {section.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                        className={cn(
                          'flex items-start gap-3 p-3 rounded-lg transition-all duration-200 group',
                          'hover:bg-gray-50 border border-transparent hover:border-gray-200',
                          pathname === item.href && 'bg-[#f07f1a]/5 border-[#f07f1a]/20'
                        )}
                      >
                        {ItemIcon && (
                          <div className="mt-0.5">
                            <ItemIcon className="w-5 h-5 text-[#f07f1a]" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div
                            className={cn(
                              'text-sm font-semibold transition-colors duration-200',
                              pathname === item.href ? 'text-[#f07f1a]' : 'text-gray-900 group-hover:text-[#f07f1a]'
                            )}
                          >
                            {item.title}
                          </div>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
// Students Navigation Component
const StudentsNavigation: React.FC = () => {
  const pathname = usePathname();
  const isActive = pathname.startsWith('/students');

  const sections: NavigationSection[] = [
    {
      title: 'Programs',
      items: [
        {
          title: 'Overview',
          href: '/students',
          description: 'Explore all student opportunities',
          icon: BookOpen,
        },
        {
          title: 'Programs',
          href: '/students/programs',
          description: 'Explore all student programs and summer courses',
          icon: Calendar,
        },
        {
          title: 'Student Startup Program',
          href: '/students/startup-program',
          description: 'Student startup initiatives',
          icon: Lightbulb,
        },
      ],
    },
    {
      title: 'Courses & Workshops',
      items: [
        {
          title: 'Courses Overview',
          href: '/students/courses',
          description: 'EIE:1 & 2, Product Management',
          icon: BookOpen,
        },
        {
          title: 'Workshops',
          href: '/students/workshops',
          description: 'Skills development and training sessions',
          icon: Users2,
        },
         {
          title: 'Resources',
          href: '/students/resources',
          description: 'Guides, templates & online courses',
          icon: BookOpen,
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          title: 'Events',
          href: '/students/events',
          description: 'Upcoming & past events',
          icon: Calendar,
        },
        {
          title: 'Funding and Grants',
          href: '/students/funding',
          description: 'CiC, Mathworks & CiC Ready Program',
          icon: Trophy,
        },
        {
          title: 'Centres of Excellence',
          href: '/students/centers-of-excellence',
          description: 'Research & innovation centers',
          icon: Microscope,
        },
      ],
    },
    {
      title: 'Community',
      items: [
        {
          title: 'Industry Mentors',
          href: '/students/mentorship',
          description: 'Industry mentor connect',
          icon: Users2,
        },
        {
          title: 'Student Clubs',
          href: '/students/clubs',
          description: 'E-Cell, CMS & more',
          icon: Users,
        },
        {
          title: 'Newsletter',
          href: '/alumni/newsletter',
          description: 'CIE updates & stories',
          icon: BookOpen,
        },
    
      ],
    },
  ];

  return (
    <NavigationItem
      title="Students"
      href="/students"
      icon={Users}
      description="Programs, Events, Resources & More"
      sections={sections}
      isActive={isActive}
    />
  );
};

// Industry Navigation Component
const IndustryNavigation: React.FC = () => {
  const pathname = usePathname();
  const isActive = pathname.startsWith('/industry');

  const sections: NavigationSection[] = [
    {
      title: 'Collaboration',
      items: [
        { 
          title: 'Overview', 
          href: '/industry', 
          description: 'Partnerships & collaborations overview',
          icon: Building2
        },
        { 
          title: 'About Industry Collaboration', 
          href: '/industry/about', 
          description: 'Overview of partnerships',
          icon: Info
        },
        { 
          title: 'Collaboration Opportunities', 
          href: '/industry/collaborations', 
          description: 'Sponsorship, Mentorship, Research',
          icon: Handshake
        }
      ]
    },
    {
      title: 'Opportunities',
      items: [
        { 
          title: 'Internships and Jobs', 
          href: '/industry/jobs', 
          description: 'Job postings & internship opportunities',
          icon: Briefcase
        },
        { 
          title: 'Competitions', 
          href: '/industry/competitions', 
          description: 'Hackathon, Workshop, Scholarships',
          icon: Trophy
        },
        { 
          title: 'Events for Industry', 
          href: '/industry/events', 
          description: 'Corporate events & summits',
          icon: Calendar
        }
      ]
    },
    {
      title: 'Success',
      items: [
        { 
          title: 'Success Stories', 
          href: '/industry/success-stories', 
          description: 'Case studies & impact',
          icon: Trophy
        },
        { 
          title: 'Newsletter', 
          href: '/alumni/newsletter', 
          description: 'CIE updates & stories',
          icon: BookOpen
        },
        { 
          title: 'Contact for Industry', 
          href: '/industry/contact', 
          description: 'Get in touch with our team',
          icon: Info
        }
      ]
    }
  ];

  return (
    <NavigationItem
      title="Industry"
      href="/industry"
      icon={Building2}
      description="Partnerships & Collaborations"
      sections={sections}
      isActive={isActive}
    />
  );
};

// Alumni Navigation Component
const AlumniNavigation: React.FC = () => {
  const pathname = usePathname();
  const isActive = pathname.startsWith('/alumni');

  const sections: NavigationSection[] = [
    {
      title: 'Community',
      items: [
        { 
          title: 'Welcome', 
          href: '/alumni/welcome', 
          description: 'Alumni community overview',
          icon: Users
        },
        { 
          title: 'Success Stories', 
          href: '/alumni/success-stories', 
          description: 'Latest alumni achievements',
          icon: Trophy
        }
      ]
    },
    {
      title: 'Stay Connected',
      items: [
        // { 
        //   title: 'Alumni Association', 
        //   href: '/alumni/association', 
        //   description: 'Join the association',
        //   icon: Users
        // },
        { 
          title: 'Newsletter Sign-up', 
          href: '/alumni/newsletter', 
          description: 'Stay updated with news',
          icon: BookOpen
        }
      ]
    },
    {
      title: 'Give Back',
      items: [
        { 
          title: 'Mentorship', 
          href: '/alumni/mentorship', 
          description: 'Mentor current students',
          icon: Users2
        },
        { 
          title: 'Donations', 
          href: '/alumni/donations', 
          description: 'Support CIE initiatives',
          icon: Heart
        },
        // { 
        //   title: 'Resources for Alumni', 
        //   href: '/alumni/resources', 
        //   description: 'Alumni-specific resources',
        //   icon: BookOpen
        // }
      ]
    }
  ];

  return (
    <NavigationItem
      title="Alumni"
      href="/alumni"
      icon={GraduationCap}
      description="Alumni Network & Community"
      sections={sections}
      isActive={isActive}
    />
  );
};

// Inside CIE Navigation Component
const InsideCIENavigation: React.FC = () => {
  const pathname = usePathname();
  const isActive = pathname.startsWith('/inside-cie') || pathname === '/about' || pathname === '/research' || pathname === '/contact' || pathname === '/faqs' || pathname === '/policies';

  const sections: NavigationSection[] = [
    {
      title: 'About CIE',
      items: [
        { 
          title: 'Overview', 
          href: '/inside-cie', 
          description: 'Learn about Centre for Innovation and Entrepreneurship',
          icon: Microscope
        },
        { 
          title: 'About CIE', 
          href: '/about', 
          description: 'Our mission, vision, and values',
          icon: Info
        },
        { 
          title: 'Research & Publications', 
          href: '/research', 
          description: 'Research initiatives and publications',
          icon: BookOpen
        }
      ]
    },
    {
      title: 'Support',
      items: [
        { 
          title: 'Contact Us', 
          href: '/contact', 
          description: 'Get in touch with our team',
          icon: Info
        },
        { 
          title: 'General FAQs', 
          href: '/faqs', 
          description: 'Frequently asked questions',
          icon: Info
        },
        { 
          title: 'Policies', 
          href: '/policies', 
          description: 'Institutional policies and guidelines',
          icon: BookOpen
        }
      ]
    },
    {
      title: 'Join Us',
      items: [
        { 
          title: 'Team', 
          href: '/inside-cie/team', 
          description: 'Meet our leadership team',
          icon: Users2
        },
        { 
          title: 'Careers', 
          href: '/careers', 
          description: 'Join the CIE team',
          icon: Briefcase
        }
      ]
    }
  ];

  return (
    <NavigationItem
      title="Inside CIE"
      href="/inside-cie"
      icon={Microscope}
      description="About CIE & Information"
      sections={sections}
      isActive={isActive}
    />
  );
};

// Main Navigation Component
interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <NavigationMenu className={cn('hidden lg:block', className)}>
      {/* Use a 4-column grid constrained to a center width so top-level items
          are evenly spaced across the center. Grid gives equal column widths
          regardless of label length which produces visually even spacing. */}
      <NavigationMenuList className="w-full max-w-4xl mx-auto grid grid-cols-4">
        <div className="flex items-center justify-center">
          <StudentsNavigation />
        </div>
        <div className="flex items-center justify-center">
          <IndustryNavigation />
        </div>
        <div className="flex items-center justify-center">
          <AlumniNavigation />
        </div>
        <div className="flex items-center justify-center">
          <InsideCIENavigation />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
// Mobile Navigation Component
interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedSubsection, setExpandedSubsection] = useState<string | null>(null);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSection(expandedSection === sectionTitle ? null : sectionTitle);
    // Reset subsection when main section changes
    if (expandedSection !== sectionTitle) {
      setExpandedSubsection(null);
    }
  };

  const toggleSubsection = (subsectionKey: string) => {
    setExpandedSubsection(expandedSubsection === subsectionKey ? null : subsectionKey);
  };

  const navigationItems = useMemo(() => [
    {
      title: 'Students',
      href: '/students',
      icon: Users,
      sections: [
        {
          title: 'Programs',
          items: [
            { title: 'Overview', href: '/students', description: 'Explore all student opportunities' },
            { title: 'Programs', href: '/students/programs', description: 'Explore all student programs and summer courses' },
            { title: 'Student Startup Program', href: '/students/startup-program', description: 'Student startup initiatives' }
          ]
        },
        {
          title: 'Courses & Workshops',
          items: [
            { title: 'Courses Overview', href: '/students/courses', description: 'EIE:1 & 2, Product Management' },
            { title: 'Workshops', href: '/students/workshops', description: 'Skills development and training sessions' },
            { title: 'Resources', href: '/students/resources', description: 'Guides, templates & online courses' }
          ]
        },
        {
          title: 'Resources',
          items: [
            { title: 'Events', href: '/students/events', description: 'Upcoming & past events' },
            { title: 'Funding and Grants', href: '/students/funding', description: 'CiC, Mathworks & CiC Ready Program' },
            { title: 'Centres of Excellence', href: '/students/centers-of-excellence', description: 'Research & innovation centers' }
          ]
        },
        {
          title: 'Community',
          items: [
            { title: 'Industry Mentors', href: '/students/mentorship', description: 'Industry mentor connect' },
            { title: 'Student Clubs', href: '/students/clubs', description: 'E-Cell, CMS & more' },
            { title: 'Newsletter', href: '/alumni/newsletter', description: 'CIE updates & stories' }
          ]
        }
      ]
    },
    {
      title: 'Industry',
      href: '/industry',
      icon: Building2,
      sections: [
        {
          title: 'Collaboration',
          items: [
            { title: 'Overview', href: '/industry', description: 'Partnerships & collaborations overview' },
            { title: 'About Industry Collaboration', href: '/industry/about', description: 'Overview of partnerships' },
            { title: 'Collaboration Opportunities', href: '/industry/collaborations', description: 'Sponsorship, Mentorship, Research' }
          ]
        },
        {
          title: 'Opportunities',
          items: [
            { title: 'Internships and Jobs', href: '/industry/jobs', description: 'Job postings & internship opportunities' },
            { title: 'Competitions', href: '/industry/competitions', description: 'Hackathon, Workshop, Scholarships' },
            { title: 'Events for Industry', href: '/industry/events', description: 'Corporate events & summits' }
          ]
        },
        {
          title: 'Success',
          items: [
            { title: 'Success Stories', href: '/industry/success-stories', description: 'Case studies & impact' },
            { title: 'Newsletter', href: '/alumni/newsletter', description: 'CIE updates & stories' },
            { title: 'Contact for Industry', href: '/industry/contact', description: 'Get in touch with our team' }
          ]
        }
      ]
    },
    {
      title: 'Alumni',
      href: '/alumni',
      icon: GraduationCap,
      sections: [
        {
          title: 'Community',
          items: [
            { title: 'Welcome', href: '/alumni/welcome', description: 'Alumni community overview' },
            { title: 'Success Stories', href: '/alumni/success-stories', description: 'Latest alumni achievements' }
          ]
        },
        {
          title: 'Stay Connected',
          items: [
            { title: 'Newsletter Sign-up', href: '/alumni/newsletter', description: 'Stay updated with news' }
          ]
        },
        {
          title: 'Give Back',
          items: [
            { title: 'Mentorship', href: '/alumni/mentorship', description: 'Mentor current students' },
            { title: 'Donations', href: '/alumni/donations', description: 'Support CIE initiatives' }
          ]
        }
      ]
    },
    {
      title: 'Inside CIE',
      href: '/inside-cie',
      icon: Microscope,
      sections: [
        {
          title: 'About CIE',
          items: [
            { title: 'Overview', href: '/inside-cie', description: 'Learn about Centre for Innovation and Entrepreneurship' },
            { title: 'About CIE', href: '/about', description: 'Our mission, vision, and values' },
            { title: 'Research & Publications', href: '/research', description: 'Research initiatives and publications' }
          ]
        },
        {
          title: 'Support',
          items: [
            { title: 'Contact Us', href: '/contact', description: 'Get in touch with our team' },
            { title: 'General FAQs', href: '/faqs', description: 'Frequently asked questions' },
            { title: 'Policies', href: '/policies', description: 'Institutional policies and guidelines' }
          ]
        },
        {
          title: 'Join Us',
          items: [
            { title: 'Team', href: '/inside-cie/team', description: 'Meet our leadership team' },
            { title: 'Careers', href: '/careers', description: 'Join the CIE team' }
          ]
        }
      ]
    }
  ], []);

  // Auto-expand the section that contains the current page
  React.useEffect(() => {
    if (isOpen) {
      // Find the navigation item that contains the current page
      const activeItem = navigationItems.find(item => 
        item.sections.some(section => 
          section.items.some(subItem => pathname === subItem.href)
        )
      );
      
      if (activeItem) {
        setExpandedSection(activeItem.title);
        
        // Find and expand the subsection that contains the current page
        const activeSection = activeItem.sections.find(section => 
          section.items.some(subItem => pathname === subItem.href)
        );
        
        if (activeSection) {
          setExpandedSubsection(`${activeItem.title}-${activeSection.title}`);
        }
      }
    } else {
      // Reset expanded states when navigation closes
      setExpandedSection(null);
      setExpandedSubsection(null);
    }
  }, [isOpen, pathname, navigationItems]);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-50 bg-white flex flex-col" style={{ height: '100vh', height: '100dvh' }}>
      {/* Header - Fixed at top */}
      <div className="flex-none flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center gap-3">
                {/* Use the colored CIE logo (with line) so it remains visible on white background and scale it appropriately */}
                <div className="flex items-center justify-center min-w-[140px]">
                  <Image src="/assets/cie-logo-with-line.png" alt="CIE Logo" width={140} height={42} className="object-contain" />
                </div>
              <h2 className="text-lg font-bold text-[#00338d]"></h2>
            </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close navigation"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      {/* Content - Scrollable area */}
      <div className="flex-1 overflow-y-scroll" style={{ WebkitOverflowScrolling: 'touch' }}>
        <nav className="p-4 pb-32">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              // Check if current page is anywhere within this section's subsections
              const isActive = item.sections.some(section => 
                section.items.some(subItem => pathname === subItem.href)
              );
              const isExpanded = expandedSection === item.title;
              
              return (
                <div key={item.title} className="mb-4">
                  {/* Main Section Header - Clickable to expand */}
                  <button
                    onClick={() => toggleSection(item.title)}
                    className={cn(
                      'w-full flex items-center justify-between gap-3 p-4 rounded-xl mb-2 transition-all duration-200',
                      'border border-gray-200 hover:border-[#f07f1a]/30',
                      isActive ? 'bg-[#f07f1a]/5 border-[#f07f1a]/30' : 'bg-white hover:bg-gray-50'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon: transparent background; icon turns orange when section is active */}
                      <div className="p-2 rounded-lg flex items-center justify-center">
                        <Icon className={cn("w-5 h-5 transition-colors", isActive ? "text-[#f07f1a]" : "text-black")} />
                      </div>
                      <span className={cn(
                        'font-semibold text-lg',
                        isActive ? 'text-[#f07f1a] border-b-2 border-[#f07f1a] pb-1' : 'text-[#00338d]'
                      )}>{item.title}</span>
                    </div>
                    
                    {/* Expand/Collapse Icon */}
                    <svg 
                      className={cn(
                        "w-5 h-5 text-gray-600 transition-transform duration-200",
                        isExpanded ? "transform rotate-180" : ""
                      )}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Collapsible Content - Level 2: Subsections */}
                  {isExpanded && (
                    <div className="space-y-2 pl-4">
                      {item.sections.map((section) => {
                        const subsectionKey = `${item.title}-${section.title}`;
                        const isSubsectionExpanded = expandedSubsection === subsectionKey;
                        // Check if this subsection contains the current page
                        const isSubsectionActive = section.items.some(subItem => pathname === subItem.href);
                        
                        return (
                          <div key={section.title} className="border-l-2 border-gray-100 ml-2">
                            {/* Subsection Header - Clickable to expand/collapse */}
                            <button
                              onClick={() => toggleSubsection(subsectionKey)}
                              className={cn(
                                "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ml-2",
                                isSubsectionActive ? "bg-[#f07f1a]/10 hover:bg-[#f07f1a]/15" : "hover:bg-gray-50"
                              )}
                            >
                              <h4 className={cn(
                                "text-sm font-bold uppercase tracking-wide",
                                isSubsectionActive ? "text-[#f07f1a]" : "text-[#00338d]"
                              )}>
                                {section.title}
                              </h4>
                              
                              {/* Subsection Expand/Collapse Icon */}
                              <svg 
                                className={cn(
                                  "w-4 h-4 transition-transform duration-200",
                                  isSubsectionActive ? "text-[#f07f1a]" : "text-gray-600",
                                  isSubsectionExpanded ? "transform rotate-180" : ""
                                )}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            
                            {/* Collapsible Content - Level 3: Individual Page Links */}
                            {isSubsectionExpanded && (
                              <div className="space-y-1 ml-4 pb-2">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={onClose}
                                    className={cn(
                                      'block p-3 rounded-lg transition-all duration-200 ml-2',
                                      'border border-transparent hover:border-gray-200 hover:bg-gray-50',
                                      pathname === subItem.href && 'bg-[#f07f1a]/5 border-[#f07f1a]/20'
                                    )}
                                  >
                                    <div className={cn(
                                      'font-medium mb-1 text-sm',
                                      pathname === subItem.href ? 'text-[#f07f1a]' : 'text-gray-900'
                                    )}>{subItem.title}</div>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
  );
};

export default Navigation;