let castom = function () {
    
    let castomHeader = document.querySelectorAll('.castom__header');
    let castomItem = document.querySelectorAll('.castom__time');

    castomHeader.forEach(item => {
        item.addEventListener('click', ()=>{
            item.parentElement.classList.toggle('castom-is-active');
        });
        
    });
    castomItem.forEach(item => {
        item.addEventListener('click', ()=>{
            let textTime = item.innerText, 
            castom = item.closest('.castom'),
            currentText = castom.closest('.castom').querySelector('.castom__current'),

            header = document.querySelector('.castom__header'),
            headerID = document.getElementById('castom__header');
            currentText.classList.add('castom__current--click');
            header.classList.add("castom__header--click");
            headerID.classList.add('castom__header--click');

        currentText.innerText = textTime;
        castom.classList.remove('castom-is-active');
        console.log(textTime);

    });
    });
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