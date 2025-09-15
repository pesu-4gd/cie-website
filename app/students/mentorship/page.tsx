'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Users, 
  Star, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  MessageCircle,
  Calendar,
  Clock,
  Award,
  Target,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  User,
  Building2,
  Globe,
  Heart,
  CheckCircle,
  Search,
  Filter,
  Mail,
  Phone,
  Linkedin
} from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

// Type definitions
interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  expertise: string[];
  bio: string;
  education: string;
  achievements: string[];
  menteeCount: number;
  rating: number;
  responseTime: string;
  languages: string[];
  availability: string;
  image: string;
  featured: boolean;
  tags: string[];
}

const mentors = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    title: 'Senior Product Manager',
    company: 'Google',
    location: 'Bangalore, India',
    experience: '8+ years',
    expertise: ['Product Management', 'AI/ML', 'Strategy', 'Team Leadership'],
    bio: 'Experienced PM who has launched multiple AI-powered products at Google. Passionate about mentoring the next generation of product leaders.',
    education: 'MBA from IIM Bangalore, B.Tech from PES University',
    achievements: ['Led team of 15+ engineers', 'Launched 3 successful products', 'TEDx Speaker'],
    menteeCount: 12,
    rating: 4.9,
    responseTime: '< 24 hours',
    languages: ['English', 'Hindi', 'Kannada'],
    availability: 'Weekends',
    image: '/mentors/rajesh-sharma.jpg',
    featured: true,
    tags: ['product', 'tech', 'leadership', 'strategy']
  },
  {
    id: '2',
    name: 'Priya Nair',
    title: 'Founder & CEO',
    company: 'EcoTech Solutions',
    location: 'Mumbai, India',
    experience: '10+ years',
    expertise: ['Entrepreneurship', 'Sustainability', 'Fundraising', 'Business Development'],
    bio: 'Serial entrepreneur with 2 successful exits. Currently building sustainable technology solutions. Angel investor and startup advisor.',
    education: 'MS from Stanford, B.Tech from PES University',
    achievements: ['Raised $5M+ in funding', '2 successful exits', 'Forbes 30 Under 30'],
    menteeCount: 8,
    rating: 4.8,
    responseTime: '< 48 hours',
    languages: ['English', 'Hindi', 'Malayalam'],
    availability: 'Flexible',
    image: '/mentors/priya-nair.jpg',
    featured: true,
    tags: ['entrepreneurship', 'sustainability', 'fundraising', 'startup']
  },
  {
    id: '3',
    name: 'Arjun Patel',
    title: 'Principal Engineer',
    company: 'Microsoft',
    location: 'Seattle, USA',
    experience: '12+ years',
    expertise: ['Software Engineering', 'Cloud Computing', 'System Design', 'Technical Leadership'],
    bio: 'Principal Engineer at Microsoft Azure team. Expert in distributed systems and cloud architecture. Mentor for technical career growth.',
    education: 'MS from Carnegie Mellon, B.Tech from PES University',
    achievements: ['20+ patents filed', 'Microsoft Technical Fellow', 'Open source contributor'],
    menteeCount: 15,
    rating: 4.9,
    responseTime: '< 24 hours',
    languages: ['English', 'Hindi', 'Gujarati'],
    availability: 'Evenings IST',
    image: '/mentors/arjun-patel.jpg',
    featured: false,
    tags: ['engineering', 'cloud', 'technical', 'leadership']
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    title: 'VP Marketing',
    company: 'Flipkart',
    location: 'Bangalore, India',
    experience: '9+ years',
    expertise: ['Digital Marketing', 'Brand Strategy', 'Growth Hacking', 'E-commerce'],
    bio: 'Marketing leader who scaled Flipkart\'s brand presence across India. Expert in digital marketing strategies and brand building.',
    education: 'MBA from ISB, B.Tech from PES University',
    achievements: ['Grew brand awareness by 300%', 'Led 50+ campaigns', 'Marketing Leader of the Year'],
    menteeCount: 10,
    rating: 4.7,
    responseTime: '< 24 hours',
    languages: ['English', 'Hindi', 'Telugu'],
    availability: 'Weekends',
    image: '/mentors/sneha-reddy.jpg',
    featured: false,
    tags: ['marketing', 'branding', 'growth', 'ecommerce']
  },
  {
    id: '5',
    name: 'Vikram Singh',
    title: 'Investment Director',
    company: 'Sequoia Capital',
    location: 'Bangalore, India',
    experience: '7+ years',
    expertise: ['Venture Capital', 'Investment Strategy', 'Due Diligence', 'Portfolio Management'],
    bio: 'Investment professional at Sequoia Capital focusing on early-stage startups. Helps entrepreneurs with fundraising and business strategy.',
    education: 'MBA from Wharton, B.Tech from PES University',
    achievements: ['Invested in 25+ startups', '5 unicorn investments', 'Top 40 Under 40 VCs'],
    menteeCount: 6,
    rating: 4.8,
    responseTime: '< 48 hours',
    languages: ['English', 'Hindi', 'Punjabi'],
    availability: 'By appointment',
    image: '/mentors/vikram-singh.jpg',
    featured: false,
    tags: ['vc', 'investment', 'fundraising', 'strategy']
  },
  {
    id: '6',
    name: 'Ananya Krishnan',
    title: 'UX Design Lead',
    company: 'Adobe',
    location: 'San Francisco, USA',
    experience: '6+ years',
    expertise: ['UX Design', 'Design Thinking', 'User Research', 'Product Design'],
    bio: 'Design leader at Adobe Creative Cloud team. Passionate about creating user-centered design solutions and mentoring design talent.',
    education: 'MS in HCI from CMU, B.Des from PES University',
    achievements: ['Led design for 10M+ users', 'Design Excellence Award', 'Speaker at 15+ conferences'],
    menteeCount: 14,
    rating: 4.9,
    responseTime: '< 24 hours',
    languages: ['English', 'Hindi', 'Tamil'],
    availability: 'Evenings IST',
    image: '/mentors/ananya-krishnan.jpg',
    featured: false,
    tags: ['design', 'ux', 'research', 'creative']
  }
];

