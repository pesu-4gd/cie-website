import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BookOpen, Phone, HelpCircle, FileText, Users } from 'lucide-react';

const MorePage = () => {
  const sections = [
    {
      title: 'About CIE',
      description: 'Learn about our mission, vision, and team',
      icon: Users,
      href: '/about',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Research & Publications',
      description: 'Explore our academic research and publications',
      icon: BookOpen,
      href: '/research',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team',
      icon: Phone,
      href: '/contact',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'FAQs',
      description: 'Frequently asked questions',
      icon: HelpCircle,
      href: '/faqs',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Policies',
      description: 'Privacy policy and terms of use',
      icon: FileText,
      href: '/policies',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          More Information
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover additional resources, information about CIE, and ways to connect with us.
        </p>
      </div>

      {/* Sections Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.href} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {section.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full group-hover:bg-blue-600 transition-colors">
                  <Link href={section.href} className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Something Else?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our team is here to help you with any questions or information you need.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <Link href="/contact" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Our Team
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MorePage;