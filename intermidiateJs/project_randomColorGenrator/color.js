const mainButton=document.querySelector("button")
// console.log(mainButton);

const body=document.querySelector("body")
// console.log(body);



        
function randomColorCode() {
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue =   Math.floor(Math.random()*256)
    const colorCode = `rgb(${red}, ${green}, ${blue})`
    return colorCode;
}


mainButton.addEventListener("click",function() {
        const randomColor=randomColorCode();
        const h1=document.querySelector("h1")
        h1.textContent=`Current Color : ${randomColor}`
        console.log(h1);
        body.style.backgroundColor=randomColor;      
})