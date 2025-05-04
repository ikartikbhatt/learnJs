//default parameter

// const sum = (a, b = 2) => {
//   return a + b;
// };

// console.log(sum(4)); //6

//rest parameters
// it means we can store left over value in a variable in form of an array
// const addnumbers = (a, b, ...c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// addnumbers(2, 3, 4, 5, 6, 7, 8, 9);


//write a fn to get the sum of all the arguments regardless of the arguments passed in a function

// const addAll = (...numbers) => {
//   let sum = 0;
//   for (const number of numbers) {
//     sum = sum + number;
//   }

//   console.log(sum);
// };

// addAll(1, 2, 3, 4, 5, 6, 7, 8,9,10,11);

