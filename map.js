/*JavaScript “Map” object is a collection of unique keys and corresponding values. Keys and Values can be object references or primitive types.

2D Arrays can store duplicate values but Maps don’t store duplicate keys, this is what makes it different from 2D arrays.

A JavaScript “Set” object can store only keys but “Map” can store key and value pairs.

Here is code example on how to create a Map object, add keys, delete keys, find size etc.*/

//create a map
var map = new Map();

//add three keys & values to the map
map.set({x: 12}, 12);

//same key is overwritten
map.set(44, 13);
map.set(44, 12);

//check if a provided key is present
console.log(map.has(44)); //true

//retrieve key
console.log(map.get(44)); //12

//delete a key
map.delete(44);

//loop through the keys in an map
for(var i of map)
{
    console.log(i);
}

//delete all keys
map.clear();

//create a map from arrays
var map_1 = new Map([[1, 2], [4, 5]]); 

//size of map
console.log(map_1.size); //2