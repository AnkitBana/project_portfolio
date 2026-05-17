/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Enable static export for Docker deployment
  output: 'standalone',
  // Disable x-powered-by header for security
  poweredByHeader: false,
  // Compression
  compress: true,
  // Environment variables available to the browser
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Portfolio',
  },
}

module.exports = nextConfig

// Made with Bob
