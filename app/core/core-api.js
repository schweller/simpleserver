'use strict'

var http = require('http')
var apiConfig = require('../../../config/config-api.json')

var CORE = {
  API: function (config) {
    this.config = config
  }

}

CORE.API.prototype.for = function (team) {
  this.team = team
  return this
}

CORE.API.prototype.get = function (callback) {
  var path = '/api/teams/?team=San%20Francisco%2049ers'

  var options = {
    path: path,
    hostname: apiConfig.API_HOSTNAME,
    port: apiConfig.API_PORT
  }
  
  var request = http.request(options, function (response) {
    var str = ''

    response.setEncoding('utf8')

    response.on('data', function (chunk) {
      str += chunk
    })

    response.on('end', function () {
      var responseJSON = str

      if (responseJSON instanceof Error) {
        callback(responseJSON, null)
      } else {
        callback(null, responseJSON)
      }
    })
  })

  request.on('error', function (err) {
    console.log(err)
    callback(err)
  })

  request.end()
}

module.exports = CORE.API
