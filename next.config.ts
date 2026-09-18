import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phone / LAN previews to load Next.js dev assets (HMR, etc.)
  allowedDevOrigins: ["127.0.0.1", "localhost", "172.20.10.2"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
    ];
  },
};

export default nextConfig;
