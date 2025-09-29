'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Settings, 
  Eye, 
  Shield, 
  Database, 
  Calendar,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function CookiePolicyPage() {
  const lastUpdated = 'January 15, 2024';

  const cookieTypes = [
    {
      type: 'Essential Cookies',
      icon: Shield,
      description: 'Required for basic website functionality',
      examples: ['Authentication', 'Security', 'Load balancing'],
      necessary: true
    },
    {
      type: 'Analytics Cookies',
      icon: Database,
      description: 'Help us understand how visitors use our website',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      necessary: false
    },
    {
      type: 'Functional Cookies',
      icon: Settings,
      description: 'Remember your preferences and settings',
      examples: ['Language settings', 'Theme preferences', 'Form data'],
      necessary: false
    },
    {
      type: 'Marketing Cookies',
      icon: Eye,
      description: 'Used to deliver relevant advertisements',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      necessary: false
    }
  ];

  const cookieDetails = [
    {
      name: '_cie_session',
      purpose: 'Maintains user session state',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: '_cie_preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      type: 'Functional'
    },
    {
      name: '_cie_analytics',
      purpose: 'Tracks website usage and performance',
      duration: '2 years',
      type: 'Analytics'
    },
    {
      name: '_cie_marketing',
      purpose: 'Enables targeted advertising',
      duration: '6 months',
      type: 'Marketing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Cookie className="h-4 w-4 mr-1" />
              Cookie Policy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cookie <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Learn about how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                What Are Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We use cookies to improve functionality, analyze usage patterns, and personalize content. You can control cookie settings through your browser preferences.
              </p>
            </CardContent>
          </Card>

          {/* Cookie Types */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={cookie.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <cookie.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          {cookie.type}
                          {cookie.necessary && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              Required
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{cookie.description}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {cookie.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center gap-2 text-sm text-gray-700">
                            <ArrowRight className="h-3 w-3 text-blue-600" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Cookie Details Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Specific Cookies We Use</CardTitle>
              <CardDescription>
                Detailed information about the cookies used on our website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Cookie Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Duration</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-mono text-gray-700">{cookie.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-700">{cookie.purpose}</td>
                        <td className="py-3 px-4 text-sm text-gray-700">{cookie.duration}</td>
                        <td className="py-3 px-4">
                          <Badge 
                            variant="outline" 
                            className={
                              cookie.type === 'Essential' 
                                ? 'text-green-600 border-green-600' 
                                : 'text-blue-600 border-blue-600'
                            }
                          >
                            {cookie.type}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Management */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Managing Your Cookie Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• View and delete cookies</li>
                    <li>• Block cookies from specific sites</li>
                    <li>• Block all cookies (may affect functionality)</li>
                    <li>• Receive notifications when cookies are set</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-1">Important Note</h4>
                      <p className="text-blue-700 text-sm">
                        Disabling essential cookies may prevent certain features of our website from working properly, such as logging in or accessing secure areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Third-Party Cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain content from third-party services (such as Google Analytics, social media platforms, or embedded videos) that may set their own cookies. We do not control these third-party cookies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please refer to the privacy policies of these third-party services for information about their cookie practices and how to opt out.
              </p>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
              <CardDescription>
                We may update this Cookie Policy from time to time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                We will notify you of any material changes to this Cookie Policy by posting the updated policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-blue-600" />
                Contact Us
              </CardTitle>
              <CardDescription>
                Questions about our use of cookies? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Privacy Team</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Email:</strong> privacy@cie.pes.edu</p>
                    <p><strong>Phone:</strong> +91-80-26721983</p>
                    <p><strong>Address:</strong> Center for Innovation and Entrepreneurship, PES University, Bangalore</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Response Time</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    We typically respond to cookie-related inquiries within 3-5 business days.
                  </p>
                  <p className="text-sm text-gray-600">
                    For urgent privacy concerns, please call our main office number.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back to Policies */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/policies"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to All Policies
          </Link>
        </div>
      </section>
    </div>
  );
}
