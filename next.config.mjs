/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/slinky',
          destination: 'https://skip-slinky.mintlify.app',
        },
        {
          source: '/slinky/:path*',
          destination: 'https://skip-slinky.mintlify.app/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
