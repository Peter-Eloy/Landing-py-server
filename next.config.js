/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Landing-py-server",
  assetPrefix: "/Landing-py-server",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
