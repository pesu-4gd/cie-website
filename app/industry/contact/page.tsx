'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { 
  Building2,
  Users,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Send,
  MessageCircle,
  Handshake,
  Target,
  Globe,
  FileText,
  User,
  Briefcase,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function IndustryContactPage() {
  const contactMethods = [
    {
      title: 'Partnership Inquiries',
      description: 'General partnership and collaboration opportunities',
      icon: Handshake,
      contact: 'cieoffice@pes.edu',
      phone: '+91 80 2672 7000',
      color: 'orange'
    },
    {
      title: 'Recruitment & Talent',
      description: 'Student recruitment, internships, and career opportunities',
      icon: Users,
      contact: 'careers@pes.edu',
      phone: '+91 80 2672 7001',
      color: 'blue'
    },
    {
      title: 'Research Collaboration',
      description: 'R&D partnerships and technology transfer opportunities',
      icon: Target,
      contact: 'research@pes.edu',
      phone: '+91 80 2672 7002',
      color: 'orange'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
    <div className="min-h-screen bg-white">
  {/* Hero Section */}
  <section className="relative h-[85vh] flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
        {/* Hexagon Background behind content */}
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-500/20 text-orange-100 border border-orange-400/30">
                <MessageCircle className="w-4 h-4 mr-2" />
                Industry Contact
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Let's Start a
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Partnership Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to explore collaboration opportunities with CIE? Our industry relations team 
              is here to discuss partnerships, talent solutions, and innovation initiatives.
            </p>
            <p className="text-sm text-blue-100 max-w-4xl mx-auto mb-6">
              Reach out to us at <a className="underline font-medium" href="mailto:cieinfo@pes.edu">cieinfo@pes.edu</a> for collaboration inquiries.
              {/* Placeholder: Dedicated contact form for industry inquiries to be developed. */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
                onClick={() => (window.location.href = 'mailto:cieinfo@pes.edu?subject=Partnership%20Inquiry')}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={() => (window.location.href = 'mailto:cieinfo@pes.edu?subject=Schedule%20Meeting%20with%20CIE')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with the right team member based on your specific needs and 
              collaboration interests.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <IconComponent className="w-12 h-12 text-[#f07f1a] mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <a href={`mailto:${method.contact}`} className="text-orange-600 hover:text-orange-700 font-medium">
                        {method.contact}
                      </a>
                    </div>
                    {/* <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <a href={`tel:${method.phone}`} className="text-gray-700 font-medium">
                        {method.phone}
                      </a>
                    </div> */}
                  </div>
                  
                  {/* <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                    <Send className="w-4 h-4 mr-2" />
                    Contact Now
                  </Button> */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your job title"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="partnershipInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Interest *
                </label>
                <select id="partnershipInterest" aria-required="true" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" required>
                  <option value="">Select partnership type</option>
                  <option value="technology">Technology Partnership</option>
                  <option value="talent">Talent Recruitment</option>
                  <option value="research">Research Collaboration</option>
                  <option value="innovation">Innovation Sponsorship</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  rows={6}
                  placeholder="Tell us about your partnership interests and how we can collaborate..."
                  required
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  title="Consent to privacy policy"
                  aria-required="true"
                  className="mt-1 w-4 h-4 text-blue-600 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to the processing of my personal data according to the 
                  <a href="/policies" className="text-blue-600 hover:text-blue-700 underline ml-1">Privacy Policy</a>.
                </label>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section> */}

      {/* Office Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visit Our Campus
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Located in the heart of Bangalore's tech corridor, our campus 
                offers state-of-the-art facilities for industry collaboration.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-10 h-10 text-[#f07f1a] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">
                      PES University<br />
                      100 Feet Ring Road, BSK III Stage<br />
                      Bangalore, Karnataka 560085<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-10 h-10 text-[#f07f1a] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <div className="space-y-1">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between text-gray-600">
                          <span className="font-medium">{schedule.day}</span>
                          <span>{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-10 h-10 text-[#f07f1a] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Contact</h3>
                    <p className="text-gray-600">
                      Main Office: +91 80 2672 7000<br />
                      Industry Relations: +91 80 2672 7100<br />
                      Email: industry@pes.edu
                    </p>
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
              <div className="aspect-video bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                {/* Embedded Google Maps iframe (fallback link provided below) */}
                <iframe
                  title="PES University Campus Map"
                  // embed by textual query so no short link is required
                  src="https://www.google.com/maps?q=PES%20University%20Bangalore&output=embed"
                  className="w-full h-full border-0"
                />
              </div>
              <div className="text-center mb-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=PES+University+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:underline"
                >
                  Open in Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Getting Here</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>15 minutes from Bangalore International Airport</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Metro connectivity via Green Line (Banashankari Station)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ample parking available on campus</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Visitor registration at main gate</span>
                  </div>
                </div>
                
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
                  onClick={() => (window.location.href = 'mailto:cieinfo@pes.edu?subject=Schedule%20Campus%20Visit')}
                  aria-label="Schedule Campus Visit via email"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Campus Visit
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-[#00338d] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Connect?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Don't wait – reach out today and let's start building a partnership 
              that drives innovation and creates real impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
                onClick={() => window.location.href = 'mailto:industry@pes.edu'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us Now
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={() => window.location.href = 'tel:+918026727000'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Today
              </Button> */}
            </div>
            
            {/* <div className="mt-8">
              <p className="text-blue-100 mb-4">Prefer to connect on social media?</p>
              <div className="flex justify-center gap-4">
                <Button className="bg-white/10 border border-white/30 text-white hover:bg-white/20 p-3 rounded-xl">
                  <Globe className="w-5 h-5" />
                </Button>
                <Button className="bg-white/10 border border-white/30 text-white hover:bg-white/20 p-3 rounded-xl">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button className="bg-white/10 border border-white/30 text-white hover:bg-white/20 p-3 rounded-xl">
                  <FileText className="w-5 h-5" />
                </Button>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
