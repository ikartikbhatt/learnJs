//callback
//accepting function as a input in a function and calling that function


const myfunc2 = () => {
    console.log('hello from myfunc2');
    
}

const myfunc = (callback) => {
    console.log("hello ji");
    callback();
};



myfunc(myfunc2);
