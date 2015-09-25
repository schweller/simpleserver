var fs = require('fs')
var path = require('path')

var CORE = {
  Template: function (target) {
    this.target = target
  }
}

CORE.Template.prototype.render = function (data, callback) {
  var fullPath = path.resolve(__dirname, this.target)
  console.log(fullPath);

  fs.readFile(fullPath, { encoding: 'utf8' }, function (err, template) {
    if (err) {
      return callback(err)
    }

    var rendered = template.replace(/\{\{template:([a-z0-9_]+)\}\}/g, function (match, property) {
      return data[property]
    })

    callback(null, rendered)
  })
}

module.exports = CORE.Template
