import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Buttons';
import { Card } from './Cards';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink, 
  BookOpen, 
  Award, 
  TrendingUp,
  Building2,
  User,
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe
} from 'lucide-react';

// Alumni Card Component
interface AlumniCardProps {
  name: string;
  graduationYear: number;
  degree: string;
  currentPosition: string;
  company: string;
  location: string;
  bio?: string;
  profileImage?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    website?: string;
    email?: string;
  };
  achievements?: string[];
  className?: string;
}

export const AlumniCard: React.FC<AlumniCardProps> = ({
  name,
  graduationYear,
  degree,
  currentPosition,
  company,
  location,
  bio,
  profileImage,
  socialLinks,
  achievements,
  className
}) => {
  return (
    <Card variant="outlined" hover className={cn('p-6 transition-all duration-300 hover:shadow-lg', className)}>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-primary font-bold text-xl">
          {profileImage ? (
            <img src={profileImage} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            name.split(' ').map(n => n[0]).join('').toUpperCase()
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-1">{degree} • Class of {graduationYear}</p>
          <p className="text-sm font-medium text-primary">{currentPosition}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Building2 className="h-3 w-3" />
            <span>{company}</span>
            <span>•</span>
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      {bio && (
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{bio}</p>
      )}
      
      {achievements && achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
            <Award className="h-4 w-4 text-primary" />
            Key Achievements
          </h4>
          <div className="space-y-1">
            {achievements.slice(0, 2).map((achievement, index) => (
              <p key={index} className="text-xs text-muted-foreground">• {achievement}</p>
            ))}
            {achievements.length > 2 && (
              <p className="text-xs text-primary font-medium">+{achievements.length - 2} more achievements</p>
            )}
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {socialLinks?.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
               className="p-2 text-muted-foreground hover:text-blue-600 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {socialLinks?.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" 
               className="p-2 text-muted-foreground hover:text-gray-900 transition-colors">
              <Github className="h-4 w-4" />
            </a>
          )}
          {socialLinks?.website && (
            <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" 
               className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Globe className="h-4 w-4" />
            </a>
          )}
          {socialLinks?.email && (
            <a href={`mailto:${socialLinks.email}`} 
               className="p-2 text-muted-foreground hover:text-green-600 transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
        <Button variant="outline" size="sm">
          Connect
        </Button>
      </div>
    </Card>
  );
};

// Success Story Card Component
interface SuccessStoryCardProps {
  title: string;
  studentName: string;
  graduationYear: number;
  companyFounded?: string;
  currentRole?: string;
  story: string;
  impact: {
    metric: string;
    value: string;
  }[];
  image?: string;
  tags: string[];
  className?: string;
}

export const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({
  title,
  studentName,
  graduationYear,
  companyFounded,
  currentRole,
  story,
  impact,
  image,
  tags,
  className
}) => {
  return (
    <Card variant="elevated" hover className={cn('overflow-hidden transition-all duration-300 hover:shadow-xl', className)}>
      {image && (
        <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-sm opacity-90">{studentName} • Class of {graduationYear}</p>
          </div>
        </div>
      )}
      
      <div className="p-6">
        {!image && (
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{studentName} • Class of {graduationYear}</p>
            {companyFounded && (
              <p className="text-sm font-medium text-primary mt-1">Founder, {companyFounded}</p>
            )}
            {currentRole && (
              <p className="text-sm font-medium text-primary mt-1">{currentRole}</p>
            )}
          </div>
        )}
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-4 leading-relaxed">{story}</p>
        
        {impact && impact.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-success-600" />
              Impact Metrics
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {impact.slice(0, 4).map((metric, index) => (
                <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
                  <p className="text-lg font-bold text-primary">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.metric}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
              +{tags.length - 3} more
            </span>
          )}
        </div>
        
        <Button className="w-full" variant="outline">
          Read Full Story
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

// Resource Card Component
interface ResourceCardProps {
  title: string;
  description: string;
  type: 'document' | 'video' | 'course' | 'tool' | 'template';
  category: string;
  downloadUrl?: string;
  viewUrl?: string;
  fileSize?: string;
  duration?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  downloadCount?: number;
  rating?: number;
  className?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  type,
  category,
  downloadUrl,
  viewUrl,
  fileSize,
  duration,
  difficulty,
  tags,
  downloadCount,
  rating,
  className
}) => {
  const typeIcons = {
    document: BookOpen,
    video: Clock,
    course: Users,
    tool: ExternalLink,
    template: Award
  };
  
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };
  
  const TypeIcon = typeIcons[type];
  
  return (
    <Card variant="outlined" hover className={cn('p-6 transition-all duration-300 hover:shadow-lg', className)}>
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <TypeIcon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-foreground line-clamp-2">{title}</h3>
            {difficulty && (
              <span className={cn('px-2 py-1 rounded-full text-xs font-medium ml-2', difficultyColors[difficulty])}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            )}
          </div>
          <p className="text-sm text-primary font-medium mb-1">{category}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {fileSize && <span>Size: {fileSize}</span>}
            {duration && <span>Duration: {duration}</span>}
            {downloadCount && <span>{downloadCount} downloads</span>}
            {rating && (
              <div className="flex items-center gap-1">
                <span>★</span>
                <span>{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
            +{tags.length - 3} more
          </span>
        )}
      </div>
      
      <div className="flex gap-2">
        {viewUrl && (
          <Button variant="outline" className="flex-1" size="sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            View
          </Button>
        )}
        {downloadUrl && (
          <Button className="flex-1" size="sm">
            Download
          </Button>
        )}
      </div>
    </Card>
  );
};

// Competition Card Component
interface CompetitionCardProps {
  title: string;
  organizer: string;
  description: string;
  category: string;
  registrationDeadline: string;
  competitionDate: string;
  prizePool?: string;
  eligibility: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  participantCount?: number;
  maxTeamSize?: number;
  tags: string[];
  registrationUrl?: string;
  className?: string;
}

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
  title,
  organizer,
  description,
  category,
  registrationDeadline,
  competitionDate,
  prizePool,
  eligibility,
  difficulty,
  participantCount,
  maxTeamSize,
  tags,
  registrationUrl,
  className
}) => {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };
  
  const isRegistrationOpen = new Date(registrationDeadline) > new Date();
  
  return (
    <Card variant="elevated" hover className={cn('p-6 transition-all duration-300 hover:shadow-xl', className)}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-1">Organized by {organizer}</p>
          <p className="text-sm font-medium text-primary">{category}</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className={cn('px-3 py-1 rounded-full text-xs font-medium text-center', difficultyColors[difficulty])}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
          {isRegistrationOpen ? (
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium text-center">
              Open
            </span>
          ) : (
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium text-center">
              Closed
            </span>
          )}
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-muted/30 rounded-lg">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Registration Deadline</p>
          <p className="text-sm font-medium">{new Date(registrationDeadline).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Competition Date</p>
          <p className="text-sm font-medium">{new Date(competitionDate).toLocaleDateString()}</p>
        </div>
        {prizePool && (
          <div>
            <p className="text-xs text-muted-foreground mb-1">Prize Pool</p>
            <p className="text-sm font-bold text-primary">{prizePool}</p>
          </div>
        )}
        <div>
          <p className="text-xs text-muted-foreground mb-1">Participants</p>
          <div className="flex items-center gap-2">
            {participantCount && <span className="text-sm font-medium">{participantCount}</span>}
            {maxTeamSize && <span className="text-xs text-muted-foreground">Max team: {maxTeamSize}</span>}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-xs font-medium text-muted-foreground mb-2">Eligibility:</p>
        <div className="flex flex-wrap gap-1">
          {eligibility.slice(0, 3).map((criteria, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">
              {criteria}
            </span>
          ))}
          {eligibility.length > 3 && (
            <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
              +{eligibility.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 4).map((tag) => (
          <span key={tag} className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      
      <Button 
        className={cn('w-full', !isRegistrationOpen && 'opacity-50 cursor-not-allowed')} 
        disabled={!isRegistrationOpen}
      >
        {isRegistrationOpen ? 'Register Now' : 'Registration Closed'}
      </Button>
    </Card>
  );
};