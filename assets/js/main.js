let body = document.querySelector("body");
let header = document.querySelector("header");

body.onscroll = function(){
    if(window.scrollY > 0){
        header.classList.add("bg-dark");
    }
    else{
        header.classList.remove("bg-dark");
    }
};
