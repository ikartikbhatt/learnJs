//fn to create the object and return the object with added keyValue pair 

//input -- firstName,lastName,age


// function createUser(firstName,lastName,age) {
//       const user={}
//       user.firstName=firstName;
//       user.lastName=lastName;
//       user.age=age;
//       user.about= function() {
//         return `${this.firstName}with ${this.lastName}has ${this.age} age`
//       }
//       user.is18=function() {
//          return this.age>=18;
//       }
//       return user
//     }


// const user1=createUser('kartik','Bhatt','18');
// console.log(user1);

//in this we saw that about and is18 method are used every time we call the fn

//so we can define both the methods seprately inside the variable and use their refernce in our createUser fn


// const userMethods= {
//   about: function() {
//     return `${this.firstName}has ${this.lastName} with age ${this.age}`
//   },

//   is18:function(){
//     return this.age>=18;
//   }
// }


// function createUser(firstName,lastName,age) {
//       const user={};
//       user.firstName=firstName;
//       user.lastName=lastName;
//       user.age=age;
//       user.about=userMethods.about;  //writing reference/address for that object instead of creating it again and again
//       user.is18=userMethods.is18;
//       return user;
// }


// const user1=createUser("kartik","bhatt",8)
// //console.log(user1);

// console.log(user1.about());
// console.log(user1.is18());


//now basically the major loop in above call is that we have to write the refrence every time we create the new method in userMethod object

//to overcome this we can use proto by using .create().

// const obj1={
//   key1:"value1",
//   key2:"value2"
// }

// const obj2=Object.create(obj1);
// console.log(obj2);  //null
// obj2.key3="value3"

// console.log(obj2); //3

// //now to check proto of obj2 we can use

// console.log(obj2.__proto__);

// //now obj2 can access the key-values of obj1 also

// console.log(obj2.key2); //value2


//now using this to solve our above problem


const userMethods= {
  about: function() {
    return `${this.firstName}has ${this.lastName} with age ${this.age}`
  },

  is18:function(){
    return this.age>=18;
  },
  sing:function() {
      return 'la lal alala alal alaalala';
  }
}


function createUser(firstName,lastName,age) {
      const user=Object.create(userMethods);  //creating proto chain
      user.firstName=firstName;
      user.lastName=lastName;
      user.age=age;
      //user.about=userMethods.about;  //writing reference/address for that object instead of creating it again and again
      //user.is18=userMethods.is18;
      return user;
}


const user1=createUser("kartik","bhatt",8)
//console.log(user1);



//calling the methods
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing()); //now it will take the proto from userMethods 


//checking the proto

console.log(user1.__proto__);
