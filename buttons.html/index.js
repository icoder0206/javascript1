//const allbuttons=document.querySelectorAll(".my-buttons button");
        // for of loop
 /*for(let button of allbuttons){
    button.addEventListener("click",function(){
        console.log(this.textContent);
    })
 }*/
           // simple for loop
/*for(let i=0;i<allbuttons.length;i++){
    allbuttons[i].addEventListener("click",function(){
        console.log(this);
    });
}
        // forEach method//
allbuttons.forEach(function(button){
  button.addEventListener("click",function(){
    console.log(this);
  })
})

        // event object//
for(let button of allbuttons){
    button.addEventListener('click',(e)=>{
        console.log(e.currentTarget);
    })
}
console.log(" script start");
const allbuttons=document.querySelectorAll(".my-buttons button");
allbuttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let num=0;
        for(let i=0;i<=1000000000;i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent,num);
    })
})
let outervar=0;
for(let i=0;i<100000000;i++){
    outervar+=i;
}
console.log(" value of outer variable is ",outervar);
console.log("script end")*/

const allbuttons=document.querySelectorAll(".my-buttons button");
allbuttons.forEach((button) =>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor="yellow";
        e.target.style.color="red";
    })

})


