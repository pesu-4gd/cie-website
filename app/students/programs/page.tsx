'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { SECTION_COLORS, hexToRgb } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Ideas
              <span className="block text-purple-200">Into Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive programs designed to nurture entrepreneurial thinking, innovation skills, and practical business knowledge.
            </p>
          </motion.div>
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
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <span className="font-semibold text-gray-900">{program.rating}</span>
                  </div>
                </div>

                {/* Program Meta */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{program.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Award className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{program.level}</div>
                    <div className="text-xs text-gray-500">Level</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Users className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{program.students}</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-orange-600 mx-auto mb-1" />
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

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Summer <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intensive summer programs designed to accelerate your learning and provide hands-on experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {summerPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.name}</h3>
                <div className="flex items-center text-orange-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-medium">{program.duration}</span>
                </div>
                <p className="text-gray-600 mb-6">{program.focus}</p>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  <a href="https://forms.gle/b8uLuLievLw7V6uv8" target="_blank" rel="noopener noreferrer">Apply Now</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join thousands of students who have transformed their careers through our comprehensive programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <a href="https://forms.gle/b8uLuLievLw7V6uv8" target="_blank" rel="noopener noreferrer">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Browse All Programs
                </a>
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                Contact Admissions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}