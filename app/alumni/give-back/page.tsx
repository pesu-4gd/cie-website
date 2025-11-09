
'use client';

import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, DollarSign, GraduationCap, Lightbulb, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function GiveBackPage() {
  const alumniColors = SECTION_COLORS.alumni;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={alumniColors.hero.background}
          accentColor="#F59E0B"
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Give Back to CIE
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your success story started at CIE. Now it's time to help write the next chapter for future entrepreneurs and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Your Impact Matters
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$2M+</div>
              <div className="text-gray-600">Alumni Investments</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Guest Lectures</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
              <div className="text-gray-600">Startups Funded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give Back */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Ways to Give Back
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mentorship */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Mentorship Programs</CardTitle>
                    <CardDescription>Guide the next generation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Share your expertise and experience with current students through structured mentorship programs.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>One-on-one mentoring sessions</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Guest lectures and workshops</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Industry insights and networking</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Career guidance and advice</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Flexible Schedule</Badge>
                  <Badge variant="secondary">Remote Options</Badge>
                  <Badge variant="secondary">High Impact</Badge>
                </div>

                <Button className="w-full">
                  Become a Mentor
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Alumni Angel Fund */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-purple-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="flex items-center">
                      Alumni Angel Fund
                      <Badge className="ml-2 bg-purple-100 text-purple-700">Featured</Badge>
                    </CardTitle>
                    <CardDescription>Invest in student startups</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Join our exclusive alumni angel fund and invest in promising student startups from CIE.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Curated startup opportunities</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Due diligence support</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Portfolio management</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Networking with co-investors</span>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <div className="text-sm font-medium text-purple-900 mb-1">Minimum Investment</div>
                  <div className="text-2xl font-bold text-purple-700">₹5 Lakhs</div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Join Angel Fund
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Donations */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle>Donations & Sponsorship</CardTitle>
                    <CardDescription>Support CIE programs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Support CIE's mission by contributing to scholarships, events, and infrastructure development.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Student scholarships</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Event sponsorships</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Infrastructure development</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Research funding</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Tax Benefits</Badge>
                  <Badge variant="secondary">Recognition</Badge>
                  <Badge variant="secondary">Impact Reports</Badge>
                </div>

                <Button className="w-full" variant="outline">
                  Make a Donation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Alumni Impact Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    BJ
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">BV Jagadeesh</h3>
                    <p className="text-sm text-gray-600">Serial Entrepreneur</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  "Mentoring at CIE has been incredibly rewarding. Seeing students transform their ideas into successful startups reminds me why I love entrepreneurship."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  Mentored 25+ students
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    RR
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rohith Ramesh</h3>
                    <p className="text-sm text-gray-600">Angel Investor</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  "Through the Alumni Angel Fund, I've invested in 5 student startups. It's amazing to see the quality of ideas coming from CIE."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <DollarSign className="h-4 w-4 mr-1" />
                  ₹50L+ invested
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    RR
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Radha Rajappa</h3>
                    <p className="text-sm text-gray-600">Product Manager, Google</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  "I regularly conduct workshops on product management. Giving back to CIE has helped me stay connected with the latest trends in entrepreneurship."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  10+ workshops conducted
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Upcoming Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  January 15, 2025
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Alumni Mentorship Program - Batch 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Join our structured 6-month mentorship program and guide 3-5 students through their entrepreneurial journey.
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">6 months commitment</Badge>
                  <Button asChild size="sm">
                    <a href="mailto:cieprogram@pes.edu">Inquire</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  February 1, 2025
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  CIE Ignite Ideathon - Judge Panel
                </h3>
                <p className="text-gray-600 mb-4">
                  Be part of the judging panel for our flagship ideathon and help select the most promising student startups.
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">2 days event</Badge>
                  <Button size="sm">
                    Join Panel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Your journey with CIE doesn't end at graduation. Join us in shaping the future of entrepreneurship and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Mentoring Today
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Explore All Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}