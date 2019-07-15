module.exports = {
  webpack: (config, { dev }) => {
    // Fixes npm packages that depend on `fs` module
    /* eslint-disable-next-line no-param-reassign */
    config.node = {
      fs: 'empty',
    };

    if (dev) {
      // Linting on hot-reload in dev mode
      config.module.rules.push({
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      });
    }

    return config;
  },
};
