'use client';

import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Download,
  FileText,
  Video,
  Users,
  Building2,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Mail,
  Clock,
  Star,
  Lightbulb,
  TrendingUp,
  UserPlus,
  Globe,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Network,
  Link,
  Search,
  Filter,
  ExternalLink
} from 'lucide-react';

export default function AlumniResourcesPage() {
  const alumniColors = SECTION_COLORS.alumni;
  const resourceStats = [
    { label: 'Resource Categories', value: '12+', icon: BookOpen },
    { label: 'Total Resources', value: '500+', icon: FileText },
    { label: 'Monthly Downloads', value: '2,500+', icon: Download },
    { label: 'Global Access', value: '50+ Countries', icon: Globe }
  ];

  const resourceCategories = [
    {
      title: 'Career Development',
      description: 'Tools and resources for professional growth and career advancement.',
      icon: Briefcase,
      resourceCount: 85,
      resources: [
        'Resume templates and examples',
        'Interview preparation guides',
        'Salary negotiation strategies',
        'Professional networking tips',
        'Leadership development materials'
      ]
    },
    {
      title: 'Business & Entrepreneurship',
      description: 'Resources for starting and growing successful businesses and startups.',
      icon: Lightbulb,
      resourceCount: 120,
      resources: [
        'Business plan templates',
        'Pitch deck examples',
        'Market research guides',
        'Funding and investor resources',
        'Legal and compliance checklists'
      ]
    },
    {
      title: 'Professional Development',
      description: 'Continuing education and skill enhancement resources.',
      icon: TrendingUp,
      resourceCount: 95,
      resources: [
        'Industry certification guides',
        'Online course recommendations',
        'Conference and event listings',
        'Professional association memberships',
        'Skill assessment tools'
      ]
    },
    {
      title: 'Academic & Research',
      description: 'Resources for pursuing higher education and research opportunities.',
      icon: GraduationCap,
      resourceCount: 70,
      resources: [
        'Graduate program guides',
        'Research proposal templates',
        'Academic writing resources',
        'Scholarship and funding opportunities',
        'Conference presentation tips'
      ]
    },
    {
      title: 'Technology & Innovation',
      description: 'Latest technology trends, tools, and innovation resources.',
      icon: Star,
      resourceCount: 110,
      resources: [
        'Technology trend reports',
        'Software and tool recommendations',
        'Innovation methodologies',
        'Technical skill development',
        'Open source project guides'
      ]
    },
    {
      title: 'Alumni Services',
      description: 'Exclusive services and benefits available to alumni.',
      icon: Users,
      resourceCount: 45,
      resources: [
        'Alumni directory access',
        'Event booking guidelines',
        'Mentor matching system',
        'Alumni discounts and offers',
        'University facility access'
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'PES Alumni Career Guide 2024',
      description: 'Comprehensive guide covering career transitions, industry insights, and professional development strategies.',
      type: 'PDF Guide',
      size: '2.5 MB',
      downloads: '1,200+',
      category: 'Career Development',
      featured: true
    },
    {
      title: 'Startup Funding Masterclass',
      description: 'Video series featuring successful alumni entrepreneurs sharing funding strategies and investor insights.',
      type: 'Video Series',
      size: '4 hours',
      downloads: '800+',
      category: 'Entrepreneurship',
      featured: true
    },
    {
      title: 'Technical Interview Preparation Kit',
      description: 'Complete preparation package with coding challenges, system design problems, and interview tips.',
      type: 'Resource Pack',
      size: '150 MB',
      downloads: '2,000+',
      category: 'Career Development',
      featured: true
    }
  ];

  const digitalLibrary = [
    {
      title: 'Industry Reports',
      description: 'Quarterly reports on technology, business, and market trends.',
      items: 45,
      lastUpdated: '2024-03-15'
    },
    {
      title: 'Alumni Publications',
      description: 'Research papers, articles, and books published by alumni.',
      items: 180,
      lastUpdated: '2024-03-10'
    },
    {
      title: 'Video Library',
      description: 'Recorded webinars, lectures, and alumni success story interviews.',
      items: 75,
      lastUpdated: '2024-03-12'
    },
    {
      title: 'Templates & Tools',
      description: 'Professional templates, calculators, and productivity tools.',
      items: 120,
      lastUpdated: '2024-03-08'
    }
  ];

  const exclusiveServices = [
    {
      title: 'Alumni Directory',
      description: 'Searchable database of alumni contacts across industries and locations.',
      access: 'Premium Members',
      icon: Network
    },
    {
      title: 'Career Counseling',
      description: 'One-on-one career guidance sessions with professional counselors.',
      access: 'All Alumni',
      icon: UserPlus
    },
    {
      title: 'Library Access',
      description: 'Digital and physical access to university library resources.',
      access: 'All Alumni',
      icon: BookOpen
    },
    {
      title: 'Research Collaboration',
      description: 'Opportunities to collaborate on university research projects.',
      access: 'Qualified Alumni',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - standardized alumni overview hero (interactive hexagon background) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={alumniColors.hero.background}
          // Use the same amber/yellow accent as the overview
          accentColor="#F59E0B"
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-100 border border-emerald-400/30">
                <BookOpen className="w-4 h-4 mr-2" />
                Alumni Resources
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Your Professional{' '}
              <span className="block text-emerald-200">Resource Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Access exclusive resources, tools, and services designed to support your
              continued professional growth and career success as a PES University alumnus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Resources
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Download className="w-5 h-5 mr-2" />
                Featured Downloads
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resource Library Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive resource library serves alumni worldwide with
              high-quality content for professional and personal development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resource Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our organized collection of resources across key areas
              of professional and personal development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                        <span className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                          {category.resourceCount} items
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      <div className="space-y-2 mb-6">
                        {category.resources.map((resource) => (
                          <div key={resource} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{resource}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-semibold">
                        Explore Resources
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and highly-rated resources, curated
              by alumni for alumni success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      {resource.category}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500">Size/Duration</div>
                    <div className="font-semibold text-gray-900">{resource.size}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Downloads</div>
                    <div className="font-semibold text-emerald-600">{resource.downloads}</div>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Library Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Library
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our extensive digital collection of reports, publications,
              videos, and tools available 24/7 from anywhere in the world.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {digitalLibrary.map((library, index) => (
              <motion.div
                key={library.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-3xl border border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{library.title}</h3>
                    <p className="text-gray-600 mb-4">{library.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Updated: {new Date(library.lastUpdated).toLocaleDateString()}
                      </span>
                      <span className="text-lg font-bold text-emerald-600">
                        {library.items} items
                      </span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center ml-6">
                    <BookOpen className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exclusive Alumni Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take advantage of exclusive services and benefits available
              only to PES University alumni.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {exclusiveServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                          {service.access}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-semibold">
                        Access Service
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Exploring Today
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12">
              Unlock your full potential with our comprehensive resource library.
              Access exclusive content and services designed for your success.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Search Resources</h3>
                <p className="text-emerald-100">Find exactly what you need</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Download & Use</h3>
                <p className="text-emerald-100">Access resources instantly</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Connect & Share</h3>
                <p className="text-emerald-100">Engage with the community</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Resources
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-emerald-100 mb-2">Need help finding resources?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>resources@pes.edu</span>
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