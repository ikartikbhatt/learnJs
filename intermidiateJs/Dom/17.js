//adding eventlistner to multiple buttons



//to apply same event listner to all three button we can do

// -> create one loop having event listner along with if else condition to verfiy which button is clicked

const allButtons=document.querySelectorAll('btn')
// console.log(allButtons); //will return the node list 


for(button of allButtons){
    
    button.addEventListener('click',function(){

        console.log(this)});
};
