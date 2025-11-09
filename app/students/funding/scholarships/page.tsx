'use client';

import { motion } from 'framer-motion';
import { Award, Users, DollarSign, Calendar, FileText, CheckCircle, ArrowRight, GraduationCap, Heart, Target } from 'lucide-react';
import { Button } from '@/components/design-system';
import { SECTION_COLORS } from '@/styles/colors';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';

export default function Scholarships() {
  const studentsColors = SECTION_COLORS.students;

  // expose primary color as a CSS variable for hover states
  const cssVars = {
    '--cie-blue': studentsColors.primary,
  } as React.CSSProperties;

  const scholarshipPrograms = [
    {
      name: 'CIE Diversity Excellence Scholarship',
      amount: '₹50,000',
      duration: '1 Academic Year',
      eligibility: 'Students from underrepresented communities',
      deadline: 'March 15, 2024',
  description: 'Supporting talented students from diverse backgrounds to pursue innovation and entrepreneurship.',
      benefits: [
        'Full tuition support for CIE programs',
        'Mentorship from industry leaders',
        'Access to exclusive networking events',
        'Internship placement assistance'
      ],
      requirements: [
        'Academic excellence (GPA ≥ 8.0)',
        'Demonstrated leadership potential',
        'Financial need assessment',
        'Essay on innovation impact'
      ],
      color: 'green',
      status: 'open'
    },
    {
      name: 'Women in Tech Innovation Grant',
      amount: '₹75,000',
      duration: '1 Academic Year',
      eligibility: 'Female students in technology programs',
      deadline: 'April 30, 2024',
      description: 'Empowering women entrepreneurs to lead in technology and innovation sectors.',
      benefits: [
        'Research project funding',
        'Conference participation support',
        'Female entrepreneur mentorship',
        'Startup incubation priority'
      ],
      requirements: [
        'Enrollment in tech/engineering programs',
        'Innovative project proposal',
        'Community service involvement',
        'Recommendation letters'
      ],
      color: 'green',
      status: 'open'
    },
    {
      name: 'Rural Innovation Scholarship',
      amount: '₹40,000',
      duration: '1 Academic Year',
      eligibility: 'Students from rural backgrounds',
      deadline: 'May 15, 2024',
      description: 'Supporting rural students to bring innovation solutions to their communities.',
      benefits: [
        'Living stipend support',
        'Technology access grants',
        'Rural innovation lab access',
        'Community project funding'
      ],
      requirements: [
        'Rural background verification',
        'Community impact proposal',
        'Academic merit (GPA ≥ 7.5)',
        'Local endorsement letter'
      ],
      color: 'green',
      status: 'open'
    }
  ];

  const getColorClasses = (color: string, status: string) => {
    if (status === 'closed') {
      return 'bg-gray-50 border-gray-300 text-gray-600';
    }
    
    const colors = {
      green: 'bg-green-50 border-green-300 text-green-700',
      purple: 'bg-purple-50 border-purple-300 text-purple-700',
      orange: 'bg-orange-50 border-orange-300 text-orange-700',
      blue: 'bg-blue-50 border-blue-300 text-blue-700'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-50 border-gray-300 text-gray-700';
  };

  const getBadgeColor = (color: string, status: string) => {
    if (status === 'closed') {
      return 'bg-gray-500';
    }
    
    const colors = {
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      blue: 'bg-blue-500'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen" style={cssVars}>
  {/* Hero Section (themed with interactive hexagon background) */}
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden" style={{ background: studentsColors.gradient.css }}>
        <InteractiveHexagonBackground
          primaryColor={studentsColors.hero?.background}
          accentColor={studentsColors.hero?.hexagonAccent}
          className="absolute inset-0 z-0"
        />

        {/* subtle overlay shapes (allow pointer events through to hex bg) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/8 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/8 rounded-full blur-3xl" />
          <div className={`absolute inset-0 bg-gradient-to-r from-[${studentsColors.primary}]/8 to-[${studentsColors.secondary}]/8 pointer-events-none`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                Financial Support
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Scholarship <span style={{ color: studentsColors.primary }}>Programs</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: `${studentsColors.primary}cc` }}>
              Supporting talented students from all backgrounds to pursue innovation and entrepreneurship without financial barriers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <DollarSign className="w-8 h-8 mx-auto mb-4" style={{ color: studentsColors.primary }} />
              <div className="text-2xl font-bold text-gray-900 mb-2">₹1.65L</div>
              <div className="text-sm text-gray-600">Total Funding</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <Users className="w-8 h-8 mx-auto mb-4" style={{ color: studentsColors.primary }} />
              <div className="text-2xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-sm text-gray-600">Active Programs</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <Calendar className="w-8 h-8 mx-auto mb-4" style={{ color: studentsColors.primary }} />
              <div className="text-2xl font-bold text-gray-900 mb-2">Open</div>
              <div className="text-sm text-gray-600">Applications</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <GraduationCap className="w-8 h-8 mx-auto mb-4" style={{ color: studentsColors.primary }} />
              <div className="text-2xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-sm text-gray-600">Recipients</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scholarship Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available <span className="text-green-600">Scholarships</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our scholarship programs designed to support diverse talents and backgrounds.
            </p>
          </motion.div>

          <div className="space-y-8">
            {scholarshipPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`border-2 rounded-3xl p-8 ${getColorClasses(program.color, program.status)}`}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Program Overview */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 ${getBadgeColor(program.color, program.status)} rounded-full flex items-center justify-center`}>
                            <Award className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
                            <p className="text-gray-600">{program.eligibility}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {program.description}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${program.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                        {program.status === 'open' ? 'Applications Open' : 'Applications Closed'}
                      </span>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Program Benefits</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {program.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {program.requirements.map((requirement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{requirement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Scholarship Amount</h5>
                        <p className="text-2xl font-bold text-gray-900">{program.amount}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Duration</h5>
                        <p className="text-gray-700">{program.duration}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Application Deadline</h5>
                        <p className="text-gray-700 font-medium">{program.deadline}</p>
                      </div>

                      {program.status === 'open' ? (
                        <Button asChild className="w-full py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: studentsColors.primary }}>
                          <a href="mailto:cieprogram@pes.edu" className="inline-flex items-center justify-center w-full">
                            <FileText className="w-4 h-4 mr-2" />
                            Inquire
                          </a>
                        </Button>
                      ) : (
                        <Button className="w-full py-3 rounded-xl font-semibold bg-gray-300 text-gray-600 cursor-not-allowed" disabled>
                          Applications Closed
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to <span className="text-green-600">Apply</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to submit your scholarship application and join our community of supported innovators.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Choose Program',
                description: 'Review eligibility criteria and select the scholarship that matches your background.',
                icon: Target
              },
              {
                step: '2',
                title: 'Gather Documents',
                description: 'Prepare required documents including transcripts, essays, and recommendation letters.',
                icon: FileText
              },
              {
                step: '3',
                title: 'Submit Application',
                description: 'Complete the online application form and upload all required documents.',
                icon: CheckCircle
              },
              {
                step: '4',
                title: 'Interview & Selection',
                description: 'Participate in the selection process and await notification of results.',
                icon: Users
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <step.icon className="w-8 h-8 text-green-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
  <section className="py-20" style={{ background: studentsColors.gradient.css }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
              Don't let financial constraints limit your potential. Apply for our scholarship programs and join a community committed to innovation and excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="px-8 py-4 text-lg font-semibold rounded-xl text-white" style={{ backgroundColor: studentsColors.primary }}>
                <a href="mailto:cieprogram@pes.edu" className="inline-flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Inquire
                </a>
              </Button>

              <Button 
                onClick={() => window.location.href = '/contact'}
                className="border-2 text-white px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
                style={{ borderColor: studentsColors.primary }}
              >
                Get Help with Application
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
