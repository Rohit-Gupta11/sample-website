let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list');
let rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-nav');
    navList.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
});
