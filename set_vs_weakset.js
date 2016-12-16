/*JavaScript Set and WeakSet objects allows you to store collection of unique keys. But there are some key differences between them. Here are the differences:

They both behave differently when a object referenced by their keys gets deleted. Lets take the below example code:*/
var set = new Set();
var weakset = new WeakSet();

(function(){
    var a = {x: 12};
    var b = {y: 12};

    set.add(a);
    weakset.add(b);
})()
/*One the above self invoked function is executed there is no way we can reference {x: 12} and {y: 12} anymore. Garbage collector goes ahead and deletes the key b pointer from “WeakSet” and also removes {y: 12} from memory. But in case of “Set”, the garbage collector doesn’t remove a pointer from “Set” and also doesn’t remove {x: 12} from memory.

So “Set” can cause more garbages in memory. We can say that “Set” references are strong pointer whereas “WeakSet” references are weak pointers.

“WeakSet” keys cannot be primitive types. Nor they can be created by an array or another set.*/
var set = new Set([1,2,3,4]);

//cannot be created from array or another set
var weakset = new WeakSet();
weakset.add({a: 1}); //object reference must
//“WeakSet” doesn’t provide any methods or functions to work with the whole set of keys. For example: size, looping etc.
var set = new Set([1,2,3,4]);

//cannot be created from array
var weakset = new WeakSet();
weakset.add({a: 1}); //object reference must

console.log(set.size);//4
console.log(weakset.size);//undefined

for(var i of set)
{
    console.log(i); //1,2.3.4
}

//doesn't execute throws error
for(var i of weakset)
{
    console.log(i);
}

set.clear();
weakset.clear(); //This works