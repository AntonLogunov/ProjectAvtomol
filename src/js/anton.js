let castom = function () {
    
    let castomHeader = document.querySelectorAll('.castom__header');
    let castomItem = document.querySelectorAll('.castom__time');

    castomHeader.forEach(item => {
        item.addEventListener('click', castomToggle);
    });
    castomItem.forEach(item => {
        item.addEventListener('click', castomChoose);
    });
    function castomToggle(){
        this.parentElement.classList.toggle('castom-is-active');
    }
    function castomChoose(){
        let text = this.innerText, 
            castom = this.closest('.castom'),
            currentText = castom.querySelector('.castom__current');
        currentText.innerText = text;
        castom.classList.remove('castom-is-active');
    }

}
castom();