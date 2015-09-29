var path = require('path')

module.exports = (function (options) {
  var entry = '../tlp_header/components/Header.jsx'

  var output = {
    path: './app/tlp_header/components',
    filename: 'Header.js'
  }

  return {
    entry: entry,
    output: output,
    module: {
      loaders: [
        { test: /\.jsx$/, loader: 'babel-loader' }
      ]
    },
    resolveLoader: { root: path.join(__dirname, "node_modules") }
  }
})()
