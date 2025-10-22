'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Clock, 
  Target, 
  Building2, 
  Calendar,
  Rocket,
  Globe,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/design-system';

const BasecampPage = () => {
  const [currentSessionSlide, setCurrentSessionSlide] = useState(0);
  const [currentExpertSlide, setCurrentExpertSlide] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [isExpertAutoScrollPaused, setIsExpertAutoScrollPaused] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const expertAutoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const stats = [
    { label: "Weekly Sessions", value: "9", icon: Calendar },
    { label: "Expert Speakers", value: "5", icon: Users },
    { label: "Domains Covered", value: "7", icon: Target },
    { label: "Engineering Branches", value: "5", icon: Building2 },
    { label: "Avg Session Duration", value: "2hrs", icon: Clock },
    { label: "Survey Responses", value: "348", icon: MessageSquare },
    { label: "Highest Attendance", value: "96", icon: TrendingUp },
    { label: "Average Attendance", value: "58", icon: Users }
  ];

  const sessions = [
    {
      id: 1,
      title: "Entrepreneurship Fundamentals",
      week: "Week 1",
      description: "Introduction to entrepreneurship ecosystem and mindset development through interactive activities.",
      topics: ["Startup Ecosystem", "Entrepreneurial Mindset", "Innovation Process"],
      image: "/assets/basecamp/session-1.jpg",
      attendance: 78
    },
    {
      id: 2,
      title: "Idea Generation & Validation",
      week: "Week 2", 
      description: "Hands-on workshop for generating innovative ideas and validating them with real market feedback.",
      topics: ["Design Thinking", "Market Research", "Customer Validation"],
      image: "/assets/basecamp/session-2.jpg",
      attendance: 65
    },
    {
      id: 3,
      title: "Business Model Canvas",
      week: "Week 3",
      description: "Interactive session on building sustainable business models using canvas methodology.",
      topics: ["Business Models", "Value Proposition", "Revenue Streams"],
      image: "/assets/basecamp/session-3.jpg",
      attendance: 72
    },
    {
      id: 4,
      title: "Technology & Innovation",
      week: "Week 4",
      description: "Exploring emerging technologies and their application in startup solutions.",
      topics: ["Emerging Tech", "Digital Transformation", "Tech Trends"],
      image: "/assets/basecamp/session-4.jpg",
      attendance: 58
    },
    {
      id: 5,
      title: "Marketing & Branding",
      week: "Week 5",
      description: "Building brand identity and marketing strategies for startup success.",
      topics: ["Brand Building", "Digital Marketing", "Customer Acquisition"],
      image: "/assets/basecamp/session-5.jpg",
      attendance: 83
    },
    {
      id: 6,
      title: "Financial Planning",
      week: "Week 6",
      description: "Understanding startup finances, funding options, and financial management.",
      topics: ["Startup Finances", "Funding Options", "Financial Planning"],
      image: "/assets/basecamp/session-6.jpg",
      attendance: 91
    },
    {
      id: 7,
      title: "Legal & Regulatory",
      week: "Week 7",
      description: "Legal aspects of starting and running a business in India.",
      topics: ["Business Registration", "Compliance", "Intellectual Property"],
      image: "/assets/basecamp/session-7.jpg",
      attendance: 67
    },
    {
      id: 8,
      title: "Pitching & Presentation",
      week: "Week 8",
      description: "Mastering the art of pitching ideas effectively to investors and stakeholders.",
      topics: ["Pitch Deck", "Presentation Skills", "Investor Relations"],
      image: "/assets/basecamp/session-8.jpg",
      attendance: 94
    },
    {
      id: 9,
      title: "Startup Journey & Networking",
      week: "Week 9",
      description: "Real entrepreneur stories and networking opportunities with the startup community.",
      topics: ["Success Stories", "Networking", "Community Building"],
      image: "/assets/basecamp/session-9.jpg",
      attendance: 96
    }
  ];

  // Organize sessions into groups of 3 for carousel
  const sessionsPerSlide = 3;
  const sessionSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < sessions.length; i += sessionsPerSlide) {
      slides.push(sessions.slice(i, i + sessionsPerSlide));
    }
    return slides;
  }, [sessions.length]);

  const nextSessionSlide = () => {
    setCurrentSessionSlide((prev) => (prev + 1) % sessionSlides.length);
  };

  const prevSessionSlide = () => {
    setCurrentSessionSlide((prev) => (prev - 1 + sessionSlides.length) % sessionSlides.length);
  };

  // Auto-scroll functionality for sessions
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      
      autoScrollIntervalRef.current = setInterval(() => {
        if (!isAutoScrollPaused) {
          setCurrentSessionSlide((prev) => (prev + 1) % sessionSlides.length);
        }
      }, 2000); // Auto-scroll every 2 seconds
    };

    if (sessionSlides.length > 1 && !isAutoScrollPaused) {
      startAutoScroll();
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [sessionSlides.length, isAutoScrollPaused]);

  // Pause auto-scroll when user interacts
  const handleManualNavigation = (callback: () => void) => {
    setIsAutoScrollPaused(true);
    callback();
    
    // Resume auto-scroll after 10 seconds of no interaction
    setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 10000);
  };

  const experts = [
    {
      name: "Industry Expert 1",
      company: "Tech Startup",
      topic: "Startup Ecosystem & Opportunities",
      description: "Shared insights on navigating the startup landscape and identifying market opportunities.",
      image: "/assets/basecamp/expert-1.jpg"
    },
    {
      name: "Industry Expert 2", 
      company: "FinTech Company",
      topic: "Financial Technology Innovation",
      description: "Explored fintech trends and how technology is disrupting traditional finance.",
      image: "/assets/basecamp/expert-2.jpg"
    },
    {
      name: "Industry Expert 3",
      company: "E-commerce Platform",
      topic: "Digital Commerce & Customer Experience",
      description: "Discussed customer-centric approaches and digital transformation strategies.",
      image: "/assets/basecamp/expert-3.jpg"
    },
    {
      name: "Industry Expert 4",
      company: "Healthcare Startup", 
      topic: "Healthcare Innovation & Impact",
      description: "Highlighted opportunities in healthcare technology and social impact.",
      image: "/assets/basecamp/expert-4.jpg"
    },
    {
      name: "Industry Expert 5",
      company: "EdTech Venture",
      topic: "Education Technology & Learning",
      description: "Shared vision on transforming education through technology and innovation.",
      image: "/assets/basecamp/expert-5.jpg"
    }
  ];

  // Expert sessions auto-scroll
  const expertsPerSlide = 2;
  const expertSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < experts.length; i += expertsPerSlide) {
      slides.push(experts.slice(i, i + expertsPerSlide));
    }
    return slides;
  }, [experts.length]);

  const nextExpertSlide = () => {
    setCurrentExpertSlide((prev) => (prev + 1) % expertSlides.length);
  };

  const prevExpertSlide = () => {
    setCurrentExpertSlide((prev) => (prev - 1 + expertSlides.length) % expertSlides.length);
  };

  // Expert auto-scroll
  useEffect(() => {
    const startExpertAutoScroll = () => {
      if (expertAutoScrollIntervalRef.current) {
        clearInterval(expertAutoScrollIntervalRef.current);
      }
      
      expertAutoScrollIntervalRef.current = setInterval(() => {
        if (!isExpertAutoScrollPaused) {
          setCurrentExpertSlide((prev) => (prev + 1) % expertSlides.length);
        }
      }, 2000); // Auto-scroll every 2 seconds
    };

    if (expertSlides.length > 1 && !isExpertAutoScrollPaused) {
      startExpertAutoScroll();
    }

    return () => {
      if (expertAutoScrollIntervalRef.current) {
        clearInterval(expertAutoScrollIntervalRef.current);
      }
    };
  }, [expertSlides.length, isExpertAutoScrollPaused]);

  const handleExpertManualNavigation = (callback: () => void) => {
    setIsExpertAutoScrollPaused(true);
    callback();
    
    setTimeout(() => {
      setIsExpertAutoScrollPaused(false);
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-pes-navy via-blue-600 to-pes-orange bg-clip-text text-transparent mb-6">
              CIE Basecamp 2018
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Weekly sessions designed to introduce entrepreneurship and decode the start-up journey of 
              guest entrepreneurs. Interactive learning filled with fun activities, live examples, and 
              direct interaction with fantastic entrepreneurs and start-ups!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-pes-navy to-blue-600 hover:from-pes-navy/90 hover:to-blue-600/90 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                View Program Details
              </Button>
              <Button variant="outline" className="border-2 border-pes-orange text-pes-orange hover:bg-pes-orange hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
                <BookOpen className="w-5 h-5 mr-2" />
                Learning Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Basecamp by Numbers Image */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-pes-navy mb-4">Basecamp 2018 by Numbers</h2>
            <p className="text-xl text-gray-600">Interactive Learning with Measurable Impact</p>
          </motion.div>

          {/* Official Basecamp by Numbers Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-center"
          >
            <div className="relative max-w-4xl w-full h-[400px] lg:h-[500px] rounded-2xl bg-gradient-to-br from-[#2B9EB3] to-[#3E3C6B] shadow-2xl flex items-center justify-center">
              <div className="text-center text-white px-8">
                <h3 className="text-4xl lg:text-5xl font-bold mb-4">CIE Basecamp</h3>
                <p className="text-xl lg:text-2xl opacity-90">Foundation for Innovation</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pes-orange to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-pes-navy mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekly Sessions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pes-navy mb-6">
              9-Week Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive weekly sessions covering all aspects of entrepreneurship - from ideation to execution
            </p>
          </motion.div>

          {/* Sessions Carousel */}
          <div className="relative">
            <motion.div
              className="overflow-hidden"
              onMouseEnter={() => setIsAutoScrollPaused(true)}
              onMouseLeave={() => setIsAutoScrollPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSessionSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {sessionSlides[currentSessionSlide]?.map((session) => (
                    <motion.div
                      key={session.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Calendar className="w-8 h-8 mx-auto mb-2" />
                            <div className="font-semibold">{session.week}</div>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                          {session.attendance} attendees
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-pes-navy mb-3">{session.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{session.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {session.topics.map((topic) => (
                            <span
                              key={`${session.id}-${topic}`}
                              className="px-3 py-1 bg-pes-orange/10 text-pes-orange text-xs font-medium rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                onClick={() => handleManualNavigation(prevSessionSlide)}
                variant="outline"
                size="sm"
                className="w-10 h-10 rounded-full p-0 border-2 border-pes-navy/20 hover:border-pes-navy hover:bg-pes-navy hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {sessionSlides.map((slideGroup, slideIndex) => (
                  <button
                    key={`session-slide-${slideGroup[0]?.id || slideIndex}`}
                    onClick={() => handleManualNavigation(() => setCurrentSessionSlide(slideIndex))}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      slideIndex === currentSessionSlide
                        ? 'bg-pes-navy scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                  />
                ))}
              </div>
              
              <Button
                onClick={() => handleManualNavigation(nextSessionSlide)}
                variant="outline"
                size="sm"
                className="w-10 h-10 rounded-full p-0 border-2 border-pes-navy/20 hover:border-pes-navy hover:bg-pes-navy hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Sessions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pes-navy mb-6">
              Industry Expert Sessions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from experienced entrepreneurs and industry leaders sharing their real-world insights
            </p>
          </motion.div>

          {/* Expert Sessions Carousel */}
          <div className="relative">
            <motion.div
              className="overflow-hidden"
              onMouseEnter={() => setIsExpertAutoScrollPaused(true)}
              onMouseLeave={() => setIsExpertAutoScrollPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExpertSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {expertSlides[currentExpertSlide]?.map((expert, index) => (
                    <motion.div
                      key={expert.name}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-pes-navy to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-pes-navy mb-2">{expert.name}</h3>
                          <p className="text-pes-orange font-semibold mb-2">{expert.company}</p>
                          <p className="text-gray-700 font-medium mb-3">{expert.topic}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{expert.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Expert Navigation Controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                onClick={() => handleExpertManualNavigation(prevExpertSlide)}
                variant="outline"
                size="sm"
                className="w-10 h-10 rounded-full p-0 border-2 border-pes-navy/20 hover:border-pes-navy hover:bg-pes-navy hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {expertSlides.map((slideGroup, slideIndex) => (
                  <button
                    key={`expert-slide-${slideGroup[0]?.name.replace(/\s+/g, '-') || slideIndex}`}
                    onClick={() => handleExpertManualNavigation(() => setCurrentExpertSlide(slideIndex))}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      slideIndex === currentExpertSlide
                        ? 'bg-pes-navy scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to expert slide ${slideIndex + 1}`}
                  />
                ))}
              </div>
              
              <Button
                onClick={() => handleExpertManualNavigation(nextExpertSlide)}
                variant="outline"
                size="sm"
                className="w-10 h-10 rounded-full p-0 border-2 border-pes-navy/20 hover:border-pes-navy hover:bg-pes-navy hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-gradient-to-br from-pes-navy to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Made Basecamp Special</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Unique features that made this program a transformative experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pes-orange to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Interactive Learning</h3>
              <p className="text-blue-100 leading-relaxed">
                Fun activities, live examples, and direct interaction with entrepreneurs made every session engaging and memorable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pes-orange to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Feedback-Driven</h3>
              <p className="text-blue-100 leading-relaxed">
                10 online surveys with 348 student responses ensured the program continuously evolved based on student needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pes-orange to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cross-Domain Exposure</h3>
              <p className="text-blue-100 leading-relaxed">
                7 different domains covered with participants from 5 engineering branches, creating diverse learning perspectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pes-navy mb-6">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our current programs and experience hands-on learning with industry experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-pes-navy to-blue-600 hover:from-pes-navy/90 hover:to-blue-600/90 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Current Programs
              </Button>
              <Button variant="outline" className="border-2 border-pes-orange text-pes-orange hover:bg-pes-orange hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
                <Users className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BasecampPage;