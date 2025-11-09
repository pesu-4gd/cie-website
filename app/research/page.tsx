'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';
import {
  Search,
  ExternalLink,
  User,
  Star
} from 'lucide-react';

const researchAreas = [
  {
    id: 1,
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Advanced AI research in deep learning, computer vision, and natural language processing',
    projects: 15,
    publications: 45,
    faculty: 8,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 2,
    title: 'Blockchain & Distributed Systems',
    description: 'Research in blockchain technology, cryptocurrency, and decentralized applications',
    projects: 12,
    publications: 28,
    faculty: 6,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 3,
    title: 'IoT & Embedded Systems',
    description: 'Internet of Things, sensor networks, and embedded system design',
    projects: 18,
    publications: 32,
    faculty: 7,
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 4,
    title: 'Cybersecurity & Privacy',
    description: 'Information security, cryptography, and privacy-preserving technologies',
    projects: 10,
    publications: 22,
    faculty: 5,
    color: 'bg-red-100 text-red-800'
  },
  {
    id: 5,
    title: 'Data Science & Analytics',
    description: 'Big data processing, predictive analytics, and business intelligence',
    projects: 14,
    publications: 38,
    faculty: 9,
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 6,
    title: 'Sustainable Technology',
    description: 'Green computing, renewable energy systems, and environmental monitoring',
    projects: 8,
    publications: 18,
    faculty: 4,
    color: 'bg-emerald-100 text-emerald-800'
  }
];

