/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/mtnpi-website-new' : '',
  images: {
    unoptimized: true,
    remotePatterns: []
  }
};

export default nextConfig;
