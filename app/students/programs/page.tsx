'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { SECTION_COLORS, hexToRgb } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogClose,
} from '@/components/ui/morphing-dialog';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  Users,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle,
  Star,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  FileText,
  ClipboardCheck,
  Settings,
  HandCoins
} from 'lucide-react';
import { useState } from 'react';

export default function ProgramsPage() {
  const studentsColors = SECTION_COLORS.students;
  const [activeTab, setActiveTab] = useState('core');

  const programCategories = [
    { id: 'core', label: 'Core Programs', icon: BookOpen },
    { id: 'specialized', label: 'Specialized Courses', icon: Target },
    { id: 'workshops', label: 'Workshops', icon: Lightbulb },
    { id: 'international', label: 'International', icon: Globe },
    { id: 'ready', label: 'CiC READY', icon: Rocket }
  ];

  const corePrograms = [
    {
      title: 'EIE Part 1: Foundations of Innovation',
      duration: '1 Semester',
      level: 'Beginner',
      students: '500+',
      rating: 4.8,
      description: 'Build the foundation for entrepreneurial thinking and innovation mindset.',
      highlights: [
        'Introduction to Entrepreneurship',
        'Innovation Frameworks',
        'Design Thinking Methodology',
        'Business Model Canvas',
        'Market Research Techniques'
      ],
      modules: [
        'Entrepreneurship Fundamentals',
        'Innovation & Creativity',
        'Market Analysis',
        'Business Planning',
        'Pitch Development'
      ],
      outcomes: [
        'Develop entrepreneurial mindset',
        'Master design thinking process',
        'Create viable business concepts',
        'Present compelling pitches'
      ],
      instructor: 'Prof. Sathya Prasad & Industry Experts',
      format: 'Hybrid (Online + In-person)',
      prerequisites: 'None',
      certification: 'CIE Certificate of Completion'
    },
    {
      title: 'EIE Part 2: Advanced Entrepreneurship',
      duration: '1 Semester',
      level: 'Intermediate',
      students: '400+',
      rating: 4.9,
      description: 'Advanced concepts in entrepreneurship, startup execution, and scaling strategies.',
      highlights: [
        'Startup Execution Strategies',
        'Funding & Investment',
        'Legal & Regulatory Framework',
        'Team Building & Leadership',
        'Growth & Scaling'
      ],
      modules: [
        'Startup Execution',
        'Financial Planning',
        'Legal Frameworks',
        'Leadership Skills',
        'Scaling Strategies'
      ],
      outcomes: [
        'Execute startup ideas effectively',
        'Understand funding landscape',
        'Navigate legal requirements',
        'Build and lead teams'
      ],
      instructor: 'Prof. Sathya Prasad & Industry Mentors',
      format: 'Hybrid (Online + In-person)',
      prerequisites: 'EIE Part 1 or equivalent',
      certification: 'CIE Advanced Certificate'
    }
  ];

  const specializedCourses = [
    {
      title: 'Product Management in AI Era',
      duration: '13 Modules',
      level: 'Advanced',
      students: '150+',
      rating: 4.9,
      description: 'Comprehensive course on product management with focus on AI and emerging technologies.',
      highlights: [
        'AI-Focused Curriculum',
        'Industry Expert Instruction',
        'Project-Based Learning',
        'Real-world Case Studies',
        'Final Product Pitch'
      ],
      modules: [
        'Product Management Fundamentals',
        'Market Research & Analysis',
        'Product Development Lifecycle',
        'AI in Product Management',
        'Product Launch & Scaling'
      ],
      outcomes: [
        'Master PM frameworks and tools',
        'Understand AI impact on products',
        'Develop product roadmaps',
        'Lead cross-functional teams'
      ],
      instructor: 'Prof. Sathya Prasad & CIE Industry Mentor',
      format: 'Online (MS Teams) + In-person sessions',
      prerequisites: '8th semester Engineering/Design students',
      certification: 'Product Management Certificate'
    }
  ];

  const workshops = [
    {
      title: 'PAML Train-the-Trainer Workshop',
      duration: '3 Days',
      level: 'All Levels',
      students: '50+',
      rating: 4.7,
      description: 'Intensive workshop on Product Analytics and Machine Learning for trainers.',
      highlights: [
        'Hands-on Training',
        'Industry Best Practices',
        'Certification Program',
        'Networking Opportunities',
        'Resource Kit'
      ],
      modules: [
        'Product Analytics Fundamentals',
        'ML for Product Managers',
        'Training Methodologies',
        'Case Study Analysis',
        'Certification Assessment'
      ],
      outcomes: [
        'Train others in PAML concepts',
        'Implement analytics frameworks',
        'Use ML in product decisions',
        'Build training programs'
      ],
      instructor: 'Industry Experts & CIE Faculty',
      format: 'In-person Intensive',
      prerequisites: 'Basic product management knowledge',
      certification: 'PAML Trainer Certification'
    }
  ];

  const internationalPrograms = [
    {
      title: 'Berkeley Haas Global Access Program',
      duration: 'Variable',
      level: 'Advanced',
      students: '25+',
      rating: 5.0,
      description: 'Exclusive access to UC Berkeley Haas School of Business programs and resources.',
      highlights: [
        'UC Berkeley Partnership',
        'Global Exposure',
        'World-class Faculty',
        'International Network',
        'Certificate from Berkeley'
      ],
      modules: [
        'Global Business Strategy',
        'Innovation Management',
        'International Markets',
        'Cross-cultural Leadership',
        'Global Entrepreneurship'
      ],
      outcomes: [
        'Global business perspective',
        'International network',
        'Berkeley certification',
        'Cultural competency'
      ],
      instructor: 'UC Berkeley Faculty',
      format: 'Online + Study Abroad Option',
      prerequisites: 'Excellent academic record',
      certification: 'UC Berkeley Certificate'
    }
  ];

  const getCurrentPrograms = () => {
    switch (activeTab) {
      case 'core': return corePrograms;
      case 'specialized': return specializedCourses;
      case 'workshops': return workshops;
      case 'international': return internationalPrograms;
      default: return corePrograms;
    }
  };

  const summerPrograms = [
    { name: 'CIE Bootcamp', duration: '2 weeks', focus: 'Intensive startup training' },
    { name: 'CIE Basecamp', duration: '1 week', focus: 'Foundation building' },
    { name: 'Innovation Summer School', duration: '3 weeks', focus: 'Research & development' }
  ];

  // Map specific program titles to course pages; return null to indicate "no Learn More" (e.g., Berkeley)
  function getProgramHref(program: { title: string }) {
    const t = program.title.toLowerCase();
    if (t.includes('eie part 1')) return '/students/courses/eie-1';
    if (t.includes('eie part 2')) return '/students/courses/eie-2';
    if (t.includes('product management')) return '/students/courses/product-management-ai';
    if (t.includes('paml')) return '/students/workshops';
    // For Berkeley program, remove the Learn More action
    if (t.includes('berkeley')) return null;
    const slug = program.title.toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/(^-|-$)/g, '');
    return `/students/programs/${slug}`;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden" style={{ background: studentsColors.gradient.css }}>
        <InteractiveHexagonBackground className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30">
                <GraduationCap className="w-4 h-4 mr-2" />
                Student Programs
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Transform Your Ideas{' '}
              <span className="block text-[#2B9EB3]">Into Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The Centre for Innovation and Entrepreneurship (CIE) at PES University is a dynamic hub for fostering innovation, entrepreneurship, and technical excellence. Through signature programs, workshops, and international opportunities, CIE empowers students to transform ideas into impactful solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="bg-gradient-to-r from-[#00377B] to-[#2B9EB3] bg-clip-text text-transparent">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of programs designed to meet different learning objectives and career goals.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {programCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center px-6 py-3 mx-2 mb-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          {/* Active Tab Check */}
          {activeTab === 'ready' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">

              {/* 1. Intro */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
                    Pre-Seed Launchpad
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    CiC READY Program: Your Launchpad for Deep-Tech Innovation
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    A Landmark Collaboration, a New Chapter in Innovation. On January 24, 2025, PES University marked a historic milestone in Indian academia with the inauguration of the nation’s first Co-Innovation Centre (CIC), established in partnership with IHFC (I-Hub Foundation for Cobotics), the Technology Innovation Hub of IIT Delhi.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The READY (Research, Entrepreneurship and Development for Youth) Program is the vibrant heart of this visionary centre. It is designed to turn the CIC’s mission into reality, directly empowering PES University's brightest students and graduates to translate pioneering ideas into viable prototypes and scalable startups.
                  </p>
                </div>
              </div>

              {/* 2. Why READY? */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why READY? Your Comprehensive Advantage</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Funding & Resources", desc: "Receive financial support of up to ₹5 Lakhs and access to dedicated lab space and prototyping facilities.", icon: CheckCircle },
                    { title: "Expert Mentorship", desc: "Benefit from structured guidance by industry experts, faculty innovators, and seasoned entrepreneurs.", icon: Users },
                    { title: "Path to Market & IP", desc: "Graduate from prototype to startup with direct incubation support. Learn to protect and own your inventions.", icon: Target },
                    { title: "Structured Journey", desc: "Immerse yourself in a 6-month intensive program with peer learning and milestone-based development.", icon: Clock }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. The READY Journey (Roadmap) */}
              <div className="py-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">The READY Journey: From Idea to Impact</h3>

                {/* Desktop View (Wave) */}
                <div className="hidden lg:block relative h-[400px] max-w-6xl mx-auto">
                  {/* Dashed Wave Line */}
                  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 300" fill="none" preserveAspectRatio="none">
                    <path
                      d="M0,150 C150,150 150,50 300,50 C450,50 450,250 600,250 C750,250 750,50 900,50 C1050,50 1050,250 1200,250"
                      stroke="#000"
                      strokeWidth="2"
                      strokeDasharray="8 8"
                      className="opacity-30"
                    />
                  </svg>

                  {[
                    {
                      id: 1,
                      title: "Apply Anytime",
                      desc: "Ready Call for Applications, Proposal Submission year round",
                      icon: FileText,
                      top: true
                    },
                    {
                      id: 2,
                      title: "Quarterly Evaluation",
                      desc: "Screening & pitches in Feb, May, Aug, Nov",
                      icon: ClipboardCheck,
                      top: false
                    },
                    {
                      id: 3,
                      title: "Onboarding",
                      desc: "Final year students in Jan & July",
                      icon: Settings,
                      top: true
                    },
                    {
                      id: 4,
                      title: "Flexible Onboarding",
                      desc: "For Graduated Applicants (G+1 & G+2)",
                      icon: Users,
                      top: false
                    },
                    {
                      id: 5,
                      title: "Build & Grow",
                      desc: "Financial support, mentoring & peer learning",
                      icon: HandCoins,
                      top: true
                    },
                    {
                      id: 6,
                      title: "Graduate to Startup",
                      desc: "Transition to deep-tech ventures & incubation",
                      icon: Award,
                      top: false
                    }
                  ].map((step, index) => {
                    const positions = [10, 26, 42, 58, 74, 90];
                    const xPos = positions[index];

                    return (
                      <div
                        key={step.id}
                        className="absolute transform -translate-x-1/2 w-48 text-center group"
                        style={{ left: `${xPos}%`, top: step.top ? '16%' : '83%' }}
                      >
                        {/* Node on Wave */}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm z-10 border-4 border-white`}>
                          {step.id}
                        </div>

                        {/* Icon Circle */}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 ${step.top ? 'top-12' : 'bottom-12'} w-20 h-20 rounded-full bg-[#E8A682] flex items-center justify-center shadow-md transition-transform hover:scale-110 duration-300`}>
                          <step.icon className="w-10 h-10 text-white" />
                        </div>

                        {/* Content */}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-56 ${step.top ? 'bottom-full mb-16' : 'top-full mt-16'}`}>
                          <p className="text-sm text-gray-700 font-medium leading-snug">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile View (Timeline) */}
                <div className="lg:hidden space-y-8 pl-4 border-l-2 border-gray-200 ml-4 relative">
                  {[
                    {
                      id: 1,
                      title: "Apply Anytime",
                      desc: "Ready Call for Applications, Proposal Submission year round",
                      icon: FileText
                    },
                    {
                      id: 2,
                      title: "Quarterly Evaluation",
                      desc: "Screening & pitches in Feb, May, Aug, Nov",
                      icon: ClipboardCheck
                    },
                    {
                      id: 3,
                      title: "Onboarding",
                      desc: "Final year students in Jan & July",
                      icon: Settings
                    },
                    {
                      id: 4,
                      title: "Flexible Onboarding",
                      desc: "For Graduated Applicants (G+1 & G+2)",
                      icon: Users
                    },
                    {
                      id: 5,
                      title: "Build & Grow",
                      desc: "Financial support, mentoring & peer learning",
                      icon: HandCoins
                    },
                    {
                      id: 6,
                      title: "Graduate to Startup",
                      desc: "Transition to deep-tech ventures & incubation",
                      icon: Award
                    }
                  ].map((step) => (
                    <div key={step.id} className="relative pl-8">
                      <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-[#E8A682] flex items-center justify-center border-4 border-white shadow-sm">
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -left-[29px] -top-6 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                        {step.id}
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Success Stories */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Innovations in Action: READY Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "COBRA", desc: "An agile robot designed for search and rescue operations in collapsed structures and hazardous environments." },
                    { name: "Kaere", desc: "A novel, non-invasive, AI-powered breath analyzer for glucose monitoring." },
                    { name: "Smart AI Glasses", desc: "Assistive technology enhancing independence for the visually impaired through real-time object recognition." },
                    { name: "TeleRobotic Ultrasound", desc: "A system enabling remote diagnostic ultrasound examinations, expanding access to healthcare." }
                  ].map((story, idx) => (
                    <div key={idx} className="flex items-start bg-white p-6 rounded-2xl border border-gray-200">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl mr-4 flex-shrink-0">
                        {story.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{story.name}</h4>
                        <p className="text-sm text-gray-600">{story.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. CTA */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-10 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Are You Ready to Build the Future?</h3>
                <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                  If you are a passionate student or recent graduate with a disruptive idea in deep technology, the READY Program is your definitive launchpad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-blue-50 font-bold"
                  >
                    <a href="mailto:cieprogram@pes.edu">Contact CIE</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <a href="https://www.ihfc.co.in/ready-program/" target="_blank" rel="noreferrer">
                      Visit Official Page <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          ) : (
            /* Existing Cards Grid */
            <div className="grid lg:grid-cols-2 gap-8">
              {getCurrentPrograms().map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Program Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{program.description}</p>
                    </div>
                  </div>

                  {/* Program Meta */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <Clock className="w-5 h-5 mx-auto mb-1" style={{ color: studentsColors.primary }} />
                      <div className="text-sm font-medium text-gray-900">{program.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <Award className="w-5 h-5 mx-auto mb-1" style={{ color: studentsColors.primary }} />
                      <div className="text-sm font-medium text-gray-900">{program.level}</div>
                      <div className="text-xs text-gray-500">Level</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <Users className="w-5 h-5 mx-auto mb-1" style={{ color: studentsColors.primary }} />
                      <div className="text-sm font-medium text-gray-900">{program.students}</div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <MapPin className="w-5 h-5 mx-auto mb-1" style={{ color: studentsColors.primary }} />
                      <div className="text-sm font-medium text-gray-900">{program.format.split(' ')[0]}</div>
                      <div className="text-xs text-gray-500">Format</div>
                    </div>
                  </div>

                  {/* Program Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Program Highlights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="font-semibold text-gray-900">Instructor: </span>
                      <span className="text-gray-600">{program.instructor}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Prerequisites: </span>
                      <span className="text-gray-600">{program.prerequisites}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Certification: </span>
                      <span className="text-gray-600">{program.certification}</span>
                    </div>
                  </div>

                  {/* Action: only Learn More */}
                  <div>
                    {(() => {
                      const href = getProgramHref(program as { title: string });
                      if (!href) return null;
                      return (
                        <Link href={href}>
                          <Button className="w-full bg-white hover:bg-[#4cafc5] border border-[#4cafc5] hover:border-green-600 transition-all duration-300" style={{ borderColor: studentsColors.secondary, color: studentsColors.secondary }}>
                            Learn More
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      );
                    })()}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Signature Programs (morphing dialog cards) - MOVED HERE */}
      <section id="signature-programs" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Signature Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">CIE’s signature programs provide structured learning and hands-on experience in entrepreneurship and innovation, tailored for students and aspiring entrepreneurs.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
            {/* Bootcamp */}
            <MorphingDialog>
              <div>
                <MorphingDialogTrigger className="block">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm cursor-pointer h-full flex flex-col justify-between">
                    <h3 className="text-xl font-semibold mb-2">CIE Bootcamp 2018<span className="text-sm font-normal text-gray-500"></span></h3>
                    <p className="text-gray-600 mb-3">Annual intensive training to accelerate entrepreneurial growth.</p>
                    <div className="text-sm text-gray-500">Format: Multi-day immersive bootcamp
                      course over a span of 7 days</div>
                  </div>
                </MorphingDialogTrigger>

                <MorphingDialogContainer>
                  <MorphingDialogContent
                    className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-gray-200 bg-white sm:w-[560px]"
                    style={{ borderRadius: '18px' }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-[rgba(${hexToRgb(studentsColors.primary)},0.08)]`}>
                            <GraduationCap className="w-6 h-6" style={{ color: studentsColors.primary }} />
                          </div>
                          <div>
                            <MorphingDialogTitle className="text-2xl font-bold text-gray-900">CIE Bootcamp 2018 <span className="text-base font-normal text-gray-500"></span></MorphingDialogTitle>
                            <MorphingDialogSubtitle className="text-sm text-gray-600 mt-2">Annual intensive training to accelerate entrepreneurial growth.</MorphingDialogSubtitle>
                          </div>
                        </div>
                        <MorphingDialogClose className="text-gray-500">X</MorphingDialogClose>
                      </div>

                      <MorphingDialogDescription className="mt-4 text-gray-700" disableLayoutAnimation>
                        <p>
                          Bootcamp is an annual intensive event designed to accelerate entrepreneurial growth through skill-building, mentorship, and hands-on team projects. Participants work in cross-functional teams and present final pitches to a panel of mentors.
                        </p>

                        <div className="mt-6 flex justify-end">
                          <Link href="/students/programs/bootcamp">
                            <Button className="bg-white border" style={{ borderColor: studentsColors.secondary }}>
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </MorphingDialogDescription>
                    </div>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </div>
            </MorphingDialog>

            {/* Basecamp */}
            <MorphingDialog>
              <div>
                <MorphingDialogTrigger className="block">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm cursor-pointer h-full flex flex-col justify-between">
                    <h3 className="text-xl font-semibold mb-2">CIE Basecamp 2018 <span className="text-sm font-normal text-gray-500"></span></h3>
                    <p className="text-gray-600 mb-3">Foundational weekly sessions leading into Bootcamp.</p>
                    <div className="text-sm text-gray-500">Focus: Core startup principles & customer discovery</div>
                  </div>
                </MorphingDialogTrigger>

                <MorphingDialogContainer>
                  <MorphingDialogContent
                    className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-gray-200 bg-white sm:w-[560px]"
                    style={{ borderRadius: '18px' }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-[rgba(${hexToRgb(studentsColors.primary)},0.08)]`}>
                            <GraduationCap className="w-6 h-6" style={{ color: studentsColors.primary }} />
                          </div>
                          <div>
                            <MorphingDialogTitle className="text-2xl font-bold text-gray-900">CIE Basecamp 2018 <span className="text-base font-normal text-gray-500"></span></MorphingDialogTitle>
                            <MorphingDialogSubtitle className="text-sm text-gray-600 mt-2">Basecamp provides foundational sessions that prepare participants for intensive programs like Bootcamp. Topics include customer discovery, empathy mapping, and lean experimentation.</MorphingDialogSubtitle>
                          </div>
                        </div>
                        <MorphingDialogClose className="text-gray-500">X</MorphingDialogClose>
                      </div>

                      <MorphingDialogDescription className="mt-4 text-gray-700" disableLayoutAnimation>
                        <p>
                          Basecamp provides foundational sessions that prepare participants for intensive programs like Bootcamp. Topics include customer discovery, empathy mapping, and lean experimentation.
                        </p>

                        <div className="mt-6 flex justify-end">
                          <Link href="/students/programs/basecamp">
                            <Button className="bg-white border" style={{ borderColor: studentsColors.secondary }}>
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </MorphingDialogDescription>
                    </div>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </div>
            </MorphingDialog>

            {/* Summer Programs (dialog trigger) */}
            <MorphingDialog>
              <div>
                <MorphingDialogTrigger className="block">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm cursor-pointer h-full flex flex-col justify-between">
                    <h3 className="text-xl font-semibold mb-2">Summer Programs</h3>
                    <p className="text-gray-600 mb-3">Short-format, high-impact summer courses focused on hands-on learning and prototyping.</p>
                    <div className="text-sm text-gray-500">Examples: 5-day workshops, 3-week intensives</div>
                  </div>
                </MorphingDialogTrigger>

                <MorphingDialogContainer>
                  <MorphingDialogContent
                    className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-gray-200 bg-white sm:w-[560px]"
                    style={{ borderRadius: '18px' }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-[rgba(${hexToRgb(studentsColors.primary)},0.08)]`}>
                            <GraduationCap className="w-6 h-6" style={{ color: studentsColors.primary }} />
                          </div>
                          <div>
                            <MorphingDialogTitle className="text-2xl font-bold text-gray-900">Summer Programs</MorphingDialogTitle>
                            <MorphingDialogSubtitle className="text-sm text-gray-600 mt-2">Short-format, high-impact summer courses focused on hands-on learning and prototyping.</MorphingDialogSubtitle>
                          </div>
                        </div>
                        <MorphingDialogClose className="text-gray-500">X</MorphingDialogClose>
                      </div>

                      <MorphingDialogDescription className="mt-4 text-gray-700" disableLayoutAnimation>
                        <p>
                          Our Summer Programs include short, intensive courses and workshops designed to provide practical skills in prototyping, AI, ML, and product development. They are open to PES students and external participants.
                        </p>
                        <ul className="list-disc pl-5 mt-3 text-gray-600">
                          {summerPrograms.map((s) => (
                            <li key={s.name} className="mb-1">{s.name} — {s.duration}: {s.focus}</li>
                          ))}
                        </ul>

                        <div className="mt-6 flex justify-end">
                          <a href="mailto:cieprogram@pes.edu">
                            <Button style={{ backgroundColor: studentsColors.primary, color: '#fff' }}>Enquire</Button>
                          </a>
                        </div>
                      </MorphingDialogDescription>
                    </div>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </div>
            </MorphingDialog>
          </div>
        </div>
      </section>

    </div>
  );
}