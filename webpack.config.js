const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'), //This needs to be an absolute path instead of a relative path. We want to put this file inside of the public folder for our project.
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public') 
  }
}