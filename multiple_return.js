/*There were many different ways purposed by JavaScript developers for returning multiple values in an function. 
But ECMAScript 6 has come up with an easy way to do it.*/

function function_name()
{
    return [1, 6, 7, 4, 8, 0]; //here we are storing variables in an array and returning the array
}

var q, w, e, r, t, y;

//Here we are using ES6's array destructuring feature to assign the returned values to variables.
//Here we are ignoring 2 and 4 array indexes
[q, w, , r, , y] = function_name();

alert(y);//y is 0