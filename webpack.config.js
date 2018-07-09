const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

// 使用 HtmlWebpackPlugin，將 bundle 好得 <script> 插入到 body
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `html-withimg-loader!${__dirname}/frontend/index.html`,
  filename: 'index.html',
  inject: 'body',
  minify: {
    removeAttributeQuotes: true, // 移除双引号
  },
});

// Image min
const ImageminPluginConfig = new ImageminPlugin({
  disable: process.env.NODE_ENV !== 'production',
  pngquant: {
    quality: '95-100',
  },
});

const { NODE_ENV } = process.env;
const env = NODE_ENV || 'development';

module.exports = {
  entry: {
    main: './frontend/Main/index.js',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: '0.0.0.0',
    port: env.PORT || 8080,
    inline: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/': {
        target: 'http://localhost:8081',
        bypass(req) {
          const { url, protocol, hostname } = req;

          if (url.startsWith('/assets/') && !url.includes('libs.dll')) {
            return `${protocol}://${hostname}${url}`;
          }
        },
      },
    },
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
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|svg|bmp|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1024, // 图片大小 > limit 使用file-loader, 反之使用url-loader
              fallback: 'file-loader',
              name() {
                if (env === 'development') {
                  return '[name].[ext]';
                }
                return '[hash].[ext]';
              },
              outputPath: 'build',
            },
          },
        ],
      },
      {
        test: /\.(html|html)$/,
        use: 'html-withimg-loader',
        include: path.join(__dirname, './frontend/assets'),
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    HTMLWebpackPluginConfig,
    ImageminPluginConfig,
    new webpack.HotModuleReplacementPlugin(),

    // ensure that we get a production build of any dependencies
    // this is primarily for React, where this removes 179KB from the bundle
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};
