import {Configuration} from 'webpack';
import path from 'path';
import HtmlWebpackPlugin = require("html-webpack-plugin");

const config: Configuration = {
  mode: "development",
  entry: './src/entry.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'web.bundle.js'
  },
  resolve: {
    alias: {
      '#request': path.resolve(__dirname, 'src/isomorphicRequest/web')
    },
    extensions: ['.ts']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({})
  ]
}

export default [config];
