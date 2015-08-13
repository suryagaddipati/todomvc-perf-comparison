module.exports = {
  entry: "./IncrementalDom.js",
  output: {
    filename: "./Native/VirtualDom.js"
  },
  module:{
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
}
