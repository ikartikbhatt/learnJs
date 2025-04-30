//methods

//when we write function inside the object

//first approach

// const person={
//     name:'kartik',
//     age:'21',
//     about: function(){
//         console.log(`hey my name is ${this.name} what i wrote and age is ${this.age}`);
//        //console.log(this); //this is the object from this function

//     }
// }

// // access/call the fn (method)

// person.about();

//second approach

// function personInfo(){
//     console.log(`my name is ${this.name} and my age is ${this.age}`)
// }

// const person1={
//     name:'kartik',
//     age:21,
//     about:personInfo
// }

// const person2={
//     name:'john',
//     age:26,
//     about:personInfo
// }

// const person3={
//     name:'rex',
//     age:28,
//     about:personInfo
// }

//person1.about() //my name is kartik and my age is 21
//person2.about() //my name is john and my age is 26
//person3.about() //my name is rex and my age is 28

//don't do mistake

const person3 = {
  name: "rex",
  age: 28,
  about: function () {
    console.log(this.name, this.age);
  },
};


//person3.about() //rex 28


//if we store the function in variable then what will be the output ?

const ans= person3.about
console.log(ans); //undefined as we haven't called the fn yet 
ans()


//to resolve this error we can use bind()

// const ans1=person3.about.bind(person3)
// ans1();
