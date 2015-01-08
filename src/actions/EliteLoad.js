var AppDispatcher = require('../dispatcher/AppDispatcher');

var DATA = JSON.parse(document.getElementById('data').innerHTML);

var EliteLoad = {
  load: function() {
    DATA.elite.forEach(function (company) {
      AppDispatcher.dispatch({
        actionType: 'ELITE_ADD_COMPANY',
        company: company
      });
    })
  }
};

module.exports = EliteLoad;