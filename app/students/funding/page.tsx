 'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  GraduationCap, 
  Award, 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  CheckCircle, 
  ExternalLink, 
  Download, 
  Target, 
  Lightbulb, 
  Building2, 
  Globe, 
  TrendingUp, 
  BookOpen, 
  Briefcase, 
  Heart, 
  Star, 
  ArrowRight, 
  Info, 
  AlertCircle, 
  Search, 
  Filter,
  MapPin,
  Calculator,
  PieChart,
  BarChart3,
  Wallet,
  CreditCard,
  Banknote
} from 'lucide-react';
import { useState } from 'react';
import { SECTION_COLORS, hexToRgb } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
const fundingOpportunities = [
  {
    id: 'f1',
    title: 'Cisco-Nasscom thingQbator',
    provider: 'Cisco & NASSCOM Foundation',
    providerType: 'External',
    amount: 'Up to ₹5,00,000',
    type: 'CSR / Incubation',
    category: 'Entrepreneurship',
    deadline: 'Varies (annual cohorts)',
    duration: 'Cohort-based (typically months)',
    eligibility: 'Undergraduate and postgraduate students from partner universities',
    description: 'A CSR-backed program that enables students to build scalable solutions using IoT, AR, ML and AI, with seed funding, tooling and mentorship from industry experts.',
    requirements: ['Project proposal', 'Prototype demo', 'Team details', 'Mentor endorsement'],
    benefits: ['Seed funding up to ₹5 Lakh', 'Access to tools and platforms', 'Mentorship from Cisco/NASSCOM', 'Networking opportunities'],
    applicationProcess: 'Email cieprogram@pes.edu with a project proposal; shortlisted teams pitch to industry panels.',
    contactEmail: 'cieprogram@pes.edu',
    featured: true,
    tags: ['thingQbator', 'iot', 'ai', 'seed'],
    studentsSupported: 4,
    status: 'Open'
  },
  {
    id: 'f2',
    title: 'MathWorks Program',
    provider: 'MathWorks (Campus License)',
    providerType: 'External',
    amount: 'N/A (software access)',
    type: 'Software & Resources',
    category: 'Research / Education',
    deadline: 'Year-round',
    duration: 'Ongoing',
    eligibility: 'All PES University students and faculty can apply for access',
    description: 'Campus-wide access to MATLAB & Simulink and add-ons for prototyping, research and competitions, plus training resources and competition opportunities.',
    requirements: ['PES University email to register with MathWorks'],
    benefits: ['Free MATLAB/Simulink access', 'Training resources', 'Competition opportunities'],
    applicationProcess: 'Create a MathWorks account using PES University email or contact CIE for assistance.',
    contactEmail: 'cieprogram@pes.edu',
    featured: false,
    tags: ['matlab', 'simulink', 'research'],
    studentsSupported: 0,
    status: 'Open'
  },
  {
    id: 'f3',
    title: 'PESU Venture Labs',
    provider: 'PESU Venture Labs',
    providerType: 'College',
    amount: 'Up to $200,000',
    type: 'Venture Investment',
    category: 'Entrepreneurship',
    deadline: 'Rolling / contact CIE',
    duration: 'Varies',
    eligibility: 'Student teams with deep-tech or high-impact ideas',
    description: 'A deep-tech micro-fund that supports pre-prototype and early-stage startups with significant financial and mentorship resources.',
    requirements: ['Detailed proposal', 'Technical validation', 'Team credentials', 'Go-to-market plan'],
    benefits: ['Large seed funding', 'Mentorship', 'Access to labs and incubation resources'],
    applicationProcess: 'Submit a proposal to cieprogram@pes.edu; proposals are evaluated by an expert panel.',
    contactEmail: 'cieprogram@pes.edu',
    featured: true,
    tags: ['venture', 'deep-tech', 'funding'],
    studentsSupported: 12,
    status: 'Open'
  },
  {
    id: 'f4',
    title: 'Co-Innovation Center (CiC - IHFC & PESU)',
    provider: 'CiC / IHFC',
    providerType: 'CIE / Institutional',
    amount: 'Project-dependent',
    type: 'Incubation / Prototype Support',
    category: 'Research / Incubation',
    deadline: 'Biannual (check announcements)',
    duration: '6 months (CiC-Ready program)',
    eligibility: 'Students from Tier 1/2/3 universities with robotics, AI, IoT projects',
    description: 'Structured incubation supporting prototype development, IP registration and startup formation with technical and commercial mentorship.',
    requirements: ['Techno-commercial proposal', 'Academic credentials', 'Prototype/plan'],
    benefits: ['Prototype funding', 'Lab & tooling access', 'Mentorship and networking'],
    applicationProcess: 'Email cieprogram@pes.edu; shortlisted candidates may be invited to pitch.',
    contactEmail: 'cieprogram@pes.edu',
    featured: false,
    tags: ['cic', 'robotics', 'incubation'],
    studentsSupported: 8,
    status: 'Open'
  },
  {
    id: 'f5',
    title: 'Harman International — Sponsored Projects',
    provider: 'Harman International',
    providerType: 'External',
    amount: 'Varies (project-dependent)',
    type: 'Corporate Sponsorship / Grant',
    category: 'Automotive / IoT / Consumer Electronics',
    deadline: 'Announced via CIE',
    duration: 'Project-based',
    eligibility: 'PES University students with projects in automotive tech, IoT, or related fields',
    description: 'Potential funding or sponsorship for projects aligned with automotive and consumer electronics, leveraging Harman’s technical expertise and industry channels.',
    requirements: ['Project summary', 'Technical plan', 'Team credentials'],
    benefits: ['Grants, internships or project sponsorship', 'Access to Harman technical resources and mentorship'],
    applicationProcess: 'Details announced via CIE; contact cieprogram@pes.edu for updates.',
    contactEmail: 'cieprogram@pes.edu',
    featured: false,
    tags: ['harman', 'automotive', 'iot'],
    studentsSupported: 0,
    status: 'Open'
  },
  {
    id: 'f6',
    title: 'Hackathons & Competitions',
    provider: 'Various Organizers',
    providerType: 'External',
    amount: 'Prizes/Sponsorships (varies)',
    type: 'Competitions / Hackathons',
    category: 'Various',
    deadline: 'Varies',
    duration: 'Event-based',
    eligibility: 'Program dependent',
    description: 'Hackathons and competitions (e.g.,Smart India Hackathon, Hult Prize, CIE Decypher) provide prize money, recognition and pathways to external accelerators.',
    requirements: ['Project/Prototype pitch based on event'],
    benefits: ['Cash prizes, internships, networking and visibility'],
    applicationProcess: 'Email cieprogram@pes.edu; prepare a project pitch or prototype.',
    contactEmail: 'cieprogram@pes.edu',
    featured: false,
    tags: ['hackathon', 'competition', 'hult', 'sih'],
    studentsSupported: 0,
    status: 'Open'
  },
  {
    id: 'f7',
    title: 'External Incubators & Accelerators',
    provider: 'GDC-IITM (I-NCUBATE), Microsoft WISE, etc.',
    providerType: 'External',
    amount: 'Varies (typically grants or seed support)',
    type: 'Incubation / Acceleration',
    category: 'Incubation / Mentorship',
    deadline: 'Announced via CIE or partner portals',
    duration: 'Program dependent',
    eligibility: 'Market-ready or validated ideas; some programs target specific groups (e.g., women developers)',
    description: 'External incubators like GDC-IIT Madras (I-NCUBATE) and Microsoft WISE offer funding, mentorship and go-to-market support to promising teams.',
    requirements: ['Pitch deck', 'Validation evidence', 'Team details'],
    benefits: ['Mentorship, funding, access to partner networks and commercialization support'],
    applicationProcess: 'Applications announced via CIE; typically submit a proposal or apply on the partner portal.',
    contactEmail: 'cieprogram@pes.edu',
    featured: false,
    tags: ['incubator', 'accelerator', 'i-ncubate', 'microsoft-wise'],
    studentsSupported: 0,
    status: 'Open'
  }
];

