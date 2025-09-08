#!/bin/bash

# Application Deployment Script for EC2
# Run this after uploading your application files

set -e

APP_DIR="/home/ubuntu/cie-website"
BACKUP_DIR="/home/ubuntu/backups"

echo "🚀 Deploying CIE Website application..."

# Create backup directory
mkdir -p $BACKUP_DIR

# Stop existing application
echo "⏹️ Stopping existing application..."
pm2 stop cie-website || echo "No existing process to stop"

# Backup current deployment (if exists)
if [ -d "$APP_DIR/.next" ]; then
    echo "💾 Creating backup..."
    tar -czf $BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S).tar.gz -C $APP_DIR .next public package*.json || echo "Backup creation failed"
fi

# Install dependencies
echo "📦 Installing dependencies..."
cd $APP_DIR
npm install --production --silent

# Start application with PM2
echo "▶️ Starting application..."
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Display status
echo "📊 Application status:"
pm2 status
pm2 logs cie-website --lines 10

echo ""
echo "✅ Deployment complete!"
echo "🌐 Website should be accessible at: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo 'YOUR_EC2_IP')"
echo ""
echo "🔧 Useful commands:"
echo "  pm2 status           # Check application status"
echo "  pm2 logs cie-website # View application logs"
echo "  pm2 restart cie-website # Restart application"
echo "  pm2 stop cie-website # Stop application"
