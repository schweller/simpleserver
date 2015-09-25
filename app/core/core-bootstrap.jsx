var React = require('react/addons')
var config = require('../../../config/config-components.json')
var header = require(config.components_dir.tlp_header + 'components/Header.jsx')
var Template = require('../core/core-template')

var TLPHeaderContainer = React.createFactory(header)

var CORE = {
  Bootstrap: function (data) {
    this.data = data
  }
}

CORE.Bootstrap.prototype.create = function (callback) {
  var staticHTML = React.renderToStaticMarkup(TLPHeaderContainer({
    tlp: JSON.parse(this.data)
  }))

  new Template('../view/index.html').render({ app: staticHTML }, callback)
}

module.exports = CORE.Bootstrap
