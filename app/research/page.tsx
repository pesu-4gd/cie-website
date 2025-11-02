'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import {
  Search,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Download,
  ExternalLink,
  Calendar,
  MapPin,
  User,
  Building,
  Lightbulb,
  Target,
  Globe,
  FileText,
  Star,
  ChevronRight
} from 'lucide-react';

const researchAreas = [
  {
    id: 1,
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Advanced AI research in deep learning, computer vision, and natural language processing',
    projects: 15,
    publications: 45,
    faculty: 8,
    color: 'bg-blue-100 text-blue-800',
    icon: '🤖'
  },
  {
    id: 2,
    title: 'Blockchain & Distributed Systems',
    description: 'Research in blockchain technology, cryptocurrency, and decentralized applications',
    projects: 12,
    publications: 28,
    faculty: 6,
    color: 'bg-purple-100 text-purple-800',
    icon: '⛓️'
  },
  {
    id: 3,
    title: 'IoT & Embedded Systems',
    description: 'Internet of Things, sensor networks, and embedded system design',
    projects: 18,
    publications: 32,
    faculty: 7,
    color: 'bg-green-100 text-green-800',
    icon: '📡'
  },
  {
    id: 4,
    title: 'Cybersecurity & Privacy',
    description: 'Information security, cryptography, and privacy-preserving technologies',
    projects: 10,
    publications: 22,
    faculty: 5,
    color: 'bg-red-100 text-red-800',
    icon: '🔒'
  },
  {
    id: 5,
    title: 'Data Science & Analytics',
    description: 'Big data processing, predictive analytics, and business intelligence',
    projects: 14,
    publications: 38,
    faculty: 9,
    color: 'bg-orange-100 text-orange-800',
    icon: '📊'
  },
  {
    id: 6,
    title: 'Sustainable Technology',
    description: 'Green computing, renewable energy systems, and environmental monitoring',
    projects: 8,
    publications: 18,
    faculty: 4,
    color: 'bg-emerald-100 text-emerald-800',
    icon: '🌱'
  }
];

const publications = [
  {
    id: 1,
    title: 'Deep Learning Approaches for Real-time Object Detection in Autonomous Vehicles',
    authors: ['Dr. Priya Sharma', 'Dr. Rajesh Kumar', 'Ms. Anita Patel'],
    journal: 'IEEE Transactions on Intelligent Transportation Systems',
    year: 2024,
    citations: 45,
    type: 'Journal',
    area: 'AI & ML',
    doi: '10.1109/TITS.2024.1234567',
    abstract: 'This paper presents novel deep learning architectures for real-time object detection in autonomous vehicle systems...'
  },
  {
    id: 2,
    title: 'Blockchain-based Supply Chain Management: A Comprehensive Framework',
    authors: ['Dr. Vikram Singh', 'Prof. Meera Joshi'],
    journal: 'Journal of Business Research',
    year: 2024,
    citations: 32,
    type: 'Journal',
    area: 'Blockchain',
    doi: '10.1016/j.jbusres.2024.567890',
    abstract: 'We propose a comprehensive blockchain framework for supply chain transparency and traceability...'
  },
  {
    id: 3,
    title: 'Energy-Efficient IoT Sensor Networks for Smart City Applications',
    authors: ['Dr. Suresh Reddy', 'Dr. Kavitha Nair', 'Mr. Arjun Gupta'],
    journal: 'ACM Transactions on Sensor Networks',
    year: 2023,
    citations: 67,
    type: 'Journal',
    area: 'IoT',
    doi: '10.1145/3567890.1234567',
    abstract: 'This research addresses energy efficiency challenges in large-scale IoT deployments for smart cities...'
  },
  {
    id: 4,
    title: 'Privacy-Preserving Machine Learning in Healthcare: A Survey',
    authors: ['Dr. Neha Agarwal', 'Prof. Ravi Krishnan'],
    journal: 'Nature Machine Intelligence',
    year: 2023,
    citations: 89,
    type: 'Review',
    area: 'Cybersecurity',
    doi: '10.1038/s42256-023-00567',
    abstract: 'A comprehensive survey of privacy-preserving techniques in healthcare machine learning applications...'
  }
];

