//call 
// apply 
// bind


const user1={
    name:'kartik',
    age: 23,
    about: function (hobby,skill){
            console.log(this.name,this.age,hobby,skill);
            
    }
}

//user1.about()

const user2={
    name:'john',
    age: 22,
    
}

//now we have to use that about for user2 also

//in call() i can define that (this) will point to which object

//user1.about.call(user2)  //john 22
//user1.about.call(user1)  //kartik 23



//user1.about.call()  //undefined

//passing different parameter in about fn

//user1.about.call(user2,"guitar","js")



//we can also define fn outside the object also and we can include about key in our object with value as fn name and could use the fn using call




//apply --same as call in this we can pass extra arguments in the form of array

//user1.about.apply(user2,["guitar","js"])



//bind -- instead of returning value it return a fn 

// const func=user1.about.bind(user1,"guitar","js")

// console.log(func); //to check what bind returns

// func();