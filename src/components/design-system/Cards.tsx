import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Buttons';

// Base Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  variant = 'default',
  padding = 'md',
  hover = false 
}) => {
  const variants = {
    default: 'bg-card text-card-foreground border shadow-cie-sm',
    elevated: 'bg-card text-card-foreground border-0 shadow-cie-lg',
    outlined: 'bg-card text-card-foreground border-2 border-primary-200 shadow-none',
    filled: 'bg-primary-50 text-primary-900 border border-primary-100 shadow-cie-sm',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <div 
      className={cn(
        'rounded-lg transition-all duration-200',
        variants[variant],
        paddings[padding],
        hover && 'hover:shadow-cie-md hover:-translate-y-1 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};

// Card Header
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={cn('flex flex-col space-y-1.5 pb-4', className)}>
    {children}
  </div>
);

// Card Title
export const CardTitle: React.FC<CardHeaderProps> = ({ children, className }) => (
  <h3 className={cn('text-xl font-semibold leading-none tracking-tight font-heading', className)}>
    {children}
  </h3>
);

// Card Description
export const CardDescription: React.FC<CardHeaderProps> = ({ children, className }) => (
  <p className={cn('text-sm text-muted-foreground leading-relaxed', className)}>
    {children}
  </p>
);

// Card Content
export const CardContent: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={cn('pt-0', className)}>
    {children}
  </div>
);

// Card Footer
export const CardFooter: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={cn('flex items-center pt-4', className)}>
    {children}
  </div>
);

// Specialized CIE Cards

// Program Card
interface ProgramCardProps {
  title: string;
  description: string;
  duration?: string;
  level?: string;
  category?: string;
  eligibility?: string;
  enrolledStudents?: number;
  maxStudents?: number;
  startDate?: string;
  applicationDeadline?: string;
  image?: string;
  onApply?: () => void;
  onLearnMore?: () => void;
  inquireEmail?: string;
  className?: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  duration,
  level,
  category,
  eligibility,
  enrolledStudents,
  maxStudents,
  startDate,
  applicationDeadline,
  image,
  onApply,
  onLearnMore,
  inquireEmail,
  className
}) => (
  <Card variant="elevated" hover className={cn('max-w-sm', className)}>
    {image && (
      <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-lg mb-4 flex items-center justify-center">
        <span className="text-primary-600 font-semibold">Program Image</span>
      </div>
    )}
    <CardHeader>
      <CardTitle className="text-primary-700">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {duration && (
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span className="font-medium">Duration:</span>
          <span className="ml-2">{duration}</span>
        </div>
      )}
      {level && (
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span className="font-medium">Level:</span>
          <span className="ml-2">{level}</span>
        </div>
      )}
      {category && (
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span className="font-medium">Category:</span>
          <span className="ml-2">{category}</span>
        </div>
      )}
      {enrolledStudents && maxStudents && (
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span className="font-medium">Enrolled:</span>
          <span className="ml-2">{enrolledStudents} / {maxStudents}</span>
        </div>
      )}
      {startDate && (
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span className="font-medium">Starts:</span>
          <span className="ml-2">{startDate}</span>
        </div>
      )}
      {applicationDeadline && (
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span className="font-medium">Apply by:</span>
          <span className="ml-2">{applicationDeadline}</span>
        </div>
      )}
      {eligibility && (
        <div className="flex items-center text-sm text-muted-foreground">
          <span className="font-medium">Eligibility:</span>
          <span className="ml-2">{eligibility}</span>
        </div>
      )}
    </CardContent>
    <CardFooter className="gap-2">
      {(onApply || inquireEmail) && (
        <Button variant="default" size="sm" asChild={!!inquireEmail} onClick={!inquireEmail ? onApply : undefined}>
          {inquireEmail ? (
            <a href={`mailto:${inquireEmail}`}>Inquire</a>
          ) : (
            "Inquire"
          )}
        </Button>
      )}
      {onLearnMore && (
        <Button variant="outline" size="sm" onClick={onLearnMore}>
          Learn More
        </Button>
      )}
    </CardFooter>
  </Card>
);

// Event Card
interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  category?: string;
  attendees?: number;
  maxAttendees?: number;
  registrationDeadline?: string;
  onRegister?: () => void;
  onViewDetails?: () => void;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  time,
  location,
  category,
  attendees,
  maxAttendees,
  registrationDeadline,
  onRegister,
  onViewDetails,
  className
}) => (
  <Card variant="default" hover className={cn('max-w-md', className)}>
    <CardHeader>
      <div className="flex justify-between items-start">
        <CardTitle className="text-lg">{title}</CardTitle>
        {category && (
          <span className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
            {category}
          </span>
        )}
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center">
          <span className="font-medium w-16">Date:</span>
          <span>{date}</span>
        </div>
        {time && (
          <div className="flex items-center">
            <span className="font-medium w-16">Time:</span>
            <span>{time}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center">
            <span className="font-medium w-16">Location:</span>
            <span>{location}</span>
          </div>
        )}
        {attendees && maxAttendees && (
          <div className="flex items-center">
            <span className="font-medium w-16">Attendees:</span>
            <span>{attendees} / {maxAttendees}</span>
          </div>
        )}
        {registrationDeadline && (
          <div className="flex items-center">
            <span className="font-medium w-16">Deadline:</span>
            <span>{registrationDeadline}</span>
          </div>
        )}
      </div>
    </CardContent>
    <CardFooter className="gap-2">
      {onRegister && (
        <Button variant="default" size="sm" onClick={onRegister}>
          Register
        </Button>
      )}
      {onViewDetails && (
        <Button variant="ghost" size="sm" onClick={onViewDetails}>
          View Details
        </Button>
      )}
    </CardFooter>
  </Card>
);

