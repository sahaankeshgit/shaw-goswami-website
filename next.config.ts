import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/solutions", destination: "/#solutions", permanent: true },
      { source: "/industries", destination: "/#industries", permanent: true },
      { source: "/clients", destination: "/#clients", permanent: true },
      { source: "/faqs", destination: "/#faqs", permanent: true },
      { source: "/insights", destination: "/", permanent: true },
      { source: "/insights/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

