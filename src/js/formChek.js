'use strict'
require("vitaiy2.js");

let adressCheck = false;
//let carTypeCheck == false; //есть дефолтное значение
let serviceCheck = false;
let dateCheck = false;
let timeCheck = false;
//let contactDataCheck = false // атрибут reqired на инпутах

function formCheck(){
    if (timeCheck != "" && dateCheck != "" && choiceInf.services.length > 0){
        serviceCheck = true;
        dateCheck = true;
        timeCheck = true;

    }

    //Добавить проверку adressCheck,dateCheck,timeCheck








    return(adressCheck && serviceCheck && dateCheck && timeCheck)
}