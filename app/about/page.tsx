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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Story
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              About
              <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent"> CIE</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of innovators and entrepreneurs at PES University since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">CIE</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The Center for Innovation and Entrepreneurship (CIE) at PES University is dedicated to inspiring students and startups to develop innovative, world-changing ideas. By leveraging PES University's values and strengths, CIE fosters role-model entrepreneurs who create high-value products and solutions. Established to catalyze student-led startups, CIE equips students with the skills needed for Industry 4.0, complementing the PES SPIRIT with sustainable innovation and entrepreneurship ethos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-2xl"
          >
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                CIE at PES University, established over 7 years ago, is a hub for innovation, fostering student startups and industry collaborations. Our leadership team includes visionaries like Prof. Sathya Prasad, an MIT Sloan alumnus and founding Director of CIE, who brings extensive experience in product management and technology innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Purpose</span>
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
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To impart innovation and entrepreneurial skills and provide an entrepreneurial launchpad for students and startups to bring to life disruptive technology startups that will positively impact the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-4">Our Mission</h3>
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
              CIE <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">SPIRIT</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building on PES Values — We complement the PES SPIRIT with sustainable innovation and entrepreneurship ethos, nurturing the next generation of innovators and entrepreneurs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-3">Student-Centric</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>2150+ innovators</strong> nurtured across 15 cohorts</li>
                <li>• Students winning <strong>MoveInSync Mobility Hackathon, IBM TechXchange, Google Gen AI Exchange</strong></li>
                <li>• <strong>526 students</strong> in Intel-PESU Research Innovation Contests</li>
                <li>• <strong>147 teams</strong> selected/coached for SIH 2024</li>
                <li>• Strong alumni network providing mentorship and career guidance</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-3">Process-Oriented</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Consistently achieving <strong>4+/5 course rating</strong> across programs</li>
                <li>• Student-friendly onboarding through <strong>CIE Aarambh/Harvard ManageMentor</strong></li>
                <li>• <strong>Nasscom Thingqbator</strong> program integration</li>
                <li>• <strong>5 industry mentors</strong> providing courses, workshops & internships</li>
                <li>• <strong>76 external paid internships</strong> facilitated (43 in 2024)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-3">Identity-Focused</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Novel <strong>2-credit EIE course</strong> reaching ~4500 students (EC & RR campuses)</li>
                <li>• <strong>UC Berkeley BHGAP</strong> semester abroad program</li>
                <li>• <strong>Harvard ManageMentor</strong> program (58 completed, 20 enrolled for 2025)</li>
                <li>• Strong brand built on PESU's innovation reputation</li>
                <li>• Vibrant community of students, alumni, and industry partners</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-3">Research-Driven</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Research publications in top-tier conferences</li>
                <li>• <strong>CIE Research Internship</strong> program with industry projects</li>
                <li>• Partnerships with <strong>UC Berkeley, IIT Madras, IIT Delhi</strong></li>
                <li>• Active grant and award acquisition</li>
                <li>• Publications in Technology Management with IIM-Bangalore</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-3">Infrastructure-Rich</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• State-of-the-art prototyping resources</li>
                <li>• Collaborative workspaces and board rooms</li>
                <li>• Environment for ideation and experimentation</li>
                <li>• Hackathons, workshops, and tinkering sessions</li>
                <li>• <strong>Practical ML workshops</strong> by Industry Mentors</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-3">Teaching Excellence</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Best-in-class content and pedagogy</li>
                <li>• Industry professionals through <strong>CIE Industry Mentor program</strong></li>
                <li>• Multiple industry connects for real-world insights</li>
                <li>• Continuously evolving courses and programs</li>
                <li>• Comprehensive education preparing for future challenges</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Impact</span>
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
              className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent mb-2">2150+</div>
              <div className="text-gray-600">Innovators Nurtured</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent mb-2">4500+</div>
              <div className="text-gray-600">Students in EIE Course</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent mb-2">526</div>
              <div className="text-gray-600">Research Participants</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent mb-2">76</div>
              <div className="text-gray-600">External Internships</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research & <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Publications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our research contributions in Technology Management, including publications co-authored with IIM-Bangalore, and our partnerships with leading institutions like UC Berkeley, IIT Madras, and IIT Delhi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-2xl text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-600 text-lg">
              Detailed research publications and ongoing projects coming soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Have questions or want to learn more about our programs? Reach out to us!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl text-center max-w-2xl mx-auto"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:cieinfo@pes.edu" className="text-red-600 hover:text-red-700 text-lg font-medium">
                cieinfo@pes.edu
              </a>
            </div>
            <p className="text-gray-600">
              Contact form and additional contact details coming soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What is CIE&apos;s mission?</h3>
              <p className="text-gray-600">
                CIE is dedicated to inspiring students to innovate, equipping them with entrepreneurial skills for Industry 4.0, and catalyzing student-led startups.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How can students get involved?</h3>
              <p className="text-gray-600">
                Students can participate through our EIE courses, CIE Spark, CIE Ignite programs, research internships, hackathons, and various workshops and mentorship opportunities.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What support does CIE provide to startups?</h3>
              <p className="text-gray-600">
                CIE provides mentorship, infrastructure, industry connections, funding facilitation, and comprehensive support throughout the startup journey.
              </p>
            </div>
            <p className="text-center text-gray-600 mt-8">
              More FAQs coming soon. For specific questions, please email us at <a href="mailto:cieinfo@pes.edu" className="text-red-600 hover:text-red-700">cieinfo@pes.edu</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Policies</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Our privacy policy and terms of use will be available here soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Interested in working with CIE? Check back soon for open positions and opportunities to join our mission of fostering innovation and entrepreneurship.
            </p>
            <p className="text-gray-600">
              Career opportunities coming soon.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-600 to-rose-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join us in shaping the future of innovation and entrepreneurship at PES University.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button 
                onClick={() => globalThis.location.href = '/students'}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Users className="w-5 h-5 mr-2" />
                Join as Student
              </Button> */}
              <Button 
                onClick={() => globalThis.location.href = 'mailto:cieprogram@pes.edu'}
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
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
