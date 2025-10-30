'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// Search and select UI removed per request
import { Rocket, Users, Calendar, ExternalLink, Star, Award, TrendingUp } from 'lucide-react';
import { SECTION_COLORS, hexToRgb } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  team: string[];
  mentor: string;
  startDate: string;
  endDate?: string;
  technologies: string[];
  funding?: string;
  awards?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'EcoTrack - Carbon Footprint Monitor',
    description: 'AI-powered mobile app that tracks and reduces personal carbon footprint through smart recommendations and gamification.',
    category: 'Sustainability',
    status: 'Completed',
    team: ['Priya Sharma', 'Arjun Patel', 'Sneha Reddy'],
    mentor: 'Dr. Rajesh Kumar',
    startDate: '2023-08-01',
    endDate: '2024-01-15',
    technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
    funding: '₹2,50,000',
    awards: ['Best Sustainability Project 2024', 'CIE Ignite Winner'],
    demoUrl: 'https://ecotrack-demo.com',
    githubUrl: 'https://github.com/ecotrack'
  },
  {
    id: '2',
    title: 'MediConnect - Rural Healthcare Platform',
    description: 'Telemedicine platform connecting rural patients with urban doctors through video consultations and AI-assisted diagnosis.',
    category: 'Healthcare',
    status: 'In Progress',
    team: ['Rahul Gupta', 'Ananya Singh', 'Karthik Nair', 'Divya Joshi'],
    mentor: 'Dr. Priya Menon',
    startDate: '2023-09-15',
    technologies: ['Next.js', 'Node.js', 'WebRTC', 'MongoDB', 'AWS'],
    funding: '₹3,75,000',
    demoUrl: 'https://mediconnect-beta.com'
  },
  {
    id: '3',
    title: 'SkillBridge - Peer Learning Network',
    description: 'Platform for students to teach and learn skills from each other, with integrated assessment and certification.',
    category: 'Education',
    status: 'Completed',
    team: ['Vikram Jain', 'Pooja Agarwal'],
    mentor: 'Prof. Suresh Babu',
    startDate: '2023-07-01',
    endDate: '2023-12-20',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis'],
    funding: '₹1,80,000',
    awards: ['Most Innovative EdTech Solution'],
    githubUrl: 'https://github.com/skillbridge'
  },
  {
    id: '4',
    title: 'AgriSense - Smart Farming IoT',
    description: 'IoT-based smart farming solution with sensors for soil monitoring, automated irrigation, and crop health analysis.',
    category: 'Agriculture',
    status: 'In Progress',
    team: ['Manoj Kumar', 'Lakshmi Devi', 'Ravi Shankar'],
    mentor: 'Dr. Geetha Rani',
    startDate: '2023-10-01',
    technologies: ['Arduino', 'Raspberry Pi', 'Python', 'LoRaWAN', 'React'],
    funding: '₹4,20,000'
  },
  {
    id: '5',
    title: 'FinSecure - Blockchain Banking',
    description: 'Decentralized banking platform using blockchain for secure, transparent, and low-cost financial transactions.',
    category: 'FinTech',
    status: 'Planning',
    team: ['Aditya Verma', 'Shreya Kapoor', 'Nikhil Agrawal'],
    mentor: 'Dr. Amit Sharma',
    startDate: '2024-02-01',
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS']
  },
  {
    id: '6',
    title: 'VoiceAI - Multilingual Assistant',
    description: 'AI voice assistant supporting 10+ Indian languages with offline capabilities for rural and urban users.',
    category: 'AI/ML',
    status: 'Completed',
    team: ['Deepika Rao', 'Sanjay Krishnan', 'Meera Patel', 'Rohit Sharma'],
    mentor: 'Dr. Venkat Reddy',
    startDate: '2023-06-01',
    endDate: '2024-01-30',
    technologies: ['Python', 'TensorFlow', 'Flutter', 'FastAPI', 'Docker'],
    funding: '₹5,00,000',
    awards: ['Best AI Innovation 2024', 'Industry Choice Award'],
    demoUrl: 'https://voiceai-demo.com'
  }
];

// categories and statuses removed — filters were removed per request

export default function ProjectsPage() {
  const studentsColors = SECTION_COLORS.students;
  // Filters/search removed per request — show full projects list
  const visibleProjects = projects;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (gradient) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden" style={{ background: studentsColors.gradient.css }}>
        <InteractiveHexagonBackground className="absolute inset-0 z-0" />
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: studentsColors.primary }}>
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Student Projects
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover innovative projects built by CIE students, from AI solutions to sustainable technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2" style={{ color: studentsColors.primary }}>50+</div>
                <div className="text-gray-600">Active Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2" style={{ color: studentsColors.accent }}>₹25L+</div>
                <div className="text-gray-600">Total Funding</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2" style={{ color: studentsColors.primary }}>200+</div>
                <div className="text-gray-600">Students Involved</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2" style={{ color: studentsColors.accent }}>15+</div>
                <div className="text-gray-600">Awards Won</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    

      {/* Projects Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {visibleProjects.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Rocket className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Projects Found</h3>
                <p className="text-gray-600 mb-4">There are no projects to display.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" style={{ backgroundColor: `rgba(${hexToRgb(studentsColors.primary)}, 0.08)`, color: studentsColors.primary }}>{project.category}</Badge>
                      </div>
                      <Badge style={{ backgroundColor: studentsColors.accent, color: '#fff' }}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Team */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">Team</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.team.slice(0, 2).map((member, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {member}
                            </Badge>
                          ))}
                          {project.team.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.team.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">Technologies</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Funding */}
                      {project.funding && (
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Funding: {project.funding}</span>
                        </div>
                      )}

                      {/* Awards */}
                      {project.awards && project.awards.length > 0 && (
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">
                            {project.awards.length} award{project.awards.length > 1 ? 's' : ''}
                          </span>
                        </div>
                      )}

                      {/* Action Buttons: demo button present but non-clickable per request */}
                      
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Have a Project Idea?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join CIE and turn your innovative ideas into reality with mentorship, funding, and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Submit Project Proposal
            </Button>
            <Button size="lg" variant="outline">
              Join a Team
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}