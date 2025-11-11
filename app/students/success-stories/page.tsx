'use client';

import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Rocket,
  Trophy,
  Building2,
  Globe,
  Users,
  TrendingUp,
  Award,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  DollarSign,
  Target,
  Zap,
  Star,
  Code,
  Cpu,
  Brain,
  Shield,
  Music,
  ChefHat,
  Dumbbell
} from 'lucide-react';

export default function StudentSuccessStoriesPage() {
  const studentsColors = SECTION_COLORS.students;

  const successStats = [
    { label: 'Active Startups', value: '50+', icon: Rocket },
    { label: 'Total Funding Raised', value: '₹10Cr+', icon: DollarSign },
    { label: 'Jobs Created', value: '200+', icon: Users },
    { label: 'Industry Recognition', value: '25+', icon: Trophy }
  ];

  const featuredStartups = [
    {
      name: 'PocketCoach',
      tagline: 'AI-Powered Sports Training Platform',
      sector: 'Sports Technology | AI Coaching',
      description: 'PocketCoach is an AI-powered online sports training platform providing expert coaching programs designed by international athletes and trainers. It uses computer vision to enable personalized athlete development and team training solutions.',
      founders: 'Achintya Krishna, Anup Prakash, Omkar Jois',
      foundersTitle: 'PES University, Computer Science & Engineering',
      achievements: [
        'Winner of Karnataka Elevate 2024 (₹30 lakh grant)',
        'Recipient of Start-Up India Seed Fund through IIM Bangalore',
        'Top 30 college startups in Campus Founders cohort',
        'Recognized for impact in AVGC sector'
      ],
      impact: 'Democratizing professional sports coaching, with growing adoption by schools and sports organizations across India.',
      linkedin: 'https://www.linkedin.com/company/pocketcoach-technologies-pvt-ltd/',
      icon: Dumbbell,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Epicure Robotics',
      tagline: 'Automated Food Kiosks with Robotic Technology',
      sector: 'Robotics | Food Automation',
      description: 'Epicure Robotics builds fully automated food kiosks using proprietary gantry-based technology (PARK) for fast, precise, and customizable food preparation. All R&D and manufacturing done in-house in Bangalore.',
      founders: 'Aditya Mehta, Gokul Raj K.S.',
      foundersTitle: 'PES University Alumni',
      achievements: [
        'Funded by 100x.VC',
        'Developing modular, plug-and-play kiosks for fresh meals',
        'Growing network of unmanned kiosks across cities',
        'In-house R&D and manufacturing capabilities'
      ],
      impact: 'Revolutionizing the food service industry by introducing affordable, reliable robotic automation technologies.',
      linkedin: 'https://www.linkedin.com/company/epicure-robotics/',
      icon: ChefHat,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Aalap AI',
      tagline: 'AI for Legal Tech and Carnatic Music Generation',
      sector: 'Artificial Intelligence | Legal Tech & Music AI',
      description: 'Aalap AI developed India\'s first text-to-music Carnatic music generation model and an AI assistant for legal and paralegal functions, trained on instruction data for Indian legal tasks.',
      founders: 'Ajay Rao, Adithya R.',
      foundersTitle: 'PES University, Computer Science & Engineering',
      achievements: [
        'First text-to-Carnatic music generation in India',
        '850+ active users',
        'Academic recognition for AI model performance',
        'Superior performance on Indian legal tasks'
      ],
      impact: 'Bridging tradition and technology in music while revolutionizing legal assistance with specialized AI tools.',
      linkedin: 'https://www.linkedin.com/company/aalapai/',
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Authify',
      tagline: 'Deep Tech for Data Security & Smart City Solutions',
      sector: 'Deep Tech | Data Security & Enforcement Systems',
      description: 'Authify specializes in data security, behavioral infrastructure, and enforcement systems including urban gardening enforcement, traffic management, and wellness solutions.',
      founders: 'Ajay Vasisht, Aneesh Madhav, Akshay Vasisht, Aman Bothra',
      foundersTitle: 'PES University, Computer Science & Engineering',
      achievements: [
        'Broke national revenue milestones in first quarter',
        'Featured on national television',
        'Strong B2B and D2C traction',
        'Partnerships with major enterprises'
      ],
      impact: 'Enhancing smart city initiatives and enterprise data security through innovative behavioral enforcement technology.',
      linkedin: 'https://www.linkedin.com/company/authifytech/',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const otherStartups = [
    {
      name: 'Draft42',
      sector: 'Design & Tech Innovation',
      description: 'Creative solution studio focused on product design, IoT, and cybersecurity, collaborating with research labs and industry mentors.',
      founders: 'PES University Students',
      linkedin: 'https://www.linkedin.com/company/draft42/',
      icon: Code
    },
    {
      name: 'SmartChakra',
      sector: 'IoT & Connected Devices',
      description: 'Developing smart connected devices for wellness, consumer automation, and healthcare verticals.',
      founders: 'Tarakesh Mogallapalli, Manjunath Gangadhar',
      linkedin: 'https://www.linkedin.com/company/smartchakra/',
      icon: Cpu
    },
    {
      name: 'Zeru Finance',
      sector: 'Fintech | Supply Chain',
      description: 'Innovative fintech solutions focusing on supply chain traceability, accountability, and transparent operations.',
      founders: 'PES University Students',
      linkedin: 'https://www.linkedin.com/company/zerufinance/',
      icon: TrendingUp
    }
  ];

  const ecosystemSupport = [
    {
      title: 'Center for Innovation and Entrepreneurship (CIE)',
      description: 'Providing mentorship, incubation programs, and comprehensive startup support',
      icon: Lightbulb,
      features: [
        'Expert mentorship programs',
        'Incubation facilities',
        'Industry connections',
        'Pitch preparation support'
      ]
    },
    {
      title: 'PESU Venture Labs',
      description: 'Offering seed funding, investor connections, and access to industry networks',
      icon: Rocket,
      features: [
        'Seed funding opportunities',
        'Investor network access',
        'Business development support',
        'Market entry strategies'
      ]
    },
    {
      title: 'Government Support Programs',
      description: 'Access to national and state-level startup initiatives and grants',
      icon: Building2,
      features: [
        'Start-Up India benefits',
        'Karnataka Elevate grants',
        'NASSCOM partnerships',
        'Government scheme access'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#2B9EB3]">
        <InteractiveHexagonBackground
          primaryColor={studentsColors.hero.background}
          accentColor={studentsColors.hero.hexagonAccent}
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30">
                <Trophy className="w-4 h-4 mr-2" />
                Student Success Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              From Campus to{' '}
              <span className="block text-yellow-300">Unicorn Dreams</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how PES University students are building innovative startups that are
              transforming industries and creating impact across India and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Startup Ecosystem Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our student entrepreneurs are creating real-world impact through innovative
              solutions and successful ventures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-teal-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Startups Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the student-led startups that have gained national recognition,
              funding, and are making significant industry impact.
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredStartups.map((startup, index) => {
              const IconComponent = startup.icon;
              return (
                <motion.div
                  key={startup.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Startup Icon/Visual */}
                    <div className={`lg:col-span-1 bg-gradient-to-br ${startup.color} p-12 flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">{startup.name}</h3>
                        <p className="text-white/90 text-sm font-medium">{startup.tagline}</p>
                      </div>
                    </div>

                    {/* Startup Details */}
                    <div className="lg:col-span-2 p-8 lg:p-12">
                      <div className="mb-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 mb-4">
                          {startup.sector}
                        </span>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {startup.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {startup.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-teal-50 p-4 rounded-xl border border-teal-200 mb-6">
                        <p className="text-sm text-teal-900">
                          <span className="font-semibold">Impact:</span> {startup.impact}
                        </p>
                      </div>

                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-semibold text-gray-900">Founders:</span> {startup.founders}
                        </p>
                        <p className="text-sm text-gray-600">
                          {startup.foundersTitle}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-xl font-semibold"
                          onClick={() => window.open(startup.linkedin, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Startups Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Student Ventures
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Additional innovative startups founded by PES University students,
              each making their mark in their respective industries.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {otherStartups.map((startup, index) => {
              const IconComponent = startup.icon;
              return (
                <motion.div
                  key={startup.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{startup.name}</h3>
                  <span className="inline-block text-sm font-medium text-teal-600 mb-4">
                    {startup.sector}
                  </span>
                  <p className="text-gray-600 mb-6">
                    {startup.description}
                  </p>
                  <div className="mb-6 pb-6 border-t border-gray-200 pt-6">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">Founded by:</span> {startup.founders}
                    </p>
                  </div>
                  <Button 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold"
                    onClick={() => window.open(startup.linkedin, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supporting Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These startups benefit from PES University's robust entrepreneurial ecosystem
              providing mentorship, funding, and industry connections.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ecosystemSupport.map((support, index) => {
              const IconComponent = support.icon;
              return (
                <motion.div
                  key={support.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{support.title}</h3>
                  <p className="text-gray-600 mb-6">{support.description}</p>
                  <ul className="space-y-3">
                    {support.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-12">
              Join PES University's thriving entrepreneurial ecosystem and transform
              your innovative ideas into successful ventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Rocket className="w-5 h-5 mr-2" />
                Apply for Incubation
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Users className="w-5 h-5 mr-2" />
                Connect with CIE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
