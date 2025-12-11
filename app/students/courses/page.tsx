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
import { BookOpen } from 'lucide-react';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { useState } from 'react';

const studentsColors = SECTION_COLORS.students;

// expose primary color as a CSS variable for hover states
const cssVars = {
  '--cie-blue': studentsColors.primary,
} as React.CSSProperties;

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('eie');

  type CourseButton = {
    label: string;
    href: string;
    primary?: boolean;
  };

  type ActiveCourse = {
    title: string;
    description: string;
    description2?: string;
    buttons: CourseButton[];
  };

  const activeCourses: Record<'eie' | 'productManagement', ActiveCourse> = {
    eie: {
      title: 'Essentials of Innovation and Entrepreneurship (EIE)',
      description: 'The Essentials of Innovation and Entrepreneurship (EIE) course at PES University is a pioneering, pan-university initiative designed to prepare students for the challenges and opportunities of the modern workforce. In a world where technological advancements, globalization, and economic shifts are reshaping industries, the ability to innovate and think entrepreneurially is critical. This course, spearheaded by the Centre for Innovation and Entrepreneurship (CIE), is open to all undergraduates, reflecting the belief that innovation and entrepreneurship are interdisciplinary skills applicable across all career paths.',
      description2: 'The EIE course is structured in two parts: Part 1 for 3rd-semester students and Part 2 for 4th-semester students, each carrying 2 credits. CIE Ignite the flagship ideathon combines theoretical knowledge with practical applications, featuring modules on elevator pitch, design thinking, business model canvas, startup finance, and AI in innovation, among others. The course also includes exclusive founder talks from successful entrepreneurs, providing real-world insights.',
      buttons: [
        { label: 'EIE Part 1', href: '/students/courses/eie-1', primary: true },
        { label: 'EIE Part 2', href: '/students/courses/eie-2', primary: true }
      ]
    },
    productManagement: {
      title: 'Product Management in the AI Era',
      description: 'Is a 2-credit Special Topic course offered by the Centre for Innovation and Entrepreneurship (CIE) at PES University for 8th-semester Engineering and Design students. This course introduces product management fundamentals in the context of Artificial Intelligence (AI), preparing students for high-demand roles as Product Managers (PMs). With a project-based pedagogy and industry mentorship, it bridges technical expertise with business impact.',
      buttons: [
        { label: 'Know More', href: '/students/courses/product-management-ai', primary: true }
      ]
    }
  };

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
            Programs at CIE: <span className="text-[#2B9EB3]">Fostering Innovation and Entrepreneurship</span>
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 max-w-3xl mx-auto text-lg">
            The Centre for Innovation and Entrepreneurship (CIE) at PES University has a rich history of offering dynamic programs that empower students, aspiring entrepreneurs, and professionals to excel in the world of innovation and startups.
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
        {/* Active Courses with Horizontal Tabs */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Active Programs
            </h2>
            
            {/* Horizontal Tab Navigation */}
            <div className="flex gap-3 mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('eie')}
                className={`px-6 py-3 font-semibold transition-all duration-300 border-b-2 ${
                  activeTab === 'eie'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                Essentials of Innovation and Entrepreneurship
              </button>
              <button
                onClick={() => setActiveTab('productManagement')}
                className={`px-6 py-3 font-semibold transition-all duration-300 border-b-2 ${
                  activeTab === 'productManagement'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                Product Management in the AI Era
              </button>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {activeCourses[activeTab as keyof typeof activeCourses].title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {activeCourses[activeTab as keyof typeof activeCourses].description}
              </p>
              {activeCourses[activeTab as keyof typeof activeCourses].description2 && (
                <p className="text-gray-600 leading-relaxed mb-6">
                  {activeCourses[activeTab as keyof typeof activeCourses].description2}
                </p>
              )}
              
              <div className="flex flex-wrap gap-3">
                {activeCourses[activeTab as keyof typeof activeCourses].buttons.map((button) => (
                  <Link key={button.label} href={button.href}>
                    <Button 
                      className={button.primary 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                        : 'border-gray-300 text-gray-700'
                      }
                      variant={button.primary ? 'default' : 'outline'}
                    >
                      {button.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Past Courses
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
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
                CIE's past courses have empowered over 9k+ students and professionals to embrace entrepreneurship and innovation. From foundational courses like CIE Level 1 to advanced workshops like CIE PAML, these initiatives have built a vibrant community of innovators. Discover current and upcoming programs at the CIE website and join the journey to shape the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
