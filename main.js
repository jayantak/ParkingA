var spaces = new Array();

function parking(id)
{
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
      document.getElementById('output1').innerHTML = "The car has been parked at spot number "+(i+1);
      break;
    }
  }
}

function unParking(id)
{
  var flag = 0;
  for(i=0; i<spaces.length; i++)
  {
    if(spaces[i]==id)
    {
      spaces[i] = undefined;
      document.getElementById('output2').innerHTML = "Your car was found at spot number "+(i+1);
      flag = 1;
      break;
    }
  }
  if(!flag)
    alert("Car not found. Check Car ID and try again.")
}
