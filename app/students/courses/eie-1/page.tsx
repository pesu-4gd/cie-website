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

const studentsColors = SECTION_COLORS.students;

export default function EIE1Page() {
  return (
    <div className="min-h-screen bg-white">
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden" aria-hidden>
        <InteractiveHexagonBackground primaryColor={studentsColors.hero?.background} accentColor={studentsColors.hero?.hexagonAccent} className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Innovation and Entrepreneurship at PES University: EIE and CIE Ignite</motion.h1>
          <p className="mt-4 text-base md:text-lg">Welcome to CIE — the Centre for Innovation and Entrepreneurship at PES University. At CIE we empower students to become the innovators and entrepreneurs of tomorrow. Our programs blend theoretical knowledge with practical experience, preparing students and industry professionals to thrive in a rapidly evolving world. The Essentials of Innovation and Entrepreneurship (EIE) course provides a foundational understanding of entrepreneurial principles, while CIE Ignite, our flagship Ideathon, offers a platform to apply these skills in real-world challenges.</p>

          <div className="mt-6 flex justify-center gap-3">
            <Link href="/students/courses">
              <Button variant="outline" className="border-white text-white hover:shadow-md transition">Back to Courses</Button>
            </Link>
            <Link href="/students/programs">
              <Button className={`${studentsColors.gradient.tailwind} text-white shadow-sm hover:shadow-md transition`}>Explore Related Programs <ArrowRight className="w-4 h-4 ml-2"/></Button>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold">Welcome to CIE</h3>
          <p className="mt-3 text-gray-700">At PES University's Centre for Innovation and Entrepreneurship (CIE), we empower students to become the innovators and entrepreneurs of tomorrow. Our programs blend theoretical knowledge with practical experience, preparing students and industry professionals to thrive in a rapidly evolving world. The Essentials of Innovation and Entrepreneurship (EIE) course provides a foundational understanding of entrepreneurial principles, while CIE Ignite, our flagship Ideathon, offers a platform to apply these skills in real-world challenges.</p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="col-span-2">
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

              <p className="text-gray-700 mt-3">The course integrates the CIE Ignite Ideathon, a hands-on startup challenge where students develop and pitch ideas, gaining real-world experience and mentorship.</p>

              <h5 className="mt-4 font-medium">Benefits of EIE</h5>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Practical Experience: Engage in projects, case studies, and the CIE Ignite Ideathon to apply your learnings.</li>
                <li>Expert Instruction: Learn from experienced faculty like Prof. Sathya Prasad and industry mentors such as Mr. Raghavendra Deshmukh, Prasanna Chandran, Jayaram MG.</li>
                <li>Interdisciplinary Networking: Collaborate with peers from diverse disciplines, fostering innovative ideas.</li>
                <li>Career Readiness: Develop skills valued by employers, including creativity, leadership, and strategic thinking.</li>
                <li>Access to CIE Ecosystem: Unlock resources like makerspaces, funding through PESU Venture Labs, and international programs like the Berkeley Haas Global Access Program (BHGAP).</li>
              </ul>

              <h5 className="mt-4 font-medium">Course Objectives</h5>
              <p className="text-gray-700">The EIE course aims to:</p>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Foster an entrepreneurial mindset and skillset.</li>
                <li>Enable students to explore innovation in startups, corporations, or small businesses.</li>
                <li>Introduce transformative technologies like AI and sustainability.</li>
                <li>Build business acumen and soft skills for career success.</li>
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

            <motion.aside whileHover={{ scale: 1.02 }} className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3">
                <Link href="https://www.linkedin.com/in/raghavendradeshmukh" target="_blank" rel="noopener noreferrer" aria-label="Raghavendra Deshmukh LinkedIn">
                  <Image src="/assets/raghavendra-deshmukh.png" alt="Raghavendra Deshmukh" width={160} height={160} className="w-20 h-20 rounded-full object-cover" />
                </Link>
                <div>
                  <div className="font-semibold">Raghavendra Deshmukh</div>
                  <div className="text-sm text-gray-600">Industry Mentor, CIE (PESU)</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3">~30 years of experience in Software Product Engineering, Product Management, and Engineering Leadership. Mentor and coach for startups and professionals across domains including Blockchain, GenAI, and Cloud.</p>
              <a className="text-sm text-indigo-600 mt-3 inline-block" href="mailto:raghavendradeshmukh@pes.edu">raghavendradeshmukh@pes.edu</a>
              <div className="text-xs text-gray-500 mt-2">LinkedIn: <a href="https://www.linkedin.com/in/raghavendradeshmukh" className="text-indigo-600">Raghavendra Deshmukh</a></div>
            </motion.aside>
          </motion.div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold">EIE Part 1 — Modules</h4>
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

            <h4 className="text-xl font-semibold mt-6">References</h4>
            <ul className="list-disc pl-6 text-gray-700 mt-2">
              <li>Technology Ventures: From Idea to Enterprise by McGraw Hill</li>
              <li>PES University ‘CIE Level1’ Course - Getting Started With Entrepreneurship</li>
              <li>VentureLab (Entrepreneurial Skillset and Mindset)</li>
              <li>European Union (EU) Entrepreneurship Competencies</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6">Course Co-Instructor Details</h4>
            <div className="mt-3 text-gray-700">
              <h5 className="font-semibold">Raghavendra Deshmukh</h5>
              <p className="text-sm text-gray-700 mt-1">Industry Mentor, CIE (PESU)</p>
              <p className="text-sm text-gray-700 mt-2">Email ID: <a href="mailto:raghavendradeshmukh@pes.edu" className="text-indigo-600">raghavendradeshmukh@pes.edu</a></p>
              <p className="text-sm text-gray-700 mt-2">LinkedIn: <a href="https://www.linkedin.com/in/raghavendradeshmukh" className="text-indigo-600">Raghavendra Deshmukh</a></p>

              <h6 className="mt-3 font-semibold">Professional Summary</h6>
              <p className="text-sm text-gray-700">~30 years of experience in Software Product Engineering, Product Management, Team Building and Engineering Leadership at organizations like SAP, Walmart, Google, Wipro and Booking.com. Successfully built On-Prem and Cloud Products in the areas of Supply Chain Logistics, Blockchain based Track and Trace solutions, Enterprise Blockchain Platform, Cloud Services - Google Cloud Platform (GCP) with SAP, Data Analytics, ETL and ELT, Master Data Management, Pharmaceutical Clinical Trials etc. Supported and Mentored Startups in the area of Blockchain based Food Traceability to launch products for Milk and Meat Traceability, Regulatory compliant Sourcing and Traceability and Sustainability initiatives. Mentored and Coached 100s of early career professionals and helped transform themselves into all round Engineering and Product professionals.</p>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Link href="/students/courses/eie-2"><Button className="bg-white text-blue-700">Go to EIE — Part 2</Button></Link>
            <Link href="/students/courses/cie-spark"><Button variant="outline" className="border-gray-300">Learn about CIE Spark</Button></Link>
            <Link href="/students/courses"><Button variant="ghost">Back to Courses</Button></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
