const path = require('path');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, '../typescript'),
    use: [
      require.resolve('ts-loader'),
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: { setDisplayName: false }
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
