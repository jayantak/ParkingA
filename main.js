var parkingLot = function()
{
  var max;
  var fsb;
  var carsParked;
  var spaces;
  var freeSpaces;
  }

parkingLot.initialise = function()
{
  max = 5;
  fsb = 0;
  carsParked = 0;
  spaces = new Object();
  freeSpaces = new Array();
  debugger;
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
  debugger;
    return spaces.indexOf(slot);
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
  // for(i=0; i<spaces.length; i++)
  // {
  //   if(spaces[i]==id)
  //   {
  //     return i;
  //   }
  // }
  // return -1;
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

parkingLot.parking = function(id)
{
  if((spaces[id])||(parkingLot.checkFull()))
  {
    return;
  }
  carsParked++;
  spaces[id] = freeSpaces.pop();
  parkingLot.checkFull();

  // for(i = 0; (i<=spaces.length)&&(parkingLot.checkFull()==0); i++)
  // {
  //   if(spaces[i]==id)
  //   {
  //     break;
  //   }
  //   if(spaces[i]==undefined)
  //   {
  //     carsParked++;
  //     spaces[i] = id;
  //     parkingLot.checkFull();
  //     break;
  //   }


}

parkingLot.unParking = function(id)
{
  // var spot = parkingLot.findCar(id);
  // if(spot==-1)
  // {
  //   return;
  // }
  freeSpaces.push(spaces[id])
  carsParked--;
  delete(spaces[id]);
  parkingLot.checkFull();
  // spaces[spot] = spaces[spaces.length - 1];
  // spaces[spaces.length - 1] = undefined;
}

module.exports = parkingLot;
