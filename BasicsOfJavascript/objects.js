//objects -- refernce type
//key value pair
//object don't have index


const person={
    name:"John", //key:value 
    age:30, 
    city:"New York",     
    hobbies:['dancing','playing','watching']
}

//console.log(typeof(person));
//console.log(person);


//to access key of the object;


// // to access values or key in an object 
// console.log(person.name);



// //to access array in an object
// console.log(person.hobbies);


// //to access specific value of an array inside the obeject
// console.log(person.hobbies[1]);


// // insert key value pair
// person.gender='male';
// console.log(person);


// to append the key in object as per the refernce vairable value


// const key='email';

// person[key]="kartikbhatt@gmail.com"
// console.log(person);





//to iterate in objects we use two approaches

//for in loop
//object.keys


// for(let key in person){
//     //console.log(person[key]);
//     console.log(`${key}: ${person[key]}`);
    
// }



//object.keys

// console.log( Object.keys(person));
