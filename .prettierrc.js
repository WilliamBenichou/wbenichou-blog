module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  async rewrites() {
    return [
      {
        source: '/privacy-policy',
        destination: '/privacy-policy.js',
      },
    ];
  },
};
