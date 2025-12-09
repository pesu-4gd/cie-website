'use client';

import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, Heart, Calendar, Search, UserPlus, DollarSign, Briefcase, GraduationCap, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const alumniColors = SECTION_COLORS.alumni;

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Interactive Hexagonal Background */}
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
          <InteractiveHexagonBackground 
          primaryColor={alumniColors.hero.background}
          // Use a yellow accent (amber) instead of the orange accent
          accentColor="#F59E0B"
          className="absolute inset-0 z-0"
        />
        
        {/* Hero Content - Centered */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white mb-8"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Alumni Network</span>
          </motion.div>

          {/* Title - Centered */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Stay Connected, Give Back
            <span className="block mt-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Grow Together
            </span>
          </motion.h1>

          {/* Subtitle - Centered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join our thriving alumni community and continue your journey of innovation while helping shape the future of entrepreneurship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/alumni/directory">
              <Button 
                variant="default" 
                size="lg"
                className="group bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white"
              >
                Alumni Directory
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/alumni/give-back">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                Give Back
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Alumni Network Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Growing Alumni Network
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a vibrant community of entrepreneurs, innovators, and industry leaders who continue to shape the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Active Alumni</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Startups Founded</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$50M+</div>
              <div className="text-gray-600">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Industry Leaders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Alumni Dashboard
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Alumni Directory */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Alumni Directory</CardTitle>
                    <CardDescription>Connect with fellow alumni</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Search and connect with alumni from your batch or field of interest. Build meaningful professional relationships.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Search by Batch</Badge>
                  <Badge variant="secondary">Filter by Industry</Badge>
                  <Badge variant="secondary">Location Based</Badge>
                </div>
                <Link href="/alumni/directory">
                  <Button className="w-full">
                    Browse Directory
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Give Back */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle>Give Back</CardTitle>
                    <CardDescription>Support the next generation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mentor students, invest in startups, or contribute to CIE's mission through various giving opportunities.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Mentorship Programs
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Alumni Angel Fund
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Guest Lectures
                  </div>
                </div>
                <Link href="/alumni/give-back">
                  <Button className="w-full" variant="outline">
                    Explore Opportunities
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Stay Connected */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <UserPlus className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>Stay Connected</CardTitle>
                    <CardDescription>Join the community</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join the PES University alumni association and stay updated with the latest news and events.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Alumni Newsletter
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Networking Events
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Social Platforms
                  </div>
                </div>
                <Link href="/alumni/stay-connected">
                  <Button className="w-full" variant="outline">
                    Join Network
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle>CIE Newsletter</CardTitle>
                    <CardDescription>Innovation updates</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Stay updated with innovation stories, startup success journeys, and community updates from CIE.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    10+ Issues Published
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Success Stories
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Community Updates
                  </div>
                </div>
                <Link href="/alumni/newsletter">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    Read Newsletter
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Alumni Spotlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Alumni Spotlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                    AM
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Aditya Mehta</h3>
                  <p className="text-gray-600 mb-2">Founder & CEO, Epicure Robotics</p>
                  <p className="text-sm text-gray-500 mb-4">Batch of 2019</p>
                  <p className="text-gray-600 text-sm">
                    Leading innovation in robotics and automation, building solutions that transform industries.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                    RR
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Rohith Ramesh</h3>
                  <p className="text-gray-600 mb-2">Tech Entrepreneur</p>
                  <p className="text-sm text-gray-500 mb-4">Batch of 2018</p>
                  <p className="text-gray-600 text-sm">
                    Successful entrepreneur and mentor, actively involved in CIE's alumni mentorship programs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                    RR
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Radha Rajappa</h3>
                  <p className="text-gray-600 mb-2">Product Manager, Tech Giant</p>
                  <p className="text-sm text-gray-500 mb-4">Batch of 2017</p>
                  <p className="text-gray-600 text-sm">
                    Leading product innovation at a major tech company and mentoring students in product management.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Alumni News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Alumni News
            </h2>
            <Link href="/alumni/news">
              <Button variant="outline">
                View All News
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  December 15, 2024
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Alumni Startup Raises $2M Series A
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Congratulations to our alumnus whose AI-powered healthcare startup successfully closed their Series A funding round.
                </p>
                <Badge variant="secondary">Funding</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  December 10, 2024
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Alumni Mentorship Program Launch
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  New structured mentorship program connecting experienced alumni with current students and recent graduates.
                </p>
                <Badge variant="secondary">Mentorship</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  December 5, 2024
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Global Alumni Meetup Success
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Over 200 alumni from 15 countries participated in our virtual global networking event.
                </p>
                <Badge variant="secondary">Networking</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Reconnect with CIE?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our alumni network and continue your journey of innovation while helping shape the future of entrepreneurship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/alumni/directory">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Browse Alumni Directory
              </Button>
            </Link>
            <Link href="/alumni/give-back">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-blue-600">
                Start Giving Back
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}