'use client';

import { motion } from 'framer-motion';
import { FEATURES } from '@/data/landing';

/**
 * Features section highlighting CIE benefits
 */
export function FeaturesSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-[#3E3C6B] md:text-5xl"
          >
            Why Choose CIE?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Comprehensive support at every stage of your entrepreneurial journey
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 transition-all duration-300 bg-gray-50 rounded-2xl hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-[#3E3C6B] to-[#2B9EB3] w-fit">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-[#3E3C6B]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
