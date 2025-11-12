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
    { label: 'Industry Partners', value: '15+', icon: Building2, color: 'text-blue-600' },
    { label: 'Active Collaborations', value: '10+', icon: Handshake, color: 'text-[#f47b56]' },
    { label: 'Students Engaged', value: '2,159+', icon: Users, color: 'text-blue-600' },
    { label: 'Funding Available', value: '$200K+', icon: TrendingUp, color: 'text-[#f47b56]' }
  ];

  const partnershipTypes = [
    {
      id: 'sponsorship',
      title: 'Sponsorship Opportunities',
      icon: DollarSign,
      description: 'Support innovation by sponsoring CIE events or funding student startups',
      benefits: [
        'Sponsor hackathons like Decypher 2020 with 80+ participating teams',
        'Brand visibility at E-Summit reaching hundreds of students',
        'Invest in student startups through PESU Venture Labs',
        'Support deep-tech ventures with funding up to $200K'
      ],
      examples: [
        'Decypher 2020 Hackathon - 80 teams in tech innovation',
        'E-Summit sponsorship with extensive student reach',
        'PESU Venture Labs funding for next big ideas'
      ]
    },
    {
      id: 'mentorship',
      title: 'Mentorship Programs',
      icon: Users,
      description: 'Guide PES students as industry mentors, sharing expertise to shape entrepreneurial journeys',
      benefits: [
        'Participate in CIE Industry IM Program for one-on-one mentorship',
        'Join Ask Me Anything (AMA) sessions like Intel experts',
        'Share insights on industry trends and challenges',
        'Shape the next generation of tech innovators'
      ],
      examples: [
        'Intel AMA sessions providing industry insights since 2018',
        'Industry mentors guiding students in startup development',
        'Career guidance for students exploring tech fields'
      ]
    },
    {
      id: 'research',
      title: 'Research Collaboration',
      icon: Lightbulb,
      description: 'Partner with CIE to co-develop innovative solutions through research projects',
      benefits: [
        'Capstone Project with Industry Partner (CPIP)',
        'Collaborate with Centers of Excellence (CRAIS, C-IoT)',
        'Explore advancements in AI, IoT, and quantum technology',
        'Address real-world industry challenges with student solutions'
      ],
      examples: [
        'CPIP projects delivering actionable industry solutions',
        'CRAIS - AI and Robotics research collaboration',
        'C-IoT - Internet of Things innovation projects'
      ]
    },
    {
      id: 'talent',
      title: 'Internships & Jobs',
      icon: Target,
      description: 'Connect with PES University\'s talented students for internships and job opportunities',
      benefits: [
        'Access to 2,159+ engaged students across programs',
        'Dedicated job posting system in development',
        'Engage through events like CIE Ignite Ideathon',
        'Direct recruitment pipeline from top performers'
      ],
      examples: [
        'Cisco ThingQbator internships for top CIE teams',
        'CIE Ignite teams securing summer internships',
        'Direct talent pipeline from innovation programs'
      ]
    }
  ];

  const successStories = [
    {
      company: 'Intel Corporation',
      partnership: 'Long-term Mentorship & Innovation',
      duration: 'Since 2018',
      impact: 'Mentored students through AMAs and supported innovation contests in AI and IoT',
      outcomes: [
        'Regular AMA sessions providing industry insights',
        'Student innovation in AI and IoT technologies',
        'Ongoing talent development and recruitment pipeline'
      ]
    },
    {
      company: 'Cisco Systems',
      partnership: 'ThingQbator Program & Funding',
      duration: 'Ongoing',
      impact: 'Cohort 6: Eight PES teams including NeuRoar secured ₹5 Lakh in funding',
      outcomes: [
        'Top CIE teams receive Cisco ThingQbator funding',
        'Real-world IoT and networking project development',
        'Direct pathway from ideation to implementation'
      ]
    },
    {
      company: 'Industry Collaboration',
      partnership: 'Beckn-ONIX Open Source Project',
      duration: 'Recent',
      impact: 'Student-industry collaboration delivering open-source network deployment solutions',
      outcomes: [
        'Open-source project enabling rapid network deployment',
        'Demonstration of effective student-industry partnership',
        'Real-world impact through collaborative innovation'
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'Industry Collaboration Workshop',
      date: 'Coming Soon',
      type: 'Workshop',
      description: 'Learn how to engage with CIE students through workshops and AMAs'
    },
    {
      title: 'AI for Industry Applications',
      date: 'Quarterly',
      type: 'AMA Session',
      description: 'Expert sessions on AI applications, similar to "AI for Road Safety" with Dr. Anbumani Subramanian'
    },
    {
      title: 'Student Innovation Showcase',
      date: 'Ongoing',
      type: 'Networking Event',
      description: 'Witness student innovations and connect with emerging talent'
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
            <span className="block mt-4 bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
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
            The Centre for Innovation and Entrepreneurship (CIE) at PES University offers industry partners unique opportunities to drive growth through collaboration with talented students, cutting-edge research, and innovative solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <Button 
              variant="default" 
              size="lg"
              className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Explore Partnerships
            </Button> */}
            <a
              href="mailto:cieprogram@pes.edu"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Meeting
            </a>
          </motion.div>
        </div>
      </section>

      {/* Partnership Stats */}
      {/* <section className="py-16 bg-white">
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
      </section> */}

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
              Partnership <span className="bg-gradient-to-r from-orange-600 to-[#f47b56] bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover proven collaboration models designed to maximize value for your organization while supporting student innovation and entrepreneurship.
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
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600'
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
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mr-6">
                      <IconComponent className="w-8 h-8 text-orange-600" />
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
                        {type.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start">
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
                        {type.examples.map((example) => (
                          <div key={example} className="flex items-start">
                            <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button> */}
                      <a
                        className="border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white px-6 py-3 rounded-xl inline-flex items-center justify-center"
                        href="mailto:industry@cie.pes.edu"
                      >
                        Learn More
                      </a>
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
              Partnership <span className="bg-gradient-to-r from-orange-600 to-[#F15A29] bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading companies like Intel, Cisco, and others have successfully partnered with CIE to drive innovation and access top talent.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-orange-50 p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                    <p className="text-orange-600 font-medium">{story.duration}</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{story.partnership}</h4>
                <p className="text-gray-600 mb-6">{story.impact}</p>
                
                <div className="space-y-2">
                  {story.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start text-sm">
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
              Upcoming <span className="bg-gradient-to-r from-orange-600 to-[#F15A29] bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join CIE's industry-focused events to network, share insights, and collaborate with students and faculty.
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
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-[#F15A29] rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-orange-600 font-medium mb-3">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl">
                  Register Now
                </Button>
              </motion.div> 
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-400">
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
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-12">
              Partner with CIE to drive innovation, access top talent, and shape the future of entrepreneurship. Contact us to explore collaboration opportunities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-orange-100">cieinfo@pes.edu</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-orange-100">Schedule a consultation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-orange-100">CIE Office, PES University RR/EC Campus</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:cieinfo@pes.edu"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl group bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-600 hover:to-yellow-700 text-white font-semibold"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Start Partnership
              </a>
              <a href="mailto:cieprogram@pes.edu" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 bg-gradient-to-r from-orange-600 to-orange-600 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Meeting
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
