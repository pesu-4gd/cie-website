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

// expose primary color as a CSS variable for hover states
const cssVars = {
  '--cie-blue': studentsColors.primary,
} as React.CSSProperties;

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
    }
  ];

  const pastCourses = [
    {
      title: 'CIE Level 1: Getting Started with Entrepreneurship',
      description: 'This foundational course introduces participants to the essentials of enterprise and entrepreneurship, highlighting the critical roles of the entrepreneur, innovation, and technology.',
      details: [
        'Format: Compact 5-day course offered during the summer.',
        'Target Audience: Open to PES students and non-students.',
        'Focus Areas: 60% entrepreneurial mindset, 30% business acumen, 10% technology.',
        'Key Benefit: Builds a strong foundation for aspiring entrepreneurs to understand the entrepreneurial landscape and develop a growth-oriented mindset.'
      ]
    },
    {
      title: 'CIE Level 2: Building a Lean Startup',
      description: 'Building on the foundations of CIE Level 1, this advanced program guides participants in applying their entrepreneurial mindset and business acumen to create viable startups.',
      details: [
        'Format: Structured course with practical implementation.',
        'Target Audience: Students and participants who have completed CIE Level 1.',
        'Focus Areas: Lean startup methodologies, business development, and growth strategies.',
        'Key Benefit: Equips participants to transform ideas into growth-oriented businesses through hands-on learning.'
      ]
    },
    {
      title: 'CIE PADL: Practical Approach to Deep Learning',
      description: 'A hands-on 2-credit elective course that leverages Intel\'s OpenVINO toolkit to explore real-world applications of deep learning.',
      details: [
        'Format: Semester-long elective with practical projects.',
        'Target Audience: Students interested in AI and deep learning.',
        'Focus Areas: Deep learning applications, hardware accelerators, software toolkits.',
        'Key Benefit: Equips students with cutting-edge skills in AI-driven product development, highly valued in tech industries.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={cssVars}>
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
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 flex flex-col h-full"
              >
                <div className="mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${studentsColors.gradient.tailwind}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{p.subtitle}</p>

                <div className="mt-4 flex justify-end">
                  <Link href={p.href} className="text-sm text-gray-500 hover:text-[var(--cie-blue)]" aria-label={`Learn more about ${p.title}`}>
                    Learn More
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </section>

        <section className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Past Courses & Workshops
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                CIE's past courses have empowered over 9k+ students and professionals to embrace entrepreneurship and innovation.
              </p>
            </motion.div>

            <div className="space-y-8">
              {pastCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
                >
                  <div className="flex items-start mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 ${studentsColors.gradient.tailwind}`}>
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{course.description}</p>
                    </div>
                  </div>
                  <ul className="ml-14 space-y-2">
                    {course.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Explore CIE's Legacy of Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                From foundational courses like CIE Level 1 to advanced workshops like CIE PAML, these initiatives have built a vibrant community of innovators. Discover current and upcoming programs at the CIE website and join the journey to shape the future.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/students/startup-program">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    Student Startup Program
                  </Button>
                </Link>
                <Link href="/students/programs">
                  <Button variant="outline" className="border-gray-300 text-gray-700">
                    View All Programs
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
