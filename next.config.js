/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/black-screen-test',
        destination: '/black-screen',
        permanent: true, // 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
