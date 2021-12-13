let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn')
let cartForm = document.querySelector('.shopping-cart');
let cartBtn = document.querySelector('#cart-btn')
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    cartForm.classList.toggle('active');
}








// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
// }

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})


window.onscroll = () =>{
    searchForm.classList.remove('active');
    cartForm.classList.remove('active');
    
}
