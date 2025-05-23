//how to get dimension of elements

//height and width

const sectionToDo=document.querySelector('.todo-section')
const info = sectionToDo.getBoundingClientRect(); //it will retrun one object having all the details
console.log(info);


//to get height only
console.log(info.height);
