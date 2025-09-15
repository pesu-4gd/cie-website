'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Atom, 
  Brain,
  Zap,
  Globe,
  Database,
  ChipIcon,
  Microscope,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Target,
  Lightbulb,
  Building2,
  FlaskConical,
  Rocket,
  Link2,
  Mail
} from 'lucide-react';

export default function CentersOfExcellencePage() {
  const stats = [
    { label: 'Research Centers', value: '8+', icon: Building2, color: 'blue' },
    { label: 'Active Projects', value: '50+', icon: FlaskConical, color: 'green' },
    { label: 'Industry Partners', value: '30+', icon: Users, color: 'purple' },
    { label: 'Publications', value: '100+', icon: BookOpen, color: 'orange' }
  ];

  const centers = [
    {
      name: 'Centre for Robotics, Automation & Intelligent Systems (CRAIS)',
      acronym: 'CRAIS',
      description: 'Leading research in robotics, automation, and AI systems with focus on practical applications and industry collaboration.',
      icon: Cpu,
      color: 'blue',
      researchAreas: [
        'Autonomous Robotics',
        'Industrial Automation', 
        'Computer Vision',
        'Machine Learning Applications',
        'Human-Robot Interaction'
      ],
      facilities: [
        'Advanced Robotics Lab',
        'Automation Testing Facility',
        'AI Computing Cluster',
        'Prototype Development Workshop'
      ],
      opportunities: [
        'Research Internships',
        'Capstone Projects',
        'Industry Collaborations',
        'Conference Presentations'
      ],
      contact: 'crais@pes.edu'
    },
    {
      name: 'Quantum and Nano Devices Lab (QuaNaD)',
      acronym: 'QuaNaD',
      description: 'Cutting-edge research in quantum computing, nanotechnology, and advanced semiconductor devices.',
      icon: Atom,
      color: 'purple',
      researchAreas: [
        'Quantum Computing',
        'Nanotechnology',
        'Quantum Devices',
        'Semiconductor Physics',
        'Quantum Information Systems'
      ],
      facilities: [
        'Clean Room Facility',
        'Quantum Testing Lab',
        'Nano Fabrication Unit',
        'Characterization Equipment'
      ],
      opportunities: [
        'PhD Research Programs',
        'Masters Thesis Projects',
        'International Collaborations',
        'Technology Transfer Projects'
      ],
      contact: 'quanad@pes.edu'
    },
    {
      name: 'Centre for IoT & Cyber Physical Systems',
      acronym: 'C-IoT',
      description: 'Research and development in Internet of Things, cyber-physical systems, and smart city technologies.',
      icon: Globe,
      color: 'green',
      researchAreas: [
        'IoT Architecture',
        'Smart City Solutions',
        'Cyber-Physical Systems',
        'Edge Computing',
        'Wireless Sensor Networks'
      ],
      facilities: [
        'IoT Testbed',
        'Smart City Simulation Lab',
        'Sensor Network Facility',
        'Cloud Computing Infrastructure'
      ],
      opportunities: [
        'Smart City Projects',
        'Industry Partnerships',
        'Startup Incubation',
        'Innovation Challenges'
      ],
      contact: 'ciot@pes.edu'
    },
    {
      name: 'CHIPS (Centre for Hardware & Integrated Processor Systems)',
      acronym: 'CHIPS',
      description: 'Advanced research in computer hardware, processor design, and integrated systems.',
      icon: ChipIcon,
      color: 'orange',
      researchAreas: [
        'Processor Design',
        'VLSI Technology',
        'Embedded Systems',
        'Hardware Security',
        'System-on-Chip Design'
      ],
      facilities: [
        'VLSI Design Lab',
        'Hardware Prototyping Facility',
        'Testing & Validation Lab',
        'Fabrication Partnerships'
      ],
      opportunities: [
        'Chip Design Projects',
        'Hardware Startups',
        'Industry Internships',
        'Patent Development'
      ],
      contact: 'chips@pes.edu'
    },
    {
      name: 'Centre for Cloud Computing, Networking & Cybersecurity (CCNCS)',
      acronym: 'CCNCS',
      description: 'Research excellence in cloud technologies, network systems, and cybersecurity solutions.',
      icon: Database,
      color: 'red',
      researchAreas: [
        'Cloud Computing',
        'Network Security',
        'Cybersecurity',
        'Distributed Systems',
        'Data Privacy'
      ],
      facilities: [
        'Cloud Infrastructure Lab',
        'Cybersecurity Testing Center',
        'Network Simulation Facility',
        'Security Analytics Lab'
      ],
      opportunities: [
        'Security Research Projects',
        'Industry Consulting',
        'Certification Programs',
        'Hackathon Participation'
      ],
      contact: 'ccncs@pes.edu'
    },
    {
      name: 'Centre for Data Sciences & Applied ML (CDSAML)',
      acronym: 'CDSAML',
      description: 'Advanced research in data science, machine learning, and artificial intelligence applications.',
      icon: Brain,
      color: 'indigo',
      researchAreas: [
        'Machine Learning',
        'Data Analytics',
        'Artificial Intelligence',
        'Big Data Processing',
        'Predictive Modeling'
      ],
      facilities: [
        'High-Performance Computing Cluster',
        'Data Analytics Lab',
        'ML Model Development Studio',
        'Visualization Centers'
      ],
      opportunities: [
        'AI Research Projects',
        'Data Science Internships',
        'ML Model Development',
        'Industry Data Projects'
      ],
      contact: 'cdsaml@pes.edu'
    }
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600', 
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00338d] via-indigo-700 to-[#f07f1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30">
                <FlaskConical className="w-4 h-4 mr-2" />
                Research Excellence
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Centers of
              <span className="block text-blue-200">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Engage with PES University's Centers of Excellence for cutting-edge research and innovation opportunities across AI, IoT, quantum technology, and more.
            </p>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
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
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
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
                    <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(center.color)} rounded-2xl flex items-center justify-center mr-4`}>
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
                            <div className={`w-2 h-2 bg-${center.color}-500 rounded-full mr-2`} />
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
                    <Button 
                      className={`bg-gradient-to-r ${getColorClasses(center.color)} text-white px-4 py-2 rounded-xl text-sm`}
                      onClick={() => window.location.href = `mailto:${center.contact}`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Center
                    </Button>
                    <div className="text-sm text-gray-500">
                      {center.contact}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
                
                <Button className="w-full bg-[#00338d] hover:bg-blue-700 text-white">
                  Apply Now
                </Button>
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
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-blue-600" />
              </div>
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
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Publications & Patents</h3>
              <p className="text-gray-600 mb-4">
                100+ research publications in top-tier conferences and journals with 15+ patents filed.
              </p>
              <div className="text-sm text-green-600 font-medium">
                IEEE, ACM, Nature, Science, USPTO
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Success</h3>
              <p className="text-gray-600 mb-4">
                200+ students engaged in research with 50+ securing placements in top companies and PhD programs.
              </p>
              <div className="text-sm text-purple-600 font-medium">
                Google, Amazon, Microsoft, Stanford, MIT
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#00338d] to-[#f07f1a]">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                <FlaskConical className="w-5 h-5 mr-2" />
                Explore Research
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent">
                <Mail className="w-5 h-5 mr-2" />
                Contact Centers
              </Button>
            </div>
            
            <div className="mt-8">
              <p className="text-blue-100 mb-4">Have questions about research opportunities?</p>
              <Button 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl"
                onClick={() => window.location.href = 'mailto:cieprogram@pes.edu'}
              >
                <Link2 className="w-4 h-4 mr-2" />
                Get Connected
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}