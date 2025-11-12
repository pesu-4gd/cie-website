'use client';

import { useState } from 'react';
import { BookOpen, ExternalLink, Lightbulb, FileText, Newspaper, DollarSign, TrendingUp, Globe, GraduationCap, Library, Database, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { TransitionPanel } from '@/components/core/transition-panel';
import { SECTION_COLORS } from '@/styles/colors';

const studentsColors = SECTION_COLORS.students;

// Resource data structure
interface Resource {
  title: string;
  description: string;
  url: string;
}

// Entrepreneurship Resources Data
const templatesAndGuides: Resource[] = [
  { title: 'Business Model Canvas (Stratagyzer)', description: 'A strategic tool for visualizing and developing business models.', url: 'https://www.strategyzer.com/canvas/business-model-canvas' },
  { title: 'Lean Canvas', description: 'A one-page business plan template optimized for startups.', url: 'https://leanstack.com/leancanvas' },
  { title: 'Customer Discovery Templates and Primer (Alexander Cowan)', description: 'Resources for conducting customer interviews and validating ideas.', url: 'https://www.alexandercowan.com/customer-discovery/' },
  { title: 'Pretotype for Customer Discovery (Alberto Savoia)', description: 'A method to test ideas quickly and cost-effectively.', url: 'https://www.pretotyping.org/' },
  { title: 'BDC.ca Free Templates and Business Guides', description: 'Templates for business planning, marketing, and financial management.', url: 'https://www.bdc.ca/en/articles-tools/entrepreneur-toolkit/templates-business-guides' },
  { title: 'Statrys Business Plan Templates', description: 'Simple business plan templates for new entrepreneurs.', url: 'https://statrys.com/blog/business-plan-templates' },
];

const designAndPrototyping: Resource[] = [
  { title: 'Proto.io', description: 'A platform for creating interactive mobile and web app prototypes.', url: 'https://proto.io/' },
  { title: 'Figma', description: 'A collaborative design tool for wireframes, prototypes, and UI/UX.', url: 'https://www.figma.com/' },
  { title: 'Google Cloud for AI', description: 'Cloud-based tools for building and deploying AI models.', url: 'https://cloud.google.com/ai' },
  { title: 'Canva Business Guide Templates', description: 'Customizable templates for business guides and presentations.', url: 'https://www.canva.com/templates/s/business-guide/' },
  { title: 'PosterMyWall Entrepreneur Templates', description: 'Templates for flyers, posters, and social media graphics.', url: 'https://www.postermywall.com/index.php/posters/search?s=entrepreneur' },
];

const fundingAndLegal: Resource[] = [
  { title: 'AngelList', description: 'Connect with investors and explore funding opportunities for startups.', url: 'https://www.angel.co/' },
  { title: 'Crunchbase', description: 'Research startups, investors, and funding trends.', url: 'https://www.crunchbase.com/' },
  { title: 'Rocket Lawyer', description: 'Legal templates and advice for startups, including incorporation and IP protection.', url: 'https://www.rocketlawyer.com/' },
];

const marketingResources: Resource[] = [
  { title: 'HubSpot Blog', description: 'Free resources on inbound marketing, sales, and CRM strategies.', url: 'https://blog.hubspot.com/' },
];

const websiteTemplates: Resource[] = [
  { title: 'Entrepreneur Website Templates from Nicepage', description: 'Free, customizable templates for building professional websites.', url: 'https://nicepage.com/k/entrepreneur-website-templates' },
];

// AI and Machine Learning Resources Data
const onlineCourses: Resource[] = [
  { title: 'Andrew Ng\'s Machine Learning Course on Coursera', description: 'A foundational course covering machine learning essentials.', url: 'https://www.coursera.org/learn/machine-learning' },
  { title: 'CS50\'s Introduction to Artificial Intelligence with Python', description: 'A Harvard course on AI fundamentals using Python.', url: 'https://cs50.harvard.edu/ai/' },
  { title: 'Machine Learning with Python by Socratica on YouTube', description: 'Engaging video tutorials on ML concepts.', url: 'https://www.youtube.com/playlist?list=PLi01XoE8jYohWFP07LKk4OcpBpa0B4T2O' },
  { title: 'Deep Learning Specialization by Andrew Ng on Coursera', description: 'Advanced courses on deep learning techniques.', url: 'https://www.coursera.org/specializations/deep-learning' },
];

const books: Resource[] = [
  { title: '"Artificial Intelligence: A Modern Approach" by Stuart Russell and Peter Norvig', description: 'A comprehensive guide to AI theory and applications.', url: 'https://aima.cs.berkeley.edu/' },
  { title: '"Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron', description: 'A practical guide to ML with popular libraries.', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032649/' },
];

const learningPlatforms: Resource[] = [
  { title: 'edX', description: 'Courses from top universities on AI, machine learning, and data science.', url: 'https://www.edx.org/' },
  { title: 'Udacity', description: 'Nanodegree programs in AI, machine learning, and related fields.', url: 'https://www.udacity.com/' },
  { title: 'DataCamp', description: 'Interactive courses on machine learning, data science, and Python.', url: 'https://www.datacamp.com/' },
];

const datasets: Resource[] = [
  { title: 'Kaggle Datasets', description: 'A repository of datasets for machine learning projects and competitions.', url: 'https://www.kaggle.com/datasets' },
  { title: 'UCI Machine Learning Repository', description: 'A collection of datasets for ML research.', url: 'https://archive.ics.uci.edu/' },
];

const openSourceProjects: Resource[] = [
  { title: 'TensorFlow', description: 'An open-source machine learning framework by Google.', url: 'https://www.tensorflow.org/' },
  { title: 'PyTorch', description: 'A flexible open-source library for deep learning.', url: 'https://pytorch.org/' },
];

const newsletters: Resource[] = [
  { title: 'CIE Newsletter', description: 'Subscribe for updates on CIE events, programs, and resources.', url: 'https://cie.pes.edu/newsletter' },
  { title: 'TechCrunch', description: 'Daily news on tech startups, funding, and innovation.', url: 'https://techcrunch.com/' },
  { title: 'Harvard Business Review', description: 'Insights on business strategy and leadership.', url: 'https://hbr.org/' },
  { title: 'MIT Technology Review', description: 'Coverage of emerging technologies, including AI and ML.', url: 'https://www.technologyreview.com/' },
];

// Category configuration for navigation
const RESOURCE_CATEGORIES = [
  {
    id: 0,
    key: 'templates-guides',
    title: 'Templates & Guides',
    subtitle: 'Business Planning Tools',
    icon: <FileText className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: templatesAndGuides,
  },
  {
    id: 1,
    key: 'design-prototyping',
    title: 'Design & Prototyping',
    subtitle: 'Creative Development Tools',
    icon: <Lightbulb className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: designAndPrototyping,
  },
  {
    id: 2,
    key: 'funding-legal',
    title: 'Funding & Legal',
    subtitle: 'Startup Resources',
    icon: <DollarSign className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: fundingAndLegal,
  },
  {
    id: 3,
    key: 'marketing',
    title: 'Marketing',
    subtitle: 'Growth Strategies',
    icon: <TrendingUp className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: marketingResources,
  },
  {
    id: 4,
    key: 'website-templates',
    title: 'Website Templates',
    subtitle: 'Web Development',
    icon: <Globe className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: websiteTemplates,
  },
  {
    id: 5,
    key: 'online-courses',
    title: 'Online Courses',
    subtitle: 'AI & ML Learning',
    icon: <GraduationCap className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: onlineCourses,
  },
  {
    id: 6,
    key: 'books',
    title: 'Books',
    subtitle: 'Essential Reading',
    icon: <BookOpen className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: books,
  },
  {
    id: 7,
    key: 'learning-platforms',
    title: 'Learning Platforms',
    subtitle: 'Online Education',
    icon: <Library className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: learningPlatforms,
  },
  {
    id: 8,
    key: 'datasets',
    title: 'Datasets',
    subtitle: 'ML Data Sources',
    icon: <Database className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: datasets,
  },
  {
    id: 9,
    key: 'open-source',
    title: 'Open-Source',
    subtitle: 'Development Frameworks',
    icon: <Code className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: openSourceProjects,
  },
  {
    id: 10,
    key: 'newsletters',
    title: 'Newsletters',
    subtitle: 'Industry Updates',
    icon: <Newspaper className="h-full w-full text-black-800 dark:text-neutral-300" />,
    resources: newsletters,
  },
];

export default function ResourcesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <InteractiveHexagonBackground
          primaryColor={studentsColors.hero?.background}
          accentColor={studentsColors.hero?.hexagonAccent}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-br ${studentsColors.gradient.tailwind}`}>
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fuel Your{' '}
              <span className="block text-[#2B9EB3]">Entrepreneurial Journey</span>
            </h1>
            <p className="text-xl text-white max-w-4xl mx-auto">
              The Centre for Innovation and Entrepreneurship (CIE) at PES University is committed to empowering students, entrepreneurs, and professionals with the tools and knowledge needed to succeed in today's dynamic landscape.
            </p>
          </div>
        </div>
      </section>



      {/* Main Content - Icon-Based Tab Navigation */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-[80vh]">
        <div className="max-w-7xl mx-auto">
          {/* Icon Tab Navigation */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 flex-wrap mb-8 p-4 bg-gradient-to-r from-black-50 via-white to-black-50 rounded-2xl shadow-sm border border-black-200">
              {RESOURCE_CATEGORIES.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveIndex(category.id)}
                  className={`group relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                    activeIndex === category.id
                      ? 'bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg scale-105'
                      : 'bg-white hover:bg-black-50 hover:scale-105 border border-black-200'
                  }`}
                  title={category.title}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 mb-2 transition-colors duration-300 ${
                    activeIndex === category.id ? 'text-white' : 'text-black-900 group-hover:text-teal-600'
                  }`}>
                    {category.icon}
                  </div>
                  
                  {/* Title - Shows on active or hover */}
                  <span className={`text-xs font-medium transition-all duration-300 text-center whitespace-nowrap ${
                    activeIndex === category.id 
                      ? 'text-white opacity-100' 
                      : 'text-black-900 opacity-0 group-hover:opacity-100 absolute -bottom-6'
                  }`}>
                    {category.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Category Title and Subtitle */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black-900 mb-2">
              {RESOURCE_CATEGORIES[activeIndex].title}
            </h2>
            <p className="text-lg text-black-600">
              {RESOURCE_CATEGORIES[activeIndex].subtitle}
            </p>
          </div>

          {/* TransitionPanel for Content */}
          <div className="overflow-hidden">
            <TransitionPanel
              activeIndex={activeIndex}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              variants={{
                enter: { opacity: 0, y: 20, filter: 'blur(4px)' },
                center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                exit: { opacity: 0, y: -20, filter: 'blur(4px)' },
              }}
            >
              {RESOURCE_CATEGORIES.map((category) => (
                <div key={category.key} className="py-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {category.resources.map((resource) => (
                          <div
                            key={`${category.key}-${resource.title}`}
                            className="border-b border-black-200 pb-4 last:border-0 hover:bg-black-50 transition-colors duration-200 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-black-900 mb-2">
                                  {resource.title}
                                </h4>
                                <p className="text-sm text-black-600">
                                  {resource.description}
                                </p>
                              </div>
                              <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="ml-4 shrink-0 hover:bg-teal-100 hover:text-teal-700"
                              >
                                <a
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title={`Visit ${resource.title}`}
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  <span className="sr-only">Visit {resource.title}</span>
                                </a>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Special note for Newsletters */}
                      {category.key === 'newsletters' && (
                        <div className="mt-6 p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
                          <p className="text-sm text-black-700">
                            💡 <strong>Stay informed</strong> with the latest trends and opportunities in entrepreneurship and technology.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </TransitionPanel>
          </div>

          {/* Explore More Section */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-black-900 mb-2">Explore More</h3>
                <p className="text-black-600 mb-4">
                  Our resource library is continuously updated to provide the latest tools and insights. Contact{' '}
                  <a href="mailto:cieprogram@pes.edu" className="text-teal-600 hover:underline">
                    cieprogram@pes.edu
                  </a>{' '}
                  to access additional materials and join our vibrant community of innovators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}