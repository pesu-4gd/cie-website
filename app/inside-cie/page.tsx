'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import Link from 'next/link';
import { ArrowRight, BookOpen, Phone, HelpCircle, FileText, Users, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const insideCieColors = SECTION_COLORS.insideCie;

const InsideCIEPage = () => {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Interactive Hexagonal Background */}
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground 
          primaryColor={insideCieColors.hero.background}
          accentColor={insideCieColors.hero.hexagonAccent}
          className="absolute inset-0 z-0"
        />
        
        {/* Hero Content - Centered */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white mb-8"
          >
            <Building className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Inside CIE</span>
          </motion.div>

          {/* Title - Centered */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Behind the Innovation
            <span className="block mt-4 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Discover Our Story
            </span>
          </motion.h1>

          {/* Subtitle - Centered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Discover additional resources, information about CIE, and ways to connect with us.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/about">
              <Button 
                variant="default" 
                size="lg"
                className="group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white"
              >
                Learn About CIE
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

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
    </div>
  );
};

export default InsideCIEPage;