//class keyword

//classes are fake in js

class CreateUser {
  constructor(firstName, lastName, age) {
    console.log("constructor called");

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  about() {
    return `${this.firstName} has ${this.lastName} with age ${this.age}`;
  }
  is18() {
    return this.age >= 18;
  }
}

const user1 = new CreateUser("kartik", "bhatt", 18);
//console.log(user1);

//console.log(Object.getPrototypeOf(user1)); //to check prototype

//animal class -- 2 property name,age --2 method eat

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

const animal = new Animal("guinea pig", 3);

console.log(animal);



//inheritance  -- inheriting the property of parent/base class by the child/sub class

class Dog extends Animal {
    constructor(name,age,speed){
        super(name,age); //means we will use super/parent class constructor for name and age
        this.speed=speed;
    }
    run(){
        return `${this.name} is has speed of ${this.speed}`;
    }
}


const dog = new Dog("tuffy", 3,45);
console.log(dog);
console.log(dog.run());

