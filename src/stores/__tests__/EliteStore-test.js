jest.dontMock('../EliteStore');
jest.dontMock('object-assign');

describe('Elitetore', function() {

  var AppDispatcher;
  var EliteStore;
  var callback;

  // mock actions inside dispatch payloads
  var actionEliteCreate = {
    actionType: 'ELITE_ADD_COMPANY',
    company: {
      "id": 42,
      "name": "Foo",
      "image": "http:\/\/presentation.lmc.cz\/loga\/foo\/elita\/logo.gif",
      "officeImage": "http:\/\/presentation.lmc.cz\/loga\/foo\/elita\/foto.gif",
      "url": "http:\/\/access.lmc.cz\/redir.php?url=http%3A%2F%2Ffoo.jobs.cz",
      "mobileUrl": "",
      "displayUrl": "http:\/\/foo.jobs.cz\/",
      "adCount": 10,
      "g2Id": "111111",
      "branchesIds": [""],
      "shortDisplayUrl": "foo.jobs.cz"
    }
  };

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    EliteStore = require('../EliteStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('should register a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no companies', function() {
    var all = EliteStore.getAll();
    expect(all).toEqual({});
  });

  it('creates a company', function() {
    callback(actionEliteCreate);
    var all = EliteStore.getAll();
    expect(all.length).toBe(1);
    expect(all[0].name).toEqual('Foo');
  });

});