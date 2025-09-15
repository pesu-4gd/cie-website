'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Mic, BookOpen, Coffee, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/design-system';

export default function InnovationSummit() {
  const schedule = [
    {
      time: '9:00 AM',
      event: 'Registration & Welcome Coffee',
      speaker: 'CIE Team',
      type: 'networking',
      duration: '60 min'
    },
    {
      time: '10:00 AM',
      event: 'Keynote: Future of Innovation',
      speaker: 'Dr. Rajesh Kumar, Tech Entrepreneur',
      type: 'keynote',
      duration: '45 min'
    },
    {
      time: '11:00 AM',
      event: 'Panel: Startup Ecosystem in India',
      speaker: 'Industry Leaders Panel',
      type: 'panel',
      duration: '60 min'
    },
    {
      time: '12:15 PM',
      event: 'Workshop: Design Thinking',
      speaker: 'Prof. Chitra Ravi',
      type: 'workshop',
      duration: '90 min'
    },
    {
      time: '1:45 PM',
      event: 'Networking Lunch',
      speaker: 'All Participants',
      type: 'networking',
      duration: '75 min'
    },
    {
      time: '3:00 PM',
      event: 'Startup Pitch Competition',
      speaker: 'Student Teams',
      type: 'competition',
      duration: '120 min'
    },
    {
      time: '5:00 PM',
      event: 'Awards & Closing Ceremony',
      speaker: 'CIE Leadership',
      type: 'ceremony',
      duration: '60 min'
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'keynote': return <Mic className="w-5 h-5" />;
      case 'panel': return <Users className="w-5 h-5" />;
      case 'workshop': return <BookOpen className="w-5 h-5" />;
      case 'networking': return <Coffee className="w-5 h-5" />;
      case 'competition': return <Award className="w-5 h-5" />;
      case 'ceremony': return <Award className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'panel': return 'bg-green-100 text-green-700 border-green-200';
      case 'workshop': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'networking': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'competition': return 'bg-red-100 text-red-700 border-red-200';
      case 'ceremony': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
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
                <Calendar className="w-4 h-4 mr-2" />
                Annual Event
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovation <span className="text-blue-200">Summit</span> 2024
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Join industry leaders, entrepreneurs, and innovators for a day of insights, networking, and inspiration.
            </p>
            
            {/* Event Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <Calendar className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">February 20, 2024</div>
                <div className="text-blue-200 text-sm">Tuesday</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <Clock className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">9:00 AM - 6:00 PM</div>
                <div className="text-blue-200 text-sm">Full Day Event</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">PES University</div>
                <div className="text-blue-200 text-sm">RR Campus</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event <span className="text-blue-600">Overview</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive day of learning, networking, and innovation with industry experts and thought leaders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mic className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Keynote Speakers</h3>
              <p className="text-gray-600">
                Inspiring talks from successful entrepreneurs, industry leaders, and innovation experts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Workshops</h3>
              <p className="text-gray-600">
                Hands-on sessions covering design thinking, lean startup methodology, and innovation frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Networking</h3>
              <p className="text-gray-600">
                Connect with fellow innovators, mentors, investors, and industry professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event <span className="text-blue-600">Schedule</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete timeline of activities, speakers, and networking opportunities.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 mb-4"
              >
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{item.time}</div>
                  <div className="text-sm text-gray-500">{item.duration}</div>
                </div>
                
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl border-2 flex items-center justify-center ${getEventColor(item.type)}`}>
                  {getEventIcon(item.type)}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{item.event}</h4>
                  <p className="text-gray-600">{item.speaker}</p>
                </div>
                
                <div className="flex-shrink-0">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${getEventColor(item.type)}`}>
                    {item.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Highlight */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Speakers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from accomplished entrepreneurs and industry leaders who will share their insights and experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">RK</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-blue-600 font-medium mb-3">Tech Entrepreneur & Investor</p>
              <p className="text-gray-600 text-sm">
                Serial entrepreneur with 3 successful exits. Expert in AI and deep tech startups.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">PS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Sharma</h3>
              <p className="text-green-600 font-medium mb-3">Venture Capitalist</p>
              <p className="text-gray-600 text-sm">
                Partner at leading VC firm. Focuses on early-stage startups and emerging technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Arjun Mehta</h3>
              <p className="text-purple-600 font-medium mb-3">Innovation Consultant</p>
              <p className="text-gray-600 text-sm">
                Design thinking expert and innovation strategist for Fortune 500 companies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Reserve Your Spot Today
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Don't miss this opportunity to learn, network, and get inspired. Limited seats available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Register Now
              </Button>
              <Button 
                onClick={() => window.location.href = '/students/events'}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
              >
                View All Events
              </Button>
            </div>
            
            <div className="mt-8 text-blue-200">
              <p className="text-sm">Event is free for all PES University students</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
