module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: process.argv.indexOf('commonjs') !== -1 ? 'commonjs' : false
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties'
  ]
};
