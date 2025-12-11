'use client';

import { motion } from 'framer-motion';
import { Mail, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import Image from 'next/image';

const insideCieColors = SECTION_COLORS.insideCie;

const teamMembers = [
  {
    name: 'SATHYA PRASAD',
    title: 'DIRECTOR, CIE',
    email: 'sathya.prasad@pes.edu',
    linkedin: 'https://www.linkedin.com/in/sathya-prasad/',
    image: '/assets/sathya-prasad.png',
    bio: [
      "Sathya Prasad is a technology leader with three decades of experience in innovation, entrepreneurship, and education. At Intel, he held key roles across R&D, Strategic Planning, and Product Management and was instrumental in establishing Intel India's server division.",
      "As Founding President of SEMI India, he led the launch of the SOLARCON India platform, boosting India's solar industry under the National Solar Mission. As founding Director, he leads the Centre for Innovation and Entrepreneurship at PES University, inspiring over 6,000 students toward innovation and entrepreneurship.",
      "Sathya is also a guest faculty at IIM Bangalore and advises startup founders on early-stage product strategy. He is an alumnus of the MIT Sloan School of Management and Arizona State University."
    ]
  },
  {
    name: 'MADHUKAR NARASIMHA',
    title: 'PROGRAM MANAGER, CIE',
    email: 'cieoffice@pes.edu',
    linkedin: 'https://www.linkedin.com/in/madhukar-narasimha-3a91786/',
    image: '/assets/madhukar-narasimha.jpg',
    bio: [
      "Madhukar is an experienced professional with 30 years in the industry, including over a dozen years at Accenture. He specializes in resource management and has worked globally across 26 countries. He has also been involved in campus recruitment and briefly worked in recruitment at Genisys Software."
    ]
  },
  {
    name: 'TARUN R',
    title: 'Strategic Initiative Manager, CIE',
    email: 'tarunrama@pes.edu',
    linkedin: 'https://www.linkedin.com/in/ramatarun/',
    image: '/assets/tarun-r.jpeg',
    bio: [
      'With over nine years of experience in business development across aerospace, web3, and fintech, Tarun is on a mission to drive innovation and operational excellence. He holds an MSc in Entrepreneurship and Innovation and is dedicated to empowering students and startups with impactful strategies.'
    ]
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={insideCieColors.hero.background}
          accentColor="#f07f1a"
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Meet Our Leadership
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#f07f1a] to-amber-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Experienced leaders driving innovation and entrepreneurship at PES University
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}
              >
                {/* Image */}
                <div className="lg:w-1/3">
                  <div className="relative aspect-square w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-[#f07f1a] to-amber-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-xl bg-gradient-to-r from-[#f07f1a] to-amber-500 bg-clip-text text-transparent font-semibold mb-4">
                      {member.title}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f07f1a] to-amber-500 hover:from-[#d96d15] hover:to-amber-600 text-white rounded-lg transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </a>
                      
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#f07f1a] text-[#f07f1a] hover:bg-[#f07f1a]/10 rounded-lg transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph.substring(0, 50)} className="text-gray-600 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#00338d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Connect with Our Team?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Reach out to us for collaboration opportunities, guidance, or any inquiries about CIE programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => globalThis.location.href = '/contact'}
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Button>
              <Button 
                onClick={() => globalThis.location.href = 'mailto:cieinfo@pes.edu'}
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
              >
                Email CIE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
