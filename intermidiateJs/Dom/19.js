 //how event works behind the scene
console.log('script start');

const allButtons=document.querySelectorAll('.btn');

console.log(allButtons);

//add event listener to all buttons

allButtons.forEach((buttons) => {
    buttons.addEventListener('click',function(e){
        let num=0;
        for(let index = 0; index<= 1000000000; index++) { //for loop to set the delay
            num += index;
            
        }
        console.log(e.currentTarget.textContent , num);
        
    })
    
});

let outervar=0;
for(let i=0; i<=100000000; i++){   //fot loop to set the delay
    outervar+=i;
}
console.log('value of outer variable is ', outervar);

console.log('script end !!!');
