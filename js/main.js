
let button_menu=document.querySelector(".button_menu");
let menu=document.querySelector(".menu");
let button_close =document.querySelector(".button_close");



button_menu.addEventListener("click",()=>{
    menu.classList.remove("hidden");
    menu.classList.add("block");

})
button_close.addEventListener("click",()=>{
    menu.classList.remove("block");
    menu.classList.add("hidden");


})