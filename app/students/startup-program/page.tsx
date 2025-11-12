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
  Briefcase,
  FlaskConical,
  MessageCircle,
  Mail,
  UserPlus,
  ChartBar,
  Wrench,
  Shield
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
      name: 'PocketCoach',
      industry: 'Sports Technology | AI Coaching',
      funding: '₹30 Lakh',
      fundingSource: 'Karnataka Elevate 2024',
      description: 'AI-powered online sports training platform providing expert coaching programs designed by international athletes and trainers. Uses computer vision to enable personalized athlete development and team training solutions.',
      impact: 'Democratizing professional sports coaching, with growing adoption by schools and sports organizations across India',
      founders: 'Achintya Krishna, Anup Prakash, Omkar Jois',
      currentStatus: 'Winner of Karnataka Elevate 2024, Top 30 college startups in Campus Founders cohort',
      linkedin: 'https://www.linkedin.com/company/pocketcoach-technologies-pvt-ltd/'
    },
    {
      name: 'Epicure Robotics',
      industry: 'Robotics | Food Automation',
      funding: 'Funded by 100x.VC',
      fundingSource: '100x.VC',
      description: 'Fully automated food kiosks using proprietary gantry-based technology (PARK) for fast, precise, and customizable food preparation. All R&D and manufacturing done in-house in Bangalore.',
      impact: 'Revolutionizing the food service industry by introducing affordable, reliable robotic automation technologies',
      founders: 'Aditya Mehta, Gokul Raj K.S.',
      currentStatus: 'Developing modular, plug-and-play kiosks with growing network across cities',
      linkedin: 'https://www.linkedin.com/company/epicure-robotics/'
    },
    {
      name: 'Aalap AI',
      industry: 'Artificial Intelligence | Legal Tech & Music AI',
      funding: '850+ Active Users',
      fundingSource: 'Self-Funded',
      description: "India's first text-to-music Carnatic music generation model and an AI assistant for legal and paralegal functions, trained on instruction data for Indian legal tasks.",
      impact: 'Bridging tradition and technology in music while revolutionizing legal assistance with specialized AI tools',
      founders: 'Ajay Rao, Adithya R.',
      currentStatus: 'Academic recognition for AI model performance, superior performance on Indian legal tasks',
      linkedin: 'https://www.linkedin.com/company/aalapai/'
    },
    {
      name: 'Authify',
      industry: 'Deep Tech | Data Security & Enforcement Systems',
      funding: 'National Revenue Milestones',
      fundingSource: 'Enterprise Partnerships',
      description: 'Specializes in data security, behavioral infrastructure, and enforcement systems including urban gardening enforcement, traffic management, and wellness solutions.',
      impact: 'Enhancing smart city initiatives and enterprise data security through innovative behavioral enforcement technology',
      founders: 'Ajay Vasisht, Aneesh Madhav, Akshay Vasisht, Aman Bothra',
      currentStatus: 'Broke national revenue milestones in first quarter, featured on national television',
      linkedin: 'https://www.linkedin.com/company/authifytech/'
    },
    {
      name: 'SmartChakra',
      industry: 'IoT & Connected Devices',
      funding: 'Industry Backed',
      fundingSource: 'Strategic Partners',
      description: 'Developing smart connected devices for wellness, consumer automation, and healthcare verticals.',
      impact: 'Bringing IoT innovation to wellness and healthcare sectors',
      founders: 'Tarakesh Mogallapalli, Manjunath Gangadhar',
      currentStatus: 'Growing product portfolio in wellness and automation',
      linkedin: 'https://www.linkedin.com/company/smartchakra/'
    },
    {
      name: 'Zeru Finance',
      industry: 'Fintech | Supply Chain',
      funding: 'Venture Backed',
      fundingSource: 'Early Stage Investors',
      description: 'Innovative fintech solutions focusing on supply chain traceability, accountability, and transparent operations.',
      impact: 'Transforming supply chain transparency and financial operations',
      founders: 'PES University Alumni',
      currentStatus: 'Expanding fintech solutions for supply chain management',
      linkedin: 'https://www.linkedin.com/company/zerufinance/'
    },
    {
      name: 'Draft42',
      industry: 'Design & Tech Innovation',
      funding: 'Bootstrap & Grants',
      fundingSource: 'Research Collaborations',
      description: 'Creative solution studio focused on product design, IoT, and cybersecurity, collaborating with research labs and industry mentors.',
      impact: 'Creating innovative design and tech solutions for diverse industries',
      founders: 'PES University Students',
      currentStatus: 'Active collaborations with research labs and industry',
      linkedin: 'https://www.linkedin.com/company/draft42/'
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Application',
      description: 'Submit your idea and apply to join the program through a simple application process',
      duration: 'Ongoing',
      requirements: ['Innovative idea or concept', 'Team details (if applicable)', 'Basic project outline']
    },
    {
      step: 2,
      title: 'Onboarding',
      description: 'Initial orientation, resource access setup, mentor assignment, and program kickoff',
      duration: '1-2 weeks',
      requirements: ['Attend orientation', 'Meet assigned mentor', 'Access lab facilities']
    },
    {
      step: 3,
      title: 'Active Participation',
      description: 'Regular mentorship, workshops, prototype development, and progress tracking',
      duration: 'Ongoing',
      requirements: ['Biweekly mentor meetings', 'Attend workshops', 'Regular progress updates']
    },
    {
      step: 4,
      title: 'Completion & Growth',
      description: 'Final pitch, graduation from program, continued support for scaling and funding',
      duration: 'Variable',
      requirements: ['Final presentation', 'Working prototype/MVP', 'Post-program support access']
    }
  ];

  const studentJourney = [
    {
      stage: 'Idea Generation',
      description: 'Brainstorm and validate your startup concept with support from CIE resources and mentors',
      icon: Lightbulb,
      color: 'blue'
    },
    {
      stage: 'Prototype Development',
      description: 'Build your MVP using state-of-the-art makerspaces, labs, and technical guidance',
      icon: Wrench,
      color: 'blue'
    },
    {
      stage: 'IP/Patent Registry',
      description: 'Secure intellectual property rights with expert legal assistance and filing support',
      icon: Shield,
      color: 'blue'
    },
    {
      stage: 'Company Establishment',
      description: 'Register your company with guidance on legal structure, compliance, and documentation',
      icon: Building2,
      color: 'blue'
    },
    {
      stage: 'Funding Support',
      description: 'Access seed funding, grants, and investor connections to fuel your growth',
      icon: DollarSign,
      color: 'blue'
    },
    {
      stage: 'Mentorship & Networking',
      description: 'Connect with industry leaders, successful entrepreneurs, and domain experts',
      icon: Users,
      color: 'blue'
    },
    {
      stage: 'Scaling & Growth',
      description: 'Expand operations with ongoing support for market entry and business development',
      icon: TrendingUp,
      color: 'blue'
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30">
                <Rocket className="w-4 h-4 mr-2" />
                Student Startup Program
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Student Startup Program:{' '}
              <span className="block" style={{ color: studentsColors.accent }}>Your Path to Entrepreneurial Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering students to transform innovative ideas into thriving startups. A transparent, structured pathway from ideation to scaling your venture with cutting-edge resources, expert mentorship, and financial support.
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
      {/* <section className="py-16 bg-white">
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
      </section> */}

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
              Program <span style={{ color: studentsColors.primary }}>Objectives</span>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Foster Entrepreneurial Mindset</h3>
                    <p className="text-gray-600">Develop problem-solving skills and entrepreneurial thinking across all disciplines through practical experience, courses, and workshops.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Resources & Infrastructure</h3>
                    <p className="text-gray-600">Access resources, mentorship, and state-of-the-art infrastructure for prototype/MVP development with hands-on projects.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Legal & IP Guidance</h3>
                    <p className="text-gray-600">Navigate legal processes including IP/patent registry and company establishment with expert support.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scaling & Global Exposure</h3>
                    <p className="text-gray-600">Support for scaling and growth with funding opportunities and global exposure through international platforms.</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Open to all PES University students</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">No restrictions on discipline or year of study</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Particularly beneficial for 2nd-year students in EIE courses</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">No prior startup experience required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Ideal for both beginners and experienced entrepreneurs</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: `${studentsColors.primary}1A` }}>
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-bold text-gray-900">Designed for All Students</span>
                </div>
                <p className="text-sm text-gray-600">
                  Whether you&apos;re from Engineering, Design, Law, or any other discipline—if you have an innovative idea, you belong here.
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
                      
                      {story.linkedin && (
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-xl"
                          onClick={() => globalThis.open(story.linkedin, '_blank')}
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          View LinkedIn
                        </Button>
                      )}
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
              Program <span className="text-blue-600">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured 4-phase journey from application to scaling your startup.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg text-center h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-blue-600 to-cyan-500">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{step.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Duration: {step.duration}</div>
                    <div className="space-y-1">
                      {step.requirements.map((req) => (
                        <div key={req} className="text-xs text-gray-500 flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-600" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {index < applicationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/1 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your <span className="text-blue-600">Startup Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From idea to impact: A comprehensive path supporting every stage of your entrepreneurial journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {studentJourney.map((stage, index) => {
              const IconComponent = stage.icon;
              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-500">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{stage.stage}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
                </motion.div>
              );
            })}
          </div>
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