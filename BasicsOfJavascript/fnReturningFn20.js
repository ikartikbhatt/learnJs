//normal function
// function myfunc() {
//     return 1;
// }

// console.log(myfunc());




//function returning function

function printName(name) {
    function greet() {
        console.log(`hello ${name}`);
        
    }
    return greet;
}

const output=printName('kartik'); //eventually output has become a function which we can call

//console.log(output); //it will return the inside function i.e. greet()

output();