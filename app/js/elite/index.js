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
      <div className="grid">
        <div className="grid__item e-6--palm e-push-1--palm e-push-0 e-7--desk">
          <EliteDetail company={this.props.companies[this.state.currentDetail]} />
        </div>
        <div className="grid__item e-10 e-18--desk">
          <div className="grid grid--middle">
            {this.props.companies.map(function (company, index) {
              return <EliteCard
                company={company}
                key={"company-" + company.id}
                onDetailSwitch={this.handleSwitch}
                position={index} />
            }, this)}

            <div className="grid__item e-4--palm e-5 e-push-1--desk">
              <div className="title__elite__item">
                <a href="http://www.jobs.cz/hledani-dle-firem/">Další firmy…</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});