//intro to events 

//events means something that happens in the browser


//cick event

// we will use method addEventListener() to attach an event listener to an element.
// the addEventListener() method takes two arguments: the event name and a function to be executed when the event occurs.

const btn=document.querySelector('.btn-headline')

btn.addEventListener("click",()=>{console.log('button pressed');
})

console.dir(btn.addEventListener); //return this fn in its prototype

