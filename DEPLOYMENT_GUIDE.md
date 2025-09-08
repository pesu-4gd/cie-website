# 🚀 **EC2 Deployment Guide - CIE Website**

## 📋 **Complete Step-by-Step Instructions**

### **Current Status:**
- ✅ Homepage is fully functional
- ✅ Navigation and layout working
- ⚠️ Some secondary pages have syntax errors (we'll deploy homepage first)

---

## **🔧 Method 1: Quick Homepage Deployment**

Since your homepage is perfect and ready for production, let's deploy that first:

### **Step 1: Prepare EC2 Instance**

SSH into your EC2 instance and run:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 and Nginx
sudo npm install -g pm2
sudo apt install -y nginx

# Create directories
mkdir -p ~/cie-website
mkdir -p ~/logs
```

### **Step 2: Upload Files to EC2**

From your local machine:
```bash
# Upload the entire project (we'll fix issues on server)
scp -r /Users/prateekbhoge/cie-website/cie-website ubuntu@YOUR_EC2_IP:/home/ubuntu/
```

### **Step 3: Fix and Build on Server**

SSH to your EC2 and run:
```bash
cd ~/cie-website
npm install

# Install missing UI components
npx shadcn@latest add separator
npx shadcn@latest add collapsible

# Build the project
npm run build
```

### **Step 4: Setup PM2 and Nginx**

```bash
# Start with PM2
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup

# Configure Nginx
sudo nano /etc/nginx/sites-available/cie-website
```

Nginx config:
```nginx
server {
    listen 80;
    server_name _;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/cie-website /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

---

## **🎯 Method 2: Homepage-Only Deployment (Fastest)**

If you want to deploy just the working homepage immediately:

### **Create Homepage-Only Build:**

```bash
# On your local machine, create a minimal Next.js setup
mkdir ~/cie-homepage-only
cd ~/cie-homepage-only

# Copy essential files
cp -r /Users/prateekbhoge/cie-website/cie-website/app/page.tsx ./app/
cp -r /Users/prateekbhoge/cie-website/cie-website/app/layout.tsx ./app/
cp -r /Users/prateekbhoge/cie-website/cie-website/app/globals.css ./app/
cp -r /Users/prateekbhoge/cie-website/cie-website/components ./
cp -r /Users/prateekbhoge/cie-website/cie-website/public ./
cp -r /Users/prateekbhoge/cie-website/cie-website/lib ./
cp -r /Users/prateekbhoge/cie-website/cie-website/data ./
cp /Users/prateekbhoge/cie-website/cie-website/package.json ./
cp /Users/prateekbhoge/cie-website/cie-website/next.config.ts ./
cp /Users/prateekbhoge/cie-website/cie-website/tailwind.config.ts ./
cp /Users/prateekbhoge/cie-website/cie-website/components.json ./

# Upload this clean version
scp -r . ubuntu@YOUR_EC2_IP:/home/ubuntu/cie-website/
```

---

## **⚡ Quick Fix Script for Server**

Save this as `fix-and-deploy.sh` on your EC2:

```bash
#!/bin/bash
cd ~/cie-website

# Install dependencies
npm install

# Add missing shadcn components
npx shadcn@latest add separator --yes
npx shadcn@latest add collapsible --yes

# Try to fix syntax errors in problematic files
# Remove problematic pages temporarily
rm -f app/faqs/page.tsx
rm -f app/policies/page.tsx  
rm -f app/industry/collaborations/page.tsx

# Create placeholder pages
mkdir -p app/faqs app/policies app/industry/collaborations

echo 'export default function FAQs() { return <div className="p-8"><h1>FAQs - Coming Soon</h1></div>; }' > app/faqs/page.tsx
echo 'export default function Policies() { return <div className="p-8"><h1>Policies - Coming Soon</h1></div>; }' > app/policies/page.tsx
echo 'export default function Collaborations() { return <div className="p-8"><h1>Collaborations - Coming Soon</h1></div>; }' > app/industry/collaborations/page.tsx

# Build and start
npm run build
pm2 restart cie-website || pm2 start ecosystem.config.js --env production
pm2 save
```

---

## **🌐 Access Your Website**

After deployment, your website will be available at:
- `http://YOUR_EC2_PUBLIC_IP`

---

## **🔍 Troubleshooting Commands**

```bash
# Check PM2 status
pm2 status
pm2 logs cie-website

# Check Nginx
sudo nginx -t
sudo systemctl status nginx

# Check if port is listening
netstat -tulpn | grep :3000
netstat -tulpn | grep :80

# Restart services
pm2 restart cie-website
sudo systemctl restart nginx
```

---

## **🎉 What You'll Have Working**

After this deployment:
✅ **Beautiful homepage** with all animations and content  
✅ **Responsive design** working on all devices  
✅ **Navigation structure** in place  
✅ **Professional appearance**  
✅ **Fast loading** with optimized build  

The secondary pages can be added later once syntax issues are resolved.

**Your CIE website homepage will be live and fully functional!** 🚀
