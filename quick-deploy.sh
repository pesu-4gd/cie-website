#!/bin/bash

# Quick Production Deployment Guide
# For immediate deployment with working homepage

echo "🚀 CIE Website - Quick Deployment Steps"
echo "======================================"
echo ""

# Build the application (standard build, not Turbopack)
echo "📦 Step 1: Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Create deployment package
    echo "📦 Step 2: Creating deployment package..."
    tar -czf cie-website-production-$(date +%Y%m%d-%H%M%S).tar.gz \
      .next \
      public \
      package.json \
      package-lock.json \
      next.config.ts \
      ecosystem.config.js \
      .env.production
      
    echo "✅ Deployment package created!"
    echo ""
    echo "🚀 DEPLOYMENT INSTRUCTIONS:"
    echo "=========================="
    echo ""
    echo "1. Upload the .tar.gz file to your EC2 instance:"
    echo "   scp cie-website-production-*.tar.gz ubuntu@YOUR_EC2_IP:/home/ubuntu/"
    echo ""
    echo "2. On your EC2 instance, run:"
    echo "   # Setup the server (first time only)"
    echo "   curl -o setup.sh https://raw.githubusercontent.com/your-repo/setup.sh"
    echo "   chmod +x setup.sh && ./setup.sh"
    echo ""
    echo "   # Or manually install:"
    echo "   sudo apt update && sudo apt install -y nodejs npm nginx"
    echo "   sudo npm install -g pm2"
    echo ""
    echo "3. Extract and deploy:"
    echo "   mkdir -p /home/ubuntu/cie-website"
    echo "   tar -xzf cie-website-production-*.tar.gz -C /home/ubuntu/cie-website"
    echo "   cd /home/ubuntu/cie-website"
    echo "   npm install --production"
    echo "   pm2 start ecosystem.config.js --env production"
    echo ""
    echo "4. Configure Nginx (create /etc/nginx/sites-available/cie-website):"
    echo "   sudo nano /etc/nginx/sites-available/cie-website"
    echo ""
    echo "5. Your website will be live at: http://YOUR_EC2_IP"
    echo ""
else
    echo "❌ Build failed! Please fix the errors above before deploying."
fi
