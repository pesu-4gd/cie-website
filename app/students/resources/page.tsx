'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Download, ExternalLink, Search, Video, FileText, Code, Lightbulb, Users, Calendar, Star } from 'lucide-react';
import { useState } from 'react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  url?: string;
  downloadUrl?: string;
  author: string;
  publishDate: string;
  rating: number;
  downloads: number;
  tags: string[];
  isPremium: boolean;
}

const resources: Resource[] = [
  // Learning Materials
  {
    id: '1',
    title: 'Entrepreneurship Fundamentals Guide',
    description: 'Comprehensive guide covering basics of entrepreneurship, business model canvas, and startup fundamentals.',
    type: 'PDF',
    category: 'Learning Materials',
    downloadUrl: '/resources/entrepreneurship-guide.pdf',
    author: 'Dr. Rajesh Kumar',
    publishDate: '2024-01-15',
    rating: 4.8,
    downloads: 1250,
    tags: ['entrepreneurship', 'business model', 'startup'],
    isPremium: false
  },
  {
    id: '2',
    title: 'Product Management in AI Era',
    description: 'Complete course materials for understanding product management in the age of artificial intelligence.',
    type: 'Course',
    category: 'Learning Materials',
    url: '/courses/product-management-ai',
    author: 'Prof. Priya Sharma',
    publishDate: '2024-01-10',
    rating: 4.9,
    downloads: 890,
    tags: ['product management', 'AI', 'technology'],
    isPremium: true
  },
  {
    id: '3',
    title: 'Financial Planning for Startups',
    description: 'Essential financial planning templates and guides for early-stage startups and entrepreneurs.',
    type: 'Template',
    category: 'Learning Materials',
    downloadUrl: '/resources/financial-planning-template.xlsx',
    author: 'CA Suresh Babu',
    publishDate: '2024-01-08',
    rating: 4.7,
    downloads: 2100,
    tags: ['finance', 'planning', 'templates'],
    isPremium: false
  },

  // Tools & Software
  {
    id: '4',
    title: 'Business Model Canvas Tool',
    description: 'Interactive online tool for creating and sharing business model canvases with your team.',
    type: 'Tool',
    category: 'Tools & Software',
    url: 'https://canvas.cie-pes.edu',
    author: 'CIE Tech Team',
    publishDate: '2023-12-20',
    rating: 4.6,
    downloads: 3200,
    tags: ['business model', 'canvas', 'collaboration'],
    isPremium: false
  },
  {
    id: '5',
    title: 'Pitch Deck Designer',
    description: 'Professional pitch deck templates and design tool specifically created for startup presentations.',
    type: 'Tool',
    category: 'Tools & Software',
    url: '/tools/pitch-deck-designer',
    author: 'Design Team',
    publishDate: '2024-01-05',
    rating: 4.8,
    downloads: 1800,
    tags: ['pitch deck', 'presentation', 'design'],
    isPremium: true
  },
  {
    id: '6',
    title: 'Market Research Toolkit',
    description: 'Comprehensive toolkit with templates and guides for conducting effective market research.',
    type: 'Toolkit',
    category: 'Tools & Software',
    downloadUrl: '/resources/market-research-toolkit.zip',
    author: 'Research Team',
    publishDate: '2023-12-15',
    rating: 4.5,
    downloads: 1450,
    tags: ['market research', 'analysis', 'templates'],
    isPremium: false
  },

  // Video Tutorials
  {
    id: '7',
    title: 'How to Validate Your Startup Idea',
    description: 'Step-by-step video tutorial on validating startup ideas through customer interviews and market testing.',
    type: 'Video',
    category: 'Video Tutorials',
    url: '/videos/startup-validation',
    author: 'Dr. Amit Verma',
    publishDate: '2024-01-12',
    rating: 4.9,
    downloads: 2800,
    tags: ['validation', 'startup', 'customer development'],
    isPremium: false
  },
  {
    id: '8',
    title: 'Fundraising Masterclass Series',
    description: '10-part video series covering everything from seed funding to Series A, featuring successful entrepreneurs.',
    type: 'Video Series',
    category: 'Video Tutorials',
    url: '/videos/fundraising-masterclass',
    author: 'Industry Experts',
    publishDate: '2024-01-01',
    rating: 4.8,
    downloads: 1950,
    tags: ['fundraising', 'investment', 'venture capital'],
    isPremium: true
  },
  {
    id: '9',
    title: 'Digital Marketing for Startups',
    description: 'Practical video tutorials on digital marketing strategies specifically designed for startup budgets.',
    type: 'Video',
    category: 'Video Tutorials',
    url: '/videos/digital-marketing',
    author: 'Marketing Team',
    publishDate: '2023-12-28',
    rating: 4.6,
    downloads: 2200,
    tags: ['marketing', 'digital', 'growth'],
    isPremium: false
  },

  // Templates & Forms
  {
    id: '10',
    title: 'Legal Document Templates',
    description: 'Essential legal document templates including NDAs, partnership agreements, and employment contracts.',
    type: 'Template Pack',
    category: 'Templates & Forms',
    downloadUrl: '/resources/legal-templates.zip',
    author: 'Legal Team',
    publishDate: '2024-01-03',
    rating: 4.7,
    downloads: 1650,
    tags: ['legal', 'contracts', 'templates'],
    isPremium: true
  },
  {
    id: '11',
    title: 'Grant Application Templates',
    description: 'Proven templates for government grants, startup competitions, and funding applications.',
    type: 'Template',
    category: 'Templates & Forms',
    downloadUrl: '/resources/grant-templates.docx',
    author: 'Funding Team',
    publishDate: '2023-12-25',
    rating: 4.8,
    downloads: 1100,
    tags: ['grants', 'funding', 'applications'],
    isPremium: false
  },
  {
    id: '12',
    title: 'Customer Interview Scripts',
    description: 'Ready-to-use scripts and question banks for conducting effective customer discovery interviews.',
    type: 'Template',
    category: 'Templates & Forms',
    downloadUrl: '/resources/interview-scripts.pdf',
    author: 'UX Research Team',
    publishDate: '2024-01-07',
    rating: 4.6,
    downloads: 980,
    tags: ['customer interviews', 'research', 'validation'],
    isPremium: false
  }
];

