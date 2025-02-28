import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  /* config options here */
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Netlify doesn't support Next.js Image Optimization
  },
});

export default nextConfig;
