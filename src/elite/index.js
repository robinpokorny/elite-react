var EliteDetail = require('./detail');
var EliteCard = require('./card');

var React = require('react');

var EliteStore = require('../stores/EliteStore');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      currentDetail: 0,
      companies: EliteStore.getAll()
    };
  },
  componentDidMount: function() {
    EliteStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    EliteStore.removeChangeListener(this._onChange);
  },
  render: function () {
    return (
      <div className="grid">
        <div className="grid__item e-6--palm e-push-1--palm e-push-0 e-7--desk">
          <EliteDetail company={this.state.companies[this.state.currentDetail]} />
        </div>
        <div className="grid__item e-10 e-18--desk">
          <div className="grid grid--middle">
            {this.state.companies.map(function (company, index) {
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
  },
  handleSwitch: function(position){
    this.setState({currentDetail: position});
  },
  _onChange: function() {
    this.setState({
      companies: EliteStore.getAll()
    });
  }
});