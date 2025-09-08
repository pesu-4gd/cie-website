#!/bin/bash

# EC2 Server Setup Script for CIE Website
# Run this script on your EC2 instance as ubuntu user

set -e

echo "🔧 Setting up EC2 instance for CIE Website..."

# Update system packages
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x (LTS)
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Install Nginx
echo "📦 Installing Nginx..."
sudo apt install -y nginx

# Create application directories
echo "📁 Creating directories..."
mkdir -p /home/ubuntu/cie-website
mkdir -p /home/ubuntu/logs

# Configure PM2 to start on boot
echo "⚙️ Configuring PM2 startup..."
sudo pm2 startup
pm2 save

# Create Nginx configuration
echo "⚙️ Creating Nginx configuration..."
sudo tee /etc/nginx/sites-available/cie-website << EOF
server {
    listen 80;
    server_name _;  # Replace with your domain if you have one
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # Handle static files
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # Handle public assets
    location /assets {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000";
    }
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/cie-website /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test and restart Nginx
echo "🔄 Restarting Nginx..."
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# Configure UFW firewall
echo "🔥 Configuring firewall..."
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable

echo "✅ EC2 setup complete!"
echo ""
echo "📤 Next steps:"
echo "1. Upload your application files to /home/ubuntu/cie-website/"
echo "2. Run: cd /home/ubuntu/cie-website && npm install --production"
echo "3. Run: pm2 start ecosystem.config.js --env production"
echo "4. Run: pm2 save"
echo ""
echo "🌐 Your website will be accessible at: http://YOUR_EC2_PUBLIC_IP"
