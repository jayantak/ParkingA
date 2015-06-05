var parkingLot = function()
{
  var max;
  var carsParked;
  var spaces;
  var freeSpaces;
  }

parkingLot.initialise = function()
{
  max = 5;
  carsParked = 0;
  spaces = new Object();
  freeSpaces = new Array();
  for(i = 1; i<=max; i++)
  {
    freeSpaces[i] = (max-i)+1;
  }
}

parkingLot.checkLimit = function()
{
  return max;
}

parkingLot.carAt = function(slot)
{
  return spaces.indexOf(slot);
}

parkingLot.carsInLot = function()
{
  return carsParked;
}

parkingLot.findCar = function(id)
{
  if(spaces[id])
  {
    return spaces[id];
  }
  else
  {
    return -1;
  }
}

parkingLot.checkFull = function()
{
  if(carsParked >= max)
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

parkingLot.parking = function(id)
{
  if((spaces[id])||(parkingLot.checkFull()))
  {
    return;
  }
  carsParked++;
  spaces[id] = freeSpaces.pop();
  parkingLot.checkFull();
}

parkingLot.unParking = function(id)
{
  freeSpaces.push(spaces[id])
  carsParked--;
  delete(spaces[id]);
  parkingLot.checkFull();
}

module.exports = parkingLot;
