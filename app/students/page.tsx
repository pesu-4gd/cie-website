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
} from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogDescription,
} from '@/components/ui/morphing-dialog';

import { SECTION_COLORS } from '@/styles/colors';
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
  const [selected, setSelected] = useState<null | Milestone>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const milestoneRefs = useRef<Record<string, SVGRectElement | null>>({});

  interface Milestone { id: string; label: string; under: number; note: string }

  const columns = ['Semester', '3', '4', 'Summer', '5', '6', 'Summer', '7', '8'];

  const milestones: Milestone[] = [
    { id: 'eiei', label: 'EIE-I', under: 1, note: 'Get your idea validated — CIE Ignite (Ideathon), up to ₹50K prizes + internships' },
    { id: 'eieii', label: 'EIE-II', under: 2, note: 'Prototype & refine problem statements; workshops & mentorship' },
    { id: 'intern1', label: 'CIE / CoE Internship', under: 3, note: 'Hands-on internships with Centers of Excellence or industry' },
    { id: 'cap1', label: 'Capstone Project - I', under: 4, note: 'Build your prototype (semester 5)' },
    { id: 'cap2', label: 'Capstone Project - II', under: 5, note: 'Iterate and prepare for pilot (semester 6)' },
    { id: 'intern2', label: 'CIE / CoE Internship', under: 6, note: 'Further development, incubation candidacy and early fund access' },
    { id: 'incubate', label: 'Incubate', under: 7, note: 'Incubate: validate prototype; CiC Ready Program — up to ₹5 Lakh funding' },
    { id: 'accelerate', label: 'Accelerate', under: 8, note: 'Accelerate: scale and demo to investors' }
  ];

  // keyboard navigation: left/right to move focus between milestones
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

  const handler = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const ids = milestones.map(m => m.id);
      const currentIndex = hovered ? ids.indexOf(hovered) : -1;
      let next = 0;
      if (e.key === 'ArrowLeft') next = currentIndex <= 0 ? ids.length - 1 : currentIndex - 1;
      if (e.key === 'ArrowRight') next = currentIndex === -1 ? 0 : (currentIndex + 1) % ids.length;
      const targetId = ids[next];
      setHovered(targetId);
      const ref = milestoneRefs.current[targetId];
      if (ref) ref.focus();
    };

    el.addEventListener('keydown', handler as any);
    return () => el.removeEventListener('keydown', handler as any);
  }, [hovered]);

  return (
    <section className="py-6 px-2 sm:px-6 lg:px-8 bg-white" ref={containerRef} tabIndex={0} aria-label="Student journey interactive">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-auto">
          <div className="relative min-w-[1000px]">
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
                return <line key={`connect-${columns[idx-1]}-${columns[idx]}`} x1={x1} y1={y} x2={x2} y2={y} stroke="#e2e8f0" strokeWidth={2} strokeLinecap="round" />;
              })}

              {/* Milestone callouts (orange boxes below) with motion and accessibility */}
              {milestones.map((m) => {
                const idx = m.under;
                const x = 60 + idx * 100;
                const y = 140;
                const isHovered = hovered === m.id;
                return (
                  <g key={m.id} transform={`translate(${x}, ${y})`}>
                    <motion.rect
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
                      ref={(r: any) => (milestoneRefs.current[m.id] = r)}
                      onMouseEnter={(e: any) => {
                        setHovered(m.id);
                        const svg = svgRef.current;
                        if (svg) {
                          const rect = svg.getBoundingClientRect();
                          setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, text: m.note });
                        }
                      }}
                      onMouseMove={(e: any) => {
                        const svg = svgRef.current;
                        if (svg) {
                          const rect = svg.getBoundingClientRect();
                          setTooltip(prev => prev ? { x: e.clientX - rect.left, y: e.clientY - rect.top, text: prev.text } : null);
                        }
                      }}
                      onMouseLeave={() => { setHovered(null); setTooltip(null); }}
                      onClick={() => setSelected(m)}
                      onKeyDown={(e: any) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelected(m);
                        }
                      }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                    />

                    <text x={0} y={-2} textAnchor="middle" fontSize={14} fill="#92400e" pointerEvents="none" fontWeight={700}>{m.label}</text>
                    {/* small dashed connector up to semester */}
                    <line x1={0} y1={-26} x2={0} y2={-60} stroke="#e2e8f0" strokeWidth={2} strokeDasharray="4 4" />
                  </g>
                );
              })}

              {/* Footer dashed summary box */}
              <g transform={`translate(500, 220)`}>
                <rect x={-380} y={-22} width={760} height={44} rx={8} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 6" />
                <text x={0} y={6} textAnchor="middle" fontSize={13} fill="#0f172a">Build Tech, Business and Soft skills; discover your ‘True North’ — prototype, validate, and prepare to scale.</text>
              </g>
            </svg>

            {/* Tooltip (rendered inside SVG for positioning and to avoid inline styles) */}
            {tooltip && (
              (() => {
                const text = tooltip.text.length > 80 ? tooltip.text.slice(0, 77) + '...' : tooltip.text;
                const tx = Math.min(760, tooltip.x);
                const ty = Math.max(20, tooltip.y - 60);
                return (
                  <g transform={`translate(${tx}, ${ty})`} pointerEvents="none">
                    <rect x={0} y={0} width={240} height={56} rx={8} fill="#ffffff" stroke="#e6e6e6" />
                    <text x={12} y={18} fontSize={12} fill="#0f172a">{text}</text>
                  </g>
                );
              })()
            )}
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">Hover a milestone for details, use ← → to move focus, press Enter to open details.</div>

          {/* Mobile-friendly list of milestones */}
          <div className="md:hidden mt-6 grid grid-cols-1 gap-3">
            {milestones.map(m => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelected(m)}
                className="text-left p-4 rounded-lg border border-gray-200 bg-white hover:shadow transition"
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-gray-900">{m.label}</div>
                  <div className="text-xs text-gray-500">Semester {m.under}</div>
                </div>
                <div className="text-sm text-gray-600 mt-2 line-clamp-2">{m.note}</div>
              </button>
            ))}
          </div>

          {/* Desktop modal / details panel (open when selected) */}
          {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <button type="button" aria-label="Close dialog" className="absolute inset-0 bg-black/40 focus:outline-none" onClick={() => setSelected(null)} />
              <dialog open className="relative max-w-xl w-full bg-white rounded-xl shadow-lg p-6 z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{selected.label}</h3>
                    <p className="text-sm text-gray-600 mt-1">Semester: {selected.under}</p>
                  </div>
                  <button type="button" className="text-gray-500" onClick={() => setSelected(null)}>Close</button>
                </div>
                <div className="mt-4 text-sm text-gray-700">{selected.note}</div>
                <div className="mt-4 flex justify-end">
                  <a className="text-sm text-indigo-600 font-medium" href="/students/programs">Explore Programs →</a>
                </div>
              </dialog>
            </div>
          )}
        </div>
      </div>
    </section>
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
      urgent: true
    },
    {
      title: 'CIE Ignite 2025 Registration Open',
      description: 'Join our flagship ideathon for 2nd-year students - ₹25K+ in prizes',
      date: '2024-01-12',
      type: 'Competition',
      urgent: true
    },
    {
      title: 'New Centers of Excellence Collaboration',
      description: 'Research opportunities now available across CRAIS, QuaNaD, and other CoEs',
      date: '2024-01-10',
      type: 'Research',
      urgent: false
    },
    {
      title: 'Student Clubs Recruitment Drive',
      description: 'E-Cell and CMS are recruiting new members - leadership opportunities available',
      date: '2024-01-08',
      type: 'Clubs',
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
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Your Innovation Journey{' '}
            <span
              className={`block mt-4 bg-clip-text text-transparent bg-gradient-to-r ${studentsColors.gradient.tailwind}`}
            >
              Starts Here
            </span>
          </motion.h1>

          {/* Subtitle - Centered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {mainSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`${index >= 5 ? 'md:col-span-2 lg:col-span-3 xl:col-span-1' : ''}`}
                >
                  <MorphingDialog
                    transition={{
                      type: 'spring',
                      bounce: 0.05,
                      duration: 0.25,
                    }}
                  >
                    <MorphingDialogTrigger className="w-full h-full text-left">
                      <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${studentsColors.gradient.tailwind}`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {section.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {section.description}
                        </p>
                        
                        <div className="flex items-center text-blue-600 font-semibold mt-4 text-sm">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </MorphingDialogTrigger>

                    <MorphingDialogContainer>
                      <MorphingDialogContent
                        className="pointer-events-auto relative flex h-auto w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl"
                      >
                        <div className="p-8">
                          <MorphingDialogTitle className="mb-6">
                            <div
                              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${studentsColors.gradient.tailwind}`}
                            >
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">
                              {section.title}
                            </h2>
                            <p className="text-lg text-gray-600">
                              {section.description}
                            </p>
                          </MorphingDialogTitle>

                          <MorphingDialogDescription
                            disableLayoutAnimation
                            variants={{
                              initial: { opacity: 0, scale: 0.8, y: 100 },
                              animate: { opacity: 1, scale: 1, y: 0 },
                              exit: { opacity: 0, scale: 0.8, y: 100 },
                            }}
                          >
                            <div className="space-y-4 mb-6">
                              <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
                              {section.highlights.map((highlight, idx) => (
                                <div key={`${section.title}-highlight-${idx}`} className="flex items-start">
                                  <div className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 bg-indigo-500" />
                                  <span className="text-gray-700">{highlight}</span>
                                </div>
                              ))}
                            </div>
                            
                            <Link href={section.href}>
                              <Button className={`w-full text-white ${studentsColors.gradient.tailwind}`}>
                                <span className="text-white">Explore {section.title}</span>
                                <ArrowRight className="w-5 h-5 ml-2 text-white" />
                              </Button>
                            </Link>
                          </MorphingDialogDescription>
                        </div>
                        <MorphingDialogClose className="text-gray-500 hover:text-gray-700" />
                      </MorphingDialogContent>
                    </MorphingDialogContainer>
                  </MorphingDialog>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Journey Chart (interactive) */}
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
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
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
                  <Button className="text-sm px-3 py-1">
                    Learn More
                  </Button>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join thousands of students who have transformed their ideas into successful ventures through CIE's comprehensive ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Rocket className="w-5 h-5 mr-2" />
                Join CIE Ignite
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}