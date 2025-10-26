"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/design-system';
import { SECTION_COLORS } from '@/styles/colors';
import { ArrowRight } from 'lucide-react';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';

const studentsColors = SECTION_COLORS.students;

export default function ProductManagementAIPage() {
  return (
    <div className="min-h-screen bg-white">
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground primaryColor={studentsColors.hero?.background} accentColor={studentsColors.hero?.hexagonAccent} className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Product Management in the AI Era</motion.h1>
          <p className="mt-4 text-base md:text-lg">A 2-credit special topic course for 8th-semester Engineering and Design students. Project-based pedagogy with industry mentorship focusing on the intersection of PM practice and AI-enabled products.</p>

          <div className="mt-6 flex justify-center gap-3">
            <Link href="/students/courses">
              <Button variant="outline" className="text-white border-white">Back to Programs</Button>
            </Link>
            <a href="/students/programs">
              <Button className="bg-white text-blue-700">Know More <ArrowRight className="w-4 h-4 ml-2"/></Button>
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold">What you'll learn</h3>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Product thinking, discovery and strategy for AI products</li>
            <li>How to translate models into product features and measurable impact</li>
            <li>Project-based mentorship from industry product leaders</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
