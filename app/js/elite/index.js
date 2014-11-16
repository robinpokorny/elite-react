/** @jsx React.DOM */

var React = require('react');
var EliteDetail = require('./detail');
var EliteCard = require('./card');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      currentDetail: 0
    };
  },
  handleSwitch: function(position){
    this.setState({currentDetail: position});
  },
  render: function () {
    return (
      <div>
        <EliteDetail company={this.props.companies[this.state.currentDetail]} />
        <ul>
          {this.props.companies.map(function (company, index) {
            return <EliteCard
              company={company}
              key={"company-" + company.id}
              onDetailSwitch={this.handleSwitch}
              position={index} />
          }, this)}
        </ul>
      </div>
    );
  }
});