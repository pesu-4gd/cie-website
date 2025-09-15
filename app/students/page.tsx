'use client';

import { Button } from '@/components/design-system';
import { ModernCard } from '@/components/ui/modern-card';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Users, 
  Lightbulb, 
  DollarSign, 
  Building2, 
  Award, 
  Target,
  ArrowRight,
  GraduationCap,
  Rocket,
  Globe,
  Heart,
  Briefcase,
  Star
} from 'lucide-react';
import Link from 'next/link';

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

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      yellow: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
      pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30">
                <GraduationCap className="w-4 h-4 mr-2" />
                Student Hub
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Innovation Journey
              <span className="block text-blue-200">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover programs, connect with mentors, access resources, and transform your ideas into reality through CIE's comprehensive ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

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
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${stat.color}-600`} />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Opportunities</span>
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
                  <Link href={section.href}>
                    <div className="bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(section.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {section.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {section.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {section.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <div className={`w-2 h-2 bg-${section.color}-500 rounded-full mr-3`} />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recent <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest opportunities, programs, and announcements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    update.urgent 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {update.type}
                  </span>
                  {update.urgent && (
                    <div className="flex items-center text-red-600">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-xs font-medium">Urgent</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {update.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {update.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(update.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <Button className="text-sm px-4 py-2">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
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