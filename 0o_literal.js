/*“0o” is a new way of creating a number using octal value in ES6. Earlier to ES6, JS developers had to use “0” in front of numbers to specify its a octal number.

JavaScript internally converts hexadecimal and octal numbers to decimal and then stores them as binary.

Here is code example:*/

//Before ES6
var a = 012; 
console.log(a); //10

//ES6
var b = 0o12;
console.log(b); //10
//So in ES6 its more easier to identify octal numbers.