// News Card
interface NewsCardProps {
  title: string;
  summary?: string;
  excerpt?: string;
  author?: string;
  publishedDate: string;
  category?: string;
  readTime?: string;
  tags?: string[];
  featured?: boolean;
  onRead?: () => void;
  className?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  summary,
  excerpt,
  author,
  publishedDate,
  category,
  readTime,
  tags = [],
  featured = false,
  onRead,
  className
}) => {
  const contentText = excerpt || summary || '';
  
  return (
    <Card 
      variant={featured ? 'filled' : 'default'} 
      hover 
      className={cn('max-w-lg', className)}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className={cn('text-lg', featured && 'text-primary-800')}>
            {title}
          </CardTitle>
          {featured && (
            <span className="px-2 py-1 text-xs font-bold bg-cie-gold text-gray-900 rounded-full">
              FEATURED
            </span>
          )}
        </div>
        <CardDescription>{contentText}</CardDescription>
      </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
        <div className="flex items-center space-x-4">
          {author && <span>By {author}</span>}
          <span>{publishedDate}</span>
        </div>
        <div className="flex items-center space-x-2">
          {category && (
            <span className="px-2 py-1 text-xs bg-secondary-100 text-secondary-700 rounded">
              {category}
            </span>
          )}
          {readTime && <span>{readTime} read</span>}
        </div>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      )}
    </CardContent>
    {onRead && (
      <CardFooter>
        <Button variant="ghost" size="sm" onClick={onRead}>
          Read More →
        </Button>
      </CardFooter>
    )}
  </Card>
  );
};

// Job Card
interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  deadline?: string;
  postedDate?: string;
  remote?: boolean;
  experienceLevel?: 'entry' | 'mid' | 'senior';
  skills?: string[];
  applicants?: number;
  onApply?: () => void;
  onViewDetails?: () => void;
  inquireEmail?: string;
  className?: string;
}

export const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  type,
  salary,
  description,
  deadline,
  postedDate,
  remote = false,
  experienceLevel,
  skills = [],
  applicants,
  onApply,
  onViewDetails,
  inquireEmail,
  className
}) => {
  const experienceLevelColors = {
    entry: 'bg-green-100 text-green-800',
    mid: 'bg-blue-100 text-blue-800',
    senior: 'bg-purple-100 text-purple-800'
  };

  return (
    <Card variant="outlined" hover className={cn('max-w-lg', className)}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg text-primary-700">{title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{company}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>{location}</span>
                {remote && <span className="text-green-600 font-medium">(Remote)</span>}
              </div>
            </div>
            {applicants && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>{applicants} applicants</span>
              </div>
            )}
          </div>
          <div className="text-right space-y-2">
            <div className="flex flex-col gap-1">
              <span className="px-2 py-1 text-xs font-medium bg-success-100 text-success-700 rounded">
                {type}
              </span>
              {experienceLevel && (
                <span className={cn('px-2 py-1 rounded text-xs font-medium', experienceLevelColors[experienceLevel])}>
                  {experienceLevel.charAt(0).toUpperCase() + experienceLevel.slice(1)}
                </span>
              )}
            </div>
            {salary && (
              <p className="text-sm font-semibold text-foreground">{salary}</p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
        
        {skills.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 4).map((skill) => (
                <span key={skill} className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
                  {skill}
                </span>
              ))}
              {skills.length > 4 && (
                <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
                  +{skills.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="space-y-1 text-sm">
          {postedDate && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Posted:</span>
              <span className="font-medium text-muted-foreground">{postedDate}</span>
            </div>
          )}
          {deadline && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Deadline:</span>
              <span className="font-medium text-warning-600">{deadline}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        {(onApply || inquireEmail) && (
          <Button variant="default" size="sm" asChild={!!inquireEmail} onClick={!inquireEmail ? onApply : undefined}>
            {inquireEmail ? (
              <a href={`mailto:${inquireEmail}`}>Inquire</a>
            ) : (
              "Inquire"
            )}
          </Button>
        )}
        {onViewDetails && (
          <Button variant="outline" size="sm" onClick={onViewDetails}>
            View Details
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

// Stats Card
interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  trendPeriod?: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  trend,
  trendValue,
  trendPeriod,
  icon,
  color = 'primary',
  className
}) => {
  const trendColors = {
    up: 'text-success-600',
    down: 'text-error-600',
    neutral: 'text-muted-foreground'
  };

  const colorVariants = {
    primary: 'text-primary-500',
    success: 'text-success-600',
    warning: 'text-warning-600',
    danger: 'text-error-600'
  };

  return (
    <Card variant="elevated" className={cn('text-center transition-all duration-300 hover:shadow-lg', className)}>
      <CardContent className="pt-6">
        {icon && (
          <div className={cn('flex justify-center mb-4', colorVariants[color])}>
            {icon}
          </div>
        )}
        <div className="text-3xl font-bold text-foreground mb-2">{value}</div>
        <div className="text-sm font-medium text-muted-foreground mb-1">{title}</div>
        {description && (
          <div className="text-xs text-muted-foreground">{description}</div>
        )}
        {trend && trendValue && (
          <div className={cn(
            'text-xs font-medium mt-2 flex items-center justify-center gap-1',
            trendColors[trend]
          )}>
            {trend === 'up' && '↗'} {trend === 'down' && '↘'} 
            <span>{trendValue}</span>
            {trendPeriod && (
              <span className="text-muted-foreground">vs {trendPeriod}</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};