const categories = ['All', 'Learning Materials', 'Tools & Software', 'Video Tutorials', 'Templates & Forms'];
const types = ['All', 'PDF', 'Video', 'Tool', 'Template', 'Course', 'Toolkit'];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('all');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'free' && !resource.isPremium) ||
                      (activeTab === 'premium' && resource.isPremium);
    return matchesSearch && matchesCategory && matchesTab;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="h-4 w-4" />;
      case 'Video': case 'Video Series': return <Video className="h-4 w-4" />;
      case 'Tool': case 'Toolkit': return <Code className="h-4 w-4" />;
      case 'Template': case 'Template Pack': return <FileText className="h-4 w-4" />;
      case 'Course': return <BookOpen className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learning Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access curated learning materials, tools, templates, and tutorials to accelerate your entrepreneurial journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Resources Available</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">25K+</div>
                <div className="text-gray-600">Total Downloads</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Video Tutorials</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">4.8★</div>
                <div className="text-gray-600">Average Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search and Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search resources, tools, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="free">Free Resources</TabsTrigger>
              <TabsTrigger value="premium">Premium Resources</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredResources.length} of {resources.length} resources
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredResources.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Resources Found</h3>
                <p className="text-gray-600 mb-4">
                  No resources match your search criteria. Try adjusting your filters.
                </p>
                <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setActiveTab('all'); }}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          {getTypeIcon(resource.type)}
                        </div>
                        <div>
                          <Badge variant={resource.isPremium ? "default" : "secondary"}>
                            {resource.isPremium ? 'Premium' : 'Free'}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{resource.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Metadata */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>By {resource.author}</span>
                        <span>{formatDate(resource.publishDate)}</span>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{resource.downloads.toLocaleString()}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {resource.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {resource.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{resource.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2 pt-4">
                        {resource.downloadUrl ? (
                          <Button size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        ) : (
                          <Button size="sm" className="flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Access
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          Preview
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Popular Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => {
              const categoryResources = resources.filter(resource => resource.category === category);
              const avgRating = categoryResources.reduce((sum, r) => sum + r.rating, 0) / categoryResources.length;
              
              return (
                <Card key={category} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      onClick={() => setSelectedCategory(category)}>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      {category === 'Learning Materials' && <BookOpen className="h-8 w-8 text-blue-600" />}
                      {category === 'Tools & Software' && <Code className="h-8 w-8 text-green-600" />}
                      {category === 'Video Tutorials' && <Video className="h-8 w-8 text-purple-600" />}
                      {category === 'Templates & Forms' && <FileText className="h-8 w-8 text-orange-600" />}
                    </div>
                    <CardTitle className="text-lg">{category}</CardTitle>
                    <CardDescription>
                      {categoryResources.length} resources • {avgRating.toFixed(1)}★ avg
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Something Specific?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Can't find what you're looking for? Request new resources or suggest improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Resource
            </Button>
            <Button size="lg" variant="outline">
              Contribute Content
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}