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

export default function CieSparkPage() {
  const tabColors = {
    overview: studentsColors.primary,
    process: studentsColors.secondary,
    gains: studentsColors.accent,
    partners: (studentsColors.gradient?.stops && studentsColors.gradient.stops[0]) || studentsColors.primary,
  } as const;

  return (
    <div className="bg-white">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden" aria-hidden>
        <InteractiveHexagonBackground primaryColor={studentsColors.hero?.background} accentColor={studentsColors.hero?.hexagonAccent} className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-4">
            <Image src="/assets/cie-spark-for-dark-bg.png" alt="CIE Spark" width={160} height={48} className="object-contain" />
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">CIE Spark — Where Innovation Begins</motion.h1>
          </div>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">A mandatory Problem Validation Sprint for PES University students — CIE Spark teaches problem discovery, rigorous validation, and evidence-based decision making before any solution is built.</p>

          <div className="mt-6 flex justify-center gap-3">
            <Link href="/students/courses">
              <Button size="lg" variant="outline" className="border-white text-white rounded-xl uppercase font-semibold">Back to Courses</Button>
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
                    value="process"
                    style={{ ['--tab-color']: tabColors.process } as React.CSSProperties}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)] whitespace-nowrap"
                  >
                    Process
                  </TabsTrigger>

                  <TabsTrigger
                    value="gains"
                    style={{ ['--tab-color']: tabColors.gains } as React.CSSProperties}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)] whitespace-nowrap"
                  >
                    Student Gains
                  </TabsTrigger>

                  <TabsTrigger
                    value="partners"
                    style={{ ['--tab-color']: tabColors.partners } as React.CSSProperties}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)] whitespace-nowrap"
                  >
                    Partners & Timeline
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <h3 className="text-2xl font-semibold">The Program That Flips Innovation Upside Down</h3>
                  <p className="mt-3 text-gray-700">Most innovation fails by solving the wrong problem. CIE Spark is a mandatory Problem Validation Sprint that trains PES University students to find, validate, and fall in love with problems before building solutions. Spark focuses exclusively on problem discovery and validation — solution-building is reserved for the follow-up program, CIE Ignite.</p>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold">Spark → Ignite: The Complete Innovation Journey</h4>
                    <p className="text-gray-700 mt-2">Semester 3: CIE Spark — Master problem discovery and validation. Semester 4: CIE Ignite — Build and pitch solutions for validated problems.</p>
                  </div>
                </TabsContent>

                <TabsContent value="process">
                  <h3 className="text-2xl font-semibold">The Spark Process</h3>
                  <div className="mt-3 text-gray-700">
                    <h5 className="font-semibold">Phase 1: Problem Hunting</h5>
                    <p className="mt-2">Individual students submit raw problem observations from daily life to build a large database of real-world pain points. Emphasis is on observing, not assuming.</p>

                    <h5 className="font-semibold mt-4">Phase 2: Team Formation</h5>
                    <p className="mt-2">Multidisciplinary squads form via a "Problem Dating" event. Teams of 3–6 form around problems, not pre-existing friendships.</p>

                    <h5 className="font-semibold mt-4">Phase 3: Validation Sprint</h5>
                    <p className="mt-2">Evidence over opinions: teams conduct 50+ customer interviews, quantify market size (TAM/SAM/SOM), analyze competitors, and build a Problem Validation Deck using the TIPSC framework.</p>
                  </div>
                </TabsContent>

                <TabsContent value="gains">
                  <h3 className="text-2xl font-semibold">What Students Gain</h3>
                  <ul className="list-disc pl-6 mt-3 text-gray-700">
                    <li>Customer discovery and interview techniques</li>
                    <li>Market research and sizing</li>
                    <li>Data-driven decision making and evidence-based pitching</li>
                    <li>Portfolio-ready projects and verified skills</li>
                  </ul>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold">Tangible Rewards</h4>
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                      <li>Top 50 Teams: Published in "CIE Book of Validated Problems"</li>
                      <li>Top 10 Teams: Pitch at Spark Finale + Digital certificates</li>
                      <li>Top 3 Teams: Cash prizes + guaranteed CIE Ignite entry + internships</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="partners">
                  <h3 className="text-2xl font-semibold">Industry Partners & Timeline</h3>
                  <p className="mt-3 text-gray-700">Spark provides industry partners with access to a curated talent pipeline and strategic insights derived from thousands of student observations. Partners can submit challenge tracks and work with top Spark teams for deep validation research.</p>

                  <div className="mt-4 grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold">By the numbers</h5>
                      <ul className="list-disc pl-6 mt-2 text-gray-700">
                        <li>4,000+ Students Trained Annually</li>
                        <li>3,000+ Problem Hypotheses Generated</li>
                        <li>700+ Multidisciplinary Teams Formed</li>
                        <li>55+ Curated Problem Statements</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold">Program timeline</h5>
                      <p className="text-gray-700 mt-2">August - December: CIE Spark (Phase 1 → Phase 3). December: Grand Finale & Top 50 announcement. January - April: CIE Ignite — solution-building and Demo Day in April.</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <h4 className="text-lg font-semibold">Success Stories</h4>
                <p className="text-gray-700 mt-2">Student ventures born from CIE include PocketCoach, Epicure Robotics, SmartChakra, Aalap.ai, Zeru, Draft42 and Authify. Industry partners like Intel, MathWorks and Agropak engage with Spark teams for strategic innovation.</p>

                <div className="mt-6 flex items-center gap-3">
                  <Link href="/students/courses/eie-1"><Button className="bg-white text-blue-700">See EIE Part I</Button></Link>
                  <Link href="/students/courses/eie-2"><Button variant="outline" className="border-gray-300">See EIE Part II</Button></Link>
                  <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                </div>
              </div>
            </div>

            <aside className="md:col-span-1 bg-gray-50 p-4 rounded-lg border border-gray-100 md:sticky md:top-24 md:self-start max-h-[60vh] overflow-auto">
              <h5 className="font-semibold">Apply to Spark</h5>
              <p className="text-sm text-gray-700 mt-2">Submit a one-page problem statement and early validation evidence. Applications accepted each semester.</p>
              {/* <div className="mt-4">
                <Link href="/students/cie-apply">
                  <Button className={`${studentsColors.gradient.tailwind} text-white`}>Apply to Spark</Button>
                </Link>
              </div> */}

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
