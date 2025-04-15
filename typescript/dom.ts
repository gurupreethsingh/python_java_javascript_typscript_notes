const myheading = document.querySelector("h1") as HTMLElement;
console.log(myheading);
console.log(myheading.innerHTML);
console.log(myheading.innerText);
myheading.innerHTML = "<span>hello</span>";

// Function definitions

function take_input(): void {
    const user_input = prompt("Enter your name");
    const no = prompt("Enter your number");
    const welcome = document.querySelector("#welcome_msg") as HTMLElement;
    if (welcome) {
        welcome.innerHTML = `Welcome ${user_input} ${no}`;
    }
}

function changetored(): void {
    const Css = document.querySelector("#welcome_msg") as HTMLElement;
    if (Css) {
        Css.style.color = "red";
    }
}

function changetooriginal(): void {
    const Css = document.querySelector("#welcome_msg") as HTMLElement;
    if (Css) {
        Css.style.color = "black";
    }
}

function createList(): void {
    const li = document.createElement("li");
    const un = prompt("Enter a name");
    li.innerHTML = un ?? "";
    const mymenu = document.querySelector(".Mymenu") as HTMLElement;
    if (mymenu) {
        mymenu.appendChild(li);
    }
}
