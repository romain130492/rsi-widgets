const path = require('path');
module.exports = {
  entry:{
    "interpretation-player":"./src/interpretation-player.js",
    "interpretation-manager":"./src/interpretation-manager.js",
  },
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
    filename: '[name].min.js',
  },
};
