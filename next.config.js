/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://mjeksiaislame.com/"],
  },
};

module.exports = nextConfig;