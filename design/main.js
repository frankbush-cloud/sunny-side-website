const hamberger = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-els");
//add event listener to the menu=icon so it shows the nav-links

hamberger.addEventListener("click", ()=>{
    navLinks.classList.toggle("hidden");
})
