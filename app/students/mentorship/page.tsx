'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { SECTION_COLORS } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import {
  Users,
  Star,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Calendar,
  Award,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Network,
  Rocket,
  Building2
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Industry Mentors 2025
const mentors2025 = [
  {
    id: '1',
    name: 'Prasanna Chandran',
    companies: 'Greywiz, NTT Data',
    experience: '30 years Exp.',
    domain: 'Cloud, Analytics, Software',
    expertise: ['GenAI, AI/ML', 'Software Architecture', 'Data Modernisation', 'Computer Vision'],
    image: '/assets/prasann-chandran.png'
  },
  {
    id: '2',
    name: 'Nagendra Prasad',
    company: 'Wipro',
    experience: '30 years Exp.',
    domain: 'Telco, Mobile, Auto',
    expertise: ['Connected Car / AI', 'V2V, V2X Testing', 'Embedded Systems', 'Computer Vision'],
    image: '/assets/nagendra-prasad.png'
  },
  {
    id: '3',
    name: 'Raghavendra Deshmukh',
    companies: 'SAP, Google',
    experience: '29 years Exp.',
    domain: 'Software Products',
    expertise: ['Blockchain', 'AI – LLMs, RAG', 'Cloud, Distributed Systems', 'Product Management'],
    image: '/assets/raghavendra-deshmukh-prof-pic.png'
  },
  {
    id: '4',
    name: 'Radhakrishnan Mahalikudi',
    companies: 'Nvidia, AMD',
    experience: '35 years Exp.',
    domain: 'Silicon, Semiconductors',
    expertise: ['Processor', 'Memory Architecture', 'SOC Architecture', 'Silicon Verification'],
    image: '/assets/radhakrishnan-mahalikudi.png'
  },
  {
    id: '5',
    name: 'Kuldeep Simha',
    company: 'Intel',
    experience: '28 years Exp.',
    domain: 'Silicon, Semiconductors',
    expertise: ['VLSI Design', 'CPU Design', 'IP/SoC Development', 'Silicon & Systems'],
    image: '/assets/kuldeep-simha.png'
  }
];

// Industry Mentors 2024
const mentors2024 = [
  {
    id: '1',
    name: 'M.G. Jayaram',
    company: 'TCS',
    experience: '36 years Exp.',
    domain: 'IT Services',
    expertise: ['Projects/Program', 'IPR Strategy', 'Process Design', 'Consulting'],
    image: '/assets/mg-jayaram.png'
  },
  {
    id: '2',
    name: 'Nagendra Prasad',
    company: 'WIPRO',
    experience: '30 years Exp.',
    domain: 'Telco, Mobile, Auto',
    expertise: ['Connected Car / AI', 'V2V, V2X Testing', 'Embedded Systems', 'Computer Vision'],
    image: '/assets/nagendra-prasad.png'
  },
  {
    id: '3',
    name: 'Prasanna Chandran',
    company: 'NTT DATA',
    experience: '30 years Exp.',
    domain: 'Cloud, Analytics, Software',
    expertise: ['GenAI, AI/ML', 'Software Architecture', 'Data Modernization', 'Computer Vision'],
    image: '/assets/prasann-chandran.png'
  },
  {
    id: '4',
    name: 'Raghavendra Deshmukh',
    companies: 'SAP, Walmart',
    experience: '25 years Exp.',
    domain: 'Software Products',
    expertise: ['Blockchain', 'AI – LLMs, RAG', 'Cloud, Distributed Systems', 'Product Management'],
    image: '/assets/raghavendra-deshmukh-prof-pic.png'
  },
  {
    id: '5',
    name: 'Rajesh Banginwar',
    company: 'INTEL',
    experience: '30 years Exp.',
    domain: 'Platforms, Systems',
    expertise: ['Security: Hardware & Software', 'IoT, Edge Compute', 'Embedded Systems', 'Computer Architecture, Operating Systems'],
    image: '/assets/rajesh-banginwar.png'
  }
];

// Program benefits and features
const programBenefits = [
  {
    icon: Users,
    title: 'Industry Expertise',
    description: 'Connect with seasoned professionals from top companies like Google, Microsoft, Intel, Wipro, and more'
  },
  {
    icon: Target,
    title: 'Personalized Guidance',
    description: 'Receive one-on-one mentorship tailored to your career goals and interests'
  },
  {
    icon: Network,
    title: 'Networking Opportunities',
    description: 'Build valuable connections with industry leaders and expand your professional network'
  },
  {
    icon: TrendingUp,
    title: 'Skill Development',
    description: 'Gain practical insights and develop skills that matter in today\'s competitive job market'
  },
  {
    icon: Lightbulb,
    title: 'Real-world Insights',
    description: 'Learn about current industry trends, technologies, and best practices from practitioners'
  },
  {
    icon: Rocket,
    title: 'Career Acceleration',
    description: 'Fast-track your career with guidance on job search, interviews, and career decisions'
  }
];

