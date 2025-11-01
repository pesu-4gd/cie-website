'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  DollarSign, 
  Building2, 
  Users, 
  Briefcase, 
  Filter, 
  Star, 
  ExternalLink, 
  Mail, 
  Phone, 
  Globe, 
  ChevronRight, 
  BookmarkPlus, 
  Share2, 
  TrendingUp, 
  Award, 
  Target, 
  Zap,
  CheckCircle,
  ArrowRight,
  FileText,
  Upload,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';

// Job Data
const jobListings = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp Solutions',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹12-18 LPA',
    postedDate: '2024-01-15',
    deadline: '2024-02-15',
    skills: ['React', 'Node.js', 'Python', 'AWS'],
    description: 'Join our dynamic team to build scalable web applications using modern technologies.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in full-stack development',
      'Proficiency in React, Node.js, and cloud platforms',
      'Strong problem-solving and communication skills'
    ],
    benefits: ['Health Insurance', 'Flexible Hours', 'Remote Work', 'Learning Budget'],
    featured: true,
    urgent: false,
    companyLogo: '/api/placeholder/60/60',
    applicants: 45,
    views: 234
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹10-15 LPA',
    postedDate: '2024-01-12',
    deadline: '2024-02-10',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    description: 'Analyze complex datasets and build predictive models to drive business insights.',
    requirements: [
      'Master\'s degree in Data Science, Statistics, or related field',
      '2+ years of experience in data analysis and machine learning',
      'Proficiency in Python, SQL, and ML frameworks',
      'Experience with data visualization tools'
    ],
    benefits: ['Health Insurance', 'Stock Options', 'Training Programs', 'Gym Membership'],
    featured: false,
    urgent: true,
    companyLogo: '/api/placeholder/60/60',
    applicants: 67,
    views: 189
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '4-6 years',
    salary: '₹15-22 LPA',
    postedDate: '2024-01-10',
    deadline: '2024-02-08',
    skills: ['Product Strategy', 'Agile', 'Analytics', 'Leadership'],
    description: 'Lead product development from conception to launch, working with cross-functional teams.',
    requirements: [
      'Bachelor\'s degree in Engineering, Business, or related field',
      '4+ years of product management experience',
      'Strong analytical and leadership skills',
      'Experience with agile development methodologies'
    ],
    benefits: ['Health Insurance', 'Performance Bonus', 'Flexible Hours', 'Career Growth'],
    featured: true,
    urgent: false,
    companyLogo: '/api/placeholder/60/60',
    applicants: 32,
    views: 156
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'CloudFirst Systems',
    location: 'Pune, India',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹8-14 LPA',
    postedDate: '2024-01-08',
    deadline: '2024-02-05',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    description: 'Manage cloud infrastructure and automate deployment processes for scalable applications.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '2+ years of experience in DevOps or system administration',
      'Proficiency in containerization and orchestration tools',
      'Experience with cloud platforms and automation'
    ],
    benefits: ['Health Insurance', 'Remote Work', 'Certification Support', 'Team Outings'],
    featured: false,
    urgent: false,
    companyLogo: '/api/placeholder/60/60',
    applicants: 28,
    views: 98
  },
  {
    id: 5,
    title: 'UX/UI Designer',
    company: 'DesignStudio',
    location: 'Chennai, India',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '₹6-10 LPA',
    postedDate: '2024-01-05',
    deadline: '2024-02-02',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    description: 'Create intuitive and visually appealing user interfaces for web and mobile applications.',
    requirements: [
      'Bachelor\'s degree in Design, HCI, or related field',
      '1+ years of experience in UX/UI design',
      'Proficiency in design tools like Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating design thinking'
    ],
    benefits: ['Health Insurance', 'Creative Freedom', 'Design Tools Budget', 'Flexible Hours'],
    featured: false,
    urgent: true,
    companyLogo: '/api/placeholder/60/60',
    applicants: 52,
    views: 167
  },
  {
    id: 6,
    title: 'Cybersecurity Analyst',
    company: 'SecureNet Solutions',
    location: 'Delhi, India',
    type: 'Full-time',
    experience: '2-5 years',
    salary: '₹9-16 LPA',
    postedDate: '2024-01-03',
    deadline: '2024-01-30',
    skills: ['Network Security', 'Penetration Testing', 'SIEM', 'Incident Response'],
    description: 'Monitor and protect organizational systems from cyber threats and security breaches.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity, IT, or related field',
      '2+ years of experience in cybersecurity',
      'Knowledge of security frameworks and compliance standards',
      'Relevant certifications (CISSP, CEH, etc.) preferred'
    ],
    benefits: ['Health Insurance', 'Certification Support', 'Security Clearance', 'Overtime Pay'],
    featured: true,
    urgent: true,
    companyLogo: '/api/placeholder/60/60',
    applicants: 19,
    views: 87
  }
];

