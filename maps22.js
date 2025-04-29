//maps -- iterable -- store data in order fashion

//key value pair
//any type of key can be set in map either number or string
const person= new Map();
person.set('firstName','kartik')
person.set('age','21')
person.set(1,'one')

console.log(person);

console.log(person.get('age'));  //get is the method to fetch the value
console.log(person.keys());  //get is the method to fetch the value
