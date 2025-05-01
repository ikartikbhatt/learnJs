// const userMethods = {
//   about: function () {
//     return `${this.firstName}has ${this.lastName} with age ${this.age}`;
//   },

//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "la lal alala alal alaalala";
//   },
// };

function createUser(firstName, lastName, age) {
  const user = Object.create(createUser.prototype); //creating proto chain
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  //user.about=userMethods.about;  //writing reference/address for that object instead of creating it again and again
  //user.is18=userMethods.is18;
  return user;
}


// const user=createUser('kartik','bhatt',21)
// console.log(user);
// console.log(user.about());

//in this case createUser will also create prototype i.e. we can treat it as an empty object 

// console.log(createUser.prototype);

//so i can use this instead of making another fn --> userMethods

createUser.prototype.about=function () {
    return `${this.firstName}has ${this.lastName} with age ${this.age}`;
}

createUser.prototype.is18=function () {
    return this.age >= 18;
}

createUser.prototype.sing=function () {
    return "la lal alala alal alaalala";
}


const user1=createUser('kartik','bhatt',21)
console.log(user1);

//calling fn we stored in our prototype
console.log(user1.about());
 
