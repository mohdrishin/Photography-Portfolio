const navUl = document.getElementById("nav-ul");
const hamburgerMenu = document.getElementById("hamburger");



function showMenu(){
    navUl.classList.toggle("show");
}


hamburgerMenu.addEventListener("click", showMenu);
