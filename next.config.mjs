/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/skip-slinky',
          destination: 'https://skip-slinky.mintlify.app',
        },
        {
          source: '/skip-slinky/:path*',
          destination: 'https://skip-slinky.mintlify.app/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
