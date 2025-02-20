const btnMenu = document.querySelector(".btnMenu");
const nav = document.querySelector(".altNav");
const navUl =document.querySelector(".altNav ul");
function toggleMenu(){  
    nav.classList.toggle("cacher");
}
btnMenu.addEventListener("click", toggleMenu);

nav.addEventListener("click", toggleMenu);
navUl.addEventListener("click", (e)=>{
    e.stopPropagation();
});