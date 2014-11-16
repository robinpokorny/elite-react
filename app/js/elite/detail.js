/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="title__elite text--center">
        <a href={this.props.company.url}>
          <img className="title__elite__logo" src={this.props.company.image}/>
        </a>
        <a href={this.props.company.url}>
          <img className="title__elite__preview" src={this.props.company.officeImage}/>
        </a>
        <p>
          <strong>{this.props.company.adCount}</strong>
        &nbsp;volných pozic
        </p>
        <a href={this.props.company.url}>{this.props.company.displayUrl}</a>
      </div>
    );
  }
});