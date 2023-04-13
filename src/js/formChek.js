'use strict'
require("vitaiy2.js");

let adressCheck = false;
//let carTypeCheck == false; //есть дефолтное значение
let serviceCheck = false;
let dateCheck = false;
let timeCheck = false;
//let contactDataCheck = false // атрибут reqired на инпутах

function formCheck(){
    if (choiceInf.services.length > 0){
        serviceCheck = true;
    }

    //Добавить проверку adressCheck,dateCheck,timeCheck








    return(adressCheck && serviceCheck && dateCheck && timeCheck)
}