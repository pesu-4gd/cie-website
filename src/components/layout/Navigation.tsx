'use client';

import React from 'react';
import Link from 'next/link';
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
        <div className="w-auto min-w-[800px] max-w-[1000px] bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
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
            'grid grid-cols-2 gap-6 p-6 items-stretch',
            normalizedSections.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          )}>
            {normalizedSections.map((section) => (
              <div key={section.title} className="flex flex-col h-full space-y-3">
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
          title: 'Summer Programs',
          href: '/students/programs/summer',
          description: 'Intensive technical & entrepreneurial courses',
          icon: Calendar,
        },
        {
          title: 'Bootcamp',
          href: '/students/programs/bootcamp',
          description: 'Annual intensive training',
          icon: Trophy,
        },
        {
          title: 'Basecamp',
          href: '/students/programs/basecamp',
          description: 'Weekly entrepreneurship sessions',
          icon: Users2,
        },
      ],
    },
    {
      title: 'Courses',
      items: [
        {
          title: 'Courses Overview',
          href: '/students/courses',
          description: 'EIE Parts, PAML, Product Management and CIE Spark',
          icon: BookOpen,
        }
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
          title: 'Resources',
          href: '/students/resources',
          description: 'Guides, templates & online courses',
          icon: BookOpen,
        },
        {
          title: 'Student Projects',
          href: '/students/projects',
          description: 'Current & past projects',
          icon: Lightbulb,
        },
        {
          title: 'Funding and Grants',
          href: '/students/funding',
          description: 'CiC, Mathworks & CiC Ready Program',
          icon: Trophy,
        },
      ],
    },
    {
      title: 'Community',
      items: [
        {
          title: 'Mentorship',
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
          title: 'Centres of Excellence',
          href: '/students/centers-of-excellence',
          description: 'Research & innovation centers',
          icon: Microscope,
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
          title: 'Overview', 
          href: '/alumni', 
          description: 'Connect with our alumni network',
          icon: GraduationCap
        },
        { 
          title: 'Welcome', 
          href: '/alumni/welcome', 
          description: 'Alumni community overview',
          icon: Users
        },
        { 
          title: 'Directory', 
          href: '/alumni/directory', 
          description: 'Find and connect with alumni',
          icon: Users2
        },
        { 
          title: 'News and Updates', 
          href: '/alumni/news', 
          description: 'Latest alumni achievements',
          icon: Info
        }
      ]
    },
    {
      title: 'Stay Connected',
      items: [
        { 
          title: 'Alumni Association', 
          href: '/alumni/association', 
          description: 'Join the association',
          icon: Users
        },
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
        { 
          title: 'Alumni Angel Fund', 
          href: '/alumni/angel-fund', 
          description: 'Invest in student startups',
          icon: Trophy
        },
        { 
          title: 'Resources for Alumni', 
          href: '/alumni/resources', 
          description: 'Alumni-specific resources',
          icon: BookOpen
        }
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
    <NavigationMenu className={cn('hidden lg:flex', className)}>
      <NavigationMenuList>
        <StudentsNavigation />
        <IndustryNavigation />
        <AlumniNavigation />
        <InsideCIENavigation />
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

  const navigationItems = [
    {
      title: 'Students',
      href: '/students',
      icon: Users,
      sections: [
        {
          title: 'Programs',
          items: [
            { title: 'Overview', href: '/students', description: 'Explore opportunities' },
            { title: 'Summer Programs', href: '/students/programs/summer', description: 'Intensive courses' },
            { title: 'Bootcamp', href: '/students/programs/bootcamp', description: 'Annual training' }
          ]
        },
        {
          title: 'Resources',
          items: [
            { title: 'Events', href: '/students/events', description: 'Upcoming events' },
            { title: 'Resources', href: '/students/resources', description: 'Student resources' },
            { title: 'Mentorship', href: '/students/mentorship', description: 'Industry mentors' }
          ]
        }
        ,
        {
          title: 'Courses',
          items: [
            { title: 'Courses Overview', href: '/students/courses', description: 'All courses & programs' }
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
            { title: 'Overview', href: '/industry', description: 'Industry partnerships' },
            { title: 'Collaborations', href: '/industry/collaborations', description: 'Partnership opportunities' }
          ]
        },
        {
          title: 'Opportunities',
          items: [
            { title: 'Jobs', href: '/industry/jobs', description: 'Job postings' },
            { title: 'Events', href: '/industry/events', description: 'Corporate events' }
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
            { title: 'Overview', href: '/alumni', description: 'Alumni network' },
            { title: 'Directory', href: '/alumni/directory', description: 'Find alumni' }
          ]
        },
        {
          title: 'Give Back',
          items: [
            { title: 'Mentorship', href: '/alumni/mentorship', description: 'Mentor students' },
            { title: 'Donations', href: '/alumni/donations', description: 'Support CIE' }
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
          title: 'About',
          items: [
            { title: 'Overview', href: '/inside-cie', description: 'About CIE' },
            { title: 'About', href: '/about', description: 'Our mission' },
            { title: 'Contact', href: '/contact', description: 'Get in touch' }
          ]
        }
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-background">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              
              return (
                <div key={item.title} className="space-y-2">
                  <div className={cn(
                    'w-full flex items-center p-3 rounded-lg',
                    isActive && 'bg-accent text-accent-foreground'
                  )}>
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  
                  {item.sections.map((section) => (
                    <div key={section.title} className="ml-8 space-y-1">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        {section.title}
                      </div>
                      {section.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={onClose}
                          className={cn(
                            'block p-2 rounded-md text-sm transition-colors',
                            'hover:bg-accent hover:text-accent-foreground',
                            pathname === subItem.href && 'bg-accent text-accent-foreground'
                          )}
                        >
                          <div>{subItem.title}</div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {subItem.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;