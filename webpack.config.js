const path = require('path');

module.exports = {
  entry: './assets/js/src/index.ts',
  watch: true,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js','.json'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js/'),
  },
};
