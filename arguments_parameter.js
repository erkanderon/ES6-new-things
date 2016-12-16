/*
	ES6 introduced “…” operator which is also called as spread operator. When “…” operator is applied on an array it expands the array into multiple variables in syntax wise. And when its applied to an function argument it makes the function argument behave like array of arguments.

	We can use spread operator to take indefinite number of arguments.
*/


//args variable is an array holding the passed function arguments
function function_one(...args)
{   
    console.log(args);
    console.log(args.length);
}

function_one(1, 4);
function_one(1, 4, 7);
function_one(1, 4, 7, 0);


function function_two(a, b, ...args)
{
    console.log(args);
    console.log(args.length);
}

//"args" holds only 7 and 9
function_two(1, 5, 7, 9);