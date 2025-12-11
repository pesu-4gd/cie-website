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
  BookOpen
} from 'lucide-react';
import { useState } from 'react';

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
    description: 'Anticipated to be hosted by E-Cell, featuring new competitions, workshops, and industry speakers to continue fostering entrepreneurial spirit.',
    date: '2025-11-01',
    location: 'PES University',
    category: 'Summit',
    type: 'Flagship',
    featured: true,
    tags: ['esummit', 'entrepreneurship', 'competition']
  },
  {
    id: 'u2',
    title: 'CIE Ignite Ideathon 2026',
    description: 'A competitive startup challenge integrated into EIE Part II, running from January to April, where students can pitch ideas and win internships or funding.',
    date: '2026-01-01',
    endDate: '2026-04-30',
    location: 'PES University',
    category: 'Competition',
    type: 'Ideathon',
    featured: true,
    tags: ['ignite', 'ideathon', 'startup']
  },
  {
    id: 'u3',
    title: 'Workshops & Hackathons',
    description: 'Events like the Practical Approach to Machine Learning Workshop or hackathons focusing on AI, IoT, and sustainability, offering hands-on learning.',
    date: '2025-12-01',
    location: 'Hybrid (CIE + Virtual)',
    category: 'Workshop',
    type: 'Educational',
    featured: false,
    tags: ['workshop', 'hackathon', 'ai', 'iot', 'paml']
  }
];

const pastEvents: EventItem[] = [
  {
    id: 'p-esummit-2023',
    title: 'E-Summit 2023',
    description: 'E-Summit 2023 was a flagship event hosted by E-Cell, bringing together students to foster the spirit of entrepreneurship. The event featured competitions like Founder Fusion and Startup Valley, where participants showcased innovative business ideas and strategies. A highlight was the keynote address by Rohit Agarwala, who shared insights on leveraging social media marketing for startups, inspiring students to think creatively about digital branding.',
    date: '2023-11-04',
    endDate: '2023-11-05',
    category: 'Summit',
    participants: 200,
    highlights: ['Founder Fusion competition', 'Startup Valley challenge', 'Keynote by Rohit Agarwala on social media marketing', 'Over 200 attendees'],
  },
  {
    id: 'p-diplomat-4',
    title: 'Diplomat Wars 4.0',
    description: 'Diplomat Wars 4.0, held at the 52 Golden Jubilee Block, PES University RR Campus, was a prestigious event organized by the PES MUN Society. It brought together 50 teams to compete in diplomacy and negotiation skills, simulating real-world geopolitical scenarios. The event was inaugurated by Mr. Thierry Berthelot, Consul General of France in Bengaluru, adding an international dimension.',
    date: '2024-02-03',
    endDate: '2024-02-04',
    category: 'Competition',
    participants: 50,
    highlights: ['50 teams competing', 'Inaugurated by Consul General of France', 'Diplomacy and negotiation simulations', 'Leadership and public speaking development'],
  },
  {
    id: 'p-indonesia-visit',
    title: 'Indonesian Delegation Visit to PES & CIE',
    description: 'A delegation of 45 senior officials from Indonesia\'s Oil and Gas industry visited PES University as part of a leadership workshop organized by Deloitte. Prof. D. Jawahar, Pro-Chancellor of PES University, presented an overview of the university\'s history, talent success stories, and the establishment of CIE. The delegation toured CIE, where students demonstrated innovative prototypes addressing real-world problems.',
    date: '2025-04-01',
    category: 'Visit',
    participants: 45,
    highlights: ['45 senior officials from Indonesia', 'Leadership workshop by Deloitte', 'Student prototype demonstrations', 'Global appreciation for CIE innovations'],
  },
  {
    id: 'p-gvl-2018',
    title: 'The Global Venture Lab Conference 2018',
    description: 'PES University was featured at the 10th Global Venture Lab (GVL) Conference, a premier gathering of entrepreneurship educators hosted by SCET at UC Berkeley. The conference included approximately 50 participants from leading tech and business schools across 15 countries. Prof. Sathya Prasad, Director of CIE, presented CIE\'s perspective in the "New Initiatives and Programs" section.',
    date: '2018-01-01',
    category: 'Conference',
    participants: 50,
    highlights: ['Featured at UC Berkeley', '50 participants from 15 countries', 'CIE presented new initiatives', 'Global platform for entrepreneurship education'],
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
                {/* <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{event.time} - {event.endTime}</span>
                </div> */}
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
                {/* <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{event.currentRegistrations}/{event.maxParticipants} registered</span>
                </div> */}
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
                <a href="mailto:cieprogram@pes.edu">Enquire </a>
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
  const [activeTab, setActiveTab] = useState('upcoming');

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
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              Events & Programs
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Engage, Innovate, and <span style={{ color: studentsColors.primary }}>Connect</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              The Centre for Innovation and Entrepreneurship (CIE) at PES University organizes and participates in a dynamic range of events that empower students to develop entrepreneurial skills, network with industry leaders, and showcase their innovations.
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

      {/* Events Listing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              From student-led summits to global conferences, CIE events provide platforms for learning, collaboration, and exposure to real-world challenges. Below is a curated list of past and upcoming events, highlighting opportunities for students to engage with CIE's vibrant ecosystem.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming" className="text-lg py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events ({upcomingEvents.length})
              </TabsTrigger>
              <TabsTrigger value="past" className="text-lg py-3">
                <Award className="h-5 w-5 mr-2" />
                Past Events ({pastEvents.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <UpcomingEventsGrid events={upcomingEvents} />
            </TabsContent>

            <TabsContent value="past">
              <PastEventsGrid events={pastEvents} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Participate in CIE Events?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Gain entrepreneurial, technical, and leadership skills through competitions, workshops, and networking.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Networking Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Connect with industry leaders, international delegates, and peers to build your professional network.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Global Exposure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Engage with global platforms like the Global Venture Lab Conference, broadening your perspective.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Rocket className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Innovation Showcase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Present your ideas and prototypes to industry experts, as seen during the Indonesian Delegation visit.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Events like E-Summit and CIE Ignite offer pathways to internships, funding, and mentorship for your startup journey.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Subscribe to the CIE Newsletter and follow us on LinkedIn, Spotify, and Instagram for event announcements.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Get Involved Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Get Involved</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join CIE events to ignite your entrepreneurial journey and make a lasting impact!
            </p>
          </motion.div>

          <div className="space-y-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Join Student Clubs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Engage with E-Cell or CMS to participate in events like E-Summit or Diplomat Wars. Contact them via cieprogram@pes.edu or their social media (E-Cell LinkedIn).</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Participate in CIE Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Enroll in EIE courses or the Student Startup Program to access events like CIE Ignite Ideathon.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  Volunteer or Mentor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Take on roles in event organization or mentorship, as seen with CMS's involvement in CIE Ignite S01 Grand Finale.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2 text-blue-600" />
                  Express Interest
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Email cieprogram@pes.edu to learn about upcoming opportunities or to volunteer for events.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-4">For more information about CIE events or to get involved:</p>
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:cieprogram@pes.edu" className="text-blue-600 hover:underline">cieprogram@pes.edu</a></p>
              <p className="text-gray-700"><strong>Office:</strong> CIE office at PES University's RR or EC Campus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}