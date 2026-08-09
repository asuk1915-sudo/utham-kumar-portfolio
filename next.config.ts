import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/portfolio", destination: "/#work", permanent: true },
      { source: "/event-list", destination: "/#insights", permanent: true },
      { source: "/blog", destination: "/#insights", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/post/:slug", destination: "/insights/:slug", permanent: true },
    ];
  },
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        { key: "X-Frame-Options", value: "DENY" },
      ],
    }];
  },
};

export default nextConfig;
