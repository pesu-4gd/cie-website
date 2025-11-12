'use client';

import React, { useState } from 'react';
import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Trophy, 
  Star, 
  Lightbulb, 
  TrendingUp,
  CheckCircle,
  Crown, 
  Mail,
  Code,
  Presentation,
  GraduationCap,
  Heart,
  Eye,
  Shield,
  Zap,
  Users2,
  Send,
  PhoneCall,
  Users,
  Rocket
} from 'lucide-react';

export default function IndustryCompetitionsPage() {
  const [activeTab, setActiveTab] = useState('opportunities');

  const engagementOpportunities = [
    {
      title: 'Propose a Hackathon',
      description: 'Host a hackathon to challenge PES students to innovate and solve industry-relevant problems',
      icon: Code,
      format: '24-hour or multi-day hackathon with themed challenges',
      example: '24-Hour Commerce Hackathon 2022 at PESU52 - students built businesses from scratch, top teams won prizes up to ₹10,000',
      benefits: [
        'Identify talent through project submissions',
        'Offer internships to top teams',
        'Gain visibility among coding enthusiasts'
      ],
      featured: true
    },
    {
      title: 'Host a Workshop',
      description: 'Share your expertise by hosting workshops for PES students on emerging technologies or industry skills',
      icon: Presentation,
      format: 'Half-day or full-day workshops on AI, cybersecurity, Web3, etc.',
      example: 'AI for Road Safety session with Dr. Anbumani Subramanian and Intel AMAs since 2018',
      benefits: [
        'Build connections with interested students',
        'Enhance reputation as thought leader',
        'Foster potential collaborations'
      ],
      featured: false
    },
    {
      title: 'Offer Scholarships',
      description: 'Support student innovators by offering scholarships to recognize academic and entrepreneurial excellence',
      icon: GraduationCap,
      format: 'Scholarship programs for top performers in hackathons, ideathons, or academic categories',
      example: 'Similar to PES University\'s existing scholarship model for top batch performers',
      benefits: [
        'Encourage talent development',
        'Build lasting relationships with recipients',
        'Support future employees or collaborators'
      ],
      featured: false
    }
  ];

  const whyPropose = [
    {
      title: 'Foster Innovation',
      description: 'Challenge students to solve real-world problems, as seen in events like inGenius 2019',
      icon: Lightbulb,
      color: 'orange'
    },
    {
      title: 'Identify Talent',
      description: 'Spot top performers for internships, similar to CIE Ignite Ideathon winners securing internships with Cisco in 2024',
      icon: Eye,
      color: 'orange'
    },
    {
      title: 'Enhance Brand Visibility',
      description: 'Gain exposure among tech-savvy students through event sponsorship and participation',
      icon: TrendingUp,
      color: 'orange'
    },
    {
      title: 'Support Skill Development',
      description: 'Share industry expertise through workshops, preparing students for tech-driven careers',
      icon: Users2,
      color: 'orange'
    },
    {
      title: 'Contribute to Education',
      description: 'Offer scholarships to support student innovators, encouraging academic excellence',
      icon: Heart,
      color: 'orange'
    }
  ];

  const successStories = [
    {
      year: '2023',
      title: 'Code of Honour 2023',
      description: '24-hour hackathon,featuring "Operation Blackout" digital escape room',
      achievement: 'Top 8 teams presented to a renowned panel including Dr. K.S. Sridhar and Dr. V. Krishna',
      impact: 'Gained recognition and valuable feedback from industry experts',
      icon: Shield
    },
    {
      year: '2020',
      title: 'Decypher 2020 Hackathon',
      description: 'Engaged 80 teams in tech innovation with industry sponsors judging projects',
      achievement: 'Industry sponsors offered internships to top performers ',
      impact: 'Showcased talent identification potential of hackathons',
      icon: Zap
    },
    {
      year: '2019',
      title: 'inGenius 2019',
      description: 'Open hackathon that allowed students to tackle real-world problems',
      achievement: 'Winners secured internships with sponsors like IBM and Intel',
      impact: 'Demonstrated impact of industry engagement and innovation',
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700">
        <InteractiveHexagonBackground
          primaryColor={SECTION_COLORS.industry.hero.background}
          accentColor={SECTION_COLORS.industry.hero.hexagonAccent}
          hexagonSize={72}
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-500/20 text-white border border-orange-400/30">
                <Trophy className="w-4 h-4 mr-2" />
                Industry Engagement
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Engage PES Students Through
              <span className="block mt-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Hackathons, Workshops, and Scholarships
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
                onClick={() => window.open('mailto:cieinfo@pes.edu')}
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Proposal
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                The Centre for Innovation and Entrepreneurship (CIE) at PES University invites industry partners to engage our talented student community. 
                Foster innovation, develop skills, and identify top talent through competitive and educational initiatives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Propose Competitions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Propose Competitions with CIE?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Engaging with PES students through competitions offers mutual benefits for industries and students. 
              Drive innovation, identify talent, and contribute to the next generation of tech leaders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {whyPropose.map((reason, index) => {
              const IconComponent = reason.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                orange: 'bg-orange-100 text-orange-600',
                pink: 'bg-pink-100 text-pink-600'
              } as const;
              
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${colorClasses[reason.color as keyof typeof colorClasses]}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Tabbed Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white">
              <TabsTrigger 
                value="opportunities" 
                className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:border-orange-600 data-[state=active]:border-2
                rounded-xl"
              >
                <Trophy className="h-5 w-5 mr-2" />
                Opportunities
              </TabsTrigger>
              <TabsTrigger 
                value="success-stories" 
                className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:border-orange-600 data-[state=active]:border-2
                rounded-xl"
              >
                <Star className="h-5 w-5 mr-2" />
                Success Stories
              </TabsTrigger>
              <TabsTrigger 
                value="how-to-propose" 
                className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:border-orange-600 data-[state=active]:border-2 rounded-xl"
              >
                <Send className="h-5 w-5 mr-2" />
                How to Propose
              </TabsTrigger>
            </TabsList>

            <TabsContent value="opportunities">
              <OpportunitiesSection opportunities={engagementOpportunities} />
            </TabsContent>

            <TabsContent value="success-stories">
              <SuccessStoriesSection stories={successStories} />
            </TabsContent>

            <TabsContent value="how-to-propose">
              <HowToProposeSection />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Engage with PES Talent?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join industry leaders in fostering innovation and identifying exceptional talent through CIE competitions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:cieinfo@pes.edu"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                Submit Proposal
              </a>
              <a
                href="mailto:cieinfo@pes.edu"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-colors"
              >
                <PhoneCall className="h-5 w-5 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Component Sections
function OpportunitiesSection({ opportunities }: { opportunities: Array<{
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  format: string;
  example: string;
  benefits: string[];
  featured: boolean;
}> }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Competition and Engagement Opportunities</h2>
        <p className="text-xl text-gray-600">
          Choose from various engagement formats to connect with PES students
        </p>
      </div>
      
      <div className="space-y-12">
        {opportunities.map((opportunity, index) => {
          const IconComponent = opportunity.icon;
          return (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-3xl border-2 hover:shadow-xl transition-all duration-300 ${
                opportunity.featured ? 'border-orange-200 ring-2 ring-orange-100' : 'border-gray-200'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      opportunity.featured ? 'bg-orange-100' : 'bg-orange-100'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        opportunity.featured ? 'text-orange-600' : 'text-orange-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{opportunity.title}</h3>
                      {opportunity.featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mt-2">
                          <Crown className="w-3 h-3 mr-1" />
                          Most Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{opportunity.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Format:</h4>
                      <p className="text-gray-600">{opportunity.format}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Example Success:</h4>
                      <p className="text-gray-600 italic">{opportunity.example}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Benefits:</h4>
                  <ul className="space-y-3">
                    {opportunity.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Button 
                      className={`w-full py-3 rounded-xl font-semibold ${
                        opportunity.featured 
                          ? 'bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white' 
                          : 'bg-orange-600 hover:bg-orange-700 text-white'
                      }`}
                      onClick={() => window.open('mailto:cieinfo@pes.edu?subject=Competition Proposal – [Your Company Name]&body=Dear CIE Team,%0A%0AI would like to propose a ' + opportunity.title.toLowerCase() + ' for PES University students.%0A%0ACompetition Details:%0A- Type: ' + opportunity.title + '%0A- Proposed theme or focus area:%0A- Target audience:%0A- Duration and preferred timeline:%0A- Prizes, funding, or internship opportunities:%0A%0AThank you for your time.%0A%0ABest regards,', '_blank')}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Propose This
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SuccessStoriesSection({ stories }: { stories: Array<{
  year: string;
  title: string;
  description: string;
  achievement: string;
  impact: string;
  icon: React.ComponentType<{ className?: string }>;
}> }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Success <span className="text-orange-600">Stories</span>
        </h2>
        <p className="text-xl text-gray-600">
          Discover how our past industry partnerships have created meaningful impact
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {stories.map((story, index) => {
          const IconComponent = story.icon;
          return (
            <motion.div
              key={`${story.year}-${story.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-600">{story.year}</h4>
                  <h3 className="font-bold text-gray-900">{story.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{story.description}</p>

              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm">Achievement:</h5>
                  <p className="text-gray-600 text-sm">{story.achievement}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm">Impact:</h5>
                  <p className="text-gray-600 text-sm">{story.impact}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function HowToProposeSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Propose a Competition</h2>
        <p className="text-xl text-gray-600">
          CIE is developing a dedicated request form to streamline the proposal process
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-orange-50 p-8 rounded-3xl border border-orange-200"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-100 flex items-center justify-center">
            <Mail className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Step 1: Email Proposal</h3>
          <p className="text-gray-600">
            Send your competition proposal to CIE with event details, target audience, and timeline. 
            Include information about prizes, funding, or internship opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center bg-orange-50 p-8 rounded-3xl border border-orange-200"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-100 flex items-center justify-center">
            <Users className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2: Collaboration</h3>
          <p className="text-gray-600">
            CIE team will collaborate with you to refine the competition format, logistics, and execution plan. 
            Together, we'll ensure maximum student engagement and impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center bg-orange-50 p-8 rounded-3xl border border-orange-200"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-100 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Step 3: Execute</h3>
          <p className="text-gray-600">
            Launch your competition with CIE's support. Engage with talented PES students, 
            identify top performers, and build lasting connections for future collaborations.
          </p>
        </motion.div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-2">
            <p className="text-gray-700"> Email: cieinfo@pes.edu</p>
            <p className="text-gray-700"> Office: Centre for Innovation and Entrepreneurship</p>
            <p className="text-gray-700"> Location: PES University RR/EC Campus</p>
            <p className="text-gray-700"> Website: Visit CIE PES University for latest information</p>
          </div>
        </div>
      </div>
    </div>
  );
}