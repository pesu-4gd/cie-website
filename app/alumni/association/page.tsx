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
    { label: 'Active Members', value: '8,500+', icon: Users },
    { label: 'Global Chapters', value: '25+', icon: Globe },
    { label: 'Annual Events', value: '50+', icon: Calendar },
    { label: 'Years of Service', value: '25+', icon: Award }
  ];

  const chapterLocations = [
    {
      region: 'Bangalore',
      members: '3,200+',
      established: '1999',
      activities: ['Monthly meetups', 'Tech talks', 'Career fairs', 'Social events'],
      president: 'Rajesh Kumar (Class of 2010)',
      nextEvent: 'Tech Innovation Summit - March 25, 2024'
    },
    {
      region: 'Silicon Valley',
      members: '1,800+',
      established: '2005',
      activities: ['Networking dinners', 'Startup pitches', 'Mentorship programs', 'Family events'],
      president: 'Priya Sharma (Class of 2008)',
      nextEvent: 'Annual Gala - April 15, 2024'
    },
    {
      region: 'London',
      members: '1,200+',
      established: '2010',
      activities: ['Professional workshops', 'Cultural events', 'Sports tournaments', 'Charity drives'],
      president: 'Vikram Patel (Class of 2012)',
      nextEvent: 'Cricket Tournament - May 10, 2024'
    },
    {
      region: 'Mumbai',
      members: '900+',
      established: '2008',
      activities: ['Industry panels', 'Investment workshops', 'Art exhibitions', 'Food festivals'],
      president: 'Anjali Reddy (Class of 2009)',
      nextEvent: 'Investment Conclave - March 30, 2024'
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
      title: 'Global Alumni Summit 2024',
      date: '2024-04-20',
      location: 'PES University Campus, Bangalore',
      type: 'Summit',
      description: 'Annual gathering of alumni from around the world.',
      attendees: '500+ expected',
      registration: 'Open'
    },
    {
      title: 'Tech Innovation Conference',
      date: '2024-03-25',
      location: 'Bangalore Tech Hub',
      type: 'Conference',
      description: 'Showcasing cutting-edge technology innovations.',
      attendees: '300+ expected',
      registration: 'Closing Soon'
    },
    {
      title: 'Alumni Sports Tournament',
      date: '2024-05-15',
      location: 'PES Sports Complex',
      type: 'Sports',
      description: 'Multi-sport tournament with teams from different regions.',
      attendees: '200+ participants',
      registration: 'Open'
    }
  ];

  const boardMembers = [
    {
      name: 'Dr. Sunita Mehta',
      position: 'President',
      class: 'Class of 1995',
      company: 'Tech Innovations Ltd.',
      expertise: 'Technology Leadership'
    },
    {
      name: 'Amit Krishnan',
      position: 'Vice President',
      class: 'Class of 2000',
      company: 'Global Consulting Group',
      expertise: 'Business Strategy'
    },
    {
      name: 'Kavya Srinivas',
      position: 'Treasurer',
      class: 'Class of 2005',
      company: 'Finance Solutions Inc.',
      expertise: 'Financial Management'
    },
    {
      name: 'Ravi Chodkar',
      position: 'Secretary',
      class: 'Class of 2003',
      company: 'Education Services',
      expertise: 'Operations Management'
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30">
                <Users className="w-4 h-4 mr-2" />
                Alumni Association
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              PES University{' '}
              <span className="block text-blue-200">Alumni Association</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Connecting graduates worldwide through meaningful relationships, professional growth, 
              and shared commitment to excellence in education and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white">
                <UserPlus className="w-5 h-5 mr-2" />
                Become a Member
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Calendar className="w-5 h-5 mr-2" />
                View Events
              </Button>
            </div>
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
              Our Global Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The PES Alumni Association brings together graduates from all disciplines, 
              fostering lifelong connections and continued engagement with our alma mater.
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
              Global Chapters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our alumni chapters span across major cities worldwide, providing local 
              networking opportunities and maintaining strong connections to the university.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{chapter.region}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <span className="text-sm text-gray-500">Members</span>
                        <p className="font-semibold text-gray-900">{chapter.members}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Established</span>
                        <p className="font-semibold text-gray-900">{chapter.established}</p>
                      </div>
                    </div>

                    <div className="mb-6">
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

                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">President:</span> {chapter.president}
                      </p>
                      <p className="text-sm text-blue-600 font-medium">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {chapter.nextEvent}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a member of the PES Alumni Association, you gain access to exclusive 
              benefits, networking opportunities, and lifelong learning resources.
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
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-blue-600" />
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
              Upcoming Association Events
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join fellow alumni at our upcoming events, ranging from professional 
              development sessions to social gatherings and sports tournaments.
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
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${
                    event.registration === 'Open'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    Registration: {event.registration}
                  </span>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Register Now
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
              Association Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated board members bring diverse expertise and unwavering 
              commitment to advancing the interests of our alumni community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                    <p className="text-gray-600 mb-3">{member.class}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{member.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{member.expertise}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Alumni Family
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Become part of a vibrant community that celebrates achievements, 
              fosters connections, and creates lasting impact together.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
                <p className="text-blue-100">association@pes.edu</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
                <p className="text-blue-100">+91 80 2672 7000</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Visit Chapter</h3>
                <p className="text-blue-100">Find your local chapter</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <UserPlus className="w-5 h-5 mr-2" />
                Become a Member
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Calendar className="w-5 h-5 mr-2" />
                Attend an Event
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}