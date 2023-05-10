'use strict'

const btnOpen = document.querySelectorAll('.btn--open');
const modal = document.querySelector('.modal-sectionFive');

const closeBtn = document.querySelector('.X');

const modalViewHandler = () => {
    modal.classList.toggle('modal--open-sectionFive');
}

closeBtn.onclick = function() {
    modal.classList.remove('modal--open-sectionFive');
}

btnOpen.forEach(btn => {
    btn.addEventListener('click', modalViewHandler);
})
