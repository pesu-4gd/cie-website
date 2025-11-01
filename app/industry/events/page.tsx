'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { 
  Calendar,
  MapPin,
  Clock,
  Users,
  Building2,
  Star,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Filter,
  Search,
  Globe,
  Target,
  Award,
  Lightbulb,
  Handshake,
  Briefcase,
  MessageCircle,
  Mail
} from 'lucide-react';

export default function IndustryEventsPage() {
  const upcomingEvents = [
    {
      title: 'Industry Partnership Summit 2024',
      date: '2024-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'PES University Main Auditorium',
      type: 'Summit',
      description: 'Annual gathering of industry leaders and academic innovators to explore collaboration opportunities.',
      attendees: '200+',
      registration: 'Open',
      featured: true
    },
    {
      title: 'Tech Innovation Showcase',
      date: '2024-02-28',
      time: '2:00 PM - 6:00 PM',
      location: 'CIE Innovation Labs',
      type: 'Showcase',
      description: 'Student and faculty projects demonstration for potential industry partners.',
      attendees: '150+',
      registration: 'Open',
      featured: false
    },
    {
      title: 'Industry Mentorship Connect',
      date: '2024-02-20',
      time: '10:00 AM - 2:00 PM',
      location: 'Virtual + Campus',
      type: 'Networking',
      description: 'Connect industry professionals with students and startup teams.',
      attendees: '100+',
      registration: 'Closing Soon',
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: 'AI & Machine Learning Industry Forum',
      date: '2024-01-15',
      attendees: '300+',
      highlights: ['25 industry speakers', '15 collaboration agreements', '500+ networking connections']
    },
    {
      title: 'Sustainable Tech Partnership Day',
      date: '2023-12-10',
      attendees: '180+',
      highlights: ['12 green tech partnerships', '8 funding commitments', '20+ innovation projects']
    },
    {
      title: 'Startup Pitch Competition',
      date: '2023-11-25',
      attendees: '250+',
      highlights: ['30 startup pitches', '₹50L funding committed', '15 industry mentors']
    }
  ];

  const eventTypes = [
    {
      title: 'Partnership Summits',
      description: 'Large-scale events bringing together industry leaders and academia',
      icon: Handshake,
      frequency: 'Annually'
    },
    {
      title: 'Innovation Showcases',
      description: 'Demonstrations of cutting-edge research and student projects',
      icon: Lightbulb,
      frequency: 'Quarterly'
    },
    {
      title: 'Networking Events',
      description: 'Focused networking opportunities for targeted collaboration',
      icon: Users,
      frequency: 'Monthly'
    },
    {
      title: 'Technology Forums',
      description: 'Deep-dive discussions on emerging technologies and trends',
      icon: Target,
      frequency: 'Bi-monthly'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
        <InteractiveHexagonBackground
          primaryColor={SECTION_COLORS.industry.hero.background}
          accentColor={SECTION_COLORS.industry.hero.hexagonAccent}
          hexagonSize={72}
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30">
                <Calendar className="w-4 h-4 mr-2" />
                Industry Events
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Connect, Collaborate,
              <span className="block text-blue-200">Innovate Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Join our industry events to discover partnership opportunities, showcase innovations,
              and build meaningful connections that drive technological advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
              >
                <Calendar className="w-5 h-5 mr-2" />
                View Upcoming Events
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Host an Event
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't miss these exciting opportunities to connect with industry leaders
              and explore collaboration possibilities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-3xl border-2 hover:shadow-xl transition-all duration-300 ${
                  event.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200'
                }`}
              >
                {event.featured && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Event
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                <p className="text-gray-600 mb-6">{event.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>{event.attendees} Expected Attendees</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {event.type}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    event.registration === 'Open' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    Registration {event.registration}
                  </span>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Register Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Events We Host
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We organize various types of events throughout the year to cater to different
              collaboration needs and industry interests.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-gray-50 p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {type.frequency}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Past Event Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Look at the impact and success of our previous industry events
              that have fostered meaningful partnerships and innovations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <div className="flex items-center gap-3 mb-4 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-3 mb-6 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} Attendees</span>
                </div>

                <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {event.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Event CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Host Your Event with CIE
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Partner with us to organize industry events that create lasting impact.
              From intimate networking sessions to large-scale conferences.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">World-Class Venues</h3>
                <p className="text-blue-100">State-of-the-art facilities and technology</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Expert Network</h3>
                <p className="text-blue-100">Access to faculty and industry connections</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Targeted Audience</h3>
                <p className="text-blue-100">Reach the right industry professionals</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Discuss Event Ideas
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Check Availability
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}