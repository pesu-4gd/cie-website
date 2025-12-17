// The small overview component was removed to avoid duplicate imports/exports.
// This file intentionally contains the full StudentsPage component below.
"use client";
import { 
  BookOpen, 
  Calendar, 
  Users, 
  Lightbulb, 
  DollarSign, 
  ArrowRight,
  GraduationCap,
  Rocket,
  Globe,
  Heart,
  Briefcase,
  Star,
  Mail,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

import { SECTION_COLORS, hexToRgb } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { motion } from 'framer-motion';
import { Button } from '@/components/design-system';

const studentsColors = SECTION_COLORS.students;

// Custom hook for the enhanced magic hover effect on individual letters
const useEnhancedLetterHover = (text: string) => {
  const [letterStates, setLetterStates] = useState(
    new Array(text.length).fill({ color: 'white', phase: 'rest' })
  );
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveringRef = useRef(false);

  const clearAllTimeouts = () => {
    for (const t of timeoutRefs.current) {
      clearTimeout(t as unknown as number);
    }
    timeoutRefs.current = [];
  };

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    clearAllTimeouts();

    const newLetterStates = new Array(text.length).fill({ color: 'white', phase: 'rest' }).map(s => ({ ...s }));

    // Wave to orange
    for (let i = 0; i < text.length; i++) {
      const t = globalThis.setTimeout(() => {
        if (!isHoveringRef.current) return;
        newLetterStates[i] = { color: 'orange', phase: 'active' };
        setLetterStates([...newLetterStates]);
      }, i * 60);
      timeoutRefs.current.push(t);
    }

    // Wave to navy after a fixed delay
    for (let i = 0; i < text.length; i++) {
      const t = globalThis.setTimeout(() => {
        if (!isHoveringRef.current) return;
        newLetterStates[i] = { color: 'navy', phase: 'active' };
        setLetterStates([...newLetterStates]);
      }, 1000 + i * 60);
      timeoutRefs.current.push(t);
    }

    // Reset after the animation
  const resetT = globalThis.setTimeout(() => {
      if (!isHoveringRef.current) return;
      setLetterStates(new Array(text.length).fill({ color: 'white', phase: 'rest' }));
    }, 2200);
    timeoutRefs.current.push(resetT);
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    clearAllTimeouts();
    setLetterStates(new Array(text.length).fill({ color: 'white', phase: 'rest' }));
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      clearAllTimeouts();
      isHoveringRef.current = false;
    };
  }, []);

  return { letterStates, handleMouseEnter, handleMouseLeave };
};

