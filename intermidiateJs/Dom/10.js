//classesList
//add remove and toggle classes


//const sectionToDo=document.getElementsByClassName('todo-section')[0]
const sectionToDo=document.querySelector('.todo-section')

console.log(sectionToDo);


//to check classesList for SectionToDo

const sectionToDoClassList=sectionToDo.classList
console.log(sectionToDoClassList);

//add class to sectionToDo
sectionToDoClassList.add('classadded')
console.log(sectionToDoClassList);


//remove class from sectionToDo
sectionToDoClassList.remove('classadded')
console.log(sectionToDoClassList);



//toggle class from sectionToDo
// toggle will add if class is not present and remove if class is present
sectionToDoClassList.toggle('classadded')
console.log(sectionToDoClassList);


//class exists or not -- will return boolean value
console.log(sectionToDoClassList.contains('container'));