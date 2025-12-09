'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Briefcase, Calendar, Linkedin, Github, Globe, Mail, Filter } from 'lucide-react';
import Link from 'next/link';

interface AlumniProfile {
  id: string;
  name: string;
  graduationYear: number;
  degree: string;
  currentPosition: string;
  company: string;
  location: string;
  industry: string;
  bio: string;
  profileImage?: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    website?: string;
    email?: string;
  };
  achievements: string[];
}

const mockAlumniData: AlumniProfile[] = [
  {
    id: '1',
    name: 'Aditya Mehta',
    graduationYear: 2019,
    degree: 'B.Tech Computer Science',
    currentPosition: 'Founder & CEO',
    company: 'Epicure Robotics',
    location: 'Bangalore, India',
    industry: 'Robotics & Automation',
    bio: 'Leading innovation in robotics and automation, building solutions that transform industries. Passionate about mentoring the next generation of entrepreneurs.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/adityamehta',
      website: 'https://epicurerobotics.com'
    },
    achievements: ['Founded Epicure Robotics', 'Raised $5M Series A', 'Forbes 30 Under 30']
  },
  {
    id: '2',
    name: 'Rohith Ramesh',
    graduationYear: 2018,
    degree: 'B.Tech Electronics',
    currentPosition: 'Tech Entrepreneur',
    company: 'TechFlow Solutions',
    location: 'San Francisco, USA',
    industry: 'Software Development',
    bio: 'Successful entrepreneur and mentor, actively involved in CIE\'s alumni mentorship programs. Building scalable tech solutions.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/rohithramesh',
      github: 'https://github.com/rohithramesh'
    },
    achievements: ['Successful Exit - $50M', 'Angel Investor', 'CIE Mentor']
  },
  {
    id: '3',
    name: 'Radha Rajappa',
    graduationYear: 2017,
    degree: 'B.Tech Information Science',
    currentPosition: 'Senior Product Manager',
    company: 'Google',
    location: 'Mountain View, USA',
    industry: 'Technology',
    bio: 'Leading product innovation at Google and mentoring students in product management. Expert in AI/ML product development.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/radharajappa',
      email: 'radha@example.com'
    },
    achievements: ['Google PM', 'Product Leadership', 'AI/ML Expert']
  },
  {
    id: '4',
    name: 'Priya Sharma',
    graduationYear: 2020,
    degree: 'B.Tech Mechanical',
    currentPosition: 'Co-founder',
    company: 'GreenTech Innovations',
    location: 'Mumbai, India',
    industry: 'Clean Technology',
    bio: 'Building sustainable technology solutions for a greener future. Focused on renewable energy and environmental conservation.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/priyasharma',
      website: 'https://greentech-innovations.com'
    },
    achievements: ['Clean Tech Pioneer', 'Sustainability Award', 'Women in Tech Leader']
  },
  {
    id: '5',
    name: 'Arjun Patel',
    graduationYear: 2016,
    degree: 'B.Tech Computer Science',
    currentPosition: 'VP Engineering',
    company: 'Microsoft',
    location: 'Seattle, USA',
    industry: 'Technology',
    bio: 'Leading engineering teams at Microsoft, specializing in cloud computing and distributed systems. Active in open source community.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/arjunpatel',
      github: 'https://github.com/arjunpatel'
    },
    achievements: ['Microsoft VP', 'Cloud Computing Expert', 'Open Source Contributor']
  },
  {
    id: '6',
    name: 'Sneha Reddy',
    graduationYear: 2021,
    degree: 'B.Tech Biotechnology',
    currentPosition: 'Research Scientist',
    company: 'Biocon',
    location: 'Bangalore, India',
    industry: 'Biotechnology',
    bio: 'Advancing biotechnology research and development. Working on breakthrough treatments and medical innovations.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/snehareddy',
      email: 'sneha@example.com'
    },
    achievements: ['Biotech Researcher', 'Published Papers', 'Innovation Award']
  }
];

export default function AlumniDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const filteredAlumni = mockAlumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.currentPosition.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = selectedYear === 'all' || alumni.graduationYear.toString() === selectedYear;
    const matchesIndustry = selectedIndustry === 'all' || alumni.industry === selectedIndustry;
    const matchesLocation = selectedLocation === 'all' || alumni.location.includes(selectedLocation);
    
    return matchesSearch && matchesYear && matchesIndustry && matchesLocation;
  });

  const graduationYears = [...new Set(mockAlumniData.map(a => a.graduationYear))].sort((a, b) => b - a);
  const industries = [...new Set(mockAlumniData.map(a => a.industry))];
  const locations = [...new Set(mockAlumniData.map(a => a.location.split(',')[1]?.trim() || a.location))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Alumni Directory
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with fellow CIE alumni from around the world. Build meaningful professional relationships and expand your network.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by name, company, or position..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Year Filter */}
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Graduation Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {graduationYears.map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Industry Filter */}
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center text-sm text-gray-600">
                <Filter className="h-4 w-4 mr-2" />
                Showing {filteredAlumni.length} of {mockAlumniData.length} alumni
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedYear('all');
                  setSelectedIndustry('all');
                  setSelectedLocation('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alumni) => (
              <Card key={alumni.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{alumni.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {alumni.currentPosition} at {alumni.company}
                      </CardDescription>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        Class of {alumni.graduationYear}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      {alumni.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                      {alumni.industry}
                    </div>
                    
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {alumni.bio}
                    </p>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-1">
                      {alumni.achievements.slice(0, 2).map((achievement, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                      {alumni.achievements.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{alumni.achievements.length - 2} more
                        </Badge>
                      )}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-2 pt-2">
                      {alumni.socialLinks.linkedin && (
                        <Link href={alumni.socialLinks.linkedin} target="_blank">
                          <Button size="sm" variant="outline" className="p-2">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {alumni.socialLinks.github && (
                        <Link href={alumni.socialLinks.github} target="_blank">
                          <Button size="sm" variant="outline" className="p-2">
                            <Github className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {alumni.socialLinks.website && (
                        <Link href={alumni.socialLinks.website} target="_blank">
                          <Button size="sm" variant="outline" className="p-2">
                            <Globe className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      {alumni.socialLinks.email && (
                        <Link href={`mailto:${alumni.socialLinks.email}`}>
                          <Button size="sm" variant="outline" className="p-2">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      <Button size="sm" className="ml-auto" onClick={() => window.location.href = 'mailto:cieoffice@pes.edu?subject=Connect%20with%20Alumni'}>
                        Connect
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAlumni.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No alumni found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters to find more alumni.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to be Featured?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Update your profile and share your achievements with the CIE community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => window.location.href = 'mailto:cieoffice@pes.edu?subject=Update%20Alumni%20Profile'}>
              Update Profile
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" onClick={() => window.location.href = 'mailto:cieoffice@pes.edu?subject=Join%20Alumni%20Network'}>
              Join Alumni Network
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}