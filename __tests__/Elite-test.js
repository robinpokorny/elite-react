jest.dontMock('../src/elite/index.js');

describe('Elite', function() {
  it('is included in a grid', function() {
    var React = require('react/addons');
    var Elite = require('../src/elite/index.js');
    var TestUtils = React.addons.TestUtils;

    var companies = [{
      "id": 1,
      "name": "Testing",
      "image": "logo.png",
      "officeImage": "foto.png",
      "url": "http://example.com\/",
      "displayUrl": "example.com",
      "adCount": 10,
      "shortDisplayUrl": "ceskatelevize.jobs.cz"
    }];

    var elite = TestUtils.renderIntoDocument(
      <Elite companies={companies} />
    );

    // Verify that the root node is a grid div
    expect(elite.getDOMNode().nodeName.toLowerCase()).toEqual('div');
    expect(elite.getDOMNode().className).toEqual('grid');
  });
});