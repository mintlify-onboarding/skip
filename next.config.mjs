module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
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
