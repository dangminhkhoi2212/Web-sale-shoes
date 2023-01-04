const URL_PRODUCTS ='./products.json';
async function showSectionProducts(url, section){
    var data = await fetch(url).then(response => response.json());
    var data_section = data[section];
    var products = document.querySelector(`.${section} .products`);
    var temp=new String();
    for (var k in data_section){
        var product = `<div id="${data_section[k].name}" class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                    <img src="${data_section[k].img}" alt="">
                    <span class="name_product">${data_section[k].name}</span>
                    <span class="price">$${data_section[k].price}</span>
                </div>`;
        temp+=product;
    }
    products.innerHTML=temp;
}
showSectionProducts(URL_PRODUCTS, 'lastest');
showSectionProducts(URL_PRODUCTS, 'category');
showSectionProducts(URL_PRODUCTS, 'best_sellings');
 
var btn_slider = document.querySelectorAll(".btn-slider .btn-left span");
var sliders = document.querySelectorAll(".slider-box");
var previous = document.querySelector(".previous");
var next = document.querySelector(".next");

var current=0;
function changeSlider(index){
    sliders.forEach((slider) => {
        slider.style.display = "none";
    })
    sliders[index].style.display = "flex";
    console.log(current)
}
function removeActiveButton(){
    btn_slider.forEach((btn) => {
        btn.classList.remove("active");
    });
}
function addActiveButton(index){
    btn_slider[index].classList.add("active");
}
btn_slider.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        current=index;
        changeSlider(index);
        removeActiveButton();
        addActiveButton(index);
        
    });
});
previous.addEventListener("click", ()=>{
    current--;
    if(current<0)
        current = sliders.length - 1;
    changeSlider(current);
    removeActiveButton();
    addActiveButton(current);
});
next.addEventListener("click", () => {
    current++;
    if (current >sliders.length-1)
        current=0;
    changeSlider(current);
    removeActiveButton();
    addActiveButton(current);
});
var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();
// new WOW().init();