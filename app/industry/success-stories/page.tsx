'use client';

import { Button } from '@/components/design-system';
import { motion } from 'framer-motion';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useState } from 'react';
import { 
  Award,
  Building2,
  TrendingUp,
  Users,
  Target,
  Star,
  CheckCircle,
  ExternalLink,
  Lightbulb,
  Rocket,
  FileText,
  MessageCircle,
  Mail
} from 'lucide-react';

export default function IndustrySuccessStoriesPage() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const successStories = [
    {
      company: 'Intel',
      industry: 'AI/ML Technology',
      partnership: 'Capstone Project with Industry Partner (CPIP)',
      year: '2024',
      story: 'Since 2018, Intel has partnered with CIE through the CPIP initiative. In 2024, five student teams, mentored by Intel experts, developed AI/ML solutions for Retail, FinTech, and Healthcare, delivering results in just six weeks—a process that typically takes months for Intel\'s own teams.',
      impact: [
        'Delivered AI/ML projects in 6 weeks vs months for Intel teams',
        'Enhanced student skills in AI/ML through industry mentorship',
        'Provided Intel with rapid prototyping and innovative solutions',
        'Published in IEEE Educon 2021 paper'
      ],
      quote: 'This remarkable efficiency highlights the caliber of PES University students and the value of industry mentorship.',
      spokesperson: 'Intel Development Team',
      image: '/placeholder-intel.jpg',
      featured: true
    },
    {
      company: 'Cisco ThingQbator',
      industry: 'Technology Incubation',
      partnership: 'Startup Incubation Program',
      year: '2024',
      story: 'In Cohort 6, eight PES University teams ranked among the top 20 from over 1,050 applications nationwide. NeuRoar secured a top 10 position and ₹5 Lakh in incubation support for their assistive technology project supporting neurodivergent individuals.',
      impact: [
        'NeuRoar secured ₹5 Lakh for assistive technology development',
        'Eight teams in top 20 nationwide from 1,050+ applications',
        'Seven additional startups addressing societal challenges',
        'Diverse innovation across multiple domains'
      ],
      quote: 'This achievement underscores CIE\'s ability to nurture socially impactful startups.',
      spokesperson: 'Cisco ThingQbator Program',
      image: '/placeholder-cisco.jpg',
      featured: true
    },
    {
      company: 'Greenifly',
      industry: 'AgriTech',
      partnership: 'Student Startup to PVL Funding',
      year: '2024',
      story: 'Greenifly began as a capstone project under CIE\'s mentorship and scaled into a funded venture with support from PESU Venture Labs (PVL). Specializing in multispectral and spray drones for NPK analysis, they achieve 98-99% accuracy in agricultural diagnostics.',
      impact: [
        'Scaled from capstone project to PVL-funded startup',
        '98-99% accuracy in agricultural diagnostics',
        'Targeting global markets including coffee, tea, and rice sectors',
        'Demonstrated transformation from student idea to market-ready solution'
      ],
      quote: 'Showcased CIE\'s role in transforming student ideas into market-ready solutions.',
      spokesperson: 'PESU Venture Labs',
      image: '/placeholder-greenifly.jpg',
      featured: false
    },
    {
      company: 'HCL Tech',
      industry: 'Digital Technology',
      partnership: 'Academic-Industry MoU',
      year: '2024',
      story: 'PES University signed an MoU with HCL Tech to advance academic and industry-oriented skills in next-generation technologies. This collaboration focuses on joint research, industry-led workshops, and internship opportunities in AI, semiconductors, and digital technologies.',
      impact: [
        'Launched joint research in AI, semiconductors, and digital tech',
        'Provided students with workshops and internships',
        'Established foundation for long-term industry-academia synergy',
        'Equipped students with Industry 4.0 skills'
      ],
      quote: 'By bridging academia and industry, this partnership equips students with the skills needed for Industry 4.0 challenges.',
      spokesperson: 'HCL Tech Partnership Team',
      image: '/placeholder-hcl.jpg',
      featured: false
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Development',
      description: 'Joint development of innovative technologies and solutions',
      icon: Lightbulb,
      successCount: '5+',
      examples: ['AI/ML solutions', 'AgriTech platforms', 'Digital solutions']
    },
    {
      title: 'Research Collaboration',
      description: 'Academic-industry research partnerships',
      icon: FileText,
      successCount: '10+',
      examples: ['Published papers', 'Joint research projects', 'Innovation studies']
    },
    {
      title: 'Talent Pipeline',
      description: 'Recruitment and skill development programs',
      icon: Users,
      successCount: '100+',
      examples: ['Industry mentorship', 'Internship programs', 'Skill workshops']
    },
    {
      title: 'Startup Incubation',
      description: 'Supporting student startups to become successful companies',
      icon: Rocket,
      successCount: '50+',
      examples: ['Funding support', 'Mentorship programs', 'Market access']
    }
  ];

  const impactMetrics = [
    { label: 'Global Partners', value: '10+', icon: Building2 },
    { label: 'Student Startups', value: '50+', icon: Rocket },
    { label: 'National Rankings', value: 'Top 7', icon: Award },
    { label: 'Patent Applications', value: '25+', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 to-emerald-700">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-500/20 text-orange-100 border border-orange-400/30">
                <Award className="w-4 h-4 mr-2" />
                Success Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Industry Partnerships{' '}
              <span className="block bg-gradient-to-r px-6 py-4 from-orange-400 to-yellow-400 bg-clip-text text-transparent">Powering Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8">
              At CIE, our industry partnerships drive transformative outcomes, bridging academia and industry 
              to create real-world impact. Collaborations with global leaders like Intel, Cisco, and HCL Tech 
              have empowered students to deliver cutting-edge solutions and launch successful ventures.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
              >
                <Star className="w-5 h-5 mr-2" />
                Read Success Stories
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Start Your Story
              </Button>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that showcase the real-world impact of our industry collaborations 
              and the success of our partnership ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real partnerships, real results. Read how global industry leaders like Intel, Cisco, 
              and HCL Tech have achieved breakthrough success through collaboration with CIE.
            </p>
          </motion.div>

          {/* Carousel Navigation - Moved to top */}
          <div className="flex justify-center items-center mb-8 space-x-4">
            {successStories.map((story, index) => (
              <button
                key={story.company}
                onClick={() => setCarouselIndex(index)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  index === carouselIndex
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                }`}
              >
                {story.company}
              </button>
            ))}
          </div>

          <div className="relative w-full overflow-hidden">
            <Carousel index={carouselIndex} onIndexChange={setCarouselIndex}>
              <CarouselContent className="flex">
                {successStories.map((story, index) => (
                  <CarouselItem key={story.company} className="w-full flex-shrink-0">
                    <div className="w-full px-4">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 max-w-6xl mx-auto min-h-[500px]">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          className="flex flex-col h-full space-y-8"
                        >
                          {/* Header Section */}
                          <div className="text-center">
                            {story.featured && (
                              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-6">
                                <Star className="w-4 h-4 mr-2" />
                                Featured Success
                              </div>
                            )}
                            
                            <h3 className="text-4xl font-bold text-gray-900 mb-6">{story.company}</h3>
                            
                            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                {story.industry}
                              </span>
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
                                {story.partnership}
                              </span>
                              <span className="text-sm text-gray-600 font-medium bg-gray-50 px-4 py-2 rounded-full">{story.year}</span>
                            </div>
                          </div>
                          
                          {/* Main Content Grid */}
                          <div className="grid lg:grid-cols-2 gap-12 flex-1">
                            {/* Story Content */}
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">Partnership Story</h4>
                                <p className="text-lg text-gray-700 leading-relaxed">{story.story}</p>
                              </div>
                              
                              <blockquote className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-xl">
                                <p className="text-gray-700 italic mb-2 text-lg">"{story.quote}"</p>
                                <cite className="text-sm font-medium text-orange-800">— {story.spokesperson}</cite>
                              </blockquote>
                            </div>
                            
                            {/* Impact & Action */}
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Impact</h4>
                                <ul className="space-y-3">
                                  {story.impact.map((impact, impactIndex) => (
                                    <li key={`impact-${story.company}-${impactIndex}`} className="flex items-start gap-3">
                                      <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                                      <span className="text-gray-700 text-base">{impact}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="pt-6">
                                {/* <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg w-full lg:w-auto">
                                  <ExternalLink className="w-5 h-5 mr-3" />
                                  Read Full Story
                                </Button> */}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* National Recognition & Additional Success Stories */}
      <section className="py-20 bg-gradient-to-br from-white to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              National Recognition & Awards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CIE's excellence in fostering innovation has earned national accolades 
              and recognition across multiple platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Start-up Mahakumbh</h3>
              <p className="text-center mb-4">
                <span className="text-3xl font-bold text-orange-600">Top 7</span>
                <br />
                <span className="text-gray-600">Universities in India</span>
              </p>
              <p className="text-gray-700 text-center">
                Ranked among top 7 universities in India for Start-up pre-Incubator Poster Competition at Start-up Mahakumbh in New Delhi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Microsoft WISE</h3>
              <p className="text-center mb-4">
                <span className="text-3xl font-bold text-blue-600">4</span>
                <br />
                <span className="text-gray-600">Female Students</span>
              </p>
              <p className="text-gray-700 text-center">
                Four female students participated in Microsoft Women in Science and Engineering program, gaining hands-on experience in software development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Cisco-Nasscom</h3>
              <p className="text-center mb-4">
                <span className="text-3xl font-bold text-orange-600">Top 10</span>
                <br />
                <span className="text-gray-600">Nationwide</span>
              </p>
              <p className="text-gray-700 text-center">
                CIE team reached top 10 in Cisco-Nasscom Foundation Thinqbator Program, securing grants and mentorship for startup idea.
              </p>
            </motion.div>
          </div>

          {/* Cisco ThingQbator Startups Grid */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Cisco ThingQbator Cohort 6 Startups
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'NeuRoar', description: 'Assistive technology for neurodivergent individuals', funding: '₹5 Lakh', featured: true },
                { name: 'GrowPal', description: 'Platform empowering small businesses', funding: 'Incubation Support' },
                { name: 'Xperios', description: 'App for hobby exploration', funding: 'Incubation Support' },
                { name: 'QuickPick', description: 'Meal ordering solution', funding: 'Incubation Support' },
                { name: 'Finn', description: 'Financial literacy platform', funding: 'Incubation Support' },
                { name: 'Voyage', description: 'Safety app for women', funding: 'Incubation Support' },
                { name: 'Robin Internships', description: 'Student internship platform', funding: 'Incubation Support' }
              ].map((startup, index) => (
                <div key={startup.name} className={`p-4 rounded-xl border ${startup.featured ? 'bg-orange-100 border-orange-200' : 'bg-orange-50 border-gray-200'}`}>
                  {startup.featured && (
                    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-200 text-orange-800 mb-2">
                      <Star className="w-3 h-3 mr-1" />
                      Top 10
                    </div>
                  )}
                  <h4 className="font-semibold text-gray-900 mb-2">{startup.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{startup.description}</p>
                  <div className="text-xs font-medium text-orange-600">{startup.funding}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20 bg-gradient-to-br from-white to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Successful Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the different ways companies have achieved success through 
              collaboration with CIE across various partnership models.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">{type.successCount}</span>
                    <p className="text-sm text-gray-500">Success Stories</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={`example-${type.title}-${exampleIndex}`} className="text-xs text-gray-600">
                          • {example}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-12">
              Join the growing list of companies that have achieved breakthrough success 
              through partnership with CIE. Your success story could be next.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Define Goals</h3>
                <p className="text-orange-100">We work with you to set clear partnership objectives</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Collaborate</h3>
                <p className="text-orange-100">Access our talent and research expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Achieve Success</h3>
                <p className="text-orange-100">Realize measurable business impact</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-600 text-white"
                onClick={() => (globalThis.location.href = 'mailto:partnerships@pes.edu')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Your Partnership
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={() => (globalThis.location.href = 'mailto:partnerships@pes.edu')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
            
            <div className="mt-8">
              <p className="text-orange-100 mb-4">Ready to discuss your partnership goals?</p>
              <Button 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl"
                onClick={() => globalThis.location.href = 'mailto:partnerships@pes.edu'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Partnership Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}