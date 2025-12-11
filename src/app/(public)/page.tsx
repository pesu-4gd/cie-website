import {
  HeroSection,
  StatsSection,
  MainSectionsGrid,
  FeaturesSection,
  CTASection,
} from '@/components/sections/landing';

/**
 * Landing page - Main entry point of CIE website
 */
export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Hexagonal Background */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Main Sections (Students, Alumni, Industry, Inside CIE) */}
      <MainSectionsGrid />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
