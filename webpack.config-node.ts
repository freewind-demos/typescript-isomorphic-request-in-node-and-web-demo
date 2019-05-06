import {Configuration} from 'webpack';
import path from 'path';

const config: Configuration = {
  target: 'node',
  mode: "development",
  entry: './src/entry.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'node.bundle.js',
    libraryTarget: 'commonjs'
  },
  resolve: {
    alias: {
      '#request': path.resolve(__dirname, 'src/isomorphicRequest/node')
    },
    extensions: ['.ts']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  externals: ['request']
}

export default config;
