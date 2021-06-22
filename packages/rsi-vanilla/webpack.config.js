const path = require('path');
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.min.js',
  },
};