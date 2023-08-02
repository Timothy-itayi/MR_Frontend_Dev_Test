const { join } = require('node:path')

module.exports = {
  entry: join(__dirname, './index.tsx'),
  output: {
    path: join(__dirname, '../server/public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // Add this rule to handle CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
}
