"use client";
// Note: metadata removed because this file is a client component ("use client").
// Next.js only allows `export const metadata` from server components.
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

export default function EIE1Page() {
  const tabColors = {
    welcome: studentsColors.primary,
    objectives: studentsColors.secondary,
    references: studentsColors.accent,
    details: (studentsColors.gradient?.stops && studentsColors.gradient.stops[0]) || studentsColors.primary,
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          {/* <h3 className="text-2xl font-semibold">Welcome to CIE</h3>
          <p className="mt-3 text-gray-700">At PES University's Centre for Innovation and Entrepreneurship (CIE), we empower students to become the innovators and entrepreneurs of tomorrow. Our programs blend theoretical knowledge with practical experience, preparing students and industry professionals to thrive in a rapidly evolving world. The Essentials of Innovation and Entrepreneurship (EIE) course provides a foundational understanding of entrepreneurial principles, while CIE Ignite, our flagship Ideathon, offers a platform to apply these skills in real-world challenges.</p> */}

          <Tabs defaultValue="welcome">
            <TabsList className="grid grid-cols-5 gap-2 mb-4">
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
                value="details"
                style={{ ['--tab-color']: tabColors.details } as React.CSSProperties}
                className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
              >
                Course Details
              </TabsTrigger>

              <TabsTrigger
                value="cie-spark"
                style={{ ['--tab-color']: tabColors.references } as React.CSSProperties}
                className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
              >
                CIE Spark
              </TabsTrigger>

              <TabsTrigger
                value="references"
                style={{ ['--tab-color']: tabColors.references } as React.CSSProperties}
                className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
              >
                References
              </TabsTrigger>
            </TabsList>

            <TabsContent value="welcome">
              <h3 className="text-3xl font-bold mb-4">Welcome to CIE</h3>
              <p className="mt-3 text-lg text-gray-700 leading-relaxed">At PES University's Centre for Innovation and Entrepreneurship (CIE), we empower students to become the innovators and entrepreneurs of tomorrow. Our programs blend theoretical knowledge with practical experience, preparing students and industry professionals to thrive in a rapidly evolving world. The Essentials of Innovation and Entrepreneurship (EIE) course provides a foundational understanding of entrepreneurial principles, while CIE Spark, our flagship Ideathon, offers a platform to apply these skills in real-world challenges.</p>

              <div className="mt-6">
                <h4 className="text-2xl font-bold mt-4 mb-3">Essentials of Innovation and Entrepreneurship (EIE)</h4>
                <p className="text-lg text-gray-700 leading-relaxed mt-2">In an era defined by rapid technological advancements (e.g., Generative AI, Machine Learning), environmental challenges (e.g., climate change, sustainability), and economic shifts, entrepreneurial thinking is essential for success in any field. EIE empowers you to:</p>

                <ul className="list-disc pl-6 text-lg text-gray-700 mt-3 space-y-2">
                  <li>Identify and seize opportunities in dynamic markets.</li>
                  <li>Develop creative solutions to real-world problems.</li>
                  <li>Understand the business context of your technical or creative work.</li>
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed mt-3">By making EIE mandatory, PES University ensures that all students, from Engineering to Design to Law, gain a competitive edge through interdisciplinary learning and practical experience.</p>

                <h5 className="mt-6 text-xl font-bold">What is EIE?</h5>
                <p className="text-lg text-gray-700 leading-relaxed">EIE is a two-part, pan-university course designed to foster an innovation and entrepreneurship (I&amp;E) mindset:</p>

                <p className="mt-4 text-lg font-semibold">Part I (3rd Semester, 2 credits):</p>
                <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                  <li>Entrepreneurial mindset and opportunity identification.</li>
                  <li>Business acumen (market analysis, financial basics).</li>
                  <li>Soft skills (communication, collaboration, problem-solving).</li>
                </ul>

                <p className="mt-4 text-lg font-semibold">Part II (4th Semester, 2 credits):</p>
                <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                  <li>Customer discovery and validation.</li>
                  <li>Prototyping and digital business models.</li>
                  <li>Scaling strategies and legal fundamentals.</li>
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed mt-4">The course integrates the CIE Spark Ideathon, a hands-on startup challenge where students develop and pitch ideas, gaining real-world experience and mentorship.</p>

                <h5 className="mt-6 text-xl font-bold">Benefits of EIE</h5>
                <ul className="list-disc pl-6 text-lg text-gray-700 mt-3 space-y-2">
                  <li>Practical Experience: Engage in projects, case studies, and the CIE Spark Ideathon to apply your learnings.</li>
                  <li>Expert Instruction: Learn from experienced faculty like Prof. Sathya Prasad and industry mentors such as Mr. Raghavendra Deshmukh, Prasanna Chandran, Jayaram MG.</li>
                  <li>Interdisciplinary Networking: Collaborate with peers from diverse disciplines, fostering innovative ideas.</li>
                  <li>Career Readiness: Develop skills valued by employers, including creativity, leadership, and strategic thinking.</li>
                  <li>Access to CIE Ecosystem: Unlock resources like makerspaces, funding through PESU Venture Labs, and international programs like the Berkeley Haas Global Access Program (BHGAP).</li>
                </ul>

                <h5 className="mt-6 text-xl font-bold">Learning Outcomes</h5>
                <ul className="list-disc pl-6 text-lg text-gray-700 mt-3 space-y-2">
                  <li>Apply entrepreneurial principles in various contexts.</li>
                  <li>Understand the idea-to-market process.</li>
                  <li>Gain insights into technologies shaping industries.</li>
                  <li>Develop foundational business skills.</li>
                  <li>Connect with peers for future collaborations.</li>
                </ul>

                <div className="mt-8 flex items-center gap-3">
                  <Link href="/students/courses/eie-2"><Button className="bg-white text-blue-700">Go to EIE — Part 2</Button></Link>
                  <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="objectives">
              <h3 className="text-3xl font-bold mb-4">Course Objectives</h3>
              <p className="mt-3 text-lg text-gray-700 leading-relaxed">The EIE course aims to:</p>

              <ul className="list-disc pl-6 text-lg text-gray-700 mt-3 space-y-2">
                <li>Foster an entrepreneurial mindset and skillset.</li>
                <li>Enable students to explore innovation in startups, corporations, or small businesses.</li>
                <li>Introduce transformative technologies like AI and sustainability.</li>
                <li>Build business acumen and soft skills for career success.</li>
              </ul>

              <h4 className="text-2xl font-bold mt-6 mb-3">Key Topics & Learning Outcomes</h4>
              <p className="text-lg text-gray-700 leading-relaxed mt-2">The course covers foundational topics and outcomes designed to prepare students for ideation, validation, and early-stage startup activity.</p>

              <ul className="list-disc pl-6 text-lg text-gray-700 mt-3 space-y-2">
                <li>Opportunity identification and customer discovery</li>
                <li>Business model thinking and prototyping</li>
                <li>Basic startup finance and pitching</li>
                <li>AI and sustainability as drivers for innovation</li>
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <Link href="/students/courses/eie-2"><Button className="bg-white text-blue-700">Go to EIE — Part 2</Button></Link>
                <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
              </div>
            </TabsContent>

            <TabsContent value="cie-spark">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">CIE Spark: Where Innovation Begins</h3>
                  <p className="text-xl italic text-gray-600">The Idea Validation Sprint for Tomorrow's Founders</p>
                  <p className="text-lg text-gray-600 mt-2">August - December</p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-2">CIE Spark empowers student innovators taking EIE-1 course, The Idea Validation Sprint for Tomorrow's Founders</p>
                </div>

                {/* Program Highlights Section */}
                <div className="rounded-2xl p-8" style={{ background: `linear-gradient(to right, ${studentsColors.primary}15, ${studentsColors.accent}15)` }}>
                  <h4 className="text-2xl font-bold mb-6 text-center text-gray-900">Program Highlights</h4>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 border-2 shadow-sm" style={{ borderColor: studentsColors.accent }}>
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full" style={{ backgroundColor: `${studentsColors.accent}20` }}>
                          <svg className="w-8 h-8" style={{ color: studentsColors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                      </div>
                      <h5 className="text-lg font-bold mb-2 text-center text-gray-900">Problem Hunting</h5>
                      <p className="text-sm text-gray-700 text-center">Individual students become detectives</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 shadow-sm" style={{ borderColor: studentsColors.primary }}>
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full" style={{ backgroundColor: `${studentsColors.primary}20` }}>
                          <svg className="w-8 h-8" style={{ color: studentsColors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                      </div>
                      <h5 className="text-lg font-bold mb-2 text-center text-gray-900">Team Formation</h5>
                      <p className="text-sm text-gray-700 text-center">Multidisciplinary squads unite around passion</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 shadow-sm" style={{ borderColor: studentsColors.accent }}>
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full" style={{ backgroundColor: `${studentsColors.accent}20` }}>
                          <svg className="w-8 h-8" style={{ color: studentsColors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                      </div>
                      <h5 className="text-lg font-bold mb-2 text-center text-gray-900">Validation Sprint</h5>
                      <p className="text-sm text-gray-700 text-center">Evidence over opinions</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 shadow-sm" style={{ borderColor: studentsColors.primary }}>
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full" style={{ backgroundColor: `${studentsColors.primary}20` }}>
                          <svg className="w-8 h-8" style={{ color: studentsColors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                      </div>
                      <h5 className="text-lg font-bold mb-2 text-center text-gray-900">Attractive Awards</h5>
                      <p className="text-sm text-gray-700 text-center">Top 50 Teams: Published in "CIE Book of Validated Problems"</p>
                    </div>
                  </div>
                </div>

                {/* Program Structure Flow */}
                <div className="rounded-2xl p-8" style={{ background: `linear-gradient(to bottom right, ${studentsColors.primary}10, ${studentsColors.accent}10)` }}>
                  <h4 className="text-2xl font-bold mb-8 text-center text-gray-900">Program Structure</h4>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    {/* Phase 1 */}
                    <div className="relative">
                      <div className="text-center mb-2">
                        <span className="text-xl font-bold text-gray-900">Phase 1</span>
                      </div>
                      <div className="bg-white rounded-xl p-6 border-2 shadow-md w-48" style={{ borderColor: studentsColors.accent }}>
                        <p className="text-center font-semibold text-gray-900 mb-1">Individual</p>
                        <p className="text-center font-semibold text-gray-900">Detectives</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:block">
                      <svg className="w-8 h-8" style={{ color: studentsColors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* Phase 2 */}
                    <div className="relative">
                      <div className="text-center mb-2">
                        <span className="text-xl font-bold text-gray-900">Phase 2</span>
                      </div>
                      <div className="bg-white rounded-xl p-6 border-2 shadow-md w-48" style={{ borderColor: studentsColors.accent }}>
                        <p className="text-center font-semibold text-gray-900 mb-1">Problem</p>
                        <p className="text-center font-semibold text-gray-900">Dating</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:block">
                      <svg className="w-8 h-8" style={{ color: studentsColors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* Phase 3 */}
                    <div className="relative">
                      <div className="text-center mb-2">
                        <span className="text-xl font-bold text-gray-900">Phase 3</span>
                      </div>
                      <div className="bg-white rounded-xl p-6 border-2 shadow-md w-48" style={{ borderColor: studentsColors.accent }}>
                        <p className="text-center font-semibold text-gray-900 mb-1">Idea</p>
                        <p className="text-center font-semibold text-gray-900">Validation</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:block">
                      <svg className="w-8 h-8" style={{ color: studentsColors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* Finale */}
                    <div className="relative">
                      <div className="rounded-xl p-6 border-2 shadow-md w-48" style={{ backgroundColor: studentsColors.primary, borderColor: studentsColors.primary }}>
                        <p className="text-center font-bold text-2xl text-white">Finale</p>
                      </div>
                    </div>
                  </div>

                  {/* Spark Logo/Branding */}
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center justify-center">
                      <Image 
                        src="/assets/cie-spark-for-white-bg.png" 
                        alt="CIE Spark Logo" 
                        width={200} 
                        height={200}
                        className="h-75 w-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-6" style={{ background: `linear-gradient(to right, ${studentsColors.primary}15, ${studentsColors.accent}15)` }}>
                  <h4 className="text-2xl font-bold mb-3 flex items-center text-gray-900">
                    <span className="text-3xl mr-3"></span>
                    The Program That Flips Innovation Upside Down
                  </h4>
                  <p className="text-lg text-gray-700 leading-relaxed mb-3">Most innovation fails by solving the wrong problem. CIE Spark changes that.</p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-3">We're not another ideathon. We're a mandatory <strong>Problem Validation Sprint</strong> that teaches 4,000+ second-year students to find, validate, and fall in love with problems before building solutions. This is where real innovation begins.</p>
                  
                  <div className="bg-white rounded-xl p-4 mt-4 border-2" style={{ borderColor: studentsColors.primary }}>
                    <p className="text-lg font-semibold mb-2 text-gray-900">Spark → Ignite: The Complete Innovation Journey</p>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li><strong>Semester 3: CIE Spark</strong> - Master problem discovery and validation</li>
                      <li><strong>Semester 4: CIE Ignite</strong> - Build and pitch solutions for validated problems</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <span className="text-3xl mr-3"></span>
                    Why CIE Spark Exists
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 border-2" style={{ backgroundColor: `${studentsColors.secondary}10`, borderColor: studentsColors.secondary }}>
                      <h5 className="text-xl font-bold mb-3 text-gray-900">The Problem with Traditional Innovation</h5>
                      <ul className="space-y-2 text-base text-gray-700">
                        <li>• Students jump to solutions without validating real needs</li>
                        <li>• Brilliant minds work on ideas with no market demand</li>
                        <li>• Industry misses access to raw, evidence-based talent</li>
                      </ul>
                    </div>

                    <div className="rounded-xl p-6 border-2" style={{ backgroundColor: `${studentsColors.primary}10`, borderColor: studentsColors.primary }}>
                      <h5 className="text-xl font-bold mb-3 text-gray-900">Our Radical Approach</h5>
                      <p className="text-base text-gray-700 leading-relaxed mb-3">We enforce a semester-long focus exclusively on Problem Discovery and Validation. Solution-building is explicitly forbidden until a problem is rigorously proven to be:</p>
                      <ul className="space-y-2 text-base text-gray-700">
                        <li><strong>Frequent</strong> - Affects many people regularly</li>
                        <li><strong>Intense</strong> - Causes significant pain or cost</li>
                        <li><strong>Worth-Solving</strong> - Has economic or social impact</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <span className="text-3xl mr-3"></span>
                    The Spark Process: Three Phases of Validation
                  </h4>

                  <div className="space-y-4">
                    <div className="border-l-4 pl-6 py-3 rounded-r-xl" style={{ borderColor: studentsColors.primary, backgroundColor: `${studentsColors.primary}10` }}>
                      <h5 className="text-xl font-bold mb-2 text-gray-900">Phase 1: Problem Hunting</h5>
                      <ul className="space-y-1 text-base text-gray-700">
                        <li>• Individual students become detectives</li>
                        <li>• Submit raw problem observations from daily life</li>
                        <li>• Build a database of 3,000+ real-world pain points</li>
                        <li>• Learn to observe, not assume</li>
                      </ul>
                    </div>

                    <div className="border-l-4 pl-6 py-3 rounded-r-xl" style={{ borderColor: studentsColors.secondary, backgroundColor: `${studentsColors.secondary}10` }}>
                      <h5 className="text-xl font-bold mb-2 text-gray-900">Phase 2: Team Formation</h5>
                      <ul className="space-y-1 text-base text-gray-700">
                        <li>• Multidisciplinary squads unite around passion</li>
                        <li>• "Problem Dating" event to match with complementary skills</li>
                        <li>• Teams of 3-6 from different departments</li>
                        <li>• Built around problems, not pre-existing friendships</li>
                      </ul>
                    </div>

                    <div className="border-l-4 pl-6 py-3 rounded-r-xl" style={{ borderColor: studentsColors.accent, backgroundColor: `${studentsColors.accent}10` }}>
                      <h5 className="text-xl font-bold mb-2 text-gray-900">Phase 3: Validation Sprint</h5>
                      <p className="text-base text-gray-700 mb-2 italic">Evidence over opinions</p>
                      <ul className="space-y-1 text-base text-gray-700">
                        <li>• Conduct 50+ customer interviews</li>
                        <li>• Quantify market size (TAM/SAM/SOM)</li>
                        <li>• Analyze competitive landscape</li>
                        <li>• Master TIPSC framework</li>
                        <li>• Build a "Problem Validation Deck"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-6" style={{ background: `linear-gradient(to right, ${studentsColors.primary}10, ${studentsColors.secondary}10)` }}>
                  <h4 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <span className="text-3xl mr-3"></span>
                    What Students Gain
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-xl font-bold mb-2">Build In-Demand Skills</h5>
                      <ul className="grid md:grid-cols-2 gap-2 text-base text-gray-700">
                        <li>• Customer discovery and interview techniques</li>
                        <li>• Market research and sizing</li>
                        <li>• Data-driven decision making</li>
                        <li>• Evidence-based pitching</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-xl font-bold mb-2">Tangible Rewards</h5>
                      <ul className="space-y-2 text-base text-gray-700">
                        <li><strong>Top 50 Teams:</strong> Published in "CIE Book of Validated Problems"</li>
                        <li><strong>Top 10 Teams:</strong> Pitch at Spark Finale + Digital certificates</li>
                        <li><strong>Top 3 Teams:</strong> Cash prizes + guaranteed CIE Ignite entry + internships</li>
                        <li><strong>All Participants:</strong> Portfolio-ready project + verifiable skills</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-xl font-bold mb-2">Career Acceleration</h5>
                      <ul className="space-y-1 text-base text-gray-700">
                        <li>• Stand out to employers with proven problem-solving skills</li>
                        <li>• Build a network with industry mentors</li>
                        <li>• Fast-track to CIE Ignite solution-building phase</li>
                        <li>• Potential to launch real ventures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <span className="text-3xl mr-3"></span>
                    Why Industry Partners Love Spark
                  </h4>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="rounded-xl p-5 border-2" style={{ backgroundColor: `${studentsColors.primary}08`, borderColor: studentsColors.primary }}>
                      <h5 className="text-lg font-bold mb-3 text-gray-900">Access Curated Talent Pipeline</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Identify critical thinkers before they become founders</li>
                        <li>• Engage with evidence-based innovators</li>
                        <li>• Recruit pre-vetted problem-solvers</li>
                      </ul>
                    </div>

                    <div className="rounded-xl p-5 border-2" style={{ backgroundColor: `${studentsColors.secondary}08`, borderColor: studentsColors.secondary }}>
                      <h5 className="text-lg font-bold mb-3 text-gray-900">Strategic Intelligence</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Access "Book of Validated Problems" - 20+ investable opportunities</li>
                        <li>• Insights from 4,000+ student observations</li>
                        <li>• Stay ahead of emerging trends</li>
                      </ul>
                    </div>

                    <div className="rounded-xl p-5 border-2" style={{ backgroundColor: `${studentsColors.accent}08`, borderColor: studentsColors.accent }}>
                      <h5 className="text-lg font-bold mb-3 text-gray-900">Partnership Opportunities</h5>
                      <p className="text-sm text-gray-700 mb-2"><strong>Problem Challenge Track:</strong> Submit your real-world business challenges. Top Spark teams will:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Conduct deep validation research</li>
                        <li>• Provide evidence-based insights</li>
                        <li>• Become your "innovation squad" in CIE Ignite</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-white rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${studentsColors.primary} 0%, ${studentsColors.secondary} 100%)` }}>
                  <h4 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="text-3xl mr-3"></span>
                    Spark by the Numbers
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">4,000+</div>
                      <div className="text-base">Students Trained Annually</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">3,000+</div>
                      <div className="text-base">Problem Hypotheses Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">700+</div>
                      <div className="text-base">Multidisciplinary Teams Formed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">55+</div>
                      <div className="text-base">Curated Problem Statements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">100%</div>
                      <div className="text-base">Practical, Experiential Learning</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <span className="text-3xl mr-3"></span>
                    Program Timeline
                  </h4>

                  <div className="space-y-3">
                    <div className="border-l-4 p-4 rounded-r-xl" style={{ backgroundColor: `${studentsColors.primary}10`, borderColor: studentsColors.primary }}>
                      <h5 className="text-lg font-bold mb-2 text-gray-900">August - December: CIE Spark</h5>
                      <ul className="space-y-1 text-base text-gray-700">
                        <li>• Phase 1: Individual Problem Hunting</li>
                        <li>• Phase 2: Multidisciplinary Team Formation</li>
                        <li>• Phase 3: Validation Sprint & Dossier Creation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 p-4 rounded-r-xl" style={{ backgroundColor: `${studentsColors.accent}10`, borderColor: studentsColors.accent }}>
                      <h5 className="text-lg font-bold mb-2 text-gray-900">December: Grand Finale</h5>
                      <p className="text-base text-gray-700">Top 50 Announcement & Recognition</p>
                    </div>

                    <div className="border-l-4 p-4 rounded-r-xl" style={{ backgroundColor: `${studentsColors.secondary}10`, borderColor: studentsColors.secondary }}>
                      <h5 className="text-lg font-bold mb-2 text-gray-900">January - April: CIE Ignite</h5>
                      <ul className="space-y-1 text-base text-gray-700">
                        <li>• Top Spark teams build solutions for validated problems</li>
                        <li>• Pretotyping, mentorship, and investor pitching</li>
                      </ul>
                    </div>

                    <div className="border-l-4 p-4 rounded-r-xl" style={{ backgroundColor: `${studentsColors.primary}10`, borderColor: studentsColors.primary }}>
                      <h5 className="text-lg font-bold mb-2 text-gray-900">April: Demo Day</h5>
                      <p className="text-base text-gray-700">Final pitches and showcase</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <span className="text-3xl mr-3"></span>
                    Success Stories
                  </h4>

                  <div className="rounded-2xl p-6" style={{ background: `linear-gradient(to right, ${studentsColors.primary}08, ${studentsColors.secondary}08)` }}>
                    <h5 className="text-xl font-bold mb-4 text-gray-900">Student Ventures Born from CIE</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h6 className="font-bold text-gray-900 mb-1">PocketCoach</h6>
                        <p className="text-sm text-gray-700">An AI-powered conversational upskilling platform.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h6 className="font-bold text-gray-900 mb-1">Epicure Robotics</h6>
                        <p className="text-sm text-gray-700">A leader in automated robotic food preparation.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h6 className="font-bold text-gray-900 mb-1">SmartChakra</h6>
                        <p className="text-sm text-gray-700">Developing sustainable electric mobility solutions.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h6 className="font-bold text-gray-900 mb-1">Aalap.ai</h6>
                        <p className="text-sm text-gray-700">Leveraging voice AI for mental wellness and healthcare.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h6 className="font-bold text-gray-900 mb-1">Zeru</h6>
                        <p className="text-sm text-gray-700">Built a universal reputation system for the post-modern agentic era.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h6 className="font-bold text-gray-900 mb-1">Draft42</h6>
                        <p className="text-sm text-gray-700">A deeptech design & product studio building industry-specific AI solutions.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h6 className="font-bold text-gray-900 mb-1">Authify</h6>
                        <p className="text-sm text-gray-700">Revolutionizing product authentication with NFC-based verification.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl p-6 mt-4" style={{ background: `linear-gradient(to right, ${studentsColors.secondary}10, ${studentsColors.accent}10)` }}>
                    <h5 className="text-xl font-bold mb-3 text-gray-900">Industry Impact</h5>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <p className="font-semibold text-gray-900">Intel</p>
                        <p className="text-xs text-gray-600">Hardware innovation</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <p className="font-semibold text-gray-900">MathWorks</p>
                        <p className="text-xs text-gray-600">AI/ML applications</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <p className="font-semibold text-gray-900">Agropak</p>
                        <p className="text-xs text-gray-600">Sustainable packaging</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <p className="font-semibold text-gray-900">InzpireU</p>
                        <p className="text-xs text-gray-600">Mentorship platforms</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <p className="font-semibold text-gray-900">Param Foundation</p>
                        <p className="text-xs text-gray-600">Discovery space</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-6" style={{ background: `linear-gradient(to right, ${studentsColors.primary}10, ${studentsColors.accent}10)` }}>
                  <h4 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <span className="text-3xl mr-3"></span>
                    Get Involved
                  </h4>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-bold mb-3 text-gray-900">Students</h5>
                      <ul className="space-y-2 text-base text-gray-700">
                        <li><strong>Email:</strong> <a href="mailto:cieprogram@pes.edu" className="text-blue-600 hover:underline">cieprogram@pes.edu</a></li>
                        <li><strong>Visit:</strong> CIE Office, PES University</li>
                        <li><strong>Follow:</strong> CIE PESU on social media</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-bold mb-3 text-gray-900">Industry Partners</h5>
                      <p className="text-base text-gray-700 italic mb-3">"Spark gives us a live feed of emerging market needs and connects us with talent that thinks differently. It's our most reliable innovation radar." <br />— InzpireU</p>
                      <Button style={{ background: `linear-gradient(to right, ${studentsColors.primary}, ${studentsColors.secondary})` }} className="text-white">
                        <a href="mailto:cieprogram@pes.edu">Become a Partner</a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-white rounded-2xl p-8 text-center" style={{ background: `linear-gradient(135deg, ${studentsColors.primary} 0%, ${studentsColors.secondary} 100%)` }}>
                  <h4 className="text-3xl font-bold mb-4 flex items-center justify-center">
                    <span className="text-4xl mr-3"></span>
                    Ready to Find Problems Worth Solving?
                  </h4>
                  <p className="text-lg mb-6 max-w-3xl mx-auto">CIE Spark isn't just a program—it's the foundation of a more innovative future. Whether you're a student ready to develop entrepreneurial muscles or an industry leader looking for fresh perspectives, your journey starts here.</p>
                  <p className="text-2xl font-bold">Because the world doesn't need more ideas. It needs more validated problems.</p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <Link href="/students/courses/eie-2"><Button className="bg-white text-blue-700">Go to EIE — Part 2</Button></Link>
                  <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="references">
              <h3 className="text-3xl font-bold mb-4">References</h3>
              <ul className="list-disc pl-6 text-lg text-gray-700 mt-3 space-y-2">
                <li>Technology Ventures: From Idea to Enterprise by McGraw Hill</li>
                <li>PES University 'CIE Level1' Course - Getting Started With Entrepreneurship</li>
                <li>VentureLab (Entrepreneurial Skillset and Mindset)</li>
                <li>European Union (EU) Entrepreneurship Competencies</li>
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <Link href="/students/courses/eie-2"><Button className="bg-white text-blue-700">Go to EIE — Part 2</Button></Link>
                <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
              </div>
            </TabsContent>

            <TabsContent value="details">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main content */}
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold mb-4">EIE Part 1 — Modules</h3>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left table-auto border-collapse">
                      <thead>
                        <tr className="text-base font-semibold text-gray-700">
                          <th className="py-3 px-4">Module</th>
                          <th className="py-3 px-4">Topics</th>
                          <th className="py-3 px-4">Sub-Topics</th>
                        </tr>
                      </thead>
                      <tbody className="text-base text-gray-800">
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
                            <td className="py-3 px-4 align-top font-medium">{row[0]}</td>
                            <td className="py-3 px-4 align-top">{row[1]}</td>
                            <td className="py-3 px-4 align-top">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-2xl font-bold mb-3">Engagement and Logistics</h4>
                    <p className="mt-3 text-lg text-gray-700 leading-relaxed">Schedule: 2 hours weekly, Wednesdays 6-8 PM, primarily via MS Teams with some in-person sessions.</p>
                    <p className="mt-3 text-lg text-gray-700 leading-relaxed">Faculty: Led by CIE, with contributions from faculty across departments, including:</p>
                    <ul className="list-disc pl-6 text-lg text-gray-700 mt-3 space-y-1">
                      <li>Engineering: Dr. Keshavan K</li>
                      <li>CSE: Dr. Mamatha H R, Prof. Prafullata, Prof. Vadiraja</li>
                      <li>Design: Prof. Chitra Vishwanathan, Prof. Chinmay, Prof. Divyadarshan</li>
                      <li>Management, Law, and Others: Faculty from BBA, Architecture, MCA, and Performing Arts.</li>
                    </ul>

                    <h4 className="text-2xl font-bold mt-6 mb-3">Unique Features</h4>
                    <ul className="list-disc pl-6 text-lg text-gray-700 mt-3 space-y-2">
                      <li>Founder Talks: Insights from entrepreneurs like Adithya and Anirudh (Guru.AI), Achintya Krishna (Pocket Coach), and Ananya Mungara (Sonic Scape).</li>
                      <li>Interdisciplinary Approach: Collaboration across all PESU departments.</li>
                      <li>Practical Focus: Emphasis on real-world applications like design thinking, business model canvas, and startup finance.</li>
                    </ul>

                    <div className="mt-8 flex items-center gap-3">
                      <Link href="/students/courses/eie-2"><Button className="bg-white text-blue-700">Go to EIE — Part 2</Button></Link>
                      <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                    </div>
                  </div>
                </div>

                {/* Right column: infoboxes (sticky on md+) */}
                <div className="md:col-span-1">
                  <div className="space-y-6 md:top-24">
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
                          <li>Mentored founders and supported startup productization and sustainability initiatives.</li>
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
                          <li>As founding Director of CIE, guided Lean Startup, Effectuation and Design Thinking frameworks; mentored and consulted across national and international programs.</li>
                          <li><strong>Education:</strong> Executive Management (MIT Sloan), MS (VLSI) — Arizona State University.</li>
                        </ul>
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













