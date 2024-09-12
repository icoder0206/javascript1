const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");

            //  event bubbling 
//child.addEventListener("click",() =>{
    //console.log(" you clicked me");

//});
//parent.addEventListener("click",()=>{
//    console.log("you clicked parent");
//});
//grandparent.addEventListener("click",() =>{
//  console.log(" you clicked on grandparent");
//})
//document.body.addEventListener("click",()=>{
//    console.log(" you clicked on document body");
//})
       
            // event capturing
/*child.addEventListener("click",() =>{
    console.log(" captured child !!!");

},true);
parent.addEventListener("click",()=>{
    console.log("you captured parent");
},true);
grandparent.addEventListener("click",() =>{
  console.log(" you captured on grandparent");
},true)
document.body.addEventListener("click",()=>{
    console.log(" you captured on document body");
},true)  


child.addEventListener("click",() =>{
    console.log(" you bubbled child ");

});
parent.addEventListener("click",()=>{
    console.log("you bubbled parent");
});
grandparent.addEventListener("click",() =>{
  console.log(" you bubbled on grandparent");
})
document.body.addEventListener("click",()=>{
    console.log(" you bubbled on document body");
})*/

grandparent.addEventListener("click",(e)=>{
    console.log(e.target.textContent);
})