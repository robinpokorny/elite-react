var React = require('react');

module.exports = React.createClass({
  render: function() {
    if (!this.props.company) {
      return <div />;
    }
    var vacanciesInfo = <p>&nbsp;</p>;
    if (this.props.company.adCount) {
      vacanciesInfo = <p>
        <strong>{this.props.company.adCount}</strong>
        &nbsp;volných pozic
      </p>
    }
    return (
      <div className="title__elite text--center">
        <a href={this.props.company.url}>
          <img className="title__elite__logo" src={this.props.company.image}/>
        </a>
        <a href={this.props.company.url}>
          <img className="title__elite__preview" src={this.props.company.officeImage}/>
        </a>
        {vacanciesInfo}
        <a href={this.props.company.url}>{this.props.company.displayUrl}</a>
      </div>
    );
  }
});