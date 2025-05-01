//new keyword

// function createUser(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }


// createUser.prototype.about=function(){
//     console.log(this.firstName,this.age);
    
// }

// const user = new createUser("kartik", 16);

//here new will be doing three things
// 1) create empty object and make it equal to  --> this = {}
// 2) return  --> this = {}
// 3) const user=Object.create(userMethods);  //new keyword will also create the proto chain
    //   i.e. it will set the proto equal to the fn prototype automatically


// console.log(user);
// user1.about()



//improvise code 

function createUser(firstName, lastName, age) {
    //const user = Object.create(createUser.prototype); //creating proto chain
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    console.log('printing this\n' , this);
    return this;
    
  }
  
  
  
  createUser.prototype.about=function () {
      return `${this.firstName}has ${this.lastName} with age ${this.age}`;
  }
  
  createUser.prototype.is18=function () {
      return this.age >= 18;
  }
  
  createUser.prototype.sing=function () {
      return "la lal alala alal alaalala";
  }
  
  
  const user1= new createUser('kartik','bhatt',21)
  //console.log(user1);

  
  //calling fn we stored in our prototype
  console.log(user1.about());