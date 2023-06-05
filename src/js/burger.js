'use strict'
const menu = document.querySelector('.menuBurger');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', ()=>{
    menu.classList.toggle('menuBurger--open');

});