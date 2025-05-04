//important array methods

//foreach
//map   --imp
//filter
//reduce --imp
//sort
//find

///////////////////////////////////////////////////////////////////////////////////////

//forEach

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

//fn will take first element and print the index of that element and multiply the first number with 2

// const indexArray = (number, index) => {
//   console.log(`index of the first element of the array is ${index}`);
//   console.log(
//     `multiplying the first element of the array with 2 is ${number * 2}`
//   );
// };

// numbers.forEach(indexArray);  //foreach will take callback as a function

//function to multiply all number by 2 using foreach

// numbers.forEach(function multipleOf2(num) {
//     console.log(`${num}*2 is ${num*2}`);

// })

// /real life example

// const users = [
//   {
//     firstName: "kartik",
//     city: "delhi",
//     job: "dev",
//   },
//   {
//     firstName: "kartik1",
//     city: "delhi1",
//     job: "dev1",
//   },
//   {
//     firstName: "kartik2",
//     city: "delhi2",
//     job: "dev2",
//   },
//   {
//     firstName: "kartik3",
//     city: "delhi3",
//     job: "dev3",
//   },
// ];

// users.forEach(function userName(user) {
//   console.log(user.firstName);
// });

///////////////////////////////////////////////////////////////////////////////////////

//map method -- it will also take input as a callback function and will RETURN the output in the new array

// const numbers = [1, 2, 4, 5, 6, 7, 3];

// const squareNumbers = numbers.map(function numberSquare(num) {
//     return num * num;
// });

// console.log(squareNumbers);

///real life example

// const users = [
//   {
//     firstName: "kartik",
//     city: "delhi",
//     job: "dev",
//   },
//   {
//     firstName: "kartik1",
//     city: "delhi1",
//     job: "dev1",
//   },
//   {
//     firstName: "kartik2",
//     city: "delhi2",
//     job: "dev2",
//   },
//   {
//     firstName: "kartik3",
//     city: "delhi3",
//     job: "dev3",
//   },
// ];

// const userFirstNameList=users.map((user)=>{
//     return user.firstName;
// });

// console.log(userFirstNameList);

///////////////////////////////////////////////////////////////////////////////////////

//Filter Method --it expects a boolean value as a inout from the callback fn and will store true values in new array

// const numbers = [1, 2, 4, 5, 6, 7, 3];

// const IsEven = numbers.filter((num) => {
//   return num % 2 === 0; //should return a boolean value
// });

// console.log(IsEven); //[2, 4, 6]  //only store the true values

///////////////////////////////////////////////////////////////////////////////////////

//reduce method

// const numbers = [1, 2, 4, 5, 6, 7, 3];

// //sum of all the numbers in an array

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// //console.log("total", sum);

// // accumulator  , currentValue , return
// // 1                  2           3
// // 3                  4           7
// // 7                  5           12
// // 12                 6           18
// // 18                 7           25
// // 25                 3           28

// const userCart = [
//   { productId: 1, product: "mobile", price: 12000 },
//   { productId: 2, product: "laptop", price: 13000 },
//   { productId: 3, product: "tv", price: 15000 },
//   { productId: 4, product: "ps5", price: 16000 },
// ];

// //here we want the total of this items

// const total= userCart.reduce((accumulator,currentValue)=>{
//             return accumulator + currentValue.price
// },0);  //0 will be the initial value of the accumulator

// console.log(total);

////////////////////////////////////////////////////////////////////////////////////////

//sort method

// it changes the array and it sorts the array into ascending to descending based on their ASCII values.

// numbers = [5, 9, 1200, 56];

// console.log(numbers);

// numbers.sort(); //it will change the array
// console.log(numbers); //sorted as per their ASCII chart value

//explanation
//[5,9,1200,56]

//['5','9','1200','56'] -- it will change the array numbers into string first

//then it will pick first letter from every number and sort based on their ASCII values

//to get expected output
// / we can give that a callback fn

// numbers = [5, 9, 1200, 56];
// numbers.sort((a,b)=>a-b); //it will change the array

// //a-b ==> to sort in ascending order
// //b-a ==> to sort in descending order

// console.log(numbers);

// const products = [
//   {
//     productid: 1,
//     price: 20,
//     productname: "Wireless Mouse",
//   },
//   {
//     productid: 2,
//     price: 10,
//     productname: "Bluetooth Headphones",
//   },
//   {
//     productid: 3,
//     price: 30,
//     productname: "USB-C Adapter",
//   },
// ];

// //sorting products from low to high without changing the original array

// const lowToHigh = products.slice(0).sort((a, b) => {
//   return a.price - b.price;
// });

// console.log("product list", products);

// console.log("low to high", lowToHigh);

///////////////////////////////////////////////////////////////////////////////////////

//find method

// const products = [
//   {
//     productid: 1,
//     price: 20,
//     productname: "Wireless Mouse",
//   },
//   {
//     productid: 2,
//     price: 10,
//     productname: "Bluetooth Headphones",
//   },
//   {
//     productid: 3,
//     price: 30,
//     productname: "USB-C Adapter",
//   },
// ];

// const findProducts= products.find((product)=>{
//     return product.productid==3;
// })

// console.log(findProducts);

///////////////////////////////////////////////////////////////////////////////////////

//fill method

// const myArry=new Array(10).fill(2)
// console.log(myArry);

//also used in replacing

//const myArr=[1,2,3,4,5,6,7]

//need to replace 3 and 5 with 0

//console.log(myArr.fill(0,2,5));  //2 and 5 is the starting and ending index

///////////////////////////////////////////////////////////////////////////////////////

//splice method
//start , delete , insert

const myArry = ["item1", "item2", "item3"];

//delete
//myArry.splice(1,1);

//insert

// myArry.splice(3,0,'item4') //3 is the index where i want to insert the value

// console.log(myArry); //['item1', 'item3']
