import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["storage.googleapis.com", "api-lexica.s3.us-east-1.amazonaws.com", "api-lexica.s3.amazonaws.com"],
  },
};

export default nextConfig;