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
  Target,
  BookOpen,
  Award,
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
  HandHeart,
  Calendar,
  Globe,
  Briefcase,
  GraduationCap,
  Network,
  Coffee
} from 'lucide-react';

export default function AlumniMentorshipPage() {
  const alumniColors = SECTION_COLORS.alumni;
  const mentorshipStats = [
    { label: 'Active Mentors', value: '800+', icon: Users },
    { label: 'Mentees Supported', value: '1,200+', icon: GraduationCap },
    { label: 'Success Rate', value: '92%', icon: Target },
    { label: 'Global Reach', value: '30+ Countries', icon: Globe }
  ];

  const mentorshipPrograms = [
    {
      title: 'Career Guidance Program',
      description: 'One-on-one mentorship focused on career development, industry insights, and professional growth strategies.',
      duration: '6 months',
      commitment: '2 hours/month',
      participants: '400+ mentees',
      icon: Briefcase,
      benefits: [
        'Resume and LinkedIn profile optimization',
        'Interview preparation and mock sessions',
        'Industry-specific career guidance',
        'Network expansion opportunities'
      ]
    },
    {
      title: 'Entrepreneurship Mentorship',
      description: 'Support for aspiring entrepreneurs and startup founders through business development guidance.',
      duration: '12 months',
      commitment: '3 hours/month',
      participants: '150+ entrepreneurs',
      icon: Lightbulb,
      benefits: [
        'Business plan development',
        'Investor pitch preparation',
        'Market analysis and strategy',
        'Funding and investment guidance'
      ]
    },
    {
      title: 'Academic & Research Mentorship',
      description: 'Guidance for students pursuing higher studies, research opportunities, and academic careers.',
      duration: '8 months',
      commitment: '2 hours/month',
      participants: '200+ researchers',
      icon: BookOpen,
      benefits: [
        'PhD and Masters application guidance',
        'Research methodology support',
        'Publication and conference guidance',
        'Academic career planning'
      ]
    },
    {
      title: 'Leadership Development',
      description: 'Mentorship program focused on developing leadership skills and management capabilities.',
      duration: '10 months',
      commitment: '2.5 hours/month',
      participants: '180+ leaders',
      icon: Award,
      benefits: [
        'Leadership style assessment',
        'Team management skills',
        'Strategic thinking development',
        'Executive presence building'
      ]
    }
  ];

  const mentorProfiles = [
    {
      name: 'Dr. Ananya Krishnan',
      title: 'Chief Technology Officer',
      company: 'Tech Innovations Inc.',
      experience: '15+ years',
      expertise: 'AI/ML, Technology Leadership',
      mentees: '25+ mentored',
      location: 'Silicon Valley, USA',
      background: 'Leading AI research and product development at Fortune 500 companies'
    },
    {
      name: 'Rajesh Patel',
      title: 'Serial Entrepreneur',
      company: 'Multiple Startups',
      experience: '12+ years',
      expertise: 'Startup Ecosystem, Venture Capital',
      mentees: '30+ mentored',
      location: 'Bangalore, India',
      background: 'Founded 3 successful startups with exits totaling $100M+'
    },
    {
      name: 'Prof. Priya Sharma',
      title: 'Research Director',
      company: 'MIT Research Labs',
      experience: '18+ years',
      expertise: 'Academic Research, Publications',
      mentees: '40+ mentored',
      location: 'Boston, USA',
      background: 'Published 100+ papers, leading researcher in sustainable technology'
    }
  ];

  const successStories = [
    {
      mentee: 'Arjun Kumar (Class of 2022)',
      mentor: 'Suresh Reddy (Class of 2010)',
      outcome: 'Secured Product Manager role at Google',
      story: 'Through strategic career guidance and interview preparation, landed dream job within 6 months of graduation.',
      program: 'Career Guidance'
    },
    {
      mentee: 'Kavya Nair (Class of 2021)',
      mentor: 'Dr. Vikram Shah (Class of 2005)',
      outcome: 'Founded successful EdTech startup',
      story: 'Developed business plan and secured ₹2Cr seed funding with mentorship support.',
      program: 'Entrepreneurship'
    },
    {
      mentee: 'Rohit Joshi (Class of 2020)',
      mentor: 'Prof. Meera Patel (Class of 2000)',
      outcome: 'Admitted to PhD at Stanford',
      story: 'Received full scholarship for doctoral studies in Computer Science with research mentorship.',
      program: 'Academic Research'
    }
  ];

  const mentorshipProcess = [
    {
      step: '1',
      title: 'Registration',
      description: 'Sign up as a mentor or mentee through our online platform.',
      duration: '5 minutes'
    },
    {
      step: '2',
      title: 'Profile Matching',
      description: 'Our algorithm matches mentors and mentees based on goals and expertise.',
      duration: '1-2 weeks'
    },
    {
      step: '3',
      title: 'Initial Meeting',
      description: 'Virtual introduction session to establish goals and expectations.',
      duration: '1 hour'
    },
    {
      step: '4',
      title: 'Regular Sessions',
      description: 'Ongoing monthly mentorship sessions and progress tracking.',
      duration: 'Program duration'
    },
    {
      step: '5',
      title: 'Evaluation',
      description: 'Program completion assessment and feedback collection.',
      duration: '30 minutes'
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
                <HandHeart className="w-4 h-4 mr-2" />
                Alumni Mentorship
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Guiding the Next{' '}
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Generation Forward</span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Connect with experienced alumni mentors or share your expertise by mentoring 
              students and recent graduates on their professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg" 
                className="group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white"
                onClick={() => window.location.href = 'mailto:mentorship@pes.edu?subject=Enquiry%20about%20Mentee%20Program'}
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Enquire about mentee
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={() => window.location.href = 'mailto:mentorship@pes.edu?subject=Enquiry%20about%20Becoming%20a%20Mentor'}
              >
                <HandHeart className="w-5 h-5 mr-2" />
                Enquire about mentorship
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mentorship Impact and Program Section (merged) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mentorship Impact and Program
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mentorship program has created meaningful connections and transformative outcomes for thousands of participants worldwide. Choose from specialized mentorship programs designed to address different career stages and professional development needs.
            </p>
          </motion.div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {mentorshipStats.map((stat, index) => {
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
          </div> */}

          <div className="grid lg:grid-cols-2 gap-8">
            {mentorshipPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-5 md:p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-amber-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{program.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{program.description}</p>

                      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                        <div className="text-center">
                          <div className="text-xs md:text-sm text-gray-500">Duration</div>
                          <div className="text-sm md:text-base font-semibold text-gray-900">{program.duration}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs md:text-sm text-gray-500">Commitment</div>
                          <div className="text-xs md:text-base font-semibold text-gray-900 leading-tight">{program.commitment}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs md:text-sm text-gray-500">Participants</div>
                          <div className="text-xs md:text-base font-semibold text-gray-900 leading-tight">{program.participants}</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2 md:mb-3">Key Benefits</h4>
                        <div className="space-y-1.5 md:space-y-2">
                          {program.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-xs md:text-sm text-gray-700">{benefit}</span>
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

      {/* Featured Mentors Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Mentors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet some of our distinguished alumni mentors who are making a 
              difference in the lives of students and recent graduates.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mentorProfiles.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                  <p className="text-purple-600 font-semibold mb-1">{mentor.title}</p>
                  <p className="text-gray-600">{mentor.company}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-semibold text-gray-900">{mentor.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mentees:</span>
                    <span className="font-semibold text-gray-900">{mentor.mentees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold text-gray-900">{mentor.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Expertise:</p>
                  <p className="font-semibold text-purple-600">{mentor.expertise}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-700">{mentor.background}</p>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Connect with Mentor
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Success Stories Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories of transformation and achievement through our mentorship programs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.mentee}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl border border-purple-200"
              >
                <div className="mb-6">
                  <span className="inline-block text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-4">
                    {story.program}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.outcome}</h3>
                  <p className="text-gray-600 italic mb-4">"{story.story}"</p>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-500">Mentee:</span>
                    <p className="font-semibold text-gray-900">{story.mentee}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Mentor:</span>
                    <p className="font-semibold text-gray-900">{story.mentor}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Mentorship Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures meaningful mentor-mentee matches 
              and successful program outcomes.
            </p>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            {mentorshipProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step number - show at top on mobile, inline on desktop */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                  {process.step}
                </div>

                <div className="flex-1 w-full">
                  <div className={`bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{process.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{process.description}</p>
                    <span className="inline-block text-xs md:text-sm font-semibold text-amber-600 bg-yellow-50 px-2 md:px-3 py-1 rounded-full">
                      Duration: {process.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#00338d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-xl text-yellow-100 max-w-3xl mx-auto mb-8 md:mb-12 px-2">
              Join our mentorship community and be part of a network that 
              empowers personal and professional growth for everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="text-center bg-white/10 rounded-2xl p-5 md:p-6">
                <UserPlus className="w-10 h-10 md:w-12 md:h-12 text-white mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Looking for Guidance?</h3>
                <p className="text-sm md:text-base text-yellow-100 mb-4">Connect with experienced alumni mentors</p>
                <Button 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
                  onClick={() => window.location.href = 'mailto:mentorship@pes.edu?subject=Enquiry%20about%20Mentee%20Program'}
                >
                  Enquire about mentee
                </Button>
              </div>

              <div className="text-center bg-white/10 rounded-2xl p-5 md:p-6">
                <HandHeart className="w-10 h-10 md:w-12 md:h-12 text-white mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Want to Give Back?</h3>
                <p className="text-sm md:text-base text-yellow-100 mb-4">Share your expertise as a mentor</p>
                <Button 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
                  onClick={() => window.location.href = 'mailto:mentorship@pes.edu?subject=Enquiry%20about%20Becoming%20a%20Mentor'}
                >
                  Enquire about mentorship
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-yellow-100 mb-4">Questions about our mentorship programs?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center gap-2 text-white">
                  <Mail className="w-4 h-4" />
                  <span>mentorship@pes.edu</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}