const isDev = process.env.NODE_ENV === 'development'
module.exports = {
    entry: ['@babel/polyfill', './client/index.js'], // entry point
    mode: isDev === 'development' ? 'development' : 'production',
    output: {
      path: __dirname, // location of bundle.js
      filename: './public/bundle.js'
    },
    devtool: 'source-maps',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
};