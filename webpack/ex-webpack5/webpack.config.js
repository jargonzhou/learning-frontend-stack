const path = require('path');

// Configuration
// https://webpack.js.org/configuration/
module.exports = {
  // https://webpack.js.org/configuration/mode/
  mode: "none",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    liveReload: true,
    compress: true,
    port: 9000,
  },
};