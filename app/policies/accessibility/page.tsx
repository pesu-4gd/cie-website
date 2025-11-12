'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Monitor,
  Calendar,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
  Users,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export default function AccessibilityPage() {
  const lastUpdated = 'January 15, 2024';

  const accessibilityFeatures = [
    {
      category: 'Visual Accessibility',
      icon: Eye,
      features: [
        'High contrast color schemes available',
        'Text size adjustment options',
        'Screen reader compatibility',
        'Alternative text for all images',
        'Clear typography and spacing'
      ]
    },
    {
      category: 'Motor Accessibility',
      icon: MousePointer,
      features: [
        'Keyboard navigation support',
        'Large clickable areas',
        'Voice control compatibility',
        'Switch navigation support',
        'Touch-friendly interface design'
      ]
    },
    {
      category: 'Cognitive Accessibility',
      icon: Monitor,
      features: [
        'Clear and simple language',
        'Consistent navigation structure',
        'Progress indicators',
        'Error prevention and correction',
        'Multiple ways to access content'
      ]
    },
    {
      category: 'Auditory Accessibility',
      icon: Ear,
      features: [
        'Visual alternatives to audio content',
        'Captions for video content',
        'Text transcripts available',
        'Visual notifications for alerts',
        'Volume control options'
      ]
    }
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines Level AA compliance',
      status: 'Compliant'
    },
    {
      name: 'Section 508',
      description: 'US Federal accessibility standards',
      status: 'Compliant'
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act standards',
      status: 'Compliant'
    }
  ];

  const assistiveTechnologies = [
    'Screen readers (NVDA, JAWS, VoiceOver)',
    'Voice recognition software',
    'Switch navigation devices',
    'Magnification software',
    'Text-to-speech tools',
    'Keyboard-only navigation'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">
              <Accessibility className="h-4 w-4 mr-1" />
              Accessibility Statement
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Web <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Accessibility</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              CIE is committed to ensuring digital accessibility for all users, including those with disabilities.
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
                <Users className="h-5 w-5 text-red-600" />
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Center for Innovation and Entrepreneurship (CIE) at PES University is committed to providing an accessible and inclusive digital experience for all users, including those with disabilities. We strive to meet or exceed accessibility standards and continuously improve our digital platforms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that technology should be accessible to everyone, and we are dedicated to removing barriers that may prevent users from accessing our content and services.
              </p>
            </CardContent>
          </Card>

          {/* Accessibility Features */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessibility Features</h2>
            {accessibilityFeatures.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <category.icon className="h-5 w-5 text-red-600" />
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Standards Compliance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                Standards Compliance
              </CardTitle>
              <CardDescription>
                We follow established accessibility standards and guidelines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {standards.map((standard, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{standard.name}</h4>
                      <p className="text-sm text-gray-600">{standard.description}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {standard.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Assistive Technologies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Keyboard className="h-5 w-5 text-red-600" />
                Supported Assistive Technologies
              </CardTitle>
              <CardDescription>
                Our website is compatible with various assistive technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {assistiveTechnologies.map((technology, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <ArrowRight className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{technology}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Keyboard Navigation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Keyboard className="h-5 w-5 text-red-600" />
                Keyboard Navigation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Our website can be navigated entirely using a keyboard. Here are some common keyboard shortcuts:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Tab</span>
                      <span className="text-sm text-gray-600">Move to next element</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Shift + Tab</span>
                      <span className="text-sm text-gray-600">Move to previous element</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Enter</span>
                      <span className="text-sm text-gray-600">Activate links/buttons</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Space</span>
                      <span className="text-sm text-gray-600">Activate buttons</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Esc</span>
                      <span className="text-sm text-gray-600">Close modals/menus</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Alt + 1</span>
                      <span className="text-sm text-gray-600">Skip to main content</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Known Issues */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Known Accessibility Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We are continuously working to improve accessibility. Currently, we are aware of the following areas that need improvement:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-orange-600 mt-1 flex-shrink-0" />
                    Some PDF documents may not be fully accessible to screen readers
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-orange-600 mt-1 flex-shrink-0" />
                    Video content may need additional captioning improvements
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 text-orange-600 mt-1 flex-shrink-0" />
                    Some interactive elements may need better focus indicators
                  </li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">Our Commitment</h4>
                      <p className="text-red-700 text-sm">
                        We are actively working to address these issues and improve accessibility across all our digital platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feedback */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-red-600" />
                Accessibility Feedback
              </CardTitle>
              <CardDescription>
                Help us improve accessibility by reporting issues or suggestions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  If you encounter any accessibility barriers or have suggestions for improvement, please contact us. We value your feedback and are committed to addressing accessibility concerns promptly.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Accessibility Team</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Email:</strong> accessibility@cie.pes.edu</p>
                      <p><strong>Phone:</strong> +91-80-26721983</p>
                      <p><strong>Address:</strong> Center for Innovation and Entrepreneurship, PES University, Bangalore</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Response Time</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      We typically respond to accessibility feedback within 2-3 business days.
                    </p>
                    <p className="text-sm text-gray-600">
                      For urgent accessibility issues, please call our main office number.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
              <CardDescription>
                This accessibility statement is reviewed and updated regularly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                We regularly review and update this accessibility statement to reflect our ongoing commitment to digital accessibility. Updates are posted on this page with the revision date.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back to Policies */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/policies"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to All Policies
          </Link>
        </div>
      </section>
    </div>
  );
}
