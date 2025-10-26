"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/design-system';
import { SECTION_COLORS } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';

const studentsColors = SECTION_COLORS.students;

export default function CieSparkPage() {
  return (
    <div className="bg-white">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden" aria-hidden>
        <InteractiveHexagonBackground primaryColor={studentsColors.hero?.background} accentColor={studentsColors.hero?.hexagonAccent} className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Image src="/assets/CIE Logo White Short.svg" alt="CIE Logo" width={140} height={40} className="mx-auto mb-4" />
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">CIE Spark — Student Innovation Labs</motion.h1>
          <p className="mt-4 text-base md:text-lg">CIE Spark is a hands-on incubation track for student innovators and early-stage teams at PES University. It blends mentorship, prototyping support, and seed-stage guidance to accelerate promising ideas.</p>

          <div className="mt-6 flex justify-center gap-3">
            <Link href="/students/courses">
              <Button variant="outline" className="border-white text-white">Back to Programs</Button>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold">What is CIE Spark?</h3>
          <p className="mt-3 text-gray-700">CIE Spark supports students and teams transitioning from ideation to early validation. Spark focuses on rapid prototyping, customer discovery, and mentor-guided pitch readiness. We provide access to makerspaces, prototype funding, and demo-days for exposure to potential collaborators and funders.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold">Who should join?</h4>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Student teams with validated problem statements</li>
                <li>Early-stage prototypes needing mentorship</li>
                <li>Founders seeking but not yet raised seed funding</li>
              </ul>

              <h4 className="mt-4 text-lg font-semibold">What Spark provides</h4>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Mentorship from industry and academic leaders</li>
                <li>Access to makerspaces and prototyping grants</li>
                <li>Weekly office hours and cohort-based learning</li>
                <li>Demo day and investor showcase opportunities</li>
              </ul>
            </div>

            <aside className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h5 className="font-semibold">Apply to Spark</h5>
              <p className="text-sm text-gray-700 mt-2">Applications are accepted each semester. Teams should submit a one-page problem statement and early validation evidence.</p>
              <div className="mt-4">
                <Link href="/students/cie-apply">
                  <Button className={`${studentsColors.gradient.tailwind} text-white`}>Apply to Spark</Button>
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
