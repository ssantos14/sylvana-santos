const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    entry: ['@babel/polyfill', './client/index.js'], // entry point
    mode: isDev ? 'development' : 'production',
    output: {
      path: __dirname, // location of bundle.js
      filename: './public/bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    watchOptions: {
      ignored: /node_modules/
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
};