//constructor fn

//fn which returns the object

//naming convention --  start with uppercase e.g. --> CreateUser()

function CreateUser(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;    
}

const user =  new CreateUser("kartik", 18);
console.log(user);
 