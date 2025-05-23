//keypress event
//mouseover event


// keypressevent means that the key is being held down 

const body=document.body;
const btn=document.querySelector("button"); //learnMore button

// body.addEventListener("keypress",(e) => {
//     console.log(e.key);
    
// }
// )

btn.addEventListener("mouseover",(e) => {
    console.log("mouseover event occured");
    
}
);

btn.addEventListener("mouseleave",(e) => {
    console.log("mouseleave event occured");
    
}
);