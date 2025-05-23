//static vs live list

//querrySelector will give us the static list of elements
//getElementsBysomething will give us the live list

//firstly i will create one ul > li*5 inside todo-section and will style them

const todoSection = document.querySelector(".todo-section");
// console.log(todoSection);

const ul = document.createElement("ul");
ul.classList.add("ul-class");
ul.style.paddingTop = "3rem";
todoSection.append(ul);

//adding li inside that ul

const addedUl = document.querySelector(".ul-class");

const li = () => {
  for (let index = 1; index < 6; index++) {
    const li = document.createElement("li");
    li.textContent = `item${index}`;
    li.classList.add('li-items')
    li.style.listStyle = "none";
    li.style.border = "2px solid red";
    addedUl.append(li);
  }
};
li();
//  console.log(addedUl);




//adding item to the list and getting static list in return

const sixLi=document.createElement('li')
sixLi.textContent='item6';
sixLi.classList.add('li-items')
ul.append(sixLi);

const listLiItems = document.querySelectorAll(".li-items");
console.log(listLiItems);

const listLiItems1 = document.getElementsByClassName("li-items");
console.log(listLiItems);
