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
      color: 'from-[#f07f1a] to-amber-500'
    },
    {
      title: 'Research & Publications',
      description: 'Explore our academic research and publications',
      icon: BookOpen,
      href: '/research',
      color: 'from-[#f07f1a] to-amber-500'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team',
      icon: Phone,
      href: '/contact',
      color: 'from-[#f07f1a] to-amber-500'
    },
    {
      title: 'FAQs',
      description: 'Frequently asked questions',
      icon: HelpCircle,
      href: '/faqs',
      color: 'from-[#f07f1a] to-amber-500'
    },
    {
      title: 'Policies',
      description: 'Privacy policy and terms of use',
      icon: FileText,
      href: '#',
      color: 'from-[#f07f1a] to-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Interactive Hexagonal Background */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={insideCieColors.hero.background}
          // Force the hexagon accent to orange to match the new highlight
          accentColor="#f07f1a"
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
            <span className="block mt-4 bg-gradient-to-r from-[#f07f1a] to-amber-400 bg-clip-text text-transparent">
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
                className="group bg-gradient-to-r from-[#f07f1a] to-amber-500 hover:from-[#d96d15] hover:to-amber-600 text-white rounded-xl font-semibold uppercase"
              >
                Learn About CIE
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="cie"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm uppercase"
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
              <Card key={section.href} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#f07f1a]/30">
                <CardHeader className="text-center">
                  <Icon className="w-12 h-12 text-[#f07f1a] mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#f07f1a] transition-colors">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild className="w-full group-hover:bg-[#f07f1a] transition-colors">
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
          <div className="bg-gradient-to-r from-[#f07f1a]/10 to-amber-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Something Else?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help you with any questions or information you need.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-[#f07f1a] to-amber-500 hover:from-[#d96d15] hover:to-amber-600 text-white">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
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