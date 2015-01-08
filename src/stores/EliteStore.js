var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _elite = [];

/**
 * Add a company
 * @param {object} company
 */
function create(company) {
  _elite.push(company);
}

var EliteStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of elite.
   * @return {object}
   */
  getAll: function() {
    return _elite;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {

  switch(payload.actionType) {
    case 'ELITE_ADD_COMPANY':
      create(payload.company);
      EliteStore.emitChange();
      break;

    default:
      // no op
  }

});

module.exports = EliteStore;