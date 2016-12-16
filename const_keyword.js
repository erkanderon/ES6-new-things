/*
“const” keyword was introduced in ES6. 
It lets you define read only variables using JavaScript. 
Variables created using “const” are block scoped(or bracket scoped). 
Redeclaring a “const” variable in the same scope throws an error.
*/

const x = 12;

//an constant 'x' is already available in this scope therefore the below line throws an error when you are try to create a new x variable.
const x = 13;

if(true)
{
    //an constant 'x' is available in this scope but not defined in this scope therefore the below line will not throw error instead define a new "x" inside this scope.
    const x = 13;
    
    //here 'y' is available inside this scope not outside this scope
    const y = 11;
}

//here creating a new 'y' will not throw an error because no other 'y' is available in this scope(i.e., global scope)
const y = 12;