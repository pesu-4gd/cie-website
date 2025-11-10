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
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">PAML — Train the Trainer (CIE)</motion.h1>
          </div>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg">The Train-the-Trainer for Practical Approach to Machine Learning (PAML) program prepares motivated 4th and 6th semester students to become teaching assistants for the PAML workshop. Guided by industry mentor Mr. Prasanna Chandran, students gain ML expertise and teaching experience.</p>

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
                    value="what"
                    style={{ ['--tab-color']: tabColors.what } as React.CSSProperties}
                    className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
                  >
                    What You Will Do
                  </TabsTrigger>

                  <TabsTrigger
                    value="sessions"
                    style={{ ['--tab-color']: tabColors.sessions } as React.CSSProperties}
                    className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
                  >
                    Session Plans
                  </TabsTrigger>

                  <TabsTrigger
                    value="logistics"
                    style={{ ['--tab-color']: tabColors.logistics } as React.CSSProperties}
                    className="px-3 py-2 text-sm font-medium text-black border-b-2 border-transparent data-[state=active]:text-[var(--tab-color)] data-[state=active]:border-[var(--tab-color)]"
                  >
                    Logistics & Instructor
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <h3 className="text-2xl font-semibold">PAML Train-the-Trainer — Jan–Apr 2025</h3>
                  <p className="mt-3 text-gray-700">The PAML program at PES University's CIE blends machine learning fundamentals with pedagogy so participants can teach and mentor during the PAML+ summer workshop. Targeted at 4th and 6th semester ECE, CSE and AIML students with strong Python skills.</p>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold">Program Overview</h4>
                    <p className="text-gray-700 mt-2">Duration: Jan–Apr 2025 (Spring semester). Format: 2-hour weekly sessions via MS Teams with potential in-person sessions. Summer Workshop (Jun–Jul): 1-week intensive plus project execution.</p>
                  </div>
                </TabsContent>

                <TabsContent value="what">
                  <h3 className="text-2xl font-semibold">What You Will Do</h3>
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
                  <h3 className="text-2xl font-semibold">PAML Session Plans (Highlights)</h3>
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
                  <h3 className="text-2xl font-semibold">Engagement, Logistics & Instructor</h3>
                  <div className="mt-3 text-gray-700 space-y-3">
                    <p>Schedule: Weekly 2-hour sessions from Jan 29 to Apr 16. Summer Workshop: 1-week intensive (Jun–Jul) followed by project execution.</p>
                    <p>Eligibility: 4th/6th semester ECE, CSE, AIML students with strong Python skills and availability in Summer 2025.</p>
                    <p>Unique features: expert mentorship, hands-on learning, paid internship opportunities for top performers.</p>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <h4 className="text-lg font-semibold">Join the PAML Train-the-Trainer Program</h4>
                <p className="text-gray-700 mt-2">Inquire at <a href="mailto:cieprogram@pes.edu" className="text-blue-600 hover:underline">cieprogram@pes.edu</a> to become a PAML+ Teaching Assistant — master ML, develop teaching skills, and mentor future innovators.</p>

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
    </div>
  );
}
