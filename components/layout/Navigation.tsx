'use client';

import React, { useState } from 'react';
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
  ChevronRight,
  ExternalLink,
  Microscope
} from 'lucide-react';

// Navigation items configuration based on user-provided mapping
const navigationItems = [
  {
    title: 'Students',
    href: '/students',
    icon: Users,
    description: 'Programs, Events, Resources & More',
    sections: [
      {
        title: 'Overview',
        items: [
          { title: 'Overview', href: '/students', description: 'Explore all student opportunities, programs, and resources' }
        ]
      },
      {
        title: 'Programs',
        items: [
          { title: 'Summer Programs', href: '/students/programs/summer', description: 'Intensive technical & entrepreneurial courses' },
          { title: 'Bootcamp', href: '/students/programs/bootcamp', description: 'Annual intensive training' },
          { title: 'Basecamp', href: '/students/programs/basecamp', description: 'Weekly entrepreneurship sessions with industry experts' },
          { title: 'PAML', href: '/students/programs/paml', description: 'Practical Approach to Machine Learning' },
          { title: 'PM', href: '/students/programs/pm', description: 'Product Management course' }
        ]
      },
      {
        title: 'Activities & Support',
        items: [
          { title: 'Events', href: '/students/events', description: 'Upcoming & past events' },
          { title: 'Resources', href: '/students/resources', description: 'Guides, templates & online courses' },
          { title: 'Student Projects', href: '/students/projects', description: 'Current & past projects' },
          { title: 'Mentorship', href: '/students/mentorship', description: 'Industry mentor connect' },
          { title: 'Funding and Grants', href: '/students/funding', description: 'CiC, Mathworks & CiC Ready Program' }
        ]
      },
      {
        title: 'Community & Excellence',
        items: [
          { title: 'Student Clubs', href: '/students/clubs', description: 'E-Cell, CMS & more' },
          { 
            title: 'Centres of Excellence', 
            href: '/students/coe', 
            description: 'Research & innovation centers',
            isExpandable: true,
            subItems: [
              { title: 'Centre for Computer Networks and Cyber Security (CCNCS)', href: 'https://ccncs.pes.edu', description: 'Cybersecurity research and training' },
              { title: 'Centre for Heterogeneous and Intelligent Processing Systems (CHIPS)', href: 'https://chips.pes.edu', description: 'Advanced computing systems' },
              { title: 'Quantum and Nano Devices Lab (QuaNaD)', href: 'https://quanad.pes.edu', description: 'Quantum technology research' },
              { title: 'Centre of Data Modelling, Analytics and Visualization (CoDMAV)', href: 'https://codmav.pes.edu', description: 'Data science and analytics' }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Industry',
    href: '/industry',
    icon: Building2,
    description: 'Partnerships & Collaborations',
    sections: [
      {
        title: 'Overview',
        items: [
          { title: 'Overview', href: '/industry', description: 'Partnerships, collaborations, and opportunities' }
        ]
      },
      {
        title: 'Collaboration',
        items: [
          { title: 'About Industry Collaboration', href: '/industry/about', description: 'Overview of partnerships' },
          { title: 'Collaboration Opportunities', href: '/industry/collaborations', description: 'Sponsorship, Mentorship, Research' }
        ]
      },
      {
        title: 'Opportunities',
        items: [
          { title: 'Internships and Jobs', href: '/industry/jobs', description: 'Job postings & internship opportunities' },
          { title: 'Competitions', href: '/industry/competitions', description: 'Hackathon, Workshop, Scholarships' }
        ]
      },
      {
        title: 'Engagement',
        items: [
          { title: 'Events for Industry', href: '/industry/events', description: 'Corporate events & summits' },
          { title: 'Success Stories', href: '/industry/success-stories', description: 'Case studies & impact' },
          { title: 'Contact for Industry', href: '/industry/contact', description: 'Get in touch with our team' }
        ]
      }
    ]
  },
  {
    title: 'Alumni',
    href: '/alumni',
    icon: GraduationCap,
    description: 'Alumni Network & Community',
    sections: [
      {
        title: 'Overview',
        items: [
          { title: 'Overview', href: '/alumni', description: 'Connect with our alumni network and community' }
        ]
      },
      {
        title: 'Community',
        items: [
          { title: 'Welcome', href: '/alumni/welcome', description: 'Alumni community overview' },
          { title: 'News and Updates', href: '/alumni/news', description: 'Latest alumni achievements' },
          { title: 'Directory', href: '/alumni/directory', description: 'Find and connect with alumni' }
        ]
      },
      {
        title: 'Stay Connected',
        items: [
          { title: 'Alumni Association', href: '/alumni/association', description: 'Join the association' },
          { title: 'Newsletter Sign-up', href: '/alumni/newsletter', description: 'Stay updated with news' }
        ]
      },
      {
        title: 'Give Back',
        items: [
          { title: 'Mentorship', href: '/alumni/mentorship', description: 'Mentor current students' },
          { title: 'Donations', href: '/alumni/donations', description: 'Support CIE initiatives' },
          { title: 'Invest (Alumni Angel Fund)', href: '/alumni/angel-fund', description: 'Invest in student startups' },
          { title: 'Resources for Alumni', href: '/alumni/resources', description: 'Alumni-specific resources' }
        ]
      }
    ]
  },
  {
    title: 'Inside CIE',
    href: '/inside-cie',
    icon: Microscope,
    description: 'About CIE & Information',
    sections: [
      {
        title: 'Overview',
        items: [
          { title: 'Overview', href: '/inside-cie', description: 'Learn about Centre for Innovation and Entrepreneurship' }
        ]
      },
      {
        title: 'About CIE',
        items: [
          { title: 'About CIE', href: '/about', description: 'Our mission, vision, and values' },
          { title: 'Research and Publications', href: '/research', description: 'Research initiatives and publications' },
          { title: 'Contact Us', href: '/contact', description: 'Get in touch with our team' }
        ]
      },
      {
        title: 'Support & Information',
        items: [
          { title: 'General FAQs', href: '/faqs', description: 'Frequently asked questions' },
          { title: 'Policies', href: '/policies', description: 'Institutional policies and guidelines' },
          { title: 'Careers', href: '/careers', description: 'Join the CIE team' }
        ]
      }
    ]
  }
];

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const pathname = usePathname();
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <NavigationMenu className={cn('hidden lg:flex', className)}>
      <NavigationMenuList>
        {navigationItems.map((item, itemIndex) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);
          
          return (
            <NavigationMenuItem key={item.title} className="relative">
              <NavigationMenuTrigger 
                className={cn(
                  'h-12 px-6 py-3 text-base font-medium transition-all duration-200',
                  'text-gray-700',
                  'border-0 border-transparent',
                  'relative overflow-hidden',
                  // Active state with underline effect
                  isActive ? [
                    'text-pes-orange',
                    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-pes-orange'
                  ] : '',
                  // Hover underline effect for non-active items
                  !isActive && 'hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-pes-orange hover:after:opacity-50'
                )}
                style={{
                  color: isActive ? '#f07f1a' : undefined
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#f07f1a';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '';
                  }
                }}
                onFocus={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#f07f1a';
                  }
                }}
                onBlur={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '';
                  }
                }}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.title}
              </NavigationMenuTrigger>
              
              <NavigationMenuContent>
                <div className="w-auto min-w-[400px] max-w-[800px] bg-white/95 backdrop-blur-sm rounded-xl shadow-sm p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 bg-gradient-to-r from-orange to-orange/80 rounded-lg">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-xl font-bold text-pes-navy">{item.title}</h3>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  
                  {/* Sections */}
                  <div className="space-y-2">
                    {item.sections.map((section, index) => (
                      <div key={section.title} className="relative">
                        {/* Section Header - Clickable */}
                        <div 
                          className="flex items-center justify-between p-3 cursor-pointer transition-all duration-200 rounded-md"
                          onMouseEnter={() => setExpandedSection(`${item.title}-${section.title}`)}
                        >
                          <h4 
                            className="text-lg font-bold transition-colors"
                            style={{
                              color: expandedSection === `${item.title}-${section.title}` ? '#f07f1a' : '#00338d'
                            }}
                          >
                            {section.title}
                          </h4>
                          <ChevronRight 
                            className="w-5 h-5 transition-all duration-200"
                            style={{
                              color: expandedSection === `${item.title}-${section.title}` ? '#f07f1a' : '#9ca3af'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
              
              {/* External popouts positioned relative to this specific navigation item */}
              {item.sections.map((section, sectionIndex) => (
                expandedSection === `${item.title}-${section.title}` && (
                  <div 
                    key={`popout-${item.title}-${section.title}`}
                    className="absolute left-full ml-4 w-96 bg-white/98 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 p-6"
                    style={{
                      top: `${60 + (sectionIndex * 60)}px`, // Position relative to the section within this nav item
                      zIndex: 70 + (itemIndex * 10) + sectionIndex, // Unique z-index based on nav item and section
                    }}
                    onMouseEnter={() => setExpandedSection(`${item.title}-${section.title}`)}
                    onMouseLeave={() => {
                      setExpandedSection(null);
                      setExpandedSubmenu(null);
                    }}
                  >
                  <h5 className="text-lg font-bold text-pes-navy mb-4 pb-3 border-b border-gray-200">
                    {section.title}
                  </h5>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                      {section.items.map((subItem) => (
                        <div key={subItem.href}>
                          {subItem.isExpandable && subItem.subItems ? (
                            /* Centers of Excellence - Special handling with third level popout */
                            <div className="relative">
                              <div
                                className="p-3 rounded-md transition-all duration-200 cursor-pointer group/coe"
                                onMouseEnter={() => setExpandedSubmenu(subItem.title)}
                                onMouseLeave={() => setExpandedSubmenu(null)}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div 
                                      className="text-base font-semibold transition-colors"
                                      style={{
                                        color: expandedSubmenu === subItem.title ? '#f07f1a' : '#1f2937'
                                      }}
                                    >
                                      {subItem.title}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {subItem.description}
                                    </p>
                                  </div>
                                  <ChevronRight 
                                    className="w-4 h-4 transition-colors"
                                    style={{
                                      color: expandedSubmenu === subItem.title ? '#f07f1a' : '#9ca3af'
                                    }}
                                  />
                                </div>
                              </div>
                              
                              {/* Centers of Excellence third-level popout */}
                              {expandedSubmenu === subItem.title && (
                                <div 
                                  className="absolute left-full top-0 ml-4 w-[450px] bg-white/98 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 z-[70] p-6"
                                  onMouseEnter={() => setExpandedSubmenu(subItem.title)}
                                  onMouseLeave={() => setExpandedSubmenu(null)}
                                >
                                  <h6 className="text-lg font-bold text-pes-navy mb-4 pb-3 border-b border-gray-200">
                                    All Centres of Excellence
                                  </h6>
                                  <div className="space-y-2 max-h-80 overflow-y-auto">
                                    {subItem.subItems.map((center) => (
                                      <Link
                                        key={center.href}
                                        href={center.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-3 rounded-md transition-all duration-200 group/center"
                                        onMouseEnter={(e) => {
                                          const title = e.currentTarget.querySelector('.font-medium') as HTMLElement;
                                          const icon = e.currentTarget.querySelector('svg') as SVGSVGElement;
                                          if (title) title.style.color = '#f07f1a';
                                          if (icon) icon.style.color = '#f07f1a';
                                        }}
                                        onMouseLeave={(e) => {
                                          const title = e.currentTarget.querySelector('.font-medium') as HTMLElement;
                                          const icon = e.currentTarget.querySelector('svg') as SVGSVGElement;
                                          if (title) title.style.color = '';
                                          if (icon) icon.style.color = '';
                                        }}
                                      >
                                        <div className="flex items-start justify-between">
                                          <div className="flex-1">
                                            <div className="text-sm font-medium text-gray-900 leading-tight transition-colors">
                                              {center.title}
                                            </div>
                                            <p className="text-xs text-gray-600 mt-1 leading-relaxed transition-colors">
                                              {center.description}
                                            </p>
                                          </div>
                                          <ExternalLink className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0 transition-colors" />
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            /* Regular items */
                            <Link
                              href={subItem.href}
                              className="block p-3 rounded-md transition-all duration-200 group"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#f07f1a';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = pathname === subItem.href ? '#f07f1a' : '';
                              }}
                              style={{
                                color: pathname === subItem.href ? '#f07f1a' : undefined
                              }}
                            >
                              <div className="text-base font-semibold transition-colors">
                                {subItem.title}
                              </div>
                              <p className="text-sm text-gray-600 mt-1 transition-colors">
                                {subItem.description}
                              </p>
                              {subItem.href.startsWith('http') && (
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pes-orange transition-colors inline-block mt-2" />
                              )}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </NavigationMenuItem>
          );
        })}
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
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-background">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedSection === item.title;
              const isActive = pathname.startsWith(item.href);
              
              return (
                <div key={item.title} className="space-y-2">
                  <button
                    onClick={() => toggleSection(item.title)}
                    className={cn(
                      'w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors',
                      'hover:bg-accent hover:text-accent-foreground',
                      isActive && 'bg-accent text-accent-foreground'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <ChevronRight 
                      className={cn(
                        'w-4 h-4 transition-transform',
                        isExpanded && 'rotate-90'
                      )} 
                    />
                  </button>
                  
                  {isExpanded && (
                    <div className="ml-8 space-y-4">
                      {item.sections.map((section) => (
                        <div key={section.title} className="space-y-2">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                            {section.title}
                          </h4>
                          <ul className="space-y-1">
                            {section.items.map((subItem) => (
                              <li key={subItem.href}>
                                <Link
                                  href={subItem.href}
                                  onClick={onClose}
                                  className={cn(
                                    'block p-2 rounded-md text-sm transition-colors',
                                    'hover:bg-accent hover:text-accent-foreground',
                                    pathname === subItem.href && 'bg-accent text-accent-foreground'
                                  )}
                                >
                                  <div className="flex items-center justify-between">
                                    <span>{subItem.title}</span>
                                    {subItem.href.startsWith('http') && (
                                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                                    )}
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
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