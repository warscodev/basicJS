
const title = document.querySelector(".clock-title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}


function init(){
    title.addEventListener("click", handleClick);
}

init();