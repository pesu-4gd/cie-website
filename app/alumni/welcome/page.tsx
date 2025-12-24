'use client';

import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Users,
  Trophy,
  Building2,
  Heart,
  Star,
  Award,
  BookOpen,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  Globe,
  Briefcase,
  MessageCircle,
  Mail,
  UserPlus,
  HandHeart,
  Zap,
  Network,
  Target,
  Gift,
  GraduationCap,
  MapPin,
  Handshake,
  Book,
  Coffee
} from 'lucide-react';

export default function AlumniWelcomePage() {
  const alumniColors = SECTION_COLORS.alumni;
  const alumniStats = [
    { label: 'Alumni Network', value: '5,000+', icon: Users },
    { label: 'Countries Worldwide', value: '25+', icon: Globe },
    { label: 'Successful Startups', value: '250+', icon: Building2 },
    { label: 'Years of Excellence', value: '15+', icon: Trophy }
  ];

  const networkBenefits = [
    {
      title: 'Global Community',
      description: 'Connect with a diverse network of entrepreneurs, innovators, and industry leaders across the globe.',
      icon: Globe,
      features: [
        'Access to 5,000+ alumni worldwide',
        'Regional chapter meetings and events',
        'International networking opportunities',
        'Cross-cultural collaboration projects'
      ]
    },
    {
      title: 'Career Growth',
      description: 'Advance your career through mentorship, job opportunities, and professional development.',
      icon: TrendingUp,
      features: [
        'Exclusive job postings and career opportunities',
        'Mentorship programs with senior alumni',
        'Professional skill development workshops',
        'Leadership training and certification'
      ]
    },
    {
      title: 'Knowledge Exchange',
      description: 'Share insights, learn from others, and stay updated with the latest industry trends.',
      icon: BookOpen,
      features: [
        'Industry expert speaker sessions',
        'Research collaboration opportunities',
        'Best practice sharing platforms',
        'Innovation showcase events'
      ]
    },
    {
      title: 'Giving Back',
      description: 'Contribute to the next generation of entrepreneurs through mentoring and support.',
      icon: Heart,
      features: [
        'Student mentorship programs',
        'Guest lecture opportunities',
        'Scholarship and funding initiatives',
        'Startup incubation support'
      ]
    }
  ];

  const featuredEvents = [
    {
      title: 'Annual Alumni Meet 2024',
      date: 'March 15-16, 2024',
      location: 'PES University Campus, Bangalore',
      description: 'Join us for our flagship alumni gathering featuring networking, workshops, and celebration of achievements.',
      attendees: '500+ expected',
      highlights: [
        'Keynote by successful alumni entrepreneurs',
        'Industry panel discussions',
        'Innovation showcase',
        'Awards ceremony'
      ]
    },
    {
      title: 'Global Virtual Summit',
      date: 'April 20, 2024',
      location: 'Virtual Event',
      description: 'Connect with alumni worldwide in our comprehensive virtual summit covering industry trends and opportunities.',
      attendees: '1000+ expected',
      highlights: [
        'International speaker lineup',
        'Breakout networking sessions',
        'Career development workshops',
        'Startup pitch competitions'
      ]
    },
    {
      title: 'Regional Chapter Meetups',
      date: 'Monthly',
      location: 'Multiple Cities',
      description: 'Regular local gatherings for alumni in major cities to maintain connections and foster collaboration.',
      attendees: '50-100 per event',
      highlights: [
        'Local industry insights',
        'Business collaboration opportunities',
        'Informal networking',
        'Community impact projects'
      ]
    }
  ];

  const successStories = [
    {
      name: 'Priya Nair',
      graduation: 'Class of 2015',
      company: 'TechInnovate Solutions',
      position: 'Founder & CEO',
      achievement: 'Built a ₹50Cr edtech company serving 100,000+ students',
      story: 'Started with a simple idea during her final year project, Priya has grown her company into one of India\'s leading edtech platforms.',
      impact: 'Created 200+ jobs and transformed education for thousands'
    },
    {
      name: 'Arjun Reddy',
      graduation: 'Class of 2012',
      company: 'GreenEnergy Ventures',
      position: 'Co-founder & CTO',
      achievement: 'Pioneered sustainable energy solutions across 15 cities',
      story: 'Passionate about environmental impact, Arjun co-founded a clean energy startup that has installed solar solutions worth ₹100Cr.',
      impact: 'Reduced carbon footprint equivalent to planting 50,000 trees'
    },
    {
      name: 'Meera Singh',
      graduation: 'Class of 2018',
      company: 'HealthTech Innovations',
      position: 'Head of Product',
      achievement: 'Led development of healthcare platform used by 500+ hospitals',
      story: 'Combining her technical skills with healthcare passion, Meera has revolutionized patient care through innovative technology.',
      impact: 'Improved healthcare access for 2 million+ patients'
    }
  ];

  const givingOpportunities = [
    {
      title: 'Student Scholarships',
      description: 'Support deserving students with financial assistance for their education.',
      impact: '50+ students supported annually',
      icon: GraduationCap
    },
    {
      title: 'Infrastructure Development',
      description: 'Contribute to building state-of-the-art facilities and learning environments.',
      impact: 'Enhanced learning for all students',
      icon: Building2
    },
    {
      title: 'Innovation Labs',
      description: 'Fund cutting-edge research labs and equipment for student projects.',
      impact: '25+ research projects enabled',
      icon: Zap
    },
    {
      title: 'Mentorship Programs',
      description: 'Volunteer your time and expertise to guide current students.',
      impact: '200+ mentoring relationships',
      icon: Users
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
                Alumni Network
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Welcome to the{' '}
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">CIE Alumni Family</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Join a vibrant global community of entrepreneurs, innovators, and change-makers
              who are shaping the future across industries and continents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-yellow-400 hover:to-amber-400 text-white rounded-xl font-semibold uppercase"
                onClick={() => (window.location.href = 'mailto:alumni@pes.edu?subject=Join Alumni Network')}
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Join the Network
              </Button>
              {/* <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Calendar className="w-5 h-5 mr-2" />
                Upcoming Events
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alumni Stats */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumniStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200"
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
      </section> */}

      {/* Network Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Our Alumni Network?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Being part of the CIE alumni community opens doors to endless opportunities
              for growth, collaboration, and making a meaningful impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {networkBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <IconComponent className="w-12 h-12 text-amber-500 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 mb-6">{benefit.description}</p>
                      <ul className="space-y-3">
                        {benefit.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
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

      {/* Featured Events */}
      <section className="py-20 bg-gradient-to-br from-white to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Alumni Events
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay connected and engaged through our exciting lineup of events
              designed to foster networking, learning, and celebration.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <Calendar className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <div className="flex items-center gap-4 text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="bg-white p-4 rounded-xl border border-yellow-200 mb-4">
                    <p className="text-sm text-amber-800 font-semibold">{event.attendees}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Event Highlights</h4>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-amber-400 hover:bg-amber-500 text-white py-3 rounded-xl font-semibold" onClick={() => window.location.href = 'mailto:cieoffice@pes.edu?subject=Enquiry%20About%20Alumni%20Event'}>
                  Enquire About This Event
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alumni Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be inspired by the remarkable journeys of our alumni who are making
              significant impacts in their industries and communities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{story.graduation}</p>
                  <p className="text-gray-600 mb-2">{story.position}</p>
                  <p className="text-gray-600 font-medium mb-4">{story.company}</p>
                </div>

                <div className="mb-6">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200 mb-4">
                    <p className="text-sm text-green-800 font-semibold">{story.achievement}</p>
                  </div>
                  <p className="text-gray-700 mb-4">{story.story}</p>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <p className="text-sm text-blue-800 font-medium">Impact: {story.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Giving Back Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Give Back to CIE
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Help shape the future of entrepreneurship education by contributing
              your time, expertise, or resources to support current and future students.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {givingOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <IconComponent className="w-12 h-12 text-amber-500 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 mb-6">
                        <p className="text-sm text-amber-800 font-semibold">Impact: {opportunity.impact}</p>
                      </div>
                      <Button className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold" onClick={() => window.location.href = 'mailto:cieoffice@pes.edu?subject=Interest%20in%20Getting%20Involved'}>
                        <HandHeart className="w-4 h-4 mr-2" />
                        Get Involved
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#00338d] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected, Stay Inspired
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-12">
              Join our thriving alumni community and be part of a network that's
              changing the world, one innovation at a time.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Network className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Global Network</h3>
                <p className="text-white">Connect with 5,000+ alumni worldwide</p>
              </div>

              <div className="text-center">
                <Lightbulb className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Innovation Hub</h3>
                <p className="text-white">Access to cutting-edge resources and opportunities</p>
              </div>

              <div className="text-center">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Meaningful Impact</h3>
                <p className="text-white">Make a difference in future generations</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
                onClick={() => (window.location.href = 'mailto:cieoffice@pes.edu?subject=Join Alumni Network')}
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Join Alumni Network
              </Button>
              <Button
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
                onClick={() => (window.location.href = 'mailto:cieoffice@pes.edu?subject=Contact Alumni Relations')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Alumni Relations
              </Button>
            </div>

            <div className="text-center">
              <p className="text-white mb-4">Questions about joining our alumni community?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>cieoffice@pes.edu</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}