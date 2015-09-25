module.exports = (function (options) {
  var entry = './app/stylesheet/tlpHeader.js'

  var output = {
    path: './public/scripts',
    filename: 'bundle.js'
  }

  return {
    entry: entry,
    output: output,
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' }
      ]
    }
  }
})()
