/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    api_url: process.env.API_URL,
    metadataUrl: process.env.NEXT_PUBLIC_METADATA_BASE,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
      },
    ],
  },
};

export default nextConfig;
