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
  Lightbulb
} from 'lucide-react';
import { useState } from 'react';

export default function ProgramsPage() {
  const studentsColors = SECTION_COLORS.students;
  const [activeTab, setActiveTab] = useState('core');

  const programCategories = [
    { id: 'core', label: 'Core Programs', icon: BookOpen },
    { id: 'specialized', label: 'Specialized Courses', icon: Target },
    { id: 'workshops', label: 'Workshops', icon: Lightbulb },
    { id: 'international', label: 'International', icon: Globe }
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
    if (t.includes('paml')) return '/students/courses/paml';
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: `rgba(${hexToRgb(studentsColors.primary)}, 0.12)`, color: studentsColors.primary }}>
                <GraduationCap className="w-4 h-4 mr-2" />
                Student Programs
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl text-purple-200 font-bold mb-6">
              Transform Your Ideas
              <span className="block text-purple-200">Into Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The Centre for Innovation and Entrepreneurship (CIE) at PES University is a dynamic hub for fostering innovation, entrepreneurship, and technical excellence. Through signature programs, workshops, and international opportunities, CIE empowers students to transform ideas into impactful solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Signature Programs (morphing dialog cards) */}
      <section id="signature-programs" className="py-16 bg-white">
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
                        <MorphingDialogClose className="text-gray-500">Close</MorphingDialogClose>
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
                        <MorphingDialogClose className="text-gray-500">Close</MorphingDialogClose>
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
                        <MorphingDialogClose className="text-gray-500">Close</MorphingDialogClose>
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
                            <Button style={{ backgroundColor: studentsColors.primary, color: '#fff' }}>Inquire</Button>
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

      {/* Program Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Active Programs</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">2,159</div>
              <div className="text-gray-600 font-medium">Students Trained</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">4.8</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </motion.div>
          </div>
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
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning Path</span>
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
                  className={`flex items-center px-6 py-3 mx-2 mb-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === category.id
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

          {/* Program Cards */}
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
                  <div className="flex items-center ml-4">
                    <Star className="w-5 h-5 mr-1" style={{ color: studentsColors.accent }} />
                    <span className="font-semibold text-gray-900">{program.rating}</span>
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
                        <Button className="w-full bg-white" style={{ borderColor: studentsColors.secondary, color: studentsColors.secondary }}>
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
        </div>
      </section>

      {/* Summer Programs section removed — now surfaced in morphing dialogs above to avoid duplicate content */}

      {/* Call to Action removed per design: Learn More is the single action for programs. */}
    </div>
  );
}