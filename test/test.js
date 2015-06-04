var assert = require('assert');
var pLot = require('../main.js');

describe('Parking', function()
{

  it('Spot should contain current car once parked', function()
  {
    var spaceTest = new Array();
    spaceTest = pLot.parking("AAA", spaceTest);
    assert.equal(spaceTest[0], "AAA", spaceTest);

  })
  it('Spot should be empty when unparked and other spaces must remain the same', function()
  {
    var spaceTest = new Array();
    spaceTest = pLot.parking("AAA", spaceTest);
    spaceTest = pLot.parking("BBB", spaceTest);
    spaceTest = pLot.unParking("AAA", spaceTest);
    assert.equal(spaceTest[0], undefined);
    assert.equal(spaceTest[1], "BBB")
  })
  it('When a spot is used, all spots before it must be occupied', function()
  {

  })
});