const fundingStats = {
  totalFunding: '₹8.5 Crores',
  studentsSupported: 240,
  activeGrants: 15,
  successRate: '28%',
  averageAmount: '₹2.1 Lakhs'
};

const applicationTips = [
  {
    title: 'Start Early',
    description: 'Begin your application process at least 2 months before the deadline',
    icon: Clock
  },
  {
    title: 'Read Guidelines Carefully',
    description: 'Thoroughly understand eligibility criteria and requirements',
    icon: FileText
  },
  {
    title: 'Prepare Strong Proposal',
    description: 'Create a compelling and well-researched project proposal',
    icon: Target
  },
  {
    title: 'Get Faculty Support',
    description: 'Secure endorsement and mentorship from faculty members',
    icon: Users
  },
  {
    title: 'Budget Wisely',
    description: 'Create a detailed and realistic budget breakdown',
    icon: Calculator
  },
  {
    title: 'Follow Up',
    description: 'Track your application status and respond promptly to queries',
    icon: CheckCircle
  }
];

const successStories = [
  {
    id: 's1',
    studentName: 'PocketCoach',
    batch: '2024',
    grantReceived: 'Karnataka Elevate',
    amount: '₹30,00,000',
    projectTitle: 'AI-Powered Sports Training Platform',
    outcome: 'Winner of Karnataka Elevate 2024',
    description: 'AI-powered online sports training platform providing expert coaching programs. Also received Start-Up India Seed Fund through IIM Bangalore and Top 30 in Campus Founders cohort.',
    image: '/assets/pocket-coach.jpg'
  },
  {
    id: 's2',
    studentName: 'Epicure Robotics',
    batch: '2024',
    grantReceived: '100x.VC',
    amount: 'VC Funding',
    projectTitle: 'Automated Food Kiosks with Robotics',
    outcome: 'Funded by 100x.VC',
    description: 'Builds fully automated food kiosks using proprietary gantry-based technology (PARK) for fast, precise, and customizable food preparation with in-house R&D and manufacturing.',
    image: '/assets/epicure-robotics.jpg'
  },
  {
    id: 's3',
    studentName: 'Aalap AI',
    batch: '2024',
    grantReceived: 'Market Success',
    amount: '850+ Users',
    projectTitle: 'AI for Legal Tech & Carnatic Music',
    outcome: 'First text-to-Carnatic music generation in India',
    description: 'Developed India\'s first text-to-music Carnatic music generation model and an AI assistant for legal and paralegal functions, trained on instruction data for Indian legal tasks.',
    image: '/assets/aalap-ai.jpg'
  }
];