const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    designation: 'Professor & Head of AI Research',
    specialization: 'Machine Learning, Computer Vision',
    experience: '15 years',
    publications: 85,
    hIndex: 28,
    email: 'priya.sharma@pes.edu',
    image: '/api/placeholder/150/150',
    researchInterests: ['Deep Learning', 'Computer Vision', 'Autonomous Systems']
  },
  {
    id: 2,
    name: 'Dr. Vikram Singh',
    designation: 'Associate Professor',
    specialization: 'Blockchain Technology, Distributed Systems',
    experience: '12 years',
    publications: 62,
    hIndex: 22,
    email: 'vikram.singh@pes.edu',
    image: '/api/placeholder/150/150',
    researchInterests: ['Blockchain', 'Cryptocurrency', 'Decentralized Systems']
  },
  {
    id: 3,
    name: 'Dr. Suresh Reddy',
    designation: 'Professor',
    specialization: 'IoT, Embedded Systems',
    experience: '18 years',
    publications: 94,
    hIndex: 31,
    email: 'suresh.reddy@pes.edu',
    image: '/api/placeholder/150/150',
    researchInterests: ['Internet of Things', 'Sensor Networks', 'Edge Computing']
  },
  {
    id: 4,
    name: 'Dr. Neha Agarwal',
    designation: 'Assistant Professor',
    specialization: 'Cybersecurity, Privacy',
    experience: '8 years',
    publications: 43,
    hIndex: 18,
    email: 'neha.agarwal@pes.edu',
    image: '/api/placeholder/150/150',
    researchInterests: ['Information Security', 'Privacy-Preserving ML', 'Cryptography']
  }
];

