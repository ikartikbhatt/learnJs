//prototype
//new keyword

// function hello() {
//     console.log("hello");
    
// }


// hello();

//javascript function ==> function + object 

//we can add our own properties

//hello.myOwnProperty = "very unique"
//console.log(hello.myOwnProperty);


//function provides us free space i.e. empty object{}

// that empty object / free space is called prototype
//console.log(hello.prototype);  // {}


//only fn provides prototype properties

//check to validate 

// function hello() {
//     console.log("hello");
    
// } // here it will give the prototype ==> true

//const hello={key:'value1'} // here it will not  give the prototype ==> false
//const hello=['value1'] // here it will not  give the prototype ==> false

// if (hello.prototype) {
//     console.log('prototype is present');
    
// }
// else{
//     console.log('prototype not present');
    
// }



//using that prototype to store the value

// function hello(){

// }

// hello.prototype.abc='abc';
// hello.prototype.xyz='xyz';
// hello.prototype.sing=function() {
//         return "lalalalalalala";
// }

// console.log(hello.prototype);
// console.log(hello.prototype.sing()); //accessing





