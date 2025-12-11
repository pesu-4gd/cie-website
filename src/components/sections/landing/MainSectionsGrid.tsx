'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MAIN_SECTIONS } from '@/data/landing';

/**
 * Main sections grid (Students, Alumni, Industry, Inside CIE)
 */
export function MainSectionsGrid() {
  return (
    <section className="relative py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-[#3E3C6B] md:text-5xl"
          >
            Explore CIE Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Choose your path and discover how CIE supports your innovation journey
          </motion.p>
        </div>

        {/* Sections Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {MAIN_SECTIONS.map((section, index) => {
            const Icon = section.icon;
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={section.href} className="block h-full group">
                  <div className="h-full p-8 transition-all duration-300 bg-white border border-gray-200 rounded-3xl hover:shadow-2xl hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${section.gradient}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 transition-all duration-300 group-hover:text-[#F15A29] group-hover:translate-x-1" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="mb-3 text-2xl font-bold text-[#3E3C6B]">
                      {section.title}
                    </h3>
                    <p className="mb-6 text-gray-600">
                      {section.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mb-6 space-y-2">
                      {section.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <CheckCircle2 className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#2B9EB3]" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="flex gap-6 pt-6 border-t border-gray-200">
                      {Object.entries(section.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-2xl font-bold text-[#3E3C6B]">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
