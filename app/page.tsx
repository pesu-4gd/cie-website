'use client';

import { Button, CIEPrimaryButton, CIESecondaryButton } from '@/components/design-system';
import { ModernCard, StatsCard, EventCard, NewsCard } from '@/components/ui/modern-card';
import { SectionLayout, SectionHeader, GridLayout, CTASection } from '@/components/ui/section-layout';
import { ArrowRight, Users, Building, Building2, GraduationCap, Lightbulb, Target, Award, Play, Sparkles, Rocket, Calendar, Briefcase, BookOpen, TrendingUp, Star, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: 'url(/assets/creative-1-1.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Empowering Innovation Since 2018
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white">INSPIRE.</span>
              <span className="block text-blue-400">IDEATE.</span>
              <span className="block text-orange-400">INNOVATE.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Empowering student innovators to transform ideas into reality through entrepreneurship, 
              technology, and meaningful impact at PES University.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                EXPLORE NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm flex items-center">
                <Play className="mr-2 w-5 h-5" />
                WATCH OUR STORY
              </button>
            </div>
            
            {/* Stats Preview */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-300 mt-1">Students Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">50+</div>
                <div className="text-sm text-gray-300 mt-1">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">₹2Cr+</div>
                <div className="text-sm text-gray-300 mt-1">Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100+</div>
                <div className="text-sm text-gray-300 mt-1">Industry Partners</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Ready to Change the World Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5" />
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Target className="w-4 h-4 mr-2" />
                Your Journey Starts Here
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Change the World?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a community of innovators, entrepreneurs, and changemakers who are building the future through technology and impact.
            </p>
          </motion.div>

          {/* Navigation Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Students Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = '/students'}
            >
              <div className="bg-white rounded-3xl h-[28rem] hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-200 relative overflow-hidden">
                {/* Image Half */}
                <div className="h-1/2 w-full relative overflow-hidden">
                  <img 
                    src="/assets/Learn-1-1.jpg" 
                    alt="Students collaborating" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                </div>
                
                {/* Content Half */}
                <div className="h-1/2 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                       <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                         <GraduationCap className="w-5 h-5 text-blue-600" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-900">Students</h3>
                     </div>
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Explore programs, events, and opportunities designed to help student innovators transform ideas into reality.
                    </p>
                  </div>
                  <button className="flex items-center justify-between w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 group-hover:text-blue-700 rounded-lg transition-all duration-200 group-hover:shadow-md">
                    <span className="font-semibold text-sm">Explore Programs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Industry Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = '/industry'}
            >
              <div className="bg-white rounded-3xl h-[28rem] hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-200 relative overflow-hidden">
                {/* Image Half */}
                <div className="h-1/2 w-full relative overflow-hidden">
                  <img 
                    src="/assets/experience-1.jpg" 
                    alt="Industry professionals" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent" />
                </div>
                
                {/* Content Half */}
                <div className="h-1/2 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                       <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                         <Building2 className="w-5 h-5 text-orange-600" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-900">Industry</h3>
                     </div>
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Partner with us for collaborations, job postings, and innovation opportunities that drive meaningful change together.
                    </p>
                  </div>
                  <button className="flex items-center justify-between w-full px-4 py-2 bg-orange-50 hover:bg-orange-100 text-orange-600 group-hover:text-orange-700 rounded-lg transition-all duration-200 group-hover:shadow-md">
                    <span className="font-semibold text-sm">View Opportunities</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Alumni Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = '/alumni'}
            >
              <div className="bg-white rounded-3xl h-[28rem] hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-200 relative overflow-hidden">
                {/* Image Half */}
                <div className="h-1/2 w-full relative overflow-hidden">
                  <img 
                    src="/assets/creative-1-1.jpg" 
                    alt="Alumni network" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
                </div>
                
                {/* Content Half */}
                <div className="h-1/2 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                       <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                         <Users className="w-5 h-5 text-purple-600" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-900">Alumni</h3>
                     </div>
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Stay connected with our thriving network, give back to the community, and access exclusive alumni resources.
                    </p>
                  </div>
                  <button className="flex items-center justify-between w-full px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 group-hover:text-purple-700 rounded-lg transition-all duration-200 group-hover:shadow-md">
                    <span className="font-semibold text-sm">Connect Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* CIE By Numbers Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <TrendingUp className="w-4 h-4 mr-2" />
                Our Impact in Numbers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              CIE <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">By Numbers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since 2018, we've been empowering students to transform ideas into reality. Here's our journey in numbers.
            </p>
          </motion.div>

          {/* Stats Grid - Centered Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2159+</div>
              <div className="text-sm text-gray-700 font-medium">Students Graduated</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">41+</div>
              <div className="text-sm text-gray-700 font-medium">Successful Cohorts</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-700 font-medium">Startups Launched</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">₹2Cr+</div>
              <div className="text-sm text-gray-700 font-medium">Funding Raised</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-sm text-gray-700 font-medium">Industry Partners</div>
            </div>
          </motion.div>

          {/* Outcomes Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Transforming <span className="text-blue-600">Ideas into Impact</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our comprehensive ecosystem nurtures innovation at every stage, from ideation to market success. 
                  We provide the tools, mentorship, and resources needed to turn student dreams into reality.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
                    <div className="text-sm text-gray-600">Industry Programs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/assets/CIE-Outcomes.jpg" 
                  alt="CIE Outcomes" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CIE Journey Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                <Calendar className="w-4 h-4 mr-2" />
                Our Journey Since 2018
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CIE Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming a leading innovation hub, discover how CIE has evolved to empower student entrepreneurs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl mb-16"
          >
            <img 
              src="/assets/CIE-Journey-2018-to-2023.png" 
              alt="CIE Journey 2018 to 2023" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* We Are Innovative Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              WE ARE INNOVATIVE
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Pioneering the Future of
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Innovation & Entrepreneurship
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              At CIE, we've built a comprehensive ecosystem that transforms ideas into reality. From specialized courses 
              to industry partnerships, we provide everything students need to become tomorrow's innovators and entrepreneurs.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Specialized Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10 Industry Programs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive programs designed with industry input, covering everything from entrepreneurship 
                fundamentals to advanced technical skills in emerging technologies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  Lean Startup Methodology
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  Deep Learning & ML
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  Product Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  BIOS Firmware Development
                </li>
              </ul>
            </motion.div>

            {/* Student Success */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our students consistently achieve remarkable success through our comprehensive support system, 
                from mentorship to real-world project experience.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                  2159 Students Graduated
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                  41 Successful Cohorts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                  57 Harvard Mentees
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                  50 Industry Internships
                </li>
              </ul>
            </motion.div>

            {/* Industry Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our programs have gained significant recognition from industry leaders, resulting in substantial 
                funding, awards, and placement opportunities for our students.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                  ₹6.5M+ Industry Grants
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                  1500+ Students in Programs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                  12 Industry Placements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                  Global Recognition
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Alumni Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Alumni Success Stories
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Our graduates are making waves across industries, from successful startups to leadership roles in top companies.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    AS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Arjun Sharma</h3>
                    <p className="text-gray-600">CEO, TechFlow Solutions</p>
                    <p className="text-sm text-blue-600">CIE Batch 2019</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "CIE provided me with the perfect blend of technical knowledge and entrepreneurial mindset. 
                  The mentorship and real-world projects prepared me to launch my own startup."
                </p>

              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    PK
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Priya Krishnan</h3>
                    <p className="text-gray-600">Product Manager, Google</p>
                    <p className="text-sm text-blue-600">CIE Batch 2020</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "The industry exposure and hands-on projects at CIE gave me a competitive edge. 
                  I landed my dream job at Google right after graduation."
                </p>

              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="/assets/cie-alumni.png" 
                alt="CIE Alumni Success" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* We Are Driven by a Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              We Are Driven by a Vision
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              To create a world where innovation knows no bounds, where every idea has the potential to become reality, 
              and where entrepreneurship is the driving force behind positive global change.
            </motion.p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl">
                Learn More
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Latest Updates Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Latest Updates
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Stay informed with the latest news, events, and achievements from CIE
            </motion.p>
          </div>
        
          <div className="space-y-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="flex-1">
                <div className="text-sm text-blue-600 font-medium mb-2">Success Story</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">CIE Startup Raises $2M in Series A</h3>
                <p className="text-gray-600 leading-relaxed">TechFlow, incubated at CIE, successfully closes Series A funding round led by prominent VCs. This milestone represents the growing success of our startup ecosystem and the quality of ventures emerging from our programs.</p>
              </div>
              <div className="md:text-right">
                <div className="text-sm text-gray-500 mb-2">January 15, 2024</div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="flex-1">
                <div className="text-sm text-green-600 font-medium mb-2">Upcoming Event</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation Summit 2024</h3>
                <p className="text-gray-600 leading-relaxed">Join industry leaders, entrepreneurs, and students for our annual innovation summit. Network with top innovators, attend keynote sessions, and participate in hands-on workshops designed to accelerate your entrepreneurial journey.</p>
              </div>
              <div className="md:text-right">
                <div className="text-sm text-gray-500 mb-2">February 20, 2024 • 9:00 AM - 6:00 PM</div>
                <div className="text-sm text-gray-400 mb-4">PES University Campus</div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-3xl border border-purple-200 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="flex-1">
                <div className="text-sm text-purple-600 font-medium mb-2">Announcement</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">New AI Research Lab Launched</h3>
                <p className="text-gray-600 leading-relaxed">CIE announces the launch of its new AI Research Lab in partnership with leading tech companies. This state-of-the-art facility will provide students and researchers with cutting-edge resources to explore artificial intelligence applications.</p>
              </div>
              <div className="md:text-right">
                <div className="text-sm text-gray-500 mb-2">January 10, 2024</div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CIE Ignite Highlights Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                <Sparkles className="w-4 h-4 mr-2" />
                Flagship Program
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">CIE Ignite</span> Ideathon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into reality through our flagship semester-long startup challenge, exclusively designed for 2nd-year students.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Join CIE Ignite?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Bridge Theory & Practice</h4>
                      <p className="text-gray-600 text-sm">Turn EIE learnings into actionable solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Interdisciplinary Collaboration</h4>
                      <p className="text-gray-600 text-sm">Build diverse teams with peers from all streams</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Win Big</h4>
                      <p className="text-gray-600 text-sm">Compete for cash prizes, internships, and startup grants</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Program Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">4</div>
                    <div className="text-sm opacity-90">Competition Stages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">₹25K+</div>
                    <div className="text-sm opacity-90">Prize Money</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">220+</div>
                    <div className="text-sm opacity-90">Students Participated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">40+</div>
                    <div className="text-sm opacity-90">Teams Formed</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Success Stories</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Botzilla - AI-powered automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>GlowGenics - Sustainable beauty tech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Team Netra - Computer vision solutions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              Join CIE Ignite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Industry Partners Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Building2 className="w-4 h-4 mr-2" />
                Trusted Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Industry <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Collaborating with leading organizations to provide students with real-world experience, mentorship, and career opportunities.
            </p>
          </motion.div>

          {/* Partnership Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm text-gray-700 font-medium">Industry Partners</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">₹6.5M+</div>
              <div className="text-sm text-gray-700 font-medium">Industry Grants</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-700 font-medium">Internship Opportunities</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-sm text-gray-700 font-medium">Active Collaborations</div>
            </div>
          </motion.div>

          {/* Partnership Opportunities */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sponsorship</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Support CIE events like hackathons, CIE Ignite Ideathon, and E-Summit to showcase your brand and connect with talented students.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  Event Sponsorship
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  CIE Ignite Sponsorship
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  Startup Funding
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mentorship</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Guide student teams through the CIE Industry Mentors Program, sharing expertise and helping shape the next generation of innovators.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                  Industry IM Program
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                  Workshops & AMAs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                  Project Guidance
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Collaboration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Partner with our Centers of Excellence for cutting-edge research in AI, IoT, cybersecurity, and emerging technologies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                  CPIP Program
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                  CoE Collaboration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                  Joint Research
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partnership Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Cisco ThingQbator</h4>
                <p className="text-gray-600 text-sm">NeuRoar secured ₹5 Lakh funding through Cisco partnership, demonstrating successful industry collaboration.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Intel Partnership</h4>
                <p className="text-gray-600 text-sm">7-month student contest with Intel technologists mentoring PES students on real-world challenges.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Beckn-ONIX</h4>
                <p className="text-gray-600 text-sm">Successful collaboration enabling students to work on open network protocols and digital commerce.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Start Your Innovation Journey?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            >
              Join thousands of students, entrepreneurs, and industry leaders who are shaping the future through CIE.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                Explore Programs
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
