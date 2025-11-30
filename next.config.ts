import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Enable Cache Components (Partial Prerendering) for optimal performance
  // This creates a static shell that's immediately sent to the browser,
  // with dynamic content streaming as it becomes ready
  cacheComponents: true,

  // Optimize images with modern formats
  images: {
    formats: ['image/avif', 'image/webp'],
    // Enable static image optimization
    unoptimized: false,
  },

  // Enable experimental features for better performance
  experimental: {
    // Optimize package imports for faster builds and smaller bundles
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-toast',
      'recharts',
    ],
    // Inline CSS to reduce render-blocking requests
    // This replaces <link> tags with <style> tags in the HTML head
    // Note: Only works in production builds, not development
    inlineCss: true,
    // Optimize CSS chunking (default: true - merges CSS when possible)
    cssChunking: true,
  },

  // Compression is handled by hosting platforms, but ensure it's enabled
  compress: true,

  // Generate ETags for caching
  generateEtags: true,

  // Power by header removal for security
  poweredByHeader: false,
};

export default nextConfig;
