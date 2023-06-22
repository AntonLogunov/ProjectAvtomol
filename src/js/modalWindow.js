'use strict'

const btnOpen = document.querySelectorAll('.btn--open');
const modal1 = document.querySelector('.modal-sectionFive');

const closeBtn = document.querySelector('.X');

const modalViewHandler = () => {
    modal1.classList.toggle('modal--open-sectionFive');
}

closeBtn.onclick = function() {
    modal1.classList.remove('modal--open-sectionFive');
}

btnOpen.forEach(btn => {
    btn.addEventListener('click', modalViewHandler);
})
