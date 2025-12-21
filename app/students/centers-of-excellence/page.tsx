"use client";

import React from 'react';
import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { SECTION_COLORS, hexToRgb } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { BookOpen, Users, Award, Building2, FlaskConical, Rocket, Link2 } from 'lucide-react';
import './page.css';

// coeList removed (we render a curated overview below from provided content)
// Hex background removed in favor of shared `InteractiveHexagonBackground` used on the site root.

export default function CentersOfExcellencePage() {
  const studentsColors = SECTION_COLORS.students;
  const stats = [
    { label: 'Research Centers', value: '8+', icon: Building2, color: 'blue' },
    { label: 'Active Projects', value: '50+', icon: FlaskConical, color: 'green' },
    { label: 'Industry Partners', value: '30+', icon: Users, color: 'purple' },
    { label: 'Publications', value: '100+', icon: BookOpen, color: 'orange' }
  ];



  // Full overview list (from provided content) — used in the overview table below
  const centersOverview = [
    { short: 'CCNCS', name: 'Center for Computer Networks and Cyber Security (CCNCS)', description: 'Focuses on improving internet security and building protected next-generation ecosystems, addressing challenges in cybersecurity and network infrastructure.', logo: '/assets/ccncs.jpg', url: '' },
    { short: 'CHIPS', name: 'Centre for Heterogeneous and Intelligent Processing Systems (CHIPS)', description: 'Researches heterogeneous computing using CPUs, GPUs, and FPGAs, supported by grants like CHIPS2Startup from MEITY, driving advancements in high-performance computing.', logo: '/assets/chips.jpg', url: '' },
    { short: 'QuaNaD', name: 'Quantum and Nano Devices Lab (QuaNaD)', description: 'Explores quantum and nano technologies, focusing on innovative device development for applications in computing and materials science.', logo: '/assets/quanad.jpg', url: '' },
    { short: 'CoDMAV', name: 'Centre for Data Modelling, Analytics and Visualization (CoDMAV)', description: 'Specializes in data modeling, analytics, and visualization techniques to derive insights from complex datasets, supporting AI and business intelligence applications.', logo: '/assets/codmav.jpg', url: '' },
    { short: 'CRSST', name: 'Centre for Research in Space Science and Technology (CRSST)', description: 'Advances research in space science and technology, including satellite systems, astrophysics, and space exploration technologies.', logo: '/assets/crsst.jpg', url: '' },
    { short: 'CRAIS', name: 'Centre for Robotics, Automation & Intelligent Systems (CRAIS)', description: 'Develops cutting-edge solutions in robotics, automation, and intelligent systems, integrating AI and IoT for real-world applications.', logo: '/assets/rais.jpg', url: '' },
    { short: 'Cloud & Big Data', name: 'Centre for Cloud Computing & Big Data', description: 'Innovates in cloud computing architectures and big data analytics, enabling scalable and efficient data processing solutions.', logo: '/assets/ccbd.jpg', url: '' },
    { short: 'CORI', name: 'Crucible of Research and Innovation (CORI)', description: 'Combines faculty expertise and student enthusiasm to create leading-edge solutions across multiple disciplines, fostering interdisciplinary innovation.', logo: '/assets/cori.jpg', url: '' },
    { short: 'C-ISFCR', name: 'Center of Excellence in Information Security, Forensics, and Cyber Resilience (C-ISFCR)', description: 'Provides facilities to test practical aspects of information security, focusing on forensics, cyber resilience, and threat mitigation.', logo: '/assets/isfcr.jpg', url: '' },
    { short: 'C-IoT', name: 'Center of Excellence in Internet of Things (C-IoT)', description: 'Drives the development of IoT solutions, integrating sensors, connectivity, and data analytics for smart applications.', logo: '/assets/pesu-iot.jpg', url: '' },
    { short: 'Pattern Recognition', name: 'Center for Pattern Recognition', description: 'Advances techniques in pattern analysis and machine learning for applications in image processing, speech recognition, and data mining.', logo: '/assets/cprmi.jpg', url: '' },
    { short: 'KANOE', name: 'Knowledge Analytics & Ontological Engineering (KANOE)', description: 'Focuses on knowledge analytics, semantic technologies, and ontological engineering to enhance data interoperability and intelligence.', logo: '/assets/kanoe.jpg', url: '' },
    { short: 'Intelligent Systems', name: 'Centre for Intelligent Systems', description: 'Researches AI-driven intelligent systems for automation, decision-making, and human-machine interaction.', logo: '/assets/cis.jpg', url: '' },
    { short: 'Photonics & Quantum', name: 'Laboratory of Photonics & Quantum Technology', description: 'Explores photonics and quantum technologies for applications in communication, sensing, and computing.', logo: '/assets/lpqt.jpg', url: '' },
    { short: 'CDSAML', name: 'Center for Data Sciences and Applied Machine Learning (CDSAML)', description: 'Applies machine learning to data sciences, enabling predictive analytics and decision support systems.', logo: '/assets/cdsaml.jpg', url: '' },
    { short: 'C3I', name: 'Centre of Cognitive Computing and Computational Intelligence (C3I)', description: 'Innovates in cognitive computing and computational intelligence, focusing on AI systems that mimic human cognition.', logo: '/assets/c3i.jpg', url: '' }
  ];

  const collaborationOpportunities = [
    {
      title: 'Research Internships',
      description: 'Work directly with faculty on cutting-edge research projects',
      duration: '3-6 months',
      eligibility: 'All undergraduate & graduate students',
      benefits: ['Research experience', 'Faculty mentorship', 'Publication opportunities', 'Industry exposure']
    },
    {
      title: 'Capstone Projects',
      description: 'Final year projects in collaboration with industry partners',
      duration: '6-12 months',
      eligibility: 'Final year students',
      benefits: ['Industry mentorship', 'Real-world problem solving', 'Job placement support', 'Startup opportunities']
    },
    {
      title: 'PhD & Masters Research',
      description: 'Advanced research degrees with full funding support',
      duration: '2-5 years',
      eligibility: 'Graduate students',
      benefits: ['Full scholarship', 'Research assistantship', 'Conference funding', 'International exposure']
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden"
        style={
          {
            ['--cie-blue']: studentsColors.primary,
            ['--students-primary-rgb']: hexToRgb(studentsColors.primary),
            ['--students-secondary-rgb']: hexToRgb(studentsColors.secondary),
            ['--students-accent-rgb']: hexToRgb(studentsColors.accent)
          } as React.CSSProperties
        }
      >

        {/* Interactive hex background (reuse site component for consistent visual language) */}
        <InteractiveHexagonBackground
          primaryColor={studentsColors.hero?.background ?? studentsColors.primary}
          accentColor={studentsColors.hero?.hexagonAccent ?? studentsColors.accent}
          hexagonSize={100}
          className="absolute inset-0 z-0"
        />

        {/* Decorative gradient layer for stronger contrast — translucent and non-blocking so hexagon remains visible and interactive */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay students-hero-gradient"
          aria-hidden="true"
        />

        {/* Decorative orbs (subtle) — use students tokens and remain non-interactive */}
        <div
          className="absolute top-16 right-16 w-56 h-56 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse pointer-events-none"
          style={{ backgroundColor: `rgba(${hexToRgb(studentsColors.accent)}, 0.16)` }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-16 left-16 w-56 h-56 rounded-full mix-blend-multiply filter blur-xl opacity-24 animate-pulse pointer-events-none"
          style={{ backgroundColor: `rgba(${hexToRgb(studentsColors.secondary)}, 0.12)` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center" style={{ ['--cie-blue']: studentsColors.primary } as React.CSSProperties}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30">
                <FlaskConical className="w-4 h-4 mr-2" />
                Research Excellence
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Centers of Excellence{' '}
              <span className="block" style={{ color: studentsColors.accent }}>at PES University</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Centers of Excellence
            </h2>
            <div className="max-w-5xl mx-auto space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                PES University's Centers of Excellence (CoEs) are hubs for cutting-edge research and innovation, offering students unparalleled opportunities to engage in transformative projects.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Aligned with the Centre for Innovation and Entrepreneurship (CIE) and other university divisions, these centers focus on fields like artificial intelligence, cybersecurity, quantum technology, and sustainability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                They provide access to advanced facilities, industry partnerships, and expert mentorship, empowering students to contribute to groundbreaking solutions.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Centers Grid */}
      <section className="py-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#00338d]">Research</span> Centers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class research facilities focusing on emerging technologies and industry collaboration.
            </p>
          </motion.div> */}

          {/* <div className="grid lg:grid-cols-2 gap-8">
            {centers.map((center, index) => {
              const IconComponent = center.icon;
              return (
                <motion.div
                  key={center.acronym}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4" style={{ background: studentsColors.gradient.css }}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{center.acronym}</h3>
                      <p className="text-sm text-gray-600 mt-1">{center.name}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {center.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Research Areas</h4>
                      <div className="space-y-2">
                        {center.researchAreas.slice(0, 3).map((area, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: studentsColors.accent }} />
                            <span>{area}</span>
                          </div>
                        ))}
                        {center.researchAreas.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{center.researchAreas.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Facilities</h4>
                      <div className="space-y-2">
                        {center.facilities.slice(0, 3).map((facility, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Building2 className="w-3 h-3 mr-2 text-gray-400" />
                            <span>{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Opportunities</h4>
                      <div className="space-y-2">
                        {center.opportunities.slice(0, 3).map((opportunity, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Target className="w-3 h-3 mr-2 text-gray-400" />
                            <span>{opportunity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <Button asChild className={`bg-gradient-to-r ${getColorClasses(center.color)} text-white px-4 py-2 rounded-xl text-sm`}>
                      <a href={`mailto:${center.contact}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Center
                      </a>
                    </Button>
                    <div className="text-sm text-gray-500">
                      {center.contact}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div> */}

          {/* Simple listing of all CoEs from data file - exclude any already shown in `centers` to avoid duplicates */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Centers of Excellence</h2>
            <p className="text-sm text-gray-600 mb-6 max-w-3xl">Below is a comprehensive overview of the CoEs, their focus areas, and how students can get involved.</p>

            <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Center</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Short</th>
                  </tr>
                </thead>
                <tbody>
                  {centersOverview.map((c) => (
                    <tr key={c.short} className="border-t last:border-b hover:bg-[#b7e2ec]">
                      <td className="px-6 py-4 align-top text-sm text-gray-800 font-semibold">
                        <div className="flex items-center">
                          {c.logo && (
                            <img src={c.logo} alt={`${c.short} logo`} className="w-12 h-12 object-cover rounded-md mr-4" />
                          )}
                          <div className="text-sm font-semibold text-gray-800">
                            {c.url ? (
                              <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {c.name}
                              </a>
                            ) : (
                              c.name
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 align-top text-sm text-gray-700">{c.description}</td>
                      <td className="px-6 py-4 align-top text-sm text-gray-600 hover:text-[#268295]">{c.short}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Collaboration <span className="text-[#f07f1a]">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple pathways to engage with our research centers and contribute to cutting-edge innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Duration:</span>
                    <span className="text-sm text-gray-600">{opportunity.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Eligibility:</span>
                    <span className="text-sm text-gray-600">{opportunity.eligibility}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Benefits</h4>
                  <div className="space-y-2">
                    {opportunity.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <a href="mailto:cieprogram@pes.edu" style={{ background: studentsColors.gradient.css, display: 'inline-block', padding: '0.75rem 1rem', color: '#fff', borderRadius: 12, textAlign: 'center' }}>
                      Enquire
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research <span className="text-[#00338d]">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our centers collaborate with industry partners and drive real-world innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
              <Rocket className="w-10 h-10 text-[#2B9EB3] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Partnerships</h3>
              <p className="text-gray-600 mb-4">
                30+ active collaborations with leading technology companies and research institutions.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Cisco, Intel, TCS, Infosys, Microsoft Research
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
              <BookOpen className="w-10 h-10 text-[#2B9EB3] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Publications & Patents</h3>
              <p className="text-gray-600 mb-4">
                100+ research publications in top-tier conferences and journals with 15+ patents filed.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                IEEE, ACM, Nature, Science, USPTO
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
              <Users className="w-10 h-10 text-[#2B9EB3] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Success</h3>
              <p className="text-gray-600 mb-4">
                200+ students engaged in research with 50+ securing placements in top companies and PhD programs.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Google, Amazon, Microsoft, Stanford, MIT
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#00338d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join our world-class research centers and work on cutting-edge projects with industry partners and renowned faculty.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <FlaskConical className="w-5 h-5 mr-2" />
                Explore Research
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Mail className="w-5 h-5 mr-2" />
                Contact Centers
              </Button>
            </div> */}

            <div className="mt-8">
              <p className="text-blue-100 mb-4">Have questions about research opportunities?</p>
              <Button asChild className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl">
                <a href="mailto:cieprogram@pes.edu">
                  <Link2 className="w-4 h-4 mr-2" />
                  Get Connected
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}