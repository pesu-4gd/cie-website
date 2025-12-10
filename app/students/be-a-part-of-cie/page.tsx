'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SECTION_COLORS } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import {
  Users,
  GraduationCap,
  Briefcase,
  Heart,
  Award,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Network,
  Rocket,
  BookOpen,
  Calendar,
  Mail,
  MapPin,
  ExternalLink,
  Brain,
  Cpu,
  Building2,
  Handshake,
  Video
} from 'lucide-react';
import Link from 'next/link';

const studentsColors = SECTION_COLORS.students;

export default function BeAPartOfCIEPage() {
  const whyJoinBenefits = [
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Build teaching, technical, and leadership skills through hands-on roles.'
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'Connect with industry experts, faculty, alumni, and peers to expand your professional network.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Gain practical experience that enhances your resume and career prospects in tech, entrepreneurship, or research.'
    },
    {
      icon: Lightbulb,
      title: 'Impact',
      description: 'Contribute to innovative projects and initiatives that address real-world challenges.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Earn certificates, paid internships, or awards for your contributions.'
    }
  ];

  const taOpportunities = [
    {
      title: 'Train-the-Trainer for PAML Workshop',
      description: 'This program prepares students to become TAs for the PAML+ Workshop, a 4-weekend course focused on AI and machine learning. Participants learn from expert mentors, develop coding skills, and assist in teaching and project guidance during the Summer 2025 workshop.',
      eligibility: 'Open to 4th or 6th-semester students from ECE, CSE, or AIML with strong Python programming skills and an interest in teaching.',
      benefits: [
        'Hands-on experience in AI/ML and teaching',
        'Certificate of completion upon finishing the training phase (January–April 2025)',
        'Paid internship as a TA for the PAML+ Workshop in Summer 2025 (June–July), based on selection criteria'
      ],
      timeline: 'Training phase: January 29–April 16, 2025; Workshop: June–July 2025',
      icon: Brain
    },
    {
      title: 'EIE Course TA Positions',
      description: 'CIE may offer TA roles for courses like the mandatory Essentials of Innovation and Entrepreneurship (EIE) or other workshops (e.g., Practical Approach to Deep Learning). These roles involve assisting faculty with course delivery, grading, or event coordination.',
      eligibility: 'Varies by program; typically open to students with relevant skills and a commitment to teaching.',
      benefits: [
        'Teaching experience in entrepreneurship education',
        'Faculty mentorship and guidance',
        'Certificate of participation'
      ],
      timeline: 'Ongoing throughout the academic year',
      icon: BookOpen
    }
  ];

  const internshipOpportunities = [
    {
      title: 'Student Startup Program',
      description: 'This program supports student-led startups with funding, mentorship, and resources. Internships may be available through funded projects, industry partnerships, or CIE initiatives like the CIE Ignite Ideathon, where top teams receive summer internships.',
      eligibility: 'Open to all PES students, with priority for those enrolled in EIE courses or participating in CIE events.',
      benefits: [
        'Hands-on experience in startup development, project management, or technical innovation',
        'Networking with industry leaders and mentors',
        'Potential for paid internships or funding for your startup'
      ],
      icon: Rocket
    },
    {
      title: 'Centers of Excellence (CoEs)',
      description: 'CoEs like CHIPS, CRAIS, and C-IoT offer research and project-based internships. These roles involve working on cutting-edge technologies like AI, IoT, and quantum computing.',
      eligibility: 'Open to students with relevant skills (e.g., programming, hardware knowledge), typically in the 3rd year or above.',
      benefits: [
        'Exposure to advanced research and industry collaborations',
        'Access to state-of-the-art labs and tools',
        'Potential for academic credit or stipends'
      ],
      centers: [
        { name: 'CHIPS', focus: 'Heterogeneous computing projects supported by CHIPS2Startup grants' },
        { name: 'CRAIS', focus: 'Robotics and automation research, including AR/VR projects' },
        { name: 'C-IoT', focus: 'IoT solutions for smart applications' }
      ],
      icon: Cpu
    },
    {
      title: 'Industry Collaborations',
      description: 'CIE partners with organizations like Cisco, Intel, and Siemens, offering internships through programs like Cisco-Nasscom thingQbator or industry-sponsored projects.',
      eligibility: 'Varies by program; typically open to students with technical or entrepreneurial skills.',
      benefits: [
        'Real-world experience with leading companies',
        'Industry mentorship and guidance',
        'Potential job offers upon completion'
      ],
      icon: Building2
    }
  ];

  const mentorshipRoles = [
    {
      title: 'Student Clubs (E-Cell and CMS)',
      description: 'The Entrepreneurship Cell (E-Cell) and Changemakers\' Society (CMS) offer leadership roles where students can mentor peers in entrepreneurship and sustainability initiatives. For example, CMS organized the CIE Ignite S01 Grand Finale with over 20 volunteers.',
      eligibility: 'Open to all PES students; leadership roles may require active participation or prior involvement.',
      benefits: [
        'Develop leadership and mentorship skills',
        'Build a network with peers, alumni, and industry professionals',
        'Gain recognition for contributions to high-profile events'
      ],
      icon: Heart
    },
    {
      title: 'CIE Mentorship Programs',
      description: 'Programs like the Student Startup Program, I-NCUBATE with GDC-IIT Madras, and CIE Ignite Ideathon offer opportunities for students to mentor peers or be mentored by industry experts and alumni.',
      eligibility: 'Open to students with experience in CIE programs or events; enthusiasm for mentoring is key.',
      benefits: [
        'Enhance communication and leadership skills',
        'Contribute to peer success in entrepreneurial projects',
        'Network with industry mentors and CIE faculty'
      ],
      icon: Handshake
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Event Support & CIE Media Team',
      description: 'Volunteer for CIE events like hackathons, workshops, or the CIE Ignite Ideathon. Roles include event coordination, logistics, participant support, and media coverage.',
      eligibility: 'Open to all PES students; no prior experience required.',
      benefits: [
        'Gain organizational and teamwork skills',
        'Network with CIE staff, mentors, and participants',
        'Build a foundation for more formal roles like TAs or interns'
      ],
      icon: Video
    }
  ];

  const howToApplySteps = [
    {
      step: 1,
      title: 'Explore Opportunities',
      description: 'Review the CIE website for program details and announcements.'
    },
    {
      step: 2,
      title: 'Register for Programs',
      description: 'Submit applications for specific programs (e.g., Train-the-Trainer for PAML) via email to cieprogram@pes.edu or the PES University student portal.'
    },
    {
      step: 3,
      title: 'Contact Centers or Clubs',
      description: 'Reach out to CoE coordinators or E-Cell/CMS leaders for internships or mentorship roles.'
    },
    {
      step: 4,
      title: 'Attend CIE Events',
      description: 'Participate in EIE courses, hackathons, or workshops to connect with opportunities.'
    },
    {
      step: 5,
      title: 'Follow Up',
      description: 'Email cieprogram@pes.edu for personalized guidance or to inquire about unlisted roles.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={studentsColors.hero.background}
          accentColor={studentsColors.hero.hexagonAccent}
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30 mb-8">
              <Users className="w-4 h-4 mr-2" />
              Opportunities for Students
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Be a Part of{' '}
            <span className="block mt-4 text-[#2B9EB3]">
              CIE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            Take active roles as Teaching Assistants, Interns, and Mentors. Whether you're passionate about teaching, eager to gain hands-on experience, or ready to guide your peers, CIE offers structured pathways to engage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-[#2B9EB3] text-white hover:bg-[#238a9c] transition-colors duration-300"
              onClick={() => window.location.href = 'mailto:cieprogram@pes.edu?subject=Interest%20in%20CIE%20Opportunities'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Express Interest
            </Button>
            <Link href="/students">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                Back to Students Hub
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Opportunities for Students as TAs, Interns, and Mentors
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Centre for Innovation and Entrepreneurship (CIE) at PES University is a hub for fostering innovation, entrepreneurship, and real-world impact. We invite students to actively contribute to our mission by taking on roles as Teaching Assistants (TAs), interns, and mentors across various initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join CIE Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join <span className="text-[#2B9EB3]">CIE?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoinBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
                >
                  <Icon className="w-10 h-10 text-[#2B9EB3] mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching Assistant Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <GraduationCap className="w-10 h-10 inline-block mr-3 text-[#2B9EB3]" />
              Teaching Assistant (TA) Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CIE offers TA positions for its courses and workshops, providing students with opportunities to develop teaching and leadership skills while supporting innovative programs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {taOpportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="w-10 h-10 text-[#2B9EB3] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                      <p className="text-sm text-[#2B9EB3] font-medium">{opportunity.timeline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{opportunity.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                    <p className="text-gray-600 text-sm">{opportunity.eligibility}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internship Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Briefcase className="w-10 h-10 inline-block mr-3 text-[#F15A29]" />
              Internship Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CIE provides internships through its programs, Centers of Excellence (CoEs), and industry partnerships, offering practical experience in entrepreneurship, deep tech, and research.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {internshipOpportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all"
                >
                  <Icon className="w-10 h-10 text-[#F15A29] mb-6" />
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{opportunity.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Eligibility:</h4>
                    <p className="text-gray-600 text-xs">{opportunity.eligibility}</p>
                  </div>

                  {'centers' in opportunity && opportunity.centers && (
                    <div className="mb-4 bg-orange-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Focus Areas:</h4>
                      <ul className="space-y-2">
                        {opportunity.centers.map((center, idx) => (
                          <li key={idx} className="text-xs">
                            <span className="font-semibold text-[#F15A29]">{center.name}:</span>{' '}
                            <span className="text-gray-600">{center.focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</h4>
                    <ul className="space-y-1">
                      {opportunity.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-600 text-xs">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentorship Roles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Users className="w-10 h-10 inline-block mr-3 text-green-500" />
              Mentorship Roles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CIE's mentorship ecosystem allows students to mentor peers or be mentored by experts, fostering leadership and collaboration.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mentorshipRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="w-10 h-10 text-green-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{role.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                    <p className="text-gray-600 text-sm">{role.eligibility}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-2">
                      {role.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Heart className="w-10 h-10 inline-block mr-3 text-[#00338d]" />
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Volunteering is an accessible way to engage with CIE and gain experience in event management, coordination, and community building.
            </p>
          </motion.div>

          {volunteerOpportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 max-w-3xl mx-auto"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Icon className="w-10 h-10 text-[#00338d] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                    <p className="text-sm text-gray-500">{opportunity.eligibility}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{opportunity.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these steps to express interest in becoming a TA, intern, or mentor at CIE.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {howToApplySteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative pl-16 ${index === howToApplySteps.length - 1 ? '' : 'pb-8'}`}
                >
                  {/* Vertical line segment - only show if not last item */}
                  {index < howToApplySteps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#2B9EB3] to-[#F15A29]" />
                  )}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#2B9EB3] to-[#3E3C6B] flex items-center justify-center text-white font-bold text-lg z-10">
                    {step.step}
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-16 bg-[#00338d]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Keep track of the latest opportunities and announcements from CIE.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center"
            >
              <Mail className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">CIE Newsletter</h3>
              <p className="text-sm text-blue-100">Subscribe to the CIE Newsletter for updates on opportunities.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center"
            >
              <ExternalLink className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Social Media</h3>
              <p className="text-sm text-blue-100">Follow CIE on LinkedIn and X for the latest news.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center"
            >
              <Calendar className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Website</h3>
              <p className="text-sm text-blue-100">Regularly check the CIE website for announcements.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              For more information or to apply for any of these opportunities:
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2B9EB3]" />
                <a href="mailto:cieprogram@pes.edu" className="text-[#00338d] font-medium hover:underline">
                  cieprogram@pes.edu
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#00338d]" />
                <span className="text-gray-600">CIE Office, PES University RR/EC Campus</span>
              </div>
            </div>

            <Button
              size="lg"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-[#00338d] hover:bg-white/10 rounded-lg font-semibold transition-colors"
              onClick={() => window.location.href = 'mailto:cieprogram@pes.edu?subject=Interest%20in%20CIE%20Opportunities'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="mt-8 text-xl font-semibold text-gray-900">
              Join CIE today to shape the future of innovation and entrepreneurship at PES University!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
