"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import { MapPin, Mail, Phone, Clock, MessageSquare, Users, Building2, ArrowRight, User } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (Inside CIE style) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        <InteractiveHexagonBackground
          primaryColor={SECTION_COLORS.insideCie.hero.background}
          accentColor="#F43F5E"
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-full mb-6">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Contact </span><span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">CIE</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get in touch with us for partnerships, programs, or general inquiries. We're here to help you on your innovation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-black group">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-red-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">Address</h3>
                <p className="text-gray-600 text-sm">
                  PES University<br />
                  100 Feet Ring Road<br />
                  Banashankari 3rd Stage<br />
                  Bangalore - 560085
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-black group">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-red-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">Email</h3>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:cieinfo@pes.edu" className="hover:text-red-600 transition-colors">
                    cieinfo@pes.edu
                  </a><br />
                  General Inquiries
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-black group">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-red-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">Phone</h3>
                <p className="text-gray-600 text-sm">
                  +91 80 2672 7272<br />
                  Main Office
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-black group">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-red-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">Office Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon - Fri: 9:00 AM - 5:00 PM<br />
                  Sat: By Appointment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Team Directory */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CIE Logo Section */}
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-white to-white rounded-2xl p-12 ">
                <img 
                  src="/assets/cie-logo.png" 
                  alt="CIE Logo" 
                  className="w-full max-w-md mx-auto"
                />
                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent mb-4">
                    Centre for Innovation and Entrepreneurship
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Empowering the next generation of innovators and entrepreneurs at PES University
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white"
                    onClick={() => globalThis.location.href = 'mailto:cieinfo@pes.edu'}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Team Directory */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Team Directory</span>
              </h2>
              <div className="space-y-4 stmt-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-black group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/assets/sathya-prasad.png"
                          alt="Prof. Sathya Prasad"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition-colors">Prof. Sathya Prasad</h3>
                        <p className="text-red-600">Director, CIE</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            <span>sathya.prasad@pes.edu</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              
                <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-red-200 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/assets/madhukar-narasimha.jpg"
                          alt="Madhukar Narasimha"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition-colors">Madhukar Narasimha</h3>
                        <p className="text-red-600">Program Manager</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            <span>cieoffice@pes.edu</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-black group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <User className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition-colors">CIE Operations Team</h3>
                        <p className="text-red-600">Program Coordination & Support</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            <span>cieinfo@pes.edu</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact Options */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Quick Contact</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-100">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">Student Programs</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white"
                      onClick={() => globalThis.location.href = 'mailto:cieinfo@pes.edu?subject=Student Programs Inquiry'}
                    >
                      Contact
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-100">
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">Industry Partnerships</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white"
                      onClick={() => globalThis.location.href = 'mailto:cieinfo@pes.edu?subject=Industry Partnership Inquiry'}
                    >
                      Contact
                    </Button>
                  </div>
                  {/* <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-100">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">Media Inquiries</span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white">
                      Contact
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Find Us</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <div className="aspect-video bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                {/* Embedded Google Maps iframe (fallback link provided below) */}
                <iframe
                  title="PES University Campus Map"
                  // embed by textual query so no short link is required
                  src="https://www.google.com/maps?q=PES%20University%20Bangalore&output=embed"
                  className="w-full h-full border-0"
                />
              </div>
              <div className="text-center mb-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=PES+University+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:underline"
                >
                  Open in Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Directions */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Getting Here</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">By Metro</h4>
                  <p className="text-gray-600 text-sm">
                    Take the Green Line to Banashankari Metro Station. CIE is a 10-minute walk from the station.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">By Bus</h4>
                  <p className="text-gray-600 text-sm">
                    Multiple BMTC bus routes serve the area. Get off at PES University bus stop on 100 Feet Ring Road.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">By Car</h4>
                  <p className="text-gray-600 text-sm">
                    Parking is available on campus. Enter through the main gate on 100 Feet Ring Road.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Landmarks</h4>
                  <p className="text-gray-600 text-sm">
                    Near Banashankari Temple, opposite to Banashankari Metro Station, on 100 Feet Ring Road.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Frequently Asked Questions</span>
          </h2>
          
          <div className="space-y-6">
            <Card className="border-2 hover:border-black transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">What is the best way to reach CIE for urgent matters?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For urgent matters, please call our main office at +91 80 2672 7272 during office hours (9 AM - 5 PM, Monday to Friday). For non-urgent inquiries, email us at cieinfo@pes.edu.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-black transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Do I need an appointment to visit CIE?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  While walk-ins are welcome during office hours, we recommend scheduling an appointment to ensure someone is available to meet with you. You can schedule appointments through our contact form or by calling our office.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can I expect a response to my inquiry?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24-48 hours during business days. Complex inquiries may take longer, but we'll acknowledge receipt and provide an expected timeline for a detailed response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}