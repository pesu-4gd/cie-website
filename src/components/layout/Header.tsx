'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/design-system';
import { Navigation, MobileNavigation } from './Navigation';
import {
  Menu,
  X
} from 'lucide-react';

// Secondary navbar quick links (moved from footer)
const secondaryNavLinks = [
  { name: 'About CIE', href: '/about' },
  { name: 'Programs', href: '/students/programs' },
  { name: 'Events', href: '/students/events' },
  { name: 'Industry Partnerships', href: '/industry/collaborations' },
  { name: 'Alumni Network', href: '/alumni' },
  { name: 'Contact Us', href: '/contact' }
];

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSecondaryNav, setShowSecondaryNav] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Check if we're on homepage
  const isHomePage = pathname === '/';

  // Handle scroll effect - hide secondary nav on scroll down, show at top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      // Show secondary nav only when at or near the top
      if (currentScrollY <= 10) {
        setShowSecondaryNav(true);
      } else {
        setShowSecondaryNav(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      {/* Secondary Navigation Bar - Only on Homepage */}
      {isHomePage && (
        <div
          className={cn(
            "fixed top-0 left-0 right-0 z-[60] h-[40px] bg-[#00338d] text-white transition-transform duration-300 hidden lg:block",
            showSecondaryNav ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Empty div for balance */}
              <div className="w-[140px]"></div>

              {/* Centered Links */}
              <nav className="flex items-center justify-center gap-6">
                {secondaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/90 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Newsletter Button - Right Side */}
              <Link
                href="/alumni/newsletter"
                className="bg-[#FF6C00] hover:bg-[#e56000] text-white text-sm font-medium px-4 py-1.5 rounded transition-colors whitespace-nowrap"
              >
                Latest Newsletter
              </Link>
            </div>
          </div>
        </div>
      )}

      <header
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100',
          // Add top spacing when secondary nav is visible on homepage (desktop only)
          isHomePage && showSecondaryNav ? 'top-0 lg:top-[40px]' : 'top-0',
          className
        )}
      >
        <div className={cn(
          "container mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-300",
          isScrolled ? "max-w-7xl" : "max-w-full"
        )}>
          <div className={cn(
            "relative flex items-center justify-center transition-all duration-300",
            isScrolled ? "h-16" : "h-20"
          )}>
            {/* Logo - Positioned Left */}
            <div className="absolute left-0 flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className={cn(
                  "relative transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-w-[200px] sm:max-w-none",
                  isScrolled ? "h-10 w-[320px]" : "h-14 w-[180px]"
                )}>
                  <Image
                    src="/assets/cie-logo.png"
                    alt="CIE Logo"
                    width={180}
                    height={56}
                    priority
                    className={cn(
                      "absolute inset-0 h-full w-full object-contain object-left transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
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
                      "absolute inset-0 h-full w-full object-contain object-left transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isScrolled ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.15] blur-[2px]"
                    )}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <Navigation className="hidden lg:flex justify-center" />

            {/* Right Side Actions - Positioned Right */}
            <div className="absolute right-0 flex items-center space-x-6">
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