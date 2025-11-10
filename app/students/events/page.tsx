'use client';

import { Button } from '@/components/ui/button';
import { SECTION_COLORS } from '@/styles/colors';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  ArrowRight,
  Trophy,
  Rocket,
  BookOpen,
  Filter,
  Search
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

type EventItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  endDate?: string;
  endTime?: string;
  location?: string;
  category?: string;
  type?: string;
  registrationDeadline?: string;
  maxParticipants?: number;
  currentRegistrations?: number;
  prizes?: string;
  eligibility?: string;
  featured?: boolean;
  image?: string;
  tags?: string[];
  speaker?: string;
  participants?: number;
  winner?: string;
  highlights?: string[];
};

const upcomingEvents: EventItem[] = [
  {
    id: 'u1',
    title: 'E-Summit 2025',
    description: 'Anticipated flagship summit hosted by E-Cell with competitions, workshops, and industry speakers to foster entrepreneurial spirit.',
    date: '2025-11-01',
    time: '09:00 AM',
    endDate: '2025-11-02',
    endTime: '06:00 PM',
    location: 'PES University',
    category: 'Summit',
    type: 'Flagship',
    featured: false,
    tags: ['esummit', 'entrepreneurship', 'competition']
  },
  {
    id: 'u3',
    title: 'Workshops & Hackathons (Series)',
    description: 'A rolling series of hands-on workshops and hackathons focused on AI, IoT, sustainability, and applied machine learning.',
    date: '2025-12-01',
    time: '09:00 AM',
    endDate: '2026-03-01',
    endTime: '06:00 PM',
    location: 'Hybrid (CIE + Virtual)',
    category: 'Workshop',
    type: 'Educational',
    featured: false,
    tags: ['workshop', 'hackathon', 'ai', 'iot']
  }
];

const pastEvents: EventItem[] = [
  {
    id: 'p-esummit-2023',
    title: 'E-Summit 2023',
    description: 'Flagship event hosted by E-Cell featuring competitions like Founder Fusion and Startup Valley, keynote by Rohit Agarwala, and 200+ attendees.',
    date: '2023-11-04',
    category: 'Summit',
    participants: 200,
    highlights: ['Founder Fusion', 'Startup Valley', 'Keynote by Rohit Agarwala'],
  },
  {
    id: 'p-diplomat-4',
    title: 'Diplomat Wars 4.0',
    description: 'A prestigious Model UN-style diplomacy competition hosted by PES MUN Society with 50 teams and international guest inaugurations.',
    date: '2024-02-03',
    category: 'Competition',
    participants: 50,
    highlights: ['Negotiation simulations', 'Leadership and public speaking'],
  },
  {
    id: 'p-indonesia-visit',
    title: 'Indonesian Delegation Visit to PES & CIE',
    description: 'A delegation of 45 senior officials visited CIE; students showcased prototypes and engaged in a leadership workshop organized with Deloitte.',
    date: '2025-04-01',
    category: 'Visit',
    participants: 45,
    highlights: ['Industry delegation', 'Student prototype demonstrations'],
  },
  {
    id: 'p-gvl-2018',
    title: 'Global Venture Lab Conference 2018',
    description: 'PES University featured at the 10th GVL Conference at UC Berkeley; CIE presented new initiatives and connected with international educators.',
    date: '2018-01-01',
    category: 'Conference',
    participants: 50,
    highlights: ['International educators', 'Best-practice sharing'],
  }
];

const eventCategories = ['All', 'Competition', 'Workshop', 'Masterclass', 'Networking', 'Bootcamp', 'Summit', 'Hackathon'];

// Helper function for category colors
function getCategoryColor(category?: string): string {
  const colors: Record<string, string> = {
    'Competition': 'bg-red-100 text-red-800 hover:bg-red-200',
    'Workshop': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'Masterclass': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    'Networking': 'bg-green-100 text-green-800 hover:bg-green-200',
    'Bootcamp': 'bg-orange-100 text-orange-800 hover:bg-orange-200',
    'Summit': 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
    'Hackathon': 'bg-pink-100 text-pink-800 hover:bg-pink-200'
  };
  if (!category) return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  return colors[category] || 'bg-gray-100 text-gray-800 hover:bg-gray-200';
}

// Upcoming Events Grid Component
function UpcomingEventsGrid({ events }: { events: EventItem[] }) {
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
          transition={{ duration: 0.5, delay: index * 0.08 }}
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
              <CardTitle className="text-lg">{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
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
                    style={{ width: `${((event.currentRegistrations ?? 0) / Math.max(1, event.maxParticipants ?? 1)) * 100}%` }}
                  />
                </div>
                {/* {event.speaker && (
                  <div className="text-sm text-gray-700">
                    <strong>Speaker:</strong> {event.speaker}
                  </div>
                )} */}
              </div>
            </CardContent>
            <div className="p-4 pt-0">
              <Button asChild className="w-full bg-white text-[#3E3C6B] hover:bg-gray-100">
                <a href="mailto:cieprogram@pes.edu">Inquire </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Past Events Grid Component
function PastEventsGrid({ events }: { events: EventItem[] }) {
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
                {/* {event.speakers && (
                  <div className="text-sm">
                    <p className="text-gray-600 mb-1">Speakers:</p>
                    <ul className="space-y-1">
                      {event.speakers.map((speaker, idx) => (
                        <li key={idx} className="text-gray-900">{speaker}</li>
                      ))}
                    </ul>
                  </div>
                )} */}
                <div className="text-sm">
                  <p className="text-gray-600 mb-1">Highlights:</p>
                  <ul className="space-y-1">
                    {(event.highlights || []).map((highlight: string, idx: number) => (
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

export default function EventsPage() {
  const studentsColors = SECTION_COLORS.students;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredUpcomingEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (event.tags ?? []).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B] text-white">
        <InteractiveHexagonBackground
          primaryColor={studentsColors.hero?.background}
          accentColor={studentsColors.hero?.hexagonAccent}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-[#2B9EB3]/12 text-[#2B9EB3]">
              <Calendar className="h-4 w-4 mr-1" />
              Events & Programs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Student <span style={{ color: studentsColors.primary }}>Events</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Discover workshops, competitions, networking events, and learning opportunities 
              designed to accelerate your entrepreneurial journey.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#3E3C6B] hover:bg-gray-100">
                <Rocket className="h-5 w-5 mr-2" />
                Register for CIE Ignite
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#3E3C6B]">
                <Calendar className="h-5 w-5 mr-2" />
                View Event Calendar
              </Button>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* CIE Ignite Spotlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* CIE Ignite spotlight removed per request */}
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
                aria-label="Filter events by category"
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

      {/* Contact / Email Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Email Us</h2>
            <p className="text-lg text-gray-600 mb-6">For event inquiries, volunteering, or partnership opportunities, email us at</p>
            <a href="mailto:cieprogram@pes.edu" className="text-lg font-medium text-blue-600">Email us for more details</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}