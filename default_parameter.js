/*ES6 provides a new syntax that can be used to define default values to function parameters:*/

function myFunction(x = 1, y = 2, z = 3)
{
     console.log(x, y, z); // Output "6 7 3"
}
myFunction(6,7);


 function myFunction(x = 1, y = 2, z = 3)
{
  	console.log(x, y, z); // Output "1 7 9"
}
myFunction(undefined,7,9);


function myFunction(x = 1, y = 2, z = 3 + 5)
{
  console.log(x, y, z); // Output "6 7 8"
}
myFunction(6,7);