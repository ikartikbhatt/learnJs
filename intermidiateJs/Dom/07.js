//get multiple elements using getElements by class name
//get multiple elements using querySelectorAll

//const allNavItems=document.getElementsByClassName("nav-item")
//console.log(allNavItems); //htmlCollection -->it will return array like object in which i can do indexing to get particular elements


//const allNavItems1=document.querySelectorAll(".nav-item")
//console.log(allNavItems1); //nodeList --> it will return array like object in which i can do indexing to get particular elements






//loop 
const allNavItems=document.getElementsByTagName("a")


//for ,  for of loop
//for html collection we cannot use for each method for iterarion

// for (let index = 0; index < allNavItems.length; index++) {
//     const element = allNavItems[index];
//     element.style.backgroundColor="#ffff"
//     element.style.color="red"
// }



//for of loop

// for (const allNavItem of allNavItems) {
//     //console.log(allNavItem);
//     allNavItem.style.color="red"   
//     allNavItem.style.backgroundColor="#ffff"
// }


//if we want to use foreach method we need to convert the array like object into an array using Array.from()

const allNavItemsArray=Array.from(allNavItems)
console.log(allNavItemsArray);


//forEach
allNavItemsArray.forEach((allNavItemsArray)=>{
    allNavItemsArray.style.color="red"  
    allNavItemsArray.style.backgroundColor="#ffff"
})