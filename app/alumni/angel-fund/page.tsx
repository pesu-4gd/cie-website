'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { 
  DollarSign,
  Heart,
  Users,
  Building2,
  Rocket,
  CheckCircle,
  Globe,
  MessageCircle,
  Mail,
  UserPlus,
  Trophy,
  Lightbulb,
  FileText
} from 'lucide-react';

export default function AlumniAngelFundPage() {
  const fundStats = [
    { label: 'Total Fund Size', value: '₹50Cr+', icon: DollarSign, color: 'green' as const },
    { label: 'Investments Made', value: '25+', icon: Rocket, color: 'blue' as const },
    { label: 'Alumni Investors', value: '100+', icon: Users, color: 'purple' as const },
    { label: 'Portfolio Success Rate', value: '80%', icon: Trophy, color: 'orange' as const }
  ];

  const investmentAreas = [
    {
      title: 'Technology & Innovation',
      description: 'AI, ML, IoT, Blockchain, and emerging technology solutions.',
      icon: Lightbulb,
      examples: ['EdTech platforms', 'FinTech solutions', 'HealthTech innovations', 'Industry 4.0 tools'],
      percentage: '35%'
    },
    {
      title: 'Sustainability & Impact',
      description: 'Clean energy, environmental solutions, and social impact ventures.',
      icon: Globe,
      examples: ['Renewable energy', 'Waste management', 'Sustainable agriculture', 'Social enterprises'],
      percentage: '25%'
    },
    {
      title: 'Healthcare & Biotech',
      description: 'Medical devices, healthcare services, and biotechnology innovations.',
      icon: Heart,
      examples: ['Medical devices', 'Telemedicine', 'Drug discovery', 'Healthcare analytics'],
      percentage: '20%'
    },
    {
      title: 'Business Services',
      description: 'B2B solutions, enterprise software, and professional services.',
      icon: Building2,
      examples: ['SaaS platforms', 'Logistics solutions', 'HR tech', 'Consulting services'],
      percentage: '20%'
    }
  ];

  const portfolioCompanies = [
    {
      name: 'EduTech Innovations',
      sector: 'Education Technology',
      stage: 'Series A',
      investment: '₹2.5Cr',
      impact: '50,000+ students reached',
      growth: '+300% YoY'
    },
    {
      name: 'GreenEnergy Solutions',
      sector: 'Clean Technology',
      stage: 'Seed',
      investment: '₹1.5Cr',
      impact: '1000+ households powered',
      growth: '+250% YoY'
    },
    {
      name: 'HealthCare Analytics',
      sector: 'Healthcare Technology',
      stage: 'Pre-Series A',
      investment: '₹3Cr',
      impact: '100+ hospitals served',
      growth: '+400% YoY'
    }
  ];

  const investmentProcess = [
    {
      step: '1',
      title: 'Application Submission',
      description: 'Startups submit detailed business plans and pitch decks.',
      duration: '1 week'
    },
    {
      step: '2',
      title: 'Initial Screening',
      description: 'Alumni review committee evaluates applications for fit.',
      duration: '2 weeks'
    },
    {
      step: '3',
      title: 'Due Diligence',
      description: 'Comprehensive review of business model, team, and market.',
      duration: '3-4 weeks'
    },
    {
      step: '4',
      title: 'Pitch Presentation',
      description: 'Selected startups present to the alumni investor panel.',
      duration: '1 week'
    },
    {
      step: '5',
      title: 'Investment Decision',
      description: 'Final investment decision and terms negotiation.',
      duration: '2 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-700 overflow-hidden">
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-100 border border-green-400/30">
                <DollarSign className="w-4 h-4 mr-2" />
                Alumni Angel Fund
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Investing in the{' '}
              <span className="block text-green-200">Next Generation</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              The PES Alumni Angel Fund connects successful alumni investors with promising 
              startups, fostering innovation and creating sustainable impact across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Rocket className="w-5 h-5 mr-2" />
                Apply for Funding
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <UserPlus className="w-5 h-5 mr-2" />
                Join as Investor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fund Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fund Performance & Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our alumni-driven angel fund has been making strategic investments in 
              innovative startups while generating sustainable returns and social impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fundStats.map((stat, index) => {
              const IconComponent = stat.icon;
              const colorClasses = {
                green: 'bg-green-100 text-green-600',
                blue: 'bg-blue-100 text-blue-600',
                purple: 'bg-purple-100 text-purple-600',
                orange: 'bg-orange-100 text-orange-600'
              };
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${colorClasses[stat.color]}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We invest in high-potential startups across diverse sectors, leveraging our 
              alumni expertise and industry connections to drive success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {investmentAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                        <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                          {area.percentage}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">{area.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {area.examples.map((example) => (
                          <div key={example} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Companies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our portfolio companies are scaling rapidly and making significant impact 
              across their respective industries.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{company.name}</h3>
                  <span className="inline-block text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full mb-4">
                    {company.sector}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Investment:</span>
                    <span className="text-green-600 font-bold">{company.investment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Stage:</span>
                    <span className="text-gray-900 font-semibold">{company.stage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Growth:</span>
                    <span className="text-emerald-600 font-bold">{company.growth}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 font-medium">Impact: {company.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures thorough evaluation while maintaining 
              efficient timelines for deserving startups.
            </p>
          </motion.div>

          <div className="space-y-8">
            {investmentProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200 ${index % 2 === 1 ? 'text-right' : ''}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600 mb-4">{process.description}</p>
                    <span className="inline-block text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      Duration: {process.duration}
                    </span>
                  </div>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {process.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Whether you're a startup seeking funding or an alumnus looking to invest, 
                we're here to facilitate meaningful partnerships that drive innovation and success.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">For Startups</h3>
                    <p className="text-green-100">Access funding, mentorship, and alumni network</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">For Alumni Investors</h3>
                    <p className="text-green-100">Invest in promising startups and make impact</p>
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
                <h3 className="text-2xl font-bold text-white mb-2">Get Connected</h3>
                <p className="text-green-100">Join our community of investors and innovators</p>
              </div>
              
              <div className="space-y-4">
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100 py-4 rounded-xl font-semibold">
                  <FileText className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
                <Button className="w-full border-2 border-white text-white hover:bg-white hover:text-green-600 py-4 rounded-xl font-semibold bg-transparent">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Join as Investor
                </Button>
                <Button className="w-full border-2 border-white text-white hover:bg-white hover:text-green-600 py-4 rounded-xl font-semibold bg-transparent">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-green-100 mb-4">Questions? Contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <Mail className="w-4 h-4" />
                    <span>angelfund@pes.edu</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white">
                    <MessageCircle className="w-4 h-4" />
                    <span>+91 80 2672 7000</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}