'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-
import { HelpCircle, Search, ChevronDown, ChevronUp, Users, Building2, GraduationCap, BookOpen, DollarSign, Calendar } from 'lucide-react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about CIE programs, partnerships, and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="flex items-center space-x-2"
              >
                {category !== 'All' && getCategoryIcon(category)}
                <span>{category}</span>
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredFAQs.length} of {faqs.length} questions
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No FAQs Found</h3>
                <p className="text-gray-600 mb-4">
                  No questions match your search criteria. Try adjusting your search terms or category filter.
                </p>
                <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <Card key={faq.id} className="hover:shadow-lg transition-shadow duration-300">
                  <Collapsible
                    open={openItems.includes(faq.id)}
                    onOpenChange={() => toggleItem(faq.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge variant="secondary" className="flex items-center space-x-1">
                                {getCategoryIcon(faq.category)}
                                <span>{faq.category}</span>
                              </Badge>
                            </div>
                            <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                          </div>
                          <div className="ml-4">
                            {openItems.includes(faq.id) ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <p className="text-gray-600 leading-relaxed mb-4">{faq.answer}</p>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Contact Us
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((category) => {
              const categoryFAQs = faqs.filter(faq => faq.category === category);
              return (
                <Card key={category} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      onClick={() => setSelectedCategory(category)}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        {getCategoryIcon(category)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category}</CardTitle>
                        <CardDescription>{categoryFAQs.length} questions</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {categoryFAQs.length > 0 && categoryFAQs[0].question}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}