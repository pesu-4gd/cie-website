"use client";
// EIE Part II — mirrored structure from EIE Part I with Tabs, per-tab color, infoboxes and navigation
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/design-system';
import { SECTION_COLORS } from '@/styles/colors';
import { ArrowRight } from 'lucide-react';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

const studentsColors = SECTION_COLORS.students;

export default function EIE2Page() {
  const tabColors = {
    welcome: studentsColors.primary,
    objectives: studentsColors.secondary,
    references: studentsColors.accent,
    details: (studentsColors.gradient?.stops && studentsColors.gradient.stops[0]) || studentsColors.primary,
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden" aria-hidden>
        <InteractiveHexagonBackground primaryColor={studentsColors.hero?.background} accentColor={studentsColors.hero?.hexagonAccent} className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-4">
            <Image src="/assets/cie-ignite-for-dark-bg.png" alt="CIE Spark" width={160} height={48} className="object-contain" />
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Essentials of Innovation &amp; Entrepreneurship — Part II (EIE Part II)</motion.h1>
          </div>

          {/* <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">Welcome to Essentials of Innovation and Entrepreneurship (EIE) Part II, a 2-credit course offered in the 4th semester at PES University. Spearheaded by the Centre for Innovation and Entrepreneurship (CIE), this pan-university program builds on EIE Part I, deepening students’ entrepreneurial mindset and skills and integrating the CIE Ignite Ideathon.</p> */}

          <div className="mt-6 flex justify-center gap-3">
            <Link href="/students/courses">
              <Button variant="outline" className="border-white text-white">Back to Courses</Button>
            </Link>
            <Link href="/students/programs">
              <Button className="bg-white text-blue-700">Explore Related Programs <ArrowRight className="w-4 h-4 ml-2"/></Button>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <Tabs defaultValue="welcome">
            <TabsList className="grid grid-cols-4 gap-2 mb-4">
              <TabsTrigger
                value="welcome"
                style={{ ['--tab-color']: tabColors.welcome } as React.CSSProperties}
                className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
              >
                Welcome
              </TabsTrigger>

              <TabsTrigger
                value="objectives"
                style={{ ['--tab-color']: tabColors.objectives } as React.CSSProperties}
                className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
              >
                Course Objectives
              </TabsTrigger>

              <TabsTrigger
                value="references"
                style={{ ['--tab-color']: tabColors.references } as React.CSSProperties}
                className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
              >
                References
              </TabsTrigger>

              <TabsTrigger
                value="details"
                style={{ ['--tab-color']: tabColors.details } as React.CSSProperties}
                className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
              >
                Course Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="welcome">
              <h3 className="text-2xl font-semibold">Essentials of Innovation and Entrepreneurship (EIE) Part II</h3>
              <p className="mt-3 text-gray-700">Welcome to Essentials of Innovation and Entrepreneurship (EIE) Part II, a 2-credit course offered in the 4th semester at PES University. Spearheaded by the Centre for Innovation and Entrepreneurship (CIE), this pan-university program builds on EIE Part I, deepening students’ entrepreneurial mindset and skills and integrating the CIE Ignite Ideathon. 
                Open to students from all disciplines, this course integrates the CIE Ignite Ideathon and features insights from startup founders and industry experts to prepare participants for dynamic careers.</p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mt-2">Why EIE Part II?</h4>
                <p className="text-gray-700 mt-2">EIE Part II equips students to:</p>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                  <li>Identify and seize opportunities in dynamic markets.</li>
                  <li>Develop innovative solutions and navigate the idea-to-market process.</li>
                  <li>Cultivate an innovation and entrepreneurship (I&amp;E) mindset applicable to any career path.</li>
                </ul>
                <p className="text-gray-700 mt-3">As a pan-university course, EIE Part II fosters interdisciplinary collaboration across Engineering, Design, Management, Law and more.</p>
              </div>
            </TabsContent>

            <TabsContent value="objectives">
              <h3 className="text-2xl font-semibold">Course Objectives</h3>
              <p className="mt-3 text-gray-700">EIE Part II aims to:</p>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Deepen students’ I&amp;E mindset and practical skills for starting ventures.</li>
                <li>Enable exploration of I&amp;E in startups, corporate entrepreneurship, and MSMEs.</li>
                <li>Enhance understanding of transformative technologies and their entrepreneurial implications.</li>
                <li>Build advanced business acumen (market research, financials, legal fundamentals).</li>
                <li>Strengthen soft skills for professional life beyond university.</li>
              </ul>
            </TabsContent>

            <TabsContent value="references">
              <h3 className="text-2xl font-semibold">References</h3>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Technology Ventures: From Idea to Enterprise by McGraw Hill</li>
                <li>PES University ‘CIE Level 2’ Course - Getting Started With Entrepreneurship</li>
                <li>VentureLab (Entrepreneurial Skillset and Mindset)</li>
                <li>European Union (EU) Entrepreneurship Competencies</li>
              </ul>
            </TabsContent>

            <TabsContent value="details">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold">Course Outline &amp; Modules</h3>
                  <div className="overflow-x-auto mt-3">
                    <table className="w-full text-left table-auto border-collapse">
                      <thead>
                        <tr className="text-sm text-gray-600">
                          <th className="py-2 px-3">M#</th>
                          <th className="py-2 px-3">Theme / Topics</th>
                          <th className="py-2 px-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-gray-800">
                        {[
                          ['1', 'CIE Ignite (Ideathon) + Recap', 'Introduce CIE Ignite, recap EIE-I highlights, Lean Canvas, S-curve / Innovation Waves'],
                          ['2', 'Customer Discovery Overview', 'Napkin pitch, Opportunity Statement, Customer Development Model, CDM Manifesto'],
                          ['3', 'Customer Discovery Process and Interview Techniques', 'CDP, hypotheses, interview techniques, questionnaires'],
                          ['4', 'Testable and Measurable Hypotheses', 'Team idea review, leadership styles, building effective teams'],
                          ['5', 'Customer Interview Best Practices', 'Review best practices for customer interviews'],
                          ['6', 'Digital Marketing', 'Technology-enabled business models, e-commerce, social media strategies'],
                          ['7', 'Market Research 201', 'Customer segments, Market Positioning (TAM/SAM)'],
                          ['8', 'Finance 201', 'Advanced startup finance building on EIE Part I'],
                          ['9', 'Legal 101', 'Business structures, IP rights, regulatory compliance'],
                          ['10', 'Digital Business Models', 'Comprehensive business plans, strategic analysis tools'],
                          ['A', 'F2F Sessions (CIE Ignite Ideathon)', 'In-person sessions for Ideathon stages']
                        ].map((row) => (
                          <tr key={row[0] as string} className="border-t hover:bg-gray-50 transition-colors">
                            <td className="py-2 px-3 align-top font-medium">{row[0]}</td>
                            <td className="py-2 px-3 align-top">{row[1]}</td>
                            <td className="py-2 px-3 align-top">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-semibold">Engagement and Logistics</h4>
                    <p className="mt-3 text-gray-700">Class Schedule: 2 hours weekly, hybrid (MS Teams + occasional in-person sessions), with CIE Ignite contributing 10% of the grade.</p>
                    <p className="mt-2 text-gray-700">Faculty: Led by CIE — Prof. Sathya Prasad (RR Campus) and Prof. Lakshmeesha (EC Campus), with support from departments across PESU.</p>

                    <h4 className="text-xl font-semibold mt-6">Assessment and Grading</h4>
                    <p className="mt-2 text-gray-700">CIE Ignite Ideathon: 10% • 2 Internal Assessments (ISAs): 20% each • End-Semester Assessment (ESA): 50%</p>

                    <div className="mt-8 flex items-center gap-3">
                      <Link href="/students/courses/eie-1"><Button className="bg-white text-blue-700">Go to EIE — Part 1</Button></Link>
                      <Link href="/students/courses/cie-ignite"><Button variant="outline" className="border-gray-300">Learn about CIE Ignite</Button></Link>
                      <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1">
                  <div className="space-y-6 md:sticky md:top-24">
                    <aside className="border rounded-md bg-gray-50 p-4 shadow-sm">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-40 h-40 mb-3 overflow-hidden rounded-full bg-gray-200">
                          <Image src="/assets/sathya-prasad.png" alt="Prof Sathya Prasad" width={160} height={160} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-xl font-semibold">Prof Sathya Prasad</div>
                        <div className="text-sm text-gray-600">Instructor — Director, CIE (PESU)</div>
                      </div>

                      <div className="mt-4 text-sm text-gray-700">
                        <table className="w-full text-sm text-gray-700">
                          <tbody>
                            <tr>
                              <td className="align-top pr-2 font-medium text-gray-600" style={{width: '28%'}}>Email</td>
                              <td><a className="text-indigo-600" href="mailto:sathya.prasad@pes.edu">sathya.prasad@pes.edu</a></td>
                            </tr>
                            <tr>
                              <td className="align-top pr-2 font-medium text-gray-600">LinkedIn</td>
                              <td><a className="text-indigo-600" href="https://www.linkedin.com/in/sathya-prasad" target="_blank" rel="noopener noreferrer">Sathya Prasad</a></td>
                            </tr>
                          </tbody>
                        </table>

                        <h6 className="mt-4 font-semibold">Professional summary</h6>
                        <p className="text-sm">Experience: 30+ years including ~20 years at Intel in Product Management, Tech Innovation and R&amp;D. Leadership roles across industry and academia; founding Director of CIE; mentored many early-stage teams. Education: MIT Sloan (Executive Management), MS (VLSI) — Arizona State University.</p>
                      </div>
                    </aside>

                    <aside className="border rounded-md bg-gray-50 p-4 shadow-sm">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-40 h-40 mb-3 overflow-hidden rounded-full bg-gray-200">
                          <Image src="/assets/raghavendra-deshmukh.png" alt="Raghavendra Deshmukh" width={160} height={160} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-xl font-semibold">Raghavendra Deshmukh</div>
                        <div className="text-sm text-gray-600">Co-Instructor — Industry Mentor, CIE (PESU)</div>
                      </div>

                      <div className="mt-4 text-sm text-gray-700">
                        <table className="w-full text-sm text-gray-700">
                          <tbody>
                            <tr>
                              <td className="align-top pr-2 font-medium text-gray-600" style={{width: '28%'}}>Email</td>
                              <td><a className="text-indigo-600" href="mailto:raghavendradeshmukh@pes.edu">raghavendradeshmukh@pes.edu</a></td>
                            </tr>
                            <tr>
                              <td className="align-top pr-2 font-medium text-gray-600">LinkedIn</td>
                              <td><a className="text-indigo-600" href="https://www.linkedin.com/in/raghavendradeshmukh" target="_blank" rel="noopener noreferrer">Raghavendra Deshmukh</a></td>
                            </tr>
                          </tbody>
                        </table>

                        <h6 className="mt-4 font-semibold">Professional summary</h6>
                        <p className="text-sm">Experience: ~30 years across Software Product Engineering, Product Management, Team Building and Engineering Leadership. Mentored founders and supported startup productization initiatives. Expertise: Software Engineering, Analytics, Blockchain, GenAI, Databases and Cloud.</p>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}
