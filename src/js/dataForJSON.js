'use strict'
require("vitaiy2.js");

let adress = "1. Выберите адрес";
let serviceData = choiceInf;
let date = "3. Выберите дату";
let time = "4. Выберите время";
let name = "ФИО";
let phone = "88005553535";
let carModel = "Марка машины"
const data = {
    "adress": adress,
    "serviceData" : serviceData,
    "date": date,
    "time": time,
    "name": name,
    "phone": phone,
    "carModel": carModel
}
function checkInButtonPress(){
    JSON.stringify(data);
}

