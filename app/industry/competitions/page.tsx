'use client';

import React from 'react';
import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Rocket, 
  Target, 
  DollarSign,
  Users, 
  Calendar, 
  Award,
  Star, 
  BookOpen,
  Lightbulb, 
  TrendingUp,
  CheckCircle,
  Building2, 
  ArrowRight,
  ExternalLink, 
  Globe,
  Clock, 
  MapPin, 
  Briefcase,
  Crown, 
  FlaskConical,
  Medal, 
  MessageCircle,
  Gift, 
  Mail,
  Handshake, 
  UserPlus,
  ChartBar
} from 'lucide-react';

export default function IndustryCompetitionsPage() {
  const competitions = [
    {
      title: 'Industry Innovation Challenge 2024',
      description: 'Students solve real industry problems with innovative solutions',
      prize: '₹5,00,000',
      deadline: '2024-04-15',
      participants: '500+',
      status: 'Registration Open',
      categories: ['AI/ML', 'IoT', 'Sustainability', 'FinTech'],
      sponsors: ['TCS', 'Infosys', 'Microsoft'],
      featured: true
    },
    {
      title: 'Tech Startup Pitch Competition',
      description: 'Early-stage startups pitch to industry investors and mentors',
      prize: '₹2,00,000',
      deadline: '2024-03-30',
      participants: '100+',
      status: 'Applications Due Soon',
      categories: ['Startup', 'Business Model', 'Technology'],
      sponsors: ['NASSCOM', 'T-Hub', 'Sequoia'],
      featured: false
    },
    {
      title: 'Sustainable Solutions Hackathon',
      description: '48-hour intensive hackathon for environmental challenges',
      prize: '₹1,50,000',
      deadline: '2024-03-20',
      participants: '200+',
      status: 'Registration Open',
      categories: ['GreenTech', 'Renewable Energy', 'Waste Management'],
      sponsors: ['Wipro', 'L&T', 'Tata Group'],
      featured: false
    }
  ];

  const pastWinners = [
    {
      year: '2023',
      competition: 'Industry Innovation Challenge',
      winner: 'Team NeuralFlow',
      solution: 'AI-powered supply chain optimization',
      prize: '₹5,00,000',
      impact: 'Implemented by 3 major companies'
    },
    {
      year: '2023',
      competition: 'FinTech Innovation Contest',
      winner: 'Team PaySecure',
      solution: 'Blockchain-based payment security',
      prize: '₹3,00,000',
      impact: 'Secured Series A funding'
    },
    {
      year: '2022',
      competition: 'Healthcare Tech Challenge',
      winner: 'Team MediBot',
      solution: 'AI diagnostic assistant for rural healthcare',
      prize: '₹4,00,000',
      impact: 'Deployed in 50+ rural clinics'
    }
  ];

  const competitionTypes = [
    {
      title: 'Innovation Challenges',
      description: 'Solve complex industry problems with creative solutions',
      icon: Lightbulb,
      duration: '3-6 months',
      teamSize: '3-5 members'
    },
    {
      title: 'Hackathons',
      description: 'Intensive coding and development competitions',
      icon: Rocket,
      duration: '24-72 hours',
      teamSize: '2-4 members'
    },
    {
      title: 'Pitch Competitions',
      description: 'Present business ideas to industry panels',
      icon: Target,
      duration: '1-2 months',
      teamSize: '1-3 members'
    },
    {
      title: 'Case Study Contests',
      description: 'Analyze and solve real business scenarios',
      icon: Building2,
      duration: '1-2 weeks',
      teamSize: '3-4 members'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-100 border border-purple-400/30">
                <Trophy className="w-4 h-4 mr-2" />
                Industry Competitions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Compete, Innovate,
              <span className="block text-purple-200">Win Big</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Join industry-sponsored competitions where students solve real challenges, 
              win substantial prizes, and create solutions that shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Trophy className="w-5 h-5 mr-2" />
                View Competitions
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Handshake className="w-5 h-5 mr-2" />
                Sponsor Competition
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Competitions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Active Competitions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Current competitions open for registration. Don't miss these opportunities 
              to showcase your skills and win amazing prizes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {competitions.map((competition, index) => (
              <motion.div
                key={competition.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-3xl border-2 hover:shadow-xl transition-all duration-300 ${
                  competition.featured ? 'border-purple-200 ring-2 ring-purple-100' : 'border-gray-200'
                }`}
              >
                {competition.featured && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-4">
                    <Crown className="w-3 h-3 mr-1" />
                    Featured Competition
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{competition.title}</h3>
                <p className="text-gray-600 mb-6">{competition.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Prize Pool</span>
                    <span className="font-bold text-green-600 text-lg">{competition.prize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Deadline</span>
                    <span className="font-medium text-gray-900">
                      {new Date(competition.deadline).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Participants</span>
                    <span className="font-medium text-gray-900">{competition.participants}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Categories:</h4>
                  <div className="flex flex-wrap gap-2">
                    {competition.categories.map((category, categoryIndex) => (
                      <span
                        key={categoryIndex}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Sponsored by:</h4>
                  <div className="flex flex-wrap gap-2">
                    {competition.sponsors.map((sponsor, sponsorIndex) => (
                      <span
                        key={sponsorIndex}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {sponsor}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    competition.status === 'Registration Open' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {competition.status}
                  </span>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Register Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Competitions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We host various types of competitions throughout the year to cater to different 
              skills, interests, and career aspirations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitionTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-gray-50 p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium text-gray-900">{type.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Team Size:</span>
                      <span className="font-medium text-gray-900">{type.teamSize}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Winners Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Past Winners & Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrate the achievements of previous competition winners who have gone on 
              to create real-world impact with their innovative solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pastWinners.map((winner, index) => (
              <motion.div
                key={`${winner.year}-${winner.winner}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Medal className="w-8 h-8 text-yellow-500" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{winner.winner}</h3>
                    <p className="text-sm text-gray-600">{winner.competition} {winner.year}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{winner.solution}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-600">{winner.prize}</span>
                  <Gift className="w-6 h-6 text-green-600" />
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Impact</h4>
                    <p className="text-green-700 text-sm">{winner.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Competition CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sponsor a Competition
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-12">
              Partner with CIE to sponsor competitions that drive innovation, solve industry challenges, 
              and identify top talent for your organization.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Talent Discovery</h3>
                <p className="text-purple-100">Identify and recruit top performers</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Innovation Solutions</h3>
                <p className="text-purple-100">Get fresh perspectives on business challenges</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Brand Visibility</h3>
                <p className="text-purple-100">Showcase your commitment to innovation</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Handshake className="w-5 h-5 mr-2" />
                Become a Sponsor
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Trophy className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}