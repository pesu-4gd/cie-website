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
  Calculator,
  PieChart,
  BarChart3,
  Wallet,
  CreditCard,
  Banknote
} from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const fundingOpportunities = [
  {
    id: '1',
    title: 'CiC MathWorks Innovation Grant',
    provider: 'Centre for Innovation & Collaboration (CiC)',
    amount: '₹2,00,000',
    type: 'Innovation Grant',
    category: 'Research',
    deadline: '2024-03-15',
    duration: '12 months',
    eligibility: 'All UG/PG students with innovative project ideas',
    description: 'Flagship grant program supporting student innovation projects in collaboration with MathWorks. Focus on MATLAB/Simulink based solutions.',
    requirements: ['Detailed project proposal', 'Faculty mentor', 'Technical feasibility study', 'Budget breakdown'],
    benefits: ['Funding up to ₹2L', 'MathWorks software licenses', 'Mentorship from industry experts', 'Internship opportunities'],
    applicationProcess: 'Online application through CiC portal',
    contactEmail: 'cic@pes.edu',
    featured: true,
    status: 'Open',
    tags: ['innovation', 'matlab', 'research', 'collaboration'],
    successRate: '35%',
    totalAwarded: '₹50L+',
    studentsSupported: 25
  },
  {
    id: '2',
    title: 'PES University Merit Scholarship',
    provider: 'PES University',
    amount: '₹50,000 - ₹1,50,000',
    type: 'Merit Scholarship',
    category: 'Academic',
    deadline: '2024-04-30',
    duration: '1 academic year',
    eligibility: 'Students with CGPA > 8.5',
    description: 'Merit-based scholarship for academically excellent students to support their educational expenses.',
    requirements: ['Academic transcripts', 'Recommendation letters', 'Personal statement', 'Financial need assessment'],
    benefits: ['Tuition fee waiver', 'Monthly stipend', 'Library access', 'Research opportunities'],
    applicationProcess: 'Apply through student portal',
    contactEmail: 'scholarships@pes.edu',
    featured: false,
    status: 'Open',
    tags: ['merit', 'academic', 'scholarship', 'tuition'],
    successRate: '25%',
    totalAwarded: '₹1.2Cr+',
    studentsSupported: 150
  },
  {
    id: '3',
    title: 'Startup Seed Fund',
    provider: 'PES Innovation Centre',
    amount: '₹5,00,000',
    type: 'Seed Funding',
    category: 'Entrepreneurship',
    deadline: '2024-05-20',
    duration: '18 months',
    eligibility: 'Student entrepreneurs with validated business ideas',
    description: 'Seed funding for student startups with high growth potential and market validation.',
    requirements: ['Business plan', 'Market validation', 'Prototype/MVP', 'Team formation'],
    benefits: ['Seed capital', 'Incubation space', 'Mentorship program', 'Legal support'],
    applicationProcess: 'Pitch presentation to selection committee',
    contactEmail: 'incubation@pes.edu',
    featured: true,
    status: 'Open',
    tags: ['startup', 'entrepreneurship', 'seed', 'incubation'],
    successRate: '15%',
    totalAwarded: '₹2Cr+',
    studentsSupported: 8
  },
  {
    id: '4',
    title: 'Research Excellence Grant',
    provider: 'Department of Science & Technology',
    amount: '₹3,00,000',
    type: 'Research Grant',
    category: 'Research',
    deadline: '2024-06-10',
    duration: '24 months',
    eligibility: 'PhD and final year students with research publications',
    description: 'Government grant for outstanding research projects in science and technology domains.',
    requirements: ['Research proposal', 'Literature review', 'Publication record', 'Supervisor endorsement'],
    benefits: ['Research funding', 'Equipment purchase', 'Conference travel', 'Publication support'],
    applicationProcess: 'Submit through DST online portal',
    contactEmail: 'research@pes.edu',
    featured: false,
    status: 'Open',
    tags: ['research', 'government', 'publication', 'phd'],
    successRate: '20%',
    totalAwarded: '₹75L+',
    studentsSupported: 12
  },
  {
    id: '5',
    title: 'Women in Tech Scholarship',
    provider: 'Grace Hopper Foundation',
    amount: '₹1,00,000',
    type: 'Diversity Scholarship',
    category: 'Diversity',
    deadline: '2024-03-31',
    duration: '1 academic year',
    eligibility: 'Female students in Computer Science/IT',
    description: 'Scholarship program to encourage and support women pursuing careers in technology.',
    requirements: ['Academic records', 'Essay on career goals', 'Community involvement', 'Technical projects'],
    benefits: ['Financial support', 'Mentorship network', 'Conference attendance', 'Industry connections'],
    applicationProcess: 'Online application with portfolio submission',
    contactEmail: 'diversity@pes.edu',
    featured: false,
    status: 'Open',
    tags: ['women', 'diversity', 'technology', 'mentorship'],
    successRate: '30%',
    totalAwarded: '₹25L+',
    studentsSupported: 25
  },
  {
    id: '6',
    title: 'International Exchange Grant',
    provider: 'Global Education Office',
    amount: '₹4,00,000',
    type: 'Exchange Grant',
    category: 'International',
    deadline: '2024-02-28',
    duration: '1 semester',
    eligibility: 'Students selected for international exchange programs',
    description: 'Financial support for students participating in international exchange programs with partner universities.',
    requirements: ['Exchange program acceptance', 'Academic standing', 'Language proficiency', 'Cultural adaptability assessment'],
    benefits: ['Travel expenses', 'Living allowance', 'Insurance coverage', 'Cultural immersion'],
    applicationProcess: 'Apply through Global Education Office',
    contactEmail: 'global@pes.edu',
    featured: false,
    status: 'Closing Soon',
    tags: ['international', 'exchange', 'travel', 'cultural'],
    successRate: '40%',
    totalAwarded: '₹80L+',
    studentsSupported: 20
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
    id: '1',
    studentName: 'Arjun Krishnan',
    batch: '2023',
    grantReceived: 'CiC MathWorks Innovation Grant',
    amount: '₹2,00,000',
    projectTitle: 'AI-Powered Traffic Management System',
    outcome: 'Patent filed, startup launched',
    description: 'Developed an intelligent traffic management system using MATLAB and deep learning. The project received industry recognition and led to a successful startup.',
    image: '/success/arjun-krishnan.jpg'
  },
  {
    id: '2',
    studentName: 'Priya Sharma',
    batch: '2022',
    grantReceived: 'Women in Tech Scholarship',
    amount: '₹1,00,000',
    projectTitle: 'Blockchain-based Supply Chain',
    outcome: 'Internship at Microsoft',
    description: 'Built a blockchain solution for supply chain transparency. The scholarship enabled her to focus on research and secure a prestigious internship.',
    image: '/success/priya-sharma.jpg'
  },
  {
    id: '3',
    studentName: 'Rahul Patel',
    batch: '2024',
    grantReceived: 'Startup Seed Fund',
    amount: '₹5,00,000',
    projectTitle: 'EduTech Platform for Rural Areas',
    outcome: 'Serving 10,000+ students',
    description: 'Created an affordable education platform for rural students. The seed funding helped scale the solution to multiple states.',
    image: '/success/rahul-patel.jpg'
  }
];

