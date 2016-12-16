/*for of loop was introduced in ES6 which allows you to easily iterate over elements of an collection.for of iterates over the values of elements of a collection not the keys. A collection can be an array, set, list, custom collection object etc.

Earlier to ES6 we had to use for loop or Array’s foreach loop to walkthrough elements of an collection. ES6 introduced a new way for iteration.

An iterator is an construct that lets us visit or walkthrough every element of an collection.

Iterating an Array using “for of”
Here is an example code on how to iterate an array using for of loop*/

var array = [1, 3, 5, 7, 9];

//'i' references to the values of the array indexes
for(var i of array)
{
    console.log(i); //1, 3, 5, 7, 9
}
/*Internally for of loop uses @@iterator method of an collection object i.e., for a collection object to be iterable using for of it must have property with a Symbol.iterator key.

Iterating an Custom Collection Object using “for of”
We need to implement Symbol.iterator property on an custom collection. Symbol.iterator returns a Iterator object i.e., a object with next() property. next() is invoked by for of until next() returns {value: undefined, done: true}. To continue looping and return an collection element next() has to return {value: element_value, done: false}.

Here is an code example*/

var custom_collection = {
    elements:  [1, 4, 6, 9],
    size : 3,
    pointer :0,
    [Symbol.iterator]:  function(){
        var e = this.elements;
        var s = this.size;
        var p = this.pointer;
        return{
            next: function() {
                if(p > s) 
                {
                    return { value: undefined, done: true };
                } 
                else 
                {
                    p++;
                    return { value: e[p - 1], done: false };
                }
            },
        };
    }
}

for(var i of custom_collection)
{
    console.log(i); //1, 4, 6, 9
}