const jobStats = {
  totalJobs: 156,
  activeEmployers: 45,
  placementsThisYear: 89,
  averageSalary: '₹12.5 LPA'
};

const topEmployers = [
  { name: 'TechCorp Solutions', jobs: 12, logo: '/api/placeholder/40/40' },
  { name: 'Analytics Pro', jobs: 8, logo: '/api/placeholder/40/40' },
  { name: 'InnovateTech', jobs: 6, logo: '/api/placeholder/40/40' },
  { name: 'CloudFirst Systems', jobs: 5, logo: '/api/placeholder/40/40' },
  { name: 'DesignStudio', jobs: 4, logo: '/api/placeholder/40/40' }
];

const jobCategories = [
  { name: 'Software Development', count: 45, icon: '💻' },
  { name: 'Data Science & Analytics', count: 23, icon: '📊' },
  { name: 'Product Management', count: 18, icon: '🚀' },
  { name: 'DevOps & Cloud', count: 15, icon: '☁️' },
  { name: 'Design & UX', count: 12, icon: '🎨' },
  { name: 'Cybersecurity', count: 10, icon: '🔒' },
  { name: 'AI & Machine Learning', count: 8, icon: '🤖' },
  { name: 'Mobile Development', count: 7, icon: '📱' }
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedSalary, setSelectedSalary] = useState('All');
  const [activeTab, setActiveTab] = useState('browse');
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const locations = ['All', 'Bangalore', 'Mumbai', 'Hyderabad', 'Pune', 'Chennai', 'Delhi'];
  const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];
  const experienceLevels = ['All', '0-1 years', '1-3 years', '2-4 years', '3-5 years', '4-6 years', '5+ years'];
  const salaryRanges = ['All', '₹0-5 LPA', '₹5-10 LPA', '₹10-15 LPA', '₹15-20 LPA', '₹20+ LPA'];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = selectedLocation === 'All' || job.location.includes(selectedLocation);
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesExperience = selectedExperience === 'All' || job.experience.includes(selectedExperience.split(' ')[0]);
    
    return matchesSearch && matchesLocation && matchesType && matchesExperience;
  });

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Hex background behind content */}
        <InteractiveHexagonBackground
          primaryColor={SECTION_COLORS.industry.hero.background}
          accentColor={SECTION_COLORS.industry.hero.hexagonAccent}
          hexagonSize={72}
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-600/10 to-purple-600/10 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Briefcase className="h-4 w-4 mr-1" />
              Industry Job Portal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Career</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with top employers and discover exciting career opportunities. 
              Access exclusive job postings from our industry partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
              >
                <Search className="h-5 w-5 mr-2" />
                Browse Jobs
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <Upload className="h-5 w-5 mr-2" />
                Upload Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{jobStats.totalJobs}</div>
              <div className="text-gray-600">Active Jobs</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{jobStats.activeEmployers}</div>
              <div className="text-gray-600">Partner Companies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{jobStats.placementsThisYear}</div>
              <div className="text-gray-600">Placements This Year</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{jobStats.averageSalary}</div>
              <div className="text-gray-600">Average Salary</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="browse" className="text-lg py-3">
                <Search className="h-5 w-5 mr-2" />
                Browse Jobs
              </TabsTrigger>
              <TabsTrigger value="categories" className="text-lg py-3">
                <Target className="h-5 w-5 mr-2" />
                Categories
              </TabsTrigger>
              <TabsTrigger value="employers" className="text-lg py-3">
                <Building2 className="h-5 w-5 mr-2" />
                Top Employers
              </TabsTrigger>
              <TabsTrigger value="post" className="text-lg py-3">
                <Plus className="h-5 w-5 mr-2" />
                Post Job
              </TabsTrigger>
            </TabsList>

            <TabsContent value="browse">
              <BrowseJobsSection 
                jobs={filteredJobs}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                selectedExperience={selectedExperience}
                setSelectedExperience={setSelectedExperience}
                locations={locations}
                jobTypes={jobTypes}
                experienceLevels={experienceLevels}
                savedJobs={savedJobs}
                toggleSaveJob={toggleSaveJob}
              />
            </TabsContent>

            <TabsContent value="categories">
              <CategoriesSection categories={jobCategories} />
            </TabsContent>

            <TabsContent value="employers">
              <EmployersSection employers={topEmployers} />
            </TabsContent>

            <TabsContent value="post">
              <PostJobSection />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Launch Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who have found their dream jobs through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white px-6 py-3 text-base font-semibold rounded-lg"
              >
                <FileText className="h-5 w-5 mr-2" />
                Create Profile
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-6 py-3 text-base font-semibold rounded-lg"
              >
                <Mail className="h-5 w-5 mr-2" />
                Job Alerts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Type definitions
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  postedDate: string;
  deadline: string;
  skills: string[];
  description: string;
  requirements: string[];
  benefits: string[];
  featured: boolean;
  urgent: boolean;
  companyLogo: string;
  applicants: number;
  views: number;
  [key: string]: unknown;
}

interface JobCategory {
  name: string;
  count: number;
  icon: string;
}

interface Employer {
  name: string;
  jobs: number;
  logo: string;
}

// Component Sections
function BrowseJobsSection({ 
  jobs, 
  searchTerm, 
  setSearchTerm, 
  selectedLocation, 
  setSelectedLocation,
  selectedType,
  setSelectedType,
  selectedExperience,
  setSelectedExperience,
  locations,
  jobTypes,
  experienceLevels,
  savedJobs,
  toggleSaveJob
}: {
  jobs: Job[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedExperience: string;
  setSelectedExperience: (experience: string) => void;
  locations: string[];
  jobTypes: string[];
  experienceLevels: string[];
  savedJobs: number[];
  toggleSaveJob: (jobId: number) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search jobs, companies, skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by location"
          >
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by job type"
          >
            {jobTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by experience level"
          >
            {experienceLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
        <div className="text-sm text-gray-600">
          Showing {jobs.length} jobs
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`hover:shadow-lg transition-shadow duration-300 ${
              job.featured ? 'border-blue-500 bg-blue-50/50' : ''
            }`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        {job.featured && (
                          <Badge className="bg-blue-100 text-blue-800">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        {job.urgent && (
                          <Badge className="bg-red-100 text-red-800">
                            <Zap className="h-3 w-3 mr-1" />
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-lg font-semibold text-gray-900">
                        {job.company}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {job.experience}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleSaveJob(job.id)}
                      className={savedJobs.includes(job.id) ? 'bg-blue-50 border-blue-500' : ''}
                    >
                      <BookmarkPlus className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {job.applicants} applicants
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <a href="https://forms.gle/b8uLuLievLw7V6uv8" target="_blank" rel="noopener noreferrer">
                        Apply Now
                      </a>
                    </Button>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CategoriesSection({ categories }: { categories: JobCategory[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">{category.icon}</div>
              <CardTitle className="text-lg">{category.name}</CardTitle>
              <CardDescription>{category.count} open positions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Explore Jobs
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function EmployersSection({ employers }: { employers: Employer[] }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Hiring Partners</h2>
        <p className="text-xl text-gray-600">
          Connect with leading companies actively recruiting from our talent pool
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employers.map((employer, index) => (
          <motion.div
            key={employer.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{employer.name}</CardTitle>
                    <CardDescription>{employer.jobs} active jobs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Open Positions:</span>
                    <span className="font-semibold">{employer.jobs}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Industry:</span>
                    <span className="font-semibold">Technology</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-semibold">Multiple Cities</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="flex-1">
                    View Jobs
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Globe className="h-4 w-4" />
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

function PostJobSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Post a Job Opening</h2>
        <p className="text-xl text-gray-600">
          Connect with talented students and recent graduates from our programs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building2 className="h-5 w-5 mr-2" />
              For Employers
            </CardTitle>
            <CardDescription>
              Post job openings and connect with our talent pool
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                <span>Access to 1000+ qualified candidates</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                <span>Featured job posting options</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                <span>Direct candidate communication</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                <span>Analytics and reporting</span>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="text-sm text-gray-600 mb-2">Pricing:</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">₹5,000</div>
              <div className="text-sm text-gray-500">per job posting (30 days)</div>
            </div>
            
            <Button className="w-full mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Post Job
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Partnership Program
            </CardTitle>
            <CardDescription>
              Become a preferred hiring partner with exclusive benefits
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                <span>Unlimited job postings</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                <span>Priority candidate access</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                <span>Campus recruitment events</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                <span>Dedicated account manager</span>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="text-sm text-gray-600 mb-2">Annual Partnership:</div>
              <div className="text-2xl font-bold text-purple-600 mb-1">₹50,000</div>
              <div className="text-sm text-gray-500">per year + benefits</div>
            </div>
            
            <Button className="w-full mt-4" variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Recruit From CIE?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Top Talent</h4>
              <p className="text-sm text-gray-600">Access to the brightest minds in engineering and technology</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Industry Ready</h4>
              <p className="text-sm text-gray-600">Students trained with real-world projects and industry exposure</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Diverse Skills</h4>
              <p className="text-sm text-gray-600">Wide range of specializations from AI to cybersecurity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}