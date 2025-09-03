'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/design-system';
import { Navigation, MobileNavigation } from './Navigation';
import { 
  Menu, 
  X, 
  Search,
  Bell,
  Phone
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100',
          className
        )}
      >
        <div className={cn(
          "container mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-300",
          isScrolled ? "max-w-7xl" : "max-w-full"
        )}>
          <div className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-16" : "h-20"
          )}>
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <Image 
                  src="/assets/CIE Logo.png" 
                  alt="CIE Logo" 
                  width={120} 
                  height={40} 
                  className={cn(
                    "transition-all duration-300",
                    isScrolled ? "h-10 w-auto" : "h-12 w-auto"
                  )}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <Navigation className="flex-1 justify-center" />

            {/* Right Side Actions */}
            <div className="flex items-center space-x-6">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="sm"
                className="hidden lg:flex h-10 w-10 p-0 rounded-full hover:bg-blue-50 transition-all duration-200"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-gray-600 hover:text-blue-600" />
              </Button>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="sm"
                className="hidden lg:flex h-10 w-10 p-0 relative rounded-full hover:bg-blue-50 transition-all duration-200"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5 text-gray-600 hover:text-blue-600" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
              </Button>

              {/* Contact Us Button */}
              <Button
                asChild
                className="hidden md:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border-0"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>



              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden h-10 w-10 p-0 rounded-full hover:bg-blue-50 transition-all duration-200"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
};

export default Header;