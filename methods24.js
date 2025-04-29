//methods

//when we write function inside the object


const person={
    name:'kartik',
    age:'21',
    about: function(){
        console.log(`hey my name is ${this.name} what i wrote and age is ${this.age}`);
       //console.log(this); //this is the object from this function 
        
    }
}


// access/call the fn (method)

person.about();

