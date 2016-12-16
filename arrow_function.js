/*ECMAScript 6 provides a new way to create functions which just contain one line of statement. 
This new type of function is called lambda or arrow function.*/


//sum is the function name
//x and y are function parameters
var sum = (x, y) => x + y;

console.log(sum(2, 900)); //902

/*
Here (x, y) => x + y returns a regular JavaScript function object. Here the function body of the returned function object’s body would be function(x, y){return x+ y;}

Arrow functions always return the value of the statement when executed. Here result of x+y is returned.

You can also write multiple statements in an arrow function but arrow functions are mostly used in replacement of single statement functions. 
Here is code example of multiple statements in an arrow function*/

var sum = (x, y) => {
    x = x + 10;
    y = y + 10;
    return x + y;
}

console.log(sum(10, 10)); //40