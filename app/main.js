var navs = document.querySelectorAll(".header_right > ul > li > a")

navs.forEach(nav => {
    if (nav.href == window.location)
        nav.parentElement.classList.add("active");
});

var nav_bar = document.querySelector(".nav-button .fa-bars");
var nav = document.querySelector(".header_right ul");
var coating=document.querySelector(".coating");
nav_bar.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    coating.classList.toggle("active");
});
coating.addEventListener("click", ()=>{
    nav.classList.remove("active");
    coating.classList.remove("active");
})
var loading = document.getElementById('js-preloader');
window.onload=function(){
    loading.style.display='none';
}