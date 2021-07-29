const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry:{
    "interpretation-player":"./src/interpretation-player.js"
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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: require.resolve('@akkadu/rsi-interpretation-player/dist/index.css'),
        to: '[name].min.css'
      }]
    })
  ]
};
