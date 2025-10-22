'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { ModernCard } from './modern-card';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  features?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
  variant?: 'default' | 'centered' | 'split';
  backgroundPattern?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  features,
  stats,
  variant = 'default',
  backgroundPattern = true
}: HeroSectionProps) {
  return (
    <section className={cn(
      "relative py-20 lg:py-32 overflow-hidden",
      backgroundPattern && "cie-hero"
    )}>
      {/* Background Elements */}
      {backgroundPattern && (
        <>
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-float" />
          <div className="absolute top-32 right-20 w-16 h-16 bg-orange-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        {variant === 'split' ? (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <HeroContent 
                title={title}
                subtitle={subtitle}
                description={description}
                primaryAction={primaryAction}
                secondaryAction={secondaryAction}
                features={features}
              />
            </div>
            <div className="animate-slide-in-right">
              <HeroVisual stats={stats} />
            </div>
          </div>
        ) : (
          <div className={cn(
            "max-w-4xl mx-auto",
            variant === 'centered' && "text-center"
          )}>
            <div className="animate-fade-in">
              <HeroContent 
                title={title}
                subtitle={subtitle}
                description={description}
                primaryAction={primaryAction}
                secondaryAction={secondaryAction}
                features={features}
                centered={variant === 'centered'}
              />
            </div>
            {stats && (
              <div className="mt-16 animate-slide-up">
                <HeroStats stats={stats} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

interface HeroContentProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  features?: string[];
  centered?: boolean;
}

function HeroContent({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  features,
  centered = false
}: HeroContentProps) {
  return (
    <div className={cn(centered && "text-center")}>
      {subtitle && (
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            {subtitle}
          </span>
        </div>
      )}
      
      <h1 className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight",
        "cie-heading"
      )}>
        {title}
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
        {description}
      </p>
      
      <div className={cn(
        "flex flex-col sm:flex-row gap-4 mb-8",
        centered && "justify-center"
      )}>
        {primaryAction && (
          <a 
            href={primaryAction.href}
            className="cie-button cie-button-primary group"
          >
            {primaryAction.text}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
        
        {secondaryAction && (
          <a 
            href={secondaryAction.href}
            className="cie-button cie-button-secondary group"
          >
            <Play className="w-4 h-4 mr-2" />
            {secondaryAction.text}
          </a>
        )}
      </div>
      
      {features && (
        <div className={cn(
          "flex flex-wrap gap-4 text-sm text-gray-600",
          centered && "justify-center"
        )}>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface HeroVisualProps {
  stats?: {
    label: string;
    value: string;
  }[];
}

function HeroVisual({ stats }: HeroVisualProps) {
  return (
    <div className="relative">
      {/* Main Visual Card */}
      <ModernCard className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">CIE Innovation Hub</h3>
              <p className="text-sm text-gray-600">Empowering Future Innovators</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats?.slice(0, 4).map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ModernCard>
      
      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl opacity-80 animate-float" />
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl opacity-80 animate-float" style={{ animationDelay: '1.5s' }} />
    </div>
  );
}

interface HeroStatsProps {
  stats: {
    label: string;
    value: string;
  }[];
}

function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="text-center animate-scale-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-3xl md:text-4xl font-bold cie-text-gradient mb-2">
            {stat.value}
          </div>
          <div className="text-gray-600 text-sm md:text-base">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// Specialized Hero Components
export function StudentHero() {
  return (
    <HeroSection
      subtitle="Student Innovation Hub"
      title="Transform Your Ideas Into Reality"
      description="Join CIE's comprehensive ecosystem of programs, mentorship, and resources designed to nurture the next generation of innovators and entrepreneurs."
      primaryAction={{
        text: "Explore Programs",
        href: "/students/programs"
      }}
      secondaryAction={{
        text: "Watch Demo",
        href: "#demo"
      }}
      features={[
        "100+ Active Projects",
        "Expert Mentorship",
        "Funding Opportunities",
        "Industry Partnerships"
      ]}
      stats={[
        { label: "Students Enrolled", value: "2,500+" },
        { label: "Projects Completed", value: "450+" },
        { label: "Startups Launched", value: "120+" },
        { label: "Funding Raised", value: "₹50Cr+" }
      ]}
      variant="split"
    />
  );
}

export function IndustryHero() {
  return (
    <HeroSection
      subtitle="Industry Partnerships"
      title="Collaborate with Tomorrow's Innovators"
      description="Partner with CIE to access cutting-edge research, talented students, and innovative solutions that drive your business forward."
      primaryAction={{
        text: "Start Partnership",
        href: "/industry/collaborations"
      }}
      secondaryAction={{
        text: "View Success Stories",
        href: "/industry/success-stories"
      }}
      features={[
        "Research Collaboration",
        "Talent Pipeline",
        "Innovation Projects",
        "Custom Solutions"
      ]}
      variant="centered"
    />
  );
}

export function AlumniHero() {
  return (
    <HeroSection
      subtitle="Alumni Network"
      title="Stay Connected, Give Back, Grow Together"
      description="Join our thriving alumni community and continue your journey of innovation while helping shape the future of entrepreneurship."
      primaryAction={{
        text: "Join Network",
        href: "/alumni/connect"
      }}
      secondaryAction={{
        text: "Give Back",
        href: "/alumni/give-back"
      }}
      features={[
        "Global Network",
        "Mentorship Programs",
        "Investment Opportunities",
        "Exclusive Events"
      ]}
      variant="centered"
    />
  );
}