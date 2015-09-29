import express from 'express'
import request from 'request'
import React from 'react'
import api from '../config/config-api'
import TLPHeader from './app/tlp_header/components/Header'

const app = express()

app.get('/', function (req, res) {
  request(api.HOSTNAME + ':' + api.PORT + '/api/teams/?team=San%20Francisco%2049ers', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let TLPHeaderContainer = React.createFactory(TLPHeader)
      let markup = React.renderToString(TLPHeaderContainer({
        tlp: JSON.parse(body)
      }))

      res.send(markup)
    }
  })
})

app.use('/public', express.static('./public'))

const port = process.env.PORT || 8080

app.listen(port)

console.log('Running server on port ' + port + ', press ctrl + c to stop.')
