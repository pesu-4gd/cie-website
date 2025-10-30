"use client";
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

export default function ProductManagementAIPage() {
  const tabColors = {
    overview: studentsColors.primary,
    objectives: studentsColors.secondary,
    modules: studentsColors.accent,
    logistics: (studentsColors.gradient?.stops && studentsColors.gradient.stops[0]) || studentsColors.primary,
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground primaryColor={studentsColors.hero?.background} accentColor={studentsColors.hero?.hexagonAccent} className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-4">
            <Image src="/assets/CIE Logo White Short.svg" alt="CIE logo" width={120} height={48} className="object-contain" />
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Product Management in the AI Era — CIE</motion.h1>
          </div>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">A 2-credit special topic course for 8th-semester Engineering and Design students. Project-based pedagogy with industry mentorship focusing on product management for AI-enabled products.</p>

          <div className="mt-6 flex justify-center gap-3">
            <Link href="/students/courses">
              <Button variant="outline" className="text-white border-white">Back to Courses</Button>
            </Link>
            <Link href="/students/programs">
              <Button className="bg-white text-blue-700">Related Programs <ArrowRight className="w-4 h-4 ml-2"/></Button>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="grid grid-cols-4 gap-2 mb-4">
                  <TabsTrigger
                    value="overview"
                    style={{ ['--tab-color']: tabColors.overview } as React.CSSProperties}
                    className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
                  >
                    Overview
                  </TabsTrigger>

                  <TabsTrigger
                    value="objectives"
                    style={{ ['--tab-color']: tabColors.objectives } as React.CSSProperties}
                    className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
                  >
                    Course Objectives
                  </TabsTrigger>

                  <TabsTrigger
                    value="modules"
                    style={{ ['--tab-color']: tabColors.modules } as React.CSSProperties}
                    className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
                  >
                    Modules
                  </TabsTrigger>

                  <TabsTrigger
                    value="logistics"
                    style={{ ['--tab-color']: tabColors.logistics } as React.CSSProperties}
                    className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
                  >
                    Logistics & Instructors
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <h3 className="text-2xl font-semibold">Product Management in the AI Era</h3>
                  <p className="mt-3 text-gray-700">Welcome to Product Management in the AI Era — a 2-credit special topic course delivered by the Centre for Innovation and Entrepreneurship (CIE) at PES University. This course equips students with product thinking, user research, and go-to-market skills tailored for AI-enabled products.</p>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold">Why Product Management in the AI Era?</h4>
                    <p className="text-gray-700 mt-2">In today’s AI-driven landscape, engineers and designers must pair technical skill with product judgment. This course helps participants think holistically about product lifecycle, collaborate across teams, and make data-driven decisions that create market impact.</p>
                  </div>
                </TabsContent>

                <TabsContent value="objectives">
                  <h3 className="text-2xl font-semibold">Course Objectives</h3>
                  <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
                    <li>Introduce core concepts of product management and the PM role.</li>
                    <li>Teach user research, market analysis, and roadmap development.</li>
                    <li>Practice collaboration with engineering, design and business teams using Agile methods.</li>
                    <li>Measure product success using metrics and develop go-to-market strategies.</li>
                  </ul>

                  <h4 className="mt-6 text-lg font-semibold">Learning Outcomes</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-2">
                    <li>Articulate the PM role and product lifecycle.</li>
                    <li>Conduct user and market research to inform product decisions.</li>
                    <li>Create product requirements, roadmaps and MVP definitions.</li>
                    <li>Apply Agile practices and use product metrics to iterate.</li>
                  </ul>
                </TabsContent>

                <TabsContent value="modules">
                  <h3 className="text-2xl font-semibold">Course Structure & Modules</h3>
                  <p className="mt-3 text-gray-700">The course is organized into 13 modules delivered as weekly 2-hour sessions with project-based assessments and a final product pitch.</p>

                  <div className="mt-4 space-y-3 text-gray-700">
                    <div>
                      <h5 className="font-semibold">M1: Introduction to Product Management</h5>
                      <p className="mt-1">Overview, role of the PM, market & desirability.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">M4: Product Management and the AI World</h5>
                      <p className="mt-1">Impact of AI on business and product strategy.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">M7: Product Roadmap & MVP</h5>
                      <p className="mt-1">Roadmapping, prioritization and defining an MVP.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">M13: Final Project</h5>
                      <p className="mt-1">Team product definition and pitch presentation.</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="logistics">
                  <h3 className="text-2xl font-semibold">Engagement & Logistics</h3>
                  <div className="mt-3 text-gray-700 space-y-3">
                    <p>Format: Hybrid — weekly 2-hour online sessions (evenings or Saturdays) with 3-4 in-person Saturdays. Project-based learning with guest industry talks.</p>
                    <p>Eligibility: 8th-semester Engineering and Design students. Open enrollment subject to seat limits.</p>
                    <p>Assessment: Team projects, participation, and a final product pitch.</p>
                  </div>

                  <h4 className="mt-4 text-lg font-semibold">References</h4>
                  <ul className="mt-2 list-disc pl-6 text-gray-700">
                    <li>Inspired — Marty Cagan</li>
                    <li>The Lean Product Playbook — Dan Olsen</li>
                    <li>User Story Mapping — Jeff Patton</li>
                  </ul>
                </TabsContent>
              </Tabs>
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
                    <p className="text-sm">Experience: 30+ years; leadership in product management, tech innovation and R&amp;D. Founding Director of CIE and mentor in industry-academia initiatives. Education: Executive Management (MIT Sloan), MS (VLSI) — Arizona State University.</p>
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
                          <td><a className="text-indigo-600" href="mailto:raghavendra.deshmukh@pes.edu">raghavendra.deshmukh@pes.edu</a></td>
                        </tr>
                        <tr>
                          <td className="align-top pr-2 font-medium text-gray-600">LinkedIn</td>
                          <td><a className="text-indigo-600" href="https://www.linkedin.com/in/raghavendra-deshmukh" target="_blank" rel="noopener noreferrer">Raghavendra Deshmukh</a></td>
                        </tr>
                      </tbody>
                    </table>

                    <h6 className="mt-4 font-semibold">Professional summary</h6>
                    <p className="text-sm">Experience: ~30 years across Software Product Engineering, Product Management, Team Building, and Engineering Leadership at SAP, Walmart, Google, Wipro and Booking.com. Products: On‑Prem and Cloud solutions in Supply Chain Logistics, Blockchain Track &amp; Trace, Enterprise Blockchain Platforms, Cloud Services (GCP with SAP), Data Analytics, ETL/ELT, MDM, and Pharma Clinical Trials.</p>
                  </div>
                </aside>
              </div>
              </div>
          </div>

              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <Link href="/students/courses/eie-1"><Button className="bg-white text-blue-700">See EIE — Part 1</Button></Link>
                  <Link href="/students/courses/cie-spark"><Button variant="outline" className="border-gray-300">See CIE Spark</Button></Link>
                  <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                </div>
              </div>
        </section>
      </main>
    </div>
  );
}
