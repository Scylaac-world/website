import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
    async redirects() {
    return [
      {
        source: "/services/:path*",
        destination: "/",
        permanent: false, // use false for temporary (302), true for permanent (301)
      },
    ];
  },

};

export default nextConfig;