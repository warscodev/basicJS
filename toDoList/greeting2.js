const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(name){
    localStorage.setItem("currentUser",name);
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting2(currentValue);
    saveName(currentValue);
}

function paintGreeting2(name){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${name}!`
}

function askForName2(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function loadName2(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser==null){
        askForName2();
    }else{
        paintGreeting2(currentUser);
    }

}

function init(){
    loadName2();
}

init();