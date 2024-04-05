module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/skip-slinky',
          destination: 'https://skip-slinky.mintlify.app',
        },
      ],
    };
  },
};
