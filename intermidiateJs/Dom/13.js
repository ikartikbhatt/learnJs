//clone Nodes

const todoSection=document.querySelector('.todo-section')
console.log(todoSection);

const li=document.createElement("li");
li.textContent='added by backend first node';
console.log(li);


todoSection.append(li);
console.log(todoSection);

const li1=document.createElement('li')
li1.textContent='added by backend second node'

todoSection.append(li1)  //it will come after li

//todoSection.prepend(li1) //it will replace the append of li1 and do the prepend

//we can only perform one action for one node 

//to resolve this we will clone the node

const li3=li1.cloneNode(true); //to do deep cloning (to clone child nodes of that nodes also) set the value to true
todoSection.prepend(li3)