'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { 
  Mail,
  Calendar,
  Users,
  TrendingUp,
  BookOpen,
  Building2,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Clock,
  Star,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  Network,
  Bell,
  Eye,
  Share2,
  Download,
  Archive,
  Edit
} from 'lucide-react';

export default function AlumniNewsletterPage() {
  const newsletterStats = [
    { label: 'Subscribers', value: '15,000+', icon: Users },
    { label: 'Monthly Editions', value: '12', icon: Calendar },
    { label: 'Open Rate', value: '68%', icon: Eye },
    { label: 'Global Reach', value: '45+ Countries', icon: Globe }
  ];

  const recentEditions = [
    {
      title: 'PES Alumni Connect - March 2024',
      subtitle: 'Innovation & Technology Special',
      date: '2024-03-15',
      highlights: [
        'AI Research Breakthrough by Dr. Priya Sharma',
        'Tech Startup Funding Success Stories',
        'Upcoming Technology Summit Details',
        'Career Opportunities in AI/ML'
      ],
      readTime: '8 min read',
      downloads: '2,400',
      featured: true
    },
    {
      title: 'PES Alumni Connect - February 2024',
      subtitle: 'Entrepreneurship & Leadership',
      date: '2024-02-15',
      highlights: [
        'Alumni Startup Ecosystem Report',
        'Leadership Development Programs',
        'New Chapter Launches Worldwide',
        'Mentorship Program Expansion'
      ],
      readTime: '7 min read',
      downloads: '2,100',
      featured: false
    },
    {
      title: 'PES Alumni Connect - January 2024',
      subtitle: 'New Year, New Opportunities',
      date: '2024-01-15',
      highlights: [
        '2024 Career Outlook & Trends',
        'Alumni Achievement Awards',
        'Research Collaboration Opportunities',
        'Professional Development Goals'
      ],
      readTime: '9 min read',
      downloads: '2,600',
      featured: false
    }
  ];

  const newsletterSections = [
    {
      title: 'Alumni Spotlight',
      description: 'Featured stories of alumni achievements, career milestones, and success stories.',
      icon: Star,
      frequency: 'Every Issue'
    },
    {
      title: 'Industry Insights',
      description: 'Latest trends, market analysis, and professional insights across various industries.',
      icon: TrendingUp,
      frequency: 'Monthly'
    },
    {
      title: 'Career Opportunities',
      description: 'Job openings, internship programs, and career advancement opportunities.',
      icon: Briefcase,
      frequency: 'Bi-weekly'
    },
    {
      title: 'Events & Networking',
      description: 'Upcoming alumni events, chapter meetings, and networking opportunities worldwide.',
      icon: Calendar,
      frequency: 'Every Issue'
    },
    {
      title: 'Research & Innovation',
      description: 'Latest research developments, publication announcements, and innovation highlights.',
      icon: BookOpen,
      frequency: 'Monthly'
    },
    {
      title: 'University Updates',
      description: 'News from campus, new programs, faculty achievements, and institutional developments.',
      icon: GraduationCap,
      frequency: 'Every Issue'
    }
  ];

  const subscriptionBenefits = [
    'Exclusive alumni news and updates',
    'Early access to event registrations',
    'Career opportunity notifications',
    'Industry insights and reports',
    'Networking event invitations',
    'Professional development resources'
  ];

  const pastHighlights = [
    {
      month: 'December 2023',
      title: 'Year in Review Special',
      highlights: '50+ Alumni Success Stories, Annual Impact Report'
    },
    {
      month: 'November 2023',
      title: 'Global Alumni Conference',
      highlights: 'Conference Highlights, Keynote Speeches, Networking Updates'
    },
    {
      month: 'October 2023',
      title: 'Innovation & Research',
      highlights: 'Research Breakthroughs, Patent Achievements, Collaboration News'
    },
    {
      month: 'September 2023',
      title: 'Career Development Focus',
      highlights: 'Industry Trends, Job Market Analysis, Skill Development Tips'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-700 overflow-hidden">
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30">
                <Mail className="w-4 h-4 mr-2" />
                Alumni Newsletter
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              PES Alumni{' '}
              <span className="block text-blue-200">Connect Newsletter</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay connected with your alumni community through our monthly newsletter
              featuring success stories, opportunities, and university updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Bell className="w-5 h-5 mr-2" />
                Subscribe Now
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Archive className="w-5 h-5 mr-2" />
                Browse Archives
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Newsletter Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our newsletter connects thousands of alumni worldwide with relevant
              content, opportunities, and community updates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsletterStats.map((stat, index) => {
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

      {/* Recent Editions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Editions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Catch up on our latest newsletter editions featuring alumni achievements,
              industry insights, and community updates.
            </p>
          </motion.div>

          <div className="space-y-8">
            {recentEditions.map((edition, index) => (
              <motion.div
                key={edition.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 ${
                  edition.featured
                    ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      {edition.featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          Latest Edition
                        </span>
                      )}
                      <span className="text-sm text-gray-500">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {edition.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {edition.title}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{edition.subtitle}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">In This Edition:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {edition.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(edition.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {edition.downloads} downloads
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold">
                          <Eye className="w-4 h-4 mr-2" />
                          Read Online
                        </Button>
                        <Button className="border border-blue-300 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-xl font-semibold bg-transparent">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl flex items-center justify-center">
                      <Mail className="w-16 h-16 text-blue-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Inside Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each edition is carefully curated with diverse content sections
              to keep you informed and engaged with the alumni community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {newsletterSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
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
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {section.frequency}
                        </span>
                      </div>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subscription Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Subscribe?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of alumni who stay connected and informed through
                our comprehensive newsletter covering all aspects of alumni life.
              </p>

              <div className="space-y-4">
                {subscriptionBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-200"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscribe Today</h3>
                <p className="text-gray-600">Join 15,000+ alumni receiving our newsletter</p>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="privacy" className="rounded" />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to receive newsletter updates and alumni communications
                  </label>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                  <Bell className="w-5 h-5 mr-2" />
                  Subscribe to Newsletter
                </Button>
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Free subscription • Monthly delivery • Unsubscribe anytime
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Past Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Newsletter Archives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our past editions and catch up on important
              alumni community developments and achievements.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pastHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.month}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{highlight.title}</h3>
                    <p className="text-sm text-blue-600 font-semibold">{highlight.month}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Archive className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{highlight.highlights}</p>
                <Button className="text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold bg-transparent border border-blue-200">
                  <Eye className="w-4 h-4 mr-2" />
                  View Edition
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
              <Archive className="w-5 h-5 mr-2" />
              View All Archives
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Don't miss out on alumni achievements, opportunities, and community updates.
              Subscribe to our newsletter and be part of the conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Bell className="w-5 h-5 mr-2" />
                Subscribe Now
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Share2 className="w-5 h-5 mr-2" />
                Share Newsletter
              </Button>
            </div>

            <div className="text-center">
              <p className="text-blue-100 mb-4">Questions or suggestions for our newsletter?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>newsletter@pes.edu</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  <span>Submit Content Ideas</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}