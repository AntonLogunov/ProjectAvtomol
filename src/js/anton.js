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
        let textTime = this.innerText, 
            castom = this.closest('.castom'),
            currentText = castom.closest('.castom').querySelector('.castom__current');
            castomBlock = this.closest('.castom__header');
        currentText.innerText = textTime;
        castom.classList.remove('castom-is-active');
        castomBlock.classList.add('castom__header--click');
        console.log(castom);
    }
}
castom();

function dataOutput(){
    let nameForm = document.getElementById("name"),
        phoneForm = document.getElementById("phone"),
        markForm = document.getElementById("mark");
     
    let nameInfo = nameForm.value,
        phoneInfo = phoneForm.value,
        markInfo = markForm.value;
    console.log(nameInfo,phoneInfo,markInfo);
}