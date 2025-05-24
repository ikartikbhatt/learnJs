const child=document.querySelector(".child");
const parent=document.querySelector(".parent");
const grandparent=document.querySelector(".grandparent");
const body=document.body;


//event not capturing

// child.addEventListener("click",(e) => {
//         console.log('child clicked');
        
// }
// );


// parent.addEventListener("click",(e) => {
//     console.log('parent clicked');
    
// }
// );  

// grandparent.addEventListener("click",(e) => {
//     console.log('grand parent clicked');
    
//     }
// );  


// body.addEventListener("click",(e) => {
//     console.log('body clicked');
    
// }
// );  


// //after this if we will click on child then both event will get trigger this will happen because child is inside parent so parent event will get trigger first and then child event will get trigger.


// //This is called event bubbling/propogation.

// //event bubbling means when we click on child then event will first trigger on child then on parent then on grandparent and then on body.








// //event capturing -- we will set the boolean value to true in eventlistner to captur the event 


// child.addEventListener("click",(e) => {
//     console.log('child event captured');
    
// },
// true
// );


// parent.addEventListener("click",(e) => {
// console.log('parent event captured');

// },
// true
// );  

// grandparent.addEventListener("click",(e) => {
// console.log('grand parent event captured');

// },
// true
// );  


// body.addEventListener("click",(e) => {
// console.log('body event captured ');

// },
// true
// ); 




//event deligation

//it means instead of creating diff events we can use single event. 



grandparent.addEventListener("click",(e) => {
        console.log(e.target);
        
},
)
