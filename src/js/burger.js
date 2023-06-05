'use strict'
const menu = document.querySelector('.menuBurger');
const burgerBtn = document.querySelector('.burger');

let btnopenBurger = document.querySelector('.menu__link__orange-burger');
// let authorization = document.querySelector('.authorization');
// let createAccount = document.querySelector('.createAccount');
// let restoreAccount = document.querySelector('.restore');
// let Alert = document.querySelector('.alert');
// let input = document.querySelectorAll('.modal-input');

burgerBtn.addEventListener('click', ()=>{
    menu.classList.toggle('menuBurger--open');
    burgerBtn.classList.toggle('menuBurger--open');
    btnopenBurger.onclick = function() {
        console.log(btnopen);
        modal.style.display = "block";
        authorization.style.display = "block";
        createAccount.style.display = "none";
        restoreAccount.style.display = "none";
        Alert.style.display = "none";
        input.forEach(function(inp){
            inp.value = '';
        })
        eye.forEach(function(e){
            e.src="src/img/openeye.svg";
        })
    }
});