'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  UserCheck, 
  FileText, 
  Calendar,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal information (name, email, student ID)',
        'Academic records and program enrollment data',
        'Usage analytics and website interaction data',
        'Communication preferences and feedback'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: UserCheck,
      content: [
        'Provide educational services and program access',
        'Send important announcements and updates',
        'Improve our programs and user experience',
        'Comply with academic and legal requirements'
      ]
    },
    {
      title: 'Data Protection',
      icon: Shield,
      content: [
        'Encrypted data transmission and storage',
        'Regular security audits and updates',
        'Limited access to authorized personnel only',
        'Secure backup and recovery procedures'
      ]
    },
    {
      title: 'Your Rights',
      icon: CheckCircle,
      content: [
        'Access and review your personal data',
        'Request corrections or updates',
        'Opt-out of non-essential communications',
        'Request data deletion (subject to academic requirements)'
      ]
    }
  ];

  const contactInfo = {
    email: 'privacy@cie.pes.edu',
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
            <Badge className="mb-4 bg-[#f07f1a]/10 text-[#f07f1a] border border-[#f07f1a]/20">
              <Shield className="h-4 w-4 mr-1" />
              Legal Document
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy <span className="bg-gradient-to-r from-[#f07f1a] to-amber-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information at CIE.
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
                The Center for Innovation and Entrepreneurship (CIE) at PES University is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, programs, and website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you consent to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Policy Sections */}
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

          {/* Data Retention */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-[#f07f1a]" />
                Data Retention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Academic records are retained according to university policies and legal requirements.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Important Note</h4>
                    <p className="text-yellow-700 text-sm">
                      Some academic records must be retained permanently for accreditation and legal compliance purposes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-[#f07f1a]" />
                Contact Us
              </CardTitle>
              <CardDescription>
                Questions about this Privacy Policy? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Privacy Officer</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Email:</strong> {contactInfo.email}</p>
                    <p><strong>Phone:</strong> {contactInfo.phone}</p>
                    <p><strong>Address:</strong> {contactInfo.address}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Response Time</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    We typically respond to privacy inquiries within 5-7 business days.
                  </p>
                  <p className="text-sm text-gray-600">
                    For urgent privacy concerns, please call our main office number.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
              <CardDescription>
                We may update this Privacy Policy from time to time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                We will notify you of any material changes to this Privacy Policy by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
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
