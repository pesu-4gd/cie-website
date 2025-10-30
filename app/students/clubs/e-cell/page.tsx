'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { Mail, Linkedin, Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { SECTION_COLORS } from '@/styles/colors';

const studentsColors = SECTION_COLORS.students;

export default function ECellPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <InteractiveHexagonBackground className="absolute inset-0 z-0" primaryColor={studentsColors.primary} accentColor={studentsColors.accent} />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0.35)]" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 bg-white/80 text-[rgba(0,0,0,0.75)] border border-white/30"> 
              <Users className="h-4 w-4 mr-1" />
              Student Club
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Entrepreneurship Cell <span className="text-indigo-700">(E-Cell)</span>
            </h1>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              A student-driven organization at PES University focused on developing an entrepreneurial mindset through events, workshops, and community engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild className="bg-transparent border border-white text-white hover:bg-white/10">
                <a href="mailto:cieprogram@pes.edu">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact E-Cell
                </a>
              </Button>

              <Button size="lg" asChild className="bg-indigo-700 text-white hover:bg-indigo-800">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Visit LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <section>
          <Card>
            <CardHeader>
              <CardTitle>About E-Cell</CardTitle>
              <CardDescription>The Entrepreneurship Cell (E-Cell) is a student-driven organization at PES University.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                The Entrepreneurship Cell (E-Cell) is a student-driven organization at PES University, led by passionate leaders like Samarth S Rao and Shrishti A. With a community of over 60 members, E-Cell is dedicated to cultivating an entrepreneurial mindset, emphasizing that entrepreneurship is about self-discovery, innovation, and creating positive change in the community. It provides a platform for students to develop business acumen, leadership skills, and startup ideas, inspiring them to follow in the footsteps of visionaries like Bill Gates and Mark Zuckerberg.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To inspire students to embrace entrepreneurship as a way of life, fostering innovation, leadership, and community impact through dynamic platforms for learning and networking.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Activities</CardTitle>
              <CardDescription>Key activities organised by E-Cell</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-3 text-gray-700">
                <li><strong>E-Summit:</strong> An annual flagship event connecting students with entrepreneurs, investors, and industry leaders for inspiration and networking.</li>
                <li><strong>Competitions:</strong> Events like Shark Tank and EndGame – Crisis Committee for Business, challenging students to pitch ideas and solve real-world business problems.</li>
                <li><strong>Workshops:</strong> Sessions such as The Gutsy Entrepreneur, in collaboration with the Rotaract Club, focusing on creating Business Model Canvases, the foundation of startups.</li>
                <li><strong>Webinars:</strong> Interactive sessions with established entrepreneurs sharing success stories and insights to motivate students.</li>
                <li><strong>Social Media Engagement:</strong> Active platforms delivering educational content on business news, investing, startup diaries, personal finance, and company backstories.</li>
                <li><strong>Partnerships:</strong> Contributions to Aatmatrisha through marketing and sponsorship efforts, and collaborations with external organizations.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Successfully organized Meet, Greet & Connect, a networking event that spread the culture of entrepreneurship.</li>
                <li>Partnered with the Rotaract Club for The Gutsy Entrepreneur, showcasing remarkable student ideas.</li>
                <li>Played a pivotal role in marketing and securing sponsors for Aatmatrisha, enhancing its scale and impact.</li>
                <li>Built a diverse community of over 60 members, including hustlers, visionaries, designers, content creators, and researchers.</li>
                <li>Gained significant traction through an active social media presence, engaging business enthusiasts with informative content.</li>
                <li>Contributed to CIE’s entrepreneurial ecosystem, complementing programs like the mandatory EIE courses and CIE Ignite Ideathon.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>How to Get Involved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Join the Community: Connect via E-Cell’s LinkedIn page or email <a className="text-indigo-700 underline" href="mailto:cieprogram@pes.edu">cieprogram@pes.edu</a> to become a member.</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    Join on LinkedIn
                  </a>
                </Button>

                <Button asChild variant="outline">
                  <a href="mailto:cieprogram@pes.edu" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email cieprogram@pes.edu
                  </a>
                </Button>

                <Link href="/courses/eie-1">
                  <a className="inline-flex items-center gap-2 text-indigo-700 hover:underline ml-0 sm:ml-4 mt-2 sm:mt-0">
                    <ArrowRight className="h-4 w-4" />
                    Learn about related programs (EIE)
                  </a>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