const categories = ['All', 'Research', 'Academic', 'Entrepreneurship', 'Diversity', 'International'];
const amounts = ['All', '< ₹1L', '₹1L - ₹3L', '₹3L - ₹5L', '> ₹5L'];
const statuses = ['All', 'Open', 'Closing Soon', 'Closed'];

export default function FundingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAmount, setSelectedAmount] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [activeTab, setActiveTab] = useState('opportunities');

  const filteredOpportunities = fundingOpportunities.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || opportunity.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || opportunity.status === selectedStatus;
    
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
    
    return matchesSearch && matchesCategory && matchesAmount && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              <DollarSign className="h-4 w-4 mr-1" />
              Funding & Scholarships
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fund Your <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover funding opportunities, scholarships, and grants to support your academic journey, 
              research projects, and entrepreneurial ventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Search className="h-5 w-5 mr-2" />
                Explore Opportunities
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Application Guide
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
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{fundingStats.totalFunding}</div>
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
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{fundingStats.activeGrants}</div>
              <div className="text-gray-600">Active Grants</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{fundingStats.successRate}</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{fundingStats.averageAmount}</div>
              <div className="text-gray-600">Average Amount</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <FileText className="h-5 w-5 mr-2" />
                Start Application
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <ExternalLink className="h-5 w-5 mr-2" />
                Contact Support
              </Button>
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
  setSelectedStatus
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
}) {
  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search funding opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
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
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white flex-1"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Export Results
          </Button>
        </div>
      </div>

      {/* Opportunities Grid */}
      {opportunities.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Opportunities Found</h3>
            <p className="text-gray-600">No funding opportunities match your search criteria. Try adjusting your filters.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full hover:shadow-lg transition-shadow ${opportunity.featured ? 'ring-2 ring-green-500' : ''}`}>
                {opportunity.featured && (
                  <div className="bg-green-600 text-white text-center py-2 text-sm font-semibold">
                    <Star className="h-4 w-4 inline mr-1" />
                    Featured Opportunity
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{opportunity.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">
                        {opportunity.provider}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant={opportunity.status === 'Open' ? 'default' : opportunity.status === 'Closing Soon' ? 'destructive' : 'secondary'}
                      className="ml-2"
                    >
                      {opportunity.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">{opportunity.amount}</div>
                      <Badge variant="outline">{opportunity.type}</Badge>
                    </div>
                    
                    <p className="text-sm text-gray-700 line-clamp-3">{opportunity.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Duration: {opportunity.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <TrendingUp className="h-4 w-4" />
                        <span>Success Rate: {opportunity.successRate}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600 mb-3">Key Benefits:</p>
                      <ul className="space-y-1">
                        {opportunity.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                        <a href="https://forms.gle/b8uLuLievLw7V6uv8" target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-2" />
                          Apply Now
                        </a>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Join Workshop
                </Button>
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