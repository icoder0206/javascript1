    //settimeout
/*console.log(" script start");
setTimeout(() => {
    console.log(" inside settimeout")
}, 0);
for(let i=1;i<100;i++){
    console.log("...");
}
console.log("script end");

//cleartimeout
console.log("script start");
const id=setTimeout(()=>{
    console.log("inside settimeout function");
},1000);
for(let i=1;i<100;i++){
    console.log("...")
}
console.log(" the id is ",id);
clearTimeout(id)
console.log("script end");

//setinterval
console.log("script start");
const total=setInterval(()=>{
    console.log(total);
    console.log(Math.random());
},2000);
console.log("script end");

const body=document.body;
const button=document.querySelector("button");
const intervalid=setInterval(()=>{
    const red=Math.floor(   Math.random()*126);
    const green=Math.floor(Math.random()*126);
    const blue=Math.floor(Math.random()*126);
    const rgb=`rgb(${red},${green},${blue})`
    body.style.background=rgb;

},1000);
button.addEventListener("click",()=>{
    clearInterval(intervalid);
    button.textContent=body.style.background;
})
console.log(intervalid);

//callback function//

function xyz(callback){
    console.log(" this is first 1");
    callback();
}
xyz((laws)=>{
    console.log(" this is second 2");
})

function getTwoNumber(number1,number2,callback){
    console.log(number1,number2);
    callback(number1,number2);

}
function addTwoNumbers(num1,num2){
    console.log("total number",num1+num2);
}
getTwoNumber( 2,4,addTwoNumbers);
function addnumbers(number1,number2,onSuccess,onfail){
    if(typeof number1==="number"&& typeof number2==="number"){
        onSuccess(number1,number2);
    }
    else
    {
        onfail();
    }
}
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
function onfail(){
    console.log(" wrong data types");
    console.log("please pass numbers only");
}
*/
           //callback hell //
//addnumbers("4",4,addTwoNumbers,onfail);
/*const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");

setTimeout(()=>{
    heading1.textContent="heading1";
    heading1.style.color="violet";
    setTimeout(()=>{
        heading2.textContent="heading2";
        heading2.style.color="purple";
        setTimeout(()=>{
            heading3.textContent="heading3";
            heading3.style.color="red";
            setTimeout(()=>{
                heading4.textContent="heading4";
                heading4.style.color="pink";

                setTimeout(()=>{
                    heading5.innerText="heading5";
                    heading5.style.color="green";
                    setTimeout(()=>{
                        heading6.innerText="heading6";
                        heading6.style.color="blue";
                        setTimeout(()=>{
                            heading7.innerText="heading7";
                            heading7.style.color="brown";
                            
                        },7000)
                    },6000)
                },5000)
            },4000)
        },3000)
    },2000)
},1000)

 function  changetext(element,text,color,time,onSuccesscallback,onfailcallback){
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
            if(onSuccesscallback){
                onSuccesscallback();
            }
        }else{
            if(onfailcallback){
                onfailcallback();
            }
        }
    },time)
    
 }
 
      //pyramid of doom
 changetext(heading1,"one","blue",1000,()=>{
    changetext(heading2,"two","red",2000,()=>{
        changetext(heading3,"three","green",3000,()=>{
            changetext(heading1,"four","pink",4000,()=>{
                changetext(heading5,"five","cyan",5000,()=>{
                    changetext(heading6,"six","yellow",6000,()=>{
                        changetext(heading7,"seven","grey",7000,()=>{

                        },()=>{console.log("heading7 does not exist")});
                    },()=>{console.log("heading6 does not exist")});
                },()=>{console.log("heading5 does not exist")});
            },()=>{console.log("heading4 does not exist")});
        },()=>{console.log("heading3 does not exist")});
    },()=>{console.log("heading2 does not exist")});
 },()=>{console.log("heading1 does not exist")});

 //promise//
 const bucket=['coffee','chips','vegetables','salt','rice'];
 const friedRicePromise= new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("couldn't do it");
    }
 })
 friedRicePromise.then((myfriedrice)=>{
    console.log("lets eat",myfriedrice);
 },(error)=>{console.log(error)});

function myPromise(){
    return new Promise((resolve,reject)=>{
        const value=true;
        setTimeout(()=>{
            if(value){
                resolve();
            }else
            {
                reject();
            }
        },3000)
    })
}
myPromise()
.then(()=>{console.log("resolved")})
.catch(()=>{console.log("rejected")})

//promise.resolve


const myPromise=Promise.resolve(5);
myPromise.then(value=>{
    console.log(value);
})

//promise chaining
function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}
myPromise()
.then((value)=>{
    console.log(value);
    value+="bar";
    return value;
})
.then((value)=>{
    console.log(value);
    value+="bazz";
    return value;
})
.then(value=>{
    console.log(value);
})

const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");

function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve("you do it");
            }else{
                reject("something went missing");
            }
        },time)
    })
}
changeText(heading1,"one","red",1000)
.then(()=>{changeText(heading2,"two","purple",1000)})
.then(()=>{changeText(heading3,"three","green",1000)})
.then(()=>{changeText(heading4,"four","blue",1000)})
.then(()=>{changeText(heading5,"five","cyan",1000)})
.then(()=>{changeText(heading6,"six","grey",1000)})
.then(()=>{changeText(heading7,"seven","yellow",1000)})
.catch((error)=>{
    alert(error);
})


               //AJAX and xml
const URL="https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
//console.log(xhr.readyState);
xhr.open("GET",URL);
xhr.onreadystatechange = function(){
   // console.log(xhr.readyState);
    if(xhr.readyState===4){
        const response=xhr.response;
        const data=JSON.parse(response);
        console.log(typeof data);
    }
}
xhr.send();

             //status code //

const URL="https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.onload =()=>{
    if(xhr.status >=200 && xhr.status<300){
        const data = JSON.parse(xhr.response);
        console.log(data);
        const id=data[3].id;
        const xhr2= new XMLHttpRequest();
        const URL2=`${URL}/${id}`
        console.log(URL2);
        xhr2.open("GET",URL2);
        xhr2.onload=()=>{
            const data2=JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    }else{
        console.log("something went wrong");
    }
}
xhr.onerror=()=>{
    console.log(" network error ");
}
xhr.send();

const URL="https://jsonplaceholder.typicode.com/posts";
function sendrequest( method ,url){
    return new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response);
            }else
            {
                reject(new Error("something went wrong"));
            }
        }
        xhr.onerror= function(){
            reject(new Error("something went wrong "));
        }
        xhr.send();
    })
}
sendrequest("GET",URL)
.then(response=>{
    const data = JSON.parse(response);
    return data;
})
.then(data=>{
    const id=data[3].id;
    return id;
})
.then(id=>{
    const url =`${URL}/${id}`;
    return sendrequest("GET",url);
})
.then(newresponse=>{
    const newdata= JSON.parse(newresponse);
    console.log(newdata);
})
.catch(error=>{
    console.log(error);
});

        // fetch//
 const URL="https://jsonplaceholder.typicode.com/posts";
 fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
 })
 .then(Response=>{
    if(Response.ok){
        return Response.json();
    }else
    {
        throw new Error("something went wrong");
    }
 })
 .then(data=>{
    console.log(data);
 })
.catch(error =>{
    console.log("inside catch");
    console.log(error);
})*/

//async await//
const URL="https://jsonplaceholder.typicode.com/posts";
async function getposts(){
    const response= await fetch(URL);
    const data = await response.json();
    return data;
}
getposts()
.then(mydata=>{
    console.log(mydata);
})
.catch(error =>{
    console.log("inside catch")
    console.log(error);
})