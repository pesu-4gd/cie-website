'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, FileText, Users, Lock, Eye, Download, Calendar, AlertTriangle } from 'lucide-react';

interface Policy {
  id: string;
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  version: string;
  downloadUrl?: string;
  isRequired: boolean;
}

const policies: Policy[] = [
  {
    id: '1',
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information when you use our services and website.',
    category: 'Privacy & Data',
    lastUpdated: '2024-01-15',
    version: '2.1',
    isRequired: true
  },
  {
    id: '2',
    title: 'Terms of Service',
    description: 'Legal terms and conditions governing the use of CIE services, programs, and facilities.',
    category: 'Legal',
    lastUpdated: '2024-01-10',
    version: '3.0',
    isRequired: true
  },
  {
    id: '3',
    title: 'Code of Conduct',
    description: 'Expected behavior and ethical standards for all CIE participants, mentors, and partners.',
    category: 'Conduct',
    lastUpdated: '2023-12-20',
    version: '1.5',
    isRequired: true
  },
  {
    id: '4',
    title: 'Intellectual Property Policy',
    description: 'Guidelines on ownership, protection, and sharing of intellectual property created through CIE programs.',
    category: 'Legal',
    lastUpdated: '2024-01-05',
    version: '2.0',
    isRequired: false
  },
  {
    id: '5',
    title: 'Anti-Harassment Policy',
    description: 'Our commitment to providing a safe, inclusive environment free from harassment and discrimination.',
    category: 'Conduct',
    lastUpdated: '2023-11-30',
    version: '1.3',
    isRequired: true
  },
  {
    id: '6',
    title: 'Data Security Policy',
    description: 'Measures and protocols we implement to protect sensitive data and maintain cybersecurity.',
    category: 'Privacy & Data',
    lastUpdated: '2024-01-12',
    version: '1.8',
    isRequired: false
  },
  {
    id: '7',
    title: 'Refund and Cancellation Policy',
    description: 'Terms and conditions for refunds, cancellations, and modifications of paid programs and services.',
    category: 'Financial',
    lastUpdated: '2023-12-15',
    version: '1.2',
    isRequired: false
  },
  {
    id: '8',
    title: 'Cookie Policy',
    description: 'Information about how we use cookies and similar technologies on our website.',
    category: 'Privacy & Data',
    lastUpdated: '2024-01-08',
    version: '1.4',
    isRequired: false
  },
  {
    id: '9',
    title: 'Partnership Agreement Template',
    description: 'Standard terms and conditions for industry partnerships and collaboration agreements.',
    category: 'Partnerships',
    lastUpdated: '2023-12-10',
    version: '2.2',
    downloadUrl: '/documents/partnership-template.pdf',
    isRequired: false
  },
  {
    id: '10',
    title: 'Student Participation Agreement',
    description: 'Terms and conditions for student participation in CIE programs, including rights and responsibilities.',
    category: 'Academic',
    lastUpdated: '2024-01-03',
    version: '1.6',
    isRequired: true
  }
];

const categories = ['All', 'Privacy & Data', 'Legal', 'Conduct', 'Financial', 'Partnerships', 'Academic'];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Privacy & Data': return <Lock className="h-5 w-5" />;
    case 'Legal': return <FileText className="h-5 w-5" />;
    case 'Conduct': return <Users className="h-5 w-5" />;
    case 'Financial': return <Shield className="h-5 w-5" />;
    case 'Partnerships': return <Users className="h-5 w-5" />;
    case 'Academic': return <FileText className="h-5 w-5" />;
    default: return <FileText className="h-5 w-5" />;
  }
};

