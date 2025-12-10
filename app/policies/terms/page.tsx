'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Scale, 
  FileText, 
  Users, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  Calendar,
  ArrowRight,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing CIE services, you agree to be bound by these terms',
        'These terms apply to all students, faculty, and visitors',
        'Continued use constitutes acceptance of any modifications',
        'Violation of terms may result in service suspension'
      ]
    },
    {
      title: 'Academic Integrity',
      icon: GraduationCap,
      content: [
        'All work must be original and properly cited',
        'Collaboration policies must be followed',
        'Plagiarism and cheating are strictly prohibited',
        'Academic misconduct will result in disciplinary action'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: BookOpen,
      content: [
        'Students retain rights to their original work',
        'CIE may use anonymized work for educational purposes',
        'Respect intellectual property of others',
        'Report any IP violations immediately'
      ]
    },
    {
      title: 'Code of Conduct',
      icon: Users,
      content: [
        'Maintain respectful and professional behavior',
        'No harassment, discrimination, or bullying',
        'Follow university policies and local laws',
        'Report violations to appropriate authorities'
      ]
    }
  ];

  const prohibitedActivities = [
    'Unauthorized access to systems or data',
    'Distribution of malicious software',
    'Harassment or discrimination of any kind',
    'Violation of academic integrity policies',
    'Commercial use without permission',
    'Sharing login credentials'
  ];

  const contactInfo = {
    email: 'legal@cie.pes.edu',
    phone: '+91-80-26721983',
    address: 'Center for Innovation and Entrepreneurship, PES University, Bangalore'
  };

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
            <Badge className="mb-4 bg-[#f07f1a]/10 text-[#f07f1a] hover:bg-[#f07f1a]/20">
              <Scale className="h-4 w-4 mr-1" />
              Legal Document
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of <span className="bg-gradient-to-r from-[#f07f1a] to-amber-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              These terms govern your use of CIE services, programs, and facilities. Please read them carefully.
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
                <FileText className="h-5 w-5 text-[#f07f1a]" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to the Center for Innovation and Entrepreneurship (CIE) at PES University. These Terms of Service ("Terms") govern your use of our services, programs, facilities, and digital platforms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using any CIE services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <section.icon className="w-10 h-10 text-[#f07f1a]" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <ArrowRight className="h-4 w-4 text-[#f07f1a] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Prohibited Activities */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-[#f07f1a]" />
                Prohibited Activities
              </CardTitle>
              <CardDescription>
                The following activities are strictly prohibited and may result in immediate termination of services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#f07f1a] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Liability and Disclaimers */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#f07f1a]" />
                Liability and Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h4>
                  <p className="text-gray-700 text-sm">
                    CIE shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Availability</h4>
                  <p className="text-gray-700 text-sm">
                    We strive to maintain service availability but do not guarantee uninterrupted access to our services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Third-Party Content</h4>
                  <p className="text-gray-700 text-sm">
                    We are not responsible for third-party content, links, or services that may be accessible through our platform.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
              <CardDescription>
                We reserve the right to terminate or suspend your access to our services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your right to use the service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#f07f1a]" />
                Contact Information
              </CardTitle>
              <CardDescription>
                Questions about these Terms? Contact our legal team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Legal Department</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Email:</strong> {contactInfo.email}</p>
                    <p><strong>Phone:</strong> {contactInfo.phone}</p>
                    <p><strong>Address:</strong> {contactInfo.address}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Response Time</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    We typically respond to legal inquiries within 3-5 business days.
                  </p>
                  <p className="text-sm text-gray-600">
                    For urgent matters, please call our main office number.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
              <CardDescription>
                We reserve the right to modify these Terms at any time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
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
            className="inline-flex items-center gap-2 text-[#f07f1a] hover:text-[#d96d15] font-semibold transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to All Policies
          </Link>
        </div>
      </section>
    </div>
  );
}
