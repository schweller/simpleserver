'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _appTlp_headerComponentsHeader = require('./app/tlp_header/components/Header');

var _appTlp_headerComponentsHeader2 = _interopRequireDefault(_appTlp_headerComponentsHeader);

var app = (0, _express2['default'])();

app.get('/', function (req, res) {
  (0, _request2['default'])('http://52.20.245.204:8080/api/teams/?team=San%20Francisco%2049ers', function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var TLPHeaderContainer = _react2['default'].createFactory(_appTlp_headerComponentsHeader2['default']);
      var markup = _react2['default'].renderToString(TLPHeaderContainer({
        tlp: JSON.parse(body)
      }));

      res.send(markup);
    }
  });
});

app.use('/public', _express2['default']['static']("./public"));

var port = process.env.PORT || 8080;

app.listen(port);

console.log('Running server on port ' + port + ', press ctrl + c to stop.');
