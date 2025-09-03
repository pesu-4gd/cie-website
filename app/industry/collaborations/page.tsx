'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';collapsible';
import { 
  Building2, 
  Handshake, 
  Users, 
  Target, 
  TrendingUp, 
  Globe, 
  Award, 
  Lightbulb, 
  BookOpen, 
  Briefcase, 
  Calendar, 
  Clock, 
  MapPin, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Heart, 
  Zap, 
  Shield, 
  Rocket, 
  Network, 
  FileText, 
  Mail, 
  Phone, 
  Search, 
  Filter,
  DollarSign,
  GraduationCap,
  Code,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Wifi,
  Settings,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const collaborationTypes = [
  {
    id: '1',
    title: 'Research Partnerships',
    description: 'Collaborative research projects with industry experts and academic institutions',
    icon: BookOpen,
    color: 'blue',
    benefits: ['Joint research projects', 'Access to industry data', 'Publication opportunities', 'Funding support'],
    duration: '6-24 months',
    commitment: 'Medium to High',
    examples: ['AI/ML research with tech companies', 'Sustainability projects with green tech firms', 'Healthcare innovation with medical device companies']
  },
  {
    id: '2',
    title: 'Internship Programs',
    description: 'Structured internship opportunities for students across various domains',
    icon: GraduationCap,
    color: 'green',
    benefits: ['Student placement', 'Industry exposure', 'Skill development', 'Talent pipeline'],
    duration: '2-6 months',
    commitment: 'Medium',
    examples: ['Summer internships', 'Co-op programs', 'Project-based internships', 'Remote work opportunities']
  },
  {
    id: '3',
    title: 'Technology Transfer',
    description: 'Commercialization of university research and intellectual property',
    icon: Rocket,
    color: 'purple',
    benefits: ['IP licensing', 'Startup incubation', 'Technology validation', 'Market access'],
    duration: '12-36 months',
    commitment: 'High',
    examples: ['Patent licensing', 'Spin-off companies', 'Technology demonstrations', 'Proof of concept development']
  },
  {
    id: '4',
    title: 'Consulting Services',
    description: 'Expert consulting and problem-solving services for industry challenges',
    icon: Target,
    color: 'red',
    benefits: ['Expert knowledge', 'Cost-effective solutions', 'Fresh perspectives', 'Academic rigor'],
    duration: '1-12 months',
    commitment: 'Low to Medium',
    examples: ['Technical consulting', 'Market research', 'Process optimization', 'Innovation workshops']
  },
  {
    id: '5',
    title: 'Training & Development',
    description: 'Customized training programs for industry professionals and students',
    icon: Users,
    color: 'orange',
    benefits: ['Skill enhancement', 'Certification programs', 'Executive education', 'Continuous learning'],
    duration: '1-6 months',
    commitment: 'Medium',
    examples: ['Executive education', 'Technical workshops', 'Leadership development', 'Digital transformation training']
  },
  {
    id: '6',
    title: 'Innovation Labs',
    description: 'Joint innovation centers and labs for cutting-edge research and development',
    icon: Lightbulb,
    color: 'yellow',
    benefits: ['Shared resources', 'Innovation ecosystem', 'Talent development', 'Technology advancement'],
    duration: '24-60 months',
    commitment: 'High',
    examples: ['AI research labs', 'IoT innovation centers', 'Fintech labs', 'Sustainability research hubs']
  }
];

const industryPartners = [
  {
    id: '1',
    name: 'Microsoft',
    logo: '/partners/microsoft.png',
    industry: 'Technology',
    partnershipType: 'Strategic Alliance',
    since: '2019',
    collaborations: ['AI Research Lab', 'Student Internships', 'Faculty Exchange', 'Cloud Computing Projects'],
    impact: {
      students: 150,
      projects: 25,
      publications: 12,
      funding: '₹2.5 Cr'
    },
    description: 'Strategic partnership focusing on AI, cloud computing, and digital transformation initiatives.',
    contactPerson: 'Dr. Rajesh Kumar',
    email: 'rajesh.kumar@pes.edu',
    featured: true,
    status: 'Active',
    website: 'https://microsoft.com'
  },
  {
    id: '2',
    name: 'Infosys',
    logo: '/partners/infosys.png',
    industry: 'IT Services',
    partnershipType: 'Industry Collaboration',
    since: '2018',
    collaborations: ['Campus Connect Program', 'Research Projects', 'Innovation Challenges', 'Skill Development'],
    impact: {
      students: 200,
      projects: 18,
      publications: 8,
      funding: '₹1.8 Cr'
    },
    description: 'Comprehensive collaboration covering education, research, and innovation in emerging technologies.',
    contactPerson: 'Prof. Anita Sharma',
    email: 'anita.sharma@pes.edu',
    featured: true,
    status: 'Active',
    website: 'https://infosys.com'
  },
  {
    id: '3',
    name: 'Bosch',
    logo: '/partners/bosch.png',
    industry: 'Automotive & IoT',
    partnershipType: 'Research Partnership',
    since: '2020',
    collaborations: ['IoT Research', 'Automotive Innovation', 'Industry 4.0 Projects', 'Internship Programs'],
    impact: {
      students: 80,
      projects: 15,
      publications: 10,
      funding: '₹3.2 Cr'
    },
    description: 'Focus on IoT, automotive technologies, and Industry 4.0 solutions for smart manufacturing.',
    contactPerson: 'Dr. Vikram Patel',
    email: 'vikram.patel@pes.edu',
    featured: false,
    status: 'Active',
    website: 'https://bosch.com'
  },
  {
    id: '4',
    name: 'Wipro',
    logo: '/partners/wipro.png',
    industry: 'IT Services',
    partnershipType: 'Talent Partnership',
    since: '2017',
    collaborations: ['Talent Acquisition', 'Skill Development', 'Innovation Labs', 'Research Funding'],
    impact: {
      students: 180,
      projects: 22,
      publications: 6,
      funding: '₹1.5 Cr'
    },
    description: 'Long-term partnership for talent development and innovation in digital technologies.',
    contactPerson: 'Prof. Meera Nair',
    email: 'meera.nair@pes.edu',
    featured: false,
    status: 'Active',
    website: 'https://wipro.com'
  },
  {
    id: '5',
    name: 'Amazon Web Services',
    logo: '/partners/aws.png',
    industry: 'Cloud Computing',
    partnershipType: 'Technology Partnership',
    since: '2021',
    collaborations: ['Cloud Research', 'AWS Academy', 'Startup Support', 'Faculty Training'],
    impact: {
      students: 120,
      projects: 20,
      publications: 5,
      funding: '₹2.0 Cr'
    },
    description: 'Partnership focused on cloud computing education, research, and startup ecosystem development.',
    contactPerson: 'Dr. Suresh Reddy',
    email: 'suresh.reddy@pes.edu',
    featured: false,
    status: 'Active',
    website: 'https://aws.amazon.com'
  },
  {
    id: '6',
    name: 'Siemens',
    logo: '/partners/siemens.png',
    industry: 'Industrial Automation',
    partnershipType: 'Innovation Partnership',
    since: '2019',
    collaborations: ['Digital Factory', 'Automation Research', 'Student Projects', 'Technology Transfer'],
    impact: {
      students: 90,
      projects: 12,
      publications: 8,
      funding: '₹2.8 Cr'
    },
    description: 'Collaboration on industrial automation, digitalization, and smart manufacturing solutions.',
    contactPerson: 'Prof. Arun Kumar',
    email: 'arun.kumar@pes.edu',
    featured: false,
    status: 'Active',
    website: 'https://siemens.com'
  }
];

const successStories = [
  {
    id: '1',
    title: 'AI-Powered Healthcare Solution',
    partner: 'Microsoft',
    duration: '18 months',
    outcome: 'Patent filed, startup launched',
    impact: 'Serving 10,000+ patients',
    description: 'Developed an AI-powered diagnostic tool in collaboration with Microsoft Research. The solution uses machine learning to detect early-stage diseases from medical imaging.',
    team: ['Dr. Priya Sharma', '5 PhD students', '10 UG students'],
    funding: '₹1.2 Cr',
    publications: 3,
    image: '/success/ai-healthcare.jpg'
  },
  {
    id: '2',
    title: 'Smart Manufacturing Platform',
    partner: 'Bosch',
    duration: '24 months',
    outcome: 'Technology commercialized',
    impact: '15% efficiency improvement',
    description: 'Created an IoT-based smart manufacturing platform that optimizes production processes and reduces waste in automotive manufacturing.',
    team: ['Prof. Vikram Patel', '3 PhD students', '8 UG students'],
    funding: '₹2.5 Cr',
    publications: 5,
    image: '/success/smart-manufacturing.jpg'
  },
  {
    id: '3',
    title: 'Fintech Innovation Lab',
    partner: 'Infosys',
    duration: '12 months',
    outcome: '3 startups incubated',
    impact: '₹5 Cr in follow-up funding',
    description: 'Established a fintech innovation lab that has incubated multiple startups focusing on digital payments and blockchain solutions.',
    team: ['Dr. Anita Sharma', '2 PhD students', '15 UG students'],
    funding: '₹80 L',
    publications: 2,
    image: '/success/fintech-lab.jpg'
  }
];

const collaborationStats = {
  totalPartners: 45,
  activeProjects: 78,
  studentsImpacted: 1200,
  totalFunding: '₹25 Cr',
  publications: 85,
  patents: 12
};

const industries = ['All', 'Technology', 'IT Services', 'Automotive & IoT', 'Cloud Computing', 'Industrial Automation', 'Healthcare', 'Finance'];
const partnershipTypes = ['All', 'Strategic Alliance', 'Industry Collaboration', 'Research Partnership', 'Talent Partnership', 'Technology Partnership', 'Innovation Partnership'];
const statuses = ['All', 'Active', 'Pending', 'Completed'];

// Component Sections
function PartnersSection({ partners, searchTerm, setSearchTerm, selectedIndustry, setSelectedIndustry, selectedType, setSelectedType, selectedStatus, setSelectedStatus }) {
  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search partners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {partnershipTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-600" />
                  </div>
                  {partner.featured && (
                    <Badge className="bg-yellow-100 text-yellow-800">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{partner.name}</CardTitle>
                <CardDescription>{partner.industry} • Since {partner.since}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Students Impacted:</span>
                    <span className="font-semibold">{partner.impact.students}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Projects:</span>
                    <span className="font-semibold">{partner.impact.projects}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Funding:</span>
                    <span className="font-semibold text-green-600">{partner.impact.funding}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {partner.collaborations.slice(0, 3).map((collab, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {collab}
                    </Badge>
                  ))}
                  {partner.collaborations.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{partner.collaborations.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Mail className="h-4 w-4 mr-1" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CollaborationTypesSection({ types }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {types.map((type, index) => {
        const IconComponent = type.icon;
        return (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  type.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  type.color === 'green' ? 'bg-green-100 text-green-600' :
                  type.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  type.color === 'red' ? 'bg-red-100 text-red-600' :
                  type.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <div className="font-semibold">{type.duration}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Commitment:</span>
                      <div className="font-semibold">{type.commitment}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.slice(0, 2).map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-600">• {example}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full mt-4">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

function SuccessStoriesSection({ stories }) {
  return (
    <div className="space-y-8">
      {stories.map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-48 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Award className="h-12 w-12 mx-auto mb-2" />
                    <div className="text-sm font-semibold">{story.outcome}</div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-800">{story.partner}</Badge>
                  <span className="text-sm text-gray-500">{story.duration}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{story.funding}</div>
                    <div className="text-xs text-gray-500">Funding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{story.publications}</div>
                    <div className="text-xs text-gray-500">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{story.team[1]}</div>
                    <div className="text-xs text-gray-500">PhD Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{story.team[2]}</div>
                    <div className="text-xs text-gray-500">UG Students</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <strong>Impact:</strong> {story.impact}
                  </div>
                  <Button size="sm">
                    Read More
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function ContactSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Collaboration Journey</h2>
        <p className="text-xl text-gray-600">
          Ready to partner with us? Choose your preferred collaboration model and let's create something amazing together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Get in Touch
            </CardTitle>
            <CardDescription>
              Reach out to our partnership team to discuss collaboration opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-3 text-gray-400" />
              <span>partnerships@pes.edu</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-3 text-gray-400" />
              <span>+91 80 2718 1000</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-3 text-gray-400" />
              <span>PES University, Bangalore</span>
            </div>
            <Button className="w-full mt-4">
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule a Meeting
            </CardTitle>
            <CardDescription>
              Book a consultation call to explore partnership opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                <span>30-minute consultation</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-gray-400" />
                <span>Meet with our partnership team</span>
              </div>
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 mr-2 text-gray-400" />
                <span>Discuss your collaboration goals</span>
              </div>
            </div>
            <Button className="w-full mt-4">
              <Calendar className="h-4 w-4 mr-2" />
              Book Meeting
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Innovation Access</h4>
              <p className="text-sm text-gray-600">Get early access to cutting-edge research and breakthrough innovations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Talent Pipeline</h4>
              <p className="text-sm text-gray-600">Direct access to top-tier students and researchers for recruitment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Rocket className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Market Advantage</h4>
              <p className="text-sm text-gray-600">Stay ahead of competition with collaborative research and development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CollaborationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [activeTab, setActiveTab] = useState('partners');

  const filteredPartners = industryPartners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || partner.industry === selectedIndustry;
    const matchesType = selectedType === 'All' || partner.partnershipType === selectedType;
    const matchesStatus = selectedStatus === 'All' || partner.status === selectedStatus;
    return matchesSearch && matchesIndustry && matchesType && matchesStatus;
  });

  const collaborationModels = [
    {
      id: 'sponsorship',
      title: 'Event Sponsorship & Brand Visibility',
      icon: Star,
      description: 'Gain brand visibility through strategic event sponsorships and student engagement',
      features: [
        'Brand visibility at major events',
        'Direct student engagement opportunities',
        'Networking with faculty and industry',
        'Talent scouting and recruitment'
      ],
      events: [
        { name: 'CIE Ignite (Annual Flagship)', audience: '1000+ attendees', frequency: 'Annual' },
        { name: 'Industry Connect Series', audience: '200-300 per event', frequency: 'Quarterly' },
        { name: 'Innovation Showcase', audience: '500+ attendees', frequency: 'Bi-annual' },
        { name: 'Startup Demo Days', audience: '150-200 per event', frequency: 'Monthly' }
      ],
      investment: '₹50K - ₹5L per event',
      roi: '10x brand reach & lead generation'
    },
    {
      id: 'mentorship',
      title: 'Industry Mentorship Program',
      icon: Users,
      description: 'Guide students through one-on-one mentorship and expert sessions',
      features: [
        'Structured mentorship program',
        'AMA sessions with students',
        'Project guidance and feedback',
        'Talent identification opportunities'
      ],
      programs: [
        { name: 'CIE Industry IM Program', commitment: '2-3 hours/month', students: '10-15 per mentor' },
        { name: 'AMA Sessions', commitment: '1 hour/quarter', audience: '50-100 students' },
        { name: 'CIE Ignite Mentorship', commitment: '4-6 hours/event', teams: '5-8 teams' },
        { name: 'Capstone Project Guidance', commitment: '1 semester', projects: '2-3 projects' }
      ],
      investment: 'Time commitment only',
      roi: 'Direct access to top 10% talent'
    },
    {
      id: 'research',
      title: 'Research Partnerships',
      icon: Lightbulb,
      description: 'Collaborate on cutting-edge research and innovation projects',
      features: [
        'Joint research projects',
        'Access to university facilities',
        'Co-publication opportunities',
        'IP sharing agreements'
      ],
      areas: [
        { name: 'CRAIS (AI & Robotics)', focus: 'Machine Learning, Computer Vision', faculty: '8+ researchers' },
        { name: 'C-IoT (Internet of Things)', focus: 'Smart Systems, Edge Computing', faculty: '6+ researchers' },
        { name: 'CHIPS (Hardware)', focus: 'Semiconductor, VLSI Design', faculty: '10+ researchers' },
        { name: 'CCNCS (Quantum Computing)', focus: 'Quantum Algorithms, Cryptography', faculty: '5+ researchers' }
      ],
      investment: '₹2-10 lakhs per project',
      roi: 'Breakthrough innovations and patents'
    },
    {
      id: 'cpip',
      title: 'Capstone Project with Industry Partner (CPIP)',
      icon: Target,
      description: 'Students solve real industry challenges as their capstone projects',
      features: [
        'Real-world problem solving',
        'Dedicated student teams',
        'Faculty supervision',
        'Deliverable solutions'
      ],
      process: [
        { step: 'Problem Definition', duration: '2 weeks', description: 'Industry partner defines challenge' },
        { step: 'Team Formation', duration: '1 week', description: 'Students form interdisciplinary teams' },
        { step: 'Solution Development', duration: '12 weeks', description: 'Teams develop and test solutions' },
        { step: 'Final Presentation', duration: '1 week', description: 'Teams present solutions to industry' }
      ],
      investment: '₹1-3 lakhs per project',
      roi: 'Ready-to-implement solutions'
    },
    {
      id: 'coe',
      title: 'Centers of Excellence Collaboration',
      icon: Building2,
      description: 'Partner with specialized research centers for deep technical collaboration',
      features: [
        'Access to specialized labs',
        'Joint research initiatives',
        'Student exchange programs',
        'Technology transfer opportunities'
      ],
      centers: [
        { 
          name: 'CRAIS', 
          specialization: 'AI & Robotics', 
          facilities: '10+ labs with GPU clusters',
          projects: '25+ active research projects'
        },
        { 
          name: 'C-IoT', 
          specialization: 'Internet of Things', 
          facilities: 'IoT testbeds and sensor networks',
          projects: '15+ smart city initiatives'
        },
        { 
          name: 'CHIPS', 
          specialization: 'Hardware & Semiconductors', 
          facilities: 'Clean room and fabrication lab',
          projects: '20+ chip design projects'
        }
      ],
      investment: '₹5-25 lakhs annually',
      roi: 'Access to cutting-edge research'
    }
  ];

  const partnershipTiers = [
    {
      id: 'platinum',
      name: 'Platinum Partner',
      price: '₹10+ Lakhs',
      color: 'from-purple-600 to-indigo-600',
      features: [
        'All collaboration models included',
        'Dedicated relationship manager',
        'Quarterly business reviews',
        'Custom partnership agreements',
        'Priority access to top talent',
        'Joint marketing opportunities',
        'Executive advisory board seat'
      ],
      benefits: [
        'Brand visibility at all CIE events',
        'Access to all research centers',
        'Unlimited mentorship opportunities',
        'Custom training programs',
        'First access to breakthrough innovations'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Partner',
      price: '₹5-10 Lakhs',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Choose 3 collaboration models',
        'Dedicated partnership coordinator',
        'Bi-annual reviews',
        'Standard partnership agreements',
        'Access to talent pipeline',
        'Co-branded event opportunities'
      ],
      benefits: [
        'Brand visibility at major events',
        'Access to 2 research centers',
        'Structured mentorship programs',
        'Quarterly talent showcases'
      ]
    },
    {
      id: 'silver',
      name: 'Silver Partner',
      price: '₹2-5 Lakhs',
      color: 'from-gray-400 to-gray-600',
      features: [
        'Choose 2 collaboration models',
        'Annual partnership reviews',
        'Standard agreements',
        'Access to student talent',
        'Event participation opportunities'
      ],
      benefits: [
        'Brand visibility at selected events',
        'Access to 1 research center',
        'Mentorship opportunities',
        'Annual talent showcase'
      ]
    }
  ];

  const [selectedTier, setSelectedTier] = useState('platinum');
  const [activeROI, setActiveROI] = useState(false);
    {
      id: 'mentorship',
      title: 'Industry Mentorship Program',
      icon: Users,
      description: 'Guide students through one-on-one mentorship and expert sessions',
      features: [
        'Structured mentorship program',
        'AMA sessions with students',
        'Project guidance and feedback',
        'Talent identification opportunities'
      ],
      programs: [
        { name: 'CIE Industry IM Program', commitment: '2-3 hours/month', students: '10-15 per mentor' },
        { name: 'AMA Sessions', commitment: '1 hour/quarter', audience: '50-100 students' },
        { name: 'CIE Ignite Mentorship', commitment: '4-6 hours/event', teams: '5-8 teams' },
        { name: 'Capstone Project Guidance', commitment: '1 semester', projects: '2-3 projects' }
      ],
      investment: 'Time commitment only',
      roi: 'Direct access to top 10% talent'
    },
    {
      id: 'research',
      title: 'Research Partnerships',
      icon: Lightbulb,
      description: 'Collaborate on cutting-edge research and innovation projects',
      features: [
        'Joint research projects',
        'Access to university facilities',
        'Co-publication opportunities',
        'IP sharing agreements'
      ],
      areas: [
        { name: 'CRAIS (AI & Robotics)', focus: 'Machine Learning, Computer Vision', faculty: '8+ researchers' },
        { name: 'C-IoT (Internet of Things)', focus: 'Smart Systems, Edge Computing', faculty: '6+ researchers' },
        { name: 'CHIPS (Hardware)', focus: 'Semiconductor, VLSI Design', faculty: '10+ researchers' },
        { name: 'CCNCS (Quantum Computing)', focus: 'Quantum Algorithms, Cryptography', faculty: '5+ researchers' }
      ],
      investment: '₹2-10 lakhs per project',
      roi: 'Breakthrough innovations and patents'
    },
    {
      id: 'cpip',
      title: 'Capstone Project with Industry Partner (CPIP)',
      icon: Target,
      description: 'Students solve real industry challenges as their capstone projects',
      features: [
        'Real-world problem solving',
        'Dedicated student teams',
        'Faculty supervision',
        'Deliverable solutions'
      ],
      process: [
        { step: 'Problem Definition', duration: '2 weeks', description: 'Industry partner defines challenge' },
        { step: 'Team Formation', duration: '1 week', description: 'Students form interdisciplinary teams' },
        { step: 'Solution Development', duration: '12 weeks', description: 'Teams develop and test solutions' },
        { step: 'Final Presentation', duration: '1 week', description: 'Teams present solutions to industry' }
      ],
      investment: '₹1-3 lakhs per project',
      roi: 'Ready-to-implement solutions'
    },
    {
      id: 'coe',
      title: 'Centers of Excellence Collaboration',
      icon: Building2,
      description: 'Partner with specialized research centers for deep technical collaboration',
      features: [
        'Access to specialized labs',
        'Joint research initiatives',
        'Student exchange programs',
        'Technology transfer opportunities'
      ],
      centers: [
        { 
          name: 'CRAIS', 
          specialization: 'AI & Robotics', 
          facilities: '10+ labs with GPU clusters',
          projects: '25+ active research projects'
        },
        { 
          name: 'C-IoT', 
          specialization: 'Internet of Things', 
          facilities: 'IoT testbeds and sensor networks',
          projects: '15+ smart city initiatives'
        },
        { 
          name: 'CHIPS', 
          specialization: 'Hardware & Semiconductors', 
          facilities: 'Clean room and fabrication lab',
          projects: '20+ chip design projects'
        }
      ],
      investment: '₹5-25 lakhs annually',
      roi: 'Access to cutting-edge research'
    }
  ];

  const partnershipTiers = [
    {
      id: 'platinum',
      name: 'Platinum Partner',
      price: '₹10+ Lakhs',
      color: 'from-purple-600 to-indigo-600',
      features: [
        'All collaboration models included',
        'Dedicated relationship manager',
        'Quarterly business reviews',
        'Custom partnership agreements',
        'Priority access to top talent',
        'Joint marketing opportunities',
        'Executive advisory board seat'
      ],
      benefits: [
        'Brand visibility at all CIE events',
        'Access to all research centers',
        'Unlimited mentorship opportunities',
        'Custom training programs',
        'First access to breakthrough innovations'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Partner',
      price: '₹5-10 Lakhs',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Choose 3 collaboration models',
        'Dedicated partnership coordinator',
        'Bi-annual reviews',
        'Standard partnership agreements',
        'Access to talent pipeline',
        'Co-branded event opportunities'
      ],
      benefits: [
        'Brand visibility at major events',
        'Access to 2 research centers',
        'Structured mentorship programs',
        'Quarterly talent showcases'
      ]
    },
    {
      id: 'silver',
      name: 'Silver Partner',
      price: '₹2-5 Lakhs',
      color: 'from-gray-400 to-gray-600',
      features: [
        'Choose 2 collaboration models',
        'Annual partnership reviews',
        'Standard agreements',
        'Access to student talent',
        'Event participation opportunities'
      ],
      benefits: [
        'Brand visibility at selected events',
        'Access to 1 research center',
        'Mentorship opportunities',
        'Annual talent showcase'
      ]
    }
  ];

  const roiMetrics = {
    sponsorship: {
      investment: 100000,
      brandReach: 5000,
      leadGeneration: 150,
      talentPipeline: 25,
      mediaValue: 300000
    },
    mentorship: {
      timeInvestment: 24, // hours per year
      studentsImpacted: 50,
      talentIdentified: 10,
      hiringCostSaved: 500000
    },
    research: {
      investment: 500000,
      patentsGenerated: 3,
      publicationsCoAuthored: 8,
      innovationValue: 2000000
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-100 border border-purple-400/30">
                <Handshake className="w-4 h-4 mr-2" />
                Collaboration Opportunities
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic Collaboration
              <span className="block text-purple-200">Models</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Discover flexible partnership models designed to maximize value for your organization while driving innovation in education and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Collaboration <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Models</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of collaboration models, each designed to deliver specific outcomes and value.
            </p>
          </motion.div>

          <div className="space-y-12">
        
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partnership <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">Tiers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership level that best fits your organization's goals and investment capacity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                  selectedTier === tier.id 
                    ? 'border-purple-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-purple-300 hover:shadow-lg'
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.id === 'platinum' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">{tier.price}</div>
                
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className={`w-full py-3 rounded-xl font-semibold ${
                  selectedTier === tier.id
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'border border-purple-600 text-purple-600 hover:bg-purple-50 bg-white'
                }`}>
                  Choose {tier.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partnership <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures quick partnership setup and immediate value delivery.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            
            {[
              { week: 'Week 1', title: 'Initial Discussion', description: 'Partnership goals and model selection' },
              { week: 'Week 2', title: 'Proposal & Agreement', description: 'Custom partnership proposal and contract' },
              { week: 'Week 3', title: 'Onboarding', description: 'Team introductions and process setup' },
              { week: 'Week 4', title: 'Launch', description: 'Partnership activities begin' }
            ].map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                    <div className="text-blue-600 font-semibold mb-2">{phase.week}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Let's create a partnership that drives innovation, develops talent, and delivers measurable value for your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <Handshake className="w-5 h-5 mr-2" />
                Start Partnership
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <FileText className="w-5 h-5 mr-2" />
                Download Partnership Guide
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}