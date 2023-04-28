const header =document.querySelector("header");
const tombol = document.querySelector(".toggle");

window.addEventListener("scroll",function(){
header.classList.toggle ("sticky", this.window.scrollY>0);
tombol.classList.toggle ("tombol", this.window.scrollY>0);

});

