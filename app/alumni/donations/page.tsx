'use client';

import React from 'react';
import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Rocket, 
  DollarSign,
  Users, 
  Target,
  Award,
  BookOpen,
  Building2,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Mail,
  Globe,
  Star,
  GraduationCap,
  Trophy,
  TrendingUp,
  Gift,
  HandHeart,
  Zap,
  Shield,
  CreditCard,
  Calendar,
  PiggyBank,
  UserPlus
} from 'lucide-react';

export default function AlumniDonationsPage() {
  const donationStats = [
    { label: 'Total Donations', value: '₹15Cr+', icon: Heart },
    { label: 'Alumni Donors', value: '3,500+', icon: Users },
    { label: 'Scholarships Funded', value: '450+', icon: GraduationCap },
    { label: 'Projects Supported', value: '85+', icon: Building2 }
  ];

  const donationImpacts = [
    {
      title: 'Student Scholarships',
      description: 'Supporting meritorious students with financial assistance for their education.',
      icon: GraduationCap,
      amount: '₹6.5Cr',
      beneficiaries: '450+ students',
      examples: [
        'Merit-based scholarships for undergraduate students',
        'Need-based financial aid programs',
        'Research scholarships for graduate students',
        'International exchange program funding'
      ]
    },
    {
      title: 'Infrastructure Development',
      description: 'Enhancing campus facilities and creating modern learning environments.',
      icon: Building2,
      amount: '₹4.2Cr',
      beneficiaries: 'All students',
      examples: [
        'State-of-the-art laboratory equipment',
        'Digital library and learning resources',
        'Sports and recreational facilities',
        'Green campus sustainability projects'
      ]
    },
    {
      title: 'Research & Innovation',
      description: 'Funding cutting-edge research projects and innovation initiatives.',
      icon: Zap,
      amount: '₹2.8Cr',
      beneficiaries: '25+ projects',
      examples: [
        'Faculty research grants and equipment',
        'Student innovation and startup incubation',
        'Industry collaboration projects',
        'Patent filing and IP protection'
      ]
    },
    {
      title: 'Faculty Development',
      description: 'Supporting faculty growth through training, conferences, and sabbaticals.',
      icon: Award,
      amount: '₹1.5Cr',
      beneficiaries: '120+ faculty',
      examples: [
        'International conference participation',
        'Advanced training and certification programs',
        'Sabbatical and research leave support',
        'Teaching excellence recognition awards'
      ]
    }
  ];

  const donationOptions = [
    {
      title: 'General Alumni Fund',
      description: 'Flexible funding for the university\'s most pressing needs and opportunities.',
      suggestedAmounts: ['₹1,000', '₹5,000', '₹10,000', 'Custom'],
      impact: 'Supports various university initiatives',
      icon: Heart
    },
    {
      title: 'Scholarship Endowment',
      description: 'Create lasting impact by establishing named scholarships for deserving students.',
      suggestedAmounts: ['₹50,000', '₹1,00,000', '₹5,00,000', 'Custom'],
      impact: 'Permanent scholarship support',
      icon: GraduationCap
    },
    {
      title: 'Infrastructure Fund',
      description: 'Contribute to building and maintaining world-class campus facilities.',
      suggestedAmounts: ['₹25,000', '₹50,000', '₹2,00,000', 'Custom'],
      impact: 'Enhanced learning environment',
      icon: Building2
    },
    {
      title: 'Research Grants',
      description: 'Support groundbreaking research and innovation projects.',
      suggestedAmounts: ['₹15,000', '₹30,000', '₹1,00,000', 'Custom'],
      impact: 'Advancing knowledge and innovation',
      icon: Zap
    }
  ];

  const donorRecognition = [
    {
      level: 'Platinum Circle',
      amount: '₹10,00,000+',
      benefits: [
        'Named recognition opportunities',
        'Exclusive donor events and dinners',
        'University board consultation',
        'Legacy society membership',
        'Campus naming rights consideration'
      ]
    },
    {
      level: 'Gold Circle',
      amount: '₹5,00,000 - ₹9,99,999',
      benefits: [
        'Annual donor appreciation dinner',
        'VIP campus tour privileges',
        'Priority event invitations',
        'University publication recognition',
        'Direct access to university leadership'
      ]
    },
    {
      level: 'Silver Circle',
      amount: '₹1,00,000 - ₹4,99,999',
      benefits: [
        'Donor wall recognition',
        'Quarterly impact updates',
        'Special alumni events invitation',
        'University merchandise gifts',
        'Tax benefits documentation'
      ]
    },
    {
      level: 'Bronze Circle',
      amount: '₹25,000 - ₹99,999',
      benefits: [
        'Thank you certificate',
        'Annual impact report',
        'Alumni newsletter recognition',
        'Campus visit privileges',
        'Community member status'
      ]
    }
  ];

  const successStories = [
    {
      donor: 'Rajesh Mehta (Class of 1995)',
      contribution: '₹15 Lakh Scholarship Endowment',
      impact: 'Enables 5 students annually to pursue engineering education',
      story: 'Having benefited from a scholarship during his studies, Rajesh wanted to pay it forward to help other deserving students achieve their dreams.'
    },
    {
      donor: 'Dr. Priya Sharma (Class of 2000)',
      contribution: '₹8 Lakh Research Lab Equipment',
      impact: 'Advanced AI research capabilities for computer science department',
      story: 'As a successful AI researcher, Dr. Sharma funded cutting-edge equipment to help students and faculty stay at the forefront of technology.'
    },
    {
      donor: 'Alumni Class of 2010',
      contribution: '₹12 Lakh Collective Donation',
      impact: 'Renovated student recreation center and sports facilities',
      story: 'The entire graduating class came together for their 10th reunion to collectively fund improvements to student life facilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 to-pink-700 overflow-hidden">
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-500/20 text-red-100 border border-red-400/30">
                <Heart className="w-4 h-4 mr-2" />
                Alumni Giving
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Invest in the{' '}
              <span className="block text-red-200">Future of Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Your generous support helps create opportunities, advance research, and 
              build a stronger foundation for current and future generations of students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Gift className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Target className="w-5 h-5 mr-2" />
                View Impact
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Together, our alumni community has made a tremendous impact on 
              education, research, and student opportunities at PES University.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Your Donations Make a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how alumni contributions are transforming education and 
              creating lasting impact across the university.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {donationImpacts.map((impact, index) => {
              const IconComponent = impact.icon;
              return (
                <motion.div
                  key={impact.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{impact.title}</h3>
                      <p className="text-gray-600 mb-6">{impact.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-gray-500">Total Funding</div>
                          <div className="text-xl font-bold text-red-600">{impact.amount}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Beneficiaries</div>
                          <div className="text-xl font-bold text-gray-900">{impact.beneficiaries}</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Initiatives</h4>
                        <div className="space-y-2">
                          {impact.examples.map((example) => (
                            <div key={example} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{example}</span>
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

      {/* Donation Options */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ways to Give
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the giving option that aligns with your passion and 
              desired impact on the PES University community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {donationOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h3>
                      <p className="text-gray-600 mb-6">{option.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Suggested Amounts</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {option.suggestedAmounts.map((amount) => (
                            <button
                              key={amount}
                              className="px-4 py-2 border border-red-200 rounded-lg text-red-600 hover:bg-red-50 transition-colors font-semibold"
                            >
                              {amount}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm text-gray-600">
                          <Target className="w-4 h-4 inline mr-1" />
                          <span className="font-medium">Impact:</span> {option.impact}
                        </p>
                      </div>

                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold">
                        <Gift className="w-4 h-4 mr-2" />
                        Donate Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donor Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Donor Recognition Program
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We honor our generous donors with exclusive benefits and 
              recognition opportunities based on their giving levels.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {donorRecognition.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-3xl border border-red-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.level}</h3>
                    <p className="text-red-600 font-semibold">{level.amount}</p>
                  </div>
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-red-600" />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Exclusive Benefits</h4>
                  <ul className="space-y-3">
                    {level.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Donor Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read inspiring stories from alumni donors who are making 
              a meaningful difference in students' lives and university growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.donor}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                    <HandHeart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.donor}</h3>
                  <p className="text-red-600 font-semibold mb-2">{story.contribution}</p>
                  <p className="text-gray-600 font-medium mb-4">{story.impact}</p>
                </div>

                <blockquote className="text-gray-700 italic">
                  "{story.story}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-pink-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Make Your Impact Today
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-12">
              Every contribution, regardless of size, helps create opportunities 
              and advance excellence at PES University. Join our community of donors today.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Secure Donations</h3>
                <p className="text-red-100">Safe and encrypted payment processing</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Tax Benefits</h3>
                <p className="text-red-100">Eligible for tax deductions under 80G</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Track Impact</h3>
                <p className="text-red-100">Regular updates on your donation impact</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Gift className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>

            <div className="text-center">
              <p className="text-red-100 mb-4">Questions about giving? Contact our development team:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>giving@pes.edu</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>+91 80 2672 7000</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}