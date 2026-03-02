import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure generated JSON content files are included in serverless function bundles
  outputFileTracingIncludes: {
    "/[prestation]/[slug]": ["./src/data/generated/**/*.json"],
  },
};

export default nextConfig;
