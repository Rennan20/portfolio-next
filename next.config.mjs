/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    api_url: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
      },
    ],
  },
};

export default nextConfig;
