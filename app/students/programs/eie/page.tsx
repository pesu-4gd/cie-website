'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Target,
  Lightbulb,
  Download,
  ExternalLink,
  User,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

const courseData = {
  part1: {
    title: 'EIE Part 1: Foundations of Entrepreneurship',
    duration: '6 weeks',
    credits: '2 credits',
    level: 'Beginner',
    nextBatch: 'February 2024',
    description: 'Build foundational knowledge in entrepreneurship, innovation, and business fundamentals.',
    prerequisites: ['Basic understanding of business concepts', 'Completion of orientation session'],
    learningOutcomes: [
      'Understand entrepreneurship ecosystem and mindset',
      'Identify and evaluate business opportunities',
      'Develop basic business model concepts',
      'Learn customer discovery and validation techniques',
      'Create simple business plans and pitches'
    ],
    modules: [
      {
        week: 1,
        title: 'Introduction to Entrepreneurship',
        topics: ['Entrepreneurial mindset', 'Innovation vs Invention', 'Startup ecosystem overview'],
        assignments: 'Entrepreneurship self-assessment'
      },
      {
        week: 2,
        title: 'Opportunity Recognition',
        topics: ['Market research basics', 'Problem identification', 'Trend analysis'],
        assignments: 'Opportunity identification report'
      },
      {
        week: 3,
        title: 'Business Model Fundamentals',
        topics: ['Business Model Canvas', 'Value propositions', 'Revenue models'],
        assignments: 'Business model canvas creation'
      },
      {
        week: 4,
        title: 'Customer Discovery',
        topics: ['Customer interviews', 'Market validation', 'Persona development'],
        assignments: 'Customer interview report'
      },
      {
        week: 5,
        title: 'Financial Basics',
        topics: ['Startup finances', 'Funding options', 'Basic financial planning'],
        assignments: 'Financial projection exercise'
      },
      {
        week: 6,
        title: 'Pitching & Presentation',
        topics: ['Pitch deck creation', 'Storytelling', 'Presentation skills'],
        assignments: 'Final pitch presentation'
      }
    ]
  },
  part2: {
    title: 'EIE Part 2: Advanced Innovation & Implementation',
    duration: '8 weeks',
    credits: '3 credits',
    level: 'Intermediate',
    nextBatch: 'April 2024',
    description: 'Advanced concepts in innovation management, startup execution, and scaling strategies.',
    prerequisites: ['Completion of EIE Part 1', 'Basic business plan submission', 'Faculty approval'],
    learningOutcomes: [
      'Master advanced innovation methodologies',
      'Develop comprehensive business strategies',
      'Understand scaling and growth strategies',
      'Learn legal and regulatory aspects',
      'Execute a real startup project or business plan'
    ],
    modules: [
      {
        week: 1,
        title: 'Innovation Management',
        topics: ['Design thinking', 'Lean startup methodology', 'Agile development'],
        assignments: 'Innovation project proposal'
      },
      {
        week: 2,
        title: 'Advanced Market Analysis',
        topics: ['Competitive analysis', 'Market sizing', 'Go-to-market strategy'],
        assignments: 'Market analysis report'
      },
      {
        week: 3,
        title: 'Product Development',
        topics: ['MVP development', 'Product-market fit', 'User experience design'],
        assignments: 'MVP prototype creation'
      },
      {
        week: 4,
        title: 'Operations & Supply Chain',
        topics: ['Operations planning', 'Supply chain management', 'Quality control'],
        assignments: 'Operations plan development'
      },
      {
        week: 5,
        title: 'Marketing & Sales',
        topics: ['Digital marketing', 'Sales strategies', 'Brand building'],
        assignments: 'Marketing campaign design'
      },
      {
        week: 6,
        title: 'Funding & Investment',
        topics: ['Investment readiness', 'Venture capital', 'Alternative funding'],
        assignments: 'Investment pitch preparation'
      },
      {
        week: 7,
        title: 'Legal & Regulatory',
        topics: ['Business registration', 'Intellectual property', 'Compliance'],
        assignments: 'Legal framework analysis'
      },
      {
        week: 8,
        title: 'Scaling & Growth',
        topics: ['Growth strategies', 'Team building', 'Exit strategies'],
        assignments: 'Final business plan presentation'
      }
    ]
  }
};

