"use client";
// Note: metadata removed because this file is a client component ("use client").
// Next.js only allows `export const metadata` from server components.
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

export default function EIE1Page() {
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
            <Image src="/assets/cie-spark-for-dark-bg.png" alt="CIE Spark" width={160} height={48} className="object-contain" />
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Innovation and Entrepreneurship at PES University: EIE and CIE Spark</motion.h1>
          </div>
          {/* <p className="mt-4 text-base md:text-lg">Welcome to CIE — the Centre for Innovation and Entrepreneurship at PES University. At CIE we empower students to become the innovators and entrepreneurs of tomorrow. Our programs blend theoretical knowledge with practical experience, preparing students and industry professionals to thrive in a rapidly evolving world. The Essentials of Innovation and Entrepreneurship (EIE) course provides a foundational understanding of entrepreneurial principles, while CIE Spark, our flagship Ideathon, offers a platform to apply these skills in real-world challenges.</p> */}

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
          {/* <h3 className="text-2xl font-semibold">Welcome to CIE</h3>
          <p className="mt-3 text-gray-700">At PES University's Centre for Innovation and Entrepreneurship (CIE), we empower students to become the innovators and entrepreneurs of tomorrow. Our programs blend theoretical knowledge with practical experience, preparing students and industry professionals to thrive in a rapidly evolving world. The Essentials of Innovation and Entrepreneurship (EIE) course provides a foundational understanding of entrepreneurial principles, while CIE Ignite, our flagship Ideathon, offers a platform to apply these skills in real-world challenges.</p> */}

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
              <h3 className="text-2xl font-semibold">Welcome to CIE</h3>
              <p className="mt-3 text-gray-700">At PES University's Centre for Innovation and Entrepreneurship (CIE), we empower students to become the innovators and entrepreneurs of tomorrow. Our programs blend theoretical knowledge with practical experience, preparing students and industry professionals to thrive in a rapidly evolving world. The Essentials of Innovation and Entrepreneurship (EIE) course provides a foundational understanding of entrepreneurial principles, while CIE Spark, our flagship Ideathon, offers a platform to apply these skills in real-world challenges.</p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mt-2">Essentials of Innovation and Entrepreneurship (EIE)</h4>
                <p className="text-gray-700 mt-2">In an era defined by rapid technological advancements (e.g., Generative AI, Machine Learning), environmental challenges (e.g., climate change, sustainability), and economic shifts, entrepreneurial thinking is essential for success in any field. EIE empowers you to:</p>

                <ul className="list-disc pl-6 text-gray-700 mt-3">
                  <li>Identify and seize opportunities in dynamic markets.</li>
                  <li>Develop creative solutions to real-world problems.</li>
                  <li>Understand the business context of your technical or creative work.</li>
                </ul>

                <p className="text-gray-700 mt-3">By making EIE mandatory, PES University ensures that all students, from Engineering to Design to Law, gain a competitive edge through interdisciplinary learning and practical experience.</p>

                <h5 className="mt-4 font-medium">What is EIE?</h5>
                <p className="text-gray-700">EIE is a two-part, pan-university course designed to foster an innovation and entrepreneurship (I&amp;E) mindset:</p>

                <p className="mt-2 font-medium">Part I (3rd Semester, 2 credits):</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Entrepreneurial mindset and opportunity identification.</li>
                  <li>Business acumen (market analysis, financial basics).</li>
                  <li>Soft skills (communication, collaboration, problem-solving).</li>
                </ul>

                <p className="mt-3 font-medium">Part II (4th Semester, 2 credits):</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Customer discovery and validation.</li>
                  <li>Prototyping and digital business models.</li>
                  <li>Scaling strategies and legal fundamentals.</li>
                </ul>

                <p className="text-gray-700 mt-3">The course integrates the CIE Spark Ideathon, a hands-on startup challenge where students develop and pitch ideas, gaining real-world experience and mentorship.</p>

                <h5 className="mt-4 font-medium">Benefits of EIE</h5>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                  <li>Practical Experience: Engage in projects, case studies, and the CIE Spark Ideathon to apply your learnings.</li>
                  <li>Expert Instruction: Learn from experienced faculty like Prof. Sathya Prasad and industry mentors such as Mr. Raghavendra Deshmukh, Prasanna Chandran, Jayaram MG.</li>
                  <li>Interdisciplinary Networking: Collaborate with peers from diverse disciplines, fostering innovative ideas.</li>
                  <li>Career Readiness: Develop skills valued by employers, including creativity, leadership, and strategic thinking.</li>
                  <li>Access to CIE Ecosystem: Unlock resources like makerspaces, funding through PESU Venture Labs, and international programs like the Berkeley Haas Global Access Program (BHGAP).</li>
                </ul>

                <h5 className="mt-4 font-medium">Learning Outcomes</h5>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                  <li>Apply entrepreneurial principles in various contexts.</li>
                  <li>Understand the idea-to-market process.</li>
                  <li>Gain insights into technologies shaping industries.</li>
                  <li>Develop foundational business skills.</li>
                  <li>Connect with peers for future collaborations.</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="objectives">
              <h3 className="text-2xl font-semibold">Course Objectives</h3>
              <p className="mt-3 text-gray-700">The EIE course aims to:</p>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Foster an entrepreneurial mindset and skillset.</li>
                <li>Enable students to explore innovation in startups, corporations, or small businesses.</li>
                <li>Introduce transformative technologies like AI and sustainability.</li>
                <li>Build business acumen and soft skills for career success.</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4">Key Topics & Learning Outcomes</h4>
              <p className="text-gray-700 mt-2">The course covers foundational topics and outcomes designed to prepare students for ideation, validation, and early-stage startup activity.</p>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Opportunity identification and customer discovery</li>
                <li>Business model thinking and prototyping</li>
                <li>Basic startup finance and pitching</li>
                <li>AI and sustainability as drivers for innovation</li>
              </ul>
            </TabsContent>

            <TabsContent value="references">
              <h3 className="text-2xl font-semibold">References</h3>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Technology Ventures: From Idea to Enterprise by McGraw Hill</li>
                <li>PES University ‘CIE Level1’ Course - Getting Started With Entrepreneurship</li>
                <li>VentureLab (Entrepreneurial Skillset and Mindset)</li>
                <li>European Union (EU) Entrepreneurship Competencies</li>
              </ul>
            </TabsContent>

            <TabsContent value="details">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main content */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold">EIE Part 1 — Modules</h3>
                  <div className="overflow-x-auto mt-3">
                    <table className="w-full text-left table-auto border-collapse">
                      <thead>
                        <tr className="text-sm text-gray-600">
                          <th className="py-2 px-3">Module</th>
                          <th className="py-2 px-3">Topics</th>
                          <th className="py-2 px-3">Sub-Topics</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-gray-800">
                        {[
                          ['M1', 'Introduction to Innovation & Entrepreneurship', "What is I&E, self-awareness, types of entrepreneurship, India startup landscape"],
                          ['M2', 'Cultivating an Entrepreneurial Mindset', 'Creativity, adaptability, failure, opportunity identification, Founder Talk: Alaap / Guru.AI'],
                          ['M3', 'Human-centered Innovation', 'Design Thinking (Prof. Chitra), Effectuation: 5 Principles'],
                          ['M4', 'Idea-to-Market', 'Idea-to-Market process, opportunity fundamentals, ethics, Founder Talk: Pocket Coach'],
                          ['M5', 'Team Building in Startups', 'Team importance, leadership, collaboration, Founder Talk: Sonic Scape'],
                          ['M6', 'Value Proposition & IP', 'Creating value, protecting intellectual property'],
                          ['M7', 'Business Model Canvas', 'Business model components, case studies'],
                          ['M8', 'Selling Your Idea & Pitching', 'Market understanding, pitching, IP protection, Founder Talk: Consuma.AI'],
                          ['M9', 'Finance for Startups - I', 'Financial fundamentals, funding sources, Founder Talks: Pradyun Rao, Druva Murali'],
                          ['M10', 'Finance for Startups - II', 'Advanced startup finance, Founder Talks: Dhruva G, Rahul B & Rahul Jaikrishna'],
                          ['M11', 'AI: Reimagining How We Innovate', 'AI challenges and opportunities, guest speakers'],
                          ['M12', 'Developing Your Entrepreneurial Action Plan', 'Course wrap-up, next steps, Founder Talk: CIE Alum & Industry Innovators']
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
                    <p className="mt-3 text-gray-700">Schedule: 2 hours weekly, Wednesdays 6-8 PM, primarily via MS Teams with some in-person sessions.</p>
                    <p className="mt-2 text-gray-700">Faculty: Led by CIE, with contributions from faculty across departments, including:</p>
                    <ul className="list-disc pl-6 text-gray-700 mt-2">
                      <li>Engineering: Dr. Keshavan K</li>
                      <li>CSE: Dr. Mamatha H R, Prof. Prafullata, Prof. Vadiraja</li>
                      <li>Design: Prof. Chitra Vishwanathan, Prof. Chinmay, Prof. Divyadarshan</li>
                      <li>Management, Law, and Others: Faculty from BBA, Architecture, MCA, and Performing Arts.</li>
                    </ul>

                    <h4 className="text-xl font-semibold mt-6">Unique Features</h4>
                    <ul className="list-disc pl-6 text-gray-700 mt-2">
                      <li>Founder Talks: Insights from entrepreneurs like Adithya and Anirudh (Guru.AI), Achintya Krishna (Pocket Coach), and Ananya Mungara (Sonic Scape).</li>
                      <li>Interdisciplinary Approach: Collaboration across all PESU departments.</li>
                      <li>Practical Focus: Emphasis on real-world applications like design thinking, business model canvas, and startup finance.</li>
                    </ul>

                    <div className="mt-8 flex items-center gap-3">
                      <Link href="/students/courses/eie-2"><Button className="bg-white text-blue-700">Go to EIE — Part 2</Button></Link>
                      <Link href="/students/courses/cie-spark"><Button variant="outline" className="border-gray-300">Learn about CIE Spark</Button></Link>
                      <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                    </div>
                  </div>
                </div>

                {/* Right column: infoboxes (sticky on md+) */}
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
                        <p className="text-sm">Experience: 30+ years including ~20 years at Intel in Product Management, Tech Innovation and R&amp;D. Leadership: Founding President, SEMI India; launched SOLARCON India; led product management for Intel’s first server SoC and established Intel India’s server development center. As founding Director of CIE, guided Lean Startup, Effectuation and Design Thinking frameworks; mentored and consulted across national and international programs. Education: Executive Management (MIT Sloan), MS (VLSI) — Arizona State University.</p>
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
                        <p className="text-sm">Experience: ~30 years across Software Product Engineering, Product Management, Team Building, and Engineering Leadership at SAP, Walmart, Google, Wipro and Booking.com. Products: On‑Prem and Cloud solutions in Supply Chain Logistics, Blockchain Track &amp; Trace, Enterprise Blockchain Platforms, Cloud Services (GCP with SAP), Data Analytics, ETL/ELT, MDM, and Pharma Clinical Trials. Mentored founders and supported startup productization and sustainability initiatives. Expertise: Software Engineering, Analytics, Blockchain, GenAI (LLMs, RAG), Databases, and Cloud.</p>
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
