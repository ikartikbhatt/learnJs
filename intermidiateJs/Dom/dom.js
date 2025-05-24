//here we will complete our project.

//to prevent page reloading in order to presist the data entered by the user
document.body.addEventListener("click", (e) => {
  e.preventDefault();
});

console.log("script started.....!");

const submitBtn = document.querySelector(".signup-btn");
const username = document.querySelectorAll(".form-group")[0].childNodes[3];
const mainHeading = document.querySelector("#mainHeading");
const learnMoreBtn = document.querySelector(".btn-headline");
const liNavs = document.querySelectorAll(".nav-item");
const navbarSignup = document.querySelectorAll(".nav-item a")[2];
const navbarAbout = document.querySelectorAll(".nav-item a")[1];
const navbarHome = document.querySelectorAll(".nav-item a")[0];
const todoSectionHeading = document.querySelector(".todo-section h2");
const todoPlaceHolder = document.querySelector(".form-todo input");
// console.log(todoPlaceHolder);



//signup module
let captureUsername = "";

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  captureUsername = username.value.trim();

  if (captureUsername != "") {
    console.log("username created successfully", captureUsername);
    updateUserName();
    
  } else {
    console.log("username not created");
  }
});


// ///////////////////////////////////////////////////////////////////////////////////////////////


//login
let login;
const updateUserName = function () {
  mainHeading.textContent = `${captureUsername} found !!!`;
  mainHeading.style.color = "#ad9999";
  login = learnMoreBtn.innerHTML = "Login";
};


// ///////////////////////////////////////////////////////////////////////////////////////////////



//display current logged in user and update todo section heading
let loginkey = "";
learnMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (captureUsername != "") {
    liNavs.forEach((li) => {
      li.style.width = "50%";
    });
    navbarSignup.textContent = ` Welcome ${captureUsername} :)`;
    navbarAbout.textContent = `ToDO Completed :`;
    navbarHome.textContent = `ToDO Rejected :`;
    todoSectionHeading.textContent = `${captureUsername}'s Your Plan For Today ?`;
    todoPlaceHolder.placeholder = `${captureUsername} Add Your Todo Here`;
    loginkey = true;
    console.log('login key found',loginkey);
  } else {
    console.log("no user found");
  };
 
  //logout
  if (login == "Login") {
    learnMoreBtn.innerHTML = "Logout";
    learnMoreBtn.addEventListener("click", () => {
      location.reload();
    });
  }
});





// ///////////////////////////////////////////////////////////////////////////////////////////////

//random color assign to list items
function randomColorCode() {
  const red = Math.floor(Math.random()*256)
  const green = Math.floor(Math.random()*256)
  const blue =   Math.floor(Math.random()*256)
  const colorCode = `rgb(${red}, ${green}, ${blue})`
  return colorCode;
}


//todo functionality -- fn to create todo item with checkbox and delete button
let completedTodoCounts=0;
let Rejectedcounter=0;
const createTodoList = function (todoList) {
  const todoSection = document.querySelector(".todo-section");

  const container = document.createElement("div");
  container.className = "todo-list-container";

  const row = document.createElement("div");
  row.className = "todo-row";

  const span = document.createElement("span");
  span.className = "todo-list";
  span.textContent = `${todoList}`;
  span.style.background=randomColor;
  
  const btnCompleted = document.createElement("button");
  btnCompleted.className = "todo-list-btn btn";
  btnCompleted.textContent = "Completed";
  btnCompleted.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('completed button clicked');
    row.remove()
    console.log('todo-completed successfully');
    console.log(e);
    if (todoList!="") {
      completedTodoCounts++;  //will search in lexical scope
      navbarAbout.textContent = `ToDO Completed : ${completedTodoCounts}`;
      console.log('ToDO Completed counts updated' ,completedTodoCounts);
       
    }
  });

  const btnRemove = document.createElement("button");
  btnRemove.className = "todo-list-btn btn";
  btnRemove.textContent = "Rejected";
  btnRemove.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('rejected button clicked');
    row.remove()
    console.log('todo-rejected successfully');
    console.log(e);
    if (todoList!="") {
      Rejectedcounter++;  //will search in lexical scope
      navbarHome.textContent = `ToDO Rejected : ${Rejectedcounter}`;
      console.log('ToDO Completed counts updated' ,Rejectedcounter);
       
    }
  });

  // Build the structure
  row.appendChild(span);
  row.appendChild(btnCompleted);
  row.appendChild(btnRemove);
  container.appendChild(row);
  todoSection.appendChild(container);
};




// ///////////////////////////////////////////////////////////////////////////////////////////////


//list added todo
const AddTodoBtn = document.querySelector(".form-todo input.btn");
const todoInput = document.querySelector(".form-todo input");
let randomColor
AddTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (captureUsername != "") {
    let todoList = todoInput.value.trim();
    if (todoList != "" && loginkey!="") {
      console.log("ToDo list updated Successfully", todoList);
      randomColor=randomColorCode();
      createTodoList(todoList); // Pass todoList as an argument
    } else {
      console.log("No Input Received");
    }
  } else {
    console.log("Login first");
  }
});


// ///////////////////////////////////////////////////////////////////////////////////////////////
