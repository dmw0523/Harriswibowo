const header =document.querySelector("header");
const tombol = document.querySelector(".btn-menu");

window.addEventListener("scroll",function(){
header.classList.toggle ("sticky", this.window.scrollY>0);
tombol.classList.toggle ("tombol", this.window.scrollY>0);

});

const menu= document.querySelector(".menu-icon");
const menunav= document.querySelector(".menu-nav");

menu.onclick = () => {

    menu.classList.toggle('close');
    menunav.classList.toggle('active');
};


window.onscroll = () => {

 
    menunav.classList.remove('active');
};

