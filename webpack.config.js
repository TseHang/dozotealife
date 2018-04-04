const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 使用 HtmlWebpackPlugin，將 bundle 好得 <script> 插入到 body
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/frontend/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './frontend/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    inline: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
  ],
};
