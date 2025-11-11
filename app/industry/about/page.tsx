'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { 
  Building2,
  Users,
  Target,
  Award,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  Globe,
  FlaskConical,
  MessageCircle,
  Mail,
  Handshake,
  Rocket
} from 'lucide-react';

export default function IndustryAboutPage() {
  const collaborationStats = [
    { label: 'Industry Partners', value: '50+', icon: Building2 },
    { label: 'Active Projects', value: '25+', icon: Target },
    { label: 'Students Engaged', value: '500+', icon: Users },
    { label: 'Success Rate', value: '90%', icon: Award }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partnerships',
      description: 'Collaborate on cutting-edge research and development projects with our talented students and faculty.',
      icon: FlaskConical,
      benefits: [
        'Access to emerging technologies',
        'Research collaboration opportunities',
        'Innovation labs and testing facilities',
        'Academic expertise and consultation'
      ]
    },
    {
      title: 'Talent Pipeline',
      description: 'Connect with skilled graduates and interns trained in latest technologies and entrepreneurial thinking.',
      icon: Users,
      benefits: [
        'Direct recruitment opportunities',
        'Internship programs',
        'Industry-ready graduates',
        'Continuous talent development'
      ]
    },
    {
      title: 'Innovation Initiatives', 
      description: 'Partner with CIE to sponsor innovation challenges, hackathons, and startup competitions.',
      icon: Lightbulb,
      benefits: [
        'Brand visibility at events',
        'Access to innovative solutions',
        'Early-stage startup partnerships',
        'Community engagement opportunities'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30">
                <Building2 className="w-4 h-4 mr-2" />
                Industry Collaboration
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Partnering for
              <span className="block bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">Innovation Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              CIE connects industry leaders with talented students and cutting-edge research to drive innovation, 
              solve real-world challenges, and create meaningful partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:cieinfo@pes.edu"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-semibold"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Start Partnership
              </a>
              <Link
                href="/industry/collaborations"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
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
              Our industry collaborations have created significant value for both partners and students, 
              driving innovation and fostering entrepreneurial success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore various ways to collaborate with CIE and leverage our ecosystem 
              of innovation, talent, and research excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
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
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner with CIE Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Partner with CIE?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                CIE offers a unique ecosystem that bridges the gap between industry needs 
                and academic innovation, creating value for all stakeholders.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Focus</h3>
                    <p className="text-gray-600">Access cutting-edge research and innovative solutions tailored to your industry challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Talent Access</h3>
                    <p className="text-gray-600">Connect with skilled students and graduates trained in emerging technologies and entrepreneurial thinking.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">Join successful partnerships that have driven innovation, created value, and achieved measurable impact.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Collaborate?</h3>
                <p className="text-gray-600">Let's discuss how we can create a partnership that drives innovation.</p>
              </div>
              
              <div className="space-y-4">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Partnership Team
                </Button>
                <Button className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-4 rounded-xl font-semibold bg-transparent">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-400">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Partnership Journey
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Join leading organizations that have partnered with CIE to drive innovation, 
              access talent, and create meaningful impact in their industries.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
                <p className="text-blue-100">industry@pes.edu</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
                <p className="text-blue-100">+91 80 2672 7000</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Visit Us</h3>
                <p className="text-blue-100">PES University, Bangalore</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started Today
              </Button> */}
              <a
                href="mailto:cieprogram@pes.edu"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-orange/20"
              >
                <Globe className="w-5 h-5 mr-2" />
                Explore Opportunities
              </a>
            </div>
            
            <div className="mt-8">
              <p className="text-blue-100 mb-4">Questions? We're here to help.</p>
              <Button 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl"
                onClick={() => window.location.href = 'mailto:industry@pes.edu'}
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
