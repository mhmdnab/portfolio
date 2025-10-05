/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // fixed typo: 'unisplash' → 'unsplash'
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*", // Proxy to backend
      },
    ];
  },
};

module.exports = nextConfig;
