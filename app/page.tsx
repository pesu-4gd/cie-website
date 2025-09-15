'use client';

import { Button } from '@/components/design-system';
import { ArrowRight, Users, Building2, GraduationCap, Lightbulb, Target, Award, Play, Sparkles, Rocket, Calendar, Briefcase, BookOpen, TrendingUp, Star, Globe, ChevronRight, BarChart3, Zap, X, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAnnouncementPopup, setShowAnnouncementPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnouncementPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Compact Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: 'url(/assets/creative-1-1.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        {/* Compact Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-pes-navy/20 text-white border border-pes-navy/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Empowering Innovation Since 2018
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="block"><span className="text-[#383567]">Ideate</span> <span className="text-white">•</span> <span className="text-[#e75a2d]">Innovate</span> <span className="text-white">•</span> <span className="text-[#3999c2]">Inspire</span></span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed">
              Transform ideas into reality through entrepreneurship, technology, and meaningful impact at PES University.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <button 
                onClick={() => window.location.href = '/students/programs'}
                className="bg-pes-navy hover:bg-pes-navy-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                EXPLORE NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => window.location.href = '/about'}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                WATCH STORY
              </button>
            </div>
            
            {/* Quick Stats - Compact Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">2159+</div>
                <div className="text-xs text-gray-300">Students</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-300">Startups</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">₹2Cr+</div>
                <div className="text-xs text-gray-300">Funding</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-xs text-gray-300">Partners</div>
              </div>
            </div>
          </motion.div>
        </div>

       
      </section>

      {/* Creative Bottom-Right Corner Popup */}
      {showAnnouncementPopup && (
        <motion.div
          initial={{ opacity: 0, x: 400, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 400, y: 100 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-80"
        >
          <div className="bg-gradient-to-br from-[#3999c2] via-[#383461] to-[#e75a2d] rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            {/* Header with close button */}
            <div className="relative p-4 pb-2">
              <button
                onClick={() => setShowAnnouncementPopup(false)}
                className="absolute top-3 right-3 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3 text-white" />
              </button>
              
              {/* Animated bell icon */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">New Updates!</h3>
                  <p className="text-white/80 text-xs">CIE Announcements</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-3">
                <p className="text-white/90 text-sm leading-relaxed">
                  🚀 Don't miss out on the latest opportunities, events, and important notices from CIE!
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => window.location.href = '/announcements'}
                  className="flex-1 bg-[#3999c2] text-gray-100 hover:bg-[#383461] px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center"
                >
                  <Calendar className="w-4 h-4 mr-1" />
                  View All
                </button>
                <button
                  onClick={() => setShowAnnouncementPopup(false)}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold text-sm transition-colors"
                >
                  Later
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      )}

      {/* Navigation Cards - Compact Design */}
      <section className="py-8 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Change the World?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a community of innovators building the future through technology and impact.
            </p>
          </motion.div>

          {/* Compact Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Students Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = '/students'}
            >
              <div className="bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-56">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Students</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Explore programs, events, and opportunities designed to help student innovators transform ideas into reality.
                </p>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Industry Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = '/industry'}
            >
              <div className="bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-56">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Industry</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Partner with us for collaborations, job postings, and innovation opportunities that drive meaningful change.
                </p>
                <button className="flex items-center text-orange-600 hover:text-orange-700 font-semibold">
                  <span>View Opportunities</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Alumni Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = '/alumni'}
            >
              <div className="bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-56">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Alumni</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Stay connected with our thriving network, give back to the community, and access exclusive resources.
                </p>
                <button className="flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                  <span>Connect Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section - Main Information */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Discover <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CIE</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Explore our impact, programs, and success stories through interactive content tabs.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium">
              <ArrowRight className="w-4 h-4 animate-bounce" />
              <span>Click tabs below to explore different sections</span>
              <ArrowRight className="w-4 h-4 animate-bounce" style={{animationDelay: '0.5s'}} />
            </div>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <TabsList className="inline-flex h-11 items-center justify-center rounded-2xl bg-white p-1 shadow-lg border border-gray-200">
                <TabsTrigger 
                  value="overview" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-blue-50 hover:text-blue-700"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Overview</span>
                  <span className="sm:hidden">Stats</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="programs" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-green-50 hover:text-green-700"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Programs</span>
                  <span className="sm:hidden">Learn</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="ignite" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-orange-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-orange-50 hover:text-orange-700"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">CIE Ignite</span>
                  <span className="sm:hidden">Ignite</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="partners" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-purple-50 hover:text-purple-700"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Partners</span>
                  <span className="sm:hidden">Work</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="updates" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-yellow-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-yellow-50 hover:text-yellow-700"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Updates</span>
                  <span className="sm:hidden">News</span>
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    CIE <span className="text-blue-600">By Numbers</span>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Since 2018, we've been empowering students to transform ideas into reality. Here's our impact in numbers.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">2159+</div>
                      <div className="text-sm text-gray-700">Students Graduated</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">41+</div>
                      <div className="text-sm text-gray-700">Cohorts</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                      <div className="text-sm text-gray-700">Startups</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">₹2Cr+</div>
                      <div className="text-sm text-gray-700">Funding</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/assets/CIE-Outcomes.jpg" 
                    alt="CIE Outcomes" 
                    className="w-full h-auto object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Programs Tab */}
            <TabsContent value="programs" className="space-y-4">
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">10 Industry Programs</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive programs designed with industry input, from entrepreneurship fundamentals to advanced tech skills.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                      Lean Startup Methodology
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                      Deep Learning & ML
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Student Excellence</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Our students consistently achieve remarkable success through comprehensive support and mentorship.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                      57 Harvard Mentees
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                      50 Industry Internships
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Industry Recognition</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Significant recognition from industry leaders, resulting in substantial funding and opportunities.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                      ₹6.5M+ Industry Grants
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                      Global Recognition
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* CIE Ignite Tab */}
            <TabsContent value="ignite" className="space-y-4">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Flagship Program
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">CIE Ignite</span> Ideathon
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Transform your ideas into reality through our flagship semester-long startup challenge, exclusively for 2nd-year students.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Bridge Theory & Practice</h5>
                        <p className="text-gray-600 text-sm">Turn EIE learnings into actionable solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Interdisciplinary Teams</h5>
                        <p className="text-gray-600 text-sm">Build diverse teams with peers from all streams</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-5 rounded-2xl text-white">
                  <h4 className="text-xl font-bold mb-4">Program Highlights</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">4</div>
                      <div className="text-sm opacity-90">Stages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">₹25K+</div>
                      <div className="text-sm opacity-90">Prizes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">220+</div>
                      <div className="text-sm opacity-90">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">40+</div>
                      <div className="text-sm opacity-90">Teams</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Partners Tab */}
            <TabsContent value="partners" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
                  <div className="text-sm text-gray-700">Partners</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">₹6.5M+</div>
                  <div className="text-sm text-gray-700">Grants</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                  <div className="text-sm text-gray-700">Internships</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">20+</div>
                  <div className="text-sm text-gray-700">Active</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center bg-gray-50 p-5 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Cisco ThingQbator</h5>
                  <p className="text-gray-600 text-sm">NeuRoar secured ₹5 Lakh funding through successful collaboration.</p>
                </div>
                <div className="text-center bg-gray-50 p-5 rounded-2xl">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Intel Partnership</h5>
                  <p className="text-gray-600 text-sm">7-month contest with Intel technologists mentoring students.</p>
                </div>
                <div className="text-center bg-gray-50 p-5 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-6 h-6 text-purple-600" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Beckn-ONIX</h5>
                  <p className="text-gray-600 text-sm">Open network protocols and digital commerce collaboration.</p>
                </div>
              </div>
            </TabsContent>

            {/* Updates Tab */}
            <TabsContent value="updates" className="space-y-4">
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-blue-600 font-medium mb-1">Success Story</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">CIE Startup Raises $2M in Series A</h4>
                      <p className="text-gray-600 text-sm">TechFlow, incubated at CIE, successfully closes Series A funding round.</p>
                    </div>
                    <div className="text-sm text-gray-500">January 15, 2024</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-green-600 font-medium mb-1">Upcoming Event</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation Summit 2024</h4>
                      <p className="text-gray-600 text-sm">Join industry leaders and entrepreneurs at our annual summit.</p>
                    </div>
                    <div className="text-sm text-gray-500">February 20, 2024</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-5 rounded-2xl border border-purple-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-purple-600 font-medium mb-1">Announcement</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">New AI Research Lab Launched</h4>
                      <p className="text-gray-600 text-sm">State-of-the-art facility for AI research and applications.</p>
                    </div>
                    <div className="text-sm text-gray-500">January 10, 2024</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Innovation Journey?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
              Join thousands of students, entrepreneurs, and industry leaders shaping the future through CIE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => window.location.href = '/students'}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
              <Button 
                onClick={() => window.location.href = '/students/programs'}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
              >
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}