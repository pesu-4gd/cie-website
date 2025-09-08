// PM2 Process Manager Configuration for CIE Website
module.exports = {
  apps: [
    {
      name: 'cie-website',
      script: 'npm',
      args: 'start',
      cwd: '/home/ubuntu/cie-website', // Update this path as needed
      instances: 2, // Use 2 instances for load balancing
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_staging: {
        NODE_ENV: 'staging',
        PORT: 3001,
      },
      // Restart configuration
      max_restarts: 3,
      min_uptime: '5s',
      
      // Logging
      log_file: '/home/ubuntu/logs/cie-website-combined.log',
      out_file: '/home/ubuntu/logs/cie-website-out.log',
      error_file: '/home/ubuntu/logs/cie-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // Health monitoring
      health_check_url: 'http://localhost:3000',
      health_check_grace_period: 3000,
    }
  ]
};
