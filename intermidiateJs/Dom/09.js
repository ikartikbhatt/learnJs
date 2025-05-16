//storing root node
const rootNode=document.getRootNode();
//console.log(rootNode);



const rootElementNode=rootNode.childNodes;
console.log(rootElementNode); //return html (root element)


//access child nodes of html
const htmlElementNode=rootElementNode[0].childNodes
console.log(htmlElementNode); //head, text ,body





//access child nodes of head

const headElmentNode=htmlElementNode[0].childNodes
console.log(headElmentNode);

//access text node of head Element
const textNodeOfHead=headElmentNode[0].childNodes;
console.log(textNodeOfHead);

//access title node of head Element 
const titleNodeOfHead=headElmentNode[1].childNodes;
console.log(titleNodeOfHead);

//access text node of title Element
const textNodeOfTitle=titleNodeOfHead[0];
console.log(textNodeOfTitle);

//access text node of head Element
const secondTextNodeOfHead=headElmentNode[2].childNodes;
console.log("secondTextNodeOfHead",secondTextNodeOfHead);

//access script node of head Element
const scriptNodeOfHead=headElmentNode[3].childNodes;
console.log(scriptNodeOfHead);


//access text node of head Element
const thirdTextNodeOfHead=headElmentNode[2].childNodes;
console.log("thirdTextNodeOfHead",thirdTextNodeOfHead);








//access text node of html element
const textNode=htmlElementNode[1].childNodes;
//console.log(textNode);







//access body node of html element
const bodyElementNode=htmlElementNode[2].childNodes;
//console.log(bodyElementNode);



//task--> select h1 and change the background color of it's parent element

const h1Element=document.querySelector('h1');

const h1parentElement=h1Element.parentElement
h1parentElement.style.backgroundColor='red'

