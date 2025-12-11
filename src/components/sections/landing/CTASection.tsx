'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CTA_CONTENT } from '@/data/landing';

/**
 * Call-to-action section
 */
export function CTASection() {
  const { title, subtitle, primaryButton, secondaryButton } = CTA_CONTENT;
  const PrimaryIcon = primaryButton.icon;
  const SecondaryIcon = secondaryButton.icon;

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#3E3C6B] via-[#2B9EB3] to-[#3E3C6B]">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-10 text-lg text-white/80 md:text-xl"
          >
            {subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary Button */}
            <Link
              href={primaryButton.href}
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#F15A29] to-[#FFC107] rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >
              <PrimaryIcon className="w-5 h-5" />
              {primaryButton.text}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <Link
              href={secondaryButton.href}
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <SecondaryIcon className="w-5 h-5" />
              {secondaryButton.text}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
      </div>
    </section>
  );
}
