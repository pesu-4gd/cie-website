'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Target, Eye, Award, MapPin, Mail, Phone, Calendar, Lightbulb, BookOpen, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About CIE
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Center for Innovation and Entrepreneurship at PES University is dedicated to inspiring students and startups to develop innovative, world-changing ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To foster role-model entrepreneurs who create high-value products and solutions by leveraging PES University's values and strengths. We inspire innovation, provide comprehensive support, and build a thriving ecosystem for entrepreneurship.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be a globally recognized center of excellence that transforms innovative ideas into successful ventures, creating a sustainable impact on society and the economy through entrepreneurship and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            CIE by the Numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Startups Incubated</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹50M+</div>
              <div className="text-gray-600">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Centers of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Innovation Programs</CardTitle>
                <CardDescription>Comprehensive training and support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We offer structured programs like EIE Part 1 & 2, Product Management in AI Era, and PAML workshops to develop entrepreneurial skills.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Entrepreneurship training</li>
                  <li>• Product development</li>
                  <li>• AI and technology focus</li>
                  <li>• Industry mentorship</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-lg w-fit">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Startup Incubation</CardTitle>
                <CardDescription>End-to-end startup support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  From ideation to scaling, we provide comprehensive support including funding, mentorship, and infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Seed funding support</li>
                  <li>• Mentor network access</li>
                  <li>• Co-working spaces</li>
                  <li>• Legal and compliance help</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-lg w-fit">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Research & Development</CardTitle>
                <CardDescription>Cutting-edge research initiatives</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our 15+ Centers of Excellence conduct world-class research in AI, IoT, cybersecurity, and emerging technologies.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Technology research</li>
                  <li>• Industry collaborations</li>
                  <li>• Publication support</li>
                  <li>• Innovation labs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  DR
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Raghavendra P</h3>
                <p className="text-gray-600 mb-3">Director, CIE</p>
                <p className="text-sm text-gray-500">
                  Leading CIE's vision of fostering innovation and entrepreneurship across PES University's ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  SP
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Prof. Sathya Prasad</h3>
                <p className="text-gray-600 mb-3">Program Director</p>
                <p className="text-sm text-gray-500">
                  Expert in product management and AI, leading our flagship programs and industry collaborations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  CIE
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">CIE Team</h3>
                <p className="text-gray-600 mb-3">Faculty & Staff</p>
                <p className="text-sm text-gray-500">
                  Dedicated team of faculty, mentors, and staff committed to nurturing the next generation of entrepreneurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Facilities
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Innovation Infrastructure</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Incubation Spaces</h4>
                    <p className="text-gray-600 text-sm">Modern co-working spaces designed for startups and innovation teams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Innovation Labs</h4>
                    <p className="text-gray-600 text-sm">State-of-the-art laboratories for research and development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Collaboration Spaces</h4>
                    <p className="text-gray-600 text-sm">Meeting rooms and event spaces for workshops and networking</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Centers of Excellence</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Badge variant="secondary" className="p-3 text-center">CRAIS</Badge>
                <Badge variant="secondary" className="p-3 text-center">C-IoT</Badge>
                <Badge variant="secondary" className="p-3 text-center">CHIPS</Badge>
                <Badge variant="secondary" className="p-3 text-center">CCNCS</Badge>
                <Badge variant="secondary" className="p-3 text-center">CDSAML</Badge>
                <Badge variant="secondary" className="p-3 text-center">C3I</Badge>
                <Badge variant="secondary" className="p-3 text-center">CORI</Badge>
                <Badge variant="secondary" className="p-3 text-center">QuaNaD</Badge>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Our 15+ Centers of Excellence span across AI, IoT, cybersecurity, quantum computing, and more, providing cutting-edge research facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 text-sm">
                  PES University<br />
                  100 Feet Ring Road<br />
                  Banashankari 3rd Stage<br />
                  Bangalore - 560085
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  cieinfo@pes.edu<br />
                  For general inquiries
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM<br />
                  Saturday by appointment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the CIE community and be part of the next generation of entrepreneurs and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/students">
              <Button size="lg" variant="secondary">
                Explore Programs
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}