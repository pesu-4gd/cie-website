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
  Bell,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const pathname = usePathname();

  // Check if we're on homepage
  const isHomePage = pathname === '/';

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
      {/* Announcement Banner - Only on Homepage */}
          {isHomePage && showBanner && (
            <div className="fixed top-0 left-0 right-0 z-[60] bg-[#F15A29] text-white border-b border-transparent">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 py-2">
              <Bell
                className="shrink-0 opacity-60 text-white"
                size={16}
                aria-hidden="true"
              />
              <p className="text-sm flex-1">
                Newsletter Issue 10 - Robotics and Healthcare
              </p>
              <a href="/alumni/newsletter" className="group text-sm font-medium whitespace-nowrap flex items-center gap-1">
                Learn more
                <ArrowRight
                  className="inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  aria-hidden="true"
                />
              </a>
              <Button
                variant="ghost"
                className="group size-8 shrink-0 p-0 hover:bg-transparent"
                onClick={() => setShowBanner(false)}
                aria-label="Close banner"
              >
                <X
                  size={16}
                  className="opacity-60 transition-opacity group-hover:opacity-100 text-white"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </div>
      )}

      <header 
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100',
          // Add top spacing when banner is visible on homepage
          isHomePage && showBanner ? 'top-[52px]' : 'top-0',
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
                <div className={cn(
                  "relative transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isScrolled ? "h-12 w-[280px]" : "h-14 w-[180px]"
                )}>
                  <Image 
                    src="/assets/cie-logo.png"
                    alt="CIE Logo" 
                    width={180} 
                    height={56} 
                    priority
                    className={cn(
                      "absolute inset-0 h-full w-full object-contain transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isScrolled ? "opacity-0 scale-[0.85] blur-[2px]" : "opacity-100 scale-100 blur-0"
                    )}
                  />
                  <Image 
                    src="/assets/cie-logo-with-line.png"
                    alt="CIE Logo" 
                    width={280} 
                    height={48} 
                    priority
                    className={cn(
                      "absolute inset-0 h-full w-full object-contain transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isScrolled ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.15] blur-[2px]"
                    )}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <Navigation className="flex-1 justify-center" />

            {/* Right Side Actions */}
            <div className="flex items-center space-x-6">
              {/* Removed Search, Notifications and Contact actions per request */}



              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden h-10 w-10 p-0 rounded-full hover:bg-pes-navy/5 transition-all duration-200"
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