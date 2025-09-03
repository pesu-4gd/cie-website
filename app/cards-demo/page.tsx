'use client';

import React from 'react';
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
  Globe,
  Briefcase,
  GraduationCap,
  Target,
  Star
} from 'lucide-react';

// Import all card components
import { 
  Card, 
  EventCard, 
  ProgramCard, 
  NewsCard, 
  JobCard, 
  StatsCard 
} from '@/components/design-system/Cards';

import {
  AlumniCard,
  SuccessStoryCard,
  ResourceCard,
  CompetitionCard
} from '@/components/design-system/SpecializedCards';

export default function CardsDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Card Components Demo</h1>
          <p className="text-xl opacity-90">Comprehensive showcase of all reusable card components</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Stats Cards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Statistics Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Students"
              value="2,847"
              change={{
                value: "+12%",
                trend: "up",
                period: "last month"
              }}
              icon={<Users className="h-6 w-6" />}
              color="primary"
              description="Active enrolled students"
            />
            <StatsCard
              title="Job Placements"
              value="156"
              change={{
                value: "+8%",
                trend: "up",
                period: "this quarter"
              }}
              icon={<Briefcase className="h-6 w-6" />}
              color="success"
              description="This academic year"
            />
            <StatsCard
              title="Active Programs"
              value="24"
              change={{
                value: "0%",
                trend: "neutral",
                period: "last month"
              }}
              icon={<GraduationCap className="h-6 w-6" />}
              color="warning"
              description="Running programs"
            />
            <StatsCard
              title="Success Rate"
              value="94%"
              change={{
                value: "+2%",
                trend: "up",
                period: "last year"
              }}
              icon={<Target className="h-6 w-6" />}
              color="success"
              description="Program completion"
            />
          </div>
        </section>

        {/* Event Cards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Event Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Tech Innovation Summit 2025"
              date="2025-03-15"
              time="09:00 AM"
              location="PES University Main Auditorium"
              description="Join industry leaders and innovators for a day of cutting-edge technology discussions, networking, and hands-on workshops."
              category="Conference"
              attendees={245}
              maxAttendees={300}
              registrationDeadline="2025-03-10"
            />
            <EventCard
              title="Startup Pitch Competition"
              date="2025-02-28"
              time="02:00 PM"
              location="CIE Incubation Center"
              description="Present your startup ideas to a panel of investors and industry experts. Win funding and mentorship opportunities."
              category="Competition"
              attendees={89}
              maxAttendees={100}
              registrationDeadline="2025-02-25"
            />
            <EventCard
              title="Alumni Networking Evening"
              date="2025-04-12"
              time="06:00 PM"
              location="PES University Campus"
              description="Connect with successful alumni, share experiences, and build valuable professional relationships."
              category="Networking"
              attendees={156}
              maxAttendees={200}
              registrationDeadline="2025-04-08"
            />
          </div>
        </section>

        {/* Program Cards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Program Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgramCard
              title="Entrepreneurship Bootcamp"
              description="Intensive 8-week program covering business fundamentals, market research, product development, and investor pitching."
              duration="8 weeks"
              level="Intermediate"
              category="Bootcamp"
              enrolledStudents={45}
              maxStudents={50}
              startDate="2025-03-01"
              applicationDeadline="2025-02-20"
            />
            <ProgramCard
              title="AI & Machine Learning Workshop"
              description="Hands-on workshop series exploring artificial intelligence, machine learning algorithms, and practical applications."
              duration="4 weeks"
              level="Advanced"
              category="Workshop"
              enrolledStudents={28}
              maxStudents={30}
              startDate="2025-02-15"
              applicationDeadline="2025-02-10"
            />
            <ProgramCard
              title="Digital Marketing Masterclass"
              description="Comprehensive course covering SEO, social media marketing, content strategy, and analytics for modern businesses."
              duration="6 weeks"
              level="Beginner"
              category="Course"
              enrolledStudents={67}
              maxStudents={80}
              startDate="2025-03-15"
              applicationDeadline="2025-03-05"
            />
          </div>
        </section>

        {/* Job Cards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Job Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <JobCard
              title="Senior Software Engineer"
              company="TechCorp Solutions"
              location="Bangalore"
              type="Full-time"
              salary="₹15-25 LPA"
              description="We're looking for an experienced software engineer to join our growing team. You'll work on cutting-edge projects using modern technologies and frameworks."
              postedDate="2 days ago"
              remote={true}
              experienceLevel="senior"
              skills={["React", "Node.js", "TypeScript", "AWS", "Docker"]}
              applicants={47}
            />
            <JobCard
              title="Product Manager"
              company="InnovateLabs"
              location="Mumbai"
              type="Full-time"
              salary="₹20-30 LPA"
              description="Lead product strategy and development for our flagship SaaS platform. Work closely with engineering, design, and business teams."
              postedDate="1 week ago"
              remote={false}
              experienceLevel="mid"
              skills={["Product Strategy", "Agile", "Analytics", "User Research"]}
              applicants={23}
            />
            <JobCard
              title="Frontend Developer Intern"
              company="StartupXYZ"
              location="Hyderabad"
              type="Internship"
              salary="₹25,000/month"
              description="Join our dynamic team as a frontend developer intern. Great opportunity to learn modern web development and work on real projects."
              postedDate="3 days ago"
              remote={true}
              experienceLevel="entry"
              skills={["HTML", "CSS", "JavaScript", "React"]}
              applicants={89}
            />
          </div>
        </section>

        {/* News Cards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">News Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewsCard
              title="CIE Students Win National Innovation Challenge"
              excerpt="Team from PES University's Center for Innovation and Entrepreneurship secures first place in the prestigious National Innovation Challenge 2025."
              publishedDate="2025-01-15"
              author="Dr. Rajesh Kumar"
              category="Achievement"
              readTime="3 min read"
              tags={["Innovation", "Competition", "Students"]}
            />
            <NewsCard
              title="New Incubation Center Opens at PES Campus"
              excerpt="State-of-the-art incubation facility launched to support student startups with mentorship, funding, and resources."
              publishedDate="2025-01-10"
              author="Prof. Anita Sharma"
              category="Infrastructure"
              readTime="5 min read"
              tags={["Incubation", "Startups", "Infrastructure"]}
            />
            <NewsCard
              title="Industry Partnership Program Expands"
              excerpt="CIE announces new partnerships with leading tech companies to provide more internship and job opportunities for students."
              publishedDate="2025-01-08"
              author="CIE Team"
              category="Partnership"
              readTime="4 min read"
              tags={["Industry", "Partnership", "Opportunities"]}
            />
          </div>
        </section>

        {/* Alumni Cards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Alumni Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AlumniCard
              name="Priya Sharma"
              graduationYear={2018}
              degree="B.Tech Computer Science"
              currentPosition="Senior Product Manager"
              company="Google"
              location="Bangalore, India"
              bio="Passionate about building products that impact millions of users. Leading the development of next-generation cloud solutions at Google."
              socialLinks={{
                linkedin: "https://linkedin.com/in/priyasharma",
                email: "priya.sharma@example.com"
              }}
              achievements={[
                "Led product launch reaching 10M+ users",
                "Featured in Forbes 30 Under 30",
                "Speaker at Google I/O 2024"
              ]}
            />
            <AlumniCard
              name="Arjun Patel"
              graduationYear={2019}
              degree="B.Tech Electronics"
              currentPosition="Founder & CEO"
              company="TechStart Solutions"
              location="San Francisco, USA"
              bio="Serial entrepreneur with a passion for IoT and smart city solutions. Building the future of connected devices."
              socialLinks={{
                linkedin: "https://linkedin.com/in/arjunpatel",
                github: "https://github.com/arjunpatel",
                website: "https://techstartsolutions.com"
              }}
              achievements={[
                "Raised $5M in Series A funding",
                "Patent holder for IoT innovations",
                "TED Talk speaker"
              ]}
            />
          </div>
        </section>

        {/* Success Story Cards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Success Story Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SuccessStoryCard
              title="From Student to Unicorn Founder"
              studentName="Rahul Verma"
              graduationYear={2017}
              companyFounded="EduTech Innovations"
              story="Started with a simple idea to make education accessible to everyone. Today, EduTech Innovations serves over 2 million students across India and has revolutionized online learning."
              impact={[
                { metric: "Students Served", value: "2M+" },
                { metric: "Funding Raised", value: "$50M" },
                { metric: "Team Size", value: "200+" },
                { metric: "Cities", value: "50+" }
              ]}
              tags={["EdTech", "Startup", "Innovation", "Education"]}
            />
            <SuccessStoryCard
              title="AI Research Breakthrough"
              studentName="Dr. Sneha Reddy"
              graduationYear={2016}
              currentRole="Lead AI Researcher at Microsoft"
              story="Pioneered groundbreaking research in natural language processing that's now used by millions of users worldwide. Her work has been published in top-tier conferences and journals."
              impact={[
                { metric: "Research Papers", value: "25+" },
                { metric: "Citations", value: "1000+" },
                { metric: "Patents", value: "8" },
                { metric: "Awards", value: "12" }
              ]}
              tags={["AI", "Research", "NLP", "Microsoft"]}
            />
          </div>
        </section>

        {/* Resource Cards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Resource Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="Startup Business Plan Template"
              description="Comprehensive business plan template specifically designed for tech startups. Includes financial projections, market analysis, and investor pitch sections."
              type="template"
              category="Business Planning"
              downloadUrl="#"
              fileSize="2.5 MB"
              difficulty="intermediate"
              tags={["Business Plan", "Startup", "Template", "Finance"]}
              downloadCount={1247}
              rating={4.8}
            />
            <ResourceCard
              title="Introduction to Machine Learning"
              description="Complete video course covering machine learning fundamentals, algorithms, and practical implementations using Python and scikit-learn."
              type="course"
              category="Technology"
              viewUrl="#"
              duration="12 hours"
              difficulty="beginner"
              tags={["Machine Learning", "Python", "AI", "Data Science"]}
              downloadCount={892}
              rating={4.9}
            />
            <ResourceCard
              title="Pitch Deck Masterclass"
              description="Learn how to create compelling investor presentations with this comprehensive guide and video tutorials from successful entrepreneurs."
              type="video"
              category="Entrepreneurship"
              viewUrl="#"
              duration="3 hours"
              difficulty="intermediate"
              tags={["Pitch Deck", "Investment", "Presentation", "Startup"]}
              downloadCount={567}
              rating={4.7}
            />
          </div>
        </section>

        {/* Competition Cards Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Competition Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CompetitionCard
              title="National Hackathon 2025"
              organizer="TechFest India"
              description="48-hour coding marathon where teams build innovative solutions for real-world problems. Categories include AI/ML, Web Development, Mobile Apps, and IoT."
              category="Technology"
              registrationDeadline="2025-03-01"
              competitionDate="2025-03-15"
              prizePool="₹5,00,000"
              eligibility={["College Students", "Age 18-25", "Team of 2-4 members"]}
              difficulty="intermediate"
              participantCount={1200}
              maxTeamSize={4}
              tags={["Hackathon", "Coding", "Innovation", "Technology"]}
              registrationUrl="#"
            />
            <CompetitionCard
              title="Business Model Innovation Challenge"
              organizer="CIE PES University"
              description="Design innovative business models for sustainable solutions. Focus on social impact, environmental sustainability, and scalable business strategies."
              category="Business"
              registrationDeadline="2025-02-15"
              competitionDate="2025-02-28"
              prizePool="₹2,00,000"
              eligibility={["University Students", "Recent Graduates", "Individual or Team"]}
              difficulty="advanced"
              participantCount={450}
              maxTeamSize={3}
              tags={["Business Model", "Innovation", "Sustainability", "Social Impact"]}
              registrationUrl="#"
            />
          </div>
        </section>

      </div>
    </div>
  );
}