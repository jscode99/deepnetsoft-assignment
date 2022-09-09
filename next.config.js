/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://localhost:3000/",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
