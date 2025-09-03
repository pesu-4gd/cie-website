'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  ExternalLink,
  Star,
  ArrowRight,
  Lightbulb,
  Trophy,
  Target,
  Rocket,
  BookOpen,
  Video,
  Coffee,
  Briefcase,
  Globe,
  Filter,
  Search
} from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const upcomingEvents = [
  {
    id: '1',
    title: 'CIE Ignite 2024 - Ideathon',
    description: 'Annual flagship startup challenge for 2nd-year students. Transform your ideas into viable business concepts.',
    date: '2024-02-15',
    time: '09:00 AM',
    endDate: '2024-02-17',
    endTime: '06:00 PM',
    location: 'CIE Innovation Hub',
    category: 'Competition',
    type: 'Flagship',
    registrationDeadline: '2024-02-10',
    maxParticipants: 200,
    currentRegistrations: 156,
    prizes: '₹2,00,000 in total prizes',
    eligibility: '2nd year students from all branches',
    featured: true,
    image: '/events/cie-ignite-2024.jpg',
    tags: ['startup', 'ideathon', 'competition', 'innovation']
  },
  {
    id: '2',
    title: 'Product Management Workshop',
    description: 'Learn PM fundamentals in the AI era with industry experts from top tech companies.',
    date: '2024-02-20',
    time: '02:00 PM',
    endDate: '2024-02-20',
    endTime: '05:00 PM',
    location: 'Virtual + CIE Seminar Hall',
    category: 'Workshop',
    type: 'Educational',
    registrationDeadline: '2024-02-18',
    maxParticipants: 100,
    currentRegistrations: 67,
    speaker: 'Rahul Sharma, Senior PM at Google',
    featured: false,
    tags: ['product management', 'AI', 'workshop', 'career']
  },
  {
    id: '3',
    title: 'Startup Funding Masterclass',
    description: 'Understanding venture capital, angel investment, and alternative funding sources.',
    date: '2024-02-25',
    time: '10:00 AM',
    endDate: '2024-02-25',
    endTime: '04:00 PM',
    location: 'CIE Conference Room',
    category: 'Masterclass',
    type: 'Educational',
    registrationDeadline: '2024-02-23',
    maxParticipants: 80,
    currentRegistrations: 45,
    speaker: 'Priya Nair, Partner at Accel Ventures',
    featured: false,
    tags: ['funding', 'venture capital', 'investment', 'masterclass']
  },
  {
    id: '4',
    title: 'Alumni Entrepreneur Meet',
    description: 'Network with successful alumni entrepreneurs and learn from their journey.',
    date: '2024-03-05',
    time: '06:00 PM',
    endDate: '2024-03-05',
    endTime: '08:30 PM',
    location: 'CIE Auditorium',
    category: 'Networking',
    type: 'Community',
    registrationDeadline: '2024-03-03',
    maxParticipants: 150,
    currentRegistrations: 89,
    featured: false,
    tags: ['alumni', 'networking', 'entrepreneurship', 'community']
  },
  {
    id: '5',
    title: 'Design Thinking Bootcamp',
    description: 'Intensive 2-day bootcamp on human-centered design and innovation methodologies.',
    date: '2024-03-12',
    time: '09:00 AM',
    endDate: '2024-03-13',
    endTime: '05:00 PM',
    location: 'CIE Design Lab',
    category: 'Bootcamp',
    type: 'Educational',
    registrationDeadline: '2024-03-08',
    maxParticipants: 60,
    currentRegistrations: 34,
    featured: false,
    tags: ['design thinking', 'innovation', 'bootcamp', 'methodology']
  }
];

const pastEvents = [
  {
    id: 'p1',
    title: 'CIE Ignite 2023',
    description: 'Last year\'s flagship ideathon with 180+ participants and innovative solutions.',
    date: '2023-02-16',
    category: 'Competition',
    participants: 180,
    winner: 'EcoTech Solutions - Sustainable packaging startup',
    highlights: ['15 finalist teams', '₹1,50,000 in prizes', '3 startups launched'],
    image: '/events/cie-ignite-2023.jpg'
  },
  {
    id: 'p2',
    title: 'Entrepreneurship Summit 2023',
    description: 'Annual summit featuring industry leaders and successful entrepreneurs.',
    date: '2023-11-15',
    category: 'Summit',
    participants: 300,
    speakers: ['Kunal Shah (CRED)', 'Falguni Nayar (Nykaa)', 'Ritesh Agarwal (OYO)'],
    highlights: ['3 keynote sessions', '5 panel discussions', '50+ startups showcased']
  },
  {
    id: 'p3',
    title: 'Hackathon for Social Good',
    description: '48-hour hackathon focused on solving social and environmental challenges.',
    date: '2023-09-22',
    category: 'Hackathon',
    participants: 120,
    winner: 'HealthBridge - Rural healthcare access platform',
    highlights: ['20 teams', '₹75,000 in prizes', '2 solutions implemented']
  }
];

