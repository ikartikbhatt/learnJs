//arrow function

//function expression -- where we store our function in an variable
const happyBirthday = function () {
  console.log("happy birthday");
};

happyBirthday();

//arrow function

const HappyBirthday = () => {
  console.log("happy birthday by arrow function");
};

HappyBirthday();

// arrow function with parameters

const isEven = (num) => {
  return num % 2 === 0;
};

console.log(isEven(3));

// arrow function with multiple parameters

const input = [2, 3, 4, 5, 6, 7, 8, 9, 0];
const target = 4;
const targetIndex = (input, target) => {
  for (const inputs of input) {
    if (inputs == target) {
      return input.indexOf(target);
    }
  }
};

console.log(targetIndex(input, target));
