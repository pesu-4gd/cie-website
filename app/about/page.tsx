'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';

const insideCieColors = SECTION_COLORS.insideCie;

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={insideCieColors.hero.background}
          // keep the warm accent used in inside-cie hero for the hexagon highlights
          accentColor="#F43F5E"
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Story
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-blue-200">CIE</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of innovators and entrepreneurs at PES University since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Purpose</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving innovation and entrepreneurship through education, mentorship, and real-world application.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To impart innovation and entrepreneurial skills and provide an entrepreneurial launchpad for students and startups to bring to life disruptive technology startups that will positively impact the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Enable students and startups to transform ideas into market ready products and solutions, creating entrepreneurs who create value for stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building on the strong foundation of PES SPIRIT with sustainable innovation and entrepreneurship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complement PES SPIRIT
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We build upon PES University core values of excellence, integrity, and innovation by infusing sustainable entrepreneurship spirit and ethos into everything we do.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Since 2018, we have been transforming ideas into reality and fostering innovation across disciplines.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">2159+</div>
              <div className="text-gray-600">Students Graduated</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Startups Launched</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">₹2Cr+</div>
              <div className="text-gray-600">Funding Raised</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">Industry Partners</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Join us in shaping the future of innovation and entrepreneurship at PES University.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/students'}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Users className="w-5 h-5 mr-2" />
                Join as Student
              </Button>
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
