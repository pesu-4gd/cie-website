'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/design-system';
import { 
  Plus, 
  Bell, 
  Edit, 
  Trash2, 
  LogOut, 
  User,
  Calendar,
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
  Eye,
  EyeOff,
  Send
} from 'lucide-react';

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

const typeColors = {
  urgent: 'red',
  info: 'blue', 
  success: 'green',
  warning: 'yellow',
};

export default function AdminDashboard() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    type: 'info' as 'urgent' | 'info' | 'success' | 'warning',
    priority: 'medium' as 'high' | 'medium' | 'low',
    category: '',
    expiresAt: '',
    actionButton: {
      text: '',
      url: '',
    },
  });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  // Fetch announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/announcements');
      const result = await response.json();
      if (result.success) {
        setAnnouncements(result.announcements);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const submitData = {
        ...formData,
        actionButton: formData.actionButton.text && formData.actionButton.url 
          ? formData.actionButton 
          : undefined,
      };

      const response = await fetch('/api/announcements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();
      
      if (result.success) {
        setShowCreateForm(false);
        setFormData({
          title: '',
          message: '',
          type: 'info',
          priority: 'medium',
          category: '',
          expiresAt: '',
          actionButton: { text: '', url: '' },
        });
        fetchAnnouncements(); // Refresh the list
        alert('Announcement created successfully!');
      } else {
        alert(result.error || 'Failed to create announcement');
      }
    } catch (error) {
      console.error('Error creating announcement:', error);
      alert('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage CIE announcements</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setShowCreateForm(true)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Announcement
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-red-200 text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center">
              <Bell className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{announcements.length}</p>
                <p className="text-gray-600">Active Announcements</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {announcements.filter(a => a.type === 'urgent').length}
                </p>
                <p className="text-gray-600">Urgent Notices</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {announcements.filter(a => new Date(a.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
                </p>
                <p className="text-gray-600">This Week</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center">
              <User className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">24h</p>
                <p className="text-gray-600">Latest Update</p>
              </div>
            </div>
          </div>
        </div>

        {/* Announcements List */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Recent Announcements</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {announcements.map((announcement) => {
              const Icon = typeIcons[announcement.type];
              const colorClass = typeColors[announcement.type];
              
              return (
                <div key={announcement.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      colorClass === 'red' ? 'bg-red-100' :
                      colorClass === 'blue' ? 'bg-blue-100' :
                      colorClass === 'green' ? 'bg-green-100' :
                      'bg-yellow-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        colorClass === 'red' ? 'text-red-600' :
                        colorClass === 'blue' ? 'text-blue-600' :
                        colorClass === 'green' ? 'text-green-600' :
                        'text-yellow-600'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            announcement.priority === 'high' ? 'bg-red-100 text-red-700' :
                            announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {announcement.priority}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(announcement.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{announcement.message}</p>
                      
                      {announcement.actionButton && (
                        <div className="mb-3">
                          <span className="text-xs text-gray-500">Action: </span>
                          <span className="text-xs text-blue-600">{announcement.actionButton.text}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>Category: {announcement.category}</span>
                        <span>•</span>
                        <span>By: {announcement.createdBy}</span>
                        {announcement.expiresAt && (
                          <>
                            <span>•</span>
                            <span>Expires: {new Date(announcement.expiresAt).toLocaleDateString()}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {announcements.length === 0 && (
              <div className="p-12 text-center">
                <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No announcements yet</h3>
                <p className="text-gray-600">Create your first announcement to get started.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create Announcement Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Create New Announcement</h2>
                <Button
                  variant="outline"
                  onClick={() => setShowCreateForm(false)}
                  className="p-2"
                >
                  ×
                </Button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter announcement title"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter announcement message"
                />
              </div>

              {/* Type and Priority */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'urgent' | 'info' | 'success' | 'warning' }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="info">Info</option>
                    <option value="urgent">Urgent</option>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority *
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value as 'high' | 'medium' | 'low' }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <input
                  type="text"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., deadline, event, program"
                />
              </div>

              {/* Expiration Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expires At (Optional)
                </label>
                <input
                  type="datetime-local"
                  value={formData.expiresAt}
                  onChange={(e) => setFormData(prev => ({ ...prev, expiresAt: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Action Button */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Action Button (Optional)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={formData.actionButton.text}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      actionButton: { ...prev.actionButton, text: e.target.value }
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Button text"
                  />
                  <input
                    type="url"
                    value={formData.actionButton.url}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      actionButton: { ...prev.actionButton, url: e.target.value }
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Button URL"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Create Announcement
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