const publications = [
  {
    id: 1,
    title: 'Efficient Inference Method for Semantic Segmentation at the Edge for ADAS',
    authors: ['CIE Research Team'],
    journal: '2025 8th International Conference on Communication Engineering and Technology (ICCET)',
    year: 2025,
    citations: 0,
    type: 'Conference',
    area: 'AI & ML',
    doi: '10.1109/ICCET.2025',
    url: 'https://ieeexplore.ieee.org/document/11082608',
    abstract: 'Semantic segmentation is the task of classifying each pixel in the image based on a predefined set of classes. It is a crucial part of an autonomous vehicle to analyze its surroundings and ensure efficient and safe navigation. In these type of applications having low latency and accurate performance is crucial but also challenging since these tasks have high computational complexity. Keeping in mind the resource constraints present in autonomous vehicles, in this study we implement a state-of-the-art segmentation model and evaluate its performance after applying various methods of quantization and pruning to help combat these issues while maintaining high speed and accuracy. We present a comparison of an unoptimized segmentation model along with the different configurations of the optimized model, highlighting the constant accuracy (miou), while providing a 1.61x boost in FPS and a 50% decrease in model size.'
  },
  {
    id: 2,
    title: 'SURF: Sequential Undersampling-Refinement Framework for Two-Stage Anomaly Detection',
    authors: ['CIE Research Team'],
    journal: '2025 13th International Symposium on Digital Forensics and Security (ISDFS)',
    year: 2025,
    citations: 0,
    type: 'Conference',
    area: 'AI & ML',
    doi: '10.1109/ISDFS.2025',
    url: 'https://ieeexplore.ieee.org/document/11011970',
    abstract: 'Machine learning serves as an important instrument in financial fraud detection but extreme class imbalance in credit card datasets proves to be a significant obstacle for its effectiveness. Our framework - SURF incorporates two sequential steps where ROA-GAN performs anomaly-based undersampling at its first stage followed by a 1D CNN which carries out fraud classification. Using unsupervised learning SURF efficiently selects critical fraud patterns eliminating the need for synthetic oversampling. This research investigates under-sampling effects on class separation by utilizing PCA and UMAP and benchmarks against Random Under-sampling and NearMiss.'
  },
  {
    id: 3,
    title: 'Smart Charging Module for Controlled Charging of Mobile Devices',
    authors: ['CIE Research Team'],
    journal: '2024 IEEE Symposium on Industrial Electronics & Applications (ISIEA)',
    year: 2024,
    citations: 0,
    type: 'Conference',
    area: 'IoT',
    doi: '10.1109/ISIEA.2024',
    url: 'https://ieeexplore.ieee.org/document/10607290',
    abstract: 'The existing USB BC1.2 Protocol in contemporary electronic devices relying on USB charging for Li-ion batteries poses a significant challenge today. The dependency on charging for data transfer, dictated by the protocol, results in continuous charging during extended data transfers. This constant charging contributes to accelerated battery wear when there is a requirement for continuous data transfer. This study proposes a charge-controlling module, providing stabilized power input, enabling on-request data access, and actively managing battery health to mitigate degradation. The designed module further employs a battery-capacity-centric algorithm, accommodating diverse device specifications to effectively address economic, safety, and operational concerns associated with continuous charging.'
  },
  {
    id: 4,
    title: 'Early Prediction of Remaining Useful Life for Li-ion Batteries Using Transformer Model with Dual Auto-Encoder and Ensemble Techniques',
    authors: ['CIE Research Team'],
    journal: '2024 IEEE 9th International Conference for Convergence in Technology (I2CT)',
    year: 2024,
    citations: 0,
    type: 'Conference',
    area: 'AI & ML',
    doi: '10.1109/I2CT.2024',
    url: 'https://ieeexplore.ieee.org/document/10607290',
    abstract: 'The accurate early prediction of the Remaining Useful Life (RUL) of lithium-ion batteries plays an important role for battery health management and predictive maintenance. The insights derived from early RUL prediction can be harnessed to enhance battery lifespan and also for the early detection of potential battery failures, which is particularly critical in the context of the widespread use of lithium-ion batteries in various applications, such as electric vehicles, renewable energy storage, and portable electronics. To address this challenge, we introduce an novel neural network model, the Dual Auto-Encoder Transformer, combined with ensemble techniques for early RUL prediction. Our approach demonstrates a significant improvement in early prediction of the RUL with a Mean Absolute Error (MAE) reduced to 0.0372 and Root Mean Square Error (RMSE) to 0.0451.'
  },
  {
    id: 5,
    title: 'Addressing Online-Learning Challenges Through Smartphone-based Gamified Learning Platform',
    authors: ['CIE Research Team'],
    journal: 'Springer (Chapter in Book "Learning in the Age of Digital and Green Transition")',
    year: 2022,
    citations: 0,
    type: 'Book Chapter',
    area: 'Education Technology',
    doi: '10.1007/springer.2022',
    url: 'https://link.springer.com',
    abstract: 'Remote learning has been in the shadows of mainstream higher education institutions (HEI), with classroom / physical presence taking center stage. The Covid-19 pandemic disrupted the prevalent modes of education and pushed remote learning to the forefront. This project attempts to address some of these critical challenges by building a smartphone application platform for remote learning, emphasizing personalized and gamified learning. The gamified smartphone application with Design Thinking as the first learning module was developed and tested for functionality and usability. This project has received encouraging user feedback and provides a platform for developing and testing more engaging methods in the future for personalized remote learning, using artificial intelligence (AI) and machine learning (ML).'
  },
  {
    id: 6,
    title: 'India Industry-University Collaboration - A Novel Approach Combining Technology, Innovation, and Entrepreneurship',
    authors: ['CIE Research Team'],
    journal: '2021 IEEE Global Engineering Education Conference (EDUCON)',
    year: 2021,
    citations: 0,
    type: 'Conference',
    area: 'Education',
    doi: '10.1109/EDUCON.2021',
    url: 'https://ieeexplore.ieee.org/document/9454090',
    abstract: 'Research in fast-evolving technologies like AI & ML requires the collaborative effort of various stakeholders including industries and universities. This paper summarizes the IUC effort undertaken by Intel Technology India Ltd and the Center for Innovation and Entrepreneurship at PES University to create mutually rewarding outcomes for both partners and describes a new model encompassing technology, innovation, and entrepreneurship in addition to the traditional elements of IUC. We present the IUC considerations and processes adopted to deal with the challenges and share the outcomes and impact at the end of two years of engagement.'
  },
  {
    id: 7,
    title: 'Ambient Parametric Monitoring of Farms Using Embedded IoT & LoRa',
    authors: ['CIE Research Team'],
    journal: '2019 IEEE Bombay Section Signature Conference (IBSSC)',
    year: 2020,
    citations: 0,
    type: 'Conference',
    area: 'IoT',
    doi: '10.1109/IBSSC.2019',
    url: 'https://ieeexplore.ieee.org/document/8973084',
    abstract: 'This paper presents the development of a cost effective, self-sustainable and solar rechargeable smart farming product based on embedded IoT and providing end to end solution using the cutting edge LoRa technology. It portrays the innovative methods developed to monitor ambient parameters using the LoRa LPWAN. The product leverages the capabilities of the Arduino Mini MCU capitalizing the low power and ultra-low power optimization techniques to enhance self-sustainability of the device. These real time ambient data & parametric trends can be monitored over the cloud at user\'s convenience on an android application.'
  },
  {
    id: 8,
    title: 'Teaching Effectuation – Experiments & Experiences at Center for Innovation & Entrepreneurship (CIE)',
    authors: ['CIE Research Team'],
    journal: '10th Effectuation Conference (Berlin, 2019)',
    year: 2019,
    citations: 0,
    type: 'Conference',
    area: 'Education',
    doi: 'N/A',
    url: '',
    abstract: 'This paper describes the experience of teaching effectuation as part of an entrepreneurship course for undergraduate technology students offered by the Center for Innovation & Entrepreneurship (CIE) at PES University, India. The experiences are from having taught the course, first offered in Aug of 2018 and followed by Jan 2019 for a combined student strength of 224 across two semesters.'
  },
  {
    id: 9,
    title: 'Global Mindset in a Comparative Perspective: The Case of BRIC, EU, and Breakout Nations',
    authors: ['CIE Research Team'],
    journal: 'Academy of International Business: Global Business and Digital Economy, Minneapolis USA',
    year: 2018,
    citations: 0,
    type: 'Conference',
    area: 'Business',
    doi: 'N/A',
    url: 'https://documents.aib.msu.edu/events/2018/AIB2018_Program.pdf',
    abstract: 'Research presentation at the Academy of International Business conference examining global mindset across BRIC nations, European Union, and emerging breakout economies in the context of digital transformation and global business dynamics.'
  }
];

const facultyMembers = [
  {
    id: 1,
    name: 'Prof Sathya Prasad',
    designation: 'Director, CIE (PESU)',
    specialization: 'Product Management, Technology Innovation',
    experience: '30+ years',
    publications: 0,
    hIndex: 0,
    email: 'sathya.prasad@pes.edu',
    linkedin: 'https://www.linkedin.com/in/sathya-prasad',
    image: '/assets/sathya-prasad.png',
    researchInterests: ['Innovation & Entrepreneurship', 'Product Management', 'Lean Startup'],
    summary: '30+ years including ~20 years at Intel in Product Management, Tech Innovation and R&D. Founding President, SEMI India; launched SOLARCON India; led product management for Intel\'s first server SoC. Executive Management (MIT Sloan), MS (VLSI) — Arizona State University.'
  },
  {
    id: 2,
    name: 'Raghavendra Deshmukh',
    designation: 'Industry Mentor, CIE (PESU)',
    specialization: 'Software Product Engineering, Product Management',
    experience: '30 years',
    publications: 0,
    hIndex: 0,
    email: 'raghavendradeshmukh@pes.edu',
    linkedin: 'https://www.linkedin.com/in/raghavendradeshmukh',
    image: '/assets/raghavendra-deshmukh.png',
    researchInterests: ['Software Engineering', 'Blockchain', 'GenAI', 'Cloud Computing'],
    summary: '~30 years across Software Product Engineering, Product Management, Team Building, and Engineering Leadership at SAP, Walmart, Google, Wipro and Booking.com. Expertise in On-Prem and Cloud solutions, Supply Chain Logistics, Blockchain, GenAI (LLMs, RAG), and Data Analytics.'
  },
  {
    id: 3,
    name: 'Prasanna S Chandran',
    designation: 'Industry Mentor, CIE (PESU)',
    specialization: 'Data Modernization, Analytics Solutions',
    experience: '30+ years',
    publications: 0,
    hIndex: 0,
    email: 'prasannachandran@pes.edu',
    linkedin: 'https://www.linkedin.com/in/prasanna-chandran-4509a16/',
    image: '/assets/prasanna-chandran.png',
    researchInterests: ['GenAI', 'Computer Vision', 'Data Modeling', 'Analytics'],
    summary: '30+ years architecting data modernization and analytics solutions. Leadership across Wipro, ICICI Infotech, NTT DATA and Greywiz. Expertise in GenAI, Computer Vision, Data Modeling, and software engineering. Mentor to early-career professionals and practitioner of scalable analytics platforms.'
  }
];

const ongoingProjects = [
  {
    id: 1,
    title: 'Smart Traffic Management System using AI',
    pi: 'Dr. Priya Sharma',
    funding: '₹25 Lakhs',
    duration: '2023-2025',
    sponsor: 'Department of Science & Technology',
    status: 'Ongoing',
    progress: 65,
    description: 'Development of AI-powered traffic management system for Bangalore city'
  },
  {
    id: 2,
    title: 'Blockchain for Healthcare Data Security',
    pi: 'Dr. Vikram Singh',
    funding: '₹18 Lakhs',
    duration: '2024-2026',
    sponsor: 'ICMR',
    status: 'Ongoing',
    progress: 30,
    description: 'Secure healthcare data sharing using blockchain technology'
  },
  {
    id: 3,
    title: 'Energy-Efficient IoT for Agriculture',
    pi: 'Dr. Suresh Reddy',
    funding: '₹32 Lakhs',
    duration: '2023-2025',
    sponsor: 'ICAR',
    status: 'Ongoing',
    progress: 80,
    description: 'Smart agriculture monitoring using low-power IoT sensors'
  }
];

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesArea = selectedArea === 'all' || pub.area.toLowerCase().includes(selectedArea.toLowerCase());
    const matchesType = selectedType === 'all' || pub.type.toLowerCase() === selectedType.toLowerCase();
    return matchesSearch && matchesArea && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section (Inside CIE style) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#3E3C6B] text-white">
        <InteractiveHexagonBackground
          primaryColor={SECTION_COLORS.insideCie.hero.background}
          accentColor="#F43F5E"
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Research & Publications</h1>
            <p className="text-xl mb-8 text-white/90">
              Advancing knowledge through cutting-edge research in emerging technologies
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-white/80">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">75+</div>
                <div className="text-white/80">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">40+</div>
                <div className="text-white/80">Faculty Researchers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">₹5Cr+</div>
                <div className="text-white/80">Research Funding</div>
              </div>
            </div> */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">9+</div>
                <div className="text-xs text-gray-300">Publications</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">75+</div>
                <div className="text-xs text-gray-300">Active Projects</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">40+</div>
                <div className="text-xs text-gray-300">Researchers</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">₹5Cr+</div>
                <div className="text-xs text-gray-300">Research Funding</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="areas" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="areas">Research Areas</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {/* Research Areas Tab */}
          <TabsContent value="areas" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Areas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our research spans multiple domains of technology and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={area.color}>{area.title.split(' ')[0]}</Badge>
                      </div>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="font-semibold text-blue-600">{area.projects}</div>
                          <div className="text-xs text-gray-500">Projects</div>
                        </div>
                        <div>
                          <div className="font-semibold text-green-600">{area.publications}</div>
                          <div className="text-xs text-gray-500">Publications</div>
                        </div>
                        <div>
                          <div className="font-semibold text-purple-600">{area.faculty}</div>
                          <div className="text-xs text-gray-500">Faculty</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Publications Tab */}
          <TabsContent value="publications" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Publications</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our latest research publications and academic contributions
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search publications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                aria-label="Filter publications by area"
                title="Filter publications by area"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="all">All Areas</option>
                <option value="ai">AI & ML</option>
                <option value="iot">IoT</option>
                <option value="education">Education</option>
                <option value="business">Business</option>
              </select>
              <select
                aria-label="Filter publications by type"
                title="Filter publications by type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="all">All Types</option>
                <option value="conference">Conference</option>
                <option value="book chapter">Book Chapter</option>
              </select>
            </div>

            {/* Publications List */}
            <div className="space-y-6">
              {filteredPublications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{pub.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline">{pub.area}</Badge>
                            <Badge variant="outline">{pub.type}</Badge>
                            <Badge variant="outline">{pub.year}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            Authors: {pub.authors.join(', ')}
                          </p>
                          <p className="text-sm text-gray-600 mb-2">
                            Published in: <span className="font-medium">{pub.journal}</span>
                          </p>
                          <p className="text-sm text-gray-500">{pub.abstract}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                            <Star className="h-4 w-4" />
                            {pub.citations} citations
                          </div>
                          {pub.url && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => globalThis.open(pub.url, '_blank')}
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Faculty Tab */}
          <TabsContent value="faculty" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Faculty</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet our distinguished faculty members leading cutting-edge research
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyMembers.map((faculty, index) => (
                <motion.div
                  key={faculty.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                        {faculty.image ? (
                          <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <User className="h-12 w-12 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-lg">{faculty.name}</CardTitle>
                      <CardDescription>{faculty.designation}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-gray-700">Specialization:</p>
                          <p className="text-sm text-gray-600">{faculty.specialization}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Experience:</p>
                          <p className="text-sm text-gray-600">{faculty.experience}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Research Interests:</p>
                          <div className="flex flex-wrap gap-1">
                            {faculty.researchInterests.map((interest) => (
                              <Badge key={interest} variant="secondary" className="text-xs">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {faculty.summary && (
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">About:</p>
                            <p className="text-xs text-gray-600 line-clamp-3">{faculty.summary}</p>
                          </div>
                        )}
                        {faculty.linkedin && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="w-full"
                            onClick={() => globalThis.open(faculty.linkedin, '_blank')}
                          >
                            LinkedIn Profile
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ongoing Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Current research projects funded by government and industry partners
              </p>
            </div>

            <div className="space-y-6">
              {ongoingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                          <CardDescription className="mb-3">{project.description}</CardDescription>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-gray-700">Principal Investigator:</p>
                              <p className="text-gray-600">{project.pi}</p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Funding:</p>
                              <p className="text-gray-600">{project.funding}</p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Duration:</p>
                              <p className="text-gray-600">{project.duration}</p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Sponsor:</p>
                              <p className="text-gray-600">{project.sponsor}</p>
                            </div>
                          </div>
                        </div>
                        <Badge className="ml-4">{project.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      {/* <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Collaborate with Us</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in research collaboration or funding opportunities? Get in touch with our research team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <FileText className="h-5 w-5 mr-2" />
              Research Proposals
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Building className="h-5 w-5 mr-2" />
              Industry Partnerships
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}