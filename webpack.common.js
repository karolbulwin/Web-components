const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        },
        {
          name: 'theme-color',
          content: '#4285f4'
        },
        {
          name: 'description',
          content: 'web-components'

        },
        {
          name: 'author',
          content: 'Karol Bulwin'
        }
      ],
      title: 'Web-components',
      lang: 'en'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }]
      }
    ]
  }
};
