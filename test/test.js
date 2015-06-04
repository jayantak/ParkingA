var assert = require('assert');
var pLot = require('../main.js');

describe('Parking', function()
{

  it('Spot should contain current car once parked', function()
  {
    debugger;
    var spaceTest = new Array();
    pLot.initialise();
    spaceTest = pLot.parking("AAA", spaceTest);
    assert.equal(spaceTest[0], "AAA");

  })

  it('Spot should be empty when unparked and other spaces must remain the same', function()
  {
    var spaceTest = new Array();
    pLot.initialise();
    spaceTest = pLot.parking("AAA", spaceTest);
    spaceTest = pLot.parking("BBB", spaceTest);
    spaceTest = pLot.unParking("AAA", spaceTest);
    assert.equal(spaceTest[0], undefined);
    assert.equal(spaceTest[1], "BBB")
  })

  it('When a spot is used, all spots before it must be occupied', function()
  {
    var spaceTest = new Array();
    pLot.initialise();
    var testLength = pLot.checkLimit(), testID, i;
    for(i = 0; i<testLength; i++)
    {
      testID = 2*i;
      spaceTest = pLot.parking(testID.toString(), spaceTest);
    }
    testID-=2;
    spaceTest = pLot.unParking(testID.toString(), spaceTest);
    testID-=2;
    spaceTest = pLot.unParking(testID.toString(), spaceTest);
    spaceTest = pLot.parking("TEST", spaceTest);
    i = 0;
    while(spaceTest[i++] != "TEST")
    {
      assert.notEqual(spaceTest[i], undefined);
    }
  })

  it('Check should return full when parking lot is full', function()
  {
    var spaceTest = new Array();
    pLot.initialise();
    var testLength = pLot.checkLimit();
    for(i = 0; i<testLength; i++)
    {
      testID = 2*i;
      spaceTest = pLot.parking(testID.toString(), spaceTest);
    }
    assert.equal(pLot.checkFull(), 1);
  })

  it('Check should return not full when there is space', function()
  {
    var spaceTest = new Array();
    pLot.initialise();
    var testLength = pLot.checkLimit();
    for(i = 0; i<testLength; i++)
    {
      testID = 2*i;
      spaceTest = pLot.parking(testID.toString(), spaceTest);
    }
    spaceTest = pLot.unParking("2", spaceTest);
    assert.equal(pLot.checkFull(), 0);
  })

  it('Correct spot must be returned when we search for a car', function()
  {
    var spaceTest = new Array();
    pLot.initialise();
    spaceTest = pLot.parking("AAA", spaceTest);
    spaceTest = pLot.parking("BBB", spaceTest);
    spaceTest = pLot.unParking("AAA", spaceTest);
    assert.equal(pLot.findCar("AAA", spaceTest), -1, 'Unparked cars do not register as not found');
    assert.equal(pLot.findCar("BBB", spaceTest), 1, 'Parked car not found in right spot');
  })


});
