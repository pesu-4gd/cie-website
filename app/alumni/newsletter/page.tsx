'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Mail,
  Calendar,
  TrendingUp,
  BookOpen,
  Building2,
  Star,
  Network,
  Bell,
  Download,
  FileText,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';

export default function NewsletterPage() {
  const [selectedIssue, setSelectedIssue] = React.useState(0);

  // Newsletter editions with actual PDF links
  const newsletterEditions = [
    {
      issue: 10,
      title: 'CIE Newsletter - Issue 10',
      date: 'December 2023',
      description: 'Latest updates from the Centre for Innovation and Entrepreneurship featuring startup success stories, program highlights, and community achievements.',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2023/12/CIE-Newsletter_Issue-8.pdf',
      image: '/assets/issue-10.jpg',
      featured: true
    },
    {
      issue: 9,
      title: 'CIE Newsletter - Issue 9',
      date: 'December 2023',
      description: 'Innovation highlights and entrepreneurship success stories from the CIE community.',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2023/12/CIE-Newsletter_Issue-8.pdf',
      image: '/assets/issue-9.jpg',
      featured: false
    },
    {
      issue: 8,
      title: 'CIE Newsletter - Issue 8',
      date: 'December 2023',
      description: 'Celebrating achievements and breakthroughs in innovation across the ecosystem.',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2023/12/CIE-Newsletter_Issue-8.pdf',
      image: '/assets/issue-8.jpg',
      featured: false
    },
    {
      issue: 7,
      title: 'CIE Newsletter - Issue 7',
      date: 'June 2023',
      description: 'Mid-year innovation roundup and upcoming initiatives from CIE.',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2023/07/CIE-Newsletter-Issue7_Jun2023.pdf',
      image: '/assets/issue-7.jpg',
      featured: false
    },
    {
      issue: 6,
      title: 'CIE Newsletter - Issue 6',
      date: 'August 2022',
      description: 'Startup ecosystem updates and entrepreneurial journeys.',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2022/08/CIE-Newsletter_Aug2022-1.pdf',
      image: '/assets/issue-6.jpg',
      featured: false
    },
    {
      issue: 5,
      title: 'CIE Newsletter - Issue 5',
      date: 'March 2020',
      description: 'Innovation in challenging times and resilience stories.',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2020/07/CIE-Newsletter_March2020.pdf',
      image: '/assets/issue-5.jpg',
      featured: false
    },
    {
      issue: 4,
      title: 'CIE Newsletter - Issue 4',
      date: 'September 2019',
      description: 'Growing the innovation ecosystem and new ventures.',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2019/09/cie_newsletter_web-1.pdf',
      image: '/assets/issue-4.jpg',
      featured: false
    },
    {
      issue: 3,
      title: 'CIE Newsletter - Issue 3',
      date: '2019',
      description: 'Entrepreneurship education and startup success stories.',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2019/pdf/CIE%20Newsletter_Issue3r.pdf',
      image: '/assets/issue-3.jpg',
      featured: false
    },
    {
      issue: 2,
      title: 'CIE Newsletter - Issue 2',
      date: 'September 2019',
      description: 'Building connections and fostering innovation culture.',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2019/09/CIE-Newsletter-Issue-2.pdf',
      image: '/assets/issue-2.jpg',
      featured: false
    },
    {
      issue: 1,
      title: 'CIE Newsletter - Issue 1',
      date: 'Q3 2018',
      description: 'Inaugural edition - Launching the CIE newsletter.',
      pdfUrl: 'https://cie.pes.edu/wp-content/uploads/2019/09/CIE-Newsletter-Q3-2018.pdf',
      image: '/assets/issue-1.jpg',
      featured: false
    }
  ];

  const newsletterSections = [
    {
      title: 'Innovation Stories',
      description: 'Groundbreaking projects and innovative solutions from the CIE community.',
      icon: Star,
    },
    {
      title: 'Startup Spotlight',
      description: 'Featured startups and their journey from ideation to success.',
      icon: TrendingUp,
    },
    {
      title: 'Events & Workshops',
      description: 'Upcoming events, bootcamps, and networking opportunities.',
      icon: Calendar,
    },
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with industry leaders and mentorship programs.',
      icon: Building2,
    },
    {
      title: 'Research & Development',
      description: 'Latest research initiatives and technology developments.',
      icon: BookOpen,
    },
    {
      title: 'Community Updates',
      description: 'News, achievements, and upcoming opportunities from CIE.',
      icon: Network,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section - Clean, no hero */}
      <section className="pt-8 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-100 text-amber-700 mb-6">
              <FileText className="w-4 h-4 mr-2" />
              CIE Newsletter Archive
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              CIE Newsletter
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected with innovation stories, startup journeys, and community updates 
              from the Centre for Innovation and Entrepreneurship.
            </p>
          </motion.div>

          {/* Quick Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-10"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">10</div>
              <div className="text-sm text-gray-500">Issues Published by far</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">6+</div>
              <div className="text-sm text-gray-500">Years Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">100+</div>
              <div className="text-sm text-gray-500">Stories Featured</div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Newsletter Archive - Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">All Issues</h2>
            <p className="text-gray-600">Browse through all editions of the CIE Newsletter</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Issue Selection Grid */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 gap-3">
                {newsletterEditions.map((edition, index) => (
                  <motion.div
                    key={edition.issue}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`relative rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                      selectedIssue === index
                        ? 'border-amber-500 shadow-lg ring-2 ring-amber-200 col-span-2 lg:col-span-1'
                        : 'border-gray-200 hover:border-amber-300 hover:shadow-md'
                    }`}
                  >
                    <button
                      onClick={() => setSelectedIssue(selectedIssue === index ? -1 : index)}
                      className="w-full text-left"
                    >
                      {/* Cover Image */}
                      <div className="relative aspect-[3/4] bg-gradient-to-br from-amber-100 to-yellow-100">
                        <Image
                          src={edition.image}
                          alt={edition.title}
                          fill
                          className="object-cover"
                        />
                        {/* Issue Number Badge */}
                        <div className={`absolute top-2 right-2 w-8 h-8 rounded-lg flex items-center justify-center ${
                          selectedIssue === index
                            ? 'bg-amber-500 text-white'
                            : 'bg-white/90 text-gray-700'
                        }`}>
                          <span className="text-sm font-bold">{edition.issue}</span>
                        </div>
                        {/* Latest Badge */}
                        {edition.featured && (
                          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                            Latest
                          </div>
                        )}
                      </div>
                      {/* Issue Info */}
                      <div className={`p-3 text-left ${
                        selectedIssue === index ? 'bg-amber-50' : 'bg-white'
                      }`}>
                        <p className="font-semibold text-gray-900 text-sm">Issue {edition.issue}</p>
                        <p className="text-xs text-gray-500">{edition.date}</p>
                      </div>
                    </button>
                    
                    {/* Mobile Expanded View */}
                    {selectedIssue === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-amber-50 p-4 border-t border-amber-200"
                      >
                        <h4 className="font-bold text-gray-900 mb-1">{edition.title}</h4>
                        <p className="text-xs text-gray-600 mb-3 line-clamp-2">{edition.description}</p>
                        <div className="flex gap-2">
                          <a
                            href={edition.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View PDF
                          </a>
                          <a
                            href={edition.pdfUrl}
                            download
                            className="flex-1 inline-flex items-center justify-center gap-1.5 border-2 border-amber-500 text-amber-600 hover:bg-amber-100 px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Selected Issue Detail - Desktop Only */}
            <div className="hidden lg:block lg:col-span-2">
              {selectedIssue >= 0 ? (
              <motion.div
                key={selectedIssue}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden sticky top-24"
              >
                <div className="flex flex-col md:flex-row gap-0">
                  {/* Cover Image - Left side, tall */}
                  <div className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-[3/4] bg-gradient-to-br from-amber-50 to-yellow-50">
                    <Image
                      src={newsletterEditions[selectedIssue].image}
                      alt={newsletterEditions[selectedIssue].title}
                      fill
                      className="object-contain"
                    />
                    {/* Issue Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl px-4 py-2 shadow-lg">
                      <div className="text-xs font-semibold text-yellow-100">ISSUE</div>
                      <div className="text-2xl font-bold text-white text-center">{newsletterEditions[selectedIssue].issue}</div>
                    </div>
                    {newsletterEditions[selectedIssue].featured && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        Latest Edition
                      </div>
                    )}
                  </div>

                  {/* Content - Right side */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {newsletterEditions[selectedIssue].title}
                    </h3>
                    <p className="text-gray-500 mb-4 flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      {newsletterEditions[selectedIssue].date}
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {newsletterEditions[selectedIssue].description}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <a
                        href={newsletterEditions[selectedIssue].pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View PDF
                      </a>
                      <a
                        href={newsletterEditions[selectedIssue].pdfUrl}
                        download
                        className="inline-flex items-center justify-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-xl font-semibold transition-colors"
                      >
                        <Download className="w-5 h-5" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              ) : (
                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 flex flex-col items-center justify-center text-center sticky top-24 min-h-[400px]">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Select a Newsletter</h3>
                  <p className="text-gray-500">Click on any issue to view details and download</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              What&apos;s Inside Each Issue
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Curated content sections to keep you informed and engaged with the CIE community.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletterSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <IconComponent className="w-10 h-10 text-amber-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-[#00338d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Bell className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-yellow-100 mb-8 max-w-xl mx-auto">
              Get the latest CIE newsletter delivered to your inbox. Subscribe now to never miss an update.
            </p>
            <Button 
              size="lg"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
              onClick={() => globalThis.location.href = 'mailto:cieprogram@pes.edu?subject=Subscribe%20to%20CIE%20Newsletter'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Subscribe to Newsletter
            </Button>
            <p className="text-yellow-100 text-sm mt-4">
              Questions? Email us at <a href="mailto:cieprogram@pes.edu" className="underline">cieprogram@pes.edu</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}