//add new html element to page

//document.createElement()
//append
//prepend -- used to add at first
//remove


//append is used to add at the last
const newTodoItem=document.createElement("li")
newTodoItem.textContent="hey i have added it"
newTodoItem.style.listStyle='none'
newTodoItem.style.backgroundColor='cyan'
//console.log(newTodoItem);
const sectionToDo=document.querySelector('.todo-section')
sectionToDo.append(newTodoItem)


//remove

const removNewTodoItem=document.querySelector('.todo-section li')
console.log(removNewTodoItem);
//sectionToDo.remove(removNewTodoItem)
removNewTodoItem.remove()




//innerHtml to add new html element to page

//const newElement = document.querySelector('.nav-items')
//newElement.innerHTML += '<li class="nav-item"><a href="">newlyAdded</a></li>'



//when to use and when not to use

//use when you need to add a new element to the page

//not use because it can be slow and can be a security risk if you are adding user input to the page