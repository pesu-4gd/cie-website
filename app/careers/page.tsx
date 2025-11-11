'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { 
  Briefcase,
  Users,
  Globe,
  TrendingUp,
  Lightbulb,
  Heart,
  Shield,
  Coffee,
  Laptop,
  GraduationCap,
  Rocket,
  Target,
  Award,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Star,
  DollarSign,
  Clock,
  MessageCircle,
  Mail,
  UserPlus,
  Search,
  Filter,
  ExternalLink,
  Building2,
  Zap
} from 'lucide-react';
import { useState } from 'react';

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const stats = [
    { label: 'Open Positions', value: '25+', icon: Briefcase },
    { label: 'Team Members', value: '150+', icon: Users },
    { label: 'Global Offices', value: '3', icon: Globe },
    { label: 'Growth Rate', value: '40%', icon: TrendingUp }
  ];

  const benefits = [
    {
      title: 'Innovation Culture',
      description: 'Be part of cutting-edge projects that shape the future of entrepreneurship education.',
      icon: Zap,
      color: 'blue'
    },
    {
      title: 'Professional Growth',
      description: 'Comprehensive learning opportunities, mentorship, and career advancement programs.',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements, wellness programs, and supportive work environment.',
      icon: Heart,
      color: 'red'
    },
    {
      title: 'Competitive Benefits',
      description: 'Attractive compensation packages, health insurance, and performance bonuses.',
      icon: Shield,
      color: 'purple'
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Program Manager - Student Initiatives',
      department: 'Academic Programs',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Lead and manage student programs, coordinate with faculty, and drive program innovation.',
      requirements: [
        'Master\'s degree in Management or related field',
        'Experience in academic program management',
        'Strong communication and leadership skills',
        'Passion for entrepreneurship education'
      ],
      posted: '2024-01-15',
      category: 'academic'
    },
    {
      id: 2,
      title: 'Research Associate - Innovation Studies',
      department: 'Research',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Conduct research on innovation trends, publish papers, and support faculty research initiatives.',
      requirements: [
        'PhD or Master\'s in relevant field',
        'Research experience in innovation/entrepreneurship',
        'Strong analytical and writing skills',
        'Experience with research methodologies'
      ],
      posted: '2024-01-10',
      category: 'research'
    },
    {
      id: 3,
      title: 'Industry Relations Specialist',
      department: 'Industry Partnerships',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Build and maintain relationships with industry partners, coordinate collaboration projects.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        'Industry relationship management experience',
        'Excellent networking and communication skills',
        'Understanding of industry-academia partnerships'
      ],
      posted: '2024-01-08',
      category: 'partnerships'
    },
    {
      id: 4,
      title: 'Technology Specialist - Digital Platforms',
      department: 'Technology',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Develop and maintain digital platforms for student programs and administrative systems.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Full-stack development experience',
        'Experience with modern web technologies',
        'Understanding of educational technology platforms'
      ],
      posted: '2024-01-05',
      category: 'technology'
    },
    {
      id: 5,
      title: 'Marketing Communications Manager',
      department: 'Marketing',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '4-7 years',
      description: 'Lead marketing initiatives, manage brand communications, and coordinate promotional activities.',
      requirements: [
        'Master\'s degree in Marketing or Communications',
        'Digital marketing and brand management experience',
        'Creative content development skills',
        'Experience in educational sector preferred'
      ],
      posted: '2024-01-03',
      category: 'marketing'
    },
    {
      id: 6,
      title: 'Student Success Counselor',
      department: 'Student Services',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Provide academic and career guidance to students, coordinate mentorship programs.',
      requirements: [
        'Master\'s degree in Psychology, Counseling, or related field',
        'Student counseling experience',
        'Strong interpersonal and listening skills',
        'Knowledge of career development frameworks'
      ],
      posted: '2024-01-01',
      category: 'student-services'
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: jobOpenings.length },
    { id: 'academic', name: 'Academic Programs', count: jobOpenings.filter(job => job.category === 'academic').length },
    { id: 'research', name: 'Research', count: jobOpenings.filter(job => job.category === 'research').length },
    { id: 'partnerships', name: 'Industry Partnerships', count: jobOpenings.filter(job => job.category === 'partnerships').length },
    { id: 'technology', name: 'Technology', count: jobOpenings.filter(job => job.category === 'technology').length },
    { id: 'marketing', name: 'Marketing', count: jobOpenings.filter(job => job.category === 'marketing').length },
    { id: 'student-services', name: 'Student Services', count: jobOpenings.filter(job => job.category === 'student-services').length }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'bangalore', name: 'Bangalore' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'delhi', name: 'Delhi' },
    { id: 'remote', name: 'Remote' }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We constantly push boundaries and embrace new ideas to advance entrepreneurship education.',
      icon: Lightbulb
    },
    {
      title: 'Student-Centric',
      description: 'Every decision we make is guided by what\'s best for our students and their success.',
      icon: GraduationCap
    },
    {
      title: 'Collaborative Excellence',
      description: 'We believe in the power of teamwork and collective intelligence to achieve greatness.',
      icon: Users
    },
    {
      title: 'Impact Driven',
      description: 'We measure our success by the positive impact we create in the entrepreneurship ecosystem.',
      icon: Target
    }
  ];

  const applicationProcess = [
    {
      step: '1',
      title: 'Application Submission',
      description: 'Submit your application through our online portal with required documents.'
    },
    {
      step: '2',
      title: 'Initial Screening',
      description: 'Our HR team reviews applications and shortlists candidates for next round.'
    },
    {
      step: '3',
      title: 'Interview Process',
      description: 'Participate in technical and behavioral interviews with hiring managers.'
    },
    {
      step: '4',
      title: 'Final Decision',
      description: 'Receive feedback and job offer details within one week of final interview.'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const categoryMatch = selectedCategory === 'all' || job.category === selectedCategory;
    const locationMatch = selectedLocation === 'all' || job.location.toLowerCase() === selectedLocation;
    return categoryMatch && locationMatch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return '1 day ago';
    if (diffDays <= 7) return `${diffDays} days ago`;
    if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (Inside CIE style) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={SECTION_COLORS.insideCie.hero.background}
          accentColor="#F43F5E"
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20">
                <Briefcase className="w-4 h-4 mr-2" />
                Join Our Team
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Build the Future of{' '}
              <span className="block text-blue-200">Entrepreneurship Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Join CIE and be part of a dynamic team that's shaping the next generation
              of entrepreneurs, innovators, and change-makers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="group bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white">
                <Search className="w-5 h-5 mr-2" />
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Building2 className="w-5 h-5 mr-2" />
                Learn About CIE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
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
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values & Culture
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're more than just a workplace – we're a community of passionate
              individuals united by our mission to transform entrepreneurship education.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and opportunities that support your
              professional growth and personal well-being.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                red: 'bg-red-100 text-red-600',
                purple: 'bg-purple-100 text-purple-600'
              };

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${colorClasses[benefit.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across different departments 
              and find the perfect role that matches your skills and passion.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <select
                aria-label="Department select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                aria-label="Location select"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Posted {getTimeAgo(job.posted)}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{job.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.slice(0, 3).map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{req}</span>
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
                      <a href="mailto:cieprogram@pes.edu">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Enquire
                      </a>
                    </Button>
                    <Button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold bg-transparent">
                      <BookOpen className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more opportunities.</p>
              </div>
            )}
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
              Our streamlined hiring process is designed to be fair, transparent,
              and efficient while ensuring the best fit for both candidates and our organization.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {applicationProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              If you're passionate about entrepreneurship education and want to make
              a meaningful impact, we'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Innovation Focus</h3>
                <p className="text-blue-100">Work on cutting-edge projects</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Great Team</h3>
                <p className="text-blue-100">Collaborate with amazing people</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Meaningful Impact</h3>
                <p className="text-blue-100">Shape the future of education</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Search className="w-5 h-5 mr-2" />
                Browse All Positions
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact HR Team
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-blue-100 mb-4">Questions about careers at CIE?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>careers@cie.edu</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>+91 80 2672 7000</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}