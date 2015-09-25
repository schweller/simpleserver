require('babel/register')({experimental: true})

var express = require('express')
var API = require('./app/core/core-api')
var Bootstrap = require('./app/core/core-bootstrap.jsx')

// Start a new app
var app = express()

// Serve initial HTML
app.get('/', function (req, res) {
  new API().for(req.query.team).get(function (err, data) {
    if (err) {
      return res.send(500, 'API error')
    }

    new Bootstrap(data).create(function (err, responseHTML) {
      if (err) {
        return res.send(500, 'Template error')
      }

      res.send(responseHTML)
    })
  })
})

app.use('/public', express.static("./public"));

var port = process.env.PORT || 8080

app.listen(port)

console.log('Running server on port ' + port + ', press ctrl + c to stop.')
