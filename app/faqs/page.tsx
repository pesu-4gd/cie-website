"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/core/accordion';
import { HelpCircle, ChevronRight, Users, Building2, GraduationCap, BookOpen, DollarSign, Calendar } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

const faqs: FAQ[] = [
  // General FAQs
  {
    id: '1',
    question: 'What is CIE and what does it do?',
    answer: 'The Center for Innovation and Entrepreneurship (CIE) at PES University is dedicated to fostering innovation and entrepreneurship among students, faculty, and the broader community. We provide programs, mentorship, funding support, and infrastructure to help transform ideas into successful ventures.',
    category: 'General',
    tags: ['about', 'mission', 'overview']
  },
  {
    id: '2',
    question: 'Who can participate in CIE programs?',
    answer: 'CIE programs are primarily designed for PES University students, but we also welcome alumni, faculty, and external participants for specific programs. Each program has its own eligibility criteria, which are clearly mentioned in the program descriptions.',
    category: 'General',
    tags: ['eligibility', 'participation', 'students']
  },
  {
    id: '3',
    question: 'How can I stay updated with CIE activities and events?',
    answer: 'You can stay updated by subscribing to our newsletter, following our social media channels, checking our website regularly, and joining our WhatsApp groups for specific programs. We also send regular updates via email to registered participants.',
    category: 'General',
    tags: ['updates', 'newsletter', 'communication']
  },

  // Student Programs
  {
    id: '4',
    question: 'What is the difference between EIE Part 1 and EIE Part 2?',
    answer: 'EIE Part 1 focuses on foundational entrepreneurship concepts, idea generation, and basic business planning. EIE Part 2 is more advanced, covering detailed business model development, market research, financial planning, and pitch preparation. Part 2 requires completion of Part 1 or equivalent experience.',
    category: 'Student Programs',
    tags: ['EIE', 'courses', 'curriculum']
  },
  {
    id: '5',
    question: 'How do I apply for CIE programs?',
    answer: 'Applications for CIE programs are typically opened through our website and announced via email and social media. The application process varies by program but generally includes filling out an online form, submitting required documents, and sometimes attending an interview or assessment.',
    category: 'Student Programs',
    tags: ['application', 'registration', 'process']
  },
  {
    id: '6',
    question: 'Are CIE programs free for students?',
    answer: 'Most CIE programs for PES University students are either free or offered at a nominal fee. Some specialized workshops or external programs may have associated costs, which are clearly communicated during registration.',
    category: 'Student Programs',
    tags: ['fees', 'cost', 'pricing']
  },
  {
    id: '7',
    question: 'Can I get academic credits for participating in CIE programs?',
    answer: 'Yes, many CIE programs offer academic credits. EIE Part 1 and Part 2 are credit-bearing courses. Other programs may offer credits as electives or through the university\'s experiential learning framework. Check with your academic advisor for specific credit requirements.',
    category: 'Student Programs',
    tags: ['credits', 'academic', 'grades']
  },

  // Industry Partnerships
  {
    id: '8',
    question: 'How can my company partner with CIE?',
    answer: 'Companies can partner with CIE through various models including event sponsorship, mentorship programs, research collaborations, capstone projects, and Centers of Excellence partnerships. Contact us at cieinfo@pes.edu to discuss partnership opportunities.',
    category: 'Industry Partnerships',
    tags: ['partnership', 'collaboration', 'industry']
  },
  {
    id: '9',
    question: 'What are the benefits of partnering with CIE?',
    answer: 'Industry partners gain access to talented students, cutting-edge research, innovation projects, brand visibility, recruitment opportunities, and the chance to contribute to the entrepreneurship ecosystem. Specific benefits vary by partnership tier and type.',
    category: 'Industry Partnerships',
    tags: ['benefits', 'value', 'ROI']
  },
  {
    id: '10',
    question: 'Can companies post job openings through CIE?',
    answer: 'Yes, industry partners can post job openings and internship opportunities through our job portal. This gives companies access to our talented student and alumni network. Contact our industry relations team for more details.',
    category: 'Industry Partnerships',
    tags: ['jobs', 'recruitment', 'hiring']
  },

  // Alumni
  {
    id: '11',
    question: 'How can alumni get involved with CIE?',
    answer: 'Alumni can contribute through mentorship programs, guest lectures, funding student startups through our Alumni Angel Fund, sponsoring events, or joining our advisory board. We have various engagement opportunities based on your interests and availability.',
    category: 'Alumni',
    tags: ['alumni', 'involvement', 'mentorship']
  },
  {
    id: '12',
    question: 'What is the Alumni Angel Fund?',
    answer: 'The Alumni Angel Fund is an exclusive investment opportunity for CIE alumni to invest in promising student startups. The fund provides curated investment opportunities, due diligence support, and portfolio management. Minimum investment is ₹5 lakhs.',
    category: 'Alumni',
    tags: ['angel fund', 'investment', 'startups']
  },
  {
    id: '13',
    question: 'How can I update my information in the Alumni Directory?',
    answer: 'You can update your information by logging into the Alumni Directory portal on our website or by contacting us directly. We encourage alumni to keep their profiles updated to facilitate better networking and collaboration opportunities.',
    category: 'Alumni',
    tags: ['directory', 'profile', 'update']
  },

  // Funding & Support
  {
    id: '14',
    question: 'Does CIE provide funding for student startups?',
    answer: 'Yes, CIE provides various funding opportunities including seed grants, competition prizes, and connections to external funding sources. We also help students apply for government schemes like Startup India and various innovation challenges.',
    category: 'Funding & Support',
    tags: ['funding', 'grants', 'startups']
  },
  {
    id: '15',
    question: 'What kind of mentorship support is available?',
    answer: 'CIE offers structured mentorship programs with industry experts, successful entrepreneurs, and faculty members. Mentorship includes one-on-one sessions, group workshops, pitch feedback, and ongoing guidance throughout your entrepreneurial journey.',
    category: 'Funding & Support',
    tags: ['mentorship', 'guidance', 'support']
  },
  {
    id: '16',
    question: 'Can I use CIE facilities for my startup?',
    answer: 'Yes, CIE provides co-working spaces, meeting rooms, and access to various labs and facilities for incubated startups. Facility access is typically provided to startups that are part of our formal incubation program.',
    category: 'Funding & Support',
    tags: ['facilities', 'workspace', 'incubation']
  },

  // Events & Competitions
  {
    id: '17',
    question: 'What is CIE Ignite and how can I participate?',
    answer: 'CIE Ignite is our flagship ideathon that brings together students to develop innovative solutions. It features multiple stages including ideation, prototyping, and pitching, with substantial prize money. Registration opens annually and is announced on our website and social media.',
    category: 'Events & Competitions',
    tags: ['ignite', 'ideathon', 'competition']
  },
  {
    id: '18',
    question: 'Are CIE events open to students from other universities?',
    answer: 'Some CIE events are open to external participants, while others are exclusive to PES University students. Event descriptions clearly mention eligibility criteria. We encourage collaboration and often have inter-university competitions and workshops.',
    category: 'Events & Competitions',
    tags: ['events', 'external', 'participation']
  },
  {
    id: '19',
    question: 'How can I propose an event or workshop idea to CIE?',
    answer: 'We welcome event and workshop proposals from students, faculty, and industry partners. Submit your proposal through our contact form or email us directly with details about the proposed event, target audience, and expected outcomes.',
    category: 'Events & Competitions',
    tags: ['proposals', 'workshops', 'events']
  }
];

