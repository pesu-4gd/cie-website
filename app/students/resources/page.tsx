'use client';

import { useState } from 'react';
import { BookOpen, Search, ExternalLink, Lightbulb, Code, Users, TrendingUp, Brain, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem, CarouselIndicators } from '@/components/ui/carousel';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogDescription,
} from '@/components/ui/morphing-dialog';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';

const studentsColors = SECTION_COLORS.students;

// Resource data structure
interface Resource {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  url: string;
  category: string;
  type: string;
  icon: React.ReactNode;
}

// Resource categories and data
const resourceCategories = {
  entrepreneurship: {
    title: 'Entrepreneurship Resources',
    icon: <Lightbulb className="h-5 w-5" />,
    subcategories: {
      'templates-guides': {
        title: 'Templates and Guides',
        resources: [
          {
            id: 'business-model-canvas',
            title: 'Business Model Canvas',
            description: 'A strategic tool for visualizing and developing business models.',
            detailedDescription: 'The Business Model Canvas is a strategic management template used for developing new business models and documenting existing ones. It offers a visual chart with elements describing a firm\'s or product\'s value proposition, infrastructure, customers, and finances.',
            url: 'https://www.strategyzer.com/canvas/business-model-canvas',
            category: 'Templates and Guides',
            type: 'Template',
            icon: <Code className="h-4 w-4" />
          },
          {
            id: 'lean-canvas',
            title: 'Lean Canvas',
            description: 'A one-page business plan template optimized for startups.',
            detailedDescription: 'Lean Canvas is a 1-page business plan template created by Ash Maurya that helps you deconstruct your idea into its key assumptions. It is adapted from Alex Osterwalder\'s Business Model Canvas and optimized for Lean Startups.',
            url: 'https://leanstack.com/leancanvas',
            category: 'Templates and Guides',
            type: 'Template',
            icon: <Code className="h-4 w-4" />
          },
          {
            id: 'customer-discovery',
            title: 'Customer Discovery Templates',
            description: 'Resources for conducting customer interviews and validating ideas.',
            detailedDescription: 'Comprehensive templates and primer for conducting effective customer discovery interviews. Learn how to validate your business ideas through structured customer conversations and feedback collection.',
            url: 'https://www.alexandercowan.com/customer-discovery/',
            category: 'Templates and Guides',
            type: 'Guide',
            icon: <Users className="h-4 w-4" />
          }
        ]
      },
      'design-prototyping': {
        title: 'Design and Prototyping Tools',
        resources: [
          {
            id: 'proto-io',
            title: 'Proto.io',
            description: 'A platform for creating interactive mobile and web app prototypes.',
            detailedDescription: 'Proto.io is a web-based prototyping tool that allows you to create fully-interactive high-fidelity prototypes that look and work exactly like your app should. No coding required.',
            url: 'https://proto.io/',
            category: 'Design and Prototyping',
            type: 'Tool',
            icon: <Code className="h-4 w-4" />
          },
          {
            id: 'figma',
            title: 'Figma',
            description: 'A collaborative design tool for wireframes, prototypes, and UI/UX.',
            detailedDescription: 'Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.',
            url: 'https://www.figma.com/',
            category: 'Design and Prototyping',
            type: 'Tool',
            icon: <Code className="h-4 w-4" />
          },
          {
            id: 'google-cloud-ai',
            title: 'Google Cloud for AI',
            description: 'Cloud-based tools for building and deploying AI models.',
            detailedDescription: 'Google Cloud AI provides machine learning tools and services to help businesses solve their most challenging problems. Build, deploy, and scale ML models faster with pre-trained and custom tooling.',
            url: 'https://cloud.google.com/ai',
            category: 'Design and Prototyping',
            type: 'Platform',
            icon: <Brain className="h-4 w-4" />
          }
        ]
      },
      'funding-legal': {
        title: 'Funding and Legal Resources',
        resources: [
          {
            id: 'angellist',
            title: 'AngelList',
            description: 'Connect with investors and explore funding opportunities for startups.',
            detailedDescription: 'AngelList is a U.S. website for startups, angel investors, and job-seekers looking to work at startups. Founded in 2010, it started as an online introduction board for tech startups that needed seed funding.',
            url: 'https://www.angel.co/',
            category: 'Funding and Legal',
            type: 'Platform',
            icon: <TrendingUp className="h-4 w-4" />
          },
          {
            id: 'crunchbase',
            title: 'Crunchbase',
            description: 'Research startups, investors, and funding trends.',
            detailedDescription: 'Crunchbase is a platform for finding business information about private and public companies. It provides data on investments and funding information for thousands of companies.',
            url: 'https://www.crunchbase.com/',
            category: 'Funding and Legal',
            type: 'Database',
            icon: <Database className="h-4 w-4" />
          },
          {
            id: 'rocket-lawyer',
            title: 'Rocket Lawyer',
            description: 'Legal templates and advice for startups, including incorporation and IP protection.',
            detailedDescription: 'Rocket Lawyer is an online legal technology company that makes the law simpler and more affordable for businesses and families. Get legal help, replace your lawyer for many things.',
            url: 'https://www.rocketlawyer.com/',
            category: 'Funding and Legal',
            type: 'Service',
            icon: <Code className="h-4 w-4" />
          }
        ]
      }
    }
  },
  ai_ml: {
    title: 'AI and Machine Learning Resources',
    icon: <Brain className="h-5 w-5" />,
    subcategories: {
      'online-courses': {
        title: 'Online Courses',
        resources: [
          {
            id: 'andrew-ng-ml',
            title: 'Andrew Ng\'s Machine Learning Course',
            description: 'A foundational course covering machine learning essentials on Coursera.',
            detailedDescription: 'This course provides a broad introduction to machine learning, datamining, and statistical pattern recognition. Topics include supervised learning, unsupervised learning, best practices in machine learning.',
            url: 'https://www.coursera.org/learn/machine-learning',
            category: 'Online Courses',
            type: 'Course',
            icon: <BookOpen className="h-4 w-4" />
          },
          {
            id: 'cs50-ai',
            title: 'CS50\'s Introduction to AI with Python',
            description: 'A Harvard course on AI fundamentals using Python.',
            detailedDescription: 'This course explores the concepts and algorithms at the foundation of modern artificial intelligence, diving into the ideas that give rise to technologies like game-playing engines, handwriting recognition, and machine translation.',
            url: 'https://cs50.harvard.edu/ai/',
            category: 'Online Courses',
            type: 'Course',
            icon: <BookOpen className="h-4 w-4" />
          },
          {
            id: 'deep-learning-specialization',
            title: 'Deep Learning Specialization',
            description: 'Advanced courses on deep learning techniques by Andrew Ng.',
            detailedDescription: 'The Deep Learning Specialization is designed to prepare learners to participate in the development of cutting-edge AI technology, and to understand the capability, the challenges, and the consequences of the rise of deep learning.',
            url: 'https://www.coursera.org/specializations/deep-learning',
            category: 'Online Courses',
            type: 'Specialization',
            icon: <BookOpen className="h-4 w-4" />
          }
        ]
      },
      'datasets': {
        title: 'Datasets',
        resources: [
          {
            id: 'kaggle-datasets',
            title: 'Kaggle Datasets',
            description: 'A repository of datasets for machine learning projects and competitions.',
            detailedDescription: 'Kaggle Datasets is a diverse collection of datasets uploaded by the Kaggle community. Find datasets for every type of machine learning problem, from computer vision to natural language processing.',
            url: 'https://www.kaggle.com/datasets',
            category: 'Datasets',
            type: 'Repository',
            icon: <Database className="h-4 w-4" />
          },
          {
            id: 'uci-ml-repository',
            title: 'UCI Machine Learning Repository',
            description: 'A collection of datasets for ML research.',
            detailedDescription: 'The UCI Machine Learning Repository is a collection of databases, domain theories, and data generators that are used by the machine learning community for the empirical analysis of machine learning algorithms.',
            url: 'https://archive.ics.uci.edu/',
            category: 'Datasets',
            type: 'Repository',
            icon: <Database className="h-4 w-4" />
          }
        ]
      },
      'open-source': {
        title: 'Open-Source Projects',
        resources: [
          {
            id: 'tensorflow',
            title: 'TensorFlow',
            description: 'An open-source machine learning framework by Google.',
            detailedDescription: 'TensorFlow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources.',
            url: 'https://www.tensorflow.org/',
            category: 'Open-Source',
            type: 'Framework',
            icon: <Code className="h-4 w-4" />
          },
          {
            id: 'pytorch',
            title: 'PyTorch',
            description: 'A flexible open-source library for deep learning.',
            detailedDescription: 'PyTorch is an optimized tensor library for deep learning using GPUs and CPUs. It provides maximum flexibility and speed for research and production.',
            url: 'https://pytorch.org/',
            category: 'Open-Source',
            type: 'Framework',
            icon: <Code className="h-4 w-4" />
          }
        ]
      }
    }
  }
};

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('entrepreneurship');
  const [activeSubcategory, setActiveSubcategory] = useState('templates-guides');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const currentCategory = resourceCategories[activeCategory as keyof typeof resourceCategories];
  const currentResources = (currentCategory?.subcategories as any)?.[activeSubcategory]?.resources || [];

  const filteredResources = currentResources.filter((resource: any) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group resources into sets of 6 for carousel (2 rows of 3)
  const resourceGroups: any[][] = [];
  for (let i = 0; i < filteredResources.length; i += 6) {
    resourceGroups.push(filteredResources.slice(i, i + 6));
  }

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
              Fuel Your Entrepreneurial Journey
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
              The Centre for Innovation and Entrepreneurship (CIE) at PES University is committed to empowering students, entrepreneurs, and professionals with the tools and knowledge needed to succeed in today's dynamic landscape.
            </p>
          </div>
        </div>
      </section>



      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="mb-6 gap-1 bg-gray-100">
              <TabsTrigger
                value="entrepreneurship"
                className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white"
              >
                <Lightbulb className="-ms-0.5 me-1.5 opacity-60" size={16} />
                Entrepreneurship
              </TabsTrigger>
              <TabsTrigger
                value="ai_ml"
                className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white"
              >
                <Brain className="-ms-0.5 me-1.5 opacity-60" size={16} />
                AI & ML
              </TabsTrigger>
            </TabsList>

            {/* Entrepreneurship Resources */}
            <TabsContent value="entrepreneurship">
              <Tabs value={activeSubcategory} onValueChange={setActiveSubcategory}>
                <TabsList className="mb-6 gap-1 bg-gray-100">
                  <TabsTrigger
                    value="templates-guides"
                    className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Templates & Guides
                  </TabsTrigger>
                  <TabsTrigger
                    value="design-prototyping"
                    className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Design & Prototyping
                  </TabsTrigger>
                  <TabsTrigger
                    value="funding-legal"
                    className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Funding & Legal
                  </TabsTrigger>
                </TabsList>

                {Object.entries(resourceCategories.entrepreneurship.subcategories).map(([key, subcategory]) => (
                  <TabsContent key={key} value={key}>
                    {resourceGroups.length > 0 ? (
                      <div className="space-y-6">
                        <Carousel index={carouselIndex} onIndexChange={setCarouselIndex}>
                          <CarouselContent className="relative">
                            {resourceGroups.map((group, groupIndex) => (
                              <CarouselItem key={groupIndex} className="p-4">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                  {group.map((resource) => (
                                    <MorphingDialog key={resource.id}>
                                      <MorphingDialogTrigger className="w-full">
                                        <div className="w-70 h-70 flex items-center justify-center border border-gray-200 rounded-lg hover:shadow-lg hover:border-teal-300 transition-all duration-300 cursor-pointer bg-white p-3">
                                          <div className="text-center space-y-1">
                                            <div className="bg-gray-100 p-2 rounded-lg mx-auto w-fit hover:bg-teal-100 transition-colors">
                                              {resource.icon}
                                            </div>
                                            <div>
                                              <h3 className="font-medium text-xs text-gray-800">{resource.title}</h3>
                                              <Badge variant="outline" className="mt-1 text-xs">{resource.type}</Badge>
                                            </div>
                                          </div>
                                        </div>
                                      </MorphingDialogTrigger>

                                      <MorphingDialogContainer>
                                        <MorphingDialogContent
                                          style={{ borderRadius: '18px' }}
                                          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-gray-200 bg-white sm:w-[560px]"
                                        >
                                          <div className="p-6">
                                            <div className="flex items-start justify-between">
                                              <div className="flex items-start">
                                                <div className="bg-teal-100 p-2 rounded-lg mr-4">
                                                  {resource.icon}
                                                </div>
                                                <div>
                                                  <MorphingDialogTitle className="text-2xl font-bold text-gray-900">{resource.title}</MorphingDialogTitle>
                                                  <div className="text-sm text-gray-600 mt-2">
                                                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">{resource.type}</Badge>
                                                  </div>
                                                </div>
                                              </div>
                                              <MorphingDialogClose className="text-gray-500">Close</MorphingDialogClose>
                                            </div>

                                            <MorphingDialogDescription
                                              disableLayoutAnimation
                                              variants={{
                                                initial: { opacity: 0, scale: 0.98, y: 20 },
                                                animate: { opacity: 1, scale: 1, y: 0 },
                                                exit: { opacity: 0, scale: 0.98, y: 20 },
                                              }}
                                            >
                                              <div className="mt-6">
                                                <p className="text-sm text-gray-700">{resource.detailedDescription}</p>
                                              </div>

                                              <div className="mt-6 flex justify-end">
                                                <Button asChild className="cie-button cie-button-secondary">
                                                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                                    Learn More
                                                  </a>
                                                </Button>
                                              </div>
                                            </MorphingDialogDescription>
                                          </div>
                                        </MorphingDialogContent>
                                      </MorphingDialogContainer>
                                    </MorphingDialog>
                                  ))}
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                        {resourceGroups.length > 1 && (
                          <div className="flex w-full justify-center space-x-3 px-4 mt-6">
                            {resourceGroups.map((_, index) => (
                              <button
                                key={index}
                                type="button"
                                aria-label={`Go to slide ${index + 1}`}
                                onClick={() => setCarouselIndex(index)}
                                className={`h-12 w-12 border-2 border-teal-200 rounded transition-all ${
                                  carouselIndex === index ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-teal-600 hover:bg-teal-50'
                                }`}
                              >
                                {index + 1}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Card className="text-center py-12">
                        <CardContent>
                          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Resources Found</h3>
                          <p className="text-gray-600">No resources match your search criteria.</p>
                        </CardContent>
                      </Card>
                    )
                    }
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>

            {/* AI & ML Resources */}
            <TabsContent value="ai_ml">
              <Tabs value={activeSubcategory} onValueChange={setActiveSubcategory}>
                <TabsList className="mb-6 gap-1 bg-gray-100">
                  <TabsTrigger
                    value="online-courses"
                    className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Online Courses
                  </TabsTrigger>
                  <TabsTrigger
                    value="datasets"
                    className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Datasets
                  </TabsTrigger>
                  <TabsTrigger
                    value="open-source"
                    className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Open-Source
                  </TabsTrigger>
                </TabsList>

                {Object.entries(resourceCategories.ai_ml.subcategories).map(([key, subcategory]) => (
                  <TabsContent key={key} value={key}>
                    {resourceGroups.length > 0 ? (
                      <div className="space-y-6">
                        <Carousel index={carouselIndex} onIndexChange={setCarouselIndex}>
                          <CarouselContent className="relative">
                            {resourceGroups.map((group, groupIndex) => (
                              <CarouselItem key={groupIndex} className="p-4">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                  {group.map((resource) => (
                                    <MorphingDialog key={resource.id}>
                                      <MorphingDialogTrigger className="w-full">
                                        <div className="w-100 h-100 flex items-center justify-center border border-gray-200 rounded-lg hover:shadow-lg hover:border-teal-300 transition-all duration-300 cursor-pointer bg-white p-3">
                                          <div className="text-center space-y-1">
                                            <div className="bg-gray-100 p-2 rounded-lg mx-auto w-fit hover:bg-teal-100 transition-colors">
                                              {resource.icon}
                                            </div>
                                            <div>
                                              <h3 className="font-medium text-xs text-gray-800">{resource.title}</h3>
                                              <Badge variant="outline" className="mt-1 text-xs">{resource.type}</Badge>
                                            </div>
                                          </div>
                                        </div>
                                      </MorphingDialogTrigger>

                                      <MorphingDialogContainer>
                                        <MorphingDialogContent
                                          style={{ borderRadius: '18px' }}
                                          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-gray-200 bg-white sm:w-[560px]"
                                        >
                                          <div className="p-6">
                                            <div className="flex items-start justify-between">
                                              <div className="flex items-start">
                                                <div className="bg-teal-100 p-2 rounded-lg mr-4">
                                                  {resource.icon}
                                                </div>
                                                <div>
                                                  <MorphingDialogTitle className="text-2xl font-bold text-gray-900">{resource.title}</MorphingDialogTitle>
                                                  <div className="text-sm text-gray-600 mt-2">
                                                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">{resource.type}</Badge>
                                                  </div>
                                                </div>
                                              </div>
                                              <MorphingDialogClose className="text-gray-500">Close</MorphingDialogClose>
                                            </div>

                                            <MorphingDialogDescription
                                              disableLayoutAnimation
                                              variants={{
                                                initial: { opacity: 0, scale: 0.98, y: 20 },
                                                animate: { opacity: 1, scale: 1, y: 0 },
                                                exit: { opacity: 0, scale: 0.98, y: 20 },
                                              }}
                                            >
                                              <div className="mt-6">
                                                <p className="text-sm text-gray-700">{resource.detailedDescription}</p>
                                              </div>

                                              <div className="mt-6 flex justify-end">
                                                <Button asChild className="cie-button cie-button-secondary">
                                                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                                    Learn More
                                                  </a>
                                                </Button>
                                              </div>
                                            </MorphingDialogDescription>
                                          </div>
                                        </MorphingDialogContent>
                                      </MorphingDialogContainer>
                                    </MorphingDialog>
                                  ))}
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                        {resourceGroups.length > 1 && (
                          <div className="flex w-full justify-center space-x-3 px-4 mt-6">
                            {resourceGroups.map((_, index) => (
                              <button
                                key={index}
                                type="button"
                                aria-label={`Go to slide ${index + 1}`}
                                onClick={() => setCarouselIndex(index)}
                                className={`h-12 w-12 border-2 border-teal-200 rounded transition-all ${
                                  carouselIndex === index ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-teal-600 hover:bg-teal-50'
                                }`}
                              >
                                {index + 1}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Card className="text-center py-12">
                        <CardContent>
                          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Resources Found</h3>
                          <p className="text-gray-600">No resources match your search criteria.</p>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}