//array destructuring

const values=['value1','value2','value3']

//my approach 

// const var1=values[0] //value1
// const var2=values[1] //value2

// console.log(var1);
// console.log(var2);


// //destructuring

// const [var1,var2]=values;

// console.log(var1); //value1
// console.log(var2); //value2




//skipping the index
const [var1, ,var2]=values;

console.log(var1); //value1
console.log(var2); //value3


    