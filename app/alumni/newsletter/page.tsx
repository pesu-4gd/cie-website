'use client';

import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { InView } from '@/components/core/in-view';
import { 
  Mail,
  Calendar,
  TrendingUp,
  BookOpen,
  Building2,
  CheckCircle,
  Star,
  Globe,
  Network,
  Bell,
  Share2,
  Download,
  Edit,
  FileText,
  ExternalLink
} from 'lucide-react';

export default function AlumniNewsletterPage() {
  const alumniColors = SECTION_COLORS.alumni;
  const newsletterStats = [
    { label: 'Issues Published', value: '10+', icon: FileText },
    { label: 'Years Active', value: '6+', icon: Calendar },
    { label: 'Community Reach', value: 'Global', icon: Globe },
    { label: 'Latest Issue', value: 'Issue 10', icon: Star }
  ];

  // Newsletter editions with actual PDF links
  const newsletterEditions = [
    {
      issue: 10,
      title: 'CIE Newsletter - Issue 10',
      date: 'December 2023',
      description: 'Latest updates from the Centre for Innovation and Entrepreneurship',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2023/12/CIE-Newsletter_Issue-8.pdf',
      featured: true
    },
    {
      issue: 9,
      title: 'CIE Newsletter - Issue 9',
      date: 'December 2023',
      description: 'Innovation highlights and entrepreneurship success stories',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2023/12/CIE-Newsletter_Issue-8.pdf',
      featured: false
    },
    {
      issue: 8,
      title: 'CIE Newsletter - Issue 8',
      date: 'December 2023',
      description: 'Celebrating achievements and breakthroughs in innovation',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2023/12/CIE-Newsletter_Issue-8.pdf',
      featured: false
    },
    {
      issue: 7,
      title: 'CIE Newsletter - Issue 7',
      date: 'June 2023',
      description: 'Mid-year innovation roundup and upcoming initiatives',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2023/07/CIE-Newsletter-Issue7_Jun2023.pdf',
      featured: false
    },
    {
      issue: 6,
      title: 'CIE Newsletter - Issue 6',
      date: 'August 2022',
      description: 'Startup ecosystem updates and entrepreneurial journeys',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2022/08/CIE-Newsletter_Aug2022-1.pdf',
      featured: false
    },
    {
      issue: 5,
      title: 'CIE Newsletter - Issue 5',
      date: 'March 2020',
      description: 'Innovation in challenging times and resilience stories',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2020/07/CIE-Newsletter_March2020.pdf',
      featured: false
    },
    {
      issue: 4,
      title: 'CIE Newsletter - Issue 4',
      date: 'September 2019',
      description: 'Growing the innovation ecosystem and new ventures',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2019/09/cie_newsletter_web-1.pdf',
      featured: false
    },
    {
      issue: 3,
      title: 'CIE Newsletter - Issue 3',
      date: '2019',
      description: 'Entrepreneurship education and startup success stories',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2019/pdf/CIE%20Newsletter_Issue3r.pdf',
      featured: false
    },
    {
      issue: 2,
      title: 'CIE Newsletter - Issue 2',
      date: 'September 2019',
      description: 'Building connections and fostering innovation culture',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2019/09/CIE-Newsletter-Issue-2.pdf',
      featured: false
    },
    {
      issue: 1,
      title: 'CIE Newsletter - Issue 1',
      date: 'Q3 2018',
      description: 'Inaugural edition - Launching the CIE newsletter',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2019/09/CIE-Newsletter-Q3-2018.pdf',
      featured: false
    }
  ];

  const newsletterSections = [
    {
      title: 'Innovation Stories',
      description: 'Showcasing groundbreaking projects, startup journeys, and innovative solutions from the CIE community.',
      icon: Star,
      frequency: 'Every Issue'
    },
    {
      title: 'Startup Spotlight',
      description: 'Featured startups, their journey from ideation to launch, and success milestones achieved.',
      icon: TrendingUp,
      frequency: 'Regular'
    },
    {
      title: 'Events & Workshops',
      description: 'Upcoming events, workshops, bootcamps, and networking opportunities at CIE.',
      icon: Calendar,
      frequency: 'Every Issue'
    },
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with industry leaders, mentorship programs, and partnership announcements.',
      icon: Building2,
      frequency: 'Regular'
    },
    {
      title: 'Research & Development',
      description: 'Latest research initiatives, technology developments, and academic collaborations.',
      icon: BookOpen,
      frequency: 'Regular'
    },
    {
      title: 'Community Updates',
      description: 'News from CIE, program updates, achievements, and upcoming opportunities.',
      icon: Network,
      frequency: 'Every Issue'
    }
  ];

  const subscriptionBenefits = [
    'Stay updated with latest CIE initiatives and programs',
    'Early access to event registrations and workshops',
    'Exclusive startup and innovation stories',
    'Networking opportunities with industry partners',
    'Access to mentorship and funding opportunities',
    'First-hand updates on research and development'
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
                <Mail className="w-4 h-4 mr-2" />
                Alumni Newsletter
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              PES Alumni{' '}
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Connect Newsletter</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay connected with your alumni community through our monthly newsletter
              featuring success stories, opportunities, and university updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg" 
                className="group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white"
                onClick={() => window.location.href = 'mailto:newsletter@pes.edu?subject=Subscribe%20to%20Alumni%20Newsletter'}
              >
                <Bell className="w-5 h-5 mr-2" />
                Subscribe Now
              </Button>
              {/* <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <FileText className="w-5 h-5 mr-2" />
                Browse Archives
              </Button> */}
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

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-yellow-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-amber-500" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div> */}
        </div>
      </section>

      {/* Newsletter Archive Section with InView */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Newsletter Archive
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through all editions of the CIE Newsletter featuring innovation stories,
              startup journeys, and community updates.
            </p>
          </motion.div>

          <div className="space-y-6">
            {newsletterEditions.map((edition, index) => (
              <InView
                key={edition.issue}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    scale: 0.95,
                    filter: 'blur(4px)',
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                  },
                }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                viewOptions={{ margin: '0px 0px -100px 0px' }}
              >
                <div
                  className={`p-6 md:p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 ${
                    edition.featured
                      ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-yellow-200'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    {/* Issue Number Badge */}
                    <div className="lg:col-span-1 flex lg:justify-center">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <div className="text-center">
                            <div className="text-xs md:text-sm font-semibold text-yellow-100 mb-1">ISSUE</div>
                            <div className="text-3xl md:text-4xl font-bold text-white">{edition.issue}</div>
                          </div>
                        </div>
                        {edition.featured && (
                          <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2">
                            <Star className="w-4 h-4 text-white fill-white" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2">
                      {edition.featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-50 text-amber-800 mb-3">
                          Latest Edition
                        </span>
                      )}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {edition.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{edition.date}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{edition.description}</p>
                    </div>

                    {/* Actions */}
                    <div className="lg:col-span-1 flex flex-col gap-3">
                      <a
                        href={edition.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-white px-4 py-3 rounded-xl font-semibold transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open PDF</span>
                      </a>
                      <a
                        href={edition.pdfUrl}
                        download
                        className="inline-flex items-center justify-center gap-2 border-2 border-yellow-300 text-amber-600 hover:bg-yellow-50 px-4 py-3 rounded-xl font-semibold transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                </div>
              </InView>
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
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                        <span className="text-xs font-semibold text-amber-600 bg-yellow-50 px-2 py-1 rounded-full">
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
              className="bg-gradient-to-br from-white to-white p-8 rounded-3xl "
            >
              <div className="text-center mb-8">
                <img 
                  src="/assets/cie-logo.png" 
                  alt="CIE Logo" 
                  className="w-100 h-100 object-contain mx-auto mb-4"
                />
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Newsletter Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our first issue in 2018 to the latest edition, the CIE Newsletter
              has been documenting innovation, entrepreneurship, and community growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <InView
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              viewOptions={{ margin: '0px 0px -100px 0px' }}
            >
              <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-amber-500" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Issues Published</div>
                <p className="text-sm text-gray-500 mt-2">Since Q3 2018</p>
              </div>
            </InView>

            <InView
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewOptions={{ margin: '0px 0px -100px 0px' }}
            >
              <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-8 rounded-3xl shadow-xl text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">6+</div>
                <div className="font-medium mb-2">Years of Stories</div>
                <p className="text-sm text-yellow-100">Innovation & Entrepreneurship</p>
              </div>
            </InView>

            <InView
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewOptions={{ margin: '0px 0px -100px 0px' }}
            >
              <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-amber-500" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Success Stories</div>
                <p className="text-sm text-gray-500 mt-2">Featured & Shared</p>
              </div>
            </InView>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-yellow-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-12">
              Don't miss out on alumni achievements, opportunities, and community updates.
              Subscribe to our newsletter and be part of the conversation.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Bell className="w-5 h-5 mr-2" />
                Subscribe Now
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Share2 className="w-5 h-5 mr-2" />
                Share Newsletter
              </Button>
            </div> */}

            <div className="text-center">
              <p className="text-yellow-100 mb-4">Questions or suggestions for our newsletter?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>newsletter@pes.edu</span>
                </div>
                {/* <div className="flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  <span>Submit Content Ideas</span>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}