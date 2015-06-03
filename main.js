var abc = {};
var spaces;

  spaces = new Array();


abc.parking = function(id, spaces)
{
  //'use strict';
  for(i = 0; i<=spaces.length; i++)
  {
    if(spaces[i]==id)
    {
       alert("Car ID repeat. Please try again.")
      break;
    }
    if(spaces[i]==undefined)
    {
      spaces[i] = id;
      // document.getElementById('output1').innerHTML = "The car has been parked at spot number "+(i+1);
      break;
    }

  }
  return spaces;
}

abc.unParking = function(id, spaces)
{
  // 'use strict';
  var flag = 0;
  for(i=0; i<spaces.length; i++)
  {
    if(spaces[i]==id)
    {
      spaces[i] = undefined;
      // document.getElementById('output2').innerHTML = "Your car was found at spot number "+(i+1);
      flag = 1;
      break;
    }
  }
  if(!flag)
    // alert("Car not found. Check Car ID and try again.");
    return spaces;
}

module.exports = abc;