const mentorshipPrograms = [
  {
    id: '1',
    title: 'Industry Mentor Program',
    description: 'Get paired with industry professionals for career guidance and skill development',
    duration: '6 months',
    commitment: '2 hours/month',
    type: 'One-on-One',
    benefits: ['Career guidance', 'Industry insights', 'Networking opportunities', 'Skill development'],
    eligibility: 'All students',
    nextCohort: 'March 2024',
    icon: Briefcase,
    color: 'blue'
  },
  {
    id: '2',
    title: 'Entrepreneur Mentorship',
    description: 'Connect with successful entrepreneurs and startup founders for business guidance',
    duration: '4 months',
    commitment: '3 hours/month',
    type: 'One-on-One',
    benefits: ['Business strategy', 'Fundraising guidance', 'Market validation', 'Startup ecosystem'],
    eligibility: 'Students with startup ideas',
    nextCohort: 'April 2024',
    icon: Lightbulb,
    color: 'green'
  },
  {
    id: '3',
    title: 'Alumni Peer Mentoring',
    description: 'Learn from recent graduates who have successfully transitioned to industry',
    duration: '3 months',
    commitment: '1.5 hours/month',
    type: 'Group & Individual',
    benefits: ['Career transition tips', 'Interview preparation', 'Resume guidance', 'Company insights'],
    eligibility: 'Final year students',
    nextCohort: 'February 2024',
    icon: GraduationCap,
    color: 'purple'
  },
  {
    id: '4',
    title: 'Technical Mentorship',
    description: 'Get technical guidance from senior engineers and technology leaders',
    duration: '5 months',
    commitment: '2.5 hours/month',
    type: 'One-on-One',
    benefits: ['Technical skills', 'Code reviews', 'System design', 'Career progression'],
    eligibility: 'CS/IT students',
    nextCohort: 'March 2024',
    icon: Target,
    color: 'red'
  }
];

const successStories = [
  {
    id: '1',
    studentName: 'Rahul Kumar',
    studentBatch: '2023',
    mentorName: 'Rajesh Sharma',
    outcome: 'Landed PM role at Microsoft',
    story: 'Through 6 months of mentorship, I learned product strategy and got guidance on interview preparation. My mentor\'s insights were invaluable.',
    image: '/success/rahul-kumar.jpg'
  },
  {
    id: '2',
    studentName: 'Kavya Patel',
    studentBatch: '2022',
    mentorName: 'Priya Nair',
    outcome: 'Founded successful startup',
    story: 'My mentor helped me validate my business idea and guided me through the fundraising process. We raised $500K in seed funding.',
    image: '/success/kavya-patel.jpg'
  },
  {
    id: '3',
    studentName: 'Aditya Sharma',
    studentBatch: '2023',
    mentorName: 'Arjun Patel',
    outcome: 'Senior Engineer at Amazon',
    story: 'Technical mentorship helped me improve my system design skills and prepare for senior-level interviews at top tech companies.',
    image: '/success/aditya-sharma.jpg'
  }
];

