/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS ? '/mtnpi-website-new' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: []
  }
};

export default nextConfig;
