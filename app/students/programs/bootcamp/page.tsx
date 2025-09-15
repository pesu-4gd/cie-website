'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
  Play
} from 'lucide-react';
import { Button } from '@/components/design-system';
import { Card } from '@/components/ui/card';

const BootcampPage = () => {
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
      category: "IoT"
    },
    {
      id: 8,
      name: "Energy Management System",
      members: ["Shrushti Kaul", "Sumanth Rao", "Mohammed Sadiq K", "Khalandar Nawal Sheikh"],
      description: "End to end energy management system",
      category: "Energy"
    }
  ];

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
      <section className="relative bg-gradient-to-br from-pes-navy via-pes-navy-light to-pes-orange pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-pes-orange/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pes-navy-light/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse [animation-delay:2s]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                <Calendar className="w-4 h-4 mr-2" />
                CIE Bootcamp 2018 - A Legacy of Innovation
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              <span className="bg-gradient-to-r from-white to-pes-orange-light bg-clip-text text-transparent">
                Bootcamp 2018
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              A transformative 7-day residential program that kickstarted the entrepreneurial journey of 30 students through intensive learning, expert mentorship, and hands-on business development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="pes-button-primary text-lg px-8 py-4">
                <Rocket className="w-5 h-5 mr-2" />
                Explore the Journey
              </Button>
              <Button className="pes-button-outline text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-pes-navy">
                <Play className="w-5 h-5 mr-2" />
                Watch Highlights
              </Button>
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
              Bootcamp by Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of the impact and scale of CIE Bootcamp 2018
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={`stat-${stat.label}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="pes-card p-8 text-center group hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-pes-navy mb-2">{stat.value}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Bootcamp by Numbers Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="relative max-w-4xl mx-auto">
              <Image
                src="/assets/bootcamp/bootcamp-by-numbers.jpg"
                alt="Bootcamp 2018 Statistics Infographic"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
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
                  <div className="w-20 h-20 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pes-navy mb-2">Learn</h3>
                  <p className="text-gray-600">Hands-on entrepreneurship education from industry experts</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pes-navy mb-2">Build</h3>
                  <p className="text-gray-600">Develop viable business models and prototypes</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
              Teams and Ideas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the 8 innovative teams from Bootcamp 2018 and discover their groundbreaking solutions across diverse domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teams.map((team, teamIndex) => (
              <motion.div
                key={`team-${team.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: teamIndex * 0.1 }}
                viewport={{ once: true }}
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
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {team.description}
                      </p>
                    )}
                    
                    <div className="border-t pt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Team Members:</h4>
                      <div className="flex flex-wrap gap-2">
                        {team.members.map((member, memberIndex) => (
                          <span
                            key={`member-${team.id}-${memberIndex}`}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
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
              7-Day Journey: Daily Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Follow the intensive 7-day residential program that transformed ideas into viable business proposals through structured learning and hands-on experience
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-pes-navy/20 hidden lg:block" />
            
            <div className="space-y-12">
              {dailySchedule.map((day, dayIndex) => (
                <motion.div
                  key={`day-${day.day}`}
                  initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    dayIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pes-orange rounded-full border-4 border-white shadow-lg z-10 hidden lg:block" />
                  
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${dayIndex % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="pes-card group hover:shadow-xl transition-all duration-300">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-pes-gradient rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">D{day.day}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-pes-navy">{day.title}</h3>
                            <p className="text-pes-orange font-semibold">Day {day.day}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {day.activities.map((activity, activityIndex) => (
                            <div
                              key={`activity-${day.day}-${activityIndex}`}
                              className="flex items-start gap-2 text-gray-700"
                            >
                              <div className="w-2 h-2 bg-pes-orange rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Program Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-pes-navy mb-4">Program Highlights</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A comprehensive entrepreneurship education experience covering all aspects of startup development
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-pes-navy mb-2">Ideation</h4>
                  <p className="text-sm text-gray-600">Creative problem solving and innovation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-pes-navy mb-2">Validation</h4>
                  <p className="text-sm text-gray-600">Market research and customer insights</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-pes-navy mb-2">Business Model</h4>
                  <p className="text-sm text-gray-600">BMC development and strategy</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pes-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-pes-navy mb-2">Pitch</h4>
                  <p className="text-sm text-gray-600">Presentation and investor readiness</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Expert Sessions */}
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
              Industry Led Expert Sessions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              World-class industry experts from Microsoft, Intel, GE Healthcare, and leading startups shared their expertise and real-world insights with our bootcamp participants
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert, expertIndex) => (
              <motion.div
                key={`expert-${expert.name.replace(/\s+/g, '-').toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: expertIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="pes-card h-full group hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-pes-gradient rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
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
              The Culmination of Efforts
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Bootcamp 2018 concluded with remarkable final presentations judged by Dr. S. Raghunath from IIM-Bangalore and industry experts from Vantage Agora
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
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pes-navy mb-1">100% Completion Rate</h4>
                    <p className="text-gray-600">All 30 students successfully completed the 7-day intensive program</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pes-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pes-navy mb-1">8 Viable Business Models</h4>
                    <p className="text-gray-600">Each team developed comprehensive BMCs ready for market validation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pes-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pes-navy mb-1">Strong Alumni Network</h4>
                    <p className="text-gray-600">Many participants became successful entrepreneurs and mentors</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pes-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="w-4 h-4 text-white" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the next generation of innovators and entrepreneurs at PES University's Centre for Innovation and Entrepreneurship. Experience the same transformative program that launched successful startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-pes-navy hover:bg-gray-100 text-lg px-8 py-4 font-semibold">
                <Rocket className="w-5 h-5 mr-2" />
                Apply for Current Programs
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-pes-navy text-lg px-8 py-4 font-semibold">
                <Globe className="w-5 h-5 mr-2" />
                Learn More About CIE
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm">
                "CIE's Bootcamp was a massive success. It brought together diverse, driven and determined students and helped them grow into enthused entrepreneurs."
              </p>
              <p className="text-white/90 font-semibold mt-2">
                - Prof. Sathya Prasad, Director, Centre for Innovation and Entrepreneurship
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BootcampPage;