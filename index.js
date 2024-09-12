// global execution context
/*console.log(this);
console.log(window);
console.log(firstname);
console.log(lastname);
var firstname="rahul";
var lastname="jadhav";
var fullname=firstname+ ' '+lastname;
console.log(fullname);

//function execution context
let foo="foo";
console.log(foo);
function getfullname(firstname,lastname){
    console.log(arguments);
    let myVar=" var inside func";
    console.log(myVar);
    const fullname=firstname+ " "+ lastname;
    return fullname;
}
const personName=getfullname(" harshit","sharma");
console.log(personName);
// closures//
 const printfullname=function(firstname,lastname){
    function printname(){
      console.log(firstname,lastname);
    }
    return printname;
 }
 const ans=printfullname("rahul","jadhav");
 console.log(ans());

 function hello(x){
  const a="varA";
  const b="varB";
  return function(){
    console.log(a,b,x);
  }
 }
 const ans= hello("arg");
 ans();
 function myfunction(power){
  return function(number){
    return number**power
  }
 }
 const square = myfunction(2);
 const ans=square(3);
 console.log(ans);
 const cube=myfunction(3);
 const ans2=cube(3);
 console.log(ans2);
 function func(){
  let counter=0;
  return function(){
    if(counter<1){
      console.log(" hi you call me");
      counter++;
    }else{
      console.log(" mai already eak bar call ho chuka hunoo");
    }
  }
 }
 const myfunc=func();
 myfunc();
 myfunc();
 myfunc();

//console.dir(document);
//const mainheading=document.getElementById("main-heading");
//console.log(mainheading);
const mainheading=document.querySelector("#main-heading");
const header=document.querySelector(".header");
console.log( mainheading);
console.log(header);
const navitem=document.querySelectorAll(".nav-item");
console.log(navitem);
const mainheading=document.getElementById("main-heading");
console.log(mainheading.textContent);
//mainheading.textContent="mai hu na";
//console.log(mainheading.textContent);

const mainheading=document.querySelector("div.headline h2");
//console.log(mainheading.style);
mainheading.style.backgroundColor="red";
mainheading.style.border="10px solid green";
const link=document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href","https://facebook.com");
console.log(link.getAttribute("href"));
const navitems=document.getElementsByClassName("nav-item");
console.log(navitems[1]);
console.log(Array.isArray(navitems));
const navitems=document.querySelectorAll(".nav-item");
console.log(navitems);
const navitems=document.getElementsByTagName("a");
//for(let i=0;i<navitems.length;i++){
 // const navitem=navitems[i];
  //navitem.style.backgroundColor="#fff";
  //navitem.style.color="red";
//}
for(let navitem of navitems){

  navitem.style.backgroundColor="#fff";
  navitem.style.color="red";
}
console.log(navitems);*
let navitems=document.getElementsByTagName("a");
navitems=Array.from(navitems);
console.log(Array.isArray(navitems));
navitems.forEach((navitem)=>{
  navitem.style.backgroundColor="#fff";
  navitem.style.color="green";
  navitem.style.fontweight="bold";
});
const headline=document.querySelector(".headline");
//console.log(headline.innerHTML);
headline.innerHTML="<h1>inner html changed </h1>";
headline.innerHTML+="<button class=\"btn\">learn more</button>";
console.log(headline.innerHTML);
const rootnode=document.getRootNode();
const htmlelementnode=rootnode.childNodes[0];
console.log(htmlelementnode.childNodes[1]);
const sectionTodo=document.querySelector(".section-todo");
//console.log(sectionTodo.classList);
//sectionTodo.classList.add('bg-dark');
//sectionTodo.classList.remove("container");
//const ans=sectionTodo.classList.contains("container");
//console.log(ans);
sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");

const header=document.querySelector(".header");
header.classList.toggle("bg-dark");
//header.classList.add("bg-dark");
console.log(header.classList);
const todolist=document.querySelector(".todo-list");
console.log(todolist.innerHTML);
//todolist.innerHTML="<li> new todo</li>";
todolist.innerHTML+="<li> new todo </li>";
const newtodoitem=document.createElement("li");
console.log(newtodoitem);
newtodoitem.textContent="tech student"
//const newtodoitemtext=document.createTextNode(" tech student");
const todolist=document.querySelector(".todo-list");
//newtodoitem.append(newtodoitemtext);
todolist.append(newtodoitem);
todolist.prepend(newtodoitem)
console.log(newtodoitem)
const todo1=document.querySelector(".todo-list li");
todo1.remove();
//console.log(todo1);
const newtodoitem=document.createElement("li");
newtodoitem.textContent="tech student";
const todolist=document.querySelector(".todo-list");
//todolist.before(newtodoitem);
//console.log(todolist);
todolist.after(newtodoitem);
console.log(todolist);
const todolist=document.querySelector(".todo-list");
todolist.insertAdjacentHTML("beforeend","<li> tech student</li>");
const ul=document.querySelector(" .todo-list");
const li=document.createElement("li");
li.textContent=" new todo";
const li2=li.cloneNode(true);
ul.append(li);
ul.prepend(li2);
const ul=document.querySelector(" .todo-list");
const li=document.createElement("li");
li.textContent="new todo";
ul.appendChild(li);
const ul=document.querySelector(".todo-list");
const li=document.createElement("li");
const referencenode=document.querySelector(".first-todo");
li.textContent="new todo";
ul.insertBefore(li,referencenode);
const ul=document.querySelector(".todo-list");
const li=document.createElement("li");
li.textContent="new todo";
const referencenode=document.querySelector(".first-todo");
replaceChild(li,referencenode);
const listitems=document.querySelectorAll(".todo-list li");
console.log(listitems);
const listitems=document.querySelectorAll(".todo-list li");
const sixthli=document.createElement("li");
sixthli.textContent="item 6";
const ul=document.querySelector(".todo-list");
ul.append(sixthli);
console.log(listitems);
const ul=document.querySelector(".todo-list");
const listitems=ul.getElementsByTagName("li");
const sixthli=document.createElement('li');
sixthli.textContent="item 6";
ul.append(sixthli);
console.log(listitems);
const sectionTodo=document.querySelector(".section-todo");
const info=sectionTodo.getBoundingClientRect();
console.log(info);

//javascript events
const btn= document.querySelector(".btn-headline");
function clickme(){
  console.log(" you click me");
}
btn.addEventListener("click",clickme);
const btn=document.querySelector(".btn-headline");
btn.addEventListener("click",()=>{
  console.log(" my name arraow function")
})
const btn=document.querySelector(".btn-headline");
btn.addEventListener("click",()=>{
  console.log(" you clicked me");
  console.log(" value of this");
  console.log(this);
})

      //keypress event
const body=document.body;
body.addEventListener("keypress",(e)=>{
  console.log(e.key);
})
             // mouse event //
const mainbutton=document.querySelector(".btn-headline");
mainbutton.addEventListener("mouseover",()=>{
  console.log("mouseover event occured !!!!");
})
mainbutton.addEventListener("mouseleave",()=>{
  console.log("mouseleave  event occured")
})*/

  //project //

const todoform=document.querySelector(".form-todo");
const todoinput=document.querySelector(".form-todo input[type='text']");
const todolist=document.querySelector(".todo-list");
todoform.addEventListener("submit",(e)=>{
  e.preventDefault();
  const netodotext=todoinput.value;
  const newli=document.createElement("li");
  const newliInnerHtml=`
            <span class="text">${netodotext}</span>
            <div class="todo-buttons">
                <button class="todo-btn done">done</button>
                <button class="todo-btn remove">remove</button>
            </div>
           `;
           newli.innerHTML=newliInnerHtml;
         todolist.append(newli);
  todoinput.value="";
})
todolist.addEventListener("click",(e)=>{
  if(e.target.classList.contains("remove")){
    const targetedli=e.target.parentNode.parentNode;
    targetedli.remove();
  }
  if(e.target.classList.contains("done")){
   const lispan=e.target.parentNode.previousElementSibling;
    lispan.style.textDecoration="line-through";
  }
});

