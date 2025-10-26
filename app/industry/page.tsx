'use client';

import { Button } from '@/components/design-system';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Handshake, 
  Users, 
  TrendingUp, 
  Award, 
  Target,
  Briefcase,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  DollarSign,
  Lightbulb,
  Rocket,
  Network,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const industryColors = SECTION_COLORS.industry;

export default function IndustryPage() {
  const [activePartnership, setActivePartnership] = useState('sponsorship');

  const partnershipStats = [
    { label: 'Industry Partners', value: '50+', icon: Building2, color: 'text-blue-600' },
    { label: 'Active Collaborations', value: '25+', icon: Handshake, color: 'text-green-600' },
    { label: 'Students Placed', value: '500+', icon: Users, color: 'text-purple-600' },
    { label: 'Funding Raised', value: '$2M+', icon: TrendingUp, color: 'text-orange-600' }
  ];

  const partnershipTypes = [
    {
      id: 'sponsorship',
      title: 'Sponsorship Opportunities',
      icon: DollarSign,
      description: 'Support innovation by sponsoring CIE events and funding student startups',
      benefits: [
        'Brand visibility at major events like E-Summit and hackathons',
        'Access to top talent through sponsored competitions',
        'Startup funding opportunities through PESU Venture Labs',
        'Recognition in CIE publications and social media'
      ],
      examples: [
        'Decypher 2020 Hackathon - 80 teams participated',
        'E-Summit sponsorship reaching 500+ students',
        'PESU Venture Labs funding up to $200K for deep-tech ventures'
      ]
    },
    {
      id: 'mentorship',
      title: 'Mentorship Programs',
      icon: Users,
      description: 'Guide PES students as industry mentors, sharing expertise to shape entrepreneurial journeys',
      benefits: [
        'One-on-one mentorship through CIE Industry IM Program',
        'Participate in Ask Me Anything (AMA) sessions',
        'Guide students in CIE Ignite Ideathon',
        'Shape the next generation of innovators'
      ],
      examples: [
        'Intel AMA sessions since 2018 on AI and IoT',
        'Industry mentors guiding 100+ students annually',
        'Mentorship during CIE Ignite S01 Ideathon'
      ]
    },
    {
      id: 'research',
      title: 'Research Collaboration',
      icon: Lightbulb,
      description: 'Partner with CIE to co-develop innovative solutions through research projects',
      benefits: [
        'Capstone Project with Industry Partner (CPIP)',
        'Collaboration with Centers of Excellence',
        'Access to cutting-edge research in AI, IoT, and quantum tech',
        'Joint publication opportunities'
      ],
      examples: [
        'CRAIS - AI and Robotics research collaboration',
        'C-IoT - Internet of Things innovation projects',
        'CHIPS - Hardware and semiconductor research'
      ]
    },
    {
      id: 'talent',
      title: 'Talent Pipeline',
      icon: Target,
      description: 'Access skilled graduates and interns trained in cutting-edge technologies',
      benefits: [
        'Direct access to 2,159+ trained students',
        'Internship programs with top performers',
        'Campus recruitment opportunities',
        'Custom training programs for specific skills'
      ],
      examples: [
        'Cisco ThingQbator internships for top CIE Ignite teams',
        '95% success rate in student placements',
        'Students trained in AI, IoT, and entrepreneurship'
      ]
    }
  ];

  const successStories = [
    {
      company: 'Intel Corporation',
      partnership: 'Long-term Mentorship & Innovation',
      duration: 'Since 2018',
      impact: 'Guided 200+ students through AMA sessions and mentorship programs',
      outcomes: [
        'Regular AMA sessions on AI and IoT trends',
        'Student projects inspired by Intel technologies',
        'Talent pipeline for Intel recruitment'
      ]
    },
    {
      company: 'Cisco Systems',
      partnership: 'ThingQbator Program Sponsorship',
      duration: '2020-Present',
      impact: 'Sponsored innovation program with internship opportunities',
      outcomes: [
        'Top CIE Ignite teams receive Cisco internships',
        'IoT and networking project collaborations',
        'Brand visibility among tech-focused students'
      ]
    },
    {
      company: 'HCL Technologies',
      partnership: 'Research & Development Collaboration',
      duration: '2019-Present',
      impact: 'Joint research projects and student training programs',
      outcomes: [
        'Collaborative research in emerging technologies',
        'Student internships and full-time placements',
        'Knowledge sharing through workshops'
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'Industry Innovation Summit 2024',
      date: 'March 15-16, 2024',
      type: 'Networking Event',
      description: 'Connect with startups, students, and fellow industry leaders'
    },
    {
      title: 'AI in Industry Workshop',
      date: 'April 8, 2024',
      type: 'Workshop',
      description: 'Explore AI applications and collaborate on solutions'
    },
    {
      title: 'Startup Pitch Day',
      date: 'May 20, 2024',
      type: 'Investment Opportunity',
      description: 'Discover and invest in promising student startups'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Interactive Hexagonal Background */}
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground 
          primaryColor={industryColors.hero.background}
          accentColor={industryColors.hero.hexagonAccent}
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
            <Building2 className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Industry Partnerships</span>
          </motion.div>

          {/* Title - Centered */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Partner with Innovation
            <span className="block mt-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Drive the Future
            </span>
          </motion.h1>

          {/* Subtitle - Centered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join leading companies in shaping the next generation of innovators. Collaborate with CIE to access top talent, drive research, and create lasting impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="default" 
              size="lg"
              className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Explore Partnerships
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Meeting
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnershipStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-2xl"
                >
                  <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partnership <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from multiple collaboration models designed to maximize value for your organization and our students.
            </p>
          </motion.div>

          {/* Partnership Type Selector */}
          <div className="flex flex-wrap justify-center mb-12">
            {partnershipTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setActivePartnership(type.id)}
                  className={`flex items-center px-6 py-3 mx-2 mb-4 rounded-xl font-semibold transition-all duration-300 ${
                    activePartnership === type.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {type.title}
                </button>
              );
            })}
          </div>

          {/* Active Partnership Details */}
          {partnershipTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              activePartnership === type.id && (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-lg text-gray-600">{type.description}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Benefits */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                      <div className="space-y-3">
                        {type.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Examples */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Success Examples</h4>
                      <div className="space-y-3">
                        {type.examples.map((example, idx) => (
                          <div key={idx} className="flex items-start">
                            <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button className="border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white px-6 py-3 rounded-xl">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            );
          })}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partnership <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how leading companies have benefited from partnering with CIE and our innovation ecosystem.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                    <p className="text-blue-600 font-medium">{story.duration}</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{story.partnership}</h4>
                <p className="text-gray-600 mb-6">{story.impact}</p>
                
                <div className="space-y-2">
                  {story.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Upcoming <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our upcoming events to network, collaborate, and discover new opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-purple-600 font-medium mb-3">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl">
                  Register Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner with CIE?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Let's discuss how we can create a partnership that drives innovation and delivers value for your organization.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">cieinfo@pes.edu</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">Schedule a consultation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">PES University Campus</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Handshake className="w-5 h-5 mr-2" />
                Start Partnership
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}