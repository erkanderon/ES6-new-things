/*ECMAScript 6 specification introduced a new JavaScript feature called as JavaScript Generators. JavaScript’s yield keyword and function*() syntax together make JS Generators.

In nutshell JavaScript generators provide a new way for functions to return a collection and also a new way of looping(or iterating) through the elements of the returned collection.

Earlier to JavaScript Generators you would do something like this*/

function collection_name()
{
    return [1, 3, 5, 7];
}

var collection = collection_name();

for(var iii = 0; iii < collection.length; iii++)
{
    console.log(collection[iii]);
}
Here is how you can do the same using Generators

function* collection_name()
{
    yield 1;
    yield 3;
    yield 5;
    yield 7;
}

for(var iii  of collection_name())
{
    console.log(iii);
}
/*Internally JavaScript creates a object with Symbol.
iterator property from the yielded values which is what for of construct needs for iterating a collection.*/