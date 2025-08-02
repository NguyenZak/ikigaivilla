import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack completely to fix Font Awesome issues
  experimental: {
    turbo: false,
  },
  // Use traditional webpack for better Font Awesome compatibility
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
