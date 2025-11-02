// The small overview component was removed to avoid duplicate imports/exports.
// This file intentionally contains the full StudentsPage component below.
"use client";
import { 
  BookOpen, 
  Calendar, 
  Users, 
  Lightbulb, 
  DollarSign, 
  Building2, 
  Target,
  ArrowRight,
  GraduationCap,
  Rocket,
  Globe,
  Heart,
  Briefcase,
  Star,
  Plus as PlusIcon,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
} from '@/components/ui/morphing-dialog';

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
    blue: 'from-[#2B9EB3] to-[#3E3C6B]',
    green: 'from-green-500 to-green-600',
    red: 'from-[#F15A29] to-[#FFC107]',
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
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${gradient}`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
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
    { label: 'Active Programs', value: '15+', icon: BookOpen, color: 'blue' },
    { label: 'Students Enrolled', value: '2,159', icon: Users, color: 'green' },
    { label: 'Success Rate', value: '95%', icon: Target, color: 'purple' },
    { label: 'Industry Partners', value: '100+', icon: Building2, color: 'orange' }
  ];

  const mainSections = [
    {
      title: 'Student Startup Program',
      description: 'Comprehensive program to transform your ideas into thriving startups',
      icon: Rocket,
      href: '/students/startup-program',
      color: 'blue',
      highlights: ['Up to $200K Funding', 'Industry Mentorship', 'Prototype Development', 'Market Validation Support']
    },
    {
      title: 'Programs',
      description: 'Explore our comprehensive range of courses and training programs',
      icon: BookOpen,
      href: '/students/programs',
      color: 'green',
      highlights: ['EIE Part 1 & 2', 'Product Management in AI Era', 'PAML Workshop', 'Summer Programs']
    },
    {
      title: 'Student Clubs',
      description: 'Join vibrant student-led organizations and drive meaningful impact',
      icon: Heart,
      href: '/students/clubs',
      color: 'red',
      highlights: ['E-Cell Leadership', 'CMS Sustainability', 'Event Organization', 'Alumni Network']
    },
    {
      title: 'Centers of Excellence',
      description: 'Engage with cutting-edge research and innovation opportunities',
      icon: Globe,
      href: '/students/centers-of-excellence',
      color: 'indigo',
      highlights: ['CRAIS Robotics', 'QuaNaD Quantum Tech', 'C-IoT Smart Systems', 'CHIPS Hardware']
    },
    {
      title: 'Events',
      description: 'Join workshops, competitions, and networking sessions',
      icon: Calendar,
      href: '/students/events',
      color: 'purple',
      highlights: ['CIE Ignite Ideathon', 'Hackathons', 'Industry AMAs', 'Networking Sessions']
    },
    {
      title: 'Resources',
      description: 'Access guides, templates, and learning materials',
      icon: Lightbulb,
      href: '/students/resources',
      color: 'orange',
      highlights: ['Entrepreneurship Guides', 'AI/ML Resources', 'Design Tools', 'Legal Templates']
    },
    {
      title: 'Mentorship',
      description: 'Connect with industry experts and alumni mentors',
      icon: Users,
      href: '/students/mentorship',
      color: 'green',
      highlights: ['Industry Mentors', 'Alumni Network', 'Peer Mentoring', 'Career Guidance']
    },
    {
      title: 'Funding',
      description: 'Discover grants, scholarships, and startup funding',
      icon: DollarSign,
      href: '/students/funding',
      color: 'yellow',
      highlights: ['CiC Grants', 'Mathworks Funding', 'Startup Grants', 'Scholarship Programs']
    },
    {
      title: 'Projects',
      description: 'Showcase your work and explore student innovations',
      icon: Briefcase,
      href: '/students/projects',
      color: 'blue',
      highlights: ['Capstone Projects', 'Research Work', 'Startup Ideas', 'Portfolio Showcase']
    },
    {
      title: 'FAQs',
      description: 'Get answers to frequently asked questions about CIE programs',
      icon: Star,
      href: '/students/faqs',
      color: 'purple',
      highlights: ['EIE Course Info', 'Program Details', 'Funding Questions', 'Application Process']
    }
  ];

  const recentUpdates = [
    {
      title: 'Student Startup Program Applications Open',
      description: 'Apply for comprehensive startup support with up to $200K funding through PESU Venture Labs',
      date: '2024-01-15',
      type: 'Program',
      href: '/students/startup-program',
      urgent: true
    },
    {
      title: 'CIE Ignite 2025 Registration Open',
      description: 'Join our flagship ideathon for 2nd-year students - ₹25K+ in prizes',
      date: '2024-01-12',
      type: 'Competition',
      href: '/students/events',
      urgent: true
    },
    {
      title: 'New Centers of Excellence Collaboration',
      description: 'Research opportunities now available across CRAIS, QuaNaD, and other CoEs',
      date: '2024-01-10',
      type: 'Research',
      href: '/students/centers-of-excellence',
      urgent: false
    },
    {
      title: 'Student Clubs Recruitment Drive',
      description: 'E-Cell and CMS are recruiting new members - leadership opportunities available',
      date: '2024-01-08',
      type: 'Clubs',
      href: '/students/clubs',
      urgent: false
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
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white mb-8"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Student Hub</span>
          </motion.div>

          {/* Title - Centered */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Your Innovation Journey{' '}
            <span
              className={`block mt-4 bg-clip-text text-transparent bg-gradient-to-r ${studentsColors.gradient.tailwind} drop-shadow-md`}
            >
              Starts Here
            </span>
          </motion.h1>

          {/* Subtitle - Centered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            Discover programs, connect with mentors, access resources, and transform your ideas into reality through CIE&apos;s comprehensive ecosystem.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/students/programs">
              <Button 
                variant="cie" 
                size="lg"
                className={`group ${'bg-gradient-to-r ' + studentsColors.gradient.tailwind} text-white`}
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/students/startup-program">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                Join Startup Program
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Rest of the page remains the same as before */}
          {/* Quick Stats */}
      <section className="py-16 bg-white">
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
      </section>

      {/* Main Sections Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Your{' '}<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through our comprehensive ecosystem designed to support your entrepreneurial and innovation journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainSections.map((section, index) => {
              const Icon = section.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
              const lightBg = `rgba(${hexToRgb(studentsColors.primary)}, 0.08)`;
              return (
                <MorphingDialog key={section.title}>
                  <MorphingDialogTrigger>
                    <div role="button" tabIndex={0} className="w-full text-left bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[rgba(${hexToRgb(studentsColors.primary)},0.08)]`}>
                          <Icon className="w-6 h-6" style={{ color: studentsColors.primary }} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{section.description}</p>
                      </div>

                      <div className="mt-4 flex items-center justify-end">
                        <span className="text-sm text-gray-500">Learn More</span>
                      </div>
                    </div>
                  </MorphingDialogTrigger>

                  <MorphingDialogContainer>
                    <MorphingDialogContent
                      style={{ borderRadius: '18px' }}
                      className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-gray-200 bg-white sm:w-[560px]"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-[rgba(${hexToRgb(studentsColors.primary)},0.08)]`}>
                              <Icon className="w-6 h-6" style={{ color: studentsColors.primary }} />
                            </div>
                            <div>
                              <MorphingDialogTitle className="text-2xl font-bold text-gray-900">{section.title}</MorphingDialogTitle>
                              <MorphingDialogSubtitle className="text-sm text-gray-600 mt-2">{section.description}</MorphingDialogSubtitle>
                            </div>
                          </div>
                          <MorphingDialogClose className="text-gray-500">Close</MorphingDialogClose>
                        </div>

                        <MorphingDialogDescription
                          disableLayoutAnimation
                          variants={{
                            initial: { opacity: 0, scale: 0.98, y: 20 },
                            animate: { opacity: 1, scale: 1, y: 0 },
                            exit: { opacity: 0, scale: 0.98, y: 20 },
                          }}
                        >
                          <div className="mt-6">
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                              {section.highlights?.map((h: string, i: number) => (
                                <li key={i}>{h}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6 flex justify-end">
                            <Link href={section.href}>
                              <Button className="cie-button cie-button-secondary">Learn More</Button>
                            </Link>
                          </div>
                        </MorphingDialogDescription>
                      </div>
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>
              );
            })}
          </div>
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
              Recent{' '}<span className={`bg-clip-text text-transparent bg-gradient-to-r ${studentsColors.gradient.tailwind}`}>Updates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest opportunities, programs, and announcements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MorphingDialog>
                  <MorphingDialogTrigger>
                    <div role="button" tabIndex={0} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${update.urgent ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}>
                          {update.type}
                        </span>
                        {update.urgent && (
                          <div className="flex items-center text-indigo-500">
                            <Star className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {update.title}
                      </h3>

                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {update.description}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">
                          {new Date(update.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="text-sm text-gray-500">Learn More</span>
                      </div>
                    </div>
                  </MorphingDialogTrigger>

                  <MorphingDialogContainer>
                    <MorphingDialogContent className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-gray-200 bg-white sm:w-[520px]" style={{ borderRadius: '12px' }}>
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${update.urgent ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}>
                              {update.type}
                            </span>
                            <MorphingDialogTitle className="text-2xl font-bold text-gray-900 mt-4">{update.title}</MorphingDialogTitle>
                            <MorphingDialogSubtitle className="text-sm text-gray-600 mt-2">{new Date(update.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</MorphingDialogSubtitle>
                          </div>
                          <MorphingDialogClose className="text-gray-500">Close</MorphingDialogClose>
                        </div>

                        <MorphingDialogDescription>
                          <div className="mt-4 text-sm text-gray-700">
                            {update.description}
                          </div>

                          <div className="mt-6 flex justify-end">
                            <Link href={update.href}>
                              <Button className="cie-button cie-button-secondary">Learn More</Button>
                            </Link>
                          </div>
                        </MorphingDialogDescription>
                      </div>
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
  <section className={`py-16 ${studentsColors.gradient.tailwind}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: studentsColors.primary }}>
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: studentsColors.primary }}>
              Join thousands of students who have transformed their ideas into successful ventures through CIE's comprehensive ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/students/startup-program">
                <Button className="bg-white/10 hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-xl border" style={{ color: studentsColors.primary, borderColor: `${studentsColors.primary}33` }}>
                  <Rocket className="w-5 h-5 mr-2" style={{ color: studentsColors.primary }} />
                  Join CIE Ignite
                </Button>
              </Link>

              <Link href="/students/programs">
                <Button className="border-2 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent" style={{ color: studentsColors.primary, borderColor: studentsColors.primary }}>
                  Explore Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}