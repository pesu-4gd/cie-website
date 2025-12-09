"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/design-system';
import { SECTION_COLORS } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

const studentsColors = SECTION_COLORS.students;

export default function CieIgnitePage() {
  const tabColors = {
    overview: studentsColors.primary,
    pathways: studentsColors.secondary,
    engine: studentsColors.accent,
    timeline: (studentsColors.gradient?.stops && studentsColors.gradient.stops[0]) || studentsColors.primary,
  } as const;

  return (
    <div className="bg-white">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden" aria-hidden>
        <InteractiveHexagonBackground primaryColor={studentsColors.hero?.background} accentColor={studentsColors.hero?.hexagonAccent} className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-4">
            <Image src="/assets/cie-ignite-for-dark-bg.png" alt="CIE Ignite" width={160} height={48} className="object-contain" />
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">CIE Ignite — Where Solutions Take Flight</motion.h1>
          </div>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">The Solution Sprint turning validated problems into market-ready ventures. CIE Ignite transforms the most promising validated problems from CIE Spark into investment-ready ventures through an intensive, mentor-driven sprint.</p>

          <div className="mt-6 flex justify-center gap-3">
            <Link href="/students/courses">
              <Button variant="outline" className="border-white text-white">Back to Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="flex flex-wrap gap-2 mb-4 w-full">
                  <TabsTrigger
                    value="overview"
                    style={{ ['--tab-color']: tabColors.overview } as React.CSSProperties}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)] whitespace-nowrap"
                  >
                    Overview
                  </TabsTrigger>

                  <TabsTrigger
                    value="pathways"
                    style={{ ['--tab-color']: tabColors.pathways } as React.CSSProperties}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)] whitespace-nowrap"
                  >
                    Pathways
                  </TabsTrigger>

                  <TabsTrigger
                    value="engine"
                    style={{ ['--tab-color']: tabColors.engine } as React.CSSProperties}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)] whitespace-nowrap"
                  >
                    The Ignite Engine
                  </TabsTrigger>

                  <TabsTrigger
                    value="timeline"
                    style={{ ['--tab-color']: tabColors.timeline } as React.CSSProperties}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)] whitespace-nowrap"
                  >
                    Timeline & Partners
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <h3 className="text-2xl font-semibold">From Spark to Flame: The Solution Revolution</h3>
                  <p className="mt-3 text-gray-700">CIE Ignite is where validated problems meet scalable solutions. As the follow-up to CIE Spark, we take the most promising validated problems and transform them into investment-ready ventures through an intensive, mentor-driven sprint.</p>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold">The Complete Innovation Pipeline</h4>
                    <p className="text-gray-700 mt-2">Semester 3: CIE Spark → Problem Discovery &amp; Validation<br/>Semester 4: CIE Ignite → Solution Building &amp; Venture Launch</p>

                    <h4 className="text-lg font-semibold mt-6">What is CIE Ignite?</h4>
                    <p className="mt-3 text-gray-700">CIE Ignite is PES University's premier solution-building sprint that transforms the top validated problems from CIE Spark into functional prototypes and viable ventures. Over 16 intensive weeks, student teams receive mentorship, funding, and resources to build, test, and pitch their solutions to real investors.</p>
                  </div>
                </TabsContent>

                <TabsContent value="pathways">
                  <h3 className="text-2xl font-semibold">The Three Pathways to Ignite</h3>
                  <div className="mt-3 text-gray-700 space-y-4">
                    <div>
                      <h5 className="font-semibold">FastTrack — For CIE Spark Top Performers</h5>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Automatic qualification for Top 50 Spark teams</li>
                        <li>Head start with pre-validated problems and built teams</li>
                        <li>Priority access to mentors and resources</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold">Explorer Track — For New Problem-Solvers</h5>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Open to all students with compelling problem insights</li>
                        <li>Submit a "Problem Validation Lite" deck for entry</li>
                        <li>Bring fresh perspectives and new solutions</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold">Wildcard Track — Industry-Sponsored Challenges</h5>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Solve real-world problems from our corporate partners</li>
                        <li>Direct industry mentorship and networking</li>
                        <li>Potential internship and job opportunities</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="engine">
                  <h3 className="text-2xl font-semibold">The Ignite Engine: Four-Stage Acceleration</h3>
                  <div className="mt-3 text-gray-700 space-y-4">
                    <div>
                      <h6 className="font-semibold">Stage 0: Solution Ideation &amp; Team Formation</h6>
                      <p className="mt-1">Refine problem statements based on Spark feedback. Finalize multidisciplinary teams (3-6 members). Develop initial solution hypotheses.</p>
                    </div>

                    <div>
                      <h6 className="font-semibold">Stage 1: Prototype Development</h6>
                      <p className="mt-1">Build MVPs or pretotypes. Access to CIE's prototyping lab and tech resources. Weekly mentor check-ins and technical guidance.</p>
                    </div>

                    <div>
                      <h6 className="font-semibold">Stage 2: Business Model Validation</h6>
                      <p className="mt-1">Develop sustainable revenue models, customer acquisition strategies, and financial projections with unit economics.</p>
                    </div>

                    <div>
                      <h6 className="font-semibold">Stage 3: Investor Readiness &amp; Grand Finale</h6>
                      <p className="mt-1">Perfect pitch decks and demo videos. Practice with investor panels and mentors, culminating in the Grand Finale.</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold">The Ignite Reward System</h4>
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                      <li>Summer Internships with partner companies</li>
                      <li>Seed Funding for top ventures through PESU Venture Labs</li>
                      <li>Incubation Support including office space and legal services</li>
                      <li>Industry Connections with potential customers and partners</li>
                    </ul>

                    <h4 className="text-lg font-semibold mt-6">Student Impact</h4>
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                      <li>Technical execution: From idea to functional prototype</li>
                      <li>Business acumen: Financial modeling, marketing, operations</li>
                      <li>Leadership: Team management and stakeholder communication</li>
                      <li>Investor pitching: Articulate vision and traction effectively</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="timeline">
                  <h3 className="text-2xl font-semibold">Ignite by the Numbers &amp; S02 Timeline</h3>
                  <div className="mt-3 text-gray-700">
                    <ul className="list-disc pl-6">
                      <li>16 Weeks of Intensive Building</li>
                      <li>250+ Teams Competing Annually</li>
                      <li>20+ Industry Mentors</li>
                      <li>₹2L+ in Total Prizes &amp; Funding</li>
                    </ul>

                    <h5 className="font-semibold mt-4">CIE Ignite S02 Timeline (Jan-Apr 2026)</h5>
                    <div className="mt-2">
                      <p className="text-gray-700"><strong>January:</strong> Ignition Phase — Team onboarding, mentor matching, prototyping lab orientation.</p>
                      <p className="text-gray-700 mt-2"><strong>February:</strong> Build Phase — Pretotype development and user testing; weekly mentor reviews.</p>
                      <p className="text-gray-700 mt-2"><strong>March:</strong> Scale Phase — Business model optimization and pitch polishing.</p>
                      <p className="text-gray-700 mt-2"><strong>April:</strong> Launch Phase — Demo Day and Grand Finale.</p>
                    </div>

                    <h5 className="font-semibold mt-6">Industry & Partner Tiers</h5>
                    <p className="mt-2 text-gray-700">Ignition Partner, Acceleration Partner and Growth Partner tiers provide mentoring, naming rights, and early access to venture pipelines.</p>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <h4 className="text-lg font-semibold">Success Stories from Ignite</h4>
                <p className="text-gray-700 mt-2">GlowGenics (S01 Winner): Biotech solutions for sustainable healthcare. BotZilla (S01 Runner-up): AI-powered customer service automation. Team Netra (S01 2nd Runner-up): Computer vision for accessibility. Authfy (S01): Cybersecurity and digital identity platform.</p>

                <div className="mt-6 flex items-center gap-3">
                  <Link href="/students/courses/eie-2"><Button className="bg-white text-blue-700">Go to EIE — Part 2</Button></Link>
                  <Link href="/students/courses/cie-spark"><Button variant="outline" className="border-gray-300">See CIE Spark</Button></Link>
                  <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                </div>
              </div>
            </div>

            <aside className="md:col-span-1 bg-gray-50 p-4 rounded-lg border border-gray-100 md:sticky md:top-24 md:self-start max-h-[60vh] overflow-auto">
              <h5 className="font-semibold">Apply to Ignite</h5>
              <p className="text-sm text-gray-700 mt-2">Students: apply with your validated problem or prototype. Industry partners: sponsor a challenge or mentor teams.</p>

              <div className="mt-4 text-sm text-gray-700">
                <div className="font-medium">Contact</div>
                <div className="mt-1"><a href="mailto:cieprogram@pes.edu" className="text-indigo-600">cieprogram@pes.edu</a></div>
                <div className="mt-2 text-xs text-gray-500">Visit: CIE Office, PES University</div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
