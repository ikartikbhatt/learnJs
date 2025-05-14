//innerHtml

const mainHeading=document.querySelector(".headline")
console.log(mainHeading.innerHTML); //return the innerHtml of .headline class

//changing innerHtml

mainHeading.innerHTML= "<h1>hey it has been changed</h1>"
mainHeading.innerHTML+= "<button>click me</button>"  // += it will not change the existing changed innerHtml 
console.log(mainHeading);
