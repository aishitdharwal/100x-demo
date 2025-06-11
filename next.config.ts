import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://13.233.91.68:8080/:path*",
      },
    ];
  },
};

export default nextConfig;
