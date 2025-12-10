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

export default function PamlPage() {
  const tabColors = {
    overview: studentsColors.primary,
    what: studentsColors.secondary,
    sessions: studentsColors.accent,
    logistics: (studentsColors.gradient?.stops && studentsColors.gradient.stops[0]) || studentsColors.primary,
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground primaryColor={studentsColors.hero?.background} accentColor={studentsColors.hero?.hexagonAccent} className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-4">
            <Image src="/assets/CIE Logo White Short.svg" alt="CIE logo" width={120} height={48} className="object-contain" />
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold">CIE Workshop</motion.h1>
          </div>

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

      {/* PAML Content Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              PAML — Train the Trainer
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Train-the-Trainer for Practical Approach to Machine Learning (PAML) program prepares motivated 4th and 6th semester students to become teaching assistants for the PAML workshop. Guided by industry mentor Mr. Prasanna Chandran, students gain ML expertise and teaching experience.
            </p>
          </motion.div>
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
                    value="what"
                    style={{ ['--tab-color']: tabColors.what } as React.CSSProperties}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)] whitespace-nowrap"
                  >
                    What You Will Do
                  </TabsTrigger>

                  <TabsTrigger
                    value="sessions"
                    style={{ ['--tab-color']: tabColors.sessions } as React.CSSProperties}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)] whitespace-nowrap"
                  >
                    Session Plans
                  </TabsTrigger>

                  <TabsTrigger
                    value="logistics"
                    style={{ ['--tab-color']: tabColors.logistics } as React.CSSProperties}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)] whitespace-nowrap"
                  >
                    Logistics & Instructor
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <h3 className="text-2xl font-semibold mt-9">PAML Train-the-Trainer — Jan–Apr 2025</h3>
                  <p className="mt-3 text-gray-700">The PAML program at PES University's CIE blends machine learning fundamentals with pedagogy so participants can teach and mentor during the PAML+ summer workshop. Targeted at 4th and 6th semester ECE, CSE and AIML students with strong Python skills.</p>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold">Program Overview</h4>
                    <p className="text-gray-700 mt-2">Duration: Jan–Apr 2025 (Spring semester). Format: 2-hour weekly sessions via MS Teams with potential in-person sessions. Summer Workshop (Jun–Jul): 1-week intensive plus project execution.</p>
                  </div>
                </TabsContent>

                <TabsContent value="what">
                  <h3 className="text-2xl font-semibold mt-9">What You Will Do</h3>
                  <div className="mt-3 text-gray-700">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Learn and teach ML concepts: supervised/unsupervised learning, models, and deployment basics.</li>
                      <li>Update course materials and build demonstration code for practical ML examples.</li>
                      <li>Design engaging activities and mentor workshop participants during the Summer session.</li>
                      <li>Opportunity for paid internship for top performers.</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="sessions">
                  <h3 className="text-2xl font-semibold mt-9">PAML Session Plans (Highlights)</h3>
                  <div className="mt-3 text-gray-700 space-y-4">
                    <div>
                      <h5 className="font-semibold">Session 1: Introduction & Data Preparation</h5>
                      <p className="mt-1">AI/ML/DL overview, data cleaning with pandas, hands-on exercises.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Session 2: Classification & Regression</h5>
                      <p className="mt-1">Random Forest, XGBoost, regression techniques and scikit-learn exercises.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Session 3: Feature Engineering & Processing</h5>
                      <p className="mt-1">Scaling, encoding, feature selection, cross-validation strategies.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Session 4: Vision & Neural Networks</h5>
                      <p className="mt-1">CNNs, YOLO, Vision Transformers — hands-on image tasks.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Session 5: Unsupervised Learning</h5>
                      <p className="mt-1">Clustering, PCA, t-SNE with hands-on MNIST experiments.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Session 6: Sequential Models</h5>
                      <p className="mt-1">RNN/GRU/LSTM for time-series forecasting exercises.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Session 7: GANs & NLP</h5>
                      <p className="mt-1">Intro to GANs and practical NLP tasks (tokenization, BERT-based classification).</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="logistics">
                  <h3 className="text-2xl font-semibold mt-9">Engagement, Logistics & Instructor</h3>
                  <div className="mt-3 text-gray-700 space-y-3">
                    <p>Schedule: Weekly 2-hour sessions from Jan 29 to Apr 16. Summer Workshop: 1-week intensive (Jun–Jul) followed by project execution.</p>
                    <p>Eligibility: 4th/6th semester ECE, CSE, AIML students with strong Python skills and availability in Summer 2025.</p>
                    <p>Unique features: expert mentorship, hands-on learning, paid internship opportunities for top performers.</p>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <h4 className="text-lg font-semibold">Join the PAML Train-the-Trainer Program</h4>
                <p className="text-gray-700 mt-2">Enquire at <a href="mailto:cieprogram@pes.edu" className="text-blue-600 hover:underline">cieprogram@pes.edu</a> to become a PAML+ Teaching Assistant — master ML, develop teaching skills, and mentor future innovators.</p>

                <div className="mt-6 flex items-center gap-3">
                  <Link href="/students/courses/eie-1"><Button className="bg-white text-blue-700">Go to EIE — Part 1</Button></Link>
                  <Link href="/students/courses/cie-ignite"><Button variant="outline" className="border-gray-300">See CIE Ignite</Button></Link>
                  <Link href="/students/courses"><Button variant="outline" className="ml-auto border-black text-black">Back to Courses</Button></Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="space-y-6 md:sticky md:top-24">
                <aside className="border rounded-md bg-gray-50 p-4 shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 mb-3 overflow-hidden rounded-full bg-gray-200">
                      <Image src="/assets/prasanna-chandran.png" alt="Prasanna S Chandran" width={160} height={160} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xl font-semibold">Prasanna S Chandran</div>
                    <div className="text-sm text-gray-600">Industry Mentor — CIE (PESU)</div>
                  </div>

                  <div className="mt-4 text-sm text-gray-700">
                    <table className="w-full text-sm text-gray-700">
                      <tbody>
                        <tr>
                          <td className="align-top pr-2 font-medium text-gray-600" style={{width: '28%'}}>Email</td>
                          <td><a className="text-indigo-600" href="mailto:prasannachandran@pes.edu">prasannachandran@pes.edu</a></td>
                        </tr>
                        <tr>
                          <td className="align-top pr-2 font-medium text-gray-600">LinkedIn</td>
                          <td><a className="text-indigo-600" href="https://www.linkedin.com/in/prasanna-chandran-4509a16/" target="_blank" rel="noopener noreferrer">Prasanna Chandran</a></td>
                        </tr>
                      </tbody>
                    </table>

                    <h6 className="mt-4 font-semibold">Professional summary</h6>
                    <p className="text-sm">Experience: 30+ years architecting data modernization and analytics solutions. Leadership across Wipro, ICICI Infotech, NTT DATA and Greywiz. Expertise: GenAI, Computer Vision, Data Modeling, and software engineering. Mentor to early-career professionals and practicioner of scalable analytics platforms.</p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Summer Workshop 2025 Section */}
      <section className="bg-gradient-to-br from-white to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Summer Workshop 2025
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              An intensive 8-week program bringing together students, mentors, and industry experts to build innovative projects across cutting-edge domains.
            </p>
          </motion.div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <Image 
                src="/assets/sw2025 (1).png" 
                alt="Summer Workshop 2025" 
                fill 
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <Image 
                src="/assets/sw2025 (2).png" 
                alt="Summer Workshop 2025 Projects" 
                fill 
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Domains */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 mb-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Domains Covered</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                'Computer Vision',
                'VR-Based Remote Systems',
                'Video Degradation Simulation',
                'Brain-Computer Interfaces',
                'Skin Cancer Detection',
                'Edge Computing & Scalable Deep Learning',
                'Financial Technology (Fintech)',
                'Generative AI & AI Agents',
                'Blockchain & Web3'
              ].map((domain, index) => (
                <motion.div
                  key={domain}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-50 p-3 md:p-4 rounded-xl border border-blue-200"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-gray-800 font-medium">{domain}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Participants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Program Details</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-100">
                  <span className="text-sm md:text-base text-gray-600">Duration</span>
                  <span className="text-base md:text-lg font-bold text-blue-600">8 weeks</span>
                </div>
                <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-100">
                  <span className="text-sm md:text-base text-gray-600">Students</span>
                  <span className="text-base md:text-lg font-bold text-gray-900">62</span>
                </div>
                <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-100">
                  <span className="text-sm md:text-base text-gray-600">Teaching Assistants</span>
                  <span className="text-base md:text-lg font-bold text-gray-900">7</span>
                </div>
                <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-100">
                  <span className="text-sm md:text-base text-gray-600">Industry Mentors</span>
                  <span className="text-base md:text-lg font-bold text-gray-900">4</span>
                </div>
                <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-100">
                  <span className="text-sm md:text-base text-gray-600">Alumni Mentors</span>
                  <span className="text-base md:text-lg font-bold text-gray-900">2</span>
                </div>
                <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-100">
                  <span className="text-sm md:text-base text-gray-600">CIE Ignite S01 Teams</span>
                  <span className="text-base md:text-lg font-bold text-gray-900">3</span>
                </div>
                <div className="flex justify-between items-center py-2 md:py-3">
                  <span className="text-sm md:text-base text-gray-600">CIE Core Team Members</span>
                  <span className="text-base md:text-lg font-bold text-gray-900">3</span>
                </div>
              </div>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-gray-700 border border-blue-200"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Outcomes</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-xl md:text-5xl font-bold text-blue-600">11</span>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold">Innovative Projects</h4>
                    <p className="text-sm md:text-base text-gray-900">Built and showcased by participants</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold">Cross-functional Collaboration</h4>
                    <p className="text-sm md:text-base text-gray-900">Between students, mentors, and alumni</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold">Hands-on Learning</h4>
                    <p className="text-sm md:text-base text-gray-900">Fast-paced, real-world environment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
