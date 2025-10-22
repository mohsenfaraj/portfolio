/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  productionBrowserSourceMaps: false,
  images: { unoptimized: true },
};

export default nextConfig;
