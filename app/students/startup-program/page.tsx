'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { SECTION_COLORS, hexToRgb } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { 
  Rocket, 
  DollarSign,
  Users,
  Target,
  Award,
  BookOpen,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  Building2,
  Globe,
  Star,
  Briefcase,
  FlaskConical,
  MessageCircle,
  Mail,
  UserPlus,
  ChartBar
} from 'lucide-react';

export default function StudentStartupProgramPage() {
  const studentsColors = SECTION_COLORS.students;
  const programStats = [
    { label: 'Startups Launched', value: '50+', icon: Rocket, color: 'blue' },
    { label: 'Total Funding Raised', value: '₹2Cr+', icon: DollarSign, color: 'blue' },
    { label: 'Students Involved', value: '500+', icon: Users, color: 'blue' },
    { label: 'Success Rate', value: '85%', icon: Target, color: 'blue' }
  ];

  const fundingOpportunities = [
    {
      title: 'Co-innovation Center (IHFC, IITD)',
      amount: 'Up to ₹5 Lakh',
      type: 'Grant',
      description: 'Seed funding for innovative technology solutions with commercialization potential.',
      eligibility: 'Students with validated prototypes',
      process: 'Application → Pitch → Due Diligence → Funding',
      timeline: '4-6 weeks',
      color: 'blue',
      url: 'https://www.linkedin.com/posts/center-for-innovation-and-entrepreneurship-pes-university_collaboration-innovation-pesucie-activity-7378301893535596544-P_MX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKTR78B4gtGNGLckkfjUtcckOl7W0iWKEE'
    },
    {
      title: 'Cisco-Nasscom thingQbator',
      amount: 'Up to ₹5 Lakh',
      type: 'Incubation Funding',
      description: 'Specialized funding for IoT and technology startups through industry partnership.',
      eligibility: 'Tech startups in IoT, AI, or emerging tech',
      process: 'Application → Technical Review → Presentation → Funding',
      timeline: '6-8 weeks',
      color: 'blue',
      url: 'https://www.linkedin.com/posts/center-for-innovation-and-entrepreneurship-pes-university_we-at-cie-are-thrilled-to-announce-the-activity-7032962036888215552-EmB8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKTR78B4gtGNGLckkfjUtcckOl7W0iWKEE'
    },
    {
      title: 'PESU Venture Labs',
      amount: 'Up to $200K',
      type: 'Venture Investment',
      description: 'Larger scale funding for startups ready for market entry and scaling.',
      eligibility: 'Startups with proven traction and growth potential',
      process: 'Business Plan → Due Diligence → Term Sheet → Investment',
      timeline: '8-12 weeks',
      color: 'blue',
      url: 'https://www.linkedin.com/company/pesu-venture-labs/'
    },
    {
      title: 'CIE Ignite Prize Fund',
      amount: '₹25K+ Prizes',
      type: 'Competition Funding',
      description: 'Cash prizes and seed funding for winners of our flagship ideathon.',
      eligibility: '2nd year students participating in CIE Ignite',
      process: 'Participate → Advance stages → Final pitch → Awards',
      timeline: '4 months',
      color: 'blue',
      url: 'https://www.linkedin.com/posts/center-for-innovation-and-entrepreneurship-pes-university_studentinnovation-careerready-industrymentorship-activity-7303635458356363264-kTcT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKTR78B4gtGNGLckkfjUtcckOl7W0iWKEE'
    }
  ];

  const programBenefits = [
    {
      title: 'Comprehensive Mentorship',
      description: 'Access to industry experts, successful entrepreneurs, and faculty mentors',
      icon: Users,
      features: [
        'One-on-one mentoring sessions',
        'Industry expert guidance',
        'Peer mentorship programs',
        'Alumni network connections'
      ]
    },
    {
      title: 'World-Class Facilities',
      description: 'State-of-the-art makerspaces and prototyping facilities',
      icon: Building2,
      features: [
        '3D printing and rapid prototyping',
        'Electronics lab and testing equipment',
        'Software development resources',
        'Co-working spaces for teams'
      ]
    },
    {
      title: 'Funding & Investment Access',
      description: 'Multiple pathways to secure funding for your venture',
      icon: DollarSign,
      features: [
        'Seed funding opportunities',
        'Government grant access',
        'Angel investor connections',
        'VC network introductions'
      ]
    },
    {
      title: 'Market Access & Validation',
      description: 'Support for testing and launching your products',
      icon: Target,
      features: [
        'Customer discovery programs',
        'Market research support',
        'Pilot program opportunities',
        'Launch strategy guidance'
      ]
    }
  ];

  const successStories = [
    {
      name: 'NeuRoar',
      industry: 'HealthTech',
      funding: '₹5 Lakh',
      fundingSource: 'Cisco-Nasscom thingQbator',
      description: 'AI-powered neurological diagnostic platform securing significant funding through CIE support.',
      impact: 'Developed breakthrough diagnostic algorithms for early detection of neurological conditions',
      founders: 'Biomedical Engineering Students',
      currentStatus: 'Scaling operations, seeking Series A funding'
    },
    {
      name: 'Greenifly',
      industry: 'AgriTech',
      funding: 'Venture Labs Investment',
      fundingSource: 'PESU Venture Labs',
      description: 'Sustainable agriculture technology startup leveraging IoT and AI for smart farming solutions.',
      impact: 'Helping 500+ farmers increase crop yield by 30% through precision agriculture',
      founders: 'Computer Science & Agriculture Engineering Students',
      currentStatus: 'Expanding to 3 new states'
    },
    {
      name: 'TechFlow Solutions',
      industry: 'SaaS',
      funding: '₹15 Lakh',
      fundingSource: 'Multiple Sources',
      description: 'B2B SaaS platform streamlining business operations for SMEs.',
      impact: 'Serving 200+ businesses with 40% efficiency improvements',
      founders: 'MBA & Engineering Students',
      currentStatus: 'Preparing for international expansion'
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete the online application with your business idea and team details',
      duration: '1 week',
      requirements: ['Business idea summary', 'Team member details', 'Market opportunity analysis']
    },
    {
      step: 2,
      title: 'Initial Review',
      description: 'CIE team reviews applications and shortlists promising ventures',
      duration: '2 weeks',
      requirements: ['Application screening', 'Feasibility assessment', 'Team evaluation']
    },
    {
      step: 3,
      title: 'Pitch Presentation',
      description: 'Present your idea to the CIE review committee and industry experts',
      duration: '1 week',
      requirements: ['10-minute pitch', 'Q&A session', 'Business model presentation']
    },
    {
      step: 4,
      title: 'Onboarding & Support',
      description: 'Successful applicants join the program with full ecosystem access',
      duration: 'Ongoing',
      requirements: ['Program orientation', 'Mentor matching', 'Resource allocation']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen" style={{ background: studentsColors.gradient.css }}>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden" style={{ background: studentsColors.gradient.css }}>
        <InteractiveHexagonBackground className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{ background: studentsColors.primary, color: '#fff' }}>
                <Rocket className="w-4 h-4 mr-2 text-white" />
                Flagship Program
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Student Startup
              <span className="block" style={{ color: studentsColors.accent }}>Program</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into thriving startups through CIE's flagship program. Access funding, mentorship, resources, and a supportive ecosystem designed for student entrepreneurs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {/* <Button asChild variant="default" size="lg" className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white">
                <a href="https://forms.gle/b8uLuLievLw7V6uv8" target="_blank" rel="noopener noreferrer">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Enquire
                </a>
              </Button> */}
              <Button
                variant="cie"
                size="lg"
                className="group text-white"
                style={{ background: studentsColors.primary }}
                asChild
              >
                <a href="mailto:cieprogram@pes.edu" className="flex items-center">
                  Enquire
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              {/* <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {programStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program <span style={{ color: studentsColors.primary }}>Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive ecosystem designed to support student entrepreneurs from ideation to market success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Open to All PES Students</h3>
                    <p className="text-gray-600">No restrictions on year, branch, or background - all students with innovative ideas are welcome to participate and build their startups.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Support System</h3>
                    <p className="text-gray-600">Access mentorship from industry experts, faculty guidance, peer support, and connections with successful entrepreneurs and investors.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">World-Class Resources</h3>
                    <p className="text-gray-600">State-of-the-art makerspaces, prototyping facilities, software resources, and access to advanced labs for development and testing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scale & Growth Support</h3>
                    <p className="text-gray-600">Beyond initial funding - ongoing support for scaling operations, market expansion, and connecting with growth-stage investors.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">No equity required for initial support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Flexible program structure for students</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Multiple funding pathway options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Industry partnership opportunities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Global exposure and networking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">IP protection and legal guidance</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: `${studentsColors.primary}1A` }}>
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="font-bold text-gray-900">Success Rate: 85%</span>
                </div>
                <p className="text-sm text-gray-600">
                  85% of our program participants successfully launch their ventures or secure meaningful industry positions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funding Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Funding <span style={{ color: studentsColors.secondary }}>Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple funding pathways to support your startup journey from idea validation to scaling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingOpportunities.map((funding, index) => (
              <motion.div
                key={funding.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(funding.color)} rounded-2xl flex items-center justify-center`}>
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{funding.amount}</div>
                    <div className={`text-sm px-2 py-1 bg-${funding.color}-100 text-${funding.color}-800 rounded-full`}>
                      {funding.type}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{funding.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{funding.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">Eligibility:</span>
                    <span className="text-sm text-gray-600">{funding.eligibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">Timeline:</span>
                    <span className="text-sm text-gray-600">{funding.timeline}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Application Process:</h4>
                  <p className="text-sm text-gray-600">{funding.process}</p>
                </div>
                
                <Button asChild className={`w-full bg-gradient-to-r ${getColorClasses(funding.color)} text-white`}>
                  <a href={funding.url} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success <span style={{ color: studentsColors.primary }}>Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real startups launched by our students, creating impact and driving innovation.
            </p>
          </motion.div>

          <div className="space-y-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mr-4">{story.name}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {story.industry}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Impact Created:</h4>
                      <p className="text-gray-600">{story.impact}</p>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{story.founders}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Funding Received</div>
                        <div className="text-xl font-bold text-green-600">{story.funding}</div>
                        <div className="text-xs text-gray-500">{story.fundingSource}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Current Status</div>
                        <div className="text-sm text-gray-600">{story.currentStatus}</div>
                      </div>
                      
                      {/* <Button className="w-full text-white text-sm" style={{ background: studentsColors.primary }}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Read Full Story
                      </Button> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Application <span style={{ color: studentsColors.secondary }}>Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A straightforward 4-step process to join our startup ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: studentsColors.gradient.css }}>
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Duration: {step.duration}</div>
                    <div className="space-y-1">
                      {step.requirements.map((req, idx) => (
                        <div key={idx} className="text-xs text-gray-500 flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-600" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {index < applicationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* <div className="text-center mt-12">
            <Button className="text-white px-8 py-4 text-lg font-semibold rounded-xl" style={{ background: studentsColors.primary }}>
              <UserPlus className="w-5 h-5 mr-2" />
              Start Your Application
            </Button>
          </div> */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ background: studentsColors.gradient.css }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Startup?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join hundreds of successful student entrepreneurs who have transformed their ideas into thriving businesses through our comprehensive support ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <a href="mailto:cieprogram@pes.edu" className="flex items-center" style={{ color: studentsColors.primary }}>
                  <Rocket className="w-5 h-5 mr-2" />
                  Enquire
                </a>
              </Button>
              {/* <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button> */}
            </div>
            
            <div className="mt-8">
              <p className="text-blue-100 mb-4">Questions? We're here to help.</p>
              <Button 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl"
                onClick={() => window.location.href = 'mailto:cieprogram@pes.edu'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact CIE Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}