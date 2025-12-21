"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { HERO_CONTENT } from '@/data/landing';
import { SECTION_COLORS } from '@/styles/colors';

/**
 * Landing page hero section with interactive hexagonal background
 */
export function HeroSection() {
  const { badge, title, subtitle, cta } = HERO_CONTENT;
  const Icon = badge.icon;

  const landingColors = SECTION_COLORS.landing;

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#00377B]">
      {/* Interactive Hexagonal Background */}
      <InteractiveHexagonBackground
        className="absolute inset-0 z-0"
        primaryColor={landingColors.hero.background}
        accentColor={landingColors.hero.hexagonAccent}
      />

      {/* Content Container */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <Icon className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">{badge.text}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
          >
            {title.line1}
            <br />
            <span className="bg-gradient-to-r from-[#2B9EB3] via-[#FFC107] to-[#F15A29] bg-clip-text text-transparent">
              {title.line2}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 text-lg text-white/80 md:text-xl max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary CTA */}
            <Link
              href={cta.primary.href}
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#F15A29] to-[#FFC107] rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >
              {cta.primary.text}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href={cta.secondary.href}
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              {cta.secondary.text}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
            >
              <motion.div className="w-1 h-2 bg-white/60 rounded-full mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00377B]/80 pointer-events-none" />
    </section>
  );
}
