var React = require('react');
var Elite = require('./elite/index');

var DATA = JSON.parse(document.getElementById('data').innerHTML);

React.initializeTouchEvents(true);

React.render(<Elite companies={DATA.elite} />, document.getElementById('elite'));