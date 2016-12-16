/*JavaScript “Set” object is a collection of unique keys. Keys are object references or primitive types.

Arrays can store duplicate values but Sets don’t store duplicate keys, this is what makes it different from arrays.

Here is code example on how to create a set object, add keys, delete keys, find size etc.*/

//create a set
var set = new Set();

//add three keys to the set
set.add({x: 12});
set.add(44);
set.add("text");

//check if a provided key is present
console.log(set.has("text"));

//delete a key
set.delete(44);

//loop through the keys in an set
for(var i of set)
{
    console.log(i);
}

//create a set from array values
var set_1 = new Set([1, 2, 3, 4, 5]); 

//size of set
console.log(set_1.size); //5

//create a clone of another set
var set_2 = new Set(set.values());