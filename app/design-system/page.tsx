'use client';

import React from 'react';
import {
  H1, H2, H3, P, CIETitle, CIESubtitle, CIEDescription,
  ColorPalette,
  Button, CIEButton, CIEPrimaryButton, CIESecondaryButton,
  Card, ProgramCard, EventCard, NewsCard,
  Container, Section, Grid, Flex, Hero,
  SpacingScale, SpacingGuide
} from '@/components/design-system';
import { Calendar, Users, Award, ArrowRight, ExternalLink } from 'lucide-react';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero background="gradient" className="py-16">
        <Container>
          <div className="text-center space-y-6">
            <CIETitle>CIE Design System</CIETitle>
            <CIESubtitle>A comprehensive design system for the CIE website</CIESubtitle>
            <CIEDescription className="max-w-2xl mx-auto">
              This design system provides consistent typography, colors, spacing, and components
              that align with PES University branding while appealing to students aged 17-22.
            </CIEDescription>
          </div>
        </Container>
      </Hero>

      {/* Typography Section */}
      <Section padding="lg">
        <Container>
          <div className="space-y-8">
            <H2>Typography</H2>
            <div className="space-y-6">
              <div>
                <H3 className="mb-4">Headings</H3>
                <div className="space-y-4">
                  <H1>Heading 1 - Main Page Title</H1>
                  <H2>Heading 2 - Section Title</H2>
                  <H3>Heading 3 - Subsection Title</H3>
                </div>
              </div>
              
              <div>
                <H3 className="mb-4">Body Text</H3>
                <div className="space-y-4">
                  <P>Regular paragraph text for body content and descriptions.</P>
                  <P className="text-lg">Large paragraph text for emphasis.</P>
                  <P className="text-sm text-muted-foreground">Small muted text for captions and metadata.</P>
                </div>
              </div>

              <div>
                <H3 className="mb-4">CIE Specific Typography</H3>
                <div className="space-y-4">
                  <CIETitle>CIE Main Title</CIETitle>
                  <CIESubtitle>CIE Subtitle for sections</CIESubtitle>
                  <CIEDescription>
                    CIE description text with proper styling and spacing for program descriptions.
                  </CIEDescription>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Colors Section */}
      <Section background="muted" padding="lg">
        <Container>
          <div className="space-y-8">
            <H2>Color Palette</H2>
            <ColorPalette />
          </div>
        </Container>
      </Section>

      {/* Buttons Section */}
      <Section padding="lg">
        <Container>
          <div className="space-y-8">
            <H2>Buttons</H2>
            <div className="space-y-6">
              <div>
                <H3 className="mb-4">Standard Buttons</H3>
                <Flex gap="md" className="flex-wrap">
                  <Button>Default Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </Flex>
              </div>

              <div>
                <H3 className="mb-4">CIE Branded Buttons</H3>
                <Flex gap="md" className="flex-wrap">
                  <CIEButton>CIE Button</CIEButton>
                  <CIEPrimaryButton>CIE Primary</CIEPrimaryButton>
                  <CIESecondaryButton>CIE Secondary</CIESecondaryButton>
                  <Button variant="cie-orange">CIE Orange</Button>
                  <Button variant="cie-gold">CIE Gold</Button>
                </Flex>
              </div>

              <div>
                <H3 className="mb-4">Button Sizes</H3>
                <Flex gap="md" className="flex-wrap items-center">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><ArrowRight className="h-4 w-4" /></Button>
                </Flex>
              </div>

              <div>
                <H3 className="mb-4">Buttons with Icons</H3>
                <Flex gap="md" className="flex-wrap">
                  <CIEPrimaryButton>
                    <Users className="mr-2 h-4 w-4" />
                    Join Program
                  </CIEPrimaryButton>
                  <Button variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="cie-orange">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    External Link
                  </Button>
                </Flex>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cards Section */}
      <Section background="muted" padding="lg">
        <Container>
          <div className="space-y-8">
            <H2>Cards</H2>
            <div className="space-y-8">
              <div>
                <H3 className="mb-6">Program Cards</H3>
                <Grid cols={3} gap="lg">
                  <ProgramCard
                    title="Startup Incubation"
                    description="Transform your innovative ideas into successful startups with our comprehensive incubation program."
                    duration="6 months"
                    enrolledStudents={25}
                    category="Entrepreneurship"
                    image="/api/placeholder/300/200"
                  />
                  <ProgramCard
                    title="Industry Mentorship"
                    description="Connect with industry experts and gain valuable insights to accelerate your career growth."
                    duration="3 months"
                    enrolledStudents={50}
                    category="Mentorship"
                    image="/api/placeholder/300/200"
                  />
                  <ProgramCard
                    title="Innovation Challenge"
                    description="Participate in cutting-edge challenges that push the boundaries of technology and innovation."
                    duration="1 month"
                    enrolledStudents={100}
                    category="Competition"
                    image="/api/placeholder/300/200"
                  />
                </Grid>
              </div>

              <div>
                <H3 className="mb-6">Event Cards</H3>
                <Grid cols={2} gap="lg">
                  <EventCard
                    title="Tech Innovation Summit 2025"
                    description="Join industry leaders and innovators for a day of insights, networking, and inspiration."
                    date="2025-03-15"
                    time="09:00 AM"
                    location="PES University Main Campus"
                    category="Summit"
                  />
                  <EventCard
                    title="Startup Pitch Competition"
                    description="Present your startup ideas to a panel of investors and industry experts."
                    date="2025-04-20"
                    time="02:00 PM"
                    location="CIE Auditorium"
                    category="Competition"
                  />
                </Grid>
              </div>

              <div>
                <H3 className="mb-6">News Cards</H3>
                <Grid cols={3} gap="lg">
                  <NewsCard
                    title="CIE Launches New Innovation Lab"
                    excerpt="State-of-the-art facility equipped with latest technology to support student innovation projects."
                    publishedDate="2025-01-15"
                    author="CIE Team"
                    category="Announcement"
                  />
                  <NewsCard
                    title="Student Startup Raises $1M Funding"
                    excerpt="Alumni-founded startup secures significant funding round, showcasing CIE's impact on entrepreneurship."
                    publishedDate="2025-01-10"
                    author="News Team"
                    category="Success Story"
                  />
                  <NewsCard
                    title="Industry Partnership Announcement"
                    excerpt="New collaboration with leading tech companies to provide internship and job opportunities."
                    publishedDate="2025-01-05"
                    author="CIE Team"
                    category="Partnership"
                  />
                </Grid>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Layout Components */}
      <Section padding="lg">
        <Container>
          <div className="space-y-8">
            <H2>Layout Components</H2>
            <div className="space-y-6">
              <div>
                <H3 className="mb-4">Grid Layouts</H3>
                <div className="space-y-4">
                  <P className="text-sm text-muted-foreground">2 Column Grid</P>
                  <Grid cols={2} gap="md">
                    <Card className="p-6 text-center">
                      <div className="bg-primary/10 rounded-lg p-4">
                        <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <P>Grid Item 1</P>
                      </div>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="bg-secondary/10 rounded-lg p-4">
                        <Users className="h-8 w-8 mx-auto mb-2 text-secondary" />
                        <P>Grid Item 2</P>
                      </div>
                    </Card>
                  </Grid>
                </div>

                <div className="space-y-4 mt-6">
                  <P className="text-sm text-muted-foreground">4 Column Grid</P>
                  <Grid cols={4} gap="sm">
                    {[1, 2, 3, 4].map((item) => (
                      <Card key={item} className="p-4 text-center">
                        <Award className="h-6 w-6 mx-auto mb-2 text-cie-orange" />
                        <P className="text-sm">Item {item}</P>
                      </Card>
                    ))}
                  </Grid>
                </div>
              </div>

              <div>
                <H3 className="mb-4">Flex Layouts</H3>
                <Card className="p-6">
                  <Flex justify="between" align="center" className="mb-4">
                    <div>
                      <H3>Flex Header</H3>
                      <P className="text-sm text-muted-foreground">Space between alignment</P>
                    </div>
                    <Button variant="outline">Action</Button>
                  </Flex>
                  <Flex gap="md" className="flex-wrap">
                    <div className="bg-primary/10 rounded-lg p-3 flex-1 min-w-[200px]">
                      <P className="text-sm">Flex Item 1</P>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-3 flex-1 min-w-[200px]">
                      <P className="text-sm">Flex Item 2</P>
                    </div>
                    <div className="bg-cie-orange/10 rounded-lg p-3 flex-1 min-w-[200px]">
                      <P className="text-sm">Flex Item 3</P>
                    </div>
                  </Flex>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Spacing Section */}
      <Section background="muted" padding="lg">
        <Container>
          <div className="space-y-8">
            <H2>Spacing System</H2>
            <div className="space-y-8">
              <SpacingScale />
              <SpacingGuide />
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Section padding="md">
        <Container>
          <div className="text-center">
            <P className="text-muted-foreground">
              This design system ensures consistency across the CIE website while maintaining
              the vibrant, modern aesthetic that appeals to our student community.
            </P>
          </div>
        </Container>
      </Section>
    </div>
  );
}