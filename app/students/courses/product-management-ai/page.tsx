"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/design-system';
import { SECTION_COLORS } from '@/styles/colors';
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
    details: (studentsColors.gradient?.stops?.[0]) || studentsColors.primary,
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
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
                Course Modules
              </TabsTrigger>

              <TabsTrigger
                value="details"
                style={{ ['--tab-color']: tabColors.details } as React.CSSProperties}
                className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
              >
                Course Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <h3 className="text-3xl font-bold mb-4">Product Management in the AI Era</h3>
              <p className="mt-3 text-lg text-gray-700 leading-relaxed">Welcome to Product Management in the AI Era, a 2-credit Special Topic course offered by the Centre for Innovation and Entrepreneurship (CIE) at PES University for 8th-semester students. This course introduces the critical skills of product management in the context of Artificial Intelligence (AI), empowering students to create impactful products that align technology, customer needs, and business goals. Open to all Engineering and Design students, it prepares participants for high-demand roles as Product Managers (PMs), often dubbed 'mini-CEOs,' in industries and startups worldwide.</p>

              <div className="mt-6">
                <h4 className="text-2xl font-bold mt-4 mb-3">Why Product Management in the AI Era?</h4>
                <p className="text-lg text-gray-700 leading-relaxed mt-2">In today's AI-driven technological landscape, engineering and design students must go beyond technical expertise to understand user needs and business contexts. This course equips students to:</p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mt-3 space-y-2">
                  <li>Develop high-quality products with market impact and revenue potential.</li>
                  <li>Think holistically about the product lifecycle, from ideation to launch.</li>
                  <li>Collaborate effectively in cross-functional teams to drive innovation.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-3">By mastering product management fundamentals, students gain a competitive edge in industries seeking PMs who can navigate the complexities of AI-led transformations, making data-driven decisions to enhance user satisfaction and business success.</p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
              </div>
            </TabsContent>

            <TabsContent value="objectives">
              <h3 className="text-3xl font-bold mb-4">Course Objectives</h3>
              <ul className="mt-3 list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Introduce core concepts of product management, including roles and responsibilities.</li>
                <li>Equip students with skills in user research, market analysis, and product roadmap development.</li>
                <li>Teach collaboration across engineering, design, and business teams using Agile methodologies.</li>
                <li>Enable students to measure product success using metrics and develop go-to-market strategies.</li>
              </ul>

              <h4 className="mt-6 text-2xl font-bold mb-3">Learning Outcomes</h4>
              <p className="text-lg text-gray-700 leading-relaxed">Upon completion, students will:</p>
              <ul className="mt-2 list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Understand and articulate the role of a product manager and the product lifecycle.</li>
                <li>Conduct user and market research to inform product decisions and create product roadmaps.</li>
                <li>Write product requirements and collaborate effectively with cross-functional teams.</li>
                <li>Apply Agile methods, use product metrics, and develop go-to-market plans for product launches.</li>
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
              </div>
            </TabsContent>

            <TabsContent value="modules">
              <h3 className="text-3xl font-bold mb-4">Course Structure & Modules</h3>
              <p className="mt-3 text-lg text-gray-700 leading-relaxed">This 2-credit course is designed for 8th-semester students and delivered in a hybrid format, primarily online (evenings or Saturdays) with 3-4 in-person sessions. The pedagogy emphasizes project-based learning, case discussions, and a final product definition/pitch project.</p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left table-auto border-collapse">
                  <thead>
                    <tr className="text-sm text-gray-600">
                      <th className="py-2 px-3">M#</th>
                      <th className="py-2 px-3">Module</th>
                      <th className="py-2 px-3">Topics</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-800">
                    {[
                      ['M1', 'Introduction to Product Management', 'Overview, Role of Product Manager, Relevance, Customers, Desirability, Markets'],
                      ['M2', 'Product Manager', 'Roles and Responsibilities, Distinctions with Project Management, Skills'],
                      ['M3', 'Product Life Cycle', 'Ideation, Creation, Launch, Measure, Grow, Mature, End of Life'],
                      ['M4', 'Product Management and AI', 'Impact of AI on Businesses, Reimagining Business with AI'],
                      ['M5', 'Product Ideation and Creation', 'Product Vision Definition, Customer Focus and Desirability'],
                      ['M6', 'Market/Customer Research', 'Primary and Secondary Research, Analyze Trends, Situations'],
                      ['M7', 'Product Roadmap', 'Elaborate Your Product, Create MVP'],
                      ['M8', 'Product Specifications', 'Product Requirements, User Experience'],
                      ['M9', 'Product Development', 'Product Engineering & Testing, Pricing and Commercials'],
                      ['M10', 'Product Launch', 'Launch Strategy, Gather Feedback'],
                      ['M11', 'Product Scaling', 'Scale the Product, Retain and Attract New Customers'],
                      ['M12', 'Additional Topics', 'Ethics in PM, New Technology Trends, Stakeholder Management'],
                      ['M13', 'Final Project', 'Project Presentation by Teams, Product Definition and Pitch']
                    ].map((row) => (
                      <tr key={row[0]} className="border-t hover:bg-gray-50 transition-colors">
                        <td className="py-2 px-3 align-top font-medium">{row[0]}</td>
                        <td className="py-2 px-3 align-top">{row[1]}</td>
                        <td className="py-2 px-3 align-top">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
              </div>
            </TabsContent>

            <TabsContent value="details">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold">Course Structure</h3>
                  <p className="mt-3 text-gray-700">This 2-credit course is designed for 8th-semester students and delivered in a hybrid format, primarily online (evenings or Saturdays) with 3-4 in-person sessions (Saturdays, subject to availability). The pedagogy emphasizes project-based learning, case discussions, and a final product definition/pitch project.</p>

                  <div className="mt-8">
                    <h4 className="text-xl font-semibold">Engagement and Logistics</h4>
                    <p className="mt-3 text-gray-700"><strong>Class Schedule:</strong> Online sessions (evenings or Saturdays) via MS Teams, with 3-4 in-person sessions (Saturdays, subject to student availability).</p>
                    <p className="mt-2 text-gray-700"><strong>Instructors:</strong> Taught by Prof. Sathya Prasad and a CIE Industry Mentor with extensive product management experience.</p>
                    <p className="mt-2 text-gray-700"><strong>Pedagogy:</strong> Project-based learning, case discussions, and a final product definition/pitch project.</p>
                    <p className="mt-2 text-gray-700"><strong>Student Volume:</strong> Open to all 8th-semester Engineering and Design students.</p>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-semibold">Unique Features</h4>
                    <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
                      <li><strong>AI-Focused Curriculum:</strong> Explores the impact of AI on product management and business innovation.</li>
                      <li><strong>Industry Expertise:</strong> Taught by Prof. Sathya Prasad and a seasoned CIE Industry Mentor.</li>
                      <li><strong>Project-Based Learning:</strong> Culminates in a final product pitch, simulating real-world PM responsibilities.</li>
                      <li><strong>Cross-Functional Skills:</strong> Emphasizes collaboration using Agile methodologies and data-driven decision-making.</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-semibold">References</h4>
                    <ul className="list-disc pl-6 text-gray-700 mt-2">
                      <li>Inspired: How to Create Tech Products Customers Love by Marty Cagan</li>
                      <li>The Lean Product Playbook by Dan Olsen</li>
                      <li>User Story Mapping by Jeff Patton</li>
                      <li>Industry reports on AI and product management (e.g., McKinsey, Gartner)</li>
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-1">
                  <div className="space-y-6 md:sticky md:top-24">
                    <aside className="border rounded-md bg-gray-50 p-4 shadow-sm">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-40 h-40 mb-3 overflow-hidden rounded-full bg-gray-200">
                          <Image src="/assets/raghavendra-deshmukh.png" alt="Raghavendra Deshmukh" width={160} height={160} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-xl font-semibold">Raghavendra Deshmukh</div>
                        <div className="text-sm text-gray-600">Instructor — Industry Mentor, CIE (PESU)</div>
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
                        <ul className="text-sm space-y-2 mt-2">
                          <li><strong>Experience:</strong> ~30 years across Software Product Engineering, Product Management, Team Building, and Engineering Leadership at SAP, Walmart, Google, Wipro and Booking.com.</li>
                          <li><strong>Products:</strong> On‑Prem and Cloud solutions in Supply Chain Logistics, Blockchain Track &amp; Trace, Enterprise Blockchain Platforms, Cloud Services (GCP with SAP), Data Analytics, ETL/ELT, MDM, and Pharma Clinical Trials.</li>
                          <li><strong>Startup Support:</strong> Mentored founders building Blockchain‑based Food Traceability for Milk/Meat, enabling regulatory‑compliant sourcing, end‑to‑end traceability, and sustainability programs.</li>
                          <li><strong>Expertise:</strong> Software Engineering, Analytics, Blockchain, GenAI (LLMs, RAG), Databases, and Cloud.</li>
                        </ul>
                      </div>
                    </aside>
                    
                    <aside className="border rounded-md bg-gray-50 p-4 shadow-sm">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-40 h-40 mb-3 overflow-hidden rounded-full bg-gray-200">
                          <Image src="/assets/sathya-prasad.png" alt="Prof Sathya Prasad" width={160} height={160} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-xl font-semibold">Prof Sathya Prasad</div>
                        <div className="text-sm text-gray-600">Co-Instructor — Director, CIE (PESU)</div>
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
                        <ul className="text-sm space-y-2 mt-2">
                          <li><strong>Experience:</strong> 30+ years including ~20 years at Intel in Product Management, Tech Innovation and R&amp;D.</li>
                          <li><strong>Leadership:</strong> Founding President, SEMI India; launched SOLARCON India; led product management for Intel's first server SoC and established Intel India's server development center.</li>
                          <li><strong>Academia:</strong> Founding Director of CIE at PES University; 1000+ students graduated; frameworks include Lean Startup, Effectuation, Design Thinking.</li>
                          <li><strong>Education:</strong> Executive Management (MIT Sloan), MS (VLSI) — Arizona State University.</li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}
