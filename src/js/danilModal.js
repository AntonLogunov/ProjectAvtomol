'use strict'

const btnOpen = document.querySelector('.btn--open');
const modal = document.querySelector('.modal');

const closeBtn = document.querySelector('.X');

const modalViewHandler = () => {
    modal.classList.toggle('modal--open');
}

closeBtn.onclick = function() {
    modal.classList.remove('modal--open');
}

btnOpen.addEventListener('click', modalViewHandler);