const categories = ['All', 'General', 'Student Programs', 'Industry Partnerships', 'Alumni', 'Funding & Support', 'Events & Competitions'];

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'General': return <HelpCircle className="h-4 w-4" />;
      case 'Student Programs': return <GraduationCap className="h-4 w-4" />;
      case 'Industry Partnerships': return <Building2 className="h-4 w-4" />;
      case 'Alumni': return <Users className="h-4 w-4" />;
      case 'Funding & Support': return <DollarSign className="h-4 w-4" />;
      case 'Events & Competitions': return <Calendar className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (Inside CIE style) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={SECTION_COLORS.insideCie.hero.background}
          accentColor="#f07f1a"
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#f07f1a] to-amber-500 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Frequently Asked </span><span className="bg-gradient-to-r from-[#f07f1a] to-amber-400 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about CIE programs, partnerships, and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section with Vertical Tabs and Accordion */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Vertical Category Tabs */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-2">
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#f07f1a] to-amber-500 bg-clip-text text-transparent">
                  Categories
                </h3>
                {categories.map((category) => {
                  const categoryFAQs = faqs.filter(faq => category === 'All' || faq.category === category);
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-[#f07f1a] to-amber-500 text-white shadow-md'
                          : 'bg-white border-2 border-gray-200 hover:border-[#f07f1a]/30 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={selectedCategory === category ? 'text-white' : 'text-[#f07f1a]'}>
                          {category !== 'All' && getCategoryIcon(category)}
                        </div>
                        <div>
                          <div className={`font-medium ${selectedCategory === category ? 'text-white' : 'text-gray-900'}`}>
                            {category}
                          </div>
                          <div className={`text-xs ${selectedCategory === category ? 'text-white/80' : 'text-gray-500'}`}>
                            {categoryFAQs.length} questions
                          </div>
                        </div>
                      </div>
                      <ChevronRight className={`h-4 w-4 transition-transform ${
                        selectedCategory === category ? 'text-white rotate-90' : 'text-gray-400 group-hover:translate-x-1'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FAQ Accordion List */}
            <div className="flex-1">
              {filteredFAQs.length === 0 ? (
                <Card className="text-center py-12 border-2 hover:border-black">
                  <CardContent>
                    <HelpCircle className="h-12 w-12 text-[#f07f1a] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No FAQs Found</h3>
                    <p className="text-gray-600 mb-4">
                      No questions match your criteria. Try adjusting your category filter.
                    </p>
                    <Button 
                      onClick={() => setSelectedCategory('All')}
                      className="bg-gradient-to-r from-[#f07f1a] to-amber-500 hover:from-[#d96d15] hover:to-amber-600 text-white"
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedCategory === 'All' ? 'All Questions' : selectedCategory}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'}
                    </p>
                  </div>
                  
                  <Accordion
                    className='flex w-full flex-col border-2 border-gray-200 rounded-lg p-4 bg-white'
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    variants={{
                      expanded: {
                        opacity: 1,
                        scale: 1,
                      },
                      collapsed: {
                        opacity: 0,
                        scale: 0.7,
                      },
                    }}
                  >
                    {filteredFAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id} className='py-3 border-b border-gray-200 last:border-b-0'>
                        <AccordionTrigger className='w-full py-0.5 text-left'>
                          <div className='flex items-start w-full'>
                            <ChevronRight className='h-5 w-5 text-[#f07f1a] transition-transform duration-200 group-data-expanded:rotate-90 mt-0.5 flex-shrink-0' />
                            <div className='ml-3 flex-1'>
                              <div className='flex items-center gap-2 mb-2'>
                                <Badge className="flex items-center space-x-1 bg-[#f07f1a]/10 text-[#f07f1a] border-[#f07f1a]/20 text-xs">
                                  {getCategoryIcon(faq.category)}
                                  <span>{faq.category}</span>
                                </Badge>
                              </div>
                              <div className='font-semibold text-gray-900 group-hover:text-[#f07f1a] transition-colors'>
                                {faq.question}
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className='origin-left'>
                          <div className='pl-8 pr-2 pt-2'>
                            <p className='text-gray-600 leading-relaxed mb-4'>
                              {faq.answer}
                            </p>
                            <div className='flex flex-wrap gap-2'>
                              {faq.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs border-[#f07f1a]/30 text-[#f07f1a]">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#00338d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-white bg-clip-text text-transparent">Still Have Questions?</span>
          </h2>
          <p className="text-xl text-white mb-8">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
              onClick={() => globalThis.location.href = 'mailto:cieinfo@pes.edu?subject=FAQ Inquiry'}
            >
              Contact Us
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-red-500 text-red-600 hover:bg-red-50"
              onClick={() => globalThis.location.href = 'mailto:cieinfo@pes.edu?subject=Schedule Meeting'}
            >
              Schedule a Meeting
            </Button> */}
          </div>
        </div>
      </section>


    </div>
  );
}