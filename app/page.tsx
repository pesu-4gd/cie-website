'use client';

import { Button } from '@/components/design-system';
import { ArrowRight, Users, Building2, GraduationCap, Play, Sparkles, Rocket, BookOpen, BarChart3, Zap, X, Award, Globe, Briefcase, FileText, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect } from 'react';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';

// Programs Radial View Component
const ProgramsRadialView = () => {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);

  const programs = [
    { id: 0, name: 'CIE Product Management for the AI Era', borderColor: 'border-[#F15A29]', textColor: 'text-gray-800' },
    { id: 1, name: 'CIE Practical Approach to Deep Learning', borderColor: 'border-[#2B9EB3]', textColor: 'text-gray-800' },
    { id: 2, name: 'CIE EIE I – Getting Started with Entrepreneurship', borderColor: 'border-[#F15A29]', textColor: 'text-white', bgGradient: 'from-[#F15A29] to-[#FFC107]', filled: true },
    { id: 3, name: 'CIE EIE II – Building a Lean Start-Up Company or Project', borderColor: 'border-[#2B9EB3]', textColor: 'text-white', bgGradient: 'from-[#2B9EB3] to-[#3E3C6B]', filled: true },
    { id: 4, name: 'CIE Practical Approach to Machine Learning', borderColor: 'border-[#F15A29]', textColor: 'text-gray-800' },
    { id: 5, name: 'CIE BIOS Firmware Course', borderColor: 'border-[#2B9EB3]', textColor: 'text-gray-800' },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
      {/* Left Side - PROGRAMS Title with Large Circle */}
      <div className="flex-shrink-0 relative">
        <div className="relative">
          {/* Large Orange Circle */}
          <div className="w-64 h-64 bg-white  rounded-full flex items-center justify-center shadow-md">
            <h3 className="text-4xl font-bold text-orange-500 tracking-wider">PROGRAMS</h3>
          </div>
          {/* Light Pink Background Circles */}
          {/* <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-pink-100 rounded-full -z-10 opacity-50" />
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-100 rounded-full -z-10 opacity-30" /> */}
        </div>
      </div>

      {/* Right Side - Program Pills with Semi-Circle Radial Layout */}
      <div className="flex-1 flex flex-col items-center lg:items-start gap-4 w-full max-w-2xl">
        {/* Row 1 */}
        <div className="flex justify-center lg:justify-start w-full">
          <motion.button
            onClick={() => setActiveProgram(0)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className={`bg-white border-2 rounded-full px-6 py-3 transition-all duration-300 cursor-pointer ${
              programs[0].borderColor
            } ${
              activeProgram === 0 
                ? 'shadow-xl scale-105 opacity-100' 
                : activeProgram !== null
                ? 'opacity-40 hover:opacity-70 hover:shadow-lg'
                : 'opacity-100 hover:opacity-90 hover:shadow-lg'
            }`}
          >
            <span className={`text-sm font-medium ${programs[0].textColor}`}>
              {programs[0].name}
            </span>
          </motion.button>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center lg:justify-start w-full">
          <motion.button
            onClick={() => setActiveProgram(1)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`bg-white border-2 rounded-full px-6 py-3 transition-all duration-300 cursor-pointer ${
              programs[1].borderColor
            } ${
              activeProgram === 1 
                ? 'shadow-xl scale-105 opacity-100' 
                : activeProgram !== null
                ? 'opacity-40 hover:opacity-70 hover:shadow-lg'
                : 'opacity-100 hover:opacity-90 hover:shadow-lg'
            }`}
          >
            <span className={`text-sm font-medium ${programs[1].textColor}`}>
              {programs[1].name}
            </span>
          </motion.button>
        </div>

        {/* Row 3 - EIE I */}
        <div className="flex justify-center lg:justify-start w-full">
          <motion.button
            onClick={() => setActiveProgram(2)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`bg-gradient-to-r ${programs[2].bgGradient} rounded-full px-6 py-3 transition-all duration-300 cursor-pointer ${
              activeProgram === 2 
                ? 'shadow-xl scale-105 opacity-100' 
                : activeProgram !== null
                ? 'opacity-40 hover:opacity-70 hover:shadow-lg'
                : 'opacity-100 hover:opacity-90 hover:shadow-lg'
            }`}
          >
            <span className={`text-sm font-semibold ${programs[2].textColor}`}>
              {programs[2].name}
            </span>
          </motion.button>
        </div>
        
        {/* Row 4 - EIE II */}
        <div className="flex justify-center lg:justify-start w-full">
          <motion.button
            onClick={() => setActiveProgram(3)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`bg-gradient-to-r ${programs[3].bgGradient} rounded-full px-6 py-3 transition-all duration-300 cursor-pointer ${
              activeProgram === 3 
                ? 'shadow-xl scale-105 opacity-100' 
                : activeProgram !== null
                ? 'opacity-40 hover:opacity-70 hover:shadow-lg'
                : 'opacity-100 hover:opacity-90 hover:shadow-lg'
            }`}
          >
            <span className={`text-sm font-semibold ${programs[3].textColor}`}>
              {programs[3].name}
            </span>
          </motion.button>
        </div>

        {/* Row 5 */}
        <div className="flex justify-center lg:justify-start w-full">
          <motion.button
            onClick={() => setActiveProgram(4)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`bg-white border-2 rounded-full px-6 py-3 transition-all duration-300 cursor-pointer ${
              programs[4].borderColor
            } ${
              activeProgram === 4 
                ? 'shadow-xl scale-105 opacity-100' 
                : activeProgram !== null
                ? 'opacity-40 hover:opacity-70 hover:shadow-lg'
                : 'opacity-100 hover:opacity-90 hover:shadow-lg'
            }`}
          >
            <span className={`text-sm font-medium ${programs[4].textColor}`}>
              {programs[4].name}
            </span>
          </motion.button>
        </div>

        {/* Row 6 */}
        <div className="flex justify-center lg:justify-start w-full">
          <motion.button
            onClick={() => setActiveProgram(5)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className={`bg-white border-2 rounded-full px-6 py-3 transition-all duration-300 cursor-pointer ${
              programs[5].borderColor
            } ${
              activeProgram === 5 
                ? 'shadow-xl scale-105 opacity-100' 
                : activeProgram !== null
                ? 'opacity-40 hover:opacity-70 hover:shadow-lg'
                : 'opacity-100 hover:opacity-90 hover:shadow-lg'
            }`}
          >
            <span className={`text-sm font-medium ${programs[5].textColor}`}>
              {programs[5].name}
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

// Academic collaborators carousel (infinite scrolling)
const AcademicCarousel = () => {
  const images = [
    '/assets/cic-removebg-preview.png',
    '/assets/d-coe-removebg-preview.png',
    '/assets/gdc-removebg-preview.png',
    '/assets/harvard-removebg-preview.png',
    '/assets/iit-sine-removebg-preview.png',
    '/assets/iitb-removebg-preview.png',
    '/assets/iitm-removebg-preview.png',
    '/assets/ucb-removebg-preview.png',
  ];

  // duplicate the array to create seamless looping
  const slides = [...images, ...images];

  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <ul
          className="flex items-center gap-6 slider will-change-transform"
          aria-label="Academic collaborators carousel"
        >
          {slides.map((src, idx) => (
            <li key={`${src}-${idx}`} className="flex-shrink-0">
              <button
                type="button"
                aria-label={`Open partner ${idx % images.length + 1}`}
                className="p-0 bg-transparent border-0"
              >
                <img
                  src={src}
                  alt={`Partner ${idx % images.length + 1}`}
                  className="h-20 w-auto object-contain rounded-md shadow-sm bg-white p-2"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .slider {
          animation: scrollLinear 24s linear infinite;
        }
        .slider:hover {
          animation-play-state: paused;
        }
        @keyframes scrollLinear {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

// Student Journey Radial Navigation - Semi-circle design matching image 1
// const StudentJourneyRadial = () => {
//   const [activeStep, setActiveStep] = useState<number | null>(null);

//   const steps = [
//     {
//       id: 1,
//       number: '1',
//       title: 'Inspiration and Ideation',
//       description: 'CIE programs help students with best for innovation',
//       color: 'blue'
//     },
//     {
//       id: 2,
//       number: '2',
//       title: 'PESU Center of Excellence',
//       description: 'Centers of Excellence support students with resources and mentorship',
//       color: 'orange'
//     },
//     {
//       id: 3,
//       number: '3',
//       title: 'Interdisciplinary Collaboration',
//       description: 'EIE and other courses encourage EIE and EEE students to refine ideas',
//       color: 'blue'
//     },
//     {
//       id: 4,
//       number: '4',
//       title: 'Funding and Mentorship',
//       description: 'PESU Venture Labs funds students and CIE connects them to investors',
//       color: 'orange'
//     },
//     {
//       id: 5,
//       number: '5',
//       title: 'Launch and Market Entry',
//       description: 'CIE student incubated together with industry and alumni support',
//       color: 'blue'
//     },
//     {
//       id: 6,
//       number: '6',
//       title: 'PESU Venture Labs',
//       description: 'After prototyping, students can get support from PESU Venture Labs',
//       color: 'orange'
//     },
//     {
//       id: 7,
//       number: '7',
//       title: 'Career Launchpad',
//       description: 'Leverage CIE to launch startups or join top businesses',
//       color: 'blue'
//     }
//   ];

//   return (
//     <div className="w-full py-16 relative bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="relative flex flex-col items-center">
//           {/* Cards positioned above semi-circle - Only show when clicked */}
//           <div className="relative w-full h-64 mb-4">
//             {steps.map((step, idx) => {
//               const isActive = activeStep === step.id;
              
//               // Position cards directly above their corresponding segment
//               // Using same degree allocation as segments: 25,25,25,30,25,25,25
//               const segmentDegrees = [25, 25, 25, 30, 25, 25, 25];
              
//               // Calculate cumulative angle to segment center
//               let cumulativeAngle = 0;
//               for (let i = 0; i < idx; i++) {
//                 cumulativeAngle += segmentDegrees[i];
//               }
//               const segmentCenter = 180 - cumulativeAngle - segmentDegrees[idx] / 2;
              
//               // Convert to positioning coordinates
//               const angle = segmentCenter - 90; // Adjust for coordinate system
//               const angleRad = (angle * Math.PI) / 180;
//               const radius = 300; // Distance from center for card placement
              
//               const x = 50 + (radius / 4.5) * Math.sin(angleRad);
//               const y = 55 - (radius / 4.5) * Math.cos(angleRad);
              
//               return (
//                 <motion.div
//                   key={step.id}
//                   initial={{ opacity: 0, scale: 0.3, y: 30 }}
//                   animate={{
//                     opacity: isActive ? 1 : 0,
//                     scale: isActive ? 1 : 0.3,
//                     y: isActive ? 0 : 30
//                   }}
//                   transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
//                   className="absolute pointer-events-none"
//                   style={{
//                     left: `${x}%`,
//                     top: `${y}%`,
//                     transform: 'translate(-50%, -50%)',
//                     zIndex: isActive ? 50 : 0
//                   }}
//                 >
//                   <div className={`p-6 rounded-2xl border-2 bg-white shadow-2xl w-64 ${
//                     step.color === 'blue' ? 'border-[#2B9EB3]' : 'border-[#F15A29]'
//                   }`}>
//                     <div className="text-center">
//                       <div className={`text-4xl font-bold mb-3 ${
//                         step.color === 'blue' ? 'text-[#2B9EB3]' : 'text-[#F15A29]'
//                       }`}>
//                         {step.number}
//                       </div>
//                       <h3 className="font-bold text-lg text-gray-900 mb-3">{step.title}</h3>
//                       <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Semi-circle with segments and CIE logo in center */}
//           <div className="relative">
//             <svg viewBox="0 0 600 340" className="w-full max-w-3xl h-auto">
//               {/* Create 7 semi-circle segments with custom degrees: 25,25,25,30,25,25,25 */}
//               {steps.map((step, idx) => {
//                 // Custom degree allocation for each segment
//                 const segmentDegrees = [25, 25, 25, 30, 25, 25, 25];
                
//                 // Calculate cumulative start angle
//                 let cumulativeAngle = 0;
//                 for (let i = 0; i < idx; i++) {
//                   cumulativeAngle += segmentDegrees[i];
//                 }
                
//                 const segmentAngle = segmentDegrees[idx];
//                 const startAngle = 180 - cumulativeAngle;
//                 const endAngle = startAngle - segmentAngle;
                
//                 const startRad = (startAngle * Math.PI) / 180;
//                 const endRad = (endAngle * Math.PI) / 180;
                
//                 const innerRadius = 150;
//                 const outerRadius = 240;
                
//                 const centerX = 300;
//                 const centerY = 300;
                
//                 const x1 = centerX + innerRadius * Math.cos(startRad);
//                 const y1 = centerY - innerRadius * Math.sin(startRad);
//                 const x2 = centerX + outerRadius * Math.cos(startRad);
//                 const y2 = centerY - outerRadius * Math.sin(startRad);
//                 const x3 = centerX + outerRadius * Math.cos(endRad);
//                 const y3 = centerY - outerRadius * Math.sin(endRad);
//                 const x4 = centerX + innerRadius * Math.cos(endRad);
//                 const y4 = centerY - innerRadius * Math.sin(endRad);
                
//                 // Smooth path with proper arc flags
//                 const pathData = `
//                   M ${x1.toFixed(2)},${y1.toFixed(2)}
//                   L ${x2.toFixed(2)},${y2.toFixed(2)}
//                   A ${outerRadius},${outerRadius} 0 0 0 ${x3.toFixed(2)},${y3.toFixed(2)}
//                   L ${x4.toFixed(2)},${y4.toFixed(2)}
//                   A ${innerRadius},${innerRadius} 0 0 1 ${x1.toFixed(2)},${y1.toFixed(2)}
//                   Z
//                 `;
                
//                 // Calculate position for number label (center of segment)
//                 const labelAngle = startAngle - segmentAngle / 2;
//                 const labelRadius = 195;
//                 const labelX = centerX + labelRadius * Math.cos(labelAngle * Math.PI / 180);
//                 const labelY = centerY - labelRadius * Math.sin(labelAngle * Math.PI / 180);
                
//                 return (
//                   <g key={step.id}>
//                     <path
//                       d={pathData}
//                       fill={step.color === 'blue' ? '#2B9EB3' : '#F15A29'}
//                       className={`cursor-pointer transition-all duration-300 ${
//                         activeStep === step.id ? 'opacity-100 brightness-110' : 'opacity-95 hover:opacity-100 hover:brightness-105'
//                       }`}
//                       onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
//                       strokeWidth="0"
//                       shapeRendering="geometricPrecision"
//                     />
//                     {/* Number labels on segments */}
//                     <text
//                       x={labelX}
//                       y={labelY}
//                       fill="white"
//                       fontSize="22"
//                       fontWeight="bold"
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       className="cursor-pointer select-none"
//                       onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
//                     >
//                       {step.number}
//                     </text>
//                   </g>
//                 );
//               })}
              
//               {/* CIE Logo/Image in center - perfectly centered */}
//               <image
//                 href="/assets/CIE Logo Short.svg"
//                 x="225"
//                 y="215"
//                 width="150"
//                 height="150"
//                 className="pointer-events-none"
//               />
//             </svg>

//             {/* "OUR STUDENT JOURNEY" text below the semi-circle - closer to arc */}
//             <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: '85%' }}>
//               <div className="text-sm font-bold text-gray-600 tracking-wide">OUR STUDENT</div>
//               <div className="text-base font-bold text-[#F15A29] tracking-wide">JOURNEY</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  // Show the hero video player when the user clicks "WATCH STORY"
  const [showVideo, setShowVideo] = useState(false);
  const VIDEO_ID = 'L4nvEYLsST4';

  // Close video on Escape key for accessibility
  useEffect(() => {
    if (!showVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowVideo(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showVideo]);

  // Notification widget removed from page (was previously auto-mounted after a delay)

  return (
    <div className="min-h-screen bg-white">
      {/* Interactive Hexagonal Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B]">
        {/* Interactive Hexagonal Background */}
        <InteractiveHexagonBackground
          primaryColor="#3E3C6B"
          accentColor="#2B9EB3"
          hexagonSize={80}
          className="absolute inset-0 z-0"
        />

        {/* Decorative Gradient Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#2B9EB3]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse pointer-events-none" />
  <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#F15A29]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Empowering Innovation Since 2018
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="block">
                <span className="text-[#FFFFFF]">Ideate</span> 
                <span className="text-white"> • </span> 
                <span className="text-[#2B9EB3]">Innovate</span> 
                <span className="text-white"> • </span> 
                <span className="text-[#F15A29]">Inspire</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed">
              Transform ideas into reality through entrepreneurship, technology, and meaningful impact at PES University.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Button
                onClick={() => window.location.href = '/students'}
                variant="cie"
                size="lg"
                className="group bg-gradient-to-r from-[#F15A29] to-[#FFC107] text-white"
              >
                EXPLORE NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => setShowVideo(true)}
                variant="cie"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                WATCH STORY
              </Button>
            </div>
            
            {/* Quick Stats - Compact Grid */}
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">2159+</div>
                <div className="text-xs text-gray-300">Students</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-300">Startups</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">₹2Cr+</div>
                <div className="text-xs text-gray-300">Funding</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-xs text-gray-300">Partners</div>
              </div>
            </div> */}
          </motion.div>
        </div>
        {/* Video overlay: when showVideo is true, render the YouTube iframe covering the hero section */}
        {showVideo && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/80">
            <div className="relative w-full h-full">
              {/* Close button */}
              <button
                aria-label="Close video"
                onClick={() => setShowVideo(false)}
                className="absolute right-4 top-4 z-40 rounded-full bg-white/20 hover:bg-white/30 p-2 text-white backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                title="CIE - Watch Story"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}
      </section>

  {/* NotificationListDemo removed from page (component still present in src/components/notifications) */}

      {/* Navigation Cards - Compact Design */}
      <section className="py-8 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ready to <span className="bg-gradient-to-r from-[#2B9EB3] to-[#3E3C6B] bg-clip-text text-transparent">Change the World?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a community of innovators building the future through technology and impact.
            </p>
          </motion.div>

          {/* Compact Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Students Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = '/students'}
            >
              <div className="bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-56 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2B9EB3] to-[#3E3C6B] rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Students</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Explore programs, events, and opportunities designed to help student innovators transform ideas into reality.
                </p>
                <button className="flex items-center text-[#2B9EB3] hover:text-[#3E3C6B] font-semibold">
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Industry Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = '/industry'}
            >
              <div className="bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-56 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F15A29] to-[#FFC107] rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Industry</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Partner with us for collaborations, job postings, and innovation opportunities that drive meaningful change.
                </p>
                <button className="flex items-center text-[#F15A29] hover:text-[#FFC107] font-semibold">
                  <span>View Opportunities</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Alumni Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = '/alumni/welcome'}
            >
              <div className="bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-56 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Alumni</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Stay connected with our thriving network, give back to the community, and access exclusive resources.
                </p>
                <button className="flex items-center text-yellow-400 hover:text-amber-600 font-semibold">
                  <span>Connect Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#2B9EB3]/30 rounded-full mix-blend-multiply filter blur-2xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#F15A29]/30 rounded-full mix-blend-multiply filter blur-2xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Discover <span className="bg-gradient-to-r from-[#2B9EB3] to-[#3E3C6B] bg-clip-text text-transparent">CIE</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Explore our impact, programs, and success stories through interactive content tabs.
            </p>
            {/* <div className="flex items-center justify-center gap-2 text-sm text-[#2B9EB3] font-medium">
              <ArrowRight className="w-4 h-4 animate-bounce" />
              <span>Click tabs below to explore different sections</span>
              <ArrowRight className="w-4 h-4 animate-bounce" style={{animationDelay: '0.5s'}} />
            </div> */}
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <TabsList className="inline-flex h-11 items-center justify-center rounded-2xl bg-white p-1 shadow-lg border border-gray-200">
                <TabsTrigger 
                  value="overview" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#2B9EB3] data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-blue-50 hover:text-[#2B9EB3]"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Overview</span>
                  <span className="sm:hidden">Stats</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="programs" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-green-50 hover:text-green-700"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Programs</span>
                  <span className="sm:hidden">Learn</span>
                </TabsTrigger>
                {/* Ignite tab removed per request */}
                <TabsTrigger 
                  value="partners" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#3E3C6B] data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-purple-50 hover:text-[#3E3C6B]"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Academic collaborators</span>
                    <span className="sm:hidden">Collaborators</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="updates" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#FFC107] data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-yellow-50 hover:text-[#FFC107]"
                >
                  <Zap className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Success stories</span>
                    <span className="sm:hidden">Stories</span>
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Students Graduated */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  className="bg-white border-2 border-[#2B9EB3] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <GraduationCap className="w-12 h-12 text-[#2B9EB3] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">6715</div>
                    <div className="text-sm text-gray-700 font-medium">Students Graduated</div>
                  </div>
                </motion.div>

                {/* Cohorts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white border-2 border-[#F15A29] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Users className="w-12 h-12 text-[#F15A29] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">61</div>
                    <div className="text-sm text-gray-700 font-medium">Cohorts</div>
                  </div>
                </motion.div>

                {/* Industry/Startup Placements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white border-2 border-[#2B9EB3] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Building2 className="w-12 h-12 text-[#2B9EB3] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">32</div>
                    <div className="text-sm text-gray-700 font-medium">Industry/Startup Placements</div>
                  </div>
                </motion.div>

                {/* International Exchange Program */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white border-2 border-[#F15A29] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Globe className="w-12 h-12 text-[#F15A29] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">2</div>
                    <div className="text-sm text-gray-700 font-medium">International Exchange Program</div>
                  </div>
                </motion.div>

                {/* Industry Grants/Awards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white border-2 border-[#2B9EB3] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Award className="w-12 h-12 text-[#2B9EB3] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">₹13.9M</div>
                    <div className="text-sm text-gray-700 font-medium">Industry Grants/Awards</div>
                  </div>
                </motion.div>

                {/* Students Participating in Industry Programs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white border-2 border-[#F15A29] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Users className="w-12 h-12 text-[#F15A29] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">1900+</div>
                    <div className="text-sm text-gray-700 font-medium">Students Participating in Industry Programs</div>
                  </div>
                </motion.div>

                {/* Industry/Startup Internships */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white border-2 border-[#2B9EB3] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Briefcase className="w-12 h-12 text-[#2B9EB3] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">98</div>
                    <div className="text-sm text-gray-700 font-medium">Industry/Startup Internships</div>
                  </div>
                </motion.div>

                {/* International Publications & Conference Speakerships */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-white border-2 border-[#F15A29] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <FileText className="w-12 h-12 text-[#F15A29] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">12</div>
                    <div className="text-sm text-gray-700 font-medium">International Publications & Conference Speakerships</div>
                  </div>
                </motion.div>

                {/* Harvard Manage Mentor */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-white border-2 border-[#2B9EB3] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Award className="w-12 h-12 text-[#2B9EB3] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">78</div>
                    <div className="text-sm text-gray-700 font-medium">Harvard Manage Mentor</div>
                  </div>
                </motion.div>

                {/* Industry Programs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-white border-2 border-[#F15A29] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <BookOpen className="w-12 h-12 text-[#F15A29] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">11</div>
                    <div className="text-sm text-gray-700 font-medium">Industry Programs</div>
                  </div>
                </motion.div>

                {/* Courses */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="bg-white border-2 border-[#2B9EB3] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <BookOpen className="w-12 h-12 text-[#2B9EB3] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">8</div>
                    <div className="text-sm text-gray-700 font-medium">Courses</div>
                  </div>
                </motion.div>

                {/* Capstone Projects with Industry Partner (CPIP) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="bg-white border-2 border-[#F15A29] rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Lightbulb className="w-12 h-12 text-[#F15A29] mb-3" />
                    <div className="text-3xl font-bold text-[#3E3C6B] mb-2">17</div>
                    <div className="text-sm text-gray-700 font-medium">Capstone Projects with Industry Partner (CPIP)</div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            {/* Programs Tab */}
            <TabsContent value="programs" className="space-y-6">
              <ProgramsRadialView />
            </TabsContent>

            {/* Ignite tab removed */}

            {/* Academic collaborators Tab (replaces Partners) */}
            <TabsContent value="partners" className="space-y-4">
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#2B9EB3] mb-1">100+</div>
                  <div className="text-sm text-gray-700">Academic collaborators</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">₹6.5M+</div>
                  <div className="text-sm text-gray-700">Grants</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#3E3C6B] mb-1">50+</div>
                  <div className="text-sm text-gray-700">Internships</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#F15A29] mb-1">20+</div>
                  <div className="text-sm text-gray-700">Active</div>
                </div>
              </div> */}

              {/* Infinite carousel of partner logos */}
              <div className="w-full">
                <AcademicCarousel />
              </div>
            </TabsContent>

            {/* Success stories Tab (replaces Updates) */}
            <TabsContent value="updates" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <article className="bg-white p-5 rounded-2xl shadow-sm">
                  <img src="/assets/pocket-coach.jpg" alt="PocketCoach success" className="w-36 h-36 object-cover rounded-md mb-3" />
                  <h4 className="text-lg font-bold text-gray-900 mb-1">PocketCoach wins Karnataka Elevate</h4>
                  <p className="text-sm text-gray-600">Alumni startup PocketCoach won Karnataka Elevate 2024 and received a ₹30 Lakh grant to scale their coaching platform.</p>
                  <div className="mt-3 text-sm text-gray-500">March 02, 2024</div>
                </article>

                <article className="bg-white p-5 rounded-2xl shadow-sm">
                  <img src="/assets/epicure-robotics.jpg" alt="Epicure Robotics" className="w-full h-36 object-cover rounded-md mb-3" />
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Epicure Robotics raises funding</h4>
                  <p className="text-sm text-gray-600">Epicure Robotics secured backing from 100x.VC for their automated food kiosk solutions, accelerating product builds.</p>
                  <div className="mt-3 text-sm text-gray-500">October 12, 2023</div>
                </article>

                <article className="bg-white p-5 rounded-2xl shadow-sm">
                  <img src="/assets/aalap-ai.jpg" alt="Aalap AI" className="w-90 h-36 object-cover rounded-md mb-3" />
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Aalap AI launches music-first product</h4>
                  <p className="text-sm text-gray-600">Aalap AI shipped a novel text-to-Carnatic music experience and is gaining traction with 850+ users.</p>
                  <div className="mt-3 text-sm text-gray-500">July 08, 2023</div>
                </article>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-br from-[#2B9EB3] via-[#3E3C6B] to-[#F15A29] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Innovation Journey?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
              Join thousands of students, entrepreneurs, and industry leaders shaping the future through CIE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => window.location.href = '/students'}
                className="bg-white text-[#3E3C6B] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
              <Button 
                onClick={() => window.location.href = '/students/programs'}
                className="border-2 border-white text-white hover:bg-white hover:text-[#3E3C6B] px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
              >
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