const ongoingProjects = [
  {
    id: 1,
    title: 'Smart Traffic Management System using AI',
    pi: 'Dr. Priya Sharma',
    funding: '₹25 Lakhs',
    duration: '2023-2025',
    sponsor: 'Department of Science & Technology',
    status: 'Ongoing',
    progress: 65,
    description: 'Development of AI-powered traffic management system for Bangalore city'
  },
  {
    id: 2,
    title: 'Blockchain for Healthcare Data Security',
    pi: 'Dr. Vikram Singh',
    funding: '₹18 Lakhs',
    duration: '2024-2026',
    sponsor: 'ICMR',
    status: 'Ongoing',
    progress: 30,
    description: 'Secure healthcare data sharing using blockchain technology'
  },
  {
    id: 3,
    title: 'Energy-Efficient IoT for Agriculture',
    pi: 'Dr. Suresh Reddy',
    funding: '₹32 Lakhs',
    duration: '2023-2025',
    sponsor: 'ICAR',
    status: 'Ongoing',
    progress: 80,
    description: 'Smart agriculture monitoring using low-power IoT sensors'
  }
];

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesArea = selectedArea === 'all' || pub.area.toLowerCase().includes(selectedArea.toLowerCase());
    const matchesType = selectedType === 'all' || pub.type.toLowerCase() === selectedType.toLowerCase();
    return matchesSearch && matchesArea && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section (Inside CIE style) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B] text-white">
        <InteractiveHexagonBackground
          primaryColor={SECTION_COLORS.insideCie.hero.background}
          accentColor="#F43F5E"
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Research & Publications</h1>
            <p className="text-xl mb-8 text-white/90">
              Advancing knowledge through cutting-edge research in emerging technologies
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-white/80">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">75+</div>
                <div className="text-white/80">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">40+</div>
                <div className="text-white/80">Faculty Researchers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">₹5Cr+</div>
                <div className="text-white/80">Research Funding</div>
              </div>
            </div> */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-xs text-gray-300">Publications</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">75+</div>
                <div className="text-xs text-gray-300">Active Projects</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">40+</div>
                <div className="text-xs text-gray-300">Researchers</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">₹5Cr+</div>
                <div className="text-xs text-gray-300">Research Funding</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="areas" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="areas">Research Areas</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {/* Research Areas Tab */}
          <TabsContent value="areas" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Areas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our research spans multiple domains of technology and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{area.icon}</span>
                        <Badge className={area.color}>{area.title.split(' ')[0]}</Badge>
                      </div>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="font-semibold text-blue-600">{area.projects}</div>
                          <div className="text-xs text-gray-500">Projects</div>
                        </div>
                        <div>
                          <div className="font-semibold text-green-600">{area.publications}</div>
                          <div className="text-xs text-gray-500">Publications</div>
                        </div>
                        <div>
                          <div className="font-semibold text-purple-600">{area.faculty}</div>
                          <div className="text-xs text-gray-500">Faculty</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Publications Tab */}
          <TabsContent value="publications" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Publications</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our latest research publications and academic contributions
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search publications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                aria-label="Filter publications by area"
                title="Filter publications by area"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="all">All Areas</option>
                <option value="ai">AI & ML</option>
                <option value="blockchain">Blockchain</option>
                <option value="iot">IoT</option>
                <option value="cybersecurity">Cybersecurity</option>
              </select>
              <select
                aria-label="Filter publications by type"
                title="Filter publications by type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="all">All Types</option>
                <option value="journal">Journal</option>
                <option value="conference">Conference</option>
                <option value="review">Review</option>
              </select>
            </div>

            {/* Publications List */}
            <div className="space-y-6">
              {filteredPublications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{pub.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline">{pub.area}</Badge>
                            <Badge variant="outline">{pub.type}</Badge>
                            <Badge variant="outline">{pub.year}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            Authors: {pub.authors.join(', ')}
                          </p>
                          <p className="text-sm text-gray-600 mb-2">
                            Published in: <span className="font-medium">{pub.journal}</span>
                          </p>
                          <p className="text-sm text-gray-500">{pub.abstract}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                            <Star className="h-4 w-4" />
                            {pub.citations} citations
                          </div>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Faculty Tab */}
          <TabsContent value="faculty" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Faculty</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet our distinguished faculty members leading cutting-edge research
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyMembers.map((faculty, index) => (
                <motion.div
                  key={faculty.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <User className="h-12 w-12 text-gray-400" />
                      </div>
                      <CardTitle className="text-lg">{faculty.name}</CardTitle>
                      <CardDescription>{faculty.designation}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-gray-700">Specialization:</p>
                          <p className="text-sm text-gray-600">{faculty.specialization}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="font-semibold text-blue-600">{faculty.publications}</div>
                            <div className="text-xs text-gray-500">Publications</div>
                          </div>
                          <div>
                            <div className="font-semibold text-green-600">{faculty.hIndex}</div>
                            <div className="text-xs text-gray-500">H-Index</div>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Research Interests:</p>
                          <div className="flex flex-wrap gap-1">
                            {faculty.researchInterests.map((interest, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ongoing Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Current research projects funded by government and industry partners
              </p>
            </div>

            <div className="space-y-6">
              {ongoingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                          <CardDescription className="mb-3">{project.description}</CardDescription>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-gray-700">Principal Investigator:</p>
                              <p className="text-gray-600">{project.pi}</p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Funding:</p>
                              <p className="text-gray-600">{project.funding}</p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Duration:</p>
                              <p className="text-gray-600">{project.duration}</p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Sponsor:</p>
                              <p className="text-gray-600">{project.sponsor}</p>
                            </div>
                          </div>
                        </div>
                        <Badge className="ml-4">{project.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      {/* <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Collaborate with Us</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in research collaboration or funding opportunities? Get in touch with our research team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <FileText className="h-5 w-5 mr-2" />
              Research Proposals
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Building className="h-5 w-5 mr-2" />
              Industry Partnerships
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}