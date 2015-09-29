module.exports = (function (options) {
  var entry = '../tlp_header/components/css/tlpHeader.css'

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
