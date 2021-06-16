const path = require('path');
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        /* exclude: /node_modules/, */
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

/* 
{
  dir: "dist/esm",
  format: "esm",
  exports: "named",
  sourcemap: true,
},
{
  dir: "dist/cjs",
  format: "cjs",
  exports: "named",
  sourcemap: true,
}, */