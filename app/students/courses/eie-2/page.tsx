"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/design-system';
import { SECTION_COLORS } from '@/styles/colors';
import { ArrowRight } from 'lucide-react';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';

const studentsColors = SECTION_COLORS.students;

export default function EIE2Page() {
  return (
    <div className="min-h-screen bg-white">
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground primaryColor={studentsColors.hero?.background} accentColor={studentsColors.hero?.hexagonAccent} className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Essentials of Innovation & Entrepreneurship — Part 2</motion.h1>
          <p className="mt-4 text-base md:text-lg">Part 2 (4th semester) — continuation of EIE with prototyping, mentorship, and hands-on workshops to refine problem statements and build working prototypes.</p>

          <div className="mt-6 flex justify-center gap-3">
            <Link href="/students/courses">
              <Button variant="outline" className="text-white border-white">Back to Programs</Button>
            </Link>
            <a href="/students/programs">
              <Button className="bg-white text-blue-700">Explore Related Programs <ArrowRight className="w-4 h-4 ml-2"/></Button>
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold">Course highlights</h3>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Prototyping & refinement • Industry mentors</li>
            <li>Workshops, guest lectures, and project milestones</li>
            <li>Preparation for internships, capstones and incubation</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
