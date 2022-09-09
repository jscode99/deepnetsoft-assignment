/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_ENDPOINT: "https://test-server-nextjs.vercel.app/api/",
    // API_ENDPOINT: "http://localhost:4000/api/",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
