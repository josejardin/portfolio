//-------------- Navigation Bar
let Hambg = document.querySelector(".Hambg-btn");
let cnclBtn = document.querySelector(".cncl-btn");
let navBtn = document.querySelector(".navbar");

Hambg.onclick = function() {
    Hambg.style.opacity = "0";
    Hambg.style.pointerEvents = "none";
    navBtn.classList.add("active");
}
cnclBtn.onclick = function() {
    Hambg.style.opacity = "1";
    Hambg.style.pointerEvents = "auto";
    navBtn.classList.remove("active");
}

//-------------- Sticky Navigation
let nav = document.querySelector("nav");
let val;
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}