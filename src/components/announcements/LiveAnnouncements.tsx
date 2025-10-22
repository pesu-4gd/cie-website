'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/design-system';

interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'urgent' | 'info' | 'success' | 'warning';
  priority: 'high' | 'medium' | 'low';
  category: string;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
  isActive: boolean;
  createdBy: string;
  actionButton?: {
    text: string;
    url: string;
  };
}

const typeIcons = {
  urgent: AlertCircle,
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
};

const typeStyles = {
  urgent: {
    container: 'bg-red-50 border-l-4 border-red-500',
    icon: 'bg-red-500 text-white',
    badge: 'bg-red-100 text-red-700',
    button: 'text-red-600 hover:text-red-700'
  },
  info: {
    container: 'bg-blue-50 border-l-4 border-blue-500',
    icon: 'bg-blue-500 text-white',
    badge: 'bg-blue-100 text-blue-700',
    button: 'text-blue-600 hover:text-blue-700'
  },
  success: {
    container: 'bg-green-50 border-l-4 border-green-500',
    icon: 'bg-green-500 text-white',
    badge: 'bg-green-100 text-green-700',
    button: 'text-green-600 hover:text-green-700'
  },
  warning: {
    container: 'bg-yellow-50 border-l-4 border-yellow-500',
    icon: 'bg-yellow-500 text-white',
    badge: 'bg-yellow-100 text-yellow-700',
    button: 'text-yellow-600 hover:text-yellow-700'
  },
};

function formatTimeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hours ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} days ago`;
}

export default function LiveAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/announcements');
      const result = await response.json();
      
      if (result.success) {
        setAnnouncements(result.announcements);
        setError('');
      } else {
        setError('Failed to load announcements');
      }
    } catch (err) {
      setError('Network error');
      console.error('Error fetching announcements:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch announcements on mount and set up polling
  useEffect(() => {
    fetchAnnouncements();

    // Poll for updates every 30 seconds
    const interval = setInterval(fetchAnnouncements, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <Calendar className="w-4 h-4 mr-2" />
              Live Announcements
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Whiteboard</span> Announcements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements, deadlines, and important notices from CIE.
          </p>
        </motion.div>

        {/* Whiteboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 p-6 relative overflow-hidden"
        >
          {/* Whiteboard Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Live Announcements</h3>
                <p className="text-sm text-gray-500">Updated in real-time</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 font-medium">Live</span>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading announcements...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-12">
              <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-4" />
              <p className="text-red-600 mb-4">{error}</p>
              <Button onClick={fetchAnnouncements} variant="outline" className="text-blue-600 border-blue-600">
                Try Again
              </Button>
            </div>
          )}

          {/* Announcements List */}
          {!loading && !error && (
            <div className="space-y-3">
              {announcements.length > 0 ? (
                announcements.map((announcement, index) => {
                  const Icon = typeIcons[announcement.type];
                  const styles = typeStyles[announcement.type];
                  
                  return (
                    <motion.div
                      key={announcement.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`flex items-start gap-4 p-3 ${styles.container} rounded-r-xl hover:shadow-md transition-all duration-300`}
                    >
                      <div className={`w-8 h-8 ${styles.icon} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                        {announcement.type === 'urgent' ? (
                          <span className="text-white text-xs font-bold">!</span>
                        ) : (
                          <Icon className="w-4 h-4" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                          <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                            {formatTimeAgo(announcement.createdAt)}
                          </span>
                        </div>
                        
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          {announcement.message}
                        </p>
                        
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            announcement.priority === 'high' ? 'bg-red-100 text-red-700' :
                            announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {announcement.priority === 'high' ? 'High Priority' :
                             announcement.priority === 'medium' ? 'Medium Priority' :
                             'Low Priority'}
                          </span>
                          
                          <span className={`text-xs ${styles.badge} px-2 py-1 rounded-full`}>
                            {announcement.category}
                          </span>
                          
                          {announcement.actionButton && (
                            <button 
                              className={`text-xs ${styles.button} font-medium hover:underline ml-2`}
                              onClick={() => window.open(announcement.actionButton!.url, '_blank')}
                            >
                              {announcement.actionButton.text} →
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                // Empty State
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No Announcements</h4>
                  <p className="text-gray-500 text-sm">Check back later for new updates and announcements.</p>
                </div>
              )}
            </div>
          )}

          {/* View All Announcements Button */}
          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl">
              <Calendar className="w-4 h-4 mr-2" />
              View All Announcements
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-indigo-400 rounded-full opacity-40"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        </motion.div>

        {/* Quick Stats for Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6"
        >
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 mb-1">{announcements.length}</div>
            <div className="text-xs text-gray-600">Active Announcements</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center border border-gray-200">
            <div className="text-2xl font-bold text-red-600 mb-1">
              {announcements.filter(a => a.type === 'urgent').length}
            </div>
            <div className="text-xs text-gray-600">Urgent Notices</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center border border-gray-200">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {announcements.filter(a => new Date(a.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
            </div>
            <div className="text-xs text-gray-600">This Week</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center border border-gray-200">
            <div className="text-2xl font-bold text-purple-600 mb-1">Live</div>
            <div className="text-xs text-gray-600">Real-time Updates</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
