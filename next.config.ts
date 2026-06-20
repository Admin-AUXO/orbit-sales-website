import type { NextConfig } from "next";

// Static export served from a GitHub Pages project subpath:
// https://admin-auxo.github.io/orbit-sales-website
// Override with NEXT_PUBLIC_BASE_PATH (e.g. "" for a custom domain at root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/orbit-sales-website";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  poweredByHeader: false,

  images: {
    // GitHub Pages has no image optimizer — serve images as-is.
    unoptimized: true,
  },

  compiler: {
    removeConsole: { exclude: ["error", "warn"] },
  },

  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
