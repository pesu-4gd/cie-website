'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'featured' | 'interactive' | 'gradient';
  hover?: boolean;
}

export function ModernCard({ 
  children, 
  className, 
  variant = 'default',
  hover = true 
}: ModernCardProps) {
  const baseClasses = 'cie-card';
  const variantClasses = {
    default: '',
    featured: 'cie-card-featured',
    interactive: 'cie-card-interactive',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
  };
  
  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        hover && 'hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  duration?: string;
  level?: string;
  participants?: number;
  href?: string;
  featured?: boolean;
}

export function ProgramCard({
  title,
  description,
  icon: Icon,
  category,
  duration,
  level,
  participants,
  href,
  featured = false
}: ProgramCardProps) {
  return (
    <ModernCard 
      variant={featured ? 'featured' : 'interactive'}
      className="p-6 h-full group cursor-pointer"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={cn(
          "p-3 rounded-xl",
          featured 
            ? "cie-gradient-vibrant text-white" 
            : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              {category}
            </span>
            {featured && (
              <span className="text-xs font-medium px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full">
                Featured
              </span>
            )}
          </div>
          <h3 className={cn(
            "text-lg font-bold mb-2",
            featured ? "cie-text-gradient" : "text-gray-900"
          )}>
            {title}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        {duration && (
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            {duration}
          </span>
        )}
        {level && (
          <span className="px-2 py-1 bg-gray-100 rounded-md">
            {level}
          </span>
        )}
      </div>
      
      {participants && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {participants}+ participants
          </span>
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>
      )}
    </ModernCard>
  );
}

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image?: string;
  registrationOpen?: boolean;
  attendees?: number;
}

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  category,
  image,
  registrationOpen = true,
  attendees
}: EventCardProps) {
  return (
    <ModernCard variant="interactive" className="overflow-hidden group">
      {image && (
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
          {registrationOpen && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full animate-pulse-glow">
                Open
              </span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-500">
              {date} • {time}
            </p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            {location}
          </span>
          {attendees && (
            <span className="text-gray-500">
              {attendees} attending
            </span>
          )}
        </div>
      </div>
    </ModernCard>
  );
}

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  readTime?: string;
}

export function NewsCard({
  title,
  excerpt,
  date,
  author,
  category,
  image,
  readTime
}: NewsCardProps) {
  return (
    <ModernCard variant="interactive" className="overflow-hidden group">
      {image && (
        <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 relative">
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-md">
              {category}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            {readTime && <span>{readTime}</span>}
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </ModernCard>
  );
}

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  color = 'blue'
}: StatsCardProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };
  
  return (
    <ModernCard className="p-6 relative overflow-hidden">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={cn(
          "p-3 rounded-xl bg-gradient-to-br text-white",
          colorClasses[color]
        )}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      
      {trend && (
        <div className="flex items-center gap-1">
          <span className={cn(
            "text-sm font-medium",
            trend.isPositive ? "text-green-600" : "text-red-600"
          )}>
            {trend.isPositive ? '+' : ''}{trend.value}%
          </span>
          <span className="text-xs text-gray-500">vs last month</span>
        </div>
      )}
      
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r",
        colorClasses[color]
      )} />
    </ModernCard>
  );
}