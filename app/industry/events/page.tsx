'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { 
  Calendar,
  Users,
  Building2,
  CheckCircle,
  Globe,
  Target,
  Award,
  Lightbulb,
  Handshake,
  MessageCircle,
  Mail,
  Star
} from 'lucide-react';

export default function IndustryEventsPage() {
  const [activeTab, setActiveTab] = useState('opportunities');

  const tabs = [
    { id: 'opportunities', label: 'Event Opportunities', icon: Calendar },
    { id: 'upcoming', label: 'Upcoming Events', icon: Globe },
    { id: 'stories', label: 'Success Stories', icon: Star },
    { id: 'participate', label: 'How to Participate', icon: Users }
  ];

  const eventTypes = [
    {
      title: 'Webinars',
      description: 'Virtual sessions on AI, cybersecurity, or sustainability, featuring industry experts and CIE faculty',
      icon: Globe,
      format: 'Virtual sessions with interactive Q&A',
      example: '"AI for Road Safety" webinar with Dr. Anbumani Subramanian engaged 100+ participants, fostering dialogue on AI applications in transportation',
      benefits: [
        'Share expertise with tech-savvy audience',
        'Network with potential collaborators virtually',
        'Gain visibility among PES students and faculty'
      ],
      featured: true
    },
    {
      title: 'Networking Events',
      description: 'In-person or hybrid events for building relationships with CIE\'s ecosystem',
      icon: Users,
      format: 'Delegation visits, industry summits, interaction with students and faculty',
      example: 'Indonesian Delegation Visit with 45 senior Oil & Gas officials, featuring student prototype demonstrations and earning praise for innovation',
      benefits: [
        'Connect with CIE leadership for collaboration opportunities',
        'Engage with students showcasing innovative projects',
        'Build long-term relationships with innovation community'
      ],
      featured: false
    },
    {
      title: 'Industry-Specific Workshops',
      description: 'Tailored workshops fostering skill development and innovation in your industry',
      icon: Target,
      format: 'Half-day or full-day sessions on IoT, Web3, or sustainable tech',
      example: 'Intel AMAs since 2018 have inspired smart city solutions while mentoring 15+ students annually for internships',
      benefits: [
        'Share practical knowledge preparing students for industry roles',
        'Identify talent through interactive sessions',
        'Strengthen brand reputation as tech education leader'
      ],
      featured: false
    }
  ];

  const whyAttend = [
    {
      title: 'Network with Talent',
      description: 'Meet PES University\'s skilled students, trained in AI, IoT, and entrepreneurship through programs like EIE and CIE Ignite Ideathon',
      icon: Users,
      color: 'orange'
    },
    {
      title: 'Explore Collaborations',
      description: 'Engage with CIE to discuss sponsorship, mentorship, or research partnerships',
      icon: Handshake,
      color: 'blue'
    },
    {
      title: 'Share Expertise',
      description: 'Lead workshops or webinars to share industry insights, enhancing your brand\'s reputation as a thought leader',
      icon: Lightbulb,
      color: 'orange'
    },
    {
      title: 'Gain Insights',
      description: 'Learn from CIE\'s innovation ecosystem, including student projects and faculty research',
      icon: Award,
      color: 'blue'
    },
    {
      title: 'Global Exposure',
      description: 'Participate in events with international reach, such as the Global Venture Lab Conference 2018 at UC Berkeley',
      icon: Globe,
      color: 'orange'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI and Sustainability Webinar',
      date: 'Q3 2025',
      type: 'Webinar',
      description: 'Virtual session exploring AI-driven solutions for sustainable development, featuring industry leaders and CIE faculty',
      status: 'Planned'
    },
    {
      title: 'Industry Networking Summit',
      date: 'Fall 2025',
      type: 'Networking',
      description: 'In-person event at PES University\'s RR Campus, connecting companies with students and faculty',
      status: 'Planned'
    },
    {
      title: 'IoT Innovation Workshop',
      date: 'Spring 2026',
      type: 'Workshop',
      description: 'Hands-on workshop by PES\'s Center of Excellence in IoT, focusing on smart applications in healthcare and agriculture',
      status: 'Planned'
    }
  ];

  const successStories = [
    {
      title: 'Indonesian Delegation Visit',
      description: '45 senior officials from Indonesia\'s Oil and Gas industry visited CIE, where students showcased prototypes',
      achievement: 'Featured presentation by Prof. D. Jawahar and student demonstrations',
      impact: 'Earned praise for CIE\'s innovation efforts and opened doors for future collaborations',
      icon: Building2
    },
    {
      title: '"AI for Road Safety" Webinar (2024)',
      description: 'Led by Dr. Anbumani Subramanian, engaging over 100 participants including industry leaders and students',
      achievement: 'Fostered discussions on AI applications in transportation',
      impact: 'Sparked interest in collaborative projects and real-world AI implementations',
      icon: Target
    },
    {
      title: 'Intel AMAs (Since 2018)',
      description: 'Ongoing AMA sessions connecting industry experts with PES students',
      achievement: 'Inspired projects like smart city solutions',
      impact: 'Led to internship placements for over 15 students annually',
      icon: Lightbulb
    },
    {
      title: 'Global Venture Lab Conference 2018',
      description: 'CIE\'s participation at UC Berkeley with Prof. Sathya Prasad presenting',
      achievement: 'Showcased PES University\'s innovation ecosystem to 50 global participants from 15 countries',
      impact: 'Enhanced international reputation and opened global collaboration opportunities',
      icon: Globe
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-500/20 text-orange-100 border border-orange-400/30">
                <Calendar className="w-4 h-4 mr-2" />
                Industry Events
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Connect with{' '}
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                CIE's Ecosystem
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              The Centre for Innovation and Entrepreneurship (CIE) at PES University offers industry partners a dynamic platform 
              to engage with our innovation ecosystem through webinars, networking events, and industry-specific workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                onClick={() => window.open('mailto:cieinfo@pes.edu')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Submit Interest
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Learn More
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Attend CIE Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Attend CIE Events?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Discover the unique opportunities that CIE events provide for industry partners to connect, 
              collaborate, and drive innovation within our dynamic ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {whyAttend.map((reason, index) => {
              const IconComponent = reason.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                orange: 'bg-orange-100 text-orange-600',
                purple: 'bg-purple-100 text-purple-600',
                indigo: 'bg-indigo-100 text-indigo-600'
              } as const;
              
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <IconComponent className="w-12 h-12 text-[#f07f1a] mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-2xl inline-flex">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-white to-white text-orange-600 shadow-lg border-2 border-orange-400'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="hidden sm:block">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'opportunities' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Event Opportunities for Industry
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Choose from various engagement formats to connect with CIE's ecosystem and share your expertise 
                    with our vibrant community of students, faculty, and innovators.
                  </p>
                </div>

                <div className="space-y-12">
                  {eventTypes.map((eventType, index) => {
                    const IconComponent = eventType.icon;
                    return (
                      <motion.div
                        key={eventType.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-3xl border-2 hover:shadow-xl transition-all duration-300 ${
                          eventType.featured ? 'border-orange-200 ring-2 ring-orange-100' : 'border-gray-200'
                        }`}
                      >
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <IconComponent className="w-12 h-12 text-[#f07f1a]" />
                              <div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{eventType.title}</h3>
                                {eventType.featured && (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mt-2">
                                    <Star className="w-3 h-3 mr-1" />
                                    Most Popular
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{eventType.description}</p>
                            
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Format:</h4>
                                <p className="text-gray-600">{eventType.format}</p>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Example Success:</h4>
                                <p className="text-gray-600 italic">{eventType.example}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Benefits:</h4>
                            <ul className="space-y-3">
                              {eventType.benefits.map((benefit, benefitIndex) => (
                                <li key={`${eventType.title}-benefit-${benefitIndex}`} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <div className="mt-8">
                              <Button 
                                className={`w-full py-3 rounded-xl font-semibold ${
                                  eventType.featured 
                                    ? 'bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white' 
                                    : 'bg-orange-600 hover:bg-orange-700 text-white'
                                }`}
                                onClick={() => window.open('mailto:cieinfo@pes.edu')}
                              >
                                <Mail className="w-4 h-4 mr-2" />
                                Express Interest
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === 'upcoming' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Upcoming Events
                  </h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    CIE is committed to hosting regular events for industry partners. An event calendar for industry-specific activities 
                    is under development to keep you informed of upcoming opportunities.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {event.type}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-orange-600 ml-2 border border-orange-200">
                          {event.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-200 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Tuned for More</h3>
                  <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                    Subscribe to the CIE Newsletter or follow us on LinkedIn and X for updates on the event calendar launch and upcoming activities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open('/alumni/newsletter', '_blank')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Subscribe to Newsletter
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      onClick={() => window.open('https://www.linkedin.com/company/center-for-innovation-and-entrepreneurship-pes-university/', '_blank')}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Follow on Social Media
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'stories' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Success <span className="text-orange-600">Stories</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover how our industry events have created meaningful impact, fostering collaborations 
                    and driving innovation within CIE's ecosystem.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {successStories.map((story, index) => {
                    const IconComponent = story.icon;
                    return (
                      <motion.div
                        key={story.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-white to-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <IconComponent className="w-10 h-10 text-[#f07f1a]" />
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed">{story.description}</p>

                        <div className="space-y-4">
                          <div className="p-4 bg-blue-50 rounded-xl">
                            <h4 className="font-semibold text-blue-900 mb-2">Achievement</h4>
                            <p className="text-blue-800 text-sm">{story.achievement}</p>
                          </div>

                          <div className="p-4 bg-orange-50 rounded-xl">
                            <h4 className="font-semibold text-orange-600 mb-2">Impact</h4>
                            <p className="text-orange-800 text-sm">{story.impact}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === 'participate' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    How to Participate or Host an Event
                  </h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    Interested in joining or hosting a webinar, networking event, or workshop with CIE? 
                    Express your interest and we'll help make it happen.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center bg-orange-50 p-8 rounded-3xl border border-orange-200"
                  >
                    <Target className="w-12 h-12 text-[#f07f1a] mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">1. Prepare Your Proposal</h3>
                    <div className="text-left space-y-2 text-sm text-gray-600">
                      <p>• Type of event (webinar, networking event, workshop)</p>
                      <p>• Proposed topic or theme</p>
                      <p>• Target audience (students, faculty, industry peers)</p>
                      <p>• Preferred timeline</p>
                      <p>• Additional support needed</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center bg-orange-50 p-8 rounded-3xl border border-orange-200"
                  >
                    <Mail className="w-12 h-12 text-[#f07f1a] mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2. Submit Your Interest</h3>
                    <p className="text-gray-600 mb-4">
                      Email <span className="font-semibold text-orange-700">cieinfo@pes.edu</span> with 
                      the subject line "Industry Event Interest – [Your Company Name]."
                    </p>
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-400 text-white"
                      onClick={() => window.open('mailto:cieinfo@pes.edu')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center bg-orange-50 p-8 rounded-3xl border border-orange-200"
                  >
                    <MessageCircle className="w-12 h-12 text-[#f07f1a] mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">3. Next Steps</h3>
                    <p className="text-gray-600">
                      A CIE representative will review your inquiry, discuss logistics, and confirm participation 
                      or event details within <span className="font-semibold text-orange-700">5–7 business days</span>.
                    </p>
                  </motion.div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-3xl border border-orange-200">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon: Event Registration Form</h3>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      A dedicated form will allow you to submit event proposals or register for upcoming events directly on the CIE website, 
                      ensuring a seamless experience.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact and Benefits Section */}
      <section className="py-20 bg-[#1e3a8a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Connect with CIE's Ecosystem?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Join CIE's webinars, networking events, and workshops to connect with our ecosystem 
              and explore collaboration opportunities. Submit your interest today!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Users,
                  title: 'Build Connections',
                  description: 'Network with students, faculty, and CIE leadership'
                },
                {
                  icon: Target,
                  title: 'Identify Talent',
                  description: 'Engage with students to identify candidates for internships'
                },
                {
                  icon: Lightbulb,
                  title: 'Share Expertise',
                  description: 'Contribute to student learning and enhance your brand reputation'
                },
                {
                  icon: Award,
                  title: 'Drive Innovation',
                  description: 'Collaborate on projects and ideas inspired by event interactions'
                },
                {
                  icon: Globe,
                  title: 'Global Reach',
                  description: 'Gain exposure through international participation events'
                },
                {
                  icon: Handshake,
                  title: 'Long-term Partnerships',
                  description: 'Establish ongoing collaboration relationships with CIE'
                }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-blue-100 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
                <div className="space-y-3 text-blue-100">
                  <p>Email: cieinfo@pes.edu</p>
                  <p>Phone: +91-080-61966200</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Stay Connected</h3>
                <div className="space-y-3 text-blue-100 text-sm">
                  <p>• <button 
                      onClick={() => window.open('/alumni/newsletter', '_blank')}
                      className="text-blue-200 hover:text-white underline"
                    >
                      Subscribe to the CIE Newsletter
                    </button> for updates</p>
                  <p>• <button 
                      onClick={() => window.open('https://www.linkedin.com/company/center-for-innovation-and-entrepreneurship-pes-university/', '_blank')}
                      className="text-blue-200 hover:text-white underline"
                    >
                      Follow us on LinkedIn
                    </button></p>
                  <p>• Visit CIE PES University for latest information</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
                onClick={() => window.open('mailto:cieinfo@pes.edu')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Submit Interest
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
                onClick={() => window.open('mailto:cieinfo@pes.edu')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}