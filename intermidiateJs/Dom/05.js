//changing the style of elements

const changeHeadingcolor=document.querySelector("#mainHeading")
//consoling the heading element text
console.log(changeHeadingcolor.innerText);




//it will print all the style attribute present which we can use in  the element
//the style is itself an object so we can use dot notation to access the style attribute
//console.log(changeHeadingcolor.style);




//using the properties of style object to change the style of the mainHeading object
const stylechange=changeHeadingcolor.style.color="red";
console.log(stylechange);

//the styleing/CSS properties having hyphen in them can be accessed using camel case notation
//for example background-color can be accessed as backgroundColor
 