const eventCategories = ['All', 'Competition', 'Workshop', 'Masterclass', 'Networking', 'Bootcamp', 'Summit', 'Hackathon'];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredUpcomingEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredPastEvents = pastEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
              <Calendar className="h-4 w-4 mr-1" />
              Events & Programs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Student <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover workshops, competitions, networking events, and learning opportunities 
              designed to accelerate your entrepreneurial journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Rocket className="h-5 w-5 mr-2" />
                Register for CIE Ignite
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="h-5 w-5 mr-2" />
                View Event Calendar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CIE Ignite Spotlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                      <Trophy className="h-4 w-4 mr-1" />
                      Flagship Event
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      CIE Ignite 2024
                    </h2>
                    <p className="text-blue-100 text-lg mb-6">
                      Our annual flagship startup challenge where 2nd-year students transform 
                      innovative ideas into viable business concepts through intensive mentorship 
                      and expert guidance.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-blue-200 text-sm">Prize Pool</p>
                        <p className="text-white font-bold text-xl">₹2,00,000</p>
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm">Participants</p>
                        <p className="text-white font-bold text-xl">200+ Students</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-white text-blue-600 hover:bg-gray-100">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Register Now
                      </Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="h-5 w-5 text-blue-200" />
                        <span className="text-blue-100">Event Dates</span>
                      </div>
                      <p className="text-white font-semibold">February 15-17, 2024</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <MapPin className="h-5 w-5 text-blue-200" />
                        <span className="text-blue-100">Location</span>
                      </div>
                      <p className="text-white font-semibold">CIE Innovation Hub</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Users className="h-5 w-5 text-blue-200" />
                        <span className="text-blue-100">Registration</span>
                      </div>
                      <p className="text-white font-semibold">156/200 Registered</p>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Events</h2>
            <p className="text-lg text-gray-600">
              Browse through our comprehensive list of events and programs
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 bg-white"
              >
                {eventCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming" className="text-lg py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events ({filteredUpcomingEvents.length})
              </TabsTrigger>
              <TabsTrigger value="past" className="text-lg py-3">
                <Award className="h-5 w-5 mr-2" />
                Past Events ({filteredPastEvents.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <UpcomingEventsGrid events={filteredUpcomingEvents} />
            </TabsContent>

            <TabsContent value="past">
              <PastEventsGrid events={filteredPastEvents} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss an Event
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and get notified about upcoming events, workshops, and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Upcoming Events Grid Component
function UpcomingEventsGrid({ events }: { events: typeof upcomingEvents }) {
  if (events.length === 0) {
    return (
      <Card className="text-center py-12">
        <CardContent>
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Events Found</h3>
          <p className="text-gray-600">No events match your search criteria. Try adjusting your filters.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className={`h-full hover:shadow-lg transition-shadow ${event.featured ? 'ring-2 ring-blue-500' : ''}`}>
            {event.featured && (
              <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                <Star className="h-4 w-4 inline mr-1" />
                Featured Event
              </div>
            )}
            <CardHeader>
              <div className="flex items-start justify-between">
                <Badge className={getCategoryColor(event.category)}>
                  {event.category}
                </Badge>
                <Badge variant="outline">{event.type}</Badge>
              </div>
              <CardTitle className="text-xl">{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{event.time} - {event.endTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                {event.prizes && (
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <Trophy className="h-4 w-4" />
                    <span>{event.prizes}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{event.currentRegistrations}/{event.maxParticipants} registered</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(event.currentRegistrations / event.maxParticipants) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Register Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Past Events Grid Component
function PastEventsGrid({ events }: { events: typeof pastEvents }) {
  if (events.length === 0) {
    return (
      <Card className="text-center py-12">
        <CardContent>
          <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Past Events Found</h3>
          <p className="text-gray-600">No past events match your search criteria.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <Badge className={getCategoryColor(event.category)}>
                  {event.category}
                </Badge>
                <span className="text-sm text-gray-500">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <CardTitle className="text-xl">{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{event.participants} participants</span>
                </div>
                {event.winner && (
                  <div className="flex items-start space-x-2 text-sm">
                    <Trophy className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-gray-600">Winner:</p>
                      <p className="font-semibold text-gray-900">{event.winner}</p>
                    </div>
                  </div>
                )}
                {event.speakers && (
                  <div className="text-sm">
                    <p className="text-gray-600 mb-1">Speakers:</p>
                    <ul className="space-y-1">
                      {event.speakers.map((speaker, idx) => (
                        <li key={idx} className="text-gray-900">{speaker}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="text-sm">
                  <p className="text-gray-600 mb-1">Highlights:</p>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Helper function for category colors
function getCategoryColor(category: string) {
  const colors: { [key: string]: string } = {
    'Competition': 'bg-red-100 text-red-800 hover:bg-red-200',
    'Workshop': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'Masterclass': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    'Networking': 'bg-green-100 text-green-800 hover:bg-green-200',
    'Bootcamp': 'bg-orange-100 text-orange-800 hover:bg-orange-200',
    'Summit': 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
    'Hackathon': 'bg-pink-100 text-pink-800 hover:bg-pink-200'
  };
  return colors[category] || 'bg-gray-100 text-gray-800 hover:bg-gray-200';
}