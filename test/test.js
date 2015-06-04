// var assert = require('chai').assert;
// var expect = require('chai').expect;
var assert = require('assert');
var x = require('../main.js');

describe('Parking', function()
{

  it('Spot should contain current car once parked', function()
  {
    var xyz = new Array();
    xyz = x.parking("AAA", xyz);
    assert.equal(xyz[0], "AAA");
  })
  it('Spot should be empty when unparked', function()
  {
    var xyz = new Array();
    xyz = x.parking("AAA", xyz);
    xyz = x.parking("BBB", xyz);
    xyz = x.unParking("AAA", xyz);
    assert.equal(xyz[0], undefined);
  })
  it('When a spot is used, all spots before it must be occupied', function()
  {

  })
});