const otherMentorshipPrograms = [
  {
    id: '1',
    title: 'Entrepreneur Mentorship',
    description: 'Connect with successful entrepreneurs and startup founders for business guidance and strategy',
    duration: '4 months',
    commitment: '3 hours/month',
    icon: Lightbulb
  },
  {
    id: '2',
    title: 'Alumni Peer Mentoring',
    description: 'Learn from recent graduates who have successfully transitioned to industry roles and startups',
    duration: '3 months',
    commitment: '1.5 hours/month',
    icon: GraduationCap
  },
  {
    id: '3',
    title: 'Technical Mentorship',
    description: 'Get technical guidance from senior engineers and technology leaders on cutting-edge skills and technologies',
    duration: '5 months',
    commitment: '2.5 hours/month',
    icon: Target
  }
];

const programStats = [
  { value: '150+', label: 'Industry Mentors' },
  { value: '500+', label: 'Students Mentored' },
  { value: '85%', label: 'Success Rate' },
  { value: '50+', label: 'Partner Companies' }
];

export default function MentorshipPage() {
  const studentsColors = SECTION_COLORS.students;
  const [activeTab, setActiveTab] = useState('2025');

  return (
    <div className={`min-h-screen bg-white`}>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <InteractiveHexagonBackground
          className="absolute inset-0 z-0"
          primaryColor={studentsColors.hero?.background}
          accentColor={studentsColors.hero?.hexagonAccent}
        />
        <div className={`absolute inset-0 bg-gradient-to-r from-[${studentsColors.primary}]/10 to-[${studentsColors.secondary}]/10 pointer-events-none`} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Mentorship Program
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Connect with <span className={`text-[${studentsColors.primary}]`}>Industry Mentors</span>
            </h1>
            <p className="text-xl text-white/85 max-w-3xl mx-auto mb-8">
              Fueling Innovation, Empowering Students: Industry Expertise Meets Campus Potential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:cieprogram@pes.edu"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-[${studentsColors.primary}] hover:opacity-95`}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Program</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The CIE Industry Mentor Program connects PES University students with accomplished professionals
              from leading technology companies, startups, and organizations. Our mentors bring decades of
              combined experience across diverse domains including software engineering, product management,
              entrepreneurship, AI/ML, semiconductors, and more.
            </p>
          </div>

          {/* Program Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {programBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 bg-[${studentsColors.primary}]/10 rounded-lg flex items-center justify-center mb-4`}>
                        <IconComponent className={`h-6 w-6 text-[${studentsColors.primary}]`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {programStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold text-[${studentsColors.primary}] mb-2`}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Industry Mentors Section with Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-600 border border-blue-400/30 mb-4">
              <Star className="h-4 w-4 mr-2" />
              Our Mentors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">CIE Industry Mentors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished mentors from leading technology companies who are guiding our students
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="2025" className="text-base py-3">
                <Star className="h-4 w-4 mr-2" />
                Industry Mentors 2025
              </TabsTrigger>
              <TabsTrigger value="2024" className="text-base py-3">
                <Award className="h-4 w-4 mr-2" />
                Past Mentors 2024
              </TabsTrigger>
            </TabsList>

            <TabsContent value="2025">
              <div className="space-y-8">
                {/* Mentor Cards 2025 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mentors2025.map((mentor, index) => (
                    <motion.div
                      key={mentor.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start space-x-4">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-100">
                              <Image
                                src={mentor.image}
                                alt={mentor.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-1">{mentor.name}</CardTitle>
                              <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                                <Building2 className="h-3 w-3" />
                                <span>{mentor.company || mentor.companies}</span>
                              </div>
                              <p className="text-sm font-medium text-gray-500">{mentor.experience} • {mentor.domain}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-semibold text-gray-700 mb-2">Expertise:</p>
                              <div className="flex flex-wrap gap-1.5">
                                {mentor.expertise.map((skill, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="2024">
              <div className="space-y-8">
                {/* Mentor Cards 2024 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mentors2024.map((mentor, index) => (
                    <motion.div
                      key={mentor.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start space-x-4">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-100">
                              <Image
                                src={mentor.image}
                                alt={mentor.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-1">{mentor.name}</CardTitle>
                              <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                                <Building2 className="h-3 w-3" />
                                <span>{mentor.company || mentor.companies}</span>
                              </div>
                              <p className="text-sm font-medium text-gray-500">{mentor.experience} • {mentor.domain}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-semibold text-gray-700 mb-2">Expertise:</p>
                              <div className="flex flex-wrap gap-1.5">
                                {mentor.expertise.map((skill, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Other Mentorship Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Other Mentorship Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore additional mentorship opportunities tailored to different career paths and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherMentorshipPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-[${studentsColors.primary}]/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`h-6 w-6 text-[${studentsColors.primary}]`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">{program.description}</CardDescription>
                      <div className="space-y-2 text-sm text-gray-600 mb-6">
                        <div className="flex justify-between">
                          <span className="font-medium">Duration:</span>
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Commitment:</span>
                          <span>{program.commitment}</span>
                        </div>
                      </div>
                      <Button asChild className={`w-full bg-[${studentsColors.primary}] text-white hover:opacity-95`}>
                        <a href="mailto:cieprogram@pes.edu">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          Learn More
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-[${studentsColors.primary}]`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Connect with Industry Experts?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our mentorship program and get personalized guidance to accelerate your career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <a href="mailto:cieprogram@pes.edu">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Get Started
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}