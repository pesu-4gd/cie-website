'use client';

import { Button } from '@/components/design-system';
import { ModernCard } from '@/components/ui/modern-card';
import { motion } from 'framer-motion';
import { SECTION_COLORS, hexToRgb } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { 
  Users, 
  Calendar, 
  Award, 
  Heart,
  Lightbulb,
  Globe,
  Target,
  ArrowRight,
  BookOpen,
  Coffee,
  Sparkles,
  TrendingUp,
  UserPlus,
  MessageCircle,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function StudentClubsPage() {
  const studentsColors = SECTION_COLORS.students;
  const clubStats = [
    { label: 'Active Members', value: '500+', icon: Users, color: 'blue' },
    { label: 'Events Organized', value: '50+', icon: Calendar, color: 'green' },
    { label: 'Success Stories', value: '25+', icon: Award, color: 'blue' },
    { label: 'Volunteers', value: '100+', icon: Heart, color: 'green' }
  ];

  const featuredClubs = [
    {
      title: 'Entrepreneurship Cell (E-Cell)',
      description: 'Leading student organization driving entrepreneurial culture and hosting flagship events like E-Summit.',
      icon: Lightbulb,
      color: 'blue',
      highlights: [
        'Hosts E-Summit annually with 1000+ participants',
        'Founder Fusion and other startup competitions', 
        'Industry networking and mentorship events',
        'Entrepreneurship workshops and bootcamps'
      ],
      keyEvents: ['E-Summit 2025', 'Founder Fusion', 'Startup Pitch Night', 'Industry Connects'],
      memberBenefits: [
        'Direct access to industry mentors',
        'Startup funding opportunities',
        'Leadership development programs',
        'Exclusive networking events'
      ],
      joinLink: '/students/clubs/e-cell'
    },
    {
      title: "Changemakers' Society (CMS)",
      description: 'Sustainability-focused club organizing impactful initiatives and driving environmental consciousness on campus.',
      icon: Globe,
      color: 'green',
      highlights: [
        'Organized CIE Ignite S01 Grand Finale with 20+ volunteers',
        'Zero Waste Carnival and sustainability drives',
        'Environmental impact projects and campaigns',
        'Community outreach and awareness programs'
      ],
      keyEvents: ['Zero Waste Carnival', 'Sustainability Summit', 'Green Innovation Challenge', 'Community Cleanups'],
      memberBenefits: [
        'Leadership in social impact projects',
        'Collaboration with environmental NGOs',
        'Research opportunities in sustainability',
        'Global sustainability network access'
      ],
      joinLink: '/students/clubs/cms'
    }
  ];

  const upcomingEvents = [
    {
      title: 'E-Summit 2025',
      club: 'E-Cell',
      date: '2025-03-15',
      description: 'Premier entrepreneurship summit featuring industry leaders, competitions, and networking.',
      type: 'Conference',
      expectedAttendees: '1000+',
      registrationOpen: true
    },
    {
      title: 'Sustainability Innovation Challenge',
      club: 'CMS',
      date: '2025-02-28',
      description: 'Student competition for innovative environmental solutions and sustainable technologies.',
      type: 'Competition',
      expectedAttendees: '200+',
      registrationOpen: true
    },
    {
      title: 'Startup Pitch Night',
      club: 'E-Cell',
      date: '2025-02-20',
      description: 'Monthly event where student entrepreneurs pitch to a panel of investors and mentors.',
      type: 'Networking',
      expectedAttendees: '100+',
      registrationOpen: false
    }
  ];

  const impactMetrics = [
    {
      metric: 'Volunteers Engaged',
      value: '100+',
      description: 'Active volunteers across all student clubs',
      icon: Users,
      color: 'blue'
    },
    {
      metric: 'Events per Semester',
      value: '25+', 
      description: 'Regular workshops, competitions, and networking sessions',
      icon: Calendar,
      color: 'green'
    },
    {
      metric: 'Industry Connections',
      value: '50+',
      description: 'Direct connections with industry leaders and mentors',
      icon: Target,
      color: 'blue'
    },
    {
      metric: 'Student Startups Supported',
      value: '30+',
      description: 'Startups launched through club initiatives and support',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600', 
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-white">
  {/* Hero Section (interactive hexagon + themed overlay) */}
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden px-6">
        <InteractiveHexagonBackground
          className="absolute inset-0 z-0"
          primaryColor={studentsColors.hero?.background}
          accentColor={studentsColors.hero?.hexagonAccent}
        />

        <div className={`absolute inset-0 pointer-events-none`} style={{ background: `linear-gradient(90deg, ${studentsColors.primary}11, ${studentsColors.secondary}11)` }} />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{ background: studentsColors.primary, color: '#fff' }}>
                <Users className="w-4 h-4 mr-2 text-white" />
                Student Organizations
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Student Clubs
              <span className="block" style={{ color: studentsColors.accent }}>&nbsp;Communities</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Join vibrant student-led organizations to immerse yourself in entrepreneurship, sustainability, and drive meaningful impact on campus and beyond.
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
            {clubStats.map((stat, index) => {
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

      {/* Featured Clubs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span style={{ color: studentsColors.primary }}>Featured</span> Clubs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover student-led organizations driving innovation, entrepreneurship, and sustainability impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {featuredClubs.map((club, index) => {
              const IconComponent = club.icon;
              return (
                <motion.div
                  key={club.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(club.color)} rounded-2xl flex items-center justify-center mr-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{club.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {club.description}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <h4 className="text-xl font-bold text-gray-900">Key Highlights</h4>
                        {club.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className={`w-2 h-2 bg-${club.color}-500 rounded-full mr-3 mt-2`} />
                            <span className="text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        href={club.joinLink}
                        className={`inline-flex items-center justify-center bg-gradient-to-r ${getColorClasses(club.color)} text-white px-6 py-3 rounded-xl`}
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        Join {club.title.split(' ')[0]}
                      </Link>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h4>
                        <div className="space-y-3">
                          {club.keyEvents.map((event, idx) => (
                            <div key={idx} className="flex items-center">
                              <Calendar className={`w-4 h-4 text-${club.color}-600 mr-3`} />
                              <span className="text-gray-700">{event}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Member Benefits</h4>
                        <div className="space-y-3">
                          {club.memberBenefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center">
                              <Star className={`w-4 h-4 text-${club.color}-600 mr-3`} />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Upcoming <span style={{ color: studentsColors.accent }}>Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest club events, workshops, and networking opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {event.club}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.registrationOpen 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {event.registrationOpen ? 'Registration Open' : 'Not available'}
                  </span>
                </div>
                
                <h3 className="text-l font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.expectedAttendees}</span>
                  </div>
                </div>
                
                <Button 
                  className={`w-full ${
                    event.registrationOpen 
                      ? 'bg-[#00338d] hover:bg-blue-700' 
                      : 'bg-gray-300 cursor-not-allowed'
                  } text-white`}
                  disabled={!event.registrationOpen}
                >
                  {event.registrationOpen ? 'Learn more' : 'Not available'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span style={{ color: studentsColors.primary }}>Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measuring success through student engagement, events organized, and community impact created.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(metric.color)} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-lg font-medium text-gray-900 mb-2">{metric.metric}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ background: studentsColors.gradient.css }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white">
              Join our vibrant community of student leaders, innovators, and changemakers. Network, lead, and create meaningful impact through our student organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/students/clubs/e-cell" className="inline-flex items-center justify-center bg-white px-8 py-4 text-lg font-semibold rounded-xl border border-white" style={{ color: studentsColors.primary }}>
                <UserPlus className="w-5 h-5 mr-2" />
                Join E-Cell
              </Link>
              <Link href="/students/clubs/cms" className="inline-flex items-center justify-center bg-transparent px-8 py-4 text-lg font-semibold rounded-xl text-white border border-white">
                <Globe className="w-5 h-5 mr-2" />
                Join CMS
              </Link>
            </div>
            
            <div className="mt-8">
              <p className="mb-4 text-white">Questions about joining?</p>
              <Button 
                className="px-6 py-3 rounded-xl text-white border border-white"
                onClick={() => window.location.href = 'mailto:cieprogram@pes.edu'}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}