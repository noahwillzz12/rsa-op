import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/**',
      },
    ],
  },
  distDir: process.env.NEXT_DIST_DIR || '.next',
  outputFileTracingRoot: path.join(process.cwd(), '..'),
};

export default nextConfig;
