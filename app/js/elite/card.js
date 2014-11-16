/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    this.props.onDetailSwitch(this.props.position);
  },
  render: function() {
    return (
      <li>
        <a href={this.props.company.url} onMouseOver={this.handleClick}>
          {this.props.company.name}
        </a>
      &nbsp;({this.props.company.adCount})
      </li>
    );
  }
});