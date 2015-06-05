var assert = require('assert');
var pLot = require('../main.js');

describe('Parking Testing', function()
{

  it('Spot should contain current car once parked', function()
  {
    pLot.initialise(2);
    pLot.parking("AAA");
    assert.equal(pLot.findCar("AAA"), "1");

  })

  it('Spot should be empty when unparked and other spaces must remain the same', function()
  {
    pLot.initialise(5);
    pLot.parking("AAA");
    pLot.parking("BBB");
    pLot.unParking("AAA");
    assert.equal(pLot.isFree(1),1);
    assert.equal(pLot.isFree(2),0);
  })

  // it('When a spot is used, all spots before it must be occupied', function()
  // {
  //   pLot.initialise();
  //
    // var testLength = pLot.checkLimit(), testID, i;
    // for(i = 0; i<testLength; i++)
    // {
    //   testID = 2*i;
    //   pLot.parking(testID.toString());
    // }
    // testID-=2;
    // pLot.unParking(testID.toString());
    // testID-=2;
    // pLot.unParking(testID.toString());
    // pLot.parking("TEST");
    // i = 0;
    // while(pLot.carAt(i++) != "TEST")
    // {
    //   assert.notEqual(pLot.carAt(i), undefined);
    // }
  // })

  it('Check should return full when parking lot is full', function()
  {
    pLot.initialise(5);
    var testLength = pLot.checkLimit();
    for(i = 0; i<testLength; i++)
    {
      testID = 2*i;
      pLot.parking(testID.toString());
    }
    assert.equal(pLot.checkFull(), 1);
  })

  it('Check should return not full when there is space', function()
  {
    pLot.initialise(5);
    var testLength = pLot.checkLimit();
    for(i = 0; i<testLength; i++)
    {
      testID = 2*i;
      spaceTest = pLot.parking(testID.toString());
    }
    pLot.unParking("2");
    assert.equal(pLot.checkFull(), 0);
  })

  it('Correct spot must be returned when we search for a car', function()
  {
    pLot.initialise(5);
    pLot.parking("AAA");
    pLot.parking("BBB");
    pLot.unParking("AAA");
    assert.equal(pLot.findCar("AAA"), -1, 'Unparked cars do not register as not found');
    assert.equal(pLot.findCar("BBB"), 2, 'Parked car not found in right spot');
  })

});
