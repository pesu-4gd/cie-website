'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Mail, Phone, Clock, Send, MessageSquare, Users, Building2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact CIE
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for partnerships, programs, or general inquiries. We're here to help you on your innovation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
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
                  <a href="mailto:cieinfo@pes.edu" className="hover:text-green-600 transition-colors">
                    cieinfo@pes.edu
                  </a><br />
                  General Inquiries
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">
                  +91 80 2672 7272<br />
                  Main Office
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
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
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Inquiry Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="programs">Student Programs</SelectItem>
                        <SelectItem value="industry">Industry Partnership</SelectItem>
                        <SelectItem value="alumni">Alumni Relations</SelectItem>
                        <SelectItem value="research">Research Collaboration</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="Brief subject of your inquiry"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please provide details about your inquiry..."
                    required
                    rows={6}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Team Directory */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Team Directory
              </h2>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        DR
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">Dr. Raghavendra P</h3>
                        <p className="text-gray-600">Director, CIE</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            <span>director.cie@pes.edu</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        SP
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">Prof. Sathya Prasad</h3>
                        <p className="text-gray-600">Program Director</p>
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

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        CIE
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">CIE Operations Team</h3>
                        <p className="text-gray-600">Program Coordination & Support</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Student Programs</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Industry Partnerships</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700">Media Inquiries</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Find Us
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Google Maps integration coming soon</p>
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
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the best way to reach CIE for urgent matters?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For urgent matters, please call our main office at +91 80 2672 7272 during office hours (9 AM - 5 PM, Monday to Friday). For non-urgent inquiries, email us at cieinfo@pes.edu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I need an appointment to visit CIE?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  While walk-ins are welcome during office hours, we recommend scheduling an appointment to ensure someone is available to meet with you. You can schedule appointments through our contact form or by calling our office.
                </p>
              </CardContent>
            </Card>

            <Card>
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