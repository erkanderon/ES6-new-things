/*“let” keyword was introduced in ES6. 
It lets you define block scope(bracket scope) variables in JavaScript. 
Initially JavaScript only supported function scope and global scope variables.*/

if(true)
{
    let x = 12;
    alert(x); //alert's 12
}

alert(x); //x is undefined here


//“let” keyword limits the variables accessibility upto a block, statement or expression