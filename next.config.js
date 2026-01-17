/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/py-server',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
