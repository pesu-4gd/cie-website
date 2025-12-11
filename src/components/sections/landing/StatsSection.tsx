'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/data/landing';

/**
 * Stats section showcasing CIE's impact
 */
export function StatsSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#3E3C6B] to-[#2B9EB3]">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className="mb-2 text-4xl font-bold text-[#3E3C6B] md:text-5xl">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm font-medium text-gray-600 md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
