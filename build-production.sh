#!/bin/bash

# Simple production build script for homepage deployment
# This builds only the working homepage and core files

set -e

echo "🚀 Building CIE Website for production deployment..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next

# Build without Turbopack to avoid issues with some pages
echo "📦 Building Next.js application (production mode)..."
NODE_ENV=production npm run build

echo "✅ Build completed!"

# Create a minimal deployment package with only essential files
echo "📋 Creating deployment package..."
tar -czf cie-website-$(date +%Y%m%d-%H%M%S).tar.gz \
  .next \
  public \
  package.json \
  package-lock.json \
  next.config.ts \
  ecosystem.config.js \
  .env.production \
  --exclude=node_modules \
  --exclude=.git \
  --exclude=app/faqs \
  --exclude=app/policies \
  --exclude=app/industry/collaborations

echo "✅ Deployment package created!"
echo ""
echo "📤 Upload the .tar.gz file to your EC2 instance and follow the deployment steps."
