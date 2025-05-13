//closures
//closures : 30-40%
//analyse  : 70-80%

//fns can return the fns

function outerfn() {
  function innerfn() {
    console.log("hello from inner");
  }
  return innerfn;
}

const ans = outerfn();
//console.log(outerfn);  --> return the fn
//ans();

function printFullName(firstName, lastName) {
  function printName() {
    console.log(`${firstName} ${lastName}`);
  }
  return printName;
}

//const output = printFullName("John","Doe");
//output();

//fn to give square or cube of a number

// function myfunc(power) {
//   return function (number) {
//     return number ** power;
//   };
// }

// const square = myfunc(2);
// console.log(square(9));



// create a fn which will throw a message if called more than one time

function func() {
    let counter=0
    return function() {
    if (counter<1) {
      console.log("hey i am called");
      counter++
    }
    else{
        console.log('already been called');
               
    }
  
}
}

const myfunc=func();
myfunc() // hey i am called
myfunc() // already been called


