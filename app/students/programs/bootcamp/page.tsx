'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Clock, 
  Target, 
  Award, 
  Lightbulb, 
  TrendingUp, 
  Building2, 
  GraduationCap,
  Calendar,
  Rocket,
  Globe,
  Play,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/design-system';
import { Card } from '@/components/ui/card';

const BootcampPage = () => {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [currentExpertSlide, setCurrentExpertSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [isExpertAutoScrollPaused, setIsExpertAutoScrollPaused] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const expertAutoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const stats = [
    { label: "Total Students", value: "30", icon: Users },
    { label: "Days of Intensive Learning", value: "7", icon: Clock },
    { label: "Student Teams", value: "8", icon: Target },
    { label: "Industry Experts", value: "12", icon: Building2 },
    { label: "Successful Pitches", value: "8", icon: Award },
    { label: "Ideas Generated", value: "15+", icon: Lightbulb }
  ];

  const teams = [
    {
      id: 1,
      name: "Bio Alternative for Single-Use Plastic Bottles",
      members: ["Simrita Jayasimha", "Mridula Singhal", "Jeevan", "Shashank Prabhakar"],
      image: "/assets/bootcamp/team-1.jpg",
      category: "Sustainability"
    },
    {
      id: 2,
      name: "Restaurant Recommendation Platform",
      members: ["Dweepa Honnavalli", "Manoj M", "Shrey Tiwari"],
      description: "Helping the Urban Upper Middle-Class Group of Millennials To Choose Restaurant/Activities By Giving Personalized Recommendation",
      image: "/assets/bootcamp/team-2.jpg",
      category: "Consumer Tech"
    },
    {
      id: 3,
      name: "E-commerce Returns Solution",
      members: ["Ayushi Mehta", "Chetan", "Supriya Prasad", "Gauransh"],
      description: "Losses incurred by E-commerce Apparel Websites due to dissatisfied customers returning their purchases",
      image: "/assets/bootcamp/team-3.jpg",
      category: "E-commerce"
    },
    {
      id: 4,
      name: "Event Industry Platform",
      members: ["Devasish", "Akhil Siddharth", "K P Arjun Rajesh", "Siri Prasad"],
      description: "Providing an online platform for the unorganized event industry",
      image: "/assets/bootcamp/team-4.jpg",
      category: "Platform"
    },
    {
      id: 5,
      name: "Exam Preparation Assistant",
      members: ["S.Shiv Mohith", "Chirag L", "Chinmayee Shenvi", "Keerthan"],
      image: "/assets/bootcamp/team-5.jpg",
      category: "EdTech"
    },
    {
      id: 6,
      name: "Electronic Health Records",
      members: ["Vibha Puthran", "Vishwas N Udupa", "Parthan"],
      description: "User friendly electronic health records",
      image: "/assets/bootcamp/team-6.jpg",
      category: "HealthTech"
    },
    {
      id: 7,
      name: "Smart Luggage Security",
      members: ["D Yashaswi Shetty", "Omkar Metri", "Tejas Prashanth", "Parmesh Kaur"],
      description: "Lock smart luggage security system",
      image: "/assets/bootcamp/team-7.jpg",
      category: "IoT"
    },
    {
      id: 8,
      name: "Energy Management System",
      members: ["Shrushti Kaul", "Sumanth Rao", "Mohammed Sadiq K", "Khalandar Nawal Sheikh"],
      description: "End to end energy management system",
      image: "/assets/bootcamp/team-8.jpg",
      category: "Energy"
    }
  ];

  // Organize teams into groups of 3 for carousel
  const teamsPerSlide = 3;
  const teamSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < teams.length; i += teamsPerSlide) {
      slides.push(teams.slice(i, i + teamsPerSlide));
    }
    return slides;
  }, [teams.length]);

  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % teamSlides.length);
  };

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + teamSlides.length) % teamSlides.length);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      
      autoScrollIntervalRef.current = setInterval(() => {
        if (!isAutoScrollPaused) {
          setCurrentTeamSlide((prev) => (prev + 1) % teamSlides.length);
        }
      }, 3000); // Auto-scroll every 5 seconds
    };

    if (teamSlides.length > 1 && !isAutoScrollPaused) {
      startAutoScroll();
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [teamSlides.length, isAutoScrollPaused]);

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
      name: "Dr. Anbumani Subramanian",
      company: "Intel",
      topic: "Machine Learning & Image Processing",
      description: "Introduced students to machine learning and how 'the unseen can be seen' by broadening thinking perspectives."
    },
    {
      name: "Mr. Shankar Shastry",
      company: "Microsoft",
      topic: "Big Data Storage & Analytics",
      description: "Insights on modern distributed cloud file systems, AI capabilities, and the growth of cloud computing."
    },
    {
      name: "Suresh Narasimhan",
      company: "CoCreate.Ventures",
      topic: "Startup Finances",
      description: "Introduction to unit economics, metrics, liquidity preference, and venture capitalist perspectives."
    },
    {
      name: "Nagesh",
      company: "GE Healthcare",
      topic: "Digital Health & Affordable Care",
      description: "Current trends in digital health and disruptive ideas for emerging market needs."
    },
    {
      name: "NS Sunil Kumar",
      company: "Intel Technology India",
      topic: "Design Thinking",
      description: "Practical application of design thinking to groom products for better market fit."
    },
    {
      name: "Suhas Ghante",
      company: "AlchemAI",
      topic: "Business Development",
      description: "Modern marketing funnels, business hacks, and negotiation strategies from San Francisco."
    },
    {
      name: "Mr. Gokul Subramaniam",
      company: "Intel",
      topic: "Innovation & Future",
      description: "No-presentation session on innovation, team building, and asking the right questions."
    },
    {
      name: "Dheemanth Nagaraj",
      company: "Intel",
      topic: "Leadership & AI",
      description: "Leadership triad insights and the transformative power of ML and AI across industries."
    },
    {
      name: "Magesh Srinivasan",
      company: "HCL",
      topic: "Autonomous Driving",
      description: "Connected cars, 5G technology, and the future of the 130-year-old automobile industry."
    },
    {
      name: "Manoj Sanker",
      company: "Nemo Care",
      topic: "Moonlight Entrepreneurship",
      description: "PES alumnus sharing his journey from engineering student to successful entrepreneur."
    }
  ];

  // Organize experts into groups of 6 (2x3 grid) for carousel
  const expertsPerSlide = 6;
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

  // Expert auto-scroll functionality
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

  // Pause expert auto-scroll when user interacts
  const handleExpertManualNavigation = (callback: () => void) => {
    setIsExpertAutoScrollPaused(true);
    callback();
    
    // Resume auto-scroll after 10 seconds of no interaction
    setTimeout(() => {
      setIsExpertAutoScrollPaused(false);
    }, 10000);
  };

  const dailySchedule = [
    {
      day: 1,
      title: "Break the Entrepreneurial Ice",
      activities: [
        "Makerspace Launch (3400 sq. feet)",
        "Inauguration by Dr. KNB Murthy & Prof. Ajoy Kumar",
        "Growth Mindset Analysis",
        "Team Formation & Bonding",
        "Business Challenge Introduction",
        "Dr. Anbumani's ML Session"
      ]
    },
    {
      day: 2,
      title: "Put Your Design Thinking Cap On",
      activities: [
        "Design Thinking with NS Sunil Kumar",
        "Customer Persona Development",
        "Ethnography & Market Research",
        "Empathy Mapping",
        "Problem Statement Refinement",
        "Shankar Shastry's Big Data Session"
      ]
    },
    {
      day: 3,
      title: "Building Business Model Canvas",
      activities: [
        "BMC Construction",
        "Unique Selling Proposition",
        "Competition Analysis",
        "Revenue & Expense Streams",
        "Paradigm Shift: Ask Why, Not How",
        "Gokul Subramaniam's Innovation Talk"
      ]
    },
    {
      day: 4,
      title: "Clarity of Business Vision",
      activities: [
        "Prof. K.S. Sridhar's Motivational Talk",
        "BMC Finalization",
        "Pricing Strategy",
        "Minimum Viable Product (MVP)",
        "Financial Modeling",
        "Revenue Stream Optimization"
      ]
    },
    {
      day: 5,
      title: "Marketing Nuances",
      activities: [
        "Suhas Ghante's Skype Session from San Francisco",
        "Feel Felt Found Framework",
        "Business Etiquettes",
        "Pitch Development & Storyboarding",
        "Presentation Preparation",
        "Marketing Strategy Design"
      ]
    },
    {
      day: 6,
      title: "The Preposterous are Prosperous",
      activities: [
        "Dheemanth Nagaraj's Leadership Session",
        "Magesh Srinivasan's Automotive Innovation",
        "Manoj Sanker's Entrepreneurship Journey",
        "Bhaktha Keshavachar's User Experience Talk",
        "Pitch Dry Run & Feedback",
        "Final Presentation Preparation"
      ]
    },
    {
      day: 7,
      title: "The Culmination of Efforts",
      activities: [
        "Final Pitch Presentations",
        "Dr. S. Raghunath (IIM-B) as Chief Guest",
        "Vantage Agora Team Evaluation",
        "Expert Panel Feedback",
        "Results & Recognition",
        "Networking & Next Steps"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pes-navy via-pes-navy-light to-pes-orange pt-24 pb-16 overflow-hidden min-h-screen">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/assets/bootcamp/bootcamp-by-numbers.jpg"
            alt="Bootcamp Statistics"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        
        {/* Dark overlay */}
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="absolute inset-0 bg-black/40"
        />
        
        {/* Background gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="absolute inset-0 bg-gradient-to-br from-pes-navy/80 via-blue-800/60 to-pes-orange/30"
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-pes-orange/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pes-navy-light/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse [animation-delay:2s]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {/* Main layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-24 pb-16"
          >
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.7 }}
              className="text-left space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  CIE Bootcamp 2018 - A Legacy of Innovation
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 1.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <motion.span
                  initial={{ color: "#ffffff" }}
                  animate={{ color: "#1e3a8a" }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="transition-colors duration-800"
                >
                  CIE{" "}
                </motion.span>
                <motion.span
                  initial={{ color: "#fb923c" }}
                  animate={{ color: "#ea580c" }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="transition-colors duration-800"
                >
                  Bootcamp 2018
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed max-w-2xl"
              >
                An intensive entrepreneurship training program that transforms innovative ideas into successful startups through hands-on learning, expert mentorship, and real-world application.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="pes-button-primary text-lg px-8 py-4">
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore the Journey
                </Button>
                <Button className="pes-button-outline text-lg px-8 py-4 bg-white/10 border-pes-navy/30 text-pes-navy hover:bg-pes-navy hover:text-white">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Highlights
                </Button>
              </motion.div>

              {/* Additional Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-pes-navy">7</div>
                  <div className="text-gray-700 text-sm">Days Intensive</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-pes-navy">30</div>
                  <div className="text-gray-700 text-sm">Students</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-pes-navy">8</div>
                  <div className="text-gray-700 text-sm">Teams</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Image and Stats */}
            <div className="space-y-6">
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.0, delay: 1.2 }}
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
                style={{ 
                  minHeight: '400px',
                  aspectRatio: '1280/650'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <Image
                  src="/assets/bootcamp/bootcamp-by-numbers.jpg"
                  alt="CIE Bootcamp 2018 - Students and Innovation"
                  fill
                  className="object-contain object-center transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>

              {/* Stats Widget Below Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.9 }}
                className="w-full"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-pes-navy">100%</div>
                      <div className="text-gray-700 text-xs">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-pes-orange">12+</div>
                      <div className="text-gray-700 text-xs">Industry Experts</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pes-navy mb-4">
              Bootcamp 2018 by Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of the impact and scale of CIE Bootcamp 2018
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              console.log('Rendering stat:', stat.label, 'IconComponent:', IconComponent);
              return (
                <motion.div
                  key={`stat-${stat.label}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="pes-card p-8 text-center group hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {IconComponent ? <IconComponent className="w-8 h-8 text-white" /> : <Users className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="text-4xl font-bold text-pes-navy mb-2">{stat.value}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pes-navy mb-6">
              About CIE Bootcamp 2018
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                The Centre for Innovation and Entrepreneurship organized a transformative 7-day residential program that offered students an in-depth, hands-on approach to entrepreneurship, intrapreneurship, and business development. Prefaced by weekly 'Basecamp' sessions held throughout the previous semester, the Bootcamp provided comprehensive training from idea validation to final pitch presentations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pes-navy mb-2">Learn</h3>
                  <p className="text-gray-600">Hands-on entrepreneurship education from industry experts</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pes-navy mb-2">Build</h3>
                  <p className="text-gray-600">Develop viable business models and prototypes</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pes-navy mb-2">Pitch</h3>
                  <p className="text-gray-600">Present compelling business proposals to expert panels</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teams and Ideas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pes-navy mb-6">
              Teams and Ideas - Bootcamp 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the innovative teams from CIE Bootcamp 2018 and discover their groundbreaking solutions across diverse domains
            </p>
          </motion.div>

          <div className="relative">
            {/* Carousel Navigation */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-2">
                {Array.from({ length: teamSlides.length }, (_, slideIndex) => (
                  <button
                    key={`teams-slide-${teamSlides.length}-${slideIndex}`}
                    onClick={() => handleManualNavigation(() => setCurrentTeamSlide(slideIndex))}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      slideIndex === currentTeamSlide 
                        ? 'bg-pes-orange' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => handleManualNavigation(prevTeamSlide)}
                  aria-label="Previous teams"
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-pes-navy hover:bg-pes-navy hover:text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleManualNavigation(nextTeamSlide)}
                  aria-label="Next teams"
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-pes-navy hover:bg-pes-navy hover:text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Swipeable Teams Carousel */}
            <section 
              aria-label="Teams carousel"
              className="overflow-hidden"
              onMouseEnter={() => setIsAutoScrollPaused(true)}
              onMouseLeave={() => setIsAutoScrollPaused(false)}
              onTouchStart={(e) => {
                setIsAutoScrollPaused(true);
                const touch = e.touches[0];
                if (touch) {
                  setTouchStart(touch.clientX);
                }
              }}
              onTouchMove={(e) => {
                if (touchStart === null) return;
                const touch = e.touches[0];
                if (touch) {
                  setTouchEnd(touch.clientX);
                }
              }}
              onTouchEnd={() => {
                if (!touchStart || !touchEnd) return;
                const distance = touchStart - touchEnd;
                const isLeftSwipe = distance > 50;
                const isRightSwipe = distance < -50;

                if (isLeftSwipe && currentTeamSlide < teamSlides.length - 1) {
                  setCurrentTeamSlide(currentTeamSlide + 1);
                }
                if (isRightSwipe && currentTeamSlide > 0) {
                  setCurrentTeamSlide(currentTeamSlide - 1);
                }
                
                setTouchStart(null);
                setTouchEnd(null);
                
                // Resume auto-scroll after 5 seconds of no touch interaction
                setTimeout(() => {
                  setIsAutoScrollPaused(false);
                }, 5000);
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTeamSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {teamSlides[currentTeamSlide]?.map((team, teamIndex) => (
                    <motion.div
                      key={`team-${team.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: teamIndex * 0.1 }}
                    >
                      <Card className="pes-card h-full group hover:shadow-2xl transition-all duration-500">
                        {team.image && (
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <Image
                              src={team.image}
                              alt={`Team ${team.id} - ${team.name}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute top-4 right-4">
                              <span className="bg-pes-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {team.category}
                              </span>
                            </div>
                          </div>
                        )}
                        
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-pes-navy font-bold text-lg">Team {team.id}</span>
                            <div className="h-4 w-px bg-gray-300" />
                            <span className="text-gray-600 text-sm">{team.members.length} Members</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-pes-navy mb-3 leading-tight">
                            {team.name}
                          </h3>
                          
                          {team.description && (
                            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                              {team.description}
                            </p>
                          )}
                          
                          <div className="border-t pt-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Team Members:</h4>
                            <div className="flex flex-wrap gap-2">
                              {team.members.map((member, memberIndex) => (
                                <span
                                  key={`member-${team.id}-${memberIndex}`}
                                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                                >
                                  {member}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </section>

            {/* Swipe Instruction */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                Auto-scrolls every 3 seconds • Hover to pause • Swipe or use navigation buttons to browse Bootcamp 2018 teams
              </p>
            </div>
          </div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-pes-navy mb-6">Team Diversity</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-pes-orange mb-2">8</div>
                  <div className="text-gray-600">Solution Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pes-orange mb-2">30</div>
                  <div className="text-gray-600">Total Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pes-orange mb-2">3-4</div>
                  <div className="text-gray-600">Members per Team</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pes-orange mb-2">100%</div>
                  <div className="text-gray-600">Successful Pitches</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Daily Activities Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pes-navy mb-4">
              7-Day Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              An intensive residential program transforming ideas into business proposals
            </p>
          </motion.div>

          {/* Compact Timeline Window */}
          <div className="relative overflow-hidden rounded-2xl bg-white backdrop-blur-sm p-6 mx-2">
            <div className="h-[800px] overflow-y-auto scrollbar-hide">
              <div className="relative py-8">
                {/* Central Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-px top-8 bottom-8 w-0.5 bg-gray-600 shadow-sm" />
                
                <div className="space-y-8">
                  {dailySchedule.map((day, dayIndex) => (
                    <motion.div
                      key={`day-${day.day}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex items-start ${dayIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      {/* Timeline Card */}
                      <div className={`w-5/12 ${dayIndex % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border-pes-orange/50 overflow-hidden">
                          {/* Day Header */}
                          <div className="bg-blue-900 w-full px-6 py-4 mb-4">
                            <div className={`flex items-center gap-3 ${dayIndex % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                              <div className={`${dayIndex % 2 === 0 ? 'order-2' : 'order-1'}`}>
                                <h3 className="text-xl font-bold text-white">
                                  {day.title}
                                </h3>
                                <span className="text-sm text-white/90 font-semibold">
                                  Day {day.day}
                                </span>
                              </div>
                              <div className={`${dayIndex % 2 === 0 ? 'order-1' : 'order-2'} w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg border-2 border-white/20`}>
                                <div className="text-center">
                                  <div className="text-white font-bold text-lg leading-none">{day.day}</div>
                                  <div className="text-white/90 text-xs font-medium">DAY</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* All Activities */}
                          <div className="space-y-3 px-6 pb-6">
                            {day.activities.map((activity, activityIndex) => (
                              <div
                                key={`activity-${day.day}-${activityIndex}`}
                                className={`flex items-start gap-3 text-gray-700 text-sm ${dayIndex % 2 === 0 ? 'justify-end text-right' : 'justify-start text-left'}`}
                              >
                                <div className={`w-2 h-2 bg-pes-orange rounded-full mt-2 flex-shrink-0 shadow-sm ${dayIndex % 2 === 0 ? 'order-2' : 'order-1'}`} />
                                <span className={`leading-relaxed font-medium ${dayIndex % 2 === 0 ? 'order-1' : 'order-2'}`}>{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Connection Line to Central Timeline */}
                      <div className={`absolute top-1/2 ${dayIndex % 2 === 0 ? 'right-1/2 mr-2' : 'left-1/2 ml-2'} w-8 h-0.5 bg-pes-orange shadow-sm`} />

                      {/* Central Timeline Node */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-orange-400 via-orange-500 to-blue-600 rounded-full border-3 border-white shadow-xl z-10 ring-4 ring-orange-200/30 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{day.day}</span>
                      </div>

                      {/* Empty Space for Alternating Layout */}
                      <div className="w-5/12" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compact Program Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                    <Lightbulb className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="font-semibold text-pes-navy text-sm">Ideation</h4>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="font-semibold text-pes-navy text-sm">Validation</h4>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                    <Building2 className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="font-semibold text-pes-navy text-sm">Business Model</h4>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="font-semibold text-pes-navy text-sm">Pitch</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Expert Sessions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pes-navy mb-6">
              Industry Led Expert Sessions - 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              World-class industry experts from Microsoft, Intel, GE Healthcare, and leading startups shared their expertise and real-world insights with our bootcamp 2018 participants
            </p>
          </motion.div>

          {/* Expert Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                onClick={() => handleExpertManualNavigation(prevExpertSlide)}
                className="p-3 rounded-full bg-pes-navy text-white hover:bg-pes-navy/90 transition-colors"
                disabled={expertSlides.length <= 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleExpertManualNavigation(nextExpertSlide)}
                className="p-3 rounded-full bg-pes-navy text-white hover:bg-pes-navy/90 transition-colors"
                disabled={expertSlides.length <= 1}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {Array.from({ length: expertSlides.length }, (_, slideIndex) => (
                <button
                  key={`experts-slide-${expertSlides.length}-${slideIndex}`}
                  onClick={() => handleExpertManualNavigation(() => setCurrentExpertSlide(slideIndex))}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentExpertSlide === slideIndex 
                      ? 'bg-pes-orange scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to expert slide ${slideIndex + 1}`}
                />
              ))}
            </div>

            {/* Expert Cards Container */}
            <section 
              aria-label="Expert cards carousel"
              className="relative overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsExpertAutoScrollPaused(true)}
              onMouseLeave={() => setIsExpertAutoScrollPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`experts-slide-${currentExpertSlide}`}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {expertSlides[currentExpertSlide]?.map((expert, expertIndex) => (
                    <motion.div
                      key={`expert-${expert.name.replace(/\s+/g, '-').toLowerCase()}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: expertIndex * 0.1 }}
                    >
                      <Card className="pes-card h-full group hover:shadow-xl transition-all duration-300">
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-pes-gradient rounded-full flex items-center justify-center">
                              <Building2 className="w-6 h-6 text-black" />
                            </div>
                            <div>
                              <h3 className="font-bold text-pes-navy text-lg leading-tight">{expert.name}</h3>
                              <p className="text-pes-orange font-semibold text-sm">{expert.company}</p>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <span className="bg-pes-navy/10 text-pes-navy px-3 py-1 rounded-full text-sm font-semibold">
                              {expert.topic}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {expert.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </section>
          </div>

          {/* Auto-scroll Instruction */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Auto-scrolls every 2 seconds • Hover to pause • Click navigation buttons or indicators to browse expert sessions
            </p>
          </div>

          {/* Expert Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-pes-navy/5 to-pes-orange/5 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-pes-navy mb-2">10+</div>
                  <div className="text-gray-600 font-semibold">Industry Experts</div>
                  <div className="text-sm text-gray-500">From top companies</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pes-orange mb-2">25+</div>
                  <div className="text-gray-600 font-semibold">Hours of Learning</div>
                  <div className="text-sm text-gray-500">Expert-led sessions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pes-navy mb-2">100%</div>
                  <div className="text-gray-600 font-semibold">Student Engagement</div>
                  <div className="text-sm text-gray-500">Interactive sessions</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Legacy & Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pes-navy mb-6">
              The Culmination of Efforts - Bootcamp 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              CIE Bootcamp 2018 concluded with remarkable final presentations judged by leading industry experts and mentors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-pes-navy mb-6">Program Outcomes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pes-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pes-navy mb-1">100% Completion Rate</h4>
                    <p className="text-gray-600">All 30 students successfully completed the 7-day intensive program</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pes-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pes-navy mb-1">8 Viable Business Models</h4>
                    <p className="text-gray-600">Each team developed comprehensive BMCs ready for market validation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pes-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pes-navy mb-1">Strong Alumni Network</h4>
                    <p className="text-gray-600">Many participants became successful entrepreneurs and mentors</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pes-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pes-navy mb-1">Industry Connections</h4>
                    <p className="text-gray-600">Direct access to mentors from Microsoft, Intel, GE, and startups</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-pes-navy/5 to-pes-orange/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-pes-navy mb-6 text-center">Final Day Highlights</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pes-orange mb-2">5 min</div>
                    <div className="text-gray-600">Pitch Duration per Team</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pes-navy mb-2">Dr. S. Raghunath</div>
                    <div className="text-gray-600">IIM-Bangalore Chief Guest & Judge</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pes-orange mb-2">Vantage Agora</div>
                    <div className="text-gray-600">Industry Panel with COO Harsha Chaturvedi</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pes-navy mb-2">Expert Feedback</div>
                    <div className="text-gray-600">Personalized guidance for next steps</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pes-navy to-pes-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto">
              Join the next generation of innovators and entrepreneurs at PES University's Centre for Innovation and Entrepreneurship. Experience the same transformative program that launched successful startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-pes-navy hover:bg-gray-100 text-lg px-8 py-4 font-semibold">
                <Rocket className="w-5 h-5 mr-2" />
                Apply for Current Programs
              </Button>
              <Button className="border-2 border-white text-black hover:bg-white hover:text-pes-navy text-lg px-8 py-4 font-semibold">
                <Globe className="w-5 h-5 mr-2" />
                Learn More About CIE
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-black/80 text-sm mb-6">
                "CIE's Bootcamp 2018 was a massive success. It brought together diverse, driven and determined students and helped them grow into enthused entrepreneurs."
              </p>
              <p className="text-black/90 font-semibold mb-4">
                - Prof. Sathya Prasad, Director, Centre for Innovation and Entrepreneurship
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">2018</div>
                  <div className="text-black/80 text-sm">First Bootcamp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">7 Days</div>
                  <div className="text-black/80 text-sm">Intensive Training</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">100%</div>
                  <div className="text-black/80 text-sm">Success Rate</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-black/70 text-sm">
                  Continue the legacy of innovation and entrepreneurship at PES University
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BootcampPage;