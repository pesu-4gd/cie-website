# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the **CIE (Center for Innovation and Entrepreneurship) Website** for PES University - a modern, responsive Next.js application built with TypeScript, Tailwind CSS, and shadcn/ui components. The site serves students, industry partners, and alumni with information about programs, events, jobs, and resources.

## Development Commands

### Primary Development
```bash
# Start development server with Turbopack (recommended)
npm run dev

# Build for production
npm run build

# Build with Turbopack (faster development builds)
npm run build-turbo

# Start production server
npm start

# Lint code
npm run lint
```

### Testing and Quality
```bash
# Run type checking
npx tsc --noEmit

# Fix linting issues automatically
npm run lint -- --fix

# Format code with Prettier
npx prettier --write .
```

### Deployment Scripts
```bash
# Build production deployment package
./build-production.sh

# Deploy to EC2 (requires server setup)
./deploy-app.sh

# Quick deployment script
./quick-deploy.sh
```

### shadcn/ui Component Management
```bash
# Add new shadcn/ui components
npx shadcn@latest add [component-name]

# Add specific components used in project
npx shadcn@latest add separator collapsible
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15+ with App Router and Turbopack
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with custom PES University brand colors
- **UI Components**: shadcn/ui (New York style) with Lucide React icons
- **Animations**: Framer Motion for micro-interactions
- **Authentication**: Custom JWT-based auth with bcryptjs
- **Database**: File-based JSON storage (development) with Prisma adapter ready

### Directory Structure
```
├── app/                    # Next.js App Router pages and layouts
│   ├── about/             # About section pages
│   ├── admin/             # Admin panel with authentication
│   ├── alumni/            # Alumni section and directory
│   ├── api/               # API routes (auth, announcements)
│   ├── careers/           # Career opportunities
│   ├── industry/          # Industry collaboration pages
│   ├── students/          # Student resources and programs
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Homepage with hero and sections
├── components/            # Reusable React components
│   ├── layout/           # Header, Footer, Navigation
│   ├── ui/               # shadcn/ui components
│   └── design-system/    # Custom component demos
├── lib/                  # Utility functions and logic
│   ├── auth/            # Authentication system
│   ├── database/        # File-based data operations
│   ├── hooks/           # Custom React hooks
│   └── utils.ts         # Utility functions (cn helper)
├── data/                # JSON data files (temporary storage)
├── public/              # Static assets and images
└── config/              # Configuration files
```

### Key Architectural Patterns

**Authentication System**: 
- JWT-based authentication with role-based access (admin/moderator)
- Custom auth hooks and middleware
- File-based user storage with bcrypt password hashing

**Data Layer**:
- File-based JSON storage for development
- CRUD operations abstracted in `lib/database/index.ts`
- Ready for migration to Prisma/database backend

**Component Architecture**:
- shadcn/ui for base components with PES branding
- Compound component patterns for complex UI
- Consistent spacing and color tokens via Tailwind config

**Brand System**:
- PES University colors: Navy Blue (#1e3a8a) and Orange (#f97316)
- Custom Tailwind theme with semantic color scales
- Typography using Inter font family

## Development Patterns

### Adding New Pages
1. Create page in appropriate `app/` subdirectory
2. Use consistent metadata export pattern
3. Implement responsive design with mobile-first approach
4. Include proper heading hierarchy and landmarks

### Working with Components
- Import from `@/components/ui` for shadcn components
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Follow PES brand guidelines in `tailwind.config.ts`
- Implement proper TypeScript interfaces

### Data Handling
- JSON files in `/data` directory for temporary storage
- Use CRUD functions from `lib/database/index.ts`
- Validate data with TypeScript interfaces
- Handle loading states and error boundaries

### Styling Guidelines
- Use PES brand colors: `pes-navy`, `pes-orange`, etc.
- Implement responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Use semantic spacing from Tailwind config
- Apply consistent shadow and animation utilities

## Environment Setup

### Required Environment Variables
```bash
# Authentication (in .env.local for development)
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Database (when migrating from JSON)
DATABASE_URL="your-database-connection-string"

# Next.js Environment
NODE_ENV=development
```

### Production Deployment
- Uses PM2 for process management (see `ecosystem.config.js`)
- Nginx reverse proxy configuration included
- Builds create standalone output for Docker/server deployment
- Security headers configured in `next.config.ts`

### Default Credentials (Development Only)
- Admin: username `admin`, password `admin123`
- Moderator: username `moderator`, password `moderator123`

## Common Workflows

### Adding New UI Components
```bash
# Add shadcn component
npx shadcn@latest add [component-name]

# Create custom component
# 1. Add to components/ui/ or appropriate subdirectory  
# 2. Export from components/ui/index.ts if needed
# 3. Document in design-system demo page
```

### Implementing New Features
1. Design component structure and data requirements
2. Add TypeScript interfaces in appropriate files
3. Implement CRUD operations if data persistence needed
4. Create responsive UI components following brand guidelines
5. Add proper error handling and loading states
6. Test across device sizes and browsers

### Content Management
- JSON files serve as temporary CMS
- Admin panel provides UI for announcements management
- Events, jobs, and alumni data managed through JSON files
- Ready for migration to headless CMS or database backend

This architecture supports rapid development while maintaining code quality, brand consistency, and scalability for future enhancements.