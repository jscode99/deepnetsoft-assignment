/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_ENDPOINT: "https://test-server-nextjs.vercel.app/api/",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
