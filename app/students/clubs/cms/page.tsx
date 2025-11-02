'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { Mail, Linkedin, Users, ArrowRight } from 'lucide-react';
import { SECTION_COLORS } from '@/styles/colors';

const studentsColors = SECTION_COLORS.students;

export default function CMSPage() {
  const cssVars = {
    '--cie-blue': studentsColors.primary,
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-white" style={cssVars}>
  {/* Hero */}
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <InteractiveHexagonBackground
          className="absolute inset-0 z-0"
          primaryColor={studentsColors.hero?.background}
          accentColor={studentsColors.hero?.hexagonAccent}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4" style={{ background: studentsColors.primary, color: 'white' }}>
              <Users className="h-4 w-4 mr-1" />
              Student Club
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Changemakers’ Society (<span style={{ color: studentsColors.accent }}>CMS</span>)
            </h1>

            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-6">
              A student-led sustainability initiative at PES University focused on making the campus cleaner, greener, and more sustainable.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild className="bg-white text-[var(--cie-blue)] px-6 py-3 rounded-xl font-semibold">
                <a href="mailto:cieprogram@pes.edu">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact CMS
                </a>
              </Button>

              <Button size="lg" className="border-white text-white hover:bg-white/10" asChild>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener" className="inline-flex items-center">
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
              <CardTitle>About CMS</CardTitle>
              <CardDescription>Changemakers’ Society is a student-led initiative focused on sustainability.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Founded in 2018 by environmentally conscious students, the Changemakers’ Society (CMS) is a student-led initiative at PES University focused on sustainability. With over 150 passionate members, CMS works to make the campus cleaner, greener, and more sustainable while raising awareness about environmental issues in the broader community. CMS’s notable contribution includes organizing the CIE Ignite S01 Grand Finale with over 20 volunteers, showcasing its event management capabilities.
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
              <p className="text-gray-700">To promote environmental consciousness and implement sustainable practices on campus and beyond, creating a positive impact through student-led initiatives.</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Activities</CardTitle>
              <CardDescription>What CMS does</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-3 text-gray-700">
                <li><strong>Waste Segregation and Management:</strong> Implementing systems to manage waste effectively on campus, reducing environmental impact.</li>
                <li><strong>StopIndiaSpitting Campaign:</strong> Partnering with Beautiful Bengaluru to raise awareness about public spitting impacts.</li>
                <li><strong>Net-Zero Water City Initiative:</strong> Collaborating with Altech Foundation to support Bangalore’s goal of becoming a Net-Zero Water city.</li>
                <li><strong>Social Media Awareness:</strong> Running campaigns on environmental issues, climate change, and sustainable living practices.</li>
                <li><strong>Events:</strong> Organizing the Zero Waste Carnival and leading CIE Ignite events with strong volunteer engagement.</li>
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
                <li>Organized the CIE Ignite S01 Grand Finale with over 20 volunteers.</li>
                <li>Grew to a community of over 150 members.</li>
                <li>Implemented waste segregation and management initiatives on campus.</li>
                <li>Contributed to city-wide campaigns like StopIndiaSpitting and Net-Zero Water efforts.</li>
                <li>Maintained an active social media presence to raise awareness on sustainability.</li>
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
              <p className="text-gray-700 mb-4">Join the Community: Reach out via CMS’s social media platforms or email <a className="text-[var(--cie-blue)] underline" href="mailto:cieprogram@pes.edu">cieprogram@pes.edu</a> to become a member.</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" style={{ color: studentsColors.primary }} />
                    Join on LinkedIn
                  </a>
                </Button>

                <Button asChild variant="outline">
                  <a href="mailto:cieprogram@pes.edu" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email cieprogram@pes.edu
                  </a>
                </Button>

                <Link href="/students/clubs" className="inline-flex items-center gap-2 text-[var(--cie-blue)] hover:underline ml-0 sm:ml-4 mt-2 sm:mt-0">
                  <ArrowRight className="h-4 w-4" style={{ color: studentsColors.primary }} />
                  Explore all clubs
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
