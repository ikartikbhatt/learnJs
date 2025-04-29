//function inside function

// const app = () => {
//   console.log("hello from outer function");

//   const innerApp = () => {
//     console.log("hello form inner function");
//   };
//   innerApp();   //hello form inner function
// };

// app(); //hello from outer function




//lexical scope

// it means that variables defined in an outer function are accessible in inner functions, but not vice versa.
const test = () => {
  const var1 = "value1";
  console.log("This is a test of lexical scope." + var1);

    const test1= () =>{
        const var1='value2';
        console.log(var1);
        
    }
    test1();
};

test();
