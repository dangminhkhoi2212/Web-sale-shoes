var navs = document.querySelectorAll(".header_right > ul > li > a")

navs.forEach(nav => {
    if (nav.href == window.location)
        nav.parentElement.classList.add("active");
});

var nav_bar = document.querySelector(".nav-button .fa-bars");
var nav = document.querySelector(".header_right ul");
nav_bar.addEventListener("click", ()=>{
    nav.classList.toggle("active");
})