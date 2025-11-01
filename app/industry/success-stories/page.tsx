'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { 
  Award,
  Building2,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  Lightbulb,
  Rocket,
  Globe,
  Handshake,
  Briefcase,
  FileText,
  MessageCircle,
  Mail
} from 'lucide-react';

export default function IndustrySuccessStoriesPage() {
  const successStories = [
    {
      company: 'TechFlow Solutions',
      industry: 'Manufacturing Technology',
      partnership: 'Technology Development Partnership',
      year: '2023',
      story: 'Collaborated with CIE to develop AI-powered workflow optimization platform. The partnership resulted in a breakthrough solution that improved manufacturing efficiency by 40%.',
      impact: [
        '40% improvement in manufacturing efficiency',
        '50+ enterprise clients acquired',
        '₹25 Cr annual revenue growth',
        '100+ jobs created'
      ],
      quote: 'The collaboration with CIE brought fresh perspectives and cutting-edge research that transformed our business approach.',
      spokesperson: 'Rajesh Kumar, CTO',
      image: '/placeholder-company-1.jpg',
      featured: true
    },
    {
      company: 'GreenEnergy Innovations',
      industry: 'Renewable Energy',
      partnership: 'Research Collaboration',
      year: '2023',
      story: 'Joint research project on solar panel efficiency optimization led to breakthrough technology that increased energy output by 25%.',
      impact: [
        '25% increase in solar panel efficiency',
        'Patent filed for new technology',
        '₹15 Cr investment secured',
        'Expansion to 5 new markets'
      ],
      quote: 'CIE\'s research expertise helped us achieve what we thought was impossible in renewable energy efficiency.',
      spokesperson: 'Dr. Priya Sharma, R&D Director',
      image: '/placeholder-company-2.jpg',
      featured: false
    },
    {
      company: 'HealthTech Dynamics',
      industry: 'Healthcare Technology',
      partnership: 'Talent Pipeline & Innovation',
      year: '2022',
      story: 'Recruited top talent from CIE and collaborated on developing telemedicine platform that serves rural communities.',
      impact: [
        '10,000+ patients served monthly',
        '200+ rural clinics connected',
        '₹50 Cr Series B funding',
        '15 CIE graduates hired'
      ],
      quote: 'The talent and innovation pipeline from CIE has been instrumental in our rapid growth and social impact.',
      spokesperson: 'Amit Patel, CEO',
      image: '/placeholder-company-3.jpg',
      featured: false
    },
    {
      company: 'FinSecure Technologies',
      industry: 'Financial Technology',
      partnership: 'Startup Incubation',
      year: '2022',
      story: 'Started as a student project at CIE, grew into a successful fintech company providing blockchain-based security solutions.',
      impact: [
        '500+ financial institutions served',
        '₹100 Cr valuation achieved',
        '200+ employees globally',
        'Expansion to 12 countries'
      ],
      quote: 'From classroom to boardroom - CIE provided the foundation for our entrepreneurial journey.',
      spokesperson: 'Neha Gupta, Founder & CEO',
      image: '/placeholder-company-4.jpg',
      featured: true
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Development',
      description: 'Joint development of innovative technologies and solutions',
      icon: Lightbulb,
      successCount: '15+',
      examples: ['AI/ML solutions', 'IoT platforms', 'Automation systems']
    },
    {
      title: 'Research Collaboration',
      description: 'Academic-industry research partnerships',
      icon: FileText,
      successCount: '25+',
      examples: ['Published papers', 'Patent applications', 'Breakthrough research']
    },
    {
      title: 'Talent Pipeline',
      description: 'Recruitment and talent development programs',
      icon: Users,
      successCount: '500+',
      examples: ['Graduate placements', 'Internship programs', 'Skill development']
    },
    {
      title: 'Startup Incubation',
      description: 'Supporting student startups to become successful companies',
      icon: Rocket,
      successCount: '50+',
      examples: ['Funding support', 'Mentorship', 'Market access']
    }
  ];

  const impactMetrics = [
    { label: 'Companies Partnered', value: '100+', icon: Building2 },
    { label: 'Jobs Created', value: '2,000+', icon: Users },
    { label: 'Revenue Generated', value: '₹500Cr+', icon: DollarSign },
    { label: 'Patents Filed', value: '75+', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 to-emerald-700">
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-100 border border-green-400/30">
                <Award className="w-4 h-4 mr-2" />
                Success Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Transforming Ideas into
              <span className="block text-green-200">Industry Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how our industry partnerships have created breakthrough innovations, 
              driven business growth, and generated real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
              >
                <Star className="w-5 h-5 mr-2" />
                Read Success Stories
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Start Your Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that showcase the real-world impact of our industry collaborations 
              and the success of our partnership ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
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
              Real partnerships, real results. Read how industry leaders have achieved 
              breakthrough success through collaboration with CIE.
            </p>
          </motion.div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gray-200 aspect-video rounded-3xl flex items-center justify-center mb-6">
                    <Building2 className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {story.featured && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Featured Success
                    </div>
                  )}
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{story.company}</h3>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                      {story.industry}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800">
                      {story.partnership}
                    </span>
                    <span>{story.year}</span>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6">{story.story}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Impact:</h4>
                    <ul className="space-y-2">
                      {story.impact.map((impact, impactIndex) => (
                        <li key={impactIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <blockquote className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-xl mb-6">
                    <p className="text-gray-700 italic mb-2">"{story.quote}"</p>
                    <cite className="text-sm font-medium text-green-800">— {story.spokesperson}</cite>
                  </blockquote>
                  
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Full Story
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Successful Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the different ways companies have achieved success through 
              collaboration with CIE across various partnership models.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-green-600">{type.successCount}</span>
                    <p className="text-sm text-gray-500">Success Stories</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-xs text-gray-600">
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-12">
              Join the growing list of companies that have achieved breakthrough success 
              through partnership with CIE. Your success story could be next.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Define Goals</h3>
                <p className="text-green-100">We work with you to set clear partnership objectives</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Collaborate</h3>
                <p className="text-green-100">Access our talent and research expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Achieve Success</h3>
                <p className="text-green-100">Realize measurable business impact</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Your Partnership
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
            
            <div className="mt-8">
              <p className="text-green-100 mb-4">Ready to discuss your partnership goals?</p>
              <Button 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl"
                onClick={() => window.location.href = 'mailto:partnerships@pes.edu'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Partnership Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}