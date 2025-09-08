#!/bin/bash

# CIE Website Deployment Script for EC2
# Usage: ./deploy.sh [production|staging]

set -e

ENVIRONMENT=${1:-production}
PROJECT_NAME="cie-website"
DEPLOY_USER="ubuntu"  # Change if your EC2 user is different
BUILD_DIR="out"

echo "🚀 Starting deployment for $ENVIRONMENT environment..."

# Build the Next.js application
echo "📦 Building Next.js application..."
npm run build

# Create deployment package
echo "📋 Creating deployment package..."
tar -czf ${PROJECT_NAME}-$(date +%Y%m%d-%H%M%S).tar.gz \
  .next \
  public \
  package*.json \
  next.config.ts \
  ecosystem.config.js \
  --exclude=node_modules \
  --exclude=.git

echo "✅ Deployment package created!"
echo ""
echo "📤 Next steps:"
echo "1. Upload the .tar.gz file to your EC2 instance"
echo "2. Run the setup script on your EC2 instance"
echo "3. Extract and start the application"
echo ""
echo "SCP command example:"
echo "scp ${PROJECT_NAME}-*.tar.gz $DEPLOY_USER@YOUR_EC2_IP:/home/$DEPLOY_USER/"
