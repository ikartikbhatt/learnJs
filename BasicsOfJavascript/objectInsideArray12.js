//very useful in real world applications


//for eg storing user information in array of objects
const users=[
    {
        user1:'kartik',
        age:20
    
    },
    
    {
        user2:'rahul',
        age:21
    },
    
    {
        user3:'aryan',
        age:22
    }

]


//accessing user information
// console.log(users);


// console.log(users[0].user1); //accessing user1 from first object in array
// console.log(users[1].age); //accessing age from second object in array


//nested destructuring

const [newArr=user1,user2,user3]=users;

console.log(newArr); //it will give the full user1 object

console.log(newArr.user1); //kartik