const instructors = [
  {
    name: 'Dr. Rajesh Kumar',
    title: 'Professor & Director, CIE',
    expertise: 'Entrepreneurship, Innovation Management',
    image: '/faculty/rajesh-kumar.jpg',
    experience: '15+ years in academia and industry'
  },
  {
    name: 'Ms. Priya Sharma',
    title: 'Industry Mentor',
    expertise: 'Startup Strategy, Product Management',
    image: '/faculty/priya-sharma.jpg',
    experience: 'Former VP at Tech Startup, 10+ years'
  },
  {
    name: 'Mr. Arjun Patel',
    title: 'Entrepreneur in Residence',
    expertise: 'Venture Capital, Scaling Strategies',
    image: '/faculty/arjun-patel.jpg',
    experience: 'Serial entrepreneur, 3 successful exits'
  }
];

const testimonials = [
  {
    name: 'Ananya Reddy',
    batch: 'EIE 2023',
    company: 'TechStart Solutions',
    quote: 'EIE transformed my understanding of entrepreneurship. The practical approach and mentorship helped me launch my own startup.',
    image: '/students/ananya-reddy.jpg'
  },
  {
    name: 'Vikram Singh',
    batch: 'EIE 2022',
    company: 'InnovateLab',
    quote: 'The curriculum is perfectly designed to bridge theory and practice. I gained confidence to pursue my entrepreneurial dreams.',
    image: '/students/vikram-singh.jpg'
  }
];

export default function EIEPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <InteractiveHexagonBackground className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30 mb-4">
              <GraduationCap className="h-4 w-4 mr-2" />
              Academic Program
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Entrepreneurship & Innovation{' '}
              <span className="block text-[#2B9EB3]">Education (EIE)</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive two-part program designed to transform students into confident entrepreneurs 
              and innovative thinkers through hands-on learning and real-world application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="h-5 w-5 mr-2" />
                Enroll Now
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Download Syllabus
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Structure</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A progressive learning journey from foundational concepts to advanced implementation
            </p>
          </div>

          <Tabs defaultValue="part1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="part1" className="text-lg py-3">
                <BookOpen className="h-5 w-5 mr-2" />
                EIE Part 1
              </TabsTrigger>
              <TabsTrigger value="part2" className="text-lg py-3">
                <Lightbulb className="h-5 w-5 mr-2" />
                EIE Part 2
              </TabsTrigger>
            </TabsList>

            <TabsContent value="part1">
              <CourseDetails course={courseData.part1} />
            </TabsContent>

            <TabsContent value="part2">
              <CourseDetails course={courseData.part2} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Instructors</h2>
            <p className="text-lg text-gray-600">
              Learn from industry experts and experienced entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="h-12 w-12 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{instructor.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {instructor.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{instructor.expertise}</p>
                    <p className="text-xs text-gray-500">{instructor.experience}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from our alumni who have transformed their ideas into successful ventures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.batch} • {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of students who have transformed their ideas into successful ventures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Calendar className="h-5 w-5 mr-2" />
                Apply for Next Batch
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <ExternalLink className="h-5 w-5 mr-2" />
                Schedule Info Session
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Course Details Component
function CourseDetails({ course }: { course: typeof courseData.part1 }) {
  return (
    <div className="space-y-8">
      {/* Course Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{course.title}</CardTitle>
          <CardDescription className="text-lg">{course.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Credits</p>
                <p className="font-semibold">{course.credits}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Level</p>
                <p className="font-semibold">{course.level}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Next Batch</p>
                <p className="font-semibold">{course.nextBatch}</p>
              </div>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Prerequisites</h4>
            <ul className="space-y-2">
              {course.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{prereq}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Learning Outcomes</h4>
            <ul className="space-y-2">
              {course.learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Course Modules */}
      <Card>
        <CardHeader>
          <CardTitle>Course Modules</CardTitle>
          <CardDescription>Weekly breakdown of topics and assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {course.modules.map((module, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-semibold text-gray-900">
                    Week {module.week}: {module.title}
                  </h5>
                  <Badge variant="outline">Week {module.week}</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Topics Covered:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2">
                          <ArrowRight className="h-3 w-3 text-blue-600" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Assignment:</p>
                    <p className="text-sm text-gray-700">{module.assignments}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}