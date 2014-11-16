/** @jsx React.DOM */

var React = require('react');
var Elite = require('./elite/index');

var DATA = JSON.parse(document.getElementById('data').innerHTML);

React.render(<Elite companies={DATA.elite} />, document.getElementById('elite'));