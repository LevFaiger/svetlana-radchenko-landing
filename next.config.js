/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  trailingSlash: true,
  // Force fresh build - disable cache
  distDir: '.next',
  turbopack: {
    // Turbopack configuration for development
  },
  experimental: {
    // Global 404 page rendering its own <html>/<body>; required because the
    // RU and EN versions use separate root layouts (route groups).
    globalNotFound: true,
  },
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
  },
  // Headers are not supported with static export
  // headers: async () => { ... },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
    }
    return config;
  },
};

module.exports = nextConfig;