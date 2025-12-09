'use client';

import React from 'react';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Heart, 
  DollarSign,
  Calendar, 
  Award,
  Building2, 
  Globe,
  BookOpen,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Mail,
  UserPlus,
  Handshake,
  Target,
  Trophy,
  Star,
  MapPin,
  Clock,
  GraduationCap,
  Briefcase,
  Network,
  Coffee,
  FlaskConical,
  Gift
} from 'lucide-react';

export default function AlumniAssociationPage() {
  const alumniColors = SECTION_COLORS.alumni;
  const associationStats = [
    { label: 'Global Alumni Network', value: 'Thousands', icon: Users },
    { label: 'Major Cities', value: 'Worldwide', icon: Globe },
    { label: 'Regular Events', value: 'Year-round', icon: Calendar },
    { label: 'Dynamic Community', value: 'Growing', icon: Award }
  ];

  const chapterLocations = [
    {
      region: 'Bangalore',
      description: 'Largest chapter with regular professional and social gatherings',
      activities: ['Monthly meetups', 'Tech talks', 'Career fairs', 'Social events']
    },
    {
      region: 'Silicon Valley',
      description: 'Connecting tech innovators and entrepreneurs in the Bay Area',
      activities: ['Networking dinners', 'Startup pitches', 'Mentorship programs', 'Industry panels']
    },
    {
      region: 'London',
      description: 'European hub for professional development and cultural exchange',
      activities: ['Professional workshops', 'Cultural events', 'Sports tournaments', 'Networking']
    },
    {
      region: 'Mumbai',
      description: 'Financial capital chapter focused on business and innovation',
      activities: ['Industry panels', 'Investment workshops', 'Social events', 'Meetups']
    }
  ];

  const membershipBenefits = [
    {
      category: 'Professional Development',
      icon: Briefcase,
      benefits: [
        'Exclusive career development workshops',
        'Industry-specific networking events',
        'Mentorship program access',
        'Job placement assistance',
        'Leadership training programs'
      ]
    },
    {
      category: 'Social Connections',
      icon: Users,
      benefits: [
        'Regional chapter membership',
        'Alumni directory access',
        'Social events and gatherings',
        'Sports and recreational activities',
        'Cultural and arts programs'
      ]
    },
    {
      category: 'Educational Benefits',
      icon: BookOpen,
      benefits: [
        'Continuing education discounts',
        'Guest lecture access',
        'Research collaboration opportunities',
        'Library and facility privileges',
        'Executive education programs'
      ]
    },
    {
      category: 'Exclusive Services',
      icon: Star,
      benefits: [
        'Alumni-only events and retreats',
        'Special university merchandise',
        'Travel and accommodation discounts',
        'Financial advisory services',
        'Legal consultation access'
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'Alumni Annual General Meeting',
      type: 'Meetup',
      description: 'Annual gathering to strengthen alumni bonds and celebrate achievements.',
      location: 'PES University Campus, Bangalore'
    },
    {
      title: 'CIE Ignite Hackathon',
      type: 'Innovation',
      description: 'Annual student innovation sprint in partnership with leading industry mentors.',
      location: 'CIE Innovation Hub'
    },
    {
      title: 'Regional Chapter Meetups',
      type: 'Networking',
      description: 'Regular local gatherings across major cities for professional networking.',
      location: 'Multiple Cities Worldwide'
    }
  ];

  const boardMembers = [
    {
      position: 'President',
      description: 'Leads overall strategy and vision for the alumni association',
      icon: Trophy
    },
    {
      position: 'Vice President',
      description: 'Supports initiatives and overseas chapter coordination',
      icon: Users
    },
    {
      position: 'Treasurer',
      description: 'Manages financial resources and membership funds',
      icon: DollarSign
    },
    {
      position: 'Secretary',
      description: 'Coordinates communications and operational activities',
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - standardized alumni overview hero (interactive hexagon background) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={alumniColors.hero.background}
          accentColor="#F59E0B"
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-500/20 text-amber-200 border border-yellow-400/30">
                <Users className="w-4 h-4 mr-2" />
                Alumni Association
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              PES University{' '}
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Alumni Association</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              A platform for lifelong learning, professional growth, and global networking. 
              Fostering enduring connections among graduates worldwide.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white">
                <UserPlus className="w-5 h-5 mr-2" />
                Become a Member
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Calendar className="w-5 h-5 mr-2" />
                View Events
              </Button>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Association Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Alumni Network
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The PES Alumni Association brings together thousands of graduates from diverse disciplines, 
              spanning major cities worldwide and forming one of India's most dynamic technology university alumni communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {associationStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-yellow-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-amber-500" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Chapters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alumni Chapters Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Alumni chapters operate globally in cities like Bangalore, Mumbai, London, and Silicon Valley, 
              offering networking opportunities, mentorship, and professional collaborations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {chapterLocations.map((chapter, index) => (
              <motion.div
                key={chapter.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{chapter.region}</h3>
                    <p className="text-gray-600 mb-6">{chapter.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Chapter Activities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {chapter.activities.map((activity) => (
                          <div key={activity} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-2 rounded-xl font-semibold text-sm" onClick={() => window.location.href = 'mailto:cieoffice@pes.edu?subject=Connect%20with%20Alumni%20Chapter'}>
                        Connect with Chapter
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Association Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Membership provides graduates with access to resources for career advancement, 
              lifelong learning, and personal enrichment through our global network.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {membershipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{benefit.category}</h3>
                      <ul className="space-y-3">
                        {benefit.benefits.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
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

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alumni & CIE Events
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The alumni association and CIE regularly host events including meetups, innovation summits, 
              workshops, seminars, and cultural programs to strengthen community bonds.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-50 text-amber-800 mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Button className="w-full bg-amber-400 hover:bg-amber-500 text-white py-3 rounded-xl font-semibold" onClick={() => window.location.href = 'mailto:cieoffice@pes.edu?subject=Enquiry%20About%20Alumni%20Event'}>
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The alumni association is guided by dedicated board members who bring expertise 
              and commitment to advancing the interests of our global community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <motion.div
                  key={member.position}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.position}</h3>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
              Join Our Alumni Family
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto mb-12">
              Become part of a vibrant community that celebrates achievements, 
              fosters connections, and creates lasting impact together.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-800">Email Us</h3>
                <p className="text-amber-800">association@pes.edu</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-800">Visit Portal</h3>
                <p className="text-amber-800">Access alumni resources online</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-800">Join Chapter</h3>
                <p className="text-amber-800">Connect with your local community</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-amber-400 hover:bg-white px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => (window.location.href = 'mailto:cieoffice@pes.edu?subject=Alumni Association Membership')}
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Become a Member
              </Button>
              <Button 
                className="border-2 border-white text-amber-400 hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
                onClick={() => (window.location.href = 'mailto:cieoffice@pes.edu?subject=Alumni Events Information')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Learn About Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}