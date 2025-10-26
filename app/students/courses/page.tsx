"use client";
import Link from 'next/link';
// metadata omitted: this file is a client component ("use client"); Next.js only allows
// `export const metadata` from server components. To add metadata, convert this file
// to a server component (remove "use client") or add metadata in a separate server
// wrapper. Left out to avoid build errors.
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/design-system';
import { SECTION_COLORS } from '@/styles/colors';
import { GraduationCap, BookOpen, Users, Lightbulb } from 'lucide-react';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';

const studentsColors = SECTION_COLORS.students;

export default function CoursesPage() {
  const programs = [
    {
      id: 'eie-1',
      title: 'EIE — Part 1 (Semester 3)',
      subtitle: 'Essentials of Innovation & Entrepreneurship — Part 1',
      href: '/students/courses/eie-1',
      icon: BookOpen,
    },
    {
      id: 'eie-2',
      title: 'EIE — Part 2 (Semester 4)',
      subtitle: 'Essentials of Innovation & Entrepreneurship — Part 2',
      href: '/students/courses/eie-2',
      icon: GraduationCap,
    },
    {
      id: 'product-management-ai',
      title: 'Product Management in the AI Era',
      subtitle: '2-credit special topic for final-year Engineering & Design students',
      href: '/students/courses/product-management-ai',
      icon: Users,
    },
    {
      id: 'paml',
      title: 'PAML+ — Train the Trainer',
      subtitle: 'Practical Approach to Machine Learning (Train-the-Trainer)',
      href: '/students/courses/paml',
      icon: Lightbulb,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <InteractiveHexagonBackground
          primaryColor={studentsColors.hero?.background}
          accentColor={studentsColors.hero?.hexagonAccent}
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <Image src="/assets/CIE Logo White Short.svg" alt="CIE Programs" width={140} height={40} className="mx-auto mb-4" />
          <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold">
            Programs at CIE — Fostering Innovation & Entrepreneurship
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 max-w-3xl mx-auto text-lg">
            A curated list of active and past programs designed to inspire and equip students with essential skills for creating impact through innovation and startups.
          </motion.p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/students/resources">
              <Button className="bg-white text-blue-700">Student Resources</Button>
            </Link>
            <Link href="/students">
              <Button variant="outline" className="border-white text-white">Back to Student Hub</Button>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article key={p.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${studentsColors.gradient.tailwind}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{p.subtitle}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <Link href={p.href}>
                        <Button className={`${studentsColors.gradient.tailwind} text-white`}>Know More</Button>
                      </Link>
                      {p.id.startsWith('eie') && (
                        <div className="text-sm text-gray-500">Course: 2 credits • Pan-university • Project based</div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>

        <section className="mt-12">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4">Past Courses & Workshops</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h5 className="font-semibold">CIE Level 1 — Getting Started with Entrepreneurship</h5>
              <p className="text-sm text-gray-600 mt-2">Compact 5-day summer course introducing entrepreneurial mindset, business acumen and technology essentials. Open to PES students and non-students.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h5 className="font-semibold">CIE Level 2 — Building a Lean Startup</h5>
              <p className="text-sm text-gray-600 mt-2">Advanced, practical course building on Level 1 with lean startup methodologies and business development techniques.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h5 className="font-semibold">CIE PADL — Practical Approach to Deep Learning</h5>
              <p className="text-sm text-gray-600 mt-2">A semester elective leveraging OpenVINO and hardware accelerators to build real-world deep learning projects.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h5 className="font-semibold">CIE PAML Workshop</h5>
              <p className="text-sm text-gray-600 mt-2">Practical Approach to Machine Learning: 4-weekend workshop with projects, awards and industry mentorship.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
