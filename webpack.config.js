const { resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyxerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    main: resolve(__dirname, 'src', 'index.js'),
  },

  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(mp[3|4])$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },          
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
            }
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader", // Создает на странице узел `style` из JS strings  
          "css-loader", // Translates CSS into CommonJS
          "sass-loader" // Compiles Sass to CSS
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: resolve(__dirname, 'src', 'index.html') }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    // new BundleAnalyxerPlugin()
  ]
}
