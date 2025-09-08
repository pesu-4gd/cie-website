#!/bin/bash

# Complete CIE Website Deployment Package Creator
# This creates a working deployment package

set -e

echo "🚀 Creating CIE Website Deployment Package..."
echo "============================================="

# Create deployment directory
DEPLOY_DIR="cie-website-deploy-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$DEPLOY_DIR"

echo "📁 Created deployment directory: $DEPLOY_DIR"

# Copy essential working files
echo "📋 Copying essential files..."

# Core app files (working ones only)
mkdir -p "$DEPLOY_DIR/app"
cp app/page.tsx "$DEPLOY_DIR/app/" 2>/dev/null || echo "Warning: homepage not found"
cp app/layout.tsx "$DEPLOY_DIR/app/" 2>/dev/null || echo "Warning: layout not found"
cp app/globals.css "$DEPLOY_DIR/app/" 2>/dev/null || echo "Warning: globals.css not found"
cp app/favicon.ico "$DEPLOY_DIR/app/" 2>/dev/null || echo "Info: favicon not found"

# Copy working directories
cp -r components "$DEPLOY_DIR/" 2>/dev/null || echo "Warning: components directory not found"
cp -r public "$DEPLOY_DIR/" 2>/dev/null || echo "Warning: public directory not found"
cp -r lib "$DEPLOY_DIR/" 2>/dev/null || echo "Warning: lib directory not found" 
cp -r data "$DEPLOY_DIR/" 2>/dev/null || echo "Warning: data directory not found"

# Copy configuration files
cp package.json "$DEPLOY_DIR/" 2>/dev/null || echo "Warning: package.json not found"
cp package-lock.json "$DEPLOY_DIR/" 2>/dev/null || echo "Info: package-lock.json not found"
cp next.config.ts "$DEPLOY_DIR/" 2>/dev/null || echo "Warning: next.config.ts not found"
cp tailwind.config.ts "$DEPLOY_DIR/" 2>/dev/null || echo "Warning: tailwind.config.ts not found"
cp components.json "$DEPLOY_DIR/" 2>/dev/null || echo "Warning: components.json not found"
cp .env.production "$DEPLOY_DIR/" 2>/dev/null || echo "Info: .env.production not found"
cp ecosystem.config.js "$DEPLOY_DIR/" 2>/dev/null || echo "Warning: ecosystem.config.js not found"

# Create placeholder pages for missing sections
echo "📄 Creating placeholder pages..."
mkdir -p "$DEPLOY_DIR/app/students" "$DEPLOY_DIR/app/industry" "$DEPLOY_DIR/app/alumni" "$DEPLOY_DIR/app/about" "$DEPLOY_DIR/app/contact" "$DEPLOY_DIR/app/faqs" "$DEPLOY_DIR/app/policies"

# Students page
cat > "$DEPLOY_DIR/app/students/page.tsx" << 'EOF'
export default function Students() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Students Hub</h1>
        <p className="text-lg text-gray-600 mb-8">Coming soon - Programs, Events, Resources & More</p>
        <div className="bg-blue-100 p-6 rounded-lg">
          <p className="text-blue-800">This section is under development. Please check back soon!</p>
        </div>
      </div>
    </div>
  );
}
EOF

# Industry page
cat > "$DEPLOY_DIR/app/industry/page.tsx" << 'EOF'
export default function Industry() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Partnerships</h1>
        <p className="text-lg text-gray-600 mb-8">Coming soon - Collaborations & Opportunities</p>
        <div className="bg-orange-100 p-6 rounded-lg">
          <p className="text-orange-800">This section is under development. Please check back soon!</p>
        </div>
      </div>
    </div>
  );
}
EOF

# Alumni page
cat > "$DEPLOY_DIR/app/alumni/page.tsx" << 'EOF'
export default function Alumni() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Alumni Network</h1>
        <p className="text-lg text-gray-600 mb-8">Coming soon - Community & Resources</p>
        <div className="bg-purple-100 p-6 rounded-lg">
          <p className="text-purple-800">This section is under development. Please check back soon!</p>
        </div>
      </div>
    </div>
  );
}
EOF

# About page
cat > "$DEPLOY_DIR/app/about/page.tsx" << 'EOF'
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About CIE</h1>
        <p className="text-lg text-gray-600 mb-8">Learn more about our mission and vision</p>
        <div className="bg-green-100 p-6 rounded-lg">
          <p className="text-green-800">This section is under development. Please check back soon!</p>
        </div>
      </div>
    </div>
  );
}
EOF

# Contact page
cat > "$DEPLOY_DIR/app/contact/page.tsx" << 'EOF'
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">Get in touch with our team</p>
        <div className="bg-blue-100 p-6 rounded-lg">
          <p className="text-blue-800">Contact form coming soon. Email us at info@cie.pes.edu</p>
        </div>
      </div>
    </div>
  );
}
EOF

# FAQs page  
cat > "$DEPLOY_DIR/app/faqs/page.tsx" << 'EOF'
export default function FAQs() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-8">Find answers to common questions</p>
        <div className="bg-yellow-100 p-6 rounded-lg">
          <p className="text-yellow-800">FAQ section coming soon!</p>
        </div>
      </div>
    </div>
  );
}
EOF

# Policies page
cat > "$DEPLOY_DIR/app/policies/page.tsx" << 'EOF'
export default function Policies() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Policies</h1>
        <p className="text-lg text-gray-600 mb-8">Privacy Policy and Terms of Service</p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-gray-800">Policy documents coming soon!</p>
        </div>
      </div>
    </div>
  );
}
EOF

# Create deployment scripts in the package
cat > "$DEPLOY_DIR/deploy-on-server.sh" << 'EOF'
#!/bin/bash

# Server deployment script - run this on your EC2 instance

echo "🚀 Deploying CIE Website on EC2..."

# Install dependencies
npm install

# Build the application
npm run build

# Start with PM2
pm2 stop cie-website 2>/dev/null || true
pm2 start ecosystem.config.js --env production
pm2 save

echo "✅ Deployment complete!"
echo "🌐 Website should be running on http://localhost:3000"
EOF

chmod +x "$DEPLOY_DIR/deploy-on-server.sh"

# Create archive
echo "📦 Creating deployment archive..."
tar -czf "${DEPLOY_DIR}.tar.gz" "$DEPLOY_DIR"

echo ""
echo "✅ Deployment package created successfully!"
echo "📦 Package: ${DEPLOY_DIR}.tar.gz"
echo ""
echo "🚀 Next Steps:"
echo "1. Upload to EC2: scp ${DEPLOY_DIR}.tar.gz ubuntu@YOUR_EC2_IP:/home/ubuntu/"
echo "2. On EC2 run: tar -xzf ${DEPLOY_DIR}.tar.gz && cd ${DEPLOY_DIR}"
echo "3. Run: chmod +x deploy-on-server.sh && ./deploy-on-server.sh"
echo ""
echo "🌐 Your website will be live with working homepage and placeholder pages!"
