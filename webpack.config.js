const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' },
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: 'public', to: '.' }] }),
    new DefinePlugin({ SITE_ENV: JSON.stringify(process.env.SITE_ENV) }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
}
