const myheading = document.querySelector("h1");
console.log(myheading);
console.log(myheading.innerHTML);
console.log(myheading.innerText);
myheading.innerHTML = "<span>hello</span>"
console.log(myheading.innerHTML);
// myheading.innerText="<span>hello world</span>"
console.log(myheading.innerHTML);

function take_input(){
    const user_input = prompt("Enter your name");
    const number = prompt("Enter your number");
    const welcome = document.querySelector("#welcome_msg");
    welcome.innerHTML = `welcome ${user_input} ${number}`;
}
function changetored (){
    const Css = document.querySelector("#welcome_msg");
    Css.style.color ="red";
    Css.style.backgroundColor ="pink";
    Css.style.padding ="10px";
    Css.style.border ="1px solid black";
    Css.style.borderRadius ="35%";

}
function changetooriginal (){
    const Css = document.querySelector("#welcome_msg");
    Css.style.color ="black";


    
}
function createList (){
    const li = document.createElement("li");
    const un = prompt("Enter a name");
    li.innerHTML=un;
    const mymenu =document.querySelector(".Mymenu");
    mymenu.appendChild(li)
    
}