// Interactive Student Journey chart (graphical representation of semesters and milestones)
const StudentJourneyChart = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<null | { id: string; label: string; under: number; note: string }>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const milestoneRefs = useRef<Record<string, SVGRectElement | null>>({});

  const columns = ['Semester', '3', '4', 'Summer', '5', '6', 'Summer', '7', '8'];

  const milestones = [
    { id: 'eiei', label: 'EIE-I', under: 1, note: 'Get your idea validated — CIE Ignite (Ideathon), up to ₹50K prizes + internships' },
    { id: 'eieii', label: 'EIE-II', under: 2, note: 'Prototype & refine problem statements; workshops & mentorship' },
    { id: 'intern1', label: 'CIE / CoE Internship', under: 3, note: 'Hands-on internships with Centers of Excellence or industry' },
    { id: 'cap1', label: 'Capstone Project - I', under: 4, note: 'Build your prototype (semester 5)' },
    { id: 'cap2', label: 'Capstone Project - II', under: 5, note: 'Iterate and prepare for pilot (semester 6)' },
    { id: 'intern2', label: 'CIE / CoE Internship', under: 6, note: 'Further development, incubation candidacy and early fund access' },
    { id: 'incubate', label: 'Incubate', under: 7, note: 'Incubate: validate prototype; CiC Ready Program — up to ₹5 Lakh funding' },
    { id: 'accelerate', label: 'Accelerate', under: 8, note: 'Accelerate: scale and demo to investors' }
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg ref={svgRef} viewBox="0 0 1000 260" className="w-full h-[260px]" aria-label="Student journey timeline">
        {/* Top row: semester boxes and connectors */}
        {columns.map((col, idx) => {
          const x = 60 + idx * 100;
          const y = 50;
          return (
            <g key={`col-${col}-${idx}`} transform={`translate(${x}, ${y})`}>
              <rect x={-38} y={-18} width={76} height={36} rx={8} fill="#e6f6ff" stroke="#bae6fd" strokeWidth={1} />
              <text x={0} y={4} textAnchor="middle" fontSize={12} fill="#0f172a" pointerEvents="none">{col}</text>
            </g>
          );
        })}

        {/* connectors */}
        {columns.map((_, idx) => {
          if (idx === 0) return null;
          const x1 = 60 + (idx - 1) * 100 + 38;
          const x2 = 60 + idx * 100 - 38;
          const y = 50;
          return <line key={`connect-${idx}`} x1={x1} y1={y} x2={x2} y2={y} stroke="#e2e8f0" strokeWidth={2} strokeLinecap="round" />;
        })}

        {/* Milestone callouts (orange boxes below) with motion and accessibility */}
        {milestones.map((m) => {
          const idx = m.under;
          const x = 60 + idx * 100;
          const y = 140;
          const isHovered = hovered === m.id;
          return (
            <g key={m.id} transform={`translate(${x}, ${y})`}>
              <rect
                x={-70}
                y={-26}
                width={140}
                height={52}
                rx={10}
                fill={isHovered ? '#ffedd5' : '#fff7ed'}
                stroke="#fb923c"
                strokeWidth={1}
                className="cursor-pointer"
                tabIndex={0}
                aria-label={`${m.label} milestone. ${m.note}`}
                ref={(r: SVGRectElement | null) => { milestoneRefs.current[m.id] = r; }}
                onMouseEnter={(e: React.MouseEvent<SVGRectElement>) => {
                  setHovered(m.id);
                  const svg = svgRef.current;
                  if (svg) {
                    const rect = svg.getBoundingClientRect();
                    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, text: m.note });
                  }
                }}
                onMouseMove={(e: React.MouseEvent<SVGRectElement>) => {
                  const svg = svgRef.current;
                  if (svg) {
                    const rect = svg.getBoundingClientRect();
                    setTooltip(prev => prev ? { x: e.clientX - rect.left, y: e.clientY - rect.top, text: prev.text } : null);
                  }
                }}
                onMouseLeave={() => { setHovered(null); setTooltip(null); }}
                onClick={() => setSelected(m)}
              />
              <text x={0} y={40} textAnchor="middle" fontSize={12} fill="#0f172a">{m.label}</text>
            </g>
          );
        })}
      </svg>
      {/* Tooltip (positioned absolutely relative to svg container when needed) */}
      {tooltip && (
        <div className="relative -mt-[260px]" aria-hidden>
          <div className="pointer-events-none">
            <div className="text-xs bg-gray-800 text-white px-2 py-1 rounded">{tooltip.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

interface LetterState {
  color: 'white' | 'orange' | 'navy';
  phase: 'rest' | 'active';
}

interface EnhancedMagicTitleProps {
  text: string;
  className?: string;
}

// Vertical Tab Carousel Component
const VerticalTabCarousel = ({ sections }: { sections: SectionType[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const colorMap: Record<string, string> = {
    blue: 'from-[#2B9EB3] to-[#2B9EB3]',
    green: 'from-[#2B9EB3] to-[#2B9EB3]',
    red: 'from-[#2B9EB3] to-[#2B9EB3]',
    indigo: 'from-[#2B9EB3] to-[#2B9EB3]',
    purple: 'from-[#2B9EB3] to-[#2B9EB3]',
    orange: 'from-[#2B9EB3] to-[#2B9EB3]',
    yellow: 'from-[#2B9EB3] to-[#2B9EB3]',
  };

  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
      {/* Left Sidebar - Vertical Tabs */}
      <div className="lg:col-span-3 self-start">
        <div className="bg-white rounded-3xl border border-gray-200 p-2 sticky top-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-2 px-2">Categories</h3>
          <div className="space-y-1">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const gradient = colorMap[section.color || 'blue'] || studentsColors.gradient.tailwind;
              return (
                <button
                  key={section.title}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-300 ${
                    selectedIndex === index
                      ? `bg-gradient-to-r ${gradient} text-white shadow-lg`
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      selectedIndex === index
                        ? 'bg-white/20'
                        : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        selectedIndex === index ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-xs leading-tight ${
                        selectedIndex === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {section.title}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Content Area - Selected Section Details */}
      <div className="lg:col-span-9 flex items-center justify-center">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl w-full"
        >
          {(() => {
            const section = sections[selectedIndex];
            const Icon = section.icon;
            const gradient = colorMap[section.color || 'blue'] || studentsColors.gradient.tailwind;
            
            return (
              <div className="flex flex-col lg:flex-row min-h-[480px]">
                {/* Section Icon/Visual */}
                <div className={`lg:w-1/3 bg-gradient-to-br ${gradient} p-8 lg:p-10 flex items-center justify-center`}>
                  <div className="text-center w-full">
                    <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-5 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon className="w-14 h-14 lg:w-16 lg:h-16 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-white px-4 leading-tight">{section.title}</h3>
                  </div>
                </div>

                {/* Section Details */}
                <div className="lg:w-2/3 p-6 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                      {section.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">Key Highlights</h4>
                    <ul className="space-y-2.5">
                      {section.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-r ${gradient}`}>
                            <ArrowRight className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-gray-700 text-xs lg:text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-gray-200">
                    <Link href={section.href} className="block">
                      <Button 
                        className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90 text-white px-6 py-2.5 rounded-xl font-semibold transition-all flex items-center justify-center text-sm lg:text-base`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>
      </div>
    </div>
  );
};

// Component for text with enhanced magic hover effect on individual letters
const EnhancedMagicTitle = ({ text, className = '' }: EnhancedMagicTitleProps) => {
  const { letterStates, handleMouseEnter, handleMouseLeave } = useEnhancedLetterHover(text);
  
  return (
        <button
          type="button"
          className={`flex flex-wrap justify-center ${className}`}
          tabIndex={0}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleMouseEnter();
            }
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleMouseLeave();
            }
          }}
        >
      {text.split('').map((char, index) => {
        const { color, phase }: LetterState = letterStates[index];
        let colorClass = 'text-white';
        
        if (color === 'orange') {
          colorClass = 'text-orange-500';
        } else if (color === 'navy') {
          colorClass = 'text-blue-400'; // Lighter navy blue
        }
        
        return (
          <span 
            key={`${char}-${index}`}
            className={`inline-block transition-all duration-500 ${colorClass} ${
              phase === 'active' ? 'transform scale-110' : ''
            }`}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </button>
  );
};

// Component for the subtitle with a smoother effect
const EnhancedMagicSubtitle = ({ text, className = '' }: { text: string; className?: string }) => {
  const [colorPhase, setColorPhase] = useState(0); // 0: white, 1: orange, 2: navy blue
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleMouseEnter = () => {
    
    // Transition to orange
    timeoutRef.current = setTimeout(() => {
      setColorPhase(1);
    }, 300);
    
    // Then to navy blue
    timeoutRef.current = setTimeout(() => {
      setColorPhase(2);
    }, 1000);
    
    // Then back to original after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setColorPhase(0);
    }, 3000);
  };
  
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setColorPhase(0);
  };
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  let colorClass = 'text-blue-100';
  if (colorPhase === 1) {
    colorClass = 'text-orange-300';
  } else if (colorPhase === 2) {
    colorClass = 'text-blue-300';
  }

  return (
    <p 
      className={`${className} transition-all duration-1000 ${colorClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </p>
  );
};

// Small, reusable SectionCard component used on the Main Sections dashboard
interface SectionType {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  color?: string;
  highlights?: string[];
}

const SectionCard: React.FC<{ section: SectionType; index: number }> = ({ section, index }) => {
  const IconComponent = section.icon;
  const [expanded, setExpanded] = useState(false);

  const colorMap: Record<string, string> = {
    blue: 'from-[#2B9EB3] to-[#2B9EB3]',
    green: 'from-green-500 to-green-600',
    red: 'from-[#FF6C00] to-[#FFC107]',
    indigo: 'from-indigo-500 to-blue-600',
    purple: 'from-purple-500 to-indigo-500',
    orange: 'from-orange-400 to-yellow-400',
    yellow: 'from-yellow-400 to-orange-400',
  };
  const gradient = colorMap[section.color as string] || studentsColors.gradient.tailwind;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
      onClick={() => setExpanded(!expanded)}
    >
      <div>
        <IconComponent className="w-10 h-10 text-[#2B9EB3] mb-4" />
        <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{section.description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        {expanded ? (
          <div className="text-sm text-gray-700">
            <ul className="list-disc pl-4 space-y-1">
              {section.highlights?.map((h: string, i: number) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div />
        )}

        <Link href={section.href} className="ml-4">
          <Button size="sm" className="whitespace-nowrap">
            Learn More
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default function StudentsPage() {
  const quickStats = [
    { label: 'Hands-On Learning', value: 'EIE Courses', icon: BookOpen, color: 'blue', description: 'Build entrepreneurial skills through mandatory EIE courses, hackathons, and CIE Ignite Ideathon' },
    { label: 'Funding Available', value: 'Up to ₹5L', icon: DollarSign, color: 'green', description: 'Access funding through Co-innovation Center, Cisco-Nasscom thingQbator, or $200K via PESU Venture Labs' },
    { label: 'Global Exposure', value: 'International', icon: Globe, color: 'purple', description: 'Showcase innovations to global delegates and engage with platforms like Global Venture Lab Conference' },
    { label: 'Mentorship', value: 'Industry Experts', icon: Users, color: 'orange', description: 'Connect with industry leaders, faculty, and alumni through CIE Industry Mentor Program' }
  ];

  const mainSections = [
    {
      title: 'Be a Part of CIE',
      description: 'Take active roles as Teaching Assistants, interns, or mentors',
      icon: Users,
      href: '/students/be-a-part-of-cie',
      color: 'green',
      highlights: ['Assist in PAML workshops', 'Intern with Centers of Excellence', 'Mentor peers through E-Cell & CMS', 'Hands-on experience & networking']
    },
    {
      title: 'Courses',
      description: 'Mandatory and elective EIE courses to build practical skills',
      icon: BookOpen,
      href: '/students/courses',
      color: 'blue',
      highlights: ['EIE-I & EIE-II', 'Hands-on labs', 'Project-driven assessments', 'Industry-aligned curriculum']
    },
    {
      title: 'Programs',
      description: 'Longer-term programs and certificates offered by CIE',
      icon: Lightbulb,
      href: '/students/programs',
      color: 'indigo',
      highlights: ['CIE Ignite', 'Co-innovation Center programs', 'Internships & fellowships', 'Research opportunities']
    },
    {
      title: 'Workshops',
      description: 'Short, focused workshops to gain practical skills quickly',
      icon: Calendar,
      href: '/students/workshops',
      color: 'orange',
      highlights: ['PAML Trainer', 'Summer Workshop series', 'Hands-on labs', 'Industry mentor sessions']
    },
    {
      title: 'Student Startup Program',
      description: 'Transform your ideas into thriving startups with funding, mentorship, and resources',
      icon: Rocket,
      href: '/students/startup-program',
      color: 'blue',
      highlights: ['Open to all PES students', 'Funding, mentorship & makerspaces', 'Access PESU Venture Labs funding', 'CIE Ignite Ideathon opportunities']
    },
    {
      title: 'Industry Mentor Program',
      description: 'Connect with industry leaders for personalized guidance',
      icon: Briefcase,
      href: '/students/mentorship',
      color: 'orange',
      highlights: ['Partners: Cisco, Intel, Deloitte', 'One-on-one mentorship', 'Startup development & market strategies', 'Networking events & workshops']
    },
    {
      title: 'Events',
      description: 'Stay updated on exciting events from student-led summits to global conferences',
      icon: Calendar,
      href: '/students/events',
      color: 'purple',
      highlights: ['E-Summit 2023 & Founder Fusion', 'CIE Ignite Ideathon 2026', 'Global Venture Lab Conference', 'Compete, learn, and network']
    },
    {
      title: 'Centers of Excellence',
      description: 'Engage with cutting-edge research and innovation opportunities',
      icon: Lightbulb,
      href: '/students/centers-of-excellence',
      color: 'indigo',
      highlights: ['CRAIS: Robotics & Intelligent Systems', 'QuaNaD: Quantum & Nano Devices', 'Focus on AI, IoT, quantum tech', 'Access advanced labs & industry partners']
    },
    {
      title: 'Student Clubs',
      description: 'Join vibrant student-led clubs to immerse yourself in entrepreneurship and sustainability',
      icon: Heart,
      href: '/students/clubs',
      color: 'red',
      highlights: ['E-Cell: E-Summit events', 'CMS: Sustainability initiatives', 'CIE Ignite S01 Grand Finale with 20+ volunteers', 'Network, lead, and make impact']
    },
    {
      title: 'Success Stories',
      description: 'Discover how CIE students built impactful startups',
      icon: Star,
      href: '/students/success-stories',
      color: 'yellow',
      highlights: ['PocketCoach: AI upskilling', 'Epicure Robotics: Food automation', 'Authify: NFC authentication', 'Zeru: Universal reputation system']
    },
    {
      title: 'Newsletter',
      description: 'Stay informed with the latest updates, events, and opportunities from CIE',
      icon: Mail,
      href: '/alumni/newsletter',
      color: 'blue',
      highlights: ['Monthly updates on CIE activities', 'Event announcements & recaps', 'Student success spotlights', 'Opportunities & deadlines']
    },
    {
      title: 'FAQs',
      description: 'Clear answers on mandatory EIE courses and Student Startup Program',
      icon: BookOpen,
      href: '/students/faqs',
      color: 'purple',
      highlights: ['Why EIE is required', 'How it integrates with your major', 'Funding opportunities explained', 'Get clarity on CIE offerings']
    }
  ];

  const whyCIE = [
    {
      title: 'Hands-On Learning',
      description: 'Build entrepreneurial skills through EIE courses, hackathons, and the CIE Ignite Ideathon',
      icon: BookOpen,
      color: 'blue'
    },
    {
      title: 'Funding Opportunities',
      description: 'Access up to ₹5 Lakh through Co-innovation Center or $200K via PESU Venture Labs to fuel your startup',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Mentorship & Networking',
      description: 'Connect with industry experts, faculty, and alumni through CIE Industry Mentor Program to guide your journey',
      icon: Users,
      color: 'orange'
    },
    {
      title: 'Global Exposure',
      description: 'Showcase innovations to international delegates or engage with global platforms like the Global Venture Lab Conference',
      icon: Globe,
      color: 'purple'
    },
    {
      title: 'Community Impact',
      description: 'Join student clubs like E-Cell and CMS to drive entrepreneurial and sustainability initiatives on campus and beyond',
      icon: Heart,
      color: 'red'
    }
  ];

  // getColorClasses removed (unused) to satisfy lint rules

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Interactive Hexagonal Background */}
      <section
        className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]"
      >
        <InteractiveHexagonBackground 
          primaryColor={studentsColors.hero.background}
          accentColor={studentsColors.hero.hexagonAccent}
          className="absolute inset-0 z-0"
        />

        {/* Hero Content - Centered */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30 mb-8">
              <GraduationCap className="w-4 h-4 mr-2" />
              Student Hub
            </span>
          </motion.div>

          {/* Title - Centered */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Unleash Your{' '}
            <span
              className="block mt-4 drop-shadow-md"
              style={{ color: studentsColors.primary }}
            >
              Entrepreneurial Potential
            </span>
          </motion.h1>

          {/* Subtitle - Centered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            A dynamic platform designed to empower you to turn your innovative ideas into impactful solutions. From EIE courses to student-led clubs, cutting-edge research, and global events—CIE connects you to the tools, mentorship, and community you need to thrive.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/students/startup-program">
              <Button
                variant="cie"
                size="lg"
                className="group text-white hover:opacity-95 transition-opacity"
                style={{ background: studentsColors.primary, borderColor: `${studentsColors.primary}33` }}
              >
                Discover the Student Startup Program
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/students/events">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                Explore CIE Events
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Rest of the page remains the same as before */}
          {/* Quick Stats */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
                {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-[rgba(43,158,179,0.12)]`}
                    >
                      <IconComponent className="w-6 h-6 text-[#2B9EB3]" />
                    </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section> */}

      {/* Main Sections Dashboard - Vertical Tab Carousel */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore the{' '}<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Students Section</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through our comprehensive ecosystem designed to support your entrepreneurial and innovation journey—from startup programs to clubs, research, and global events.
            </p>
          </motion.div>

          {/* Vertical Tabs Layout */}
          <VerticalTabCarousel sections={mainSections} />
        </div>
      </section>

      {/* Student Journey Chart (interactive) - removed per request
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your Student Journey</h2>
            <p className="text-sm text-gray-600 mt-2">A visual roadmap of semesters, milestones and opportunities at CIE — hover for details and click to learn more.</p>
          </motion.div>

          <StudentJourneyChart />
        </div>
      </section>
      */}

      {/* Recent Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why{' '}<span className={`bg-clip-text text-transparent bg-gradient-to-r ${studentsColors.gradient.tailwind}`}>CIE for Students?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CIE is more than a center—it&apos;s a launchpad for your entrepreneurial dreams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyCIE.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <IconComponent className="w-10 h-10 mb-6" style={{ color: studentsColors.primary }} />
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#00338d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How to Get Started
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-12 text-blue-100">
              Your entrepreneurial journey begins here. Choose your path and dive in.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Rocket className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">Join a Program</h3>
                <p className="text-sm text-blue-100">Enroll in Student Startup Program or EIE courses</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Heart className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">Engage with Clubs</h3>
                <p className="text-sm text-blue-100">Connect with E-Cell or CMS for events</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Lightbulb className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">Explore Research</h3>
                <p className="text-sm text-blue-100">Collaborate with Centers of Excellence</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Calendar className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">Attend Events</h3>
                <p className="text-sm text-blue-100">Join hackathons and global conferences</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/students/startup-program">
                <Button 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-blue-100 mb-4">Stay Connected</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-blue-100">
                <span> cieprogram@pes.edu</span>
                <span className="hidden sm:inline">•</span>
                <span> CIE Office, PES University RR/EC Campus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}