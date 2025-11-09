"use client";
// EIE Part II — mirrored structure from EIE Part I with Tabs, per-tab color, infoboxes and navigation
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/design-system';
import { SECTION_COLORS } from '@/styles/colors';
import { Lightbulb, Users, Presentation, Trophy } from 'lucide-react';
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
    details: studentsColors.accent,
    ignite: (studentsColors.gradient?.stops && studentsColors.gradient.stops[0]) || studentsColors.primary,
    references: studentsColors.primary,
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
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
                value="ignite"
                style={{ ['--tab-color']: tabColors.ignite } as React.CSSProperties}
                className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
              >
                CIE Ignite
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
              <p className="mt-3 text-lg text-gray-700 leading-relaxed">At PES University's Centre for Innovation and Entrepreneurship (CIE), we empower students to become the innovators and entrepreneurs of tomorrow. Our programs blend theoretical knowledge with practical experience, preparing students and industry professionals to thrive in a rapidly evolving world. The Essentials of Innovation and Entrepreneurship (EIE) course provides a foundational understanding of entrepreneurial principles, while CIE Ignite, our flagship Ideathon, offers a platform to apply these skills in real-world challenges.</p>

              <div className="mt-6">
                <h4 className="text-2xl font-bold mt-4 mb-3">Essentials of Innovation and Entrepreneurship (EIE) — Part II</h4>
                <p className="text-lg text-gray-700 leading-relaxed mt-2">Welcome to Essentials of Innovation and Entrepreneurship (EIE) Part II, a 2-credit course offered in the 4th semester at PES University. Spearheaded by the Centre for Innovation and Entrepreneurship (CIE), this pan-university program builds on EIE Part I, deepening students' entrepreneurial mindset and skills and integrating the CIE Ignite Ideathon. Open to students from all disciplines, this course integrates the CIE Ignite Ideathon and features insights from startup founders and industry experts to prepare participants for dynamic careers.</p>

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

                <p className="text-lg text-gray-700 leading-relaxed mt-4">The course integrates the CIE Ignite Ideathon, a hands-on startup challenge where students develop and pitch ideas, gaining real-world experience and mentorship.</p>

                <h5 className="mt-6 text-xl font-bold">Why EIE Part II?</h5>
                <p className="text-lg text-gray-700 leading-relaxed mt-2">EIE Part II equips students to:</p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mt-2 space-y-2">
                  <li>Identify and seize opportunities in dynamic markets.</li>
                  <li>Develop innovative solutions and navigate the idea-to-market process.</li>
                  <li>Cultivate an innovation and entrepreneurship (I&amp;E) mindset applicable to any career path.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-3">As a pan-university course, EIE Part II fosters interdisciplinary collaboration across Engineering, Design, Management, Law and more.</p>

                <h5 className="mt-6 text-xl font-bold">Benefits of EIE Part II</h5>
                <ul className="list-disc pl-6 text-lg text-gray-700 mt-3 space-y-2">
                  <li>Practical Experience: Engage in projects, case studies, and the CIE Ignite Ideathon to apply your learnings.</li>
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
                  <Link href="/students/courses/eie-1"><Button className="bg-white text-blue-700">Go to EIE — Part 1</Button></Link>
                  <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="objectives">
              <h3 className="text-2xl font-semibold">Course Objectives</h3>
              <p className="mt-3 text-gray-700">EIE Part II aims to:</p>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Deepen students' I&amp;E mindset and practical skills for starting ventures.</li>
                <li>Enable exploration of I&amp;E in startups, corporate entrepreneurship, and MSMEs.</li>
                <li>Enhance understanding of transformative technologies and their entrepreneurial implications.</li>
                <li>Build advanced business acumen (market research, financials, legal fundamentals).</li>
                <li>Strengthen soft skills for professional life beyond university.</li>
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <Link href="/students/courses/eie-1"><Button className="bg-white text-blue-700">Go to EIE — Part 1</Button></Link>
                <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
              </div>
            </TabsContent>

            <TabsContent value="ignite">
              <div className="space-y-8">
                <div>
                  {/* <div className="flex items-center gap-4 mb-4">
                    <Image src="/assets/cie-ignite-white-bg.png" alt="CIE Ignite Logo" width={200} height={100} className="h-20 w-auto" />
                  </div> */}
                  <h3 className="text-3xl font-bold mb-4" style={{ color: studentsColors.primary }}>CIE Ignite: Where Solutions Take Flight</h3>
                  <p className="text-xl italic" style={{ color: studentsColors.accent }}>The Solution Sprint Turning Validated Problems into Market-Ready Ventures</p>
                </div>

                <div className="rounded-2xl p-8" style={{ background: `linear-gradient(to right, ${studentsColors.primary}15, ${studentsColors.accent}15)` }}>
                  <h4 className="text-2xl font-bold mb-4" style={{ color: studentsColors.primary }}>From Spark to Flame: The Solution Revolution</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">CIE Ignite is where validated problems meet scalable solutions. As the explosive follow-up to CIE Spark, we take the most promising validated problems and transform them into investment-ready ventures through an intensive, mentor-driven sprint.</p>
                  
                  <div className="mt-6">
                    <h5 className="text-xl font-bold mb-3">The Complete Innovation Pipeline:</h5>
                    <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                      <li><strong>Semester 3: CIE Spark</strong> → Problem Discovery & Validation</li>
                      <li><strong>Semester 4: CIE Ignite</strong> → Solution Building & Venture Launch</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4">What is CIE Ignite?</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">CIE Ignite is PES University's premier solution-building sprint that transforms the top validated problems from CIE Spark into functional prototypes and viable ventures. Over 10 intensive weeks, student teams receive mentorship, funding, and resources to build, test, and pitch their solutions to real investors.</p>
                </div>

                <div className="rounded-2xl p-8" style={{ background: `linear-gradient(to right, ${studentsColors.primary}15, ${studentsColors.accent}15)` }}>
                  <h4 className="text-2xl font-bold mb-6 text-center" style={{ color: studentsColors.primary }}>Program Highlights</h4>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <Lightbulb className="w-12 h-12" style={{ color: studentsColors.accent }} />
                      </div>
                      <h5 className="text-lg font-bold mb-2" style={{ color: studentsColors.primary }}>Idea-2-Market</h5>
                      <p className="text-gray-700">Apply the EIE II principles to bring your ideas to life</p>
                    </div>
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <Users className="w-12 h-12" style={{ color: studentsColors.accent }} />
                      </div>
                      <h5 className="text-lg font-bold mb-2" style={{ color: studentsColors.primary }}>Team Collaboration</h5>
                      <p className="text-gray-700">Let your creative juices flow to develop ideas in a team environment</p>
                    </div>
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <Presentation className="w-12 h-12" style={{ color: studentsColors.accent }} />
                      </div>
                      <h5 className="text-lg font-bold mb-2" style={{ color: studentsColors.primary }}>Pitch Experience</h5>
                      <p className="text-gray-700">Master presentation skills and present to startup/industry Experts</p>
                    </div>
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <Trophy className="w-12 h-12" style={{ color: studentsColors.accent }} />
                      </div>
                      <h5 className="text-lg font-bold mb-2" style={{ color: studentsColors.primary }}>Attractive Awards</h5>
                      <p className="text-gray-700">Win up to Rs 50,000 in prizes and qualify for CIE Summer Internships</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-6 text-center" style={{ color: studentsColors.primary }}>Program Structure</h4>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    <div className="text-center">
                      <div className="w-40 h-40 rounded-full flex items-center justify-center border-4 mx-auto" style={{ borderColor: studentsColors.primary, backgroundColor: `${studentsColors.primary}10` }}>
                        <div>
                          <div className="text-2xl font-bold" style={{ color: studentsColors.primary }}>S0</div>
                          <div className="text-sm font-semibold mt-1">Idea</div>
                          <div className="text-sm font-semibold">Submission</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:block text-3xl" style={{ color: studentsColors.accent }}>→</div>
                    
                    <div className="text-center">
                      <div className="w-40 h-40 rounded-full flex items-center justify-center border-4 mx-auto" style={{ borderColor: studentsColors.primary, backgroundColor: `${studentsColors.primary}10` }}>
                        <div>
                          <div className="text-2xl font-bold" style={{ color: studentsColors.primary }}>S1</div>
                          <div className="text-sm font-semibold mt-1">Preliminary</div>
                          <div className="text-sm font-semibold">Pitch</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:block text-3xl" style={{ color: studentsColors.accent }}>→</div>
                    
                    <div className="text-center">
                      <div className="w-40 h-40 rounded-full flex items-center justify-center border-4 mx-auto" style={{ borderColor: studentsColors.primary, backgroundColor: `${studentsColors.primary}10` }}>
                        <div>
                          <div className="text-2xl font-bold" style={{ color: studentsColors.primary }}>S2</div>
                          <div className="text-sm font-semibold mt-1">Team</div>
                          <div className="text-sm font-semibold">Pitch</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:block text-3xl" style={{ color: studentsColors.accent }}>→</div>
                    
                    <div className="text-center">
                      <div className="w-40 h-40 rounded-full flex items-center justify-center border-4 mx-auto" style={{ borderColor: studentsColors.primary, backgroundColor: `${studentsColors.primary}10` }}>
                        <div>
                          <div className="text-sm font-semibold">Finale</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-600 mt-6 italic">CIE Ignite empowers student innovators taking EIE-2 course, transforming ideas into tangible realities through a series of challenging stages.</p>
                  
                  <div className="flex justify-center mt-8">
                    <Image src="/assets/cie-ignite-white-bg.png" alt="CIE Ignite by CIE" width={250} height={100} className="h-70 w-auto" />
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4">The Three Pathways to Ignite</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-6 bg-gray-50">
                      <h5 className="text-xl font-bold mb-3" style={{ color: studentsColors.primary }}>FastTrack</h5>
                      <p className="text-sm font-semibold text-gray-600 mb-3">For CIE Spark Top Performers</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Automatic qualification for Top 50 Spark teams</li>
                        <li>Head start with pre-validated problems and built teams</li>
                        <li>Priority access to mentors and resources</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6 bg-gray-50">
                      <h5 className="text-xl font-bold mb-3" style={{ color: studentsColors.primary }}>Explorer Track</h5>
                      <p className="text-sm font-semibold text-gray-600 mb-3">For New Problem-Solvers</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Open to all students with compelling problem insights</li>
                        <li>Submit a "Problem Validation Lite" deck for entry</li>
                        <li>Bring fresh perspectives and new solutions</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6 bg-gray-50">
                      <h5 className="text-xl font-bold mb-3" style={{ color: studentsColors.primary }}>Wildcard Track</h5>
                      <p className="text-sm font-semibold text-gray-600 mb-3">Industry-Sponsored Challenges</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Solve real-world problems from our corporate partners</li>
                        <li>Direct industry mentorship and networking</li>
                        <li>Potential internship and job opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4">The Ignite Engine: Four-Stage Acceleration</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 pl-4" style={{ borderColor: studentsColors.primary }}>
                      <h5 className="text-lg font-bold">Stage 0: Solution Ideation & Team Formation</h5>
                      <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                        <li>Refine problem statements based on Spark feedback</li>
                        <li>Finalize multidisciplinary teams (3-6 members)</li>
                        <li>Develop initial solution hypotheses</li>
                      </ul>
                    </div>

                    <div className="border-l-4 pl-4" style={{ borderColor: studentsColors.primary }}>
                      <h5 className="text-lg font-bold">Stage 1: Prototype Development</h5>
                      <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                        <li>Build Minimum Viable Products (MVPs) or pretotypes</li>
                        <li>Access to CIE's prototyping lab and tech resources</li>
                        <li>Weekly mentor check-ins and technical guidance</li>
                      </ul>
                    </div>

                    <div className="border-l-4 pl-4" style={{ borderColor: studentsColors.primary }}>
                      <h5 className="text-lg font-bold">Stage 2: Business Model Validation</h5>
                      <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                        <li>Develop sustainable revenue models</li>
                        <li>Customer acquisition and retention strategies</li>
                        <li>Financial projections and unit economics</li>
                      </ul>
                    </div>

                    <div className="border-l-4 pl-4" style={{ borderColor: studentsColors.primary }}>
                      <h5 className="text-lg font-bold">Stage 3: Investor Readiness & Grand Finale</h5>
                      <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                        <li>Perfect pitch decks and demo videos</li>
                        <li>Practice with investor panels and mentors</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-8" style={{ background: `linear-gradient(to right, ${studentsColors.primary}15, ${studentsColors.accent}15)` }}>
                  <h4 className="text-2xl font-bold mb-4" style={{ color: studentsColors.primary }}>The Ignite Reward System</h4>
                  <div className="mt-4">
                    <h5 className="text-xl font-bold mb-3">Beyond the Prize Money</h5>
                    <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                      <li>Summer Internships with partner companies</li>
                      <li>Seed Funding for top ventures through PESU Venture Labs</li>
                      <li>Incubation Support including office space and legal services</li>
                      <li>Industry Connections with potential customers and partners</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4">Student Impact: Beyond the Competition</h4>
                  <h5 className="text-xl font-bold mb-3">Build Real-World Skills</h5>
                  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                    <li><strong>Technical Execution:</strong> From idea to functional prototype</li>
                    <li><strong>Business Acumen:</strong> Financial modeling, marketing, operations</li>
                    <li><strong>Leadership:</strong> Team management and stakeholder communication</li>
                    <li><strong>Investor Pitching:</strong> Articulate vision and traction effectively</li>
                  </ul>

                  <div className="mt-6 p-6 bg-gray-50 border-l-4" style={{ borderColor: studentsColors.accent }}>
                    <h5 className="text-lg font-bold mb-2">Alumni Success Stories</h5>
                    <p className="text-gray-700 italic">"CIE Ignite gave us the confidence to turn our class project into a real business. The mentorship and funding helped us launch within months of graduation."</p>
                    <p className="text-gray-600 mt-2">- Team Netra, CIE Ignite S01 Finalist</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4">CIE Ignite S01 Timeline (Jan-Apr 2025)</h4>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <div className="font-bold text-lg" style={{ color: studentsColors.primary }}>January:</div>
                      <div>
                        <p className="font-semibold">Ignition Phase</p>
                        <p className="text-gray-700">Team onboarding and solution refinement, Mentor matching and resource allocation, Prototyping lab orientation</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="font-bold text-lg" style={{ color: studentsColors.primary }}>February:</div>
                      <div>
                        <p className="font-semibold">Build Phase</p>
                        <p className="text-gray-700">Pretotype development and user testing, Weekly progress reviews with Mentors</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="font-bold text-lg" style={{ color: studentsColors.primary }}>March:</div>
                      <div>
                        <p className="font-semibold">Scale Phase</p>
                        <p className="text-gray-700">Business model optimization, Customer acquisition strategies, Pitch deck polishing and rehearsal</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="font-bold text-lg" style={{ color: studentsColors.primary }}>April:</div>
                      <div>
                        <p className="font-semibold">Launch Phase</p>
                        <p className="text-gray-700">Final preparations for Demo Day, Grand Finale and Award Ceremony</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4">Success Stories from Ignite</h4>
                  <h5 className="text-xl font-bold mb-3">Venture Launches</h5>
                  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                    <li><strong>GlowGenics (S01 Winner):</strong> Biotech solutions for sustainable agriculture</li>
                    <li><strong>BotZilla (S01 Runner-up):</strong> AI-powered customer service automation</li>
                    <li><strong>Team Netra (S01 2nd Runner-up):</strong> Computer vision for accessibility</li>
                    <li><strong>Authfy (S01):</strong> Cybersecurity and digital identity platform</li>
                  </ul>
                </div>

                <div className="rounded-2xl p-8 bg-gray-50">
                  <h4 className="text-2xl font-bold mb-4">Join the Ignite Revolution</h4>
                  <div className="p-6 bg-white border-l-4 rounded" style={{ borderColor: studentsColors.accent }}>
                    <h5 className="text-lg font-bold mb-2">For Students</h5>
                    <p className="text-gray-700 italic">"CIE Ignite was the most intense learning experience of my college life. We went from a slide deck to a functioning product with real customers in just 16 weeks. The network and skills I gained were invaluable."</p>
                    <p className="text-gray-600 mt-2">- Jannvi, Team GlowGenics, CIE Ignite S01 Champion</p>
                  </div>

                  <div className="mt-6">
                    <h5 className="text-xl font-bold mb-3">Get Involved</h5>
                    <p className="text-gray-700"><strong>Student Applications:</strong> Email: cieprogram@pes.edu</p>
                    <p className="text-gray-700 mt-2"><strong>Mentorship Opportunities:</strong> Share your expertise with the next generation, Guide teams through technical and business challenges, Connect with exceptional talent early</p>
                  </div>
                </div>

                <div className="rounded-2xl p-8 text-center" style={{ background: `linear-gradient(to right, ${studentsColors.primary}15, ${studentsColors.accent}15)` }}>
                  <h4 className="text-3xl font-bold mb-4" style={{ color: studentsColors.primary }}>Ready to Build What Matters?</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">CIE Ignite isn't just a competition—it's a launchpad. Whether you're a student ready to transform your validated problem into a real venture, or an industry leader looking to shape the future of innovation, your journey accelerates here.</p>
                  <p className="text-xl font-bold mt-4" style={{ color: studentsColors.accent }}>The world has enough problems. It's time to build the solutions.</p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <Link href="/students/courses/eie-1"><Button className="bg-white text-blue-700">Go to EIE — Part 1</Button></Link>
                  <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="references">
              <h3 className="text-2xl font-semibold">References</h3>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Technology Ventures: From Idea to Enterprise by McGraw Hill</li>
                <li>PES University 'CIE Level 2' Course - Getting Started With Entrepreneurship</li>
                <li>VentureLab (Entrepreneurial Skillset and Mindset)</li>
                <li>European Union (EU) Entrepreneurship Competencies</li>
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <Link href="/students/courses/eie-1"><Button className="bg-white text-blue-700">Go to EIE — Part 1</Button></Link>
                <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
              </div>
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

              <div className="mt-8 flex items-center gap-3">
                <Link href="/students/courses/eie-1"><Button className="bg-white text-blue-700">Go to EIE — Part 1</Button></Link>
                <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}
