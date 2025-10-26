'use client';

import { Container, H4, P } from '@/components/design-system';
import { Button } from '@/components/ui/button';
// Input removed since newsletter is commented out
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Building
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About CIE', href: '/about' },
    { name: 'Programs', href: '/students/programs' },
    { name: 'Events', href: '/students/events' },
    { name: 'Industry Partnerships', href: '/industry/collaborations' },
    { name: 'Alumni Network', href: '/alumni' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const studentLinks = [
    { name: 'Student Programs', href: '/students/programs' },
    { name: 'Mentorship', href: '/students/mentorship' },
    { name: 'Funding Opportunities', href: '/students/funding' },
    { name: 'Student Clubs', href: '/students/clubs' },
    { name: 'Resources', href: '/students/resources' },
    { name: 'FAQs', href: '/students/faqs' }
  ];

  const industryLinks = [
    { name: 'Collaborations', href: '/industry/collaborations' },
    { name: 'Job Portal', href: '/industry/jobs' },
    { name: 'Competitions', href: '/industry/competitions' },
    { name: 'Success Stories', href: '/industry/success-stories' },
    { name: 'Partner With Us', href: '/industry/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/policies/privacy' },
    { name: 'Terms of Service', href: '/policies/terms' },
    { name: 'Cookie Policy', href: '/policies/cookies' },
    { name: 'Accessibility', href: '/policies/accessibility' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/pesuniversity', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/pesuniversity', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/pesuniversity', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/school/pesuniversity', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/pesuniversity', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/*
        Newsletter Section (commented out per request)
        <div className="bg-gray-800 border-b border-gray-700">
          <Container className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <H3 className="mb-4 text-white">Stay Connected with CIE</H3>
              <P className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest updates on programs, events, opportunities, and success stories from the Center for Innovation & Entrepreneurship.
              </P>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Button className="bg-pes-navy hover:bg-pes-navy-dark text-white">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      */}

      {/* Main Footer Content */}
      <div className="bg-gray-900">
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
            {/* CIE Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/assets/CIE Logo White Short.svg" 
                  alt="CIE Logo" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-bold text-lg text-white">Center for Innovation & Entrepreneurship</h3>
                  <p className="text-sm text-gray-400">PES University</p>
                </div>
              </div>
              <P className="text-gray-300 mb-4 max-w-md">
                Empowering the next generation of innovators and entrepreneurs through cutting-edge programs, 
                mentorship, and real-world opportunities.
              </P>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white" aria-label="X / Twitter">
                  <svg className="w-4 h-4" viewBox="0 0 640 640" fill="currentColor" aria-hidden xmlns="http://www.w3.org/2000/svg">
                    <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <H4 className="mb-6 text-white">Quick Links</H4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Students */}
            <div>
              <H4 className="mb-6 text-white">Students</H4>
              <ul className="space-y-3">
                {studentLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industry */}
            <div>
              <H4 className="mb-6 text-white">Industry</H4>
              <ul className="space-y-3">
                {industryLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} Center for Innovation & Entrepreneurship, PES University. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              {legalLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="mx-2 text-gray-500">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;