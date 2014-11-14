/** @jsx React.DOM */

var EliteDetail = React.createClass({
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

var EliteCard = React.createClass({
  render: function() {
    return (
      <li>
        <a href="{this.props.company.url}">{this.props.company.name}</a>
        &nbsp;({this.props.company.adCount})
      </li>
    );
  }
});

var Elite = React.createClass({
  render: function () {
    var rows = [];
    this.props.companies.forEach(function(company) {
      rows.push(<EliteCard company={company} key={company.id} />);
    });
    return (
      <div>
        <EliteDetail company={this.props.companies[0]} />
        <ul>
          {rows}
        </ul>
      </div>
    );
  }
});

var ELITE_DATA = [
  {
    "id": 899,
    "name": "\u010cesk\u00e1 televize",
    "image": "http:\/\/presentation.lmc.cz\/loga\/ceskatelevize\/elita\/logo.gif",
    "officeImage": "http:\/\/presentation.lmc.cz\/loga\/ceskatelevize\/elita\/foto.gif",
    "url": "http:\/\/access.lmc.cz\/redir.php?Evertical=0&Eelita=899&url=http%3A%2F%2Fceskatelevize.jobs.cz%2F%3Frps%3D27",
    "mobileUrl": "",
    "displayUrl": "http:\/\/ceskatelevize.jobs.cz\/",
    "adCount": 18,
    "g2Id": "1748450",
    "branchesIds": [""],
    "shortDisplayUrl": "ceskatelevize.jobs.cz"
  },
  {
    "id": 52,
    "name": "Vodafone",
    "image": "http:\/\/presentation.lmc.cz\/loga\/vodafone\/elita\/logo.gif",
    "officeImage": "http:\/\/presentation.lmc.cz\/loga\/vodafone\/elita\/foto.gif",
    "url": "http:\/\/access.lmc.cz\/redir.php?Evertical=0&Eelita=52&url=http%3A%2F%2Fvodafone.jobs.cz%2F%3Frps%3D27",
    "mobileUrl": "",
    "displayUrl": "http:\/\/vodafone.jobs.cz\/",
    "adCount": 32,
    "g2Id": "5411",
    "branchesIds": [""],
    "shortDisplayUrl": "vodafone.jobs.cz"
  },
  {
    "id": 53,
    "name": "\u010cesk\u00e1 spo\u0159itelna",
    "image": "http:\/\/presentation.lmc.cz\/loga\/csas\/elita\/logo.gif",
    "officeImage": null,
    "url": "http:\/\/access.lmc.cz\/redir.php?Evertical=0&Eelita=53&url=http%3A%2F%2Fcsas.jobs.cz%2F%3Frps%3D27",
    "mobileUrl": "",
    "displayUrl": "http:\/\/csas.jobs.cz\/",
    "adCount": 145,
    "g2Id": "175350",
    "branchesIds": [""],
    "shortDisplayUrl": "csas.jobs.cz"
  }
];

React.render(<Elite companies={ELITE_DATA} />, document.getElementById('elite'));