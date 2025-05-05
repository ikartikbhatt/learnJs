//how js works

//compilation
//code execution

//why compliation

//how js code execute

//what is global execution context?

// --> in js code executes inside execution context which is called global execution context

//what is local execution context?
//closures

//console.log(this);

//console.log(window);

//console.log(firstName);

//var  firstName ="kartik";  //if a variable is not inside a fn then js will look for it in global scope

//console.log(firstName);




console.log(myfunc); //undefined as js will treat this  fn expression as the variable

var myfunc = function () {
  console.log("hello sup!!");

};

console.log(myfunc);
