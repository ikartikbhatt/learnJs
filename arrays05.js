// arrays

//ordered collection of elements

let fruits = ["apple", "mango"];

//array is a reference type and every reference type in js is object
console.log(typeof fruits);
console.log(fruits[1]);

//arrays are mutable
fruits[1] = "banana";
console.log(fruits[1]);

// it will give true as it will check if it is array or not
console.log(Array.isArray(fruits));

//to add something in the end of the array
fruits.push("grapes");
console.log(fruits);

// to remove something from the end of the array

fruits.pop();
console.log(fruits);
console.log(fruits.pop()); // it will give that value in return also

//to add something in the start of the array
fruits.unshift("apple");
console.log(fruits);

//to remove something from the start of the array
fruits.shift();
console.log(fruits);
console.log(fruits.shift()); // it will give that value in return also
