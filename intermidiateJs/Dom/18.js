//event object
const firstBtn=document.querySelector('#btn1');
firstBtn.addEventListener("click",function(event){   //can be any name for that fn argument
    console.log(this);
    console.log(event); //give event object
    
});



//jab bhi mai kisi bhi element pr event listner ko add krunga to browser 
//js engine -- line by line execution
//browser -- js Engine + extra features
//browser -- js Engine + webApi


//jab browser ko pta chla user ne event perform kra jo hum listen krr rahe hai

//browser will do two things --
// 1) will give callback fn to js engine
// 2) will also give information about that event in form of that object which is called as event object 