const categories = ['All', 'Research', 'Academic', 'Entrepreneurship', 'Diversity', 'International'];
const amounts = ['All', '< ₹1L', '₹1L - ₹3L', '₹3L - ₹5L', '> ₹5L'];
const statuses = ['All', 'Open', 'Closing Soon', 'Closed'];
const providerTypes = ['All', 'CIE', 'Government', 'College', 'External'];

export default function FundingPage() {
  const studentsColors = SECTION_COLORS.students;

  // expose primary color as a CSS variable for hero/button hover states
  const cssVars = {
    '--cie-blue': studentsColors.primary,
  } as React.CSSProperties;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAmount, setSelectedAmount] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [activeTab, setActiveTab] = useState('opportunities');

  const filteredOpportunities = fundingOpportunities.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || opportunity.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || opportunity.status === selectedStatus;
    const matchesProvider = selectedProvider === 'All' || (opportunity.providerType || 'External') === selectedProvider;
    
    let matchesAmount = true;
    if (selectedAmount !== 'All') {
      const amount = parseInt(opportunity.amount.replace(/[^0-9]/g, ''));
      switch (selectedAmount) {
        case '< ₹1L':
          matchesAmount = amount < 100000;
          break;
        case '₹1L - ₹3L':
          matchesAmount = amount >= 100000 && amount <= 300000;
          break;
        case '₹3L - ₹5L':
          matchesAmount = amount >= 300000 && amount <= 500000;
          break;
        case '> ₹5L':
          matchesAmount = amount > 500000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesAmount && matchesStatus && matchesProvider;
  });

  return (
  <div className="min-h-screen bg-white" style={cssVars}>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={studentsColors.hero?.background}
          accentColor={studentsColors.hero?.hexagonAccent}
          className="absolute inset-0 z-0"
        />
  <div className="absolute inset-0 bg-black/200 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30 mb-4">
              <DollarSign className="h-4 w-4 mr-2" />
              Funding & Scholarships
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Funding and Grants at CIE:{' '}
              <span className="block text-[#2B9EB3]">Fueling Student Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              The Centre for Innovation and Entrepreneurship (CIE) at PES University supports students
              and startups with funding, tools and mentorship to turn ideas into impact. Explore
              opportunities, resources and application guidance below.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-[var(--cie-blue)] px-6 py-3 rounded-xl font-semibold">
                <a href="/students/funding/scholarships" aria-label="View Scholarships">
                  <Search className="h-5 w-5 mr-2 text-[var(--cie-blue)]" />
                  View Scholarships
                </a>
              </Button>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{fundingStats.totalFunding}</div>
              <div className="text-gray-600">Total Funding</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{fundingStats.studentsSupported}</div>
              <div className="text-gray-600">Students Supported</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{fundingStats.activeGrants}</div>
              <div className="text-gray-600">Active Grants</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{fundingStats.successRate}</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{fundingStats.averageAmount}</div>
              <div className="text-gray-600">Average Amount</div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      {/* Overview / Detailed Content moved out of hero - formatted cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Funding Opportunities</h2>
            <p className="mt-2 text-gray-600 max-w-3xl">
              The Centre for Innovation and Entrepreneurship (CIE) at PES University empowers students
              and startups with funding, access to tools, and mentorship to turn ideas into impact.
              Below are flagship programs, ongoing resources, and guidance to help you apply.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* thingQbator */}
            {/* <article className="rounded-2xl border p-6 shadow-sm bg-white">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Cisco-NASSCOM thingQbator</h3>
                  <p className="text-sm text-gray-500 mt-1">CSR-backed cohort program for deep-tech teams</p>
                </div>
                <span className="text-sm font-medium text-[var(--cie-blue)]">Seed funding</span>
              </header>

              <p className="mt-4 text-gray-600 text-sm">Build scalable solutions using IoT, AR, ML and AI. Selected teams receive seed funding (up to ₹5 Lakh), tooling and mentorship from Cisco/NASSCOM.</p>

              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Eligibility: UG & PG students from partner universities</li>
                <li>Apply: Submit a project proposal or email <a className="text-[var(--cie-blue)]" href="mailto:cieprogram@pes.edu">cieprogram@pes.edu</a></li>
              </ul>

              {/* <div className="mt-4">
                <a href="mailto:cieprogram@pes.edu" className="inline-block">
                  <Button className="bg-[var(--cie-blue)] text-white">Enquire / Apply</Button>
                </a>
              </div> 
            </article> */}

            {/* MathWorks */}
            {/* <article className="rounded-2xl border p-6 shadow-sm bg-white">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">MathWorks Program</h3>
                  <p className="text-sm text-gray-500 mt-1">Campus license & training for MATLAB/Simulink</p>
                </div>
                <span className="text-sm font-medium text-green-600">Software access</span>
              </header>

              <p className="mt-4 text-gray-600 text-sm">Free campus-wide access to MATLAB, Simulink and add-ons for prototyping, research and competitions. Training and competition opportunities are available year-round.</p>

              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Eligibility: All PES students & faculty</li>
                <li>Apply: Create a MathWorks account using your PES email</li>
              </ul>

              {/* <div className="mt-4">
                <a href="mailto:cieprogram@pes.edu" className="inline-block">
                  <Button variant="outline">Get Support</Button>
                </a>
              </div> 
            </article> */}

            {/* PESU Venture Labs */}
            {/* <article className="rounded-2xl border p-6 shadow-sm bg-white">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">PESU Venture Labs</h3>
                  <p className="text-sm text-gray-500 mt-1">Deep-tech micro-fund for early startups</p>
                </div>
                <span className="text-sm font-medium text-purple-600">Venture fund</span>
              </header>

              <p className="mt-4 text-gray-600 text-sm">Supports pre-prototype and early-stage startups in areas like AI/ML, IoT, automation and personalized medicine. Financial and mentorship support for high-impact teams.</p>

              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Eligibility: Student teams with deep-tech ideas</li>
                <li>Apply: Submit a detailed proposal to <a className="text-[var(--cie-blue)]" href="mailto:cieprogram@pes.edu">cieprogram@pes.edu</a></li>
              </ul>

              <div className="mt-4">
                <a href="mailto:cieprogram@pes.edu" className="inline-block">
                  <Button className="bg-[var(--cie-blue)] text-white">Submit Proposal</Button>
                </a>
              </div>
            </article> */}

            {/* CiC Ready */}
            {/* <article className="rounded-2xl border p-6 shadow-sm bg-white">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Co-Innovation Center (CiC)</h3>
                  <p className="text-sm text-gray-500 mt-1">IHFC & PESU Pre-incubation program</p>
                </div>
                <span className="text-sm font-medium text-yellow-600">Incubation</span>
              </header>

              <p className="mt-4 text-gray-600 text-sm">CiC-Ready Program is a 6-month incubation focusing on robotics, AI and IoT — includes prototype support, IP assistance and mentoring to help teams form startups.</p>

              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Eligibility: Students with robotics / AI / IoT projects</li>
                <li>Apply: Submit techno-commercial proposals via CIE or email <a className="text-[var(--cie-blue)]" href="mailto:cieprogram@pes.edu">cieprogram@pes.edu</a></li>
              </ul>

              {/* <div className="mt-4">
                <a href="mailto:cieprogram@pes.edu" className="inline-block">
                  <Button variant="outline">Learn More</Button>
                </a>
              </div> 
            </article> */}

            {/* Harman International */}
            {/* <article className="rounded-2xl border p-6 shadow-sm bg-white">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Harman International — Sponsored Projects</h3>
                  <p className="text-sm text-gray-500 mt-1">Potential corporate sponsorships for automotive and consumer electronics projects</p>
                </div>
                <span className="text-sm font-medium text-gray-700">Varies</span>
              </header>

              <p className="mt-4 text-gray-600 text-sm">Potential funding or sponsorship for projects aligned with automotive and consumer electronics, leveraging Harman’s expertise. Benefits include grants, internships, and access to Harman's technical resources.</p>

              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Eligibility: PES University students with projects in automotive tech, IoT, or related fields</li>
                <li>Application Process: Details announced via CIE; contact <a className="text-[var(--cie-blue)]" href="mailto:cieprogram@pes.edu">cieprogram@pes.edu</a> for updates</li>
              </ul>
            </article> */}

            {/* Hackathons & Competitions */}
            {/* <article className="rounded-2xl border p-6 shadow-sm bg-white">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Hackathons & Competitions</h3>
                  <p className="text-sm text-gray-500 mt-1">Smart India Hackathon, Hult Prize, CIE events</p>
                </div>
                <span className="text-sm font-medium text-gray-700">Varies</span>
              </header>

              <p className="mt-4 text-gray-600 text-sm">National and international hackathons provide cash prizes, recognition and pathways to acceleration. Examples: Smart India Hackathon (cash prizes), Hult Prize (global exposure), and CIE Decypher (seed funding & networking).</p>

              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Application Process: Register through CIE or the event platform; prepare a project pitch or prototype</li>
                <li>Benefits: Prizes, internships, visibility and potential accelerator referrals</li>
              </ul>
            </article> */}

            {/* External Incubators & Accelerators */}
            {/* <article className="rounded-2xl border p-6 shadow-sm bg-white">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">External Incubators & Accelerators</h3>
                  <p className="text-sm text-gray-500 mt-1">GDC-IIT Madras (I-NCUBATE), Microsoft WISE and partner accelerators</p>
                </div>
                <span className="text-sm font-medium text-gray-700">Varies</span>
              </header>

              <p className="mt-4 text-gray-600 text-sm">Programs like GDC-IIT Madras (I-NCUBATE) and Microsoft WISE offer funding, mentorship and commercialization support for market-ready ideas. Some programs provide targeted support (e.g., women-focused initiatives).</p>

              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Eligibility: Market-ready or validated ideas; program-dependent</li>
                <li>Application Process: Announced via CIE; typically submit a proposal or apply on the partner portal</li>
              </ul>
            </article> */}
          </div>

          <div className="mt-8 bg-slate-50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-gray-900">How to Stay Informed</h4>
            <p className="mt-2 text-gray-600">Subscribe to the CIE newsletter, follow CIE on LinkedIn/Instagram, or email <a className="text-[var(--cie-blue)]" href="mailto:cieprogram@pes.edu">cieprogram@pes.edu</a> for tailored guidance.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="opportunities" className="text-lg py-3">
                <DollarSign className="h-5 w-5 mr-2" />
                Opportunities
              </TabsTrigger>
              <TabsTrigger value="tips" className="text-lg py-3">
                <Lightbulb className="h-5 w-5 mr-2" />
                Application Tips
              </TabsTrigger>
              <TabsTrigger value="success" className="text-lg py-3">
                <Award className="h-5 w-5 mr-2" />
                Success Stories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="opportunities">
                <OpportunitiesSection 
                  opportunities={filteredOpportunities}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedAmount={selectedAmount}
                  setSelectedAmount={setSelectedAmount}
                  selectedStatus={selectedStatus}
                  setSelectedStatus={setSelectedStatus}
                  selectedProvider={selectedProvider}
                  setSelectedProvider={setSelectedProvider}
                  studentsColors={studentsColors}
                />
            </TabsContent>

            <TabsContent value="tips">
              <ApplicationTipsSection tips={applicationTips} />
            </TabsContent>

            <TabsContent value="success">
              <SuccessStoriesSection stories={successStories} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background:'#00338d' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Fund Your Dreams?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Start your application today and take the first step towards realizing your potential
            </p>
            <div className="flex justify-center">
              <a href="mailto:cieprogram@pes.edu" className="inline-block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#00338d] hover:opacity-95">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Contact Supportc
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Opportunities Section Component
function OpportunitiesSection({ 
  opportunities, 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory,
  selectedAmount,
  setSelectedAmount,
  selectedStatus,
  setSelectedStatus,
  selectedProvider,
  setSelectedProvider,
  studentsColors
}: {
  opportunities: typeof fundingOpportunities;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedAmount: string;
  setSelectedAmount: (amount: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedProvider: string;
  setSelectedProvider: (p: string) => void;
  studentsColors: typeof SECTION_COLORS.students;
}) {
  return (
    <div className="space-y-8">
      {/* Filters removed by request — showing articles only */}

      {/* Revamped Opportunities Grid using Programs-style cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opp) => (
          <article key={opp.id} className="rounded-2xl border p-6 shadow-sm bg-white">
            <header className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{opp.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{opp.provider}</p>
              </div>
              <span className="text-sm font-medium text-[var(--cie-blue)]">{opp.amount}</span>
            </header>

            <p className="mt-4 text-gray-600 text-sm">{opp.description}</p>

            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              {opp.eligibility && <li><strong>Eligibility:</strong> {opp.eligibility}</li>}
              {opp.requirements && <li><strong>Requirements:</strong> {opp.requirements.join(', ')}</li>}
              {opp.applicationProcess && <li><strong>Apply:</strong> {opp.applicationProcess}</li>}
            </ul>

            <div className="mt-4">
              <a href={`mailto:${opp.contactEmail ?? 'cieprogram@pes.edu'}`} className="inline-block">
                <Button className="bg-[var(--cie-blue)] text-white">Contact CIE</Button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// Application Tips Section Component
function ApplicationTipsSection({ tips }: { tips: typeof applicationTips }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Tips</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Follow these expert tips to increase your chances of securing funding
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => {
          const IconComponent = tip.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <IconComponent className="w-10 h-10 text-[#2B9EB3]" />
                    <h3 className="text-xl font-semibold text-gray-900">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
      
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help with Your Application?</h3>
              <p className="text-blue-800 mb-4">
                Our funding support team is here to help you with your application process. 
                Schedule a consultation or attend our weekly application workshops.
              </p>
              <div className="flex space-x-3">
                <a href="mailto:cieprogram@pes.edu" className="inline-block">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    <Calendar className="h-4 w-4 mr-2 text-white" />
                    Schedule Consultation
                  </Button>
                </a>
                {/* <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Join Workshop
                </Button> */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Success Stories Section Component
function SuccessStoriesSection({ stories }: { stories: typeof successStories }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See how our funding programs have helped students achieve their goals
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-10 h-10 text-[#2B9EB3]" />
                    <div>
                      <p className="font-semibold text-gray-900">{story.studentName}</p>
                      <p className="text-sm text-gray-600">Batch {story.batch}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-sm font-semibold text-green-800">{story.grantReceived}</p>
                      <p className="text-lg font-bold text-green-600">{story.amount}</p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-blue-600 font-medium">Project:</p>
                      <p className="text-sm font-semibold text-blue-900">{story.projectTitle}</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-yellow-800">{story.outcome}</p>
                  </div>
                  
                  <p className="text-gray-700 text-sm italic">"{story.description}"</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}