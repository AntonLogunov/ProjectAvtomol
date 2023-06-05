'use strict'
let result = {
    "adress": false,
    "service": false,
    "date": false,
    "time": false,
    "total": false
};
//let signInBtn = document.getElementById("sign_in_btn");
let signInForm = document.getElementById("form-sign-in");
let adressChoice = document.querySelector(".map-current");
let dateChoice = document.getElementById("date");
let timeChoice = document.getElementById("time_select_btn");
let modal = document.getElementById('Modal');
let authorization = document.querySelector('.form-finish');
let btnclose = document.querySelector('.close');
let formH = document.querySelector(".form-h");
let formUl = document.querySelector(".form-ul");
let adressError = document.querySelector(".adress-error");
let serviceError = document.querySelector(".service-error");
let dateError = document.querySelector(".date-error");
let timeError = document.querySelector(".time-error");
let formFinish = document.querySelector(".form-p")
function formCheck(){
    result = {
        "adress": false,
        "service": false,
        "date": false,
        "time": false,
        "total": false
    };
    if(adressChoice.innerHTML != "Выбрать адрес" && adressChoice.innerHTML != null && adressChoice.innerHTML != ""){
        result.adress = true;
    }
    if(choiceInf.services.length >= 1){
        result.service = true;
    }
    if(dateChoice.value != null && dateChoice.value != ""){
        result.date = true;
    }
    if(timeChoice.innerHTML != " 9:00-20:00" && timeChoice.innerHTML != null && timeChoice.innerHTML != ""){
        result.time = true;
    }
    if(result.adress && result.service &&  result.date && result.time) result.total = true;
    return result;
}

signInForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    formCheck()
    modal.style.display = "block";
    authorization.style.display = "block";
    if(result.total == false){
        formFinish.style.display = "none";
        formH.style.display = "block";
        formUl.style.display = "block";
    }
    else{
        formFinish.style.display = "block";
        formH.style.display = "none";
        formUl.style.display = "none";
    }
    if(result.adress == false)adressError.style.display = "block";
    else adressError.style.display = "none";

    if(result.service == false) serviceError.style.display = "block";
    else serviceError.style.display = "none";

    if(result.time == false) timeError.style.display = "block";
    else timeError.style.display = "none";

    if(result.date == false) dateError.style.display = "block";
    else dateError.style.display = "none";
});

btnclose.onclick=function(){
	modal.style.display = "none";
    if(result.total == true){
        let jsonResult = checkInButtonPress();
        console.log(jsonResult);
        console.log(JSON.parse(jsonResult));
        location.reload();
    }
}
