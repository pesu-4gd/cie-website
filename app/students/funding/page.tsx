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
    applicationProcess: 'Register via CIE or email cieprogram@pes.edu with a project proposal; shortlisted teams pitch to industry panels.',
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
    eligibility: 'All PES University students and faculty',
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
    applicationProcess: 'Submit techno-commercial proposals via CIE website or email cieprogram@pes.edu; shortlisted candidates may be invited to pitch.',
    contactEmail: 'cieprogram@pes.edu',
    featured: false,
    tags: ['cic', 'robotics', 'incubation'],
    studentsSupported: 8,
    status: 'Open'
  },
  {
    id: 'f5',
    title: 'Other Grants & Competitions',
    provider: 'Various (Industry / Government / NGOs)',
    providerType: 'External',
    amount: 'Varies',
    type: 'Grants / Competitions',
    category: 'Various',
    deadline: 'Varies',
    duration: 'Varies',
    eligibility: 'Program dependent',
    description: 'CIE partners with industry and external organizations to provide hackathons, competitions and sponsored grants (e.g., Harman, Smart India Hackathon, Hult Prize).',
    requirements: ['Depends on the program; typically a project pitch or application'],
    benefits: ['Prizes, sponsorships, internships and visibility'],
    applicationProcess: 'Monitor CIE announcements or email cieprogram@pes.edu for details.',
    contactEmail: 'cieprogram@pes.edu',
    featured: false,
    tags: ['hackathon', 'sponsorship', 'external'],
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
    studentName: 'NeuRoar',
    batch: 'Cohort 5',
    grantReceived: 'Cisco-NASSCOM thingQbator',
    amount: '₹5,00,000',
    projectTitle: 'NeuRoar (Assistive AI)',
    outcome: 'Seed funded and accelerated',
    description: 'One of four PES teams that secured full seed funding in thingQbator Cohort 5, demonstrating strong social impact and technical merit.',
    image: '/success/neuroar.jpg'
  },
  {
    id: 's2',
    studentName: 'Greenifly',
    batch: '2022',
    grantReceived: 'PESU Venture Labs',
    amount: 'Seed funding',
    projectTitle: 'Multispectral Agritech Drones',
    outcome: 'Commercialised from capstone project',
    description: 'Transitioned from a university project to a startup focused on NPK analysis using multispectral drone data.',
    image: '/success/greenifly.jpg'
  },
  {
    id: 's3',
    studentName: 'Team FUZE',
    batch: '2020',
    grantReceived: 'Hult Prize / External',
    amount: 'Regional recognition',
    projectTitle: 'CO2-to-Fuel Conversion',
    outcome: 'Advanced to regionals and gained funding/recognition',
    description: 'A social-impact project that advanced through Hult Prize rounds, showcasing CIE support for interdisciplinary teams.',
    image: '/success/fuze.jpg'
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
            <Badge className="mb-4 bg-[#2B9EB3] text-white">
              <DollarSign className="h-4 w-4 mr-1 text-white" />
              Funding & Scholarships
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Funding and Grants at CIE: Fueling Student Innovation
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              The Centre for Innovation and Entrepreneurship (CIE) at PES University supports students
              and startups with funding, tools and mentorship to turn ideas into impact. Explore
              opportunities, resources and application guidance below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-[var(--cie-blue)] px-6 py-3 rounded-xl font-semibold">
                <a href="/students/funding/scholarships" aria-label="View Scholarships">
                  <Search className="h-5 w-5 mr-2 text-[var(--cie-blue)]" />
                  View Scholarships
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
      </section>

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
            <article className="rounded-2xl border p-6 shadow-sm bg-white">
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
              </div> */}
            </article>

            {/* MathWorks */}
            <article className="rounded-2xl border p-6 shadow-sm bg-white">
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
              </div> */}
            </article>

            {/* PESU Venture Labs */}
            <article className="rounded-2xl border p-6 shadow-sm bg-white">
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

              {/* <div className="mt-4">
                <a href="mailto:cieprogram@pes.edu" className="inline-block">
                  <Button className="bg-[var(--cie-blue)] text-white">Submit Proposal</Button>
                </a>
              </div> */}
            </article>

            {/* CiC Ready */}
            <article className="rounded-2xl border p-6 shadow-sm bg-white">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Co-Innovation Center (CiC)</h3>
                  <p className="text-sm text-gray-500 mt-1">IHFC & PESU incubation program</p>
                </div>
                <span className="text-sm font-medium text-yellow-600">Incubation</span>
              </header>

              <p className="mt-4 text-gray-600 text-sm">CiC-Ready is a 6-month incubation focusing on robotics, AI and IoT — includes prototype support, IP assistance and mentoring to help teams form startups.</p>

              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Eligibility: Students with robotics / AI / IoT projects</li>
                <li>Apply: Submit techno-commercial proposals via CIE or email <a className="text-[var(--cie-blue)]" href="mailto:cieprogram@pes.edu">cieprogram@pes.edu</a></li>
              </ul>

              {/* <div className="mt-4">
                <a href="mailto:cieprogram@pes.edu" className="inline-block">
                  <Button variant="outline">Learn More</Button>
                </a>
              </div> */}
            </article>

            {/* Other Grants */}
            <article className="rounded-2xl border p-6 shadow-sm bg-white">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Other Grants & Competitions</h3>
                  <p className="text-sm text-gray-500 mt-1">Hackathons, sponsored grants and external incubators</p>
                </div>
                <span className="text-sm font-medium text-gray-700">Varies</span>
              </header>

              <p className="mt-4 text-gray-600 text-sm">CIE partners with industry and government programs (Harman, Smart India Hackathon, Hult Prize) to provide sponsorships, prizes and pathways to external accelerators.</p>

              {/* <div className="mt-4">
                <a href="mailto:cieprogram@pes.edu" className="inline-block">
                  <Button variant="outline">Contact CIE</Button>
                </a>
              </div> */}
            </article>
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
  <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: studentsColors.gradient?.css ?? studentsColors.primary }}>
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
                <Button size="lg" className="w-full sm:w-auto bg-white text-[var(--cie-blue)] hover:opacity-95">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Contact Support
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
      {/* Search and Filters (preserve existing controls) */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            placeholder="Search funding opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              aria-label="Filter by category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white flex-1"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Banknote className="h-4 w-4 text-gray-500" />
            <select
              aria-label="Filter by amount"
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white flex-1"
            >
              {amounts.map(amount => (
                <option key={amount} value={amount}>{amount}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <select
              aria-label="Filter by status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white flex-1"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Building2 className="h-4 w-4 text-gray-500" />
            <select
              aria-label="Filter by provider type"
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white flex-1"
            >
              {providerTypes.map(pt => (
                <option key={pt} value={pt}>{pt}</option>
              ))}
            </select>
          </div>
          
          {/* <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Export Results
          </Button> */}
        </div>
      </div>

      {/* Revamped Opportunities Grid using Programs-style cards */}
      {opportunities.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Opportunities Found</h3>
            <p className="text-gray-600">No funding opportunities match your search criteria. Try adjusting your filters.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          {opportunities.map((opp, idx) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{opp.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{opp.description}</p>
                </div>
                <div className="ml-4 text-right">
                  <div className="text-sm font-semibold text-gray-900">{opp.amount}</div>
                  <div className="text-xs text-gray-500">Amount</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <Clock className="w-5 h-5 mx-auto mb-1" style={{ color: studentsColors.primary }} />
                  <div className="text-sm font-medium text-gray-900">{opp.duration}</div>
                  <div className="text-xs text-gray-500">Duration</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <Award className="w-5 h-5 mx-auto mb-1" style={{ color: studentsColors.primary }} />
                  <div className="text-sm font-medium text-gray-900">{opp.category}</div>
                  <div className="text-xs text-gray-500">Category</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <Users className="w-5 h-5 mx-auto mb-1" style={{ color: studentsColors.primary }} />
                  <div className="text-sm font-medium text-gray-900">{opp.studentsSupported ?? '-'}</div>
                  <div className="text-xs text-gray-500">Supported</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <MapPin className="w-5 h-5 mx-auto mb-1" style={{ color: studentsColors.primary }} />
                  <div className="text-sm font-medium text-gray-900">{opp.providerType}</div>
                  <div className="text-xs text-gray-500">Provider</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Requirements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                  {opp.requirements?.slice(0,6).map((r, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div> */}
                {/* Action button styled like Programs page */}
                {/* <Button className="w-full bg-white" style={{ borderColor: studentsColors.secondary, color: studentsColors.secondary }}>
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button> */}
             {/* </div> */}

            </motion.div>
          ))}
        </div>
      )}
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
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
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
                <Button className="bg-blue-600 text-white hover:bg-blue-700" >
                  <Calendar className="h-4 w-4 mr-2 text-white" href="mailto:cieprograms@pes.edu" />
                  Schedule Consultation
                </Button>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-green-600" />
                    </div>
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