//elem.insertAdjacentHTML(where,html)
//beforebegin;
//afterbegin;
//beforeend;
//afterend

const todoList=document.querySelector('.todo-section')
console.log(todoList);

todoList.insertAdjacentHTML("beforeend",'<li>itemAdded successfully')

console.log(todoList);


//we can use any mehtod we find suitable to create the elements