var React = require('react');
var Elite = require('./elite/index');
var EliteLoad = require('./actions/EliteLoad');

React.initializeTouchEvents(true);

React.render(<Elite />, document.getElementById('elite'));

EliteLoad.load();
