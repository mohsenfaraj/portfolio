/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  swcMinify: true,
  productionBrowserSourceMaps: false,
  images: { unoptimized: true },
};

export default nextConfig;
