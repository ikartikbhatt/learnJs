//getters and setters
class Person {
    constructor(firstName,lastName,age) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName(){  //need to use get in a method to treat it as a property of that object 
    return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        //fullName.split(" ")
        //it will check for space and will split it and give us the list in which we can do destuctring  
        const [firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }

}


const person1= new Person('kartik','bhatt',21)
console.log(person1);

//console.log(person1.fullName()); --> treating as a method

//getters are used when we need to treat a method as the properties
//console.log(person1.fullName);





//calling that setter
person1.fullName="aryan giri"
console.log(person1);






