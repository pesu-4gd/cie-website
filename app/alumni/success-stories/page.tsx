'use client';

import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Newspaper,
  Calendar,
  User,
  Award,
  Building2,
  Globe,
  Rocket,
  CheckCircle,
  ArrowRight,
  DollarSign,
  MessageCircle,
  Mail,
  Users,
  Clock,
  Share2,
  Target,
  BookOpen,
  Trophy,
  ChevronRight,
  Bell
} from 'lucide-react';

export default function AlumniNewsPage() {
  const alumniColors = SECTION_COLORS.alumni;
  const newsStats = [
    { label: 'News Articles', value: '500+', icon: Newspaper },
    { label: 'Alumni Featured', value: '200+', icon: Users },
    { label: 'Success Stories', value: '150+', icon: Trophy },
    { label: 'Monthly Readers', value: '10K+', icon: Globe }
  ];

  const featuredNews = [
    {
      id: 1,
      title: 'PES Alumnus Leads Major Tech Breakthrough in AI Research',
      summary: 'Dr. Priya Sharma (Class of 2010) pioneers revolutionary machine learning algorithm that transforms healthcare diagnostics.',
      category: 'Research',
      date: '2024-03-15',
      readTime: '5 min read',
      author: 'Alumni Relations Team',
      image: 'tech-breakthrough.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Global Startup Success: Alumni-Founded Company Raises $50M Series B',
      summary: 'EcoTech Solutions, founded by Rajesh Kumar (Class of 2012), secures major funding round for sustainable energy innovations.',
      category: 'Business',
      date: '2024-03-12',
      readTime: '4 min read',
      author: 'Business Reporter',
      image: 'startup-funding.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Alumni Excellence Awards 2024: Celebrating Outstanding Achievements',
      summary: 'Annual awards ceremony honors alumni who have made significant contributions to their industries and communities.',
      category: 'Awards',
      date: '2024-03-10',
      readTime: '6 min read',
      author: 'Awards Committee',
      image: 'awards-ceremony.jpg',
      featured: true
    }
  ];

  const recentNews = [
    {
      title: 'New Alumni Chapter Launched in Toronto',
      summary: 'Canadian alumni now have a dedicated chapter for networking and professional development.',
      category: 'Chapter News',
      date: '2024-03-08',
      readTime: '3 min read'
    },
    {
      title: 'Alumni Mentorship Program Reaches 1000+ Participants',
      summary: 'Record participation in career guidance initiative connecting senior alumni with recent graduates.',
      category: 'Programs',
      date: '2024-03-05',
      readTime: '4 min read'
    },
    {
      title: 'Tech Innovation Summit 2024: Registration Open',
      summary: 'Annual technology conference featuring alumni speakers and cutting-edge industry insights.',
      category: 'Events',
      date: '2024-03-02',
      readTime: '2 min read'
    },
    {
      title: 'Alumni Research Collaboration Wins National Grant',
      summary: 'Multi-university project led by PES alumni receives ₹2 crore funding for sustainable technology research.',
      category: 'Research',
      date: '2024-02-28',
      readTime: '5 min read'
    },
    {
      title: 'Career Fair 2024: 50+ Alumni Companies Participating',
      summary: 'Major recruitment drive brings together alumni-led organizations for student placement opportunities.',
      category: 'Career',
      date: '2024-02-25',
      readTime: '3 min read'
    },
    {
      title: 'Alumni Giving Campaign Surpasses ₹10 Crore Milestone',
      summary: 'Generous contributions from alumni community support scholarship programs and infrastructure development.',
      category: 'Giving',
      date: '2024-02-22',
      readTime: '4 min read'
    }
  ];

  const newsCategories = [
    { name: 'All News', count: 125, active: true },
    { name: 'Research', count: 35 },
    { name: 'Business', count: 42 },
    { name: 'Awards', count: 18 },
    { name: 'Events', count: 30 },
    { name: 'Chapter News', count: 25 },
    { name: 'Career', count: 20 },
    { name: 'Giving', count: 15 }
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-100 border border-indigo-400/30">
                <Newspaper className="w-4 h-4 mr-2" />
                Alumni News
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Alumni News &{' '}
              <span className="block text-indigo-200">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay updated with the latest achievements, milestones, and inspiring stories
              from our global alumni community making impact across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white">
                <Newspaper className="w-5 h-5 mr-2" />
                Browse All News
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Share2 className="w-5 h-5 mr-2" />
                Submit News
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alumni News Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our alumni news platform celebrates achievements, shares opportunities,
              and keeps our community connected worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-indigo-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Highlighting the most inspiring achievements and significant milestones
              from our distinguished alumni community.
            </p>
          </motion.div>

          <div className="space-y-8">
            {featuredNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-3xl border border-indigo-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                      </div>
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-semibold">
                        Read Full Story
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="w-full h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-2xl flex items-center justify-center">
                      <Newspaper className="w-16 h-16 text-indigo-600" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* News Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-white p-6 rounded-3xl border border-gray-200 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">News Categories</h3>
                <div className="space-y-3">
                  {newsCategories.map((category) => (
                    <button
                      key={category.name}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                        category.active
                          ? 'bg-indigo-100 text-indigo-700 font-semibold'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm opacity-75">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Recent News List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent News</h3>
              <div className="space-y-6">
                {recentNews.map((article, index) => (
                  <motion.article
                    key={article.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                          {article.summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            <Calendar className="w-3 h-3 inline mr-1" />
                            {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold">
                  Load More News
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Never miss the latest alumni news, success stories, and community updates.
                Subscribe to our newsletter and be part of the conversation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Weekly Newsletter</h3>
                    <p className="text-indigo-100">Get curated news and stories every week</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Breaking News</h3>
                    <p className="text-indigo-100">Instant updates on major achievements</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe Now</h3>
                <p className="text-indigo-100">Join 10,000+ alumni who stay informed</p>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <Button className="w-full bg-white text-indigo-600 hover:bg-gray-100 py-3 rounded-xl font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe to Newsletter
                </Button>
                <Button className="w-full border-2 border-white text-white hover:bg-white hover:text-indigo-600 py-3 rounded-xl font-semibold bg-transparent">
                  <Share2 className="w-5 h-5 mr-2" />
                  Submit Your Story
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-indigo-100 text-sm">
                  Join our community on social media for real-time updates
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}