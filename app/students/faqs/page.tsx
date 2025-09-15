'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown,
  BookOpen,
  DollarSign,
  Users,
  Calendar,
  Award,
  Lightbulb,
  Target,
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

export default function StudentFAQsPage() {
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({
    eie: true
  });
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const faqCategories = [
    {
      id: 'eie',
      title: 'EIE Courses (Essentials of Innovation & Entrepreneurship)',
      icon: BookOpen,
      color: 'blue',
      faqs: [
        {
          id: 'eie-1',
          question: 'Why are EIE courses mandatory for all students?',
          answer: 'EIE courses are mandatory because they provide essential entrepreneurial and innovation skills that are crucial in today\'s rapidly evolving job market. These courses help students develop problem-solving abilities, creative thinking, and business acumen regardless of their technical specialization. They bridge the gap between technical knowledge and practical application, preparing students for both industry roles and entrepreneurial ventures.'
        },
        {
          id: 'eie-2', 
          question: 'How do EIE courses integrate with my major field of study?',
          answer: 'EIE courses are designed to complement your major by providing practical applications for your technical knowledge. For engineering students, EIE shows how to commercialize technical innovations. For business students, it provides startup methodologies. The courses use case studies and projects relevant to different fields, ensuring the content is applicable regardless of your specialization.'
        },
        {
          id: 'eie-3',
          question: 'What are the key components of EIE Part 1 and Part 2?',
          answer: 'EIE Part 1 covers foundational concepts including design thinking, opportunity identification, business model development, and basic entrepreneurship principles. EIE Part 2 builds on this with advanced topics like startup execution, funding strategies, scaling businesses, legal aspects, and practical application through the CIE Ignite Ideathon for eligible students.'
        },
        {
          id: 'eie-4',
          question: 'Can I get exemptions or credits for prior entrepreneurship experience?',
          answer: 'While EIE courses are mandatory for all students, those with significant prior entrepreneurship experience may be eligible for advanced tracks or additional mentorship opportunities. We encourage students with existing startups or business experience to connect with CIE faculty to discuss how to maximize their learning experience within the course structure.'
        }
      ]
    },
    {
      id: 'startup',
      title: 'Student Startup Program',
      icon: Lightbulb,
      color: 'orange',
      faqs: [
        {
          id: 'startup-1',
          question: 'How do I apply for the Student Startup Program?',
          answer: 'Applications for the Student Startup Program are accepted on a rolling basis. Submit your application through the CIE website with your business idea, team details, and preliminary business plan. The application process includes an initial screening, presentation to the review committee, and if selected, onboarding into our incubation ecosystem with access to mentorship, funding, and resources.'
        },
        {
          id: 'startup-2',
          question: 'What funding opportunities are available through CIE?',
          answer: 'CIE offers multiple funding pathways: up to ₹5 Lakh through Co-innovation Center (IHFC, IITD), Cisco-Nasscom thingQbator funding, up to $200K via PESU Venture Labs, and various grants through industry partnerships. Additionally, successful participants in CIE Ignite receive cash prizes and potential seed funding for promising ventures.'
        },
        {
          id: 'startup-3',
          question: 'Do I need a complete business plan to get started?',
          answer: 'No, you don\'t need a complete business plan initially. We welcome students at the idea stage and provide support to develop your concept into a viable business plan. Our program includes workshops on business model development, market research, and financial planning to help you build a comprehensive plan through the process.'
        },
        {
          id: 'startup-4',
          question: 'Can I participate while continuing my regular studies?',
          answer: 'Yes, the Student Startup Program is designed to be compatible with your academic schedule. Many participants successfully balance their startup activities with their studies. We provide flexible mentorship sessions, weekend workshops, and online resources to accommodate student schedules while providing comprehensive support.'
        }
      ]
    },
    {
      id: 'ignite',
      title: 'CIE Ignite Ideathon',
      icon: Target,
      color: 'green',
      faqs: [
        {
          id: 'ignite-1',
          question: 'Who is eligible to participate in CIE Ignite?',
          answer: 'CIE Ignite is exclusively designed for 2nd-year students across all disciplines at PES University. This timing allows students to apply their foundational EIE learning while having sufficient time to develop and potentially scale their ideas during their remaining academic years.'
        },
        {
          id: 'ignite-2',
          question: 'What are the four stages of CIE Ignite?',
          answer: 'CIE Ignite follows a structured 4-stage process: 1) Idea Validation - where teams present and refine their initial concepts, 2) Prototype Development - building minimum viable products with technical and business mentorship, 3) Market Testing - validating solutions with real users and gathering feedback, and 4) Final Pitch - presenting to industry judges for prizes and potential funding opportunities.'
        },
        {
          id: 'ignite-3',
          question: 'How are teams formed and what is the ideal team composition?',
          answer: 'Teams can be self-formed or CIE can help match complementary skills. The ideal team size is 3-4 members with diverse backgrounds - typically including technical expertise, business acumen, and creative/design skills. We encourage interdisciplinary teams combining students from different streams to create well-rounded startups.'
        },
        {
          id: 'ignite-4',
          question: 'What support do participants receive during the program?',
          answer: 'Participants receive comprehensive support including dedicated mentors from industry and academia, access to CIE\'s makerspace and prototyping facilities, workshops on business development and technical skills, potential funding for prototype development, and networking opportunities with successful entrepreneurs and investors.'
        }
      ]
    },
    {
      id: 'opportunities',
      title: 'Opportunities & Support',
      icon: Users,
      color: 'purple',
      faqs: [
        {
          id: 'opp-1',
          question: 'How can I become a Teaching Assistant (TA) for CIE programs?',
          answer: 'TA opportunities are available for students who have successfully completed EIE courses with good academic standing. TAs assist in workshops like PAML (Practical Approach to Machine Learning), help with program coordination, and gain valuable teaching and leadership experience. Apply through the CIE office with your academic transcripts and a statement of interest.'
        },
        {
          id: 'opp-2',
          question: 'What internship opportunities are available with Centers of Excellence?',
          answer: 'CIE facilitates internships with various Centers of Excellence including CRAIS, QuaNaD, and others. These internships offer hands-on research experience in cutting-edge fields like AI, IoT, quantum technology, and robotics. Students work directly with faculty on research projects and gain exposure to industry collaboration.'
        },
        {
          id: 'opp-3',
          question: 'How does the CIE Industry Mentor Program work?',
          answer: 'The CIE Industry Mentor Program pairs students with experienced professionals from partner companies like Cisco, Intel, and Deloitte. Mentors provide personalized guidance on startup development, career growth, and industry insights. The program includes regular one-on-one sessions, networking events, and workshops with industry leaders.'
        },
        {
          id: 'opp-4',
          question: 'What are the benefits of joining student clubs like E-Cell and CMS?',
          answer: 'Student clubs offer leadership opportunities, networking with like-minded peers, organizing large-scale events like E-Summit, gaining practical experience in event management and team leadership, and building a strong alumni network. Members also get priority access to exclusive workshops, industry visits, and mentorship opportunities.'
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources & Facilities',
      icon: Award,
      color: 'red',
      faqs: [
        {
          id: 'res-1',
          question: 'What facilities are available for prototype development?',
          answer: 'CIE provides access to state-of-the-art makerspaces equipped with 3D printers, electronics prototyping equipment, software development resources, and testing facilities. Students also have access to specialized labs in partner Centers of Excellence for advanced prototyping and testing needs.'
        },
        {
          id: 'res-2',
          question: 'How can I access funding for my project or startup?',
          answer: 'Multiple funding avenues are available: CIE\'s internal grants for prototype development, external funding through programs like Cisco-Nasscom thingQbator (up to ₹5 Lakh), PESU Venture Labs (up to $200K), government schemes like BIRAC and DST, and connections to angel investors and VCs through our network.'
        },
        {
          id: 'res-3',
          question: 'What intellectual property support is available?',
          answer: 'CIE provides guidance on patent filing, trademark registration, and IP protection strategies. We have partnerships with legal firms specializing in IP law and offer workshops on intellectual property basics. Students working on innovative projects receive support for documenting and protecting their innovations.'
        },
        {
          id: 'res-4',
          question: 'How can I connect with successful CIE alumni?',
          answer: 'CIE maintains an active alumni network with regular networking events, an online alumni directory, mentorship programs pairing current students with successful graduates, and annual reunions. Alumni often return as guest speakers, mentors, and investors, creating ongoing opportunities for connection and support.'
        }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'cieprogram@pes.edu',
      action: 'mailto:cieprogram@pes.edu'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      info: 'CIE Office, PES University\nRR & EC Campus',
      action: null
    },
    {
      icon: MessageCircle,
      title: 'Office Hours',
      info: 'Monday - Friday\n9:00 AM - 6:00 PM',
      action: null
    }
  ];

  const quickLinks = [
    {
      title: 'Student Startup Program',
      href: '/students/programs',
      description: 'Learn more about our flagship startup program'
    },
    {
      title: 'CIE Ignite Registration',
      href: '/students/events/cie-ignite',
      description: 'Register for our annual ideathon'
    },
    {
      title: 'Student Resources',
      href: '/students/resources',
      description: 'Access guides, templates, and tools'
    },
    {
      title: 'Mentorship Program',
      href: '/students/mentorship',
      description: 'Connect with industry mentors'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00338d] via-blue-700 to-[#f07f1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30">
                <HelpCircle className="w-4 h-4 mr-2" />
                Get Answers
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked
              <span className="block text-blue-200">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get clear answers about EIE courses, Student Startup Program, funding opportunities, and how to maximize your CIE experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get <span className="text-[#00338d]">Quick</span> Answers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our comprehensive FAQ sections or search for specific topics.
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              const isOpen = openCategories[category.id];
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full p-8 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 bg-${category.color}-100 rounded-xl flex items-center justify-center mr-4`}>
                          <IconComponent className={`w-6 h-6 text-${category.color}-600`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      </div>
                      <ChevronDown 
                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </button>
                  
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-8 space-y-6">
                        {category.faqs.map((faq, faqIndex) => {
                          const isQuestionOpen = openQuestions[faq.id];
                          
                          return (
                            <div key={faq.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                              <button
                                onClick={() => toggleQuestion(faq.id)}
                                className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                              >
                                <div className="flex items-center justify-between">
                                  <h4 className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                  </h4>
                                  <ChevronDown 
                                    className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 flex-shrink-0 ${
                                      isQuestionOpen ? 'rotate-180' : ''
                                    }`} 
                                  />
                                </div>
                              </button>
                              
                              {isQuestionOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="border-t border-gray-200 p-6 bg-gray-50"
                                >
                                  <p className="text-gray-700 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </motion.div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quick <span className="text-[#f07f1a]">Links</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access key resources and programs directly from here.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = link.href}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00338d] transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {link.description}
                </p>
                <div className="flex items-center text-[#00338d] font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Still Have <span className="text-[#00338d]">Questions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our CIE team is here to help with personalized guidance and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl text-center"
                >
                  <div className="w-16 h-16 bg-[#00338d] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{contact.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                    {contact.info}
                  </p>
                  {contact.action && (
                    <Button 
                      className="mt-4 bg-[#00338d] hover:bg-blue-700 text-white"
                      onClick={() => window.location.href = contact.action}
                    >
                      Contact Now
                    </Button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#00338d] to-[#f07f1a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Don't let questions hold you back. Reach out for personalized guidance or dive into our programs today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => window.location.href = 'mailto:cieprogram@pes.edu'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact CIE
              </Button>
              <Button 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
                onClick={() => window.location.href = '/students/programs'}
              >
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}