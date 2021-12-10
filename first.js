window.onload = function( ){
    const btn =  document.querySelector(".togglebutton");
    const logo = document.querySelector("#logo");
    const navlinks = document.querySelector(".links");
    
btn.addEventListener('click', ( ) => {
    navlinks.classList.toggle("toggle");
    });
}