export default function PoliciesPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const requiredPolicies = policies.filter(policy => policy.isRequired);
  const optionalPolicies = policies.filter(policy => !policy.isRequired);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Policies & </span>
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Legal Information</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important policies, terms, and legal information governing CIE services and programs.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-rose-50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <CardTitle className="text-red-900">Important Notice</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-red-800">
                These policies are regularly updated to reflect changes in our services and legal requirements. 
                Please review them periodically. By using CIE services, you agree to comply with these policies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Required Policies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Required Policies</span>
            </h2>
            <p className="text-gray-600">
              These policies are mandatory and apply to all users of CIE services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredPolicies.map((policy) => (
              <Card key={policy.id} className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-red-500 to-rose-500 p-2 rounded-lg text-white">
                        {getCategoryIcon(policy.category)}
                      </div>
                      <div>
                        <Badge className="mb-2 bg-red-600 text-white">Required</Badge>
                        <CardTitle className="text-lg text-gray-900">{policy.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-2">
                    {policy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Updated: {formatDate(policy.lastUpdated)}</span>
                      </span>
                      <Badge variant="outline" className="border-red-200 text-red-600">v{policy.version}</Badge>
                    </div>
                    
                    <Separator />
{/*                     
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 text-white">
                        <Eye className="h-4 w-4 mr-2" />
                        View Policy
                      </Button>
                      {policy.downloadUrl && (
                        <Button size="sm" variant="outline" className="border-2 border-red-500 text-red-600">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Policies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Additional Policies</span>
            </h2>
            <p className="text-gray-600">
              Additional policies and guidelines that may apply to specific services or programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optionalPolicies.map((policy) => (
              <Card key={policy.id} className="border-2 border-gray-200 bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-lg text-red-600">
                        {getCategoryIcon(policy.category)}
                      </div>
                      <div>
                        <Badge className="mb-2 bg-red-100 text-red-700 border border-red-200">{policy.category}</Badge>
                        <CardTitle className="text-lg text-gray-900">{policy.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-2">
                    {policy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Updated: {formatDate(policy.lastUpdated)}</span>
                      </span>
                      <Badge variant="outline" className="border-red-200 text-red-600">v{policy.version}</Badge>
                    </div>
                    
                    <Separator />
                    
                    {/* <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1 border-2 border-red-500 text-red-600">
                        <Eye className="h-4 w-4 mr-2" />
                        View Policy
                      </Button>
                      {policy.downloadUrl && (
                        <Button size="sm" variant="outline" className="border-2 border-red-500 text-red-600">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Policy Categories</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((category) => {
              const categoryPolicies = policies.filter(policy => policy.category === category);
              const requiredCount = categoryPolicies.filter(p => p.isRequired).length;
              
              return (
                <Card key={category} className="border-2 border-gray-200">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-red-500 to-rose-500 p-3 rounded-lg text-white">
                        {getCategoryIcon(category)}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900">{category}</CardTitle>
                        <CardDescription className="text-red-600">
                          {categoryPolicies.length} policies
                          {requiredCount > 0 && ` (${requiredCount} required)`}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categoryPolicies.slice(0, 2).map((policy) => (
                        <div key={policy.id} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{policy.title}</span>
                          {policy.isRequired && (
                            <Badge className="text-xs bg-red-600 text-white">Required</Badge>
                          )}
                        </div>
                      ))}
                      {categoryPolicies.length > 2 && (
                        <p className="text-xs text-gray-500">
                          +{categoryPolicies.length - 2} more policies
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-rose-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Questions About Our Policies?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            If you have questions about any of our policies or need clarification, please contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600"
              onClick={() => globalThis.location.href = 'mailto:cieinfo@pes.edu?subject=Policy Inquiry'}
            >
              Contact Legal Team
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white"
              onClick={() => globalThis.location.href = 'mailto:cieinfo@pes.edu?subject=Policy Update Request'}
            >
              Request Policy Update
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-red-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold mb-2">Legal Compliance</h3>
                <p className="text-red-100 text-sm">
                  All policies comply with Indian laws and university regulations
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Regular Updates</h3>
                <p className="text-red-100 text-sm">
                  Policies are reviewed and updated quarterly
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-red-100 text-sm">
                  All changes are communicated to affected users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}