const expertiseAreas = ['All', 'Product Management', 'Entrepreneurship', 'Software Engineering', 'Marketing', 'Design', 'Investment', 'Strategy'];
const locations = ['All', 'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'USA', 'Europe'];
const companies = ['All', 'Google', 'Microsoft', 'Amazon', 'Flipkart', 'Startup', 'Consulting'];

export default function MentorshipPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [activeTab, setActiveTab] = useState('mentors');

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesExpertise = selectedExpertise === 'All' || mentor.expertise.some(exp => exp.includes(selectedExpertise));
    const matchesLocation = selectedLocation === 'All' || mentor.location.includes(selectedLocation);
    const matchesCompany = selectedCompany === 'All' || mentor.company.includes(selectedCompany);
    return matchesSearch && matchesExpertise && matchesLocation && matchesCompany;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Users className="h-4 w-4 mr-1" />
              Mentorship Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Industry Mentors</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get personalized guidance from industry experts, successful entrepreneurs, and alumni 
              to accelerate your career and entrepreneurial journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <MessageCircle className="h-5 w-5 mr-2" />
                Find a Mentor
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="h-5 w-5 mr-2" />
                Join Program
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
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Industry Mentors</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Students Mentored</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="mentors" className="text-lg py-3">
                <Users className="h-5 w-5 mr-2" />
                Find Mentors
              </TabsTrigger>
              <TabsTrigger value="programs" className="text-lg py-3">
                <Target className="h-5 w-5 mr-2" />
                Programs
              </TabsTrigger>
              <TabsTrigger value="success" className="text-lg py-3">
                <Award className="h-5 w-5 mr-2" />
                Success Stories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mentors">
              <MentorsSection mentors={filteredMentors} 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}
                selectedExpertise={selectedExpertise}
                setSelectedExpertise={setSelectedExpertise}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                selectedCompany={selectedCompany}
                setSelectedCompany={setSelectedCompany}
              />
            </TabsContent>

            <TabsContent value="programs">
              <ProgramsSection programs={mentorshipPrograms} />
            </TabsContent>

            <TabsContent value="success">
              <SuccessStoriesSection stories={successStories} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our mentorship program and get personalized guidance from industry experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <MessageCircle className="h-5 w-5 mr-2" />
                Apply for Mentorship
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <ExternalLink className="h-5 w-5 mr-2" />
                Become a Mentor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Mentors Section Component
function MentorsSection({ 
  mentors, 
  searchTerm, 
  setSearchTerm, 
  selectedExpertise, 
  setSelectedExpertise,
  selectedLocation,
  setSelectedLocation,
  selectedCompany,
  setSelectedCompany
}: {
  mentors: Mentor[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedExpertise: string;
  setSelectedExpertise: (expertise: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search mentors by name, company, or expertise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white flex-1"
            >
              {expertiseAreas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white flex-1"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Building2 className="h-4 w-4 text-gray-500" />
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white flex-1"
            >
              {companies.map(company => (
                <option key={company} value={company}>{company}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      {mentors.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Mentors Found</h3>
            <p className="text-gray-600">No mentors match your search criteria. Try adjusting your filters.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full hover:shadow-lg transition-shadow ${mentor.featured ? 'ring-2 ring-blue-500' : ''}`}>
                {mentor.featured && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    <Star className="h-4 w-4 inline mr-1" />
                    Featured Mentor
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{mentor.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">
                        {mentor.title}
                      </CardDescription>
                      <p className="text-sm text-gray-600">{mentor.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-semibold">{mentor.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{mentor.menteeCount} mentees</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 line-clamp-3">{mentor.bio}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{mentor.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Responds {mentor.responseTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {mentor.expertise.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{mentor.expertise.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
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

// Programs Section Component
function ProgramsSection({ programs }: { programs: typeof mentorshipPrograms }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mentorship Programs</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our structured mentorship programs designed for different career stages and goals
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((program, index) => {
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
                    <div className={`w-12 h-12 bg-${program.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`h-6 w-6 text-${program.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Duration</p>
                        <p className="font-semibold">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Commitment</p>
                        <p className="font-semibold">{program.commitment}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Type</p>
                        <p className="font-semibold">{program.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Next Cohort</p>
                        <p className="font-semibold">{program.nextCohort}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-sm mb-2">Benefits:</p>
                      <ul className="space-y-1">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600 mb-2">Eligibility: {program.eligibility}</p>
                      <Button className={`w-full bg-${program.color}-600 hover:bg-${program.color}-700`}>
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
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
          Read how our mentorship program has helped students achieve their career goals
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
                      <User className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{story.studentName}</p>
                      <p className="text-sm text-gray-600">Batch {story.studentBatch}</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-green-800">{story.outcome}</p>
                  </div>
                  
                  <p className="text-gray-700 italic">"{story.story}"</p>
                  
                  <div className="pt-3 border-t">
                    <p className="text-sm text-gray-600">
                      Mentored by <span className="font-semibold">{story.mentorName}</span>
                    </p>
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