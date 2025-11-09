'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun,
  Calendar,
  Clock,
  Target,
  Award,
  Users,
  Lightbulb,
  TrendingUp,
  Building2,
  GraduationCap,
  Rocket,
  Globe,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Briefcase,
  Code,
  Database,
  Smartphone,
  Presentation,
  Coffee,
  Network
} from 'lucide-react';
import { Button } from '@/components/design-system';
import { SECTION_COLORS } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';

const SummerProgramPage = () => {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const stats = [
    { label: 'Program Duration', value: '8 Weeks', icon: Clock },
    { label: 'Projects Completed', value: '120+', icon: Target },
    { label: 'Student Participants', value: '450+', icon: Users },
    { label: 'Industry Mentors', value: '25+', icon: Award }
  ];

  const programHighlights = [
    {
      title: 'Intensive Learning',
      description: 'Comprehensive curriculum covering entrepreneurship fundamentals, design thinking, and market validation.',
      icon: BookOpen,
      features: [
        'Weekly masterclasses with industry experts',
        'Hands-on workshops and labs',
        'Case study analysis sessions',
        'Peer learning and collaboration'
      ]
    },
    {
      title: 'Real Projects',
      description: 'Work on live projects with startups and established companies to gain practical experience.',
      icon: Building2,
      features: [
        'Live client projects and challenges',
        'Product development and testing',
        'Market research and validation',
        'Prototype building and iteration'
      ]
    },
    {
      title: 'Industry Exposure',
      description: 'Direct interaction with successful entrepreneurs, investors, and industry leaders.',
      icon: Network,
      features: [
        'Guest lectures from industry leaders',
        'Startup ecosystem immersion',
        'Investor pitch sessions',
        'Networking events and meetups'
      ]
    },
    {
      title: 'Skill Development',
      description: 'Develop essential entrepreneurial skills including leadership, communication, and problem-solving.',
      icon: TrendingUp,
      features: [
        'Leadership and team management',
        'Public speaking and presentation',
        'Critical thinking and analysis',
        'Project management and execution'
      ]
    }
  ];

  const weeklySchedule = [
    {
      week: 'Week 1-2',
      title: 'Foundation & Ideation',
      topics: [
        'Entrepreneurship Fundamentals',
        'Design Thinking Workshop',
        'Problem Identification',
        'Ideation Techniques'
      ],
      deliverable: 'Problem Statement & Initial Ideas'
    },
    {
      week: 'Week 3-4',
      title: 'Market Research & Validation',
      topics: [
        'Market Analysis Techniques',
        'Customer Discovery',
        'Competitive Analysis',
        'Value Proposition Design'
      ],
      deliverable: 'Market Research Report'
    },
    {
      week: 'Week 5-6',
      title: 'Prototyping & Development',
      topics: [
        'MVP Development',
        'Prototyping Tools',
        'User Testing',
        'Iteration Strategies'
      ],
      deliverable: 'Working Prototype'
    },
    {
      week: 'Week 7-8',
      title: 'Business Model & Pitch',
      topics: [
        'Business Model Canvas',
        'Financial Projections',
        'Pitch Deck Creation',
        'Presentation Skills'
      ],
      deliverable: 'Final Pitch Presentation'
    }
  ];

  const projectShowcase = [
    {
      title: 'EcoTrack',
      category: 'Sustainability',
      description: 'Mobile app helping users track and reduce their carbon footprint through daily activities.',
      team: 'Team GreenTech',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      impact: '500+ downloads, 40% reduction in user carbon footprint',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'StudyBuddy',
      category: 'EdTech',
      description: 'AI-powered study companion that creates personalized learning schedules and tracks progress.',
      team: 'Team LearnSmart',
      technologies: ['Python', 'Machine Learning', 'React'],
      impact: 'Used by 200+ students, 30% improvement in study efficiency',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'LocalBiz Connect',
      category: 'Social Impact',
      description: 'Platform connecting local businesses with customers during COVID-19 pandemic.',
      team: 'Team Community',
      technologies: ['Vue.js', 'Firebase', 'Stripe API'],
      impact: 'Supported 50+ local businesses, $10K+ in sales',
      image: '/api/placeholder/300/200'
    }
  ];

  const testimonials = [
    {
      name: 'Ananya Sharma',
      year: 'Class of 2023',
      text: 'The summer program was transformative! I learned more about entrepreneurship in 8 weeks than I ever thought possible. The hands-on projects and mentorship were invaluable.',
      project: 'HealthTech Startup',
      achievement: 'Raised ₹2L seed funding'
    },
    {
      name: 'Rahul Patel',
      year: 'Class of 2022',
      text: 'Working on real projects with industry mentors gave me the confidence to start my own venture. The program provided both theoretical knowledge and practical experience.',
      project: 'EdTech Platform',
      achievement: 'Launched successful app with 1K+ users'
    },
    {
      name: 'Priya Krishnan',
      year: 'Class of 2024',
      text: 'The collaborative environment and diverse projects exposed me to different aspects of entrepreneurship. I made lifelong connections and gained invaluable skills.',
      project: 'Social Impact Initiative',
      achievement: 'Won university innovation challenge'
    }
  ];

  const applicationProcess = [
    {
      step: '1',
      title: 'Application Submission',
      description: 'Submit your application with academic records, motivation letter, and project portfolio.',
      deadline: 'March 15, 2024'
    },
    {
      step: '2',
      title: 'Initial Screening',
      description: 'Applications reviewed by faculty committee based on academic performance and motivation.',
      deadline: 'March 25, 2024'
    },
    {
      step: '3',
      title: 'Interview Round',
      description: 'Shortlisted candidates participate in virtual/in-person interviews with program coordinators.',
      deadline: 'April 5, 2024'
    },
    {
      step: '4',
      title: 'Final Selection',
      description: 'Selected participants notified and orientation materials shared.',
      deadline: 'April 15, 2024'
    }
  ];

  const mentors = [
    {
      name: 'Dr. Rakesh Gupta',
      title: 'Startup Advisor & Former CTO',
      company: 'TechVentures',
      expertise: 'Technology Strategy',
      experience: '15+ years in tech leadership'
    },
    {
      name: 'Meera Joshi',
      title: 'Product Manager',
      company: 'InnovateCorp',
      expertise: 'Product Development',
      experience: 'Led 10+ successful product launches'
    },
    {
      name: 'Arjun Reddy',
      title: 'Serial Entrepreneur',
      company: 'Multiple Startups',
      expertise: 'Business Strategy',
      experience: '3 successful exits, $50M+ raised'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialSlide((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialSlide((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentProjectSlide((prev) => 
      prev === projectShowcase.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectSlide((prev) => 
      prev === 0 ? projectShowcase.length - 1 : prev - 1
    );
  };

  const studentsColors = SECTION_COLORS.students;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <InteractiveHexagonBackground
          primaryColor={studentsColors.hero?.background}
          accentColor={studentsColors.hero?.hexagonAccent}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-500/20 text-orange-100 border border-orange-400/30">
                <Sun className="w-4 h-4 mr-2" />
                Summer 2024
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              CIE Summer{' '}
              <span className="block text-yellow-200">Innovation Program</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8">
              An intensive 8-week journey into entrepreneurship, innovation, and startup development
              with hands-on projects, industry mentorship, and real-world experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <a href="mailto:cieprogram@pes.edu">
                  <Rocket className="w-5 h-5 mr-2" />
                  Inquire
                </a>
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Calendar className="w-5 h-5 mr-2" />
                View Schedule
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive summer program combines theoretical learning with practical
              application, providing you with real-world entrepreneurial experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                      <p className="text-gray-600 mb-6">{highlight.description}</p>
                      <ul className="space-y-3">
                        {highlight.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              8-Week Program Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured progression from ideation to final pitch, with each phase
              building upon the previous to create a comprehensive learning experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {weeklySchedule.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="text-sm text-orange-600 font-semibold">{week.week}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Topics</h4>
                      <ul className="space-y-2">
                        {week.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2">
                            <BookOpen className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-2">Week Deliverable</h4>
                      <p className="text-sm text-orange-800">{week.deliverable}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Project Showcase
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover innovative projects created by our summer program participants,
              showcasing real-world solutions and entrepreneurial thinking.
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProjectSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 p-12 rounded-3xl"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 text-sm font-semibold rounded-full mb-4">
                        {projectShowcase[currentProjectSlide].category}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {projectShowcase[currentProjectSlide].title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {projectShowcase[currentProjectSlide].description}
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Team</h4>
                          <p className="text-gray-600">{projectShowcase[currentProjectSlide].team}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                          <p className="text-gray-600">{projectShowcase[currentProjectSlide].impact}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {projectShowcase[currentProjectSlide].technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white text-orange-600 text-sm font-medium rounded-lg border border-orange-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                        <Code className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <button
              onClick={prevProject}
              title="Previous project"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextProject}
              title="Next project"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {projectShowcase.map((_, index) => (
              <button
                    key={index}
                    onClick={() => setCurrentProjectSlide(index)}
                    title={`Go to project ${index + 1}`}
                    aria-label={`Go to project ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentProjectSlide ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Mentors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from experienced entrepreneurs, industry leaders, and successful
              professionals who will guide you throughout the program.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                <p className="text-orange-600 font-semibold mb-1">{mentor.title}</p>
                <p className="text-gray-600 mb-4">{mentor.company}</p>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 mb-4">
                  <p className="text-sm text-orange-800 font-medium">{mentor.expertise}</p>
                </div>
                <p className="text-sm text-gray-600">{mentor.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from past participants about their transformative experience
              and the impact the program had on their entrepreneurial journey.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonialSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 p-12 rounded-3xl text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonialSlide].text}"
                  </blockquote>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {testimonials[currentTestimonialSlide].name}
                    </h4>
                    <p className="text-orange-600 font-semibold mb-2">
                      {testimonials[currentTestimonialSlide].year}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Project: {testimonials[currentTestimonialSlide].project}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      <Award className="w-4 h-4 mr-2" />
                      {testimonials[currentTestimonialSlide].achievement}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <button
              onClick={prevTestimonial}
              title="Previous testimonial"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              type="button"
              onClick={nextTestimonial}
              title="Next testimonial"
              aria-label="Next testimonial"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                  key={index}
                  onClick={() => setCurrentTestimonialSlide(index)}
                  title={`Go to testimonial ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonialSlide ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to apply for our summer innovation program
              and start your entrepreneurial journey with us.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {applicationProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600 mb-4">{process.description}</p>
                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                      <p className="text-sm text-orange-800 font-semibold">
                        Deadline: {process.deadline}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Innovation Journey
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-12">
              Join our intensive summer program and transform your ideas into reality.
              Applications for Summer 2024 are now open!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">May 15 - July 10</h3>
                <p className="text-orange-100">8-week intensive program</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Limited Seats</h3>
                <p className="text-orange-100">Only 30 participants selected</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Certificate</h3>
                <p className="text-orange-100">Industry-recognized completion certificate</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <a href="mailto:cieprogram@pes.edu">
                  <Rocket className="w-5 h-5 mr-2" />
                  Inquire
                </a>
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <MessageSquare className="w-5 h-5 mr-2" />
                Ask Questions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SummerProgramPage;