'use strict'

const btnOpen = document.querySelector('btn--open');
const modal = document.querySelector('modal');

const modalViewHandler = () => {
    modal.classList.toggle('modal--open');
}

btnOpen.addEventListener('click', modalViewHandler);
modal.addEventListener('click', modalViewHandler);