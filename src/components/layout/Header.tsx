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
        <div className="fixed top-0 left-0 right-0 z-[60] bg-white text-foreground border-b border-gray-200">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 py-2">
              <Bell
                className="shrink-0 opacity-60"
                size={16}
                aria-hidden="true"
              />
              <p className="text-sm flex-1">
                Join the Change Makers Society Club - We just added something awesome to make your experience even better.
              </p>
              <a href="/announcements" className="group text-sm font-medium whitespace-nowrap flex items-center gap-1">
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
                  className="opacity-60 transition-opacity group-hover:opacity-100"
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