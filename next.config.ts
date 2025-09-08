import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration for development
  turbopack: {
    root: __dirname,
  },
  
  // Image optimization
  images: {
    domains: [], // Add your image domains here if needed
    unoptimized: false, // Set to true if you want to disable Next.js image optimization
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  
  // Compression
  compress: true,
  
  // Conditional standalone output only for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'standalone',
  }),
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
