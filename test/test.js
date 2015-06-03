// var assert = require('chai').assert;
// var expect = require('chai').expect;
var assert = require('assert');
var x = require('../main.js');

describe('Parking', function()
{
  before(function()
  {
    // x.initi();
  })
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
    console.log(xyz);
    xyz = x.parking("BBB", xyz);
    console.log(xyz);
    xyz = x.unParking("AAA", xyz);
    console.log(xyz);
    assert.equal(xyz[0], undefined);
  })

});
