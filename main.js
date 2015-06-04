var parkingLot = function()
{
  var max = 3;
  var fsb = 0;
  var carsParked = 0;
  var spaces = new Array();
  }

parkingLot.initialise = function()
{
  max = 3;
  fsb = 0;
  carsParked = 0;
  spaces = new Array();
}

parkingLot.checkLimit = function()
{
  return max;
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
        // alert("Car ID repeat. Please try again.")
        break;
      }
      if(spaces[i]==undefined)
      {
        carsParked++;
        spaces[i] = id;
        parkingLot.checkFull();
        // document.getElementById('output1').innerHTML = "The car has been parked at spot number "+(i+1);
        break;
      }

    }
    return spaces;
  }

  parkingLot.unParking = function(id, spaces)
  {

    var found = 0;
    for(i=0; i<spaces.length; i++)
    {
      if(spaces[i]==id)
      {
        spaces[i] = undefined;
        carsParked--;
        // document.getElementById('output2').innerHTML = "Your car was found at spot number "+(i+1);
        found = 1;
        parkingLot.checkFull();
        break;
      }
    }
    // if(found == 0)
      // alert("Car not found. Check Car ID and try again.");

      return spaces;
}

module.exports = parkingLot;
