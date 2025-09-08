'use client';

import { motion } from 'framer-motion';
import { Rocket, Calendar, Users, Award, Clock, MapPin, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/design-system';

export default function CIEIgnite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
                <Rocket className="w-4 h-4 mr-2" />
                Flagship Program
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              CIE <span className="text-orange-200">Ignite</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your ideas into reality through our flagship semester-long startup challenge, exclusively for 2nd-year students.
            </p>
            
            {/* Urgent Alert */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold mb-8"
            >
              <AlertCircle className="w-5 h-5 text-orange-200" />
              Registration closes tomorrow at 11:59 PM!
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event <span className="text-orange-600">Details</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about CIE Ignite 2024.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">Full Semester</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Teams</h3>
              <p className="text-gray-600">40+ Teams</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <Award className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Prizes</h3>
              <p className="text-gray-600">₹25K+ Total</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Eligibility</h3>
              <p className="text-gray-600">2nd Year Students</p>
            </motion.div>
          </div>

          {/* Program Highlights */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Bridge Theory & Practice</h5>
                    <p className="text-gray-600 text-sm">Turn EIE learnings into actionable solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Interdisciplinary Teams</h5>
                    <p className="text-gray-600 text-sm">Build diverse teams with peers from all streams</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                  <div>
                    <h5 className="font-semibold text-gray-900">4-Stage Challenge</h5>
                    <p className="text-gray-600 text-sm">Progressive development from idea to prototype</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Industry Mentorship</h5>
                    <p className="text-gray-600 text-sm">Guidance from experienced entrepreneurs and professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-2xl text-white"
            >
              <h4 className="text-2xl font-bold mb-6">Registration Details</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Deadline: Tomorrow 11:59 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>Teams: 3-5 members</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Format: Hybrid (Online + On-campus)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" />
                  <span>Prizes: Cash + Internship Offers</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 rounded-xl">
                Register Now - Last Chance!
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program <span className="text-orange-600">Timeline</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four progressive stages to transform your idea into a viable startup.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stage: 'Stage 1',
                title: 'Idea Validation',
                description: 'Present and refine your startup concept',
                duration: '2 weeks'
              },
              {
                stage: 'Stage 2',
                title: 'Market Research',
                description: 'Analyze market potential and competition',
                duration: '3 weeks'
              },
              {
                stage: 'Stage 3',
                title: 'Prototype Development',
                description: 'Build your minimum viable product',
                duration: '6 weeks'
              },
              {
                stage: 'Stage 4',
                title: 'Final Pitch',
                description: 'Present to judges and investors',
                duration: '1 week'
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{stage.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{stage.description}</p>
                  <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                    {stage.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Time is Running Out!
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Don't miss this opportunity to transform your innovative ideas into reality. Register now before the deadline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl">
                <Rocket className="w-5 h-5 mr-2" />
                Register Now
              </Button>
              <Button 
                onClick={() => window.location.href = '/students/events'}
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
              >
                View All Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
