var parkingLot = function()
{
  var max;
  var fsb;
  var carsParked;
  var spaces;
  }

parkingLot.initialise = function()
{
  max = 5;
  fsb = 0;
  carsParked = 0;
  spaces = new Array();
}

parkingLot.checkLimit = function()
{
  return max;
}

parkingLot.findCar = function(id, spaces)
{
  for(i=0; i<spaces.length; i++)
  {
    if(spaces[i]==id)
    {
      return i;
    }
  }
  return -1;
}

parkingLot.checkFull = function()
{
  if(carsParked >= max)
  {
    fsb = 1;
  }
  else
  {
    fsb = 0;
  }
  return fsb;

}

  parkingLot.parking = function(id, spaces)
  {
    for(i = 0; (i<=spaces.length)&&(parkingLot.checkFull()==0); i++)
    {
      if(spaces[i]==id)
      {
        break;
      }
      if(spaces[i]==undefined)
      {
        carsParked++;
        spaces[i] = id;
        parkingLot.checkFull();
        break;
      }

    }
    return spaces;
  }

  parkingLot.unParking = function(id, spaces)
  {
    var spot = parkingLot.findCar(id, spaces);
    if(spot==-1)
    {
      return spaces;
    }
    spaces[spot] = undefined;
    carsParked--;
    parkingLot.checkFull();
    return spaces;
}

module.exports = parkingLot;
