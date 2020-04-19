const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'kremling-inline-loader',
            options: {
              sass: {
                data: `@import "${path.resolve(
                  __dirname,
                  'src/styles/globals/variables.scss'
                )}";`
              },
            },
          },
        ],
      },
      {
        test: /main\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        }],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new webpack.ProvidePlugin({
      Crank: '@bikeshaving/crank',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    index: 'index.html',
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true,
    port: 8080,
  }
}