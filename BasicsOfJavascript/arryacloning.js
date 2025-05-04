//how to clone an array
//how to concatenate array

// let array1 = ['item1', 'item2']

// // let array2=array1.slice(0) //it will clone the array -- sloution 1

// //  let array2=[].concat(array1) //it will clone the array -- sloution 2

//   let array2=[...array1] // ...(arrayName) --it will clone the array using spread operator -- sloution 3




//  console.log(array2);

// console.log(array1 === array2); //false as they are now two different array in heap




//clone a arrya and append the clone array 


let a1 = ['a', 'b', 'c']

// let a2 = [...a1].concat(['d', 'e'])
// let a2 = [...a1,'d', 'e']

console.log(a2);    // ['a', 'b', 'c', 'd', 'e']
