let castom = function () {
    // ====================== КАТЕГОРИЯ =======================================
    let castomHeaderCategory = document.querySelectorAll('.castom__header--category');
    let castomItemCategory = document.querySelectorAll('.castom__time--auto');
    castomHeaderCategory.forEach(item => {
        item.addEventListener('click', ()=>{
            item.parentElement.classList.toggle('castom-is-active');
        });
        
    });
    castomItemCategory.forEach(item => {
        item.addEventListener('click', ()=>{
            let textTime = item.innerText, 
            castom = item.closest('.castom'),
            currentText = castom.closest('.castom').querySelector('.castom__current');
        currentText.innerText = textTime;
        castom.classList.remove('castom-is-active');
        console.log(textTime);

        headerCategory = document.getElementById('castom__header--category');
        path = document.getElementById('path');
        currentText.classList.add('castom__current--click');
        headerCategory.classList.add('castom__header--click--category');
        path.classList.add('path');

    });
    });

    // =========================== ВРЕМЯ =======================================
    let castomHeaderTime = document.querySelectorAll('.castom__header--time');
    let castomItemTime = document.querySelectorAll('.castom__item--time');
    castomHeaderTime.forEach(item => {
        item.addEventListener('click', ()=>{
            item.parentElement.classList.toggle('castom-is-active');
        });
        
    });
    castomItemTime.forEach(item => {
        item.addEventListener('click', ()=>{
            let textTime = item.innerText, 
            castom = item.closest('.castom'),
            currentText = castom.closest('.castom').querySelector('.castom__current--time');
        currentText.innerText = textTime;
        castom.classList.remove('castom-is-active');
        console.log(textTime);

        headerCategory = document.getElementById('castom__header--time');
        path = document.getElementById('path--time');
        currentText.classList.add('castom__current--click');
        headerCategory.classList.add('castom__header--click--time');
        path.classList.add('path');

    });
    });
}
castom();

// function dataOutput(){
//     let nameForm = document.getElementById("name"),
//         phoneForm = document.getElementById("phone"),
//         markForm = document.getElementById("mark");
     
//     let nameInfo = nameForm.value,
//         phoneInfo = phoneForm.value,
//         markInfo = markForm.value;
//     console.log(nameInfo,phoneInfo,markInfo);
// }