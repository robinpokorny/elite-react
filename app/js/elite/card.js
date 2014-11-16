/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    this.props.onDetailSwitch(this.props.position);
  },
  render: function() {
    return (
      <div className="grid__item e-4--palm e-5 e-push-1--desk">
        <div className="index-card">
          <a href={this.props.company.url} onMouseOver={this.handleClick}>
            {this.props.company.name}
          </a>
          &nbsp;({this.props.company.adCount})
        </div>
      </div>
    );
  }
});