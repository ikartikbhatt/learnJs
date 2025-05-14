//get and set attributes




const anchorTag=document.querySelectorAll('.nav-item a')[2]
console.log(anchorTag);
//console.log(anchorTag.getAttribute("href"));

//changing the values of attributes using set attribute
anchorTag.setAttribute("href", "https://github.com/settings/profile") //it will set the attribute value to the provided link







const form=document.querySelector(".form-group input")
//console.log(form); //console the input of the form

//fetching any attribute from that form input field

//console.log(form.getAttribute("placeholder")); //retrun the value for the placeholder attribute in the input field of the form


