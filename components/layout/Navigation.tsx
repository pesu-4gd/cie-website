'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  Users, 
  Building2, 
  GraduationCap, 
  MoreHorizontal,
  ChevronRight,
  ExternalLink,
  Microscope,
  Cpu,
  Database,
  Shield,
  Wifi,
  Brain,
  Zap
} from 'lucide-react';

// Navigation items configuration based on sitemap
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
          { title: 'Students Hub', href: '/students', description: 'Explore all student opportunities, programs, and resources' }
        ]
      },
      {
        title: 'Programs',
        items: [
          { title: 'Summer Programs', href: '/students/programs/summer', description: 'Intensive technical & entrepreneurial courses' },
          { title: 'Bootcamp', href: '/students/programs/bootcamp', description: 'Annual intensive training' },
          { title: 'Basecamp', href: '/students/programs/basecamp', description: 'Foundational startup knowledge' },
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
              { title: 'Center for Computer Networks and Cyber Security (CCNCS)', href: 'https://ccncs.pes.edu', description: 'Cybersecurity research and training' },
              { title: 'Centre for Heterogeneous and Intelligent Processing Systems (CHIPS)', href: 'https://chips.pes.edu', description: 'Advanced computing systems' },
              { title: 'Quantum and Nano Devices Lab (QuaNaD)', href: 'https://quanad.pes.edu', description: 'Quantum technology research' },
              { title: 'Centre of Data Modelling, Analytics and Visualization (CoDMAV)', href: 'https://codmav.pes.edu', description: 'Data science and analytics' },
              { title: 'Centre for Research in Space Science and Technology (CRSST)', href: 'https://crsst.pes.edu', description: 'Space technology research' },
              { title: 'Centre for Robotics, Automation & Intelligent Systems (CRAIS)', href: 'https://crais.pes.edu', description: 'Robotics and automation' },
              { title: 'Centre for Cloud Computing & Big Data', href: 'https://cloud.pes.edu', description: 'Cloud computing solutions' },
              { title: 'Crucible of Research and Innovation (CORI)', href: 'https://cori.pes.edu', description: 'Innovation and research hub' },
              { title: 'Center of Excellence in Information Security, Forensics, and Cyber Resilience (C-ISFCR)', href: 'https://c-isfcr.pes.edu', description: 'Information security research' },
              { title: 'Center of Excellence in Internet of Things (C-IoT)', href: 'https://c-iot.pes.edu', description: 'IoT research and development' },
              { title: 'Center for Pattern Recognition', href: 'https://pattern.pes.edu', description: 'Pattern recognition research' },
              { title: 'Knowledge Analytics & Ontological Engineering (KANOE)', href: 'https://kanoe.pes.edu', description: 'Knowledge engineering' },
              { title: 'Centre for Intelligent Systems', href: 'https://intelligent.pes.edu', description: 'AI and intelligent systems' },
              { title: 'Laboratory of Photonics & Quantum Technology', href: 'https://photonics.pes.edu', description: 'Photonics research' },
              { title: 'Center for Data Sciences and Applied Machine Learning (CDSAML)', href: 'https://cdsaml.pes.edu', description: 'Machine learning research' },
              { title: 'Centre of Cognitive Computing and Computational Intelligence (C3I)', href: 'https://c3i.pes.edu', description: 'Cognitive computing research' },
              { title: 'IoT Maker\'s Space', href: 'https://iotmakers.pes.edu', description: 'IoT prototyping and development' }
            ]
          },
          { title: 'FAQs for Students', href: '/students/faqs', description: 'Frequently asked questions' }
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
          { title: 'Industry Hub', href: '/industry', description: 'Partnerships, collaborations, and opportunities' }
        ]
      },
      {
        title: 'Collaboration',
        items: [
          { title: 'About Industry Collaboration', href: '/industry', description: 'Overview of partnerships' },
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
          { title: 'Alumni Hub', href: '/alumni', description: 'Connect with our alumni network and community' }
        ]
      },
      {
        title: 'Community',
        items: [
          { title: 'Welcome', href: '/alumni', description: 'Alumni community overview' },
          { title: 'News and Updates', href: '/alumni/news', description: 'Latest alumni achievements' },
          { title: 'Directory', href: '/alumni/directory', description: 'Find and connect with alumni' }
        ]
      },
      {
        title: 'Stay Connected',
        items: [
          { title: 'Alumni Association', href: '/alumni/stay-connected', description: 'Join the association' },
          { title: 'Newsletter Sign-up', href: '/alumni/newsletter', description: 'Stay updated with news' }
        ]
      },
      {
        title: 'Give Back',
        items: [
          { title: 'Mentorship', href: '/alumni/give-back/mentorship', description: 'Mentor current students' },
          { title: 'Donations', href: '/alumni/give-back/donations', description: 'Support CIE initiatives' },
          { title: 'Invest (Alumni Angel Fund)', href: '/alumni/give-back/invest', description: 'Invest in student startups' },
          { title: 'Resources for Alumni', href: '/alumni/resources', description: 'Career & business resources' }
        ]
      }
    ]
  },
  {
    title: 'More',
    href: '/more',
    icon: MoreHorizontal,
    description: 'About, Research & Contact',
    sections: [
      {
        title: 'Overview',
        items: [
          { title: 'More Information', href: '/more', description: 'About CIE, research, contact, and additional resources' }
        ]
      },
      {
        title: 'About CIE',
        items: [
          { title: 'About CIE', href: '/about', description: 'Mission, vision & team' },
          { title: 'Research and Publications', href: '/research', description: 'Academic research & publications' },
          { title: 'Contact Us', href: '/contact', description: 'Get in touch with us' }
        ]
      },
      {
        title: 'Support & Information',
        items: [
          { title: 'General FAQs', href: '/faqs', description: 'Frequently asked questions' },
          { title: 'Policies', href: '/policies', description: 'Privacy Policy & Terms of Use' },
          { title: 'Careers', href: '/careers', description: 'Join our team' }
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

  return (
    <NavigationMenu className={cn('hidden lg:flex', className)}>
      <NavigationMenuList>
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);
          
          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuTrigger 
                className={cn(
                  'h-12 px-6 py-3 text-base font-semibold transition-all duration-200',
                  'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700',
                  'focus:bg-gradient-to-r focus:from-blue-50 focus:to-indigo-50 focus:text-blue-700',
                  'data-[state=open]:bg-gradient-to-r data-[state=open]:from-blue-100 data-[state=open]:to-indigo-100 data-[state=open]:text-blue-800',
                  'rounded-lg border-2 border-transparent hover:border-blue-200 focus:border-blue-300',
                  'shadow-sm hover:shadow-md',
                  isActive && 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600'
                )}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.title}
              </NavigationMenuTrigger>
              
              <NavigationMenuContent>
                <div className="grid gap-4 p-8 md:w-[600px] lg:w-[900px] lg:grid-cols-3 bg-white border border-gray-100 rounded-xl shadow-2xl backdrop-blur-sm">
                  {/* Header */}
                  <div className="lg:col-span-3 mb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  
                  {/* Sections */}
                  {item.sections.map((section) => (
                    <div key={section.title} className="space-y-4">
                      <h4 className="text-base font-bold text-gray-800 border-b-2 border-gradient-to-r from-blue-500 to-indigo-500 pb-3">
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.items.map((subItem) => (
                          <li key={subItem.href}>
                            {subItem.isExpandable && subItem.subItems ? (
                              <div className="relative">
                                <div
                                  className={cn(
                                    'block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 cursor-pointer',
                                    'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md',
                                    'focus:bg-gradient-to-r focus:from-blue-50 focus:to-indigo-50 focus:shadow-md',
                                    'border border-gray-200 hover:border-blue-300',
                                    expandedSubmenu === subItem.title && 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300'
                                  )}
                                  onMouseEnter={() => setExpandedSubmenu(subItem.title)}
                                  onMouseLeave={() => setExpandedSubmenu(null)}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="text-sm font-semibold leading-none hover:text-blue-700 transition-colors">
                                      {subItem.title}
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                                  </div>
                                  <p className="line-clamp-2 text-xs leading-snug text-gray-600">
                                    {subItem.description}
                                  </p>
                                </div>
                                
                                {/* Centres of Excellence Submenu */}
                                {expandedSubmenu === subItem.title && (
                                  <div 
                                    className="absolute left-full top-0 ml-2 w-96 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-4"
                                    onMouseEnter={() => setExpandedSubmenu(subItem.title)}
                                    onMouseLeave={() => setExpandedSubmenu(null)}
                                  >
                                    <h5 className="text-sm font-bold text-gray-800 mb-3 border-b pb-2">All Centres of Excellence</h5>
                                    <div className="grid gap-2 max-h-80 overflow-y-auto">
                                      {subItem.subItems.map((center) => (
                                        <Link
                                          key={center.href}
                                          href={center.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group/center"
                                        >
                                          <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                              <div className="text-xs font-medium text-gray-900 group-hover/center:text-blue-700 leading-tight">
                                                {center.title}
                                              </div>
                                              <p className="text-xs text-gray-600 mt-1 leading-tight">
                                                {center.description}
                                              </p>
                                            </div>
                                            <ExternalLink className="w-3 h-3 text-gray-400 group-hover/center:text-blue-600 ml-2 flex-shrink-0" />
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className={cn(
                                    'block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200',
                                    'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md',
                                    'focus:bg-gradient-to-r focus:from-blue-50 focus:to-indigo-50 focus:shadow-md',
                                    'border border-gray-200 hover:border-blue-300',
                                    'group'
                                  )}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="text-sm font-semibold leading-none group-hover:text-blue-700 transition-colors">
                                      {subItem.title}
                                    </div>
                                    {subItem.href.startsWith('http') && (
                                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                    )}
                                  </div>
                                  <p className="line-clamp-2 text-xs leading-snug text-gray-600">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
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