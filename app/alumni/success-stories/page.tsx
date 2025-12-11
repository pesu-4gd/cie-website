'use client';

import { useState } from 'react';
import Image from 'next/image';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Rocket,
  Trophy,
  Building2,
  Users,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ExternalLink,
  DollarSign,
  Code,
  Cpu,
  Brain,
  Shield,
  ChefHat,
  Dumbbell
} from 'lucide-react';

export default function AlumniSuccessStoriesPage() {
  const alumniColors = SECTION_COLORS.alumni;
  const [selectedStartupIndex, setSelectedStartupIndex] = useState(0);

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
      logo: '/assets/pocket-coach.jpg',
      color: 'from-amber-500 to-yellow-600'
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
      logo: '/assets/epicure-robotics.jpg',
      color: 'from-yellow-500 to-amber-600'
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
      logo: '/assets/aalap-ai.jpg',
      color: 'from-amber-400 to-yellow-500'
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
      logo: '/assets/authify.jpg',
      color: 'from-yellow-600 to-amber-700'
    }
  ];

  const otherStartups = [
    {
      name: 'Draft42',
      sector: 'Design & Tech Innovation',
      description: 'Creative solution studio focused on product design, IoT, and cybersecurity, collaborating with research labs and industry mentors.',
      founders: 'PES University Students',
      linkedin: 'https://www.linkedin.com/company/draft42/',
      icon: Code,
      logo: '/assets/draft42.jpg'
    },
    {
      name: 'SmartChakra',
      sector: 'IoT & Connected Devices',
      description: 'Developing smart connected devices for wellness, consumer automation, and healthcare verticals.',
      founders: 'Tarakesh Mogallapalli, Manjunath Gangadhar',
      linkedin: 'https://www.linkedin.com/company/smartchakra/',
      icon: Cpu,
      logo: '/assets/smartchakra.jpg'
    },
    {
      name: 'Zeru Finance',
      sector: 'Fintech | Supply Chain',
      description: 'Innovative fintech solutions focusing on supply chain traceability, accountability, and transparent operations.',
      founders: 'PES University Students',
      linkedin: 'https://www.linkedin.com/company/zerufinance/',
      icon: TrendingUp,
      logo: '/assets/zeru.jpg'
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
                <Trophy className="w-4 h-4 mr-2" />
                Alumni Success Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              From Campus to{' '}
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Unicorn Dreams</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how PES University alumni are building innovative startups that are
              transforming industries and creating impact across India and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Startup Ecosystem Impact and Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Startup Ecosystem Impact and Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our alumni entrepreneurs are creating real-world impact through innovative solutions and successful ventures. 
              Meet the alumni-led startups that have gained national recognition, funding, and are making significant industry impact.
            </p>
          </motion.div>

          {/* Vertical Tabs Layout */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Vertical Tabs */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl border border-gray-200 p-4 sticky top-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 px-2">Companies</h3>
                <div className="space-y-2">
                  {featuredStartups.map((startup, index) => {
                    return (
                      <button
                        key={startup.name}
                        onClick={() => setSelectedStartupIndex(index)}
                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                          selectedStartupIndex === index
                            ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-lg'
                            : 'hover:bg-yellow-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${
                            selectedStartupIndex === index
                              ? 'bg-white/20'
                              : 'bg-white'
                          }`}>
                            <Image
                              src={startup.logo}
                              alt={startup.name}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`font-semibold text-sm ${
                              selectedStartupIndex === index ? 'text-white' : 'text-gray-900'
                            }`}>
                              {startup.name}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Content Area - Selected Startup Details */}
            <div className="lg:col-span-3">
              <motion.div
                key={selectedStartupIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl"
              >
                {(() => {
                  const startup = featuredStartups[selectedStartupIndex];
                  return (
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Startup Logo/Visual */}
                      <div className={`lg:col-span-1 bg-gradient-to-br ${startup.color} p-12 flex items-center justify-center`}>
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-white flex items-center justify-center p-4 shadow-lg">
                            <Image
                              src={startup.logo}
                              alt={startup.name}
                              width={120}
                              height={120}
                              className="object-contain"
                            />
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-2">{startup.name}</h3>
                          <p className="text-white/90 text-sm font-medium">{startup.tagline}</p>
                        </div>
                      </div>

                      {/* Startup Details */}
                      <div className="lg:col-span-2 p-8 lg:p-12">
                        <div className="mb-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-50 text-amber-800 mb-4">
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

                        <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 mb-6">
                          <p className="text-sm text-amber-900">
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
                            className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-2 rounded-xl font-semibold"
                            onClick={() => window.open(startup.linkedin, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View LinkedIn
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </div>
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
              More Alumni Ventures
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Additional innovative startups founded by PES University alumni,
              each making their mark in their respective industries.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {otherStartups.map((startup, index) => {
              return (
                <motion.div
                  key={startup.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 border border-gray-200 p-3">
                    <Image
                      src={startup.logo}
                      alt={startup.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{startup.name}</h3>
                  <span className="inline-block text-sm font-medium text-amber-600 mb-4">
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
                    className="w-full bg-amber-400 hover:bg-amber-500 text-white py-3 rounded-xl font-semibold"
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
                  <IconComponent className="w-12 h-12 text-amber-500 mb-6" />
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
      <section className="py-20 bg-[#00338d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-12">
              Join PES University's thriving entrepreneurial ecosystem and transform
              your innovative ideas into successful ventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
                onClick={() => window.location.href = 'mailto:cieinfo@pes.edu?subject=Application%20for%20Incubation'}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Apply for Incubation
              </Button>
              <Button 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
                onClick={() => window.location.href = 'mailto:cieinfo@pes.edu?subject=Connect%20with%20CIE'}
              >
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
