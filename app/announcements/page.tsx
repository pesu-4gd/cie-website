'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Bell, ArrowRight, Award, Users, Briefcase, BookOpen, Filter, Search } from 'lucide-react';
import { Button } from '@/components/design-system';
import { useState } from 'react';

export default function Announcements() {
  const [filter, setFilter] = useState('all');
  
  const announcements = [
    {
      id: 1,
      type: 'urgent',
      title: 'CIE Ignite Registration Deadline',
      description: 'Final reminder: CIE Ignite 2024 registration closes tomorrow at 11:59 PM. Don\'t miss this opportunity to showcase your innovative ideas!',
      date: '2024-02-15',
      time: '2 hours ago',
      category: 'Registration',
      link: '/students/events/cie-ignite',
      color: 'red'
    },
    {
      id: 2,
      type: 'announcement',
      title: 'Innovation Summit 2024 Schedule Released',
      description: 'The complete schedule for Innovation Summit 2024 is now available. Check out keynote speakers, workshop timings, and networking sessions.',
      date: '2024-02-14',
      time: '5 hours ago',
      category: 'Events',
      link: '/students/events/innovation-summit',
      color: 'blue'
    },
    {
      id: 3,
      type: 'opportunity',
      title: 'New Scholarship Program Launched',
      description: 'CIE announces new scholarship program for students from underrepresented communities. Applications open for eligible students.',
      date: '2024-02-13',
      time: '1 day ago',
      category: 'Scholarships',
      link: '/students/funding/scholarships',
      color: 'green'
    },
    {
      id: 4,
      type: 'announcement',
      title: 'Industry Mentorship Program Applications Open',
      description: 'Connect with industry leaders through our CIE-IM Program. Applications are now open for the spring cohort.',
      date: '2024-02-12',
      time: '2 days ago',
      category: 'Mentorship',
      link: '/students/mentorship',
      color: 'purple'
    },
    {
      id: 5,
      type: 'event',
      title: 'Startup Showcase Week 2024',
      description: 'Join us for a week of startup presentations, investor meetups, and networking events.',
      date: '2024-02-10',
      time: '4 days ago',
      category: 'Events',
      link: '/students/events',
      color: 'orange'
    },
    {
      id: 6,
      type: 'announcement',
      title: 'New AI Research Lab Opened',
      description: 'State-of-the-art facility for AI research and applications now available for student projects.',
      date: '2024-02-08',
      time: '1 week ago',
      category: 'Research',
      link: '/research',
      color: 'indigo'
    }
  ];

  const filteredAnnouncements = filter === 'all' 
    ? announcements 
    : announcements.filter(announcement => announcement.type === filter);

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'bg-red-50 border-red-500 text-red-700',
      blue: 'bg-blue-50 border-blue-500 text-blue-700',
      green: 'bg-green-50 border-green-500 text-green-700',
      purple: 'bg-purple-50 border-purple-500 text-purple-700',
      orange: 'bg-orange-50 border-orange-500 text-orange-700',
      indigo: 'bg-indigo-50 border-indigo-500 text-indigo-700'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-50 border-gray-500 text-gray-700';
  };

  const getIconBgColor = (color: string) => {
    const colors = {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      indigo: 'bg-indigo-500'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
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
                <Bell className="w-4 h-4 mr-2" />
                Stay Updated
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              All <span className="text-blue-200">Announcements</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest updates, events, and opportunities from CIE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </Button>
              <Button
                onClick={() => setFilter('urgent')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'urgent' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Urgent
              </Button>
              <Button
                onClick={() => setFilter('announcement')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'announcement' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Announcements
              </Button>
              <Button
                onClick={() => setFilter('opportunity')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'opportunity' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Opportunities
              </Button>
              <Button
                onClick={() => setFilter('event')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'event' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Events
              </Button>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing {filteredAnnouncements.length} of {announcements.length} announcements
            </div>
          </div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {filteredAnnouncements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start gap-4 p-6 border-l-4 rounded-r-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${getColorClasses(announcement.color)}`}
              >
                <div className={`w-12 h-12 ${getIconBgColor(announcement.color)} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                  {announcement.type === 'urgent' && <Bell className="text-white w-5 h-5" />}
                  {announcement.type === 'announcement' && <Calendar className="text-white w-5 h-5" />}
                  {announcement.type === 'opportunity' && <Award className="text-white w-5 h-5" />}
                  {announcement.type === 'event' && <Users className="text-white w-5 h-5" />}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {announcement.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {announcement.time}
                        </span>
                        <span className="bg-white px-2 py-1 rounded-full">
                          {announcement.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {announcement.description}
                  </p>
                  
                  <Button
                    onClick={() => window.location.href = announcement.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold bg-white hover:bg-blue-50 px-4 py-2 rounded-lg transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay in the Loop
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Never miss an important update. Subscribe to our newsletter for the latest announcements.
            </p>
            
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Bell className="w-5 h-5 mr-2" />
              Subscribe to